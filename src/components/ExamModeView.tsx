import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Award, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  RotateCcw, 
  FileText, 
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  PenTool,
  Send
} from 'lucide-react';
import { MockExam, StudentProfile, ExerciseQuestion } from '../types';
import { mockExamsList } from '../data/mockExams';
import { readingPassages } from '../data/readingPassages';
import { renderElementaryMath } from './Fraction';
import { WordProblemSolver } from './WordProblemSolver';
import { soundManager } from '../utils/audio';

interface ExamModeViewProps {
  profile: StudentProfile;
  onUpdateProfile: (updates: Partial<StudentProfile>) => void;
  onOpenCertificate: () => void;
}

export const ExamModeView: React.FC<ExamModeViewProps> = ({
  profile,
  onUpdateProfile,
  onOpenCertificate,
}) => {
  const [selectedExamId, setSelectedExamId] = useState<string>(mockExamsList[0].id);
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'math' | 'vietnamese'>('all');
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [essayText, setEssayText] = useState<Record<string, string>>({});
  const [showSampleEssay, setShowSampleEssay] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(40 * 60); // 40 minutes
  const [openPassageId, setOpenPassageId] = useState<string | null>(null);

  const activeExam = mockExamsList.find(e => e.id === selectedExamId) || mockExamsList[0];
  const filteredExams = mockExamsList.filter(e => subjectFilter === 'all' || e.subject === subjectFilter);

  // Timer countdown
  useEffect(() => {
    if (!isExamStarted || isSubmitted) return;
    if (timeLeft <= 0) {
      handleAutoSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamStarted, isSubmitted, timeLeft]);

  const handleStartExam = (examId: string) => {
    setSelectedExamId(examId);
    setAnswers({});
    setEssayText({});
    setShowSampleEssay({});
    setIsSubmitted(false);
    const chosen = mockExamsList.find(e => e.id === examId) || mockExamsList[0];
    setTimeLeft(chosen.durationMinutes * 60);
    setIsExamStarted(true);

    // Auto-open reading passage if exam has one
    const firstReadingQ = chosen.questions.find(q => q.readingPassageId);
    if (firstReadingQ && firstReadingQ.readingPassageId) {
      setOpenPassageId(firstReadingQ.readingPassageId);
    } else {
      setOpenPassageId(null);
    }
  };

  const handleSelectAnswer = (qId: string, val: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    // Calculate for auto-gradable questions
    const gradableQuestions = activeExam.questions.filter(q => !q.essayData);
    
    gradableQuestions.forEach(q => {
      const userAns = (answers[q.id] || '').trim().toLowerCase().replace(/\s+/g, '');
      if (q.type === 'multiple_choice') {
        if (answers[q.id] === q.correctOptionId) {
          correctCount++;
        }
      } else if (q.type === 'true_false' && q.tfItems) {
        const isTfCorrect = q.tfItems.every(item => {
          const userChoice = answers[`${q.id}_${item.id}`];
          const expected = item.isTrue ? 'true' : 'false';
          return userChoice === expected;
        });
        if (isTfCorrect) correctCount += 1;
      } else {
        const valids = Array.isArray(q.correctAnswer)
          ? q.correctAnswer.map(a => a.toLowerCase().replace(/\s+/g, ''))
          : [q.correctAnswer?.toLowerCase().replace(/\s+/g, '')];

        const isMatch = valids.some(ans => {
          if (!ans) return false;
          if (userAns === ans) return true;
          const uNum = parseFloat(userAns.replace(',', '.'));
          const aNum = parseFloat(ans.replace(',', '.'));
          return !isNaN(uNum) && !isNaN(aNum) && Math.abs(uNum - aNum) < 0.0001;
        });

        if (isMatch) correctCount++;
      }
    });

    // If essay has been written, award points
    const essayQ = activeExam.questions.find(q => q.essayData);
    if (essayQ) {
      const hasWrittenEssay = (essayText[essayQ.id] || '').trim().length > 50;
      if (hasWrittenEssay) correctCount += 1;
    }

    const totalGradables = activeExam.questions.length;
    const score = Number(((correctCount / totalGradables) * 10).toFixed(1));
    return { score, correctCount, total: totalGradables };
  };

  const handleAutoSubmit = () => {
    finishExam();
  };

  const finishExam = () => {
    setIsSubmitted(true);
    soundManager.playFanfare();
    const { score } = calculateScore();
    if (score >= 7) {
      onUpdateProfile({
        stars: profile.stars + 5,
        solvedCount: profile.solvedCount + activeExam.questions.length
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Find passage if needed
  const associatedPassage = openPassageId ? readingPassages.find(p => p.id === openPassageId) : null;

  // Exam Selection Screen
  if (!isExamStarted) {
    return (
      <div className="max-w-5xl mx-auto space-y-6 py-2">
        <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl shadow-xs">
            ⏱️
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Phòng Thi Thử Giữa Học Kì I – Đầy Đủ Cấu Trúc Đề Chuẩn
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Học sinh: <strong className="text-amber-900">{profile.name}</strong> {profile.schoolClass ? `(Lớp ${profile.schoolClass})` : ''} hãy lựa chọn đề thi để thử sức! Mỗi đề thi có thời lượng 40 phút và được chấm điểm, chữa bài chi tiết ngay sau khi nộp.
          </p>

          {/* Subject Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSubjectFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all border-2 ${
                subjectFilter === 'all'
                  ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              📚 Tất cả các đề ({mockExamsList.length})
            </button>
            <button
              onClick={() => setSubjectFilter('math')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all border-2 ${
                subjectFilter === 'math'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-blue-50/60 hover:bg-blue-100/70 text-blue-900 border-blue-200'
              }`}
            >
              📐 Môn Toán ({mockExamsList.filter(e => e.subject === 'math').length} đề)
            </button>
            <button
              onClick={() => setSubjectFilter('vietnamese')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all border-2 ${
                subjectFilter === 'vietnamese'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-emerald-50/60 hover:bg-emerald-100/70 text-emerald-900 border-emerald-200'
              }`}
            >
              📖 Môn Tiếng Việt ({mockExamsList.filter(e => e.subject === 'vietnamese').length} đề)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black px-3 py-1 rounded-full ${
                    exam.subject === 'math' ? 'bg-blue-100 text-blue-900' : 'bg-emerald-100 text-emerald-900'
                  }`}>
                    {exam.subject === 'math' ? '📐 Môn Toán' : '📖 Môn Tiếng Việt'}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {exam.durationMinutes} phút
                  </span>
                </div>

                <h3 className="font-black text-slate-900 text-lg leading-snug">
                  {exam.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {exam.description}
                </p>
                <div className="text-xs text-slate-700 font-bold bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  {exam.subject === 'math' 
                    ? '• Cấu trúc: Phần I. Trắc nghiệm (4 điểm) + Phần II. Tự luận (6 điểm)'
                    : '• Cấu trúc: A. Kiểm tra đọc (10 điểm) + B. Kiểm tra viết (10 điểm)'
                  }
                </div>
              </div>

              <button
                onClick={() => handleStartExam(exam.id)}
                className="w-full py-3.5 rounded-2xl text-sm font-black text-white bg-amber-500 hover:bg-amber-600 transition-all shadow-xs flex items-center justify-center gap-2 hover:scale-105"
              >
                <span>Bắt đầu làm bài thi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const { score, correctCount, total } = calculateScore();

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-2">
      {/* Sticky Exam Banner with Timer */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-3xl p-4 shadow-sm flex items-center justify-between gap-3">
        <div>
          <h3 className="font-black text-slate-900 text-base sm:text-lg truncate max-w-[240px] sm:max-w-md">
            {activeExam.title}
          </h3>
          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            Học sinh: <strong className="text-slate-800">{profile.name}</strong> • Đã làm: {Object.keys(answers).length}/{total} phần
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isSubmitted ? (
            <div className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-mono text-base font-black border-2 ${
              timeLeft < 300 ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse' : 'bg-amber-50 text-amber-900 border-amber-300'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          ) : (
            <div className="text-right">
              <span className="text-xs text-slate-500 font-bold block">Điểm bài thi:</span>
              <span className="text-3xl font-black text-rose-600 leading-none">{score}/10</span>
            </div>
          )}

          {!isSubmitted ? (
            <button
              onClick={finishExam}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-black rounded-2xl shadow-xs transition-colors hover:scale-105"
            >
              Nộp bài thi
            </button>
          ) : (
            <button
              onClick={() => setIsExamStarted(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold rounded-2xl transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chọn đề khác</span>
            </button>
          )}
        </div>
      </div>

      {/* Official Primary School Exam Paper Header (Tờ Giấy Thi Chuẩn Tiểu Học) */}
      <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-slate-200 pb-4 gap-4">
          <div>
            <div className="font-bold text-slate-700 text-sm uppercase tracking-wide">
              TRƯỜNG TIỂU HỌC NGUYỄN THỊ ĐỊNH
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
              Họ và tên: <span className="text-blue-900 underline underline-offset-4">{profile.name}</span>
            </div>
            <div className="text-sm font-bold text-slate-600">
              Lớp: <span className="text-blue-900">{profile.schoolClass}</span>
            </div>
          </div>

          <div className="sm:text-right">
            <div className="text-xs font-bold uppercase text-amber-800">
              ĐỀ KIỂM TRA ĐỊNH KỲ GIỮA HỌC KÌ I
            </div>
            <div className="text-xs text-slate-500 font-semibold">
              Năm học 2026 – 2027 • Thời gian: 40 phút
            </div>
          </div>
        </div>

        {/* Teacher score & comment box */}
        <div className="grid grid-cols-12 border-2 border-slate-300 rounded-2xl overflow-hidden text-center text-xs">
          <div className="col-span-4 border-r-2 border-slate-300 p-3 bg-slate-50">
            <div className="font-bold text-slate-600 mb-1">ĐIỂM SỐ</div>
            <div className="text-2xl font-black text-rose-600">
              {isSubmitted ? `${score}` : '...'}
            </div>
          </div>
          <div className="col-span-8 p-3 text-left bg-white">
            <div className="font-bold text-slate-600 mb-1">NHẬN XÉT CỦA GIÁO VIÊN</div>
            <div className="italic text-slate-500 text-xs sm:text-sm">
              {isSubmitted 
                ? (score >= 9 ? 'Em làm bài rất xuất sắc, trình bày bài giải sạch đẹp, câu văn hay!' : score >= 7 ? 'Em nắm vững kiến thức trọng tâm, tính toán cẩn thận.' : 'Cần chú ý đọc kĩ đề bài và rà soát lại các phép tính.')
                : 'Giáo viên chấm điểm và ghi lời phê tại đây...'}
            </div>
          </div>
        </div>
      </div>

      {/* READING PASSAGE COLLAPSIBLE (If exam has reading passage) */}
      {associatedPassage && (
        <div className="bg-white border-2 border-emerald-300 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-black text-emerald-900 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Văn Bản Đọc Hiểu: {associatedPassage.title}
            </span>
            <button
              onClick={() => setOpenPassageId(openPassageId ? null : associatedPassage.id)}
              className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-1.5 rounded-xl transition-colors flex items-center gap-1"
            >
              <span>{openPassageId ? 'Thu gọn bài đọc' : 'Mở xem bài đọc'}</span>
              {openPassageId ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {openPassageId && (
            <div className="p-4 sm:p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 font-serif text-base text-slate-800 leading-loose max-h-80 overflow-y-auto space-y-3">
              {associatedPassage.content.split('\n\n').map((para, i) => (
                <p key={i} className="indent-6">{para}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Submission Result Card */}
      {isSubmitted && (
        <div className="bg-gradient-to-tr from-amber-50 via-white to-amber-100 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-sm text-center space-y-4">
          <div className="text-5xl animate-bounce">
            {score >= 9 ? '👑' : score >= 7 ? '🌟' : '💪'}
          </div>
          <div>
            <h4 className="text-2xl font-black text-amber-950">
              {score >= 9 ? 'XUẤT SẮC TUYỆT VỜI!' : score >= 7 ? 'KẾT QUẢ RẤT TỐT!' : 'CỐ GẮNG HƠN Ở LẦN SAU NHÉ!'}
            </h4>
            <p className="text-base text-slate-700 mt-1 font-medium">
              Bạn <strong>{profile.name}</strong> đạt <strong className="text-rose-600 text-xl font-black">{score} điểm</strong> (Đúng {correctCount}/{total} phần).
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            {score >= 7 && (
              <button
                onClick={onOpenCertificate}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm rounded-2xl shadow-xs transition-all flex items-center gap-2 hover:scale-105"
              >
                <Award className="w-4 h-4" />
                <span>Nhận Giấy Khen Điểm 10</span>
              </button>
            )}
            <button
              onClick={() => handleStartExam(activeExam.id)}
              className="px-5 py-2.5 bg-white border-2 border-slate-300 text-slate-700 font-bold text-sm rounded-2xl hover:bg-slate-50 transition-colors"
            >
              Làm lại đề này
            </button>
          </div>
        </div>
      )}

      {/* Render Questions Grouped by Standard Exam Sections */}
      <div className="space-y-6">
        {activeExam.questions.map((q, idx) => {
          // Check if previous question had the same sectionTitle
          const prevQ = idx > 0 ? activeExam.questions[idx - 1] : null;
          const isNewSection = !prevQ || prevQ.sectionTitle !== q.sectionTitle;

          const userAns = answers[q.id] || '';
          let isQCorrect = false;

          if (isSubmitted) {
            if (q.type === 'multiple_choice') {
              isQCorrect = userAns === q.correctOptionId;
            } else if (q.type === 'true_false' && q.tfItems) {
              isQCorrect = q.tfItems.every(item => {
                const userChoice = answers[`${q.id}_${item.id}`];
                const expected = item.isTrue ? 'true' : 'false';
                return userChoice === expected;
              });
            } else if (q.essayData) {
              isQCorrect = (essayText[q.id] || '').trim().length > 30;
            } else {
              const valids = Array.isArray(q.correctAnswer)
                ? q.correctAnswer.map(a => a.toLowerCase().replace(/\s+/g, ''))
                : [q.correctAnswer?.toLowerCase().replace(/\s+/g, '')];
              const cleanUser = userAns.trim().toLowerCase().replace(/\s+/g, '');
              isQCorrect = valids.some(ans => {
                if (!ans) return false;
                if (cleanUser === ans) return true;
                const uNum = parseFloat(cleanUser.replace(',', '.'));
                const aNum = parseFloat(ans.replace(',', '.'));
                return !isNaN(uNum) && !isNaN(aNum) && Math.abs(uNum - aNum) < 0.0001;
              });
            }
          }

          return (
            <React.Fragment key={q.id}>
              {/* Prominent Section Header Divider */}
              {isNewSection && q.sectionTitle && (
                <div className="mt-8 mb-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white shadow-sm flex items-center justify-between">
                  <h4 className="font-black text-base sm:text-lg tracking-wide uppercase">
                    {q.sectionTitle}
                  </h4>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">
                    Tiêu chuẩn Bộ GD&ĐT
                  </span>
                </div>
              )}

              <div
                className={`bg-white border-2 rounded-3xl p-6 sm:p-7 shadow-xs transition-all ${
                  isSubmitted
                    ? isQCorrect
                      ? 'border-emerald-300 bg-emerald-50/20'
                      : 'border-rose-300 bg-rose-50/20'
                    : 'border-slate-200/90'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-black text-sm">
                      {q.questionNumberLabel || `Câu ${idx + 1}`}
                    </span>
                  </div>
                  {isSubmitted && (
                    <div>
                      {isQCorrect ? (
                        <span className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-emerald-600" /> Đúng
                        </span>
                      ) : (
                        <span className="text-xs sm:text-sm font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full flex items-center gap-1">
                          <XCircle className="w-4 h-4 text-rose-600" /> Chưa đúng
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Prompt with true fraction formatting and large text */}
                <div className="text-slate-900 font-bold text-lg sm:text-xl leading-relaxed mb-5 whitespace-pre-line">
                  {renderElementaryMath(q.prompt, 'lg')}
                </div>

                {/* 1. Multiple choice options */}
                {q.type === 'multiple_choice' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt) => {
                      const isSelected = userAns === opt.id;
                      let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

                      if (isSubmitted) {
                        if (opt.id === q.correctOptionId) {
                          style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300';
                        } else if (isSelected) {
                          style = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                        }
                      } else if (isSelected) {
                        style = 'bg-amber-100 border-amber-400 text-amber-950 font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          disabled={isSubmitted}
                          onClick={() => handleSelectAnswer(q.id, opt.id)}
                          className={`p-4 rounded-2xl border-2 text-left text-base sm:text-lg transition-all flex items-center justify-between ${style}`}
                        >
                          <span className="font-semibold">{renderElementaryMath(opt.text, 'base')}</span>
                          {isSelected && !isSubmitted && (
                            <div className="w-3 h-3 rounded-full bg-amber-600 shrink-0"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 2. Word Problem: Embedded full solver with Lời giải, Phép tính, Đáp số */}
                {q.type === 'word_problem' && (
                  <div className="my-4">
                    <WordProblemSolver
                      steps={q.wordProblemSteps}
                      finalAnswer={q.finalAnswer || (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer)}
                      standardSolution={q.explanation}
                      onCorrectSubmit={() => handleSelectAnswer(q.id, q.finalAnswer || 'done')}
                    />
                  </div>
                )}

                {/* 3. True / False sets */}
                {q.type === 'true_false' && q.tfItems && (
                  <div className="space-y-3 my-3">
                    {q.tfItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-base"
                      >
                        <span className="font-semibold text-slate-800 flex-1">{item.statement}</span>
                        <div className="flex items-center gap-2 shrink-0 flex-wrap">
                          <button
                            type="button"
                            disabled={isSubmitted}
                            onClick={() => handleSelectAnswer(`${q.id}_${item.id}`, 'true')}
                            className={`px-4 py-1.5 text-sm font-bold rounded-xl border-2 transition-all ${
                              answers[`${q.id}_${item.id}`] === 'true'
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : 'bg-white text-slate-700 border-slate-300'
                            }`}
                          >
                            Đúng (Đ)
                          </button>
                          <button
                            type="button"
                            disabled={isSubmitted}
                            onClick={() => handleSelectAnswer(`${q.id}_${item.id}`, 'false')}
                            className={`px-4 py-1.5 text-sm font-bold rounded-xl border-2 transition-all ${
                              answers[`${q.id}_${item.id}`] === 'false'
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-white text-slate-700 border-slate-300'
                            }`}
                          >
                            Sai (S)
                          </button>
                          {isSubmitted && (
                            <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                              answers[`${q.id}_${item.id}`] === (item.isTrue ? 'true' : 'false')
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-rose-100 text-rose-800 border border-rose-300'
                            }`}>
                              {answers[`${q.id}_${item.id}`] === (item.isTrue ? 'true' : 'false') ? '✓ Đúng' : `✗ Đáp án: ${item.isTrue ? 'Đ' : 'S'}`}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. Essay Writing Part (Tập làm văn) */}
                {q.essayData && (
                  <div className="my-4 space-y-4">
                    {/* Outline guide box */}
                    <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 text-sm text-slate-800 space-y-2">
                      <div className="font-black text-emerald-950 flex items-center gap-1.5">
                        <PenTool className="w-4 h-4 text-emerald-700" />
                        <span>Gợi ý lập dàn ý 3 phần của cô giáo:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs sm:text-sm">
                        {q.essayData.outlineGuide.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Lined Notebook Pad */}
                    <div className="border-2 border-slate-300 rounded-2xl overflow-hidden shadow-inner">
                      <div className="bg-slate-100 px-4 py-2 border-b border-slate-300 text-xs font-bold text-slate-700 flex items-center justify-between">
                        <span>Trang vở viết Tập làm văn (15 – 20 câu)</span>
                        <span className="italic font-serif text-slate-500">Bài làm</span>
                      </div>
                      <textarea
                        rows={10}
                        disabled={isSubmitted}
                        value={essayText[q.id] || ''}
                        onChange={(e) => {
                          setEssayText(prev => ({ ...prev, [q.id]: e.target.value }));
                          handleSelectAnswer(q.id, 'essay_done');
                        }}
                        placeholder="Bài làm&#10;....................................................................................&#10;...................................................................................."
                        className="w-full p-4 text-base font-serif notebook-ruled focus:outline-none resize-y text-slate-800 leading-loose"
                      />
                    </div>

                    {/* Button to view model essay */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setShowSampleEssay(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                        className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 underline decoration-emerald-400 underline-offset-4"
                      >
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>{showSampleEssay[q.id] ? 'Ẩn bài văn mẫu' : 'Xem bài văn mẫu tham khảo đạt điểm 10'}</span>
                      </button>

                      {showSampleEssay[q.id] && (
                        <div className="mt-3 p-5 rounded-2xl bg-white border-2 border-emerald-300 font-serif text-base text-slate-800 leading-loose space-y-2 shadow-xs">
                          <div className="font-bold text-emerald-950 border-b border-emerald-100 pb-2">
                            Bài văn mẫu: {q.essayData.topicTitle}
                          </div>
                          <p className="indent-6 text-slate-800">{q.essayData.sampleEssay}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 5. Fill blank input */}
                {q.type === 'fill_blank' && !q.essayData && (
                  <div className="my-3 flex items-center gap-3">
                    <input
                      type="text"
                      disabled={isSubmitted}
                      value={userAns}
                      onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                      placeholder="Nhập câu trả lời hoặc số thích hợp..."
                      className="w-full sm:w-96 px-4 py-3 text-base sm:text-lg rounded-2xl border-2 border-slate-300 font-bold focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                    {q.unit && <span className="text-sm font-bold text-slate-500">{q.unit}</span>}
                  </div>
                )}

                {/* Show explanation after submission */}
                {isSubmitted && (
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line font-serif">
                    <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Lời giải chi tiết chuẩn Tiểu học:</span>
                    </div>
                    {renderElementaryMath(q.explanation, 'base')}
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {!isSubmitted && (
        <div className="text-center py-6">
          <button
            onClick={finishExam}
            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base rounded-2xl shadow-md transition-all hover:scale-105"
          >
            Hoàn thành & Nộp bài thi
          </button>
        </div>
      )}
    </div>
  );
};

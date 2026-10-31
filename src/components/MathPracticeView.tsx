import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, XCircle, Lightbulb, HelpCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { ExerciseQuestion, StudentProfile } from '../types';
import { 
  generateDecimalReadingWriting, 
  generateDecimalCompareAndRound, 
  generateAreaAndUnits, 
  generateVerticalMathProblem, 
  generateConvenientMath, 
  generateWordProblem 
} from '../utils/mathGenerator';
import { VerticalMathViewer } from './VerticalMathViewer';
import { MascotEncouragement } from './MascotEncouragement';
import { WordProblemSolver } from './WordProblemSolver';
import { renderElementaryMath } from './Fraction';
import { soundManager } from '../utils/audio';

interface MathPracticeViewProps {
  profile: StudentProfile;
  onUpdateProfile: (updates: Partial<StudentProfile>) => void;
}

const TOPICS = [
  { id: 'top-1', label: '1. Phân số & Số thập phân', generator: generateDecimalReadingWriting, icon: '🔢' },
  { id: 'top-2', label: '2. So sánh & Làm tròn', generator: generateDecimalCompareAndRound, icon: '⚖️' },
  { id: 'top-3', label: '3. Đơn vị đo diện tích & khối lượng', generator: generateAreaAndUnits, icon: '📐' },
  { id: 'top-4', label: '4. Đặt tính rồi tính (Nhân - Chia - Cộng - Trừ)', generator: () => generateVerticalMathProblem(), icon: '✏️' },
  { id: 'top-5', label: '5. Tính thuận tiện nhất', generator: generateConvenientMath, icon: '⚡' },
  { id: 'top-6', label: '6. Giải toán có lời văn', generator: generateWordProblem, icon: '📝' },
];

export const MathPracticeView: React.FC<MathPracticeViewProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState('top-1');
  const [currentQuestion, setCurrentQuestion] = useState<ExerciseQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [mascotStatus, setMascotStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Load a question when topic changes or user requests new numbers
  const loadNewQuestion = () => {
    const topic = TOPICS.find(t => t.id === selectedTopicId) || TOPICS[0];
    const q = topic.generator();
    setCurrentQuestion(q);
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
    setMascotStatus('idle');
  };

  useEffect(() => {
    loadNewQuestion();
  }, [selectedTopicId]);

  if (!currentQuestion) return null;

  const handleSubmit = (chosenOptionId?: string) => {
    if (isSubmitted) return;

    let correct = false;

    if (currentQuestion.type === 'multiple_choice') {
      const selected = chosenOptionId || userAnswer;
      correct = selected === currentQuestion.correctOptionId;
      setUserAnswer(selected);
    } else {
      // Fill blank or numeric answer
      const cleanUser = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
      const validAnswers = Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer.map(a => a.toLowerCase().replace(/\s+/g, ''))
        : [currentQuestion.correctAnswer?.toLowerCase().replace(/\s+/g, '')];

      correct = validAnswers.some(ans => {
        if (!ans) return false;
        if (cleanUser === ans) return true;
        const uNum = parseFloat(cleanUser.replace(',', '.'));
        const aNum = parseFloat(ans.replace(',', '.'));
        return !isNaN(uNum) && !isNaN(aNum) && Math.abs(uNum - aNum) < 0.0001;
      });
    }

    setIsSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      soundManager.playCorrect();
      setMascotStatus('correct');
      const newStreak = profile.streak + 1;
      const newStars = profile.stars + 1;
      onUpdateProfile({
        stars: newStars,
        streak: newStreak,
        solvedCount: profile.solvedCount + 1
      });
    } else {
      soundManager.playEncourage();
      setMascotStatus('wrong');
      onUpdateProfile({
        streak: 0
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5 py-2">
      {/* Topic selection tabs */}
      <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs sm:text-sm font-black text-slate-600 uppercase tracking-wider">
            Các Dạng Bài Tập Trọng Tâm – Toán Lớp 5
          </span>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            Giữa Học Kì I
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {TOPICS.map((topic) => {
            const isActive = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`flex items-center gap-2 p-3 rounded-2xl text-left text-xs sm:text-sm font-bold transition-all border-2 ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-slate-50/80 hover:bg-blue-50 text-slate-700 border-slate-200 hover:border-blue-300'
                }`}
              >
                <span className="text-xl">{topic.icon}</span>
                <span className="truncate">{topic.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mascot encouragement header */}
      <MascotEncouragement
        studentName={profile.name}
        status={mascotStatus}
        streak={profile.streak}
      />

      {/* Main Question Card */}
      <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs relative">
        {/* Card Header & Dynamic Change Button */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black px-3 py-1 rounded-xl bg-blue-100 text-blue-900">
              {currentQuestion.title || 'Bài tập rèn luyện'}
            </span>
          </div>

          <button
            onClick={loadNewQuestion}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-xs"
            title="Đổi bài mới với các số liệu tương tự để luyện tập không giới hạn"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Đổi bài mới (Đổi số)</span>
          </button>
        </div>

        {/* Question Prompt with true primary fraction rendering */}
        <div className="text-slate-900 font-bold text-lg sm:text-xl leading-relaxed mb-6 whitespace-pre-line">
          {renderElementaryMath(currentQuestion.prompt, 'lg')}
        </div>

        {/* Vertical Math Preview if applicable */}
        {currentQuestion.verticalMath && (
          <div className="my-4">
            <VerticalMathViewer
              data={currentQuestion.verticalMath}
              showExplanation={isSubmitted}
            />
          </div>
        )}

        {/* WORD PROBLEM: Guided or Freeform solution submission */}
        {currentQuestion.type === 'word_problem' ? (
          <WordProblemSolver
            steps={currentQuestion.wordProblemSteps}
            finalAnswer={currentQuestion.finalAnswer || (Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer[0] : currentQuestion.correctAnswer)}
            standardSolution={currentQuestion.explanation}
            onCorrectSubmit={() => {
              setIsSubmitted(true);
              setIsCorrect(true);
              soundManager.playCorrect();
              setMascotStatus('correct');
              onUpdateProfile({
                stars: profile.stars + 2,
                solvedCount: profile.solvedCount + 1
              });
            }}
          />
        ) : (
          <>
            {/* Multiple choice options */}
            {currentQuestion.type === 'multiple_choice' && currentQuestion.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentQuestion.options.map((opt) => {
                  const isSelected = userAnswer === opt.id;
                  let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-blue-50 hover:border-blue-300';

                  if (isSubmitted) {
                    if (opt.id === currentQuestion.correctOptionId) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                    } else {
                      btnStyle = 'bg-slate-50/50 border-slate-200 text-slate-400';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-2 ring-blue-300';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isSubmitted}
                      onClick={() => handleSubmit(opt.id)}
                      className={`p-4 rounded-2xl border-2 text-left text-base sm:text-lg transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span className="font-semibold">
                        {renderElementaryMath(opt.text, 'base')}
                      </span>
                      {isSubmitted && opt.id === currentQuestion.correctOptionId && (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isSubmitted && isSelected && opt.id !== currentQuestion.correctOptionId && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Fill Blank / Text Input */}
            {currentQuestion.type !== 'multiple_choice' && (
              <div className="mb-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                >
                  <div className="relative flex-1">
                    <input
                      type="text"
                      disabled={isSubmitted}
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Nhập câu trả lời của em vào đây..."
                      className={`w-full px-4 py-3.5 text-lg rounded-2xl border-2 font-bold text-slate-800 transition-all ${
                        isSubmitted
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50/50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50/50 text-rose-900'
                          : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {currentQuestion.unit && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                        {currentQuestion.unit}
                      </span>
                    )}
                  </div>

                  {!isSubmitted ? (
                    <button
                      type="submit"
                      disabled={!userAnswer.trim()}
                      className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black text-base rounded-2xl shadow-xs transition-all hover:scale-105 whitespace-nowrap"
                    >
                      Kiểm tra đáp án
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={loadNewQuestion}
                      className="px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-base rounded-2xl shadow-xs transition-all hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>Luyện câu tiếp theo</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </form>
              </div>
            )}
          </>
        )}

        {/* Hint toggle */}
        {currentQuestion.hint && !isSubmitted && currentQuestion.type !== 'word_problem' && (
          <div className="mt-3">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1.5"
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý của thầy cô'}</span>
            </button>
            {showHint && (
              <div className="mt-2 text-xs sm:text-sm bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-amber-950 leading-relaxed">
                💡 <strong>Gợi ý:</strong> {renderElementaryMath(currentQuestion.hint, 'base')}
              </div>
            )}
          </div>
        )}

        {/* Detailed Feedback & Pedagogical Explanation */}
        {isSubmitted && currentQuestion.type !== 'word_problem' && (
          <div className={`mt-6 p-5 sm:p-6 rounded-3xl border-2 transition-all ${
            isCorrect ? 'bg-emerald-50/70 border-emerald-300' : 'bg-amber-50/80 border-amber-300'
          }`}>
            <div className="flex items-center gap-2 mb-3 font-black text-base">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-emerald-950">CHÍNH XÁC! Chúc mừng bạn {profile.name || 'học sinh'}!</span>
                  <span className="ml-auto text-xs bg-emerald-200 text-emerald-900 px-3 py-1 rounded-full font-bold">
                    +1 ⭐
                  </span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-6 h-6 text-amber-600" />
                  <span className="text-amber-900">CÂU TRẢ LỜI CHƯA ĐÚNG. CÙNG XEM CÁCH GIẢI NHÉ!</span>
                </>
              )}
            </div>

            {/* Explanation body */}
            <div className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line bg-white/95 p-4 rounded-2xl border border-slate-200">
              <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Lời giải chi tiết chuẩn mực:</span>
              </div>
              {renderElementaryMath(currentQuestion.explanation, 'base')}
            </div>

            {/* Common Mistake warning */}
            {currentQuestion.commonMistake && (
              <div className="mt-3 text-xs sm:text-sm bg-rose-50 border border-rose-200 rounded-xl p-3 text-rose-900">
                ⚠️ <strong>Lỗi học sinh thường mắc phải:</strong> {renderElementaryMath(currentQuestion.commonMistake, 'base')}
              </div>
            )}

            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={loadNewQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-black rounded-xl shadow-xs transition-colors hover:scale-105"
              >
                <span>Làm câu tiếp theo với số mới</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, FileText, Sparkles, HelpCircle, PenTool, ArrowRight, Eye, ChevronRight } from 'lucide-react';
import { StudentProfile, ExerciseQuestion } from '../types';
import { readingPassages } from '../data/readingPassages';
import { 
  vietnamesePronounQuestions, 
  vietnameseWordMeaningQuestions, 
  vietnameseReadingQuestionsThacYAly,
  vietnameseReadingQuestionsCayLaDo,
  vietnameseReadingQuestionsDoiChe
} from '../data/vietnameseQuestions';
import { MascotEncouragement } from './MascotEncouragement';
import { SentenceBuilderPractice } from './SentenceBuilderPractice';
import { EssayGuideView } from './EssayGuideView';
import { soundManager } from '../utils/audio';

interface VietnamesePracticeViewProps {
  profile: StudentProfile;
  onUpdateProfile: (updates: Partial<StudentProfile>) => void;
}

export const VietnamesePracticeView: React.FC<VietnamesePracticeViewProps> = ({
  profile,
  onUpdateProfile
}) => {
  const [activeCategory, setActiveCategory] = useState<'reading' | 'pronoun' | 'word_meaning' | 'sentence' | 'essay'>('reading');
  const [selectedPassageId, setSelectedPassageId] = useState<string>('som-mai-doi-che');
  
  // Active questions pool
  const getQuestions = (): ExerciseQuestion[] => {
    if (activeCategory === 'pronoun') return vietnamesePronounQuestions;
    if (activeCategory === 'word_meaning') return vietnameseWordMeaningQuestions;
    if (selectedPassageId === 'thac-y-a-ly') return vietnameseReadingQuestionsThacYAly;
    if (selectedPassageId === 'cay-la-do') return vietnameseReadingQuestionsCayLaDo;
    return vietnameseReadingQuestionsDoiChe;
  };

  const questions = getQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQ = questions[currentIndex] || questions[0];

  const [userSelected, setUserSelected] = useState<string>('');
  const [textAnswer, setTextAnswer] = useState<string>('');
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [mascotStatus, setMascotStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Active reading passage
  const currentPassage = readingPassages.find(p => p.id === selectedPassageId) || readingPassages[0];

  const resetQuestionState = () => {
    setUserSelected('');
    setTextAnswer('');
    setTfAnswers({});
    setIsSubmitted(false);
    setIsCorrect(false);
    setMascotStatus('idle');
  };

  const handleNextQuestion = () => {
    resetQuestionState();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleSubmit = (optionId?: string) => {
    if (isSubmitted) return;

    let correct = false;

    if (currentQ.type === 'multiple_choice') {
      const chosen = optionId || userSelected;
      correct = chosen === currentQ.correctOptionId;
      setUserSelected(chosen);
    } else if (currentQ.type === 'fill_blank') {
      const cleanUser = textAnswer.trim().toLowerCase();
      const valid = Array.isArray(currentQ.correctAnswer)
        ? currentQ.correctAnswer.map(a => a.toLowerCase().trim())
        : [currentQ.correctAnswer?.toLowerCase().trim()];
      correct = valid.includes(cleanUser);
    } else if (currentQ.type === 'true_false' && currentQ.tfItems) {
      correct = currentQ.tfItems.every(item => tfAnswers[item.id] === item.isTrue);
    }

    setIsSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      soundManager.playCorrect();
      setMascotStatus('correct');
      onUpdateProfile({
        stars: profile.stars + 1,
        streak: profile.streak + 1,
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
    <div className="max-w-5xl mx-auto space-y-6 py-2">
      {/* Category selector */}
      <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs sm:text-sm font-black text-slate-600 uppercase tracking-wider">
            Phân Môn Ôn Tập Tiếng Việt Lớp 5 – Giữa Học Kì I
          </span>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Đầy đủ chuyên đề
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          <button
            onClick={() => {
              setActiveCategory('reading');
              resetQuestionState();
              setCurrentIndex(0);
            }}
            className={`p-3 rounded-2xl text-left text-xs sm:text-sm font-bold border-2 transition-all ${
              activeCategory === 'reading'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="text-xl mb-1">📖</div>
            <div className="font-extrabold">Luyện Đọc Hiểu</div>
          </button>

          <button
            onClick={() => {
              setActiveCategory('pronoun');
              resetQuestionState();
              setCurrentIndex(0);
            }}
            className={`p-3 rounded-2xl text-left text-xs sm:text-sm font-bold border-2 transition-all ${
              activeCategory === 'pronoun'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="text-xl mb-1">🗣️</div>
            <div className="font-extrabold">Chuyên Đề Đại Từ</div>
          </button>

          <button
            onClick={() => {
              setActiveCategory('word_meaning');
              resetQuestionState();
              setCurrentIndex(0);
            }}
            className={`p-3 rounded-2xl text-left text-xs sm:text-sm font-bold border-2 transition-all ${
              activeCategory === 'word_meaning'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="text-xl mb-1">🌿</div>
            <div className="font-extrabold">Từ Nhiều Nghĩa</div>
          </button>

          <button
            onClick={() => {
              setActiveCategory('sentence');
              resetQuestionState();
            }}
            className={`p-3 rounded-2xl text-left text-xs sm:text-sm font-bold border-2 transition-all ${
              activeCategory === 'sentence'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="text-xl mb-1">✏️</div>
            <div className="font-extrabold">Rèn Cách Đặt Câu</div>
          </button>

          <button
            onClick={() => {
              setActiveCategory('essay');
              resetQuestionState();
            }}
            className={`p-3 rounded-2xl text-left text-xs sm:text-sm font-bold border-2 transition-all col-span-2 sm:col-span-1 ${
              activeCategory === 'essay'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="text-xl mb-1">🌟</div>
            <div className="font-extrabold">Dàn Ý & Văn Mẫu (Điểm 10)</div>
          </button>
        </div>
      </div>

      {/* Mascot cheer */}
      <MascotEncouragement
        studentName={profile.name}
        status={mascotStatus}
        streak={profile.streak}
      />

      {/* 1. SENTENCE WRITING MODE */}
      {activeCategory === 'sentence' && (
        <SentenceBuilderPractice
          studentName={profile.name}
          onSuccess={() => {
            onUpdateProfile({
              stars: profile.stars + 1,
              streak: profile.streak + 1,
              solvedCount: profile.solvedCount + 1
            });
          }}
        />
      )}

      {/* 2. ESSAY OUTLINE MODE */}
      {activeCategory === 'essay' && (
        <EssayGuideView
          studentName={profile.name}
          onUpdateStars={() => {
            onUpdateProfile({
              stars: profile.stars + 2,
              solvedCount: profile.solvedCount + 1
            });
          }}
        />
      )}

      {/* 3. READING & GRAMMAR PRACTICE */}
      {activeCategory !== 'essay' && activeCategory !== 'sentence' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left panel: PASSAGE READING (Always available in reading mode) */}
          {activeCategory === 'reading' && (
            <div className="lg:col-span-5 bg-white border-2 border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span className="text-xs sm:text-sm font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Bài Đọc Cho Học Sinh
                </span>
                <select
                  value={selectedPassageId}
                  onChange={(e) => {
                    setSelectedPassageId(e.target.value);
                    resetQuestionState();
                    setCurrentIndex(0);
                  }}
                  className="text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-50 border border-emerald-300 rounded-xl px-3 py-1.5 focus:outline-none"
                >
                  {readingPassages.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-lg">{currentPassage.title}</h4>
                {currentPassage.author && (
                  <div className="text-xs text-slate-400 font-medium italic mb-2">
                    {currentPassage.author}
                  </div>
                )}
                {/* Passage content with larger readable font */}
                <div className="text-sm sm:text-base text-slate-800 leading-loose space-y-3 max-h-[500px] overflow-y-auto pr-2 bg-slate-50/70 p-4 rounded-2xl border border-slate-200 font-serif">
                  {currentPassage.content.split('\n\n').map((para, i) => (
                    <p key={i} className="indent-6">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Right panel: Questions & Exercises */}
          <div className={`${activeCategory === 'reading' ? 'lg:col-span-7' : 'lg:col-span-12'} bg-white border-2 border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-5`}>
            {/* Header with question counter */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900">
                  Câu hỏi {currentIndex + 1}/{questions.length}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-500 font-semibold">{currentQ.title}</span>
              </div>
              <button
                onClick={handleNextQuestion}
                className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Question prompt (Large font) */}
            <div className="text-slate-900 font-bold text-lg sm:text-xl leading-relaxed whitespace-pre-line">
              {currentQ.prompt}
            </div>

            {/* Multiple Choice options */}
            {currentQ.type === 'multiple_choice' && currentQ.options && (
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = userSelected === opt.id;
                  let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-emerald-50/70 hover:border-emerald-300';

                  if (isSubmitted) {
                    if (opt.id === currentQ.correctOptionId) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400';
                    } else if (isSelected) {
                      style = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                    } else {
                      style = 'bg-slate-50/50 border-slate-200 text-slate-400';
                    }
                  } else if (isSelected) {
                    style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isSubmitted}
                      onClick={() => handleSubmit(opt.id)}
                      className={`w-full p-4 rounded-2xl border-2 text-left text-base sm:text-lg transition-all flex items-center justify-between ${style}`}
                    >
                      <span className="font-semibold">{opt.text}</span>
                      {isSubmitted && opt.id === currentQ.correctOptionId && (
                        <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                      )}
                      {isSubmitted && isSelected && opt.id !== currentQ.correctOptionId && (
                        <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Fill in blank */}
            {currentQ.type === 'fill_blank' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="flex items-center gap-3"
              >
                <input
                  type="text"
                  disabled={isSubmitted}
                  value={textAnswer}
                  onChange={(e) => setTextAnswer(e.target.value)}
                  placeholder="Điền từ thích hợp vào đây..."
                  className="flex-1 px-4 py-3.5 text-base sm:text-lg rounded-2xl border-2 border-slate-300 font-bold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
                {!isSubmitted ? (
                  <button
                    type="submit"
                    disabled={!textAnswer.trim()}
                    className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base rounded-2xl shadow-xs transition-colors"
                  >
                    Kiểm tra
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-base rounded-2xl shadow-xs transition-colors"
                  >
                    Tiếp tục
                  </button>
                )}
              </form>
            )}

            {/* True / False list */}
            {currentQ.type === 'true_false' && currentQ.tfItems && (
              <div className="space-y-3">
                {currentQ.tfItems.map((item) => {
                  const currentChoice = tfAnswers[item.id];
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <span className="text-sm sm:text-base text-slate-800 font-semibold">{item.statement}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => setTfAnswers({ ...tfAnswers, [item.id]: true })}
                          className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-xl border-2 transition-all ${
                            currentChoice === true
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          Đúng (Đ)
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => setTfAnswers({ ...tfAnswers, [item.id]: false })}
                          className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-xl border-2 transition-all ${
                            currentChoice === false
                              ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          Sai (S)
                        </button>
                      </div>
                    </div>
                  );
                })}
                {!isSubmitted && (
                  <button
                    onClick={() => handleSubmit()}
                    className="w-full mt-3 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base rounded-2xl shadow-xs transition-colors"
                  >
                    Kiểm tra các nhận định
                  </button>
                )}
              </div>
            )}

            {/* Explanation box */}
            {isSubmitted && (
              <div className={`mt-5 p-5 rounded-3xl border-2 ${
                isCorrect ? 'bg-emerald-50/80 border-emerald-300' : 'bg-amber-50/80 border-amber-300'
              }`}>
                <div className="flex items-center gap-2 mb-2 font-black text-base">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                      <span className="text-emerald-950">CHÍNH XÁC! Bạn {profile.name || 'học sinh'} nắm bài rất tốt!</span>
                      <span className="ml-auto text-xs bg-emerald-200 text-emerald-900 px-3 py-1 rounded-full font-bold">
                        +1 ⭐
                      </span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-6 h-6 text-amber-600" />
                      <span className="text-amber-900">CHƯA CHÍNH XÁC. HÃY ĐỌC GIẢI THÍCH NHÉ!</span>
                    </>
                  )}
                </div>

                <div className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line bg-white/95 p-4 rounded-2xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">📖 Giải thích & Căn cứ bài đọc:</div>
                  {currentQ.explanation}
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-black rounded-xl shadow-xs transition-colors"
                  >
                    <span>Làm câu tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

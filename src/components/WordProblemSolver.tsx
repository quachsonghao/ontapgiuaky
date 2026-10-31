import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Eye, Sparkles, BookOpen, PenLine } from 'lucide-react';
import { renderElementaryMath } from './Fraction';

interface WordProblemStep {
  stepPrompt: string;
  correctFormula: string;
  correctResult: string;
  unit: string;
}

interface WordProblemSolverProps {
  steps?: WordProblemStep[];
  finalAnswer?: string;
  standardSolution: string;
  onCorrectSubmit: () => void;
}

export const WordProblemSolver: React.FC<WordProblemSolverProps> = ({
  steps = [],
  finalAnswer,
  standardSolution,
  onCorrectSubmit
}) => {
  const [mode, setMode] = useState<'guided' | 'freeform'>('guided');
  const [stepInputs, setStepInputs] = useState<Record<number, { statement: string; calculation: string; result: string }>>({});
  const [freeformText, setFreeformText] = useState('');
  const [showTeacherSolution, setShowTeacherSolution] = useState(false);
  const [evaluation, setEvaluation] = useState<{ checked: boolean; isCorrect: boolean; feedback: string } | null>(null);

  const handleStepChange = (index: number, field: 'statement' | 'calculation' | 'result', value: string) => {
    setStepInputs(prev => ({
      ...prev,
      [index]: {
        statement: prev[index]?.statement || '',
        calculation: prev[index]?.calculation || '',
        result: prev[index]?.result || '',
        [field]: value
      }
    }));
  };

  const handleCheckGuided = () => {
    // Check if the results match the required results
    let allStepsCorrect = true;
    for (let i = 0; i < steps.length; i++) {
      const userRes = (stepInputs[i]?.result || '').trim().replace(/\s+/g, '');
      const correctRes = steps[i].correctResult.trim().replace(/\s+/g, '');
      const userNum = parseFloat(userRes.replace(',', '.'));
      const correctNum = parseFloat(correctRes.replace(',', '.'));

      const isMatch = (userRes === correctRes) || (!isNaN(userNum) && !isNaN(correctNum) && Math.abs(userNum - correctNum) < 0.001);
      if (!isMatch) {
        allStepsCorrect = false;
        break;
      }
    }

    if (allStepsCorrect) {
      setEvaluation({
        checked: true,
        isCorrect: true,
        feedback: 'Xuất sắc! Em đã trình bày đúng các bước giải và tính toán chính xác!'
      });
      setShowTeacherSolution(true);
      onCorrectSubmit();
    } else {
      setEvaluation({
        checked: true,
        isCorrect: false,
        feedback: 'Có bước tính chưa đúng kết quả. Em hãy kiểm tra lại phép tính của từng bước nhé!'
      });
    }
  };

  const handleCheckFreeform = () => {
    // Check if freeform text contains final answer
    const cleanText = freeformText.replace(/\s+/g, '').toLowerCase();
    const cleanFinal = (finalAnswer || '').replace(/\s+/g, '').toLowerCase();

    if (cleanFinal && cleanText.includes(cleanFinal)) {
      setEvaluation({
        checked: true,
        isCorrect: true,
        feedback: 'Bài giải của em đã có đáp số đúng! Hãy xem bài giải chuẩn của cô để rèn thêm câu chữ nhé!'
      });
      setShowTeacherSolution(true);
      onCorrectSubmit();
    } else {
      setEvaluation({
        checked: true,
        isCorrect: false,
        feedback: 'Em đã viết bài giải rất cố gắng, nhưng đáp số chưa khớp với kết quả đúng. Em xem bài giải mẫu để đối chiếu nhé!'
      });
    }
  };

  return (
    <div className="bg-amber-50/40 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
      {/* Mode switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg font-bold shadow-xs">
            📝
          </span>
          <div>
            <h4 className="font-black text-slate-900 text-base sm:text-lg">
              Trình Bày Lời Giải Chuẩn Tiểu Học
            </h4>
            <p className="text-xs text-slate-500">
              Gồm: Lời giải rõ ràng → Phép tính (đơn vị) → Đáp số
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-white border border-amber-200 rounded-xl">
          <button
            type="button"
            onClick={() => setMode('guided')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === 'guided'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-amber-800'
            }`}
          >
            Hướng dẫn từng bước
          </button>
          <button
            type="button"
            onClick={() => setMode('freeform')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === 'freeform'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-amber-800'
            }`}
          >
            Tự viết vào vở ô ly
          </button>
        </div>
      </div>

      {/* Guided Mode */}
      {mode === 'guided' && (
        <div className="space-y-4">
          <div className="text-xs text-amber-900 font-bold bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
            💡 Em hãy điền câu lời giải và kết quả cho từng bước dưới đây:
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-amber-200 rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-black">
                  {idx + 1}
                </span>
                <span>{step.stepPrompt}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                {/* Statement */}
                <div className="sm:col-span-8">
                  <input
                    type="text"
                    value={stepInputs[idx]?.statement || ''}
                    onChange={(e) => handleStepChange(idx, 'statement', e.target.value)}
                    placeholder="Viết câu lời giải (ví dụ: Buổi sáng cửa hàng bán được là:)"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 font-medium focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                  />
                </div>

                {/* Number Result */}
                <div className="sm:col-span-4 flex items-center gap-2">
                  <input
                    type="text"
                    value={stepInputs[idx]?.result || ''}
                    onChange={(e) => handleStepChange(idx, 'result', e.target.value)}
                    placeholder="Kết quả..."
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 font-bold text-center text-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">
                    ({step.unit})
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleCheckGuided}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-xs transition-all hover:scale-105"
            >
              Chấm bài giải của em
            </button>
          </div>
        </div>
      )}

      {/* Freeform Notebook Writing Mode */}
      {mode === 'freeform' && (
        <div className="space-y-3">
          <div className="text-xs text-amber-900 font-bold bg-amber-100/70 p-2.5 rounded-xl border border-amber-200">
            ✍️ Em hãy gõ toàn bộ bài giải vào trang vở bên dưới giống như khi làm bài kiểm tra trên lớp:
          </div>

          <div className="relative border-2 border-amber-300 rounded-2xl overflow-hidden shadow-inner">
            <div className="bg-amber-100/80 px-4 py-2 border-b border-amber-300 text-xs font-bold text-amber-950 flex items-center justify-between">
              <span>Trang vở ô ly học sinh</span>
              <span className="font-serif italic text-amber-800">Bài giải</span>
            </div>
            <textarea
              rows={8}
              value={freeformText}
              onChange={(e) => setFreeformText(e.target.value)}
              placeholder="Bài giải&#10;....................................................................................&#10;....................................................................................&#10;Đáp số: ......................................................................."
              className="w-full p-4 text-base font-serif notebook-ruled focus:outline-none resize-y text-slate-800"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleCheckFreeform}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-xs transition-all hover:scale-105"
            >
              Nộp bài giải
            </button>
          </div>
        </div>
      )}

      {/* Evaluation Feedback */}
      {evaluation && evaluation.checked && (
        <div className={`p-4 rounded-2xl border transition-all ${
          evaluation.isCorrect ? 'bg-emerald-50 border-emerald-300' : 'bg-sky-50 border-sky-300'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            {evaluation.isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-sky-600" />
            )}
            <span className={`text-sm font-black ${evaluation.isCorrect ? 'text-emerald-950' : 'text-sky-950'}`}>
              {evaluation.feedback}
            </span>
          </div>
        </div>
      )}

      {/* Toggle View Standard Solution */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowTeacherSolution(!showTeacherSolution)}
          className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1.5 underline decoration-amber-400 underline-offset-4"
        >
          <Eye className="w-4 h-4" />
          <span>{showTeacherSolution ? 'Ẩn bài giải mẫu' : 'Xem bài giải mẫu chuẩn Tiểu học của cô giáo'}</span>
        </button>

        {showTeacherSolution && (
          <div className="mt-3 p-5 rounded-2xl bg-white border-2 border-emerald-300 text-slate-800 text-sm leading-relaxed shadow-sm font-serif">
            <div className="font-bold text-emerald-900 border-b border-emerald-100 pb-2 mb-3 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Bài giải mẫu chuẩn của cô giáo:</span>
            </div>
            <div className="whitespace-pre-line text-base leading-loose">
              {renderElementaryMath(standardSolution, 'base')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BookOpen, Search, Lightbulb, Compass, Award, Bookmark } from 'lucide-react';
import { mathTheoryList, vietnameseTheoryList } from '../data/theoryData';
import { SubjectType } from '../types';
import { renderElementaryMath } from './Fraction';

export const TheoryView: React.FC = () => {
  const [subject, setSubject] = useState<SubjectType>('math');
  const [searchQuery, setSearchQuery] = useState('');

  const currentList = subject === 'math' ? mathTheoryList : vietnameseTheoryList;

  const filtered = currentList.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.bullets.some(b => b.heading.toLowerCase().includes(q) || b.content.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-2">
      {/* Top Controller */}
      <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Subject toggle */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setSubject('math')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
              subject === 'math'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            📐 Lí thuyết Toán 5
          </button>
          <button
            onClick={() => setSubject('vietnamese')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
              subject === 'vietnamese'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-emerald-600'
            }`}
          >
            📖 Lí thuyết Tiếng Việt 5
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tra cứu công thức, quy tắc..."
            className="w-full sm:w-72 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 font-medium"
          />
        </div>
      </div>

      {/* Visual Memory cheat sheet header */}
      {subject === 'math' ? (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
            <Compass className="w-4 h-4" />
            Bảng Đơn Vị Đo Diện Tích Chuẩn Tiểu Học
          </div>
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5 text-center text-xs sm:text-sm font-bold mt-2">
            <div className="bg-white/10 p-2.5 rounded-xl">
              <div>km²</div>
              <div className="text-[11px] text-blue-200 mt-1">100 ha</div>
            </div>
            <div className="bg-white/20 p-2.5 rounded-xl border-2 border-amber-300">
              <div className="text-amber-200 font-black">ha</div>
              <div className="text-[11px] text-blue-100 mt-1">10 000 m²</div>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl">
              <div>dam²</div>
              <div className="text-[11px] text-blue-200 mt-1">100 m²</div>
            </div>
            <div className="bg-white/20 p-2.5 rounded-xl border-2 border-white/40">
              <div className="text-amber-200 font-black">m²</div>
              <div className="text-[11px] text-blue-100 mt-1">Đơn vị gốc</div>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl">
              <div>dm²</div>
              <div className="text-[11px] text-blue-200 mt-1">0,01 m²</div>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl">
              <div>cm²</div>
              <div className="text-[11px] text-blue-200 mt-1">0,0001 m²</div>
            </div>
            <div className="bg-white/10 p-2.5 rounded-xl">
              <div>mm²</div>
              <div className="text-[11px] text-blue-200 mt-1">0,000001 m²</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-blue-100 mt-3 text-center font-medium">
            * Mỗi đơn vị diện tích liền kề gấp hoặc kém nhau <strong>100 lần</strong> (cách nhau 2 chữ số 0).
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-200 mb-2">
            <Bookmark className="w-4 h-4" />
            Sổ Tay Phân Biệt Đại Từ & Từ Nhiều Nghĩa
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 text-xs sm:text-sm">
            <div className="bg-white/10 p-3 rounded-2xl">
              <strong className="text-emerald-200 block mb-1">Đại từ xưng hô 3 ngôi:</strong>
              <div className="text-xs text-emerald-100 space-y-0.5">
                • Ngôi 1: tôi, tớ, chúng tôi<br />
                • Ngôi 2: cậu, bạn, các bạn<br />
                • Ngôi 3: nó, họ, chúng nó
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl">
              <strong className="text-emerald-200 block mb-1">Đại từ thay thế & để hỏi:</strong>
              <div className="text-xs text-emerald-100 space-y-0.5">
                • Thay thế: thế, vậy, đó, này<br />
                • Để hỏi: ai, gì, nào, sao, bao nhiêu, đâu
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl">
              <strong className="text-emerald-200 block mb-1">Nghĩa gốc vs Nghĩa chuyển:</strong>
              <div className="text-xs text-emerald-100 space-y-0.5">
                • Gốc: bộ phận cơ thể (chân, mắt, mũi)<br />
                • Chuyển: mượn từ (chân núi, mũi thuyền, mắt na, lá thư)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Theory List with large text and rendered fractions */}
      <div className="space-y-5">
        {filtered.map((section) => (
          <div
            key={section.id}
            className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {section.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{section.summary}</p>
            </div>

            <div className="space-y-3.5">
              {section.bullets.map((bullet, idx) => (
                <div key={idx} className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200 text-sm">
                  <div className="font-bold text-slate-900 text-base mb-1.5">{bullet.heading}</div>
                  <div className="text-slate-800 whitespace-pre-line leading-relaxed mb-3 text-sm sm:text-base">
                    {renderElementaryMath(bullet.content, 'base')}
                  </div>

                  {bullet.rules && (
                    <div className="space-y-1.5 my-2.5 bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-950 font-medium">
                      {bullet.rules.map((rule, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-1.5">
                          <span className="font-bold text-amber-600">✓</span>
                          <span>{renderElementaryMath(rule, 'base')}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {bullet.examples && (
                    <div className="mt-2.5 bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                      <span className="font-bold text-slate-600 text-xs uppercase tracking-wide block">
                        Ví dụ thực hành:
                      </span>
                      {bullet.examples.map((ex, eIdx) => (
                        <div key={eIdx} className="text-slate-800 italic flex items-start gap-1.5 text-sm sm:text-base">
                          <span className="text-blue-500 font-bold not-italic">👉</span>
                          <span>{renderElementaryMath(ex, 'base')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Memory tip */}
            {section.memoryTip && (
              <div className="flex items-start gap-2.5 bg-amber-50 border-2 border-amber-300 p-3.5 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Mẹo vàng ghi nhớ:</strong> {renderElementaryMath(section.memoryTip, 'base')}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

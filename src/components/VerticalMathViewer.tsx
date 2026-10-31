import React from 'react';
import { VerticalMathData } from '../types';

interface VerticalMathViewerProps {
  data: VerticalMathData;
  showExplanation?: boolean;
}

export const VerticalMathViewer: React.FC<VerticalMathViewerProps> = ({
  data,
  showExplanation = true
}) => {
  if (data.operation === 'multiply') {
    return (
      <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 my-3 shadow-xs">
        <div className="flex items-center justify-between mb-3 border-b border-amber-200/60 pb-2">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Chuẩn Đặt Tính Rồi Tính (Tiểu Học)
          </span>
          <span className="text-[11px] text-amber-700 font-medium">Quy tắc tích riêng</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around gap-6">
          {/* Vertical Math Board */}
          <div className="inline-block bg-white border-2 border-amber-300 rounded-xl p-4 shadow-inner font-mono text-lg tracking-wider text-slate-800 math-cell">
            <div className="text-right pr-2">{data.num1}</div>
            <div className="relative text-right pr-2">
              <span className="absolute left-1 text-amber-600 font-bold">×</span>
              {data.num2}
            </div>
            <div className="border-b-2 border-slate-700 my-1 w-full"></div>
            
            {data.intermediateLines.map((line, idx) => {
              if (line.isDivider) {
                return <div key={idx} className="border-b-2 border-slate-700 my-1 w-full"></div>;
              }
              const isFinal = idx === data.intermediateLines.length - 1;
              return (
                <div
                  key={idx}
                  className={`text-right pr-2 ${isFinal ? 'font-black text-amber-700 text-xl' : 'text-slate-600'}`}
                >
                  {line.text}
                </div>
              );
            })}
          </div>

          {/* Explanation Notes */}
          {showExplanation && (
            <div className="flex-1 space-y-2 text-xs text-slate-700 bg-white/80 p-3.5 rounded-xl border border-amber-200/60">
              <h5 className="font-bold text-amber-900 text-sm">Các bước thực hiện chuẩn:</h5>
              <ol className="list-decimal list-inside space-y-1.5">
                <li>
                  <strong className="text-slate-800">Đặt tính:</strong> Viết thừa số thứ nhất ở trên, thừa số thứ hai ở dưới sao cho các hàng thẳng cột.
                </li>
                {data.intermediateLines
                  .filter(l => l.note && !l.isDivider)
                  .map((line, i) => (
                    <li key={i}>
                      <span className="font-semibold text-slate-800">{line.note}</span>
                    </li>
                  ))}
                <li>
                  <strong className="text-slate-800">Cộng các tích riêng:</strong> Cộng các tích riêng theo từng cột từ phải sang trái để ra kết quả chung <span className="font-bold text-amber-600">{data.result}</span>.
                </li>
              </ol>
              <div className="mt-2 text-[11px] bg-amber-100/70 p-2 rounded-lg text-amber-900 font-medium">
                💡 <strong>Mẹo nhỏ:</strong> Tích riêng thứ hai bắt buộc phải viết lùi sang bên trái 1 cột vì nó là kết quả nhân với chữ số hàng chục!
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (data.operation === 'divide') {
    return (
      <div className="bg-blue-50/50 border border-blue-200/80 rounded-2xl p-4 sm:p-5 my-3 shadow-xs">
        <div className="flex items-center justify-between mb-3 border-b border-blue-200/60 pb-2">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Chuẩn Đặt Tính Phép Chia (Tiểu Học)
          </span>
          <span className="text-[11px] text-blue-700 font-medium">Chia từ trái sang phải</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around gap-6">
          {/* Vietnamese standard division column */}
          <div className="inline-block bg-white border-2 border-blue-300 rounded-xl p-4 shadow-inner font-mono text-lg tracking-wider text-slate-800 math-cell">
            <div className="flex items-stretch">
              <div className="pr-4 text-right">
                <div className="font-bold">{data.num1}</div>
                {/* Simulated remainder drops */}
                <div className="text-sm text-slate-500 mt-1">
                  {data.intermediateLines.map((line, idx) => (
                    <div key={idx} className="text-right py-0.5">{line.text.split(':')[0]}</div>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-slate-700 pl-4">
                <div className="font-bold border-b-2 border-slate-700 pb-1">{data.num2}</div>
                <div className="font-black text-blue-700 pt-1 text-xl">{data.result}</div>
              </div>
            </div>
          </div>

          {/* Explanation Notes */}
          {showExplanation && (
            <div className="flex-1 space-y-2 text-xs text-slate-700 bg-white/80 p-3.5 rounded-xl border border-blue-200/60">
              <h5 className="font-bold text-blue-900 text-sm">Các lượt chia chi tiết:</h5>
              <div className="space-y-1.5">
                {data.intermediateLines.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="font-bold text-blue-700 shrink-0">•</span>
                    <span>{line.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[11px] bg-blue-100/70 p-2 rounded-lg text-blue-900 font-medium">
                💡 <strong>Kiểm tra lại:</strong> Lấy thương nhân với số chia: <span className="font-bold">{data.result} × {data.num2} = {data.num1}</span>. Phép chia chính xác 100%!
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Add or Subtract Decimals
  return (
    <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 my-3 shadow-xs">
      <div className="flex items-center justify-between mb-3 border-b border-emerald-200/60 pb-2">
        <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Đặt Tính Thẳng Cột Dấu Phẩy
        </span>
        <span className="text-[11px] text-emerald-700 font-medium">Số thập phân</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around gap-6">
        <div className="inline-block bg-white border-2 border-emerald-300 rounded-xl p-4 shadow-inner font-mono text-xl tracking-wider text-slate-800 math-cell">
          <div className="text-right pr-2">{data.num1}</div>
          <div className="relative text-right pr-2">
            <span className="absolute left-1 text-emerald-600 font-bold">
              {data.operation === 'add' ? '+' : '−'}
            </span>
            {data.num2}
          </div>
          <div className="border-b-2 border-slate-700 my-1 w-full"></div>
          <div className="text-right pr-2 font-black text-emerald-700 text-xl">{data.result}</div>
        </div>

        {showExplanation && (
          <div className="flex-1 space-y-2 text-xs text-slate-700 bg-white/80 p-3.5 rounded-xl border border-emerald-200/60">
            <h5 className="font-bold text-emerald-900 text-sm">Quy tắc thực hiện:</h5>
            <ol className="list-decimal list-inside space-y-1.5">
              <li>Viết số hạng này dưới số hạng kia sao cho <strong>các dấu phẩy dóng thẳng một hàng dọc</strong>.</li>
              <li>Thực hiện {data.operation === 'add' ? 'cộng' : 'trừ'} như đối với các số tự nhiên (từ phải sang trái).</li>
              <li>Đặt dấu phẩy ở kết quả thẳng cột với các dấu phẩy ở trên.</li>
            </ol>
            <div className="mt-2 text-[11px] bg-emerald-100/70 p-2 rounded-lg text-emerald-900 font-medium">
              💡 <strong>Lưu ý quan trọng:</strong> Nếu số chữ số ở phần thập phân của hai số không bằng nhau, ta có thể viết thêm chữ số 0 vào bên phải để dễ tính!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

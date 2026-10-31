import React from 'react';
import { X, Printer, Award, Sparkles, Download } from 'lucide-react';
import { StudentProfile } from '../types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 border-4 border-amber-300">
        {/* Close Button (Hidden on Print) */}
        <button
          onClick={onClose}
          className="print:hidden absolute right-4 top-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Inner Frame with Classic Border */}
        <div id="printable-certificate" className="border-4 border-double border-amber-500 rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40 text-center relative overflow-hidden">
          {/* Corner Rosettes */}
          <div className="absolute top-2 left-2 text-amber-500 text-xl select-none">⚜️</div>
          <div className="absolute top-2 right-2 text-amber-500 text-xl select-none">⚜️</div>
          <div className="absolute bottom-2 left-2 text-amber-500 text-xl select-none">⚜️</div>
          <div className="absolute bottom-2 right-2 text-amber-500 text-xl select-none">⚜️</div>

          {/* School Banner */}
          <div className="space-y-0.5 mb-4">
            <h5 className="text-[11px] sm:text-xs font-bold text-amber-900 uppercase tracking-widest">
              TRƯỜNG TIỂU HỌC NGUYỄN THỊ ĐỊNH
            </h5>
            <div className="text-[10px] text-amber-800/80 uppercase font-semibold">
              HỘI ĐỒNG TỰ ĐÁNH GIÁ & KHEN THƯỞNG HỌC TẬP
            </div>
            <div className="w-24 h-0.5 bg-amber-400 mx-auto mt-1 rounded-full"></div>
          </div>

          {/* Certificate Main Title */}
          <div className="my-4 sm:my-6">
            <span className="text-3xl sm:text-4xl">🏅</span>
            <h2 className="text-2xl sm:text-3xl font-black text-rose-600 uppercase tracking-wide mt-1">
              GIẤY KHEN HOA ĐIỂM 10
            </h2>
            <p className="text-xs text-amber-900 font-bold uppercase tracking-wider mt-0.5">
              Học Sinh Chăm Ngoan - Tiến Bộ Vượt Bậc
            </p>
          </div>

          {/* Student Name */}
          <div className="my-4">
            <p className="text-xs text-slate-500 italic">Khen tặng em:</p>
            <h3 className="text-xl sm:text-3xl font-black text-blue-900 tracking-tight my-1">
              {profile.name || 'Học Sinh Chăm Chỉ'}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              Lớp: {profile.schoolClass || '5A'} • {profile.avatar}
            </p>
          </div>

          {/* Citation */}
          <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed my-3 font-medium">
            Đã hoàn thành xuất sắc các chuyên đề ôn luyện, nắm vững phương pháp giải Toán và Tiếng Việt chuẩn bị cho kì thi <strong>Giữa Học Kỳ I Lớp 5</strong>.
          </p>

          {/* Stars & Achievements badge */}
          <div className="inline-flex items-center gap-4 bg-amber-100/70 border border-amber-300 rounded-xl px-4 py-1.5 my-2 text-xs font-bold text-amber-900">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>{profile.stars} Sao Điểm 10</span>
            </span>
            <span>·</span>
            <span>Đã làm {profile.solvedCount} bài tập</span>
          </div>

          {/* Footer Signatures */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-amber-200/60 text-xs">
            <div className="text-center">
              <div className="font-bold text-slate-800">GIÁO VIÊN CHỦ NHIỆM</div>
              <div className="text-[10px] text-slate-400 italic">Đã biểu dương</div>
              <div className="h-10 flex items-center justify-center font-serif italic text-amber-700 text-sm">
                Nguyễn Thị Định
              </div>
            </div>

            <div className="text-center">
              <div className="text-[10px] text-slate-500">Ngày {currentDate}</div>
              <div className="font-bold text-slate-800">BAN GIÁM HIỆU</div>
              <div className="h-10 flex items-center justify-center font-serif font-black text-rose-700 text-sm">
                (Đã ký & đóng dấu)
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons (Print / Close) */}
        <div className="print:hidden mt-5 flex items-center justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>In Giấy Khen Ngay</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

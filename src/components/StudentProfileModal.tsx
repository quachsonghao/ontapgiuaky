import React, { useState } from 'react';
import { X, Check, Sparkles, User } from 'lucide-react';
import { StudentProfile } from '../types';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSave: (profile: StudentProfile) => void;
}

const AVATARS = ['🦊', '🦉', '🐱', '🦁', '🐼', '🚀', '🌸', '🦄', '⭐', '🐬'];

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave
}) => {
  const [name, setName] = useState(profile.name || '');
  const [schoolClass, setSchoolClass] = useState(profile.schoolClass || '5A');
  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatar || '🦊');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...profile,
      name: name.trim() || 'Học sinh',
      schoolClass: schoolClass.trim() || '5A',
      avatar: selectedAvatar
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white border-2 border-amber-300 rounded-3xl max-w-md w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl shadow-xs mb-2">
            {selectedAvatar}
          </div>
          <h3 className="text-lg font-black text-slate-900">
            Hồ Sơ Học Sinh Lớp 5
          </h3>
          <p className="text-xs text-slate-500">
            Nhập tên của em để nhận lời khen và in Giấy Khen Điểm 10 nhé!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Họ và tên của em:
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Minh Anh, Trần Bảo Nam..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 font-bold focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Lớp:
            </label>
            <input
              type="text"
              required
              value={schoolClass}
              onChange={(e) => setSchoolClass(e.target.value)}
              placeholder="Ví dụ: 5A, 5/1, 5B..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 font-bold focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Chọn biểu tượng hoạt hình yêu thích:
            </label>
            <div className="flex flex-wrap gap-2 justify-center">
              {AVATARS.map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => setSelectedAvatar(av)}
                  className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-all ${
                    selectedAvatar === av
                      ? 'border-amber-500 bg-amber-100 scale-110 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Lưu Thông Tin & Bắt Đầu Học</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

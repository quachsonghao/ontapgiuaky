import React from 'react';
import { Sparkles, Award, Volume2, VolumeX, User, BookOpen } from 'lucide-react';
import { StudentProfile } from '../types';
import { soundManager } from '../utils/audio';

interface StudentHeaderProps {
  profile: StudentProfile;
  activeTab: 'home' | 'math' | 'vietnamese' | 'theory' | 'exam';
  setActiveTab: (tab: 'home' | 'math' | 'vietnamese' | 'theory' | 'exam') => void;
  onOpenProfile: () => void;
  onOpenCertificate: () => void;
}

export const StudentHeader: React.FC<StudentHeaderProps> = ({
  profile,
  activeTab,
  setActiveTab,
  onOpenProfile,
  onOpenCertificate,
}) => {
  const [isMuted, setIsMuted] = React.useState(soundManager.getMuted());

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/60 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand / Logo Zone */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-xs shadow-amber-200 group-hover:scale-105 transition-transform">
            ⭐
          </div>
          <div>
            <div className="text-base sm:text-lg font-black text-amber-900 tracking-tight flex items-center gap-1.5">
              <span>Hành Trang Điểm 10</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">Lớp 5</span>
            </div>
            <p className="text-xs text-amber-700/80 hidden sm:block">Ôn tập Giữa Học Kỳ I • Toán & Tiếng Việt</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-amber-50/70 border border-amber-200/50 rounded-xl">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'home'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-amber-900/80 hover:text-amber-900 hover:bg-amber-100/50'
            }`}
          >
            🏠 Trang chủ
          </button>
          <button
            onClick={() => setActiveTab('math')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'math'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            📐 Môn Toán
          </button>
          <button
            onClick={() => setActiveTab('vietnamese')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'vietnamese'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
            }`}
          >
            📖 Tiếng Việt
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'theory'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            📚 Lí thuyết cần nhớ
          </button>
          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'exam'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'text-slate-700 hover:text-rose-600 hover:bg-rose-50'
            }`}
          >
            ⏱️ Đề thi thử
          </button>
        </nav>

        {/* Student Profile & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Audio toggle */}
          <button
            onClick={handleToggleMute}
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            className="p-2 rounded-lg text-amber-800 hover:bg-amber-100/80 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
          </button>

          {/* Certificate button */}
          <button
            onClick={onOpenCertificate}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-lg border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 transition-colors"
            title="Xem Giấy khen"
          >
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Giấy khen</span>
          </button>

          {/* Student Profile Card */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-amber-100/70 hover:bg-amber-200/70 border border-amber-300/60 transition-colors"
          >
            <span className="text-xl leading-none" role="img" aria-label="avatar">
              {profile.avatar}
            </span>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-amber-950 truncate max-w-[110px]">
                {profile.name || 'Học sinh'}
              </div>
              <div className="text-[10px] text-amber-800 font-medium">
                {profile.schoolClass ? `Lớp ${profile.schoolClass}` : 'Nhập lớp'}
              </div>
            </div>
            <div className="flex items-center gap-1 pl-1 text-xs font-black text-amber-600">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>{profile.stars}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav strip */}
      <div className="md:hidden flex items-center justify-around border-t border-amber-100 bg-amber-50/50 px-2 py-1.5 text-[11px] font-bold">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-2 py-1 rounded ${activeTab === 'home' ? 'text-amber-800 bg-amber-200/70' : 'text-slate-600'}`}
        >
          Trang chủ
        </button>
        <button
          onClick={() => setActiveTab('math')}
          className={`px-2 py-1 rounded ${activeTab === 'math' ? 'text-blue-700 bg-blue-100' : 'text-slate-600'}`}
        >
          Toán
        </button>
        <button
          onClick={() => setActiveTab('vietnamese')}
          className={`px-2 py-1 rounded ${activeTab === 'vietnamese' ? 'text-emerald-700 bg-emerald-100' : 'text-slate-600'}`}
        >
          Tiếng Việt
        </button>
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-2 py-1 rounded ${activeTab === 'theory' ? 'text-purple-700 bg-purple-100' : 'text-slate-600'}`}
        >
          Lí thuyết
        </button>
        <button
          onClick={() => setActiveTab('exam')}
          className={`px-2 py-1 rounded ${activeTab === 'exam' ? 'text-rose-700 bg-rose-100' : 'text-slate-600'}`}
        >
          Đề thi
        </button>
      </div>
    </header>
  );
};

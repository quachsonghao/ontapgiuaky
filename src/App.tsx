import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  PenTool, 
  Clock, 
  Award, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Brain, 
  Zap,
  TrendingUp,
  Heart
} from 'lucide-react';
import { StudentProfile } from './types';
import { StudentHeader } from './components/StudentHeader';
import { MathPracticeView } from './components/MathPracticeView';
import { VietnamesePracticeView } from './components/VietnamesePracticeView';
import { TheoryView } from './components/TheoryView';
import { ExamModeView } from './components/ExamModeView';
import { StudentProfileModal } from './components/StudentProfileModal';
import { CertificateModal } from './components/CertificateModal';

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Nguyễn Minh Anh',
  schoolClass: '5A',
  avatar: '🦊',
  stars: 12,
  streak: 2,
  badges: ['Toán Học Nhí', 'Văn Sao Sáng'],
  solvedCount: 15
};

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('grade5_student_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_PROFILE;
  });

  const [activeTab, setActiveTab] = useState<'home' | 'math' | 'vietnamese' | 'theory' | 'exam'>('home');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  // Save profile changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('grade5_student_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  const handleUpdateProfile = (updates: Partial<StudentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-notebook-grid flex flex-col text-slate-800">
      {/* Student Top Bar */}
      <StudentHeader
        profile={profile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenCertificate={() => setIsCertificateModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Hero Welcome Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 p-6 sm:p-8 text-white shadow-sm">
              <div className="absolute right-3 top-3 sm:right-6 sm:top-6 opacity-20 text-8xl sm:text-9xl select-none pointer-events-none">
                🌟
              </div>
              <div className="relative z-10 max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-amber-950">
                  <span>Chào bạn {profile.name} (Lớp {profile.schoolClass})</span>
                  <span>{profile.avatar}</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                  Chinh Phục Điểm 10 Giữa Học Kỳ I Lớp 5!
                </h1>
                <p className="text-xs sm:text-sm text-amber-50/90 leading-relaxed font-medium">
                  Trang web ôn tập chuẩn chương trình với đầy đủ lí thuyết, bài tập sinh đề đổi số không giới hạn, trình bày đặt tính đúng chuẩn tiểu học và giải thích chi tiết dễ hiểu.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab('math')}
                    className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-black text-xs shadow-xs hover:bg-blue-50 transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <span>Luyện Toán Ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTab('vietnamese')}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-black text-xs shadow-xs hover:bg-emerald-700 transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <span>Luyện Tiếng Việt</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTab('exam')}
                    className="px-4 py-2.5 rounded-xl bg-amber-900/40 text-white font-bold text-xs hover:bg-amber-900/60 transition-colors flex items-center gap-1.5"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Thi Thử 40 Phút</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement & Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl shrink-0">
                  ⭐
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">{profile.stars}</div>
                  <div className="text-[11px] font-bold text-slate-500">Sao Điểm 10</div>
                </div>
              </div>

              <div className="bg-white border border-emerald-200/80 rounded-2xl p-4 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                  🔥
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">{profile.streak}</div>
                  <div className="text-[11px] font-bold text-slate-500">Chuỗi câu đúng</div>
                </div>
              </div>

              <div className="bg-white border border-blue-200/80 rounded-2xl p-4 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
                  ✏️
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">{profile.solvedCount}</div>
                  <div className="text-[11px] font-bold text-slate-500">Bài đã hoàn thành</div>
                </div>
              </div>

              <div 
                onClick={() => setIsCertificateModalOpen(true)}
                className="bg-white border border-purple-200/80 rounded-2xl p-4 shadow-xs flex items-center gap-3 cursor-pointer hover:border-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                  🏅
                </div>
                <div>
                  <div className="text-xs font-bold text-purple-900 flex items-center gap-1">
                    <span>Xem Giấy Khen</span>
                  </div>
                  <div className="text-[10px] text-slate-500">Hoa Điểm 10</div>
                </div>
              </div>
            </div>

            {/* Core Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Math Module Card */}
              <div className="bg-white border-2 border-blue-200 rounded-3xl p-6 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                      Môn Toán Lớp 5
                    </span>
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    Ôn Luyện 6 Dạng Toán Trọng Tâm
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hỗ trợ sinh số mới liên tục để làm quen dạng bài. Trình bày chuẩn mực đặt tính rồi tính cột dọc cho phép nhân số nhiều chữ số, phép chia, cộng trừ số thập phân và giải toán có lời văn.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Phân số thập phân & Số thập phân</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Bảng đơn vị đo diện tích (km², ha, m², dm²...)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Đặt tính nhân chia, tính bằng cách thuận tiện nhất</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Giải toán lời văn: Phân số của số còn lại, diện tích lát gạch</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveTab('math')}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Bắt đầu luyện Toán</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Vietnamese Module Card */}
              <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 shadow-xs hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      Môn Tiếng Việt Lớp 5
                    </span>
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    Đọc Hiểu, Luyện Từ Và Câu, Tập Làm Văn
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Đọc hiểu các văn bản xuất sắc (Thác Y-a-ly, Cây lá đỏ, Sớm mai trên đồi chè, Đón bình minh...), chuyên đề đại từ, từ đồng nghĩa, từ nhiều nghĩa (nghĩa gốc - chuyển) và dàn ý văn tả cảnh.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Chuyên đề Đại từ (xưng hô 3 ngôi, thay thế, nghi vấn)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Nghĩa gốc và Nghĩa chuyển (chân, mắt, mũi, ngọt, lá, đi)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Biện pháp tu từ: So sánh và Nhân hóa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Dàn ý & ngân hàng từ đắc địa cho bài văn tả cảnh đạt điểm 10</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveTab('vietnamese')}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Bắt đầu luyện Tiếng Việt</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Tips & Theory Banner */}
            <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200/80 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl shrink-0">
                  📚
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">
                    Góc Lí Thuyết & Bí Quyết Nhớ Nhanh
                  </h4>
                  <p className="text-xs text-slate-600">
                    Tra cứu công thức toán, bảng đơn vị đo diện tích và mẹo phân biệt từ loại dễ nhầm lẫn.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('theory')}
                className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
              >
                Mở Sổ Tay Lí Thuyết
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Math Practice */}
        {activeTab === 'math' && (
          <MathPracticeView
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {/* Tab 3: Vietnamese Practice */}
        {activeTab === 'vietnamese' && (
          <VietnamesePracticeView
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {/* Tab 4: Theory */}
        {activeTab === 'theory' && <TheoryView />}

        {/* Tab 5: Mock Exam */}
        {activeTab === 'exam' && (
          <ExamModeView
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onOpenCertificate={() => setIsCertificateModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-amber-200/60 bg-white/70 py-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-amber-950">
          Chương trình Ôn tập Giữa Học Kỳ I Lớp 5 • Môn Toán & Tiếng Việt
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Trường Tiểu học Nguyễn Thị Định • Chúc các bạn học sinh làm bài tự tin và đạt nhiều điểm 10! 🌟
        </p>
      </footer>

      {/* Student Profile Modal */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSave={(updated) => setProfile(updated)}
      />

      {/* Certificate of Merit Modal */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        profile={profile}
      />
    </div>
  );
}

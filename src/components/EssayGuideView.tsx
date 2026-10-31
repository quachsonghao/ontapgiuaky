import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  PenTool, 
  CheckCircle2, 
  Copy, 
  Check, 
  Filter, 
  Lightbulb, 
  Award, 
  FileText,
  Volume2,
  Bookmark,
  Share2
} from 'lucide-react';
import { ESSAY_SAMPLES, EssaySample } from '../data/essayData';
import { soundManager } from '../utils/audio';

interface EssayGuideViewProps {
  studentName: string;
  onUpdateStars?: () => void;
}

export const EssayGuideView: React.FC<EssayGuideViewProps> = ({
  studentName,
  onUpdateStars
}) => {
  const [selectedEssayId, setSelectedEssayId] = useState<string>(ESSAY_SAMPLES[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'method' | 'sample' | 'outline' | 'vocabulary' | 'practice'>('sample');
  const [highlightDevices, setHighlightDevices] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  
  // Student writing practice state
  const [practiceText, setPracticeText] = useState<string>('');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const activeEssay = ESSAY_SAMPLES.find(e => e.id === selectedEssayId) || ESSAY_SAMPLES[0];

  // Filter essays
  const filteredEssays = ESSAY_SAMPLES.filter(e => 
    selectedCategory === 'all' || e.category === selectedCategory
  );

  // Load saved practice draft
  useEffect(() => {
    const saved = localStorage.getItem(`essay_draft_${activeEssay.id}`);
    if (saved) {
      setPracticeText(saved);
    } else {
      setPracticeText('');
    }
    setSavedSuccess(false);
  }, [activeEssay.id]);

  const handleCopyEssay = () => {
    navigator.clipboard.writeText(activeEssay.sampleEssayFull);
    setCopied(true);
    soundManager.playCorrect();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSavePractice = () => {
    localStorage.setItem(`essay_draft_${activeEssay.id}`, practiceText);
    setSavedSuccess(true);
    soundManager.playCorrect();
    if (onUpdateStars && practiceText.trim().split(/\s+/).length > 80) {
      onUpdateStars();
    }
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // Practice analysis
  const practiceWords = practiceText.trim() ? practiceText.trim().split(/\s+/).length : 0;
  const practiceSentences = practiceText.trim() ? practiceText.split(/[.!?]+/).filter(Boolean).length : 0;
  const practiceParagraphs = practiceText.trim() ? practiceText.split(/\n+/).filter(Boolean).length : 0;
  const hasComparison = /như|tựa như|là|giống như/i.test(practiceText);
  const hasPersonification = /ông mặt trời|bác|chị gió|chú|thức dậy|thì thầm|hả hê|e ấp/i.test(practiceText);

  // Render highlighted essay text
  const renderHighlightedEssay = (text: string) => {
    if (!highlightDevices) {
      return text.split('\n\n').map((para, idx) => (
        <p key={idx} className="indent-8 leading-loose mb-4 font-serif text-slate-800 text-base sm:text-lg">
          {para}
        </p>
      ));
    }

    return text.split('\n\n').map((para, idx) => {
      let styledPara: React.ReactNode = para;

      // Apply highlights for vivid words and comparisons
      return (
        <p key={idx} className="indent-8 leading-loose mb-4 font-serif text-slate-800 text-base sm:text-lg">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✍️</span>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Chuyên Đề Tập Làm Văn Lớp 5
            </span>
          </div>
          <span className="text-xs font-bold bg-amber-400 text-amber-950 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            Văn Mẫu Đạt Điểm 9 – 10
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black">
          Kho Dàn Ý & Bài Văn Tả Cảnh Mẫu Mực
        </h2>
        <p className="text-sm sm:text-base text-emerald-50 max-w-3xl leading-relaxed">
          Tổng hợp các đề văn tả cảnh trọng tâm Giữa Học Kì I dành cho học sinh Trường Tiểu học Nguyễn Thị Định. Mỗi đề đều có dàn ý chi tiết 3 phần, bài văn mẫu dài và hay (450 – 550 từ), chỉ rõ các hình ảnh so sánh, nhân hóa đắt giá và trang vở tự luyện viết.
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'all', label: '🌿 Tất cả cảnh thiên nhiên (7 đề)' },
            { id: 'bien_dao', label: '🏖️ Biển đảo quê hương' },
            { id: 'dong_que', label: '🌾 Đồng quê & Đồi chè' },
            { id: 'thoi_tiet', label: '🌦️ Hiện tượng thiên nhiên (Mưa rào, Đêm trăng)' },
            { id: 'song_nui', label: '🏔️ Sông nước & Thác núi hùng vĩ' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-emerald-900 shadow-sm font-black'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Left Column Topic List, Right Column Essay Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Topic List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Danh sách đề bài ({filteredEssays.length})
            </span>
          </div>

          <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
            {filteredEssays.map((essay) => {
              const isSelected = essay.id === activeEssay.id;
              return (
                <button
                  key={essay.id}
                  onClick={() => {
                    setSelectedEssayId(essay.id);
                    soundManager.playCorrect();
                  }}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-xs ring-2 ring-emerald-200'
                      : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-lg">
                      {essay.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      ~{essay.wordCount} từ
                    </span>
                  </div>
                  <h4 className={`text-base font-black leading-snug ${isSelected ? 'text-emerald-950' : 'text-slate-800'}`}>
                    {essay.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {essay.prompt}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Card (8 cols) */}
        <div className="lg:col-span-8 bg-white border-2 border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-5">
          {/* Card Top Banner */}
          <div className="border-b border-slate-100 pb-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                {activeEssay.categoryLabel}
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-bold">
                <span>📝 {activeEssay.sentenceCount} câu</span>
                <span>•</span>
                <span>📖 {activeEssay.wordCount} từ</span>
                <span>•</span>
                <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md font-black">
                  Điểm: {activeEssay.teacherReview.score}
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {activeEssay.title}
            </h3>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 italic">
              <strong>Đề bài:</strong> "{activeEssay.prompt}"
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setActiveTab('method')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'method'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Bí kíp tả cảnh thiên nhiên</span>
            </button>

            <button
              onClick={() => setActiveTab('sample')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'sample'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Bài văn mẫu điểm 10</span>
            </button>

            <button
              onClick={() => setActiveTab('outline')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'outline'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Dàn ý chi tiết 3 phần</span>
            </button>

            <button
              onClick={() => setActiveTab('vocabulary')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'vocabulary'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Nghệ thuật & Lời bình</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'practice'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenTool className="w-4 h-4 text-rose-500" />
              <span>Em tập viết bài</span>
            </button>
          </div>

          {/* TAB 0: CẨM NANG PHƯƠNG PHÁP LÀM VĂN MIÊU TẢ CẢNH THIÊN NHIÊN LỚP 5 */}
          {activeTab === 'method' && (
            <div className="space-y-5 font-serif text-slate-800">
              {/* Introduction Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-2">
                <div className="flex items-center gap-2 font-sans font-black text-emerald-950 text-base sm:text-lg">
                  <span>🌿</span>
                  <span>ĐẶC TRƯNG VĂN MIÊU TẢ CẢNH THIÊN NHIÊN LỚP 5 (GIỮA HỌC KÌ I)</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Trong chương trình Tiếng Việt lớp 5, dạng bài <strong>Miêu tả cảnh thiên nhiên</strong> yêu cầu học sinh không chỉ đơn thuần là liệt kê cây cối, đất trời mà phải vẽ nên một bức tranh thiên nhiên sống động, có hồn, chan chứa cảm xúc và tình yêu quê hương đất nước.
                </p>
              </div>

              {/* 4 Golden Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border-2 border-amber-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-black text-amber-950">
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs">1</span>
                    <span>Xác định Trình tự miêu tả</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 font-serif">
                    <li><strong>Theo thời gian:</strong> Sớm mai $\rightarrow$ Trưa nắng $\rightarrow$ Chiều tà $\rightarrow$ Đêm trăng.</li>
                    <li><strong>Theo hiện tượng:</strong> Trước cơn mưa $\rightarrow$ Trong cơn mưa $\rightarrow$ Sau khi mưa tạnh.</li>
                    <li><strong>Theo không gian:</strong> Từ xa đến gần, từ trên cao xuống thấp, bao quát đến chi tiết.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border-2 border-blue-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-black text-blue-950">
                    <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">2</span>
                    <span>Quan sát bằng 5 giác quan</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 font-serif">
                    <li><strong>Mắt thấy (Thị giác):</strong> Sắc hồng rực rỡ, vàng óng ả, xanh ngọc bích, trắng xóa.</li>
                    <li><strong>Tai nghe (Thính giác):</strong> Tiếng sóng vỗ rì rào, tiếng thác réo như quân reo, dế rả rích.</li>
                    <li><strong>Mũi ngửi (Khứu giác):</strong> Mùi hương lúa chín thơm nồng, mùi đất sau mưa, vị mặn mòi gió biển.</li>
                    <li><strong>Da cảm nhận (Xúc giác):</strong> Hạt sương mát lạnh, làn gió mơn man, hơi nước sảng khoái.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border-2 border-purple-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-black text-purple-950">
                    <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">3</span>
                    <span>Tuyệt chiêu So sánh & Nhân hóa</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 font-serif">
                    <li><strong>So sánh:</strong> Giúp hình dung cảnh vật cụ thể (*Mặt trời như quả cầu lửa; ruộng bậc thang như mâm xôi vàng*).</li>
                    <li><strong>Nhân hóa:</strong> Thổi linh hồn vào thiên nhiên (*Mù Cang Chải bừng tỉnh khoác áo mới; rặng tre nghiêng mình soi gương chải tóc*).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border-2 border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-black text-emerald-950">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">4</span>
                    <span>Lồng ghép Nhịp sống con người</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 font-serif">
                    <li>Cảnh thiên nhiên dù đẹp đến mấy nếu thiếu con người sẽ dễ bị hoang vắng.</li>
                    <li>Hãy điểm xuyết: bác nông dân lia liềm gặt lúa, đoàn thuyền đánh cá cập bến, cô gái H'Mông váy xòe, tiếng trẻ mục đồng nô đùa.</li>
                  </ul>
                </div>
              </div>

              {/* Formulas for High-Scoring Openings and Endings */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-serif">
                <h4 className="font-sans font-black text-slate-900 text-base flex items-center gap-2">
                  <span>💡</span>
                  <span>Công thức viết Mở bài gián tiếp và Kết bài mở rộng đạt Điểm 10:</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                    <span className="font-sans font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Mở bài gián tiếp bằng Thơ ca / Lời hát
                    </span>
                    <p className="text-slate-700 italic leading-relaxed">
                      "Nhà thơ Đỗ Trung Quân từng viết: 'Quê hương là con diều biếc / Tuổi thơ con thả trên đồng...'. Mỗi tấc đất quê hương đều gắn với những cảnh sắc tươi đẹp. Nhưng để lại trong em nhiều nỗi nhớ niềm thương nhất chính là cảnh..."
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                    <span className="font-sans font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md">
                      Kết bài mở rộng gắn với Môi trường & Tình yêu Tổ quốc
                    </span>
                    <p className="text-slate-700 italic leading-relaxed">
                      "Đứng trước cảnh thiên nhiên tuyệt mỹ ấy, em nghe lòng mình trào dâng một niềm tự hào và tình yêu tha thiết với non sông gấm vóc quê hương. Em tự nhủ sẽ luôn chung tay bảo vệ môi trường để cảnh sắc quê mình mãi giữ được nét xanh trong, tươi đẹp."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: BÀI VĂN MẪU HOÀN CHỈNH */}
          {activeTab === 'sample' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-emerald-50/60 p-3 rounded-2xl border border-emerald-200">
                <span className="text-xs sm:text-sm font-bold text-emerald-900">
                  ✨ Văn phong giàu cảm xúc, sử dụng từ ngữ chọn lọc, kết hợp so sánh và nhân hóa
                </span>
                <button
                  onClick={handleCopyEssay}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 flex items-center gap-1 shadow-xs transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Đã chép bài!' : 'Sao chép bài văn'}</span>
                </button>
              </div>

              {/* Ruled Paper Layout for Model Essay */}
              <div className="border-2 border-slate-200 rounded-2xl p-6 sm:p-8 bg-notebook-grid shadow-inner text-slate-800">
                <div className="text-center pb-5 mb-4 border-b border-slate-300/80">
                  <h4 className="font-serif font-black text-xl sm:text-2xl text-emerald-950 uppercase tracking-wide">
                    {activeEssay.title}
                  </h4>
                  <div className="text-xs text-slate-500 font-serif italic mt-1">
                    Bài văn mẫu tham khảo đạt điểm 10 • Thời gian đọc: 3 phút
                  </div>
                </div>

                {renderHighlightedEssay(activeEssay.sampleEssayFull)}

                <div className="text-right pt-4 text-xs font-serif italic text-slate-500">
                  — Bài làm chuẩn mực học sinh lớp 5 Trường Tiểu học Nguyễn Thị Định —
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DÀN Ý CHI TIẾT 3 PHẦN */}
          {activeTab === 'outline' && (
            <div className="space-y-5 font-serif">
              {/* I. MỞ BÀI */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border-2 border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-amber-950 font-black text-base">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs font-sans">
                    1
                  </span>
                  <span>I. MỞ BÀI: Giới thiệu cảnh thiên nhiên (2 cách viết)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-sm">
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1.5">
                    <span className="font-black text-amber-900 text-xs bg-amber-100 px-2 py-0.5 rounded-md inline-block">
                      Cách 1: Mở bài trực tiếp (1 - 2 câu)
                    </span>
                    <p className="text-slate-800 leading-relaxed text-xs sm:text-sm">
                      "{activeEssay.openings.direct}"
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1.5">
                    <span className="font-black text-emerald-900 text-xs bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                      Cách 2: Mở bài gián tiếp (Chuẩn Điểm 9 - 10)
                    </span>
                    <p className="text-slate-800 leading-relaxed text-xs sm:text-sm">
                      "{activeEssay.openings.indirect}"
                    </p>
                  </div>
                </div>
              </div>

              {/* II. THÂN BÀI */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border-2 border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-950 font-black text-base">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-sans">
                    2
                  </span>
                  <span>II. THÂN BÀI: Miêu tả chi tiết cảnh vật theo trình tự</span>
                </div>

                <div className="space-y-3 text-sm bg-white p-4 rounded-xl border border-emerald-200">
                  <div>
                    <h5 className="font-black text-emerald-900 text-xs uppercase tracking-wide mb-1">
                      1. Tả bao quát cảnh vật:
                    </h5>
                    <p className="text-slate-800 leading-relaxed pl-3 border-l-2 border-emerald-400">
                      {activeEssay.bodyOutline.overview}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-black text-emerald-900 text-xs uppercase tracking-wide mb-1">
                      2. Tả chi tiết theo biến chuyển thời gian & không gian:
                    </h5>
                    <ul className="list-disc list-inside space-y-1.5 text-slate-800 pl-1">
                      {activeEssay.bodyOutline.details.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-black text-emerald-900 text-xs uppercase tracking-wide mb-1">
                      3. Hoạt động của con người gắn liền với cảnh vật:
                    </h5>
                    <p className="text-slate-800 leading-relaxed pl-3 border-l-2 border-emerald-400">
                      {activeEssay.bodyOutline.humanActivities}
                    </p>
                  </div>
                </div>
              </div>

              {/* III. KẾT BÀI */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border-2 border-blue-200 space-y-3">
                <div className="flex items-center gap-2 text-blue-950 font-black text-base">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-sans">
                    3
                  </span>
                  <span>III. KẾT BÀI: Nêu cảm nghĩ và tình cảm với quê hương</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-sm">
                  <div className="bg-white p-3.5 rounded-xl border border-blue-200 space-y-1.5">
                    <span className="font-black text-blue-900 text-xs bg-blue-100 px-2 py-0.5 rounded-md inline-block">
                      Cách 1: Kết bài không mở rộng
                    </span>
                    <p className="text-slate-800 leading-relaxed text-xs sm:text-sm">
                      "{activeEssay.endings.nonExtended}"
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-blue-200 space-y-1.5">
                    <span className="font-black text-indigo-900 text-xs bg-indigo-100 px-2 py-0.5 rounded-md inline-block">
                      Cách 2: Kết bài mở rộng (Chuẩn Điểm 9 - 10)
                    </span>
                    <p className="text-slate-800 leading-relaxed text-xs sm:text-sm">
                      "{activeEssay.endings.extended}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TỪ NGỮ ĐẮT GIÁ & LỜI BÌNH */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              {/* Rhetorical Devices Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Comparisons */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                  <div className="font-black text-amber-950 text-sm flex items-center gap-1.5">
                    <span>🌟</span>
                    <span>Hình ảnh So sánh đặc sắc:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-800 font-serif">
                    {activeEssay.rhetoricalDevices.comparisons.map((c, i) => (
                      <li key={i} className="leading-relaxed">"{c}"</li>
                    ))}
                  </ul>
                </div>

                {/* Personifications */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                  <div className="font-black text-emerald-950 text-sm flex items-center gap-1.5">
                    <span>🌿</span>
                    <span>Hình ảnh Nhân hóa sinh động:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-800 font-serif">
                    {activeEssay.rhetoricalDevices.personifications.map((p, i) => (
                      <li key={i} className="leading-relaxed">"{p}"</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Vivid Words Badges */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-black text-slate-700 text-xs uppercase tracking-wide block">
                  Bộ từ láy gợi hình gợi cảm đắt giá nên học tập:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeEssay.rhetoricalDevices.vividWords.map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className="px-3 py-1 rounded-xl bg-white border border-slate-300 font-bold text-xs sm:text-sm text-blue-900 shadow-xs"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              {/* Teacher Review Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-black text-indigo-950 text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-600" />
                    Lời nhận xét & Phân tích của Giáo viên Tiểu học:
                  </span>
                  <span className="text-sm font-black text-rose-600 bg-white px-3 py-0.5 rounded-full border border-rose-200 shadow-xs">
                    Điểm số: {activeEssay.teacherReview.score}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                  <div className="font-bold text-indigo-900">Ưu điểm nổi bật của bài viết:</div>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {activeEssay.teacherReview.strengths.map((str, sIdx) => (
                      <li key={sIdx}>{str}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-3 rounded-xl border border-indigo-100 text-xs sm:text-sm text-slate-700">
                  <strong>💡 Lời khuyên khi làm bài thi:</strong> {activeEssay.teacherReview.advice}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EM TẬP VIẾT BÀI VĂN */}
          {activeTab === 'practice' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 bg-rose-50 p-3 rounded-2xl border border-rose-200 text-xs sm:text-sm text-rose-950 font-bold">
                <span>
                  Học sinh: <strong className="text-rose-900">{studentName}</strong> hãy thử sức tự viết bài văn tả cảnh của mình vào trang vở dưới đây nhé!
                </span>
                <button
                  onClick={handleSavePractice}
                  className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-xs transition-colors"
                >
                  {savedSuccess ? '✓ Đã lưu bài làm!' : 'Lưu bài làm'}
                </button>
              </div>

              {/* Real-time Checklist & Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-semibold">Số từ</span>
                  <span className="text-lg font-black text-slate-800">{practiceWords} từ</span>
                  <span className="text-[10px] text-slate-500 block">(Mục tiêu: 150-300)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-semibold">Số câu</span>
                  <span className="text-lg font-black text-slate-800">{practiceSentences} câu</span>
                  <span className="text-[10px] text-slate-500 block">(Mục tiêu: 15-20)</span>
                </div>
                <div className={`p-2.5 rounded-xl border ${hasComparison ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                  <span className="block font-semibold">Có So sánh?</span>
                  <span className="text-base font-black">{hasComparison ? '✓ Đã có' : 'Chưa có'}</span>
                  <span className="text-[10px] block">Từ: như, tựa như</span>
                </div>
                <div className={`p-2.5 rounded-xl border ${hasPersonification ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                  <span className="block font-semibold">Có Nhân hóa?</span>
                  <span className="text-base font-black">{hasPersonification ? '✓ Đã có' : 'Chưa có'}</span>
                  <span className="text-[10px] block">Gọi sự vật như người</span>
                </div>
              </div>

              {/* Ruled Textarea */}
              <div className="border-2 border-slate-300 rounded-2xl overflow-hidden shadow-inner">
                <div className="bg-slate-100 px-4 py-2 border-b border-slate-300 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Trang vở luyện viết Tập làm văn (15 – 20 câu)</span>
                  <span className="italic font-serif text-slate-500">Bài làm của {studentName}</span>
                </div>
                <textarea
                  rows={14}
                  value={practiceText}
                  onChange={(e) => setPracticeText(e.target.value)}
                  placeholder="Bài làm&#10;....................................................................................&#10;...................................................................................."
                  className="w-full p-4 sm:p-5 text-base sm:text-lg font-serif notebook-ruled focus:outline-none resize-y text-slate-800 leading-loose"
                />
              </div>

              {/* Word count status helper */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                <span>
                  {practiceWords >= 150 
                    ? '🎉 Tuyệt vời! Bài viết của em đã đạt độ dài chuẩn của học sinh lớp 5.' 
                    : `💡 Em còn cần viết thêm khoảng ${Math.max(0, 150 - practiceWords)} từ nữa để đạt độ dài chuẩn nhé!`}
                </span>
                <span className="font-bold text-emerald-700">
                  {savedSuccess && '✓ Bài làm đã được tự động lưu!'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CheckCircle2, Sparkles, HelpCircle, PenTool, Lightbulb, RefreshCw, Send } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface SentencePrompt {
  id: string;
  title: string;
  category: 'synonym' | 'polysemy' | 'theme' | 'figurative';
  instruction: string;
  requiredWord: string;
  sampleSentence: string;
  hint: string;
  teacherNote?: string;
}

const SENTENCE_PROMPTS: SentencePrompt[] = [
  {
    id: 'sp-1',
    title: 'Đặt câu với từ đồng nghĩa',
    category: 'synonym',
    instruction: 'Đặt 1 câu có sử dụng từ đồng nghĩa với từ "mênh mông" (ví dụ: bao la, bát ngát, thênh thang) để tả cảnh đẹp.',
    requiredWord: 'bao la|bát ngát|thênh thang',
    sampleSentence: 'Cánh đồng lúa quê em rộng bao la bát ngát, trải dài tít tắp đến tận chân trời.',
    hint: 'Nhớ dùng các từ gợi tả sự rộng lớn như "bao la", "bát ngát" để tả cánh đồng hoặc biển cả nhé!'
  },
  {
    id: 'sp-2',
    title: 'Đặt câu với từ "đi" (Nghĩa gốc: di chuyển)',
    category: 'polysemy',
    instruction: 'Đặt 1 câu có từ "đi" được dùng với NGHĨA GỐC (chỉ hoạt động di chuyển bằng chân).',
    requiredWord: 'đi',
    sampleSentence: 'Mỗi buổi sáng, em cùng các bạn đi bộ đến trường trên con đường làng rợp bóng tre.',
    hint: 'Nghĩa gốc của "đi" là sự di chuyển bước chân của người hoặc động vật.',
    teacherNote: 'Lưu ý: "Đi bộ", "đi dạo", "bước đi" là nghĩa gốc.'
  },
  {
    id: 'sp-3',
    title: 'Đặt câu với từ "đi" (Nghĩa chuyển: mang đồ)',
    category: 'polysemy',
    instruction: 'Đặt 1 câu có từ "đi" được dùng với NGHĨA CHUYỂN (mang giày, dép hoặc tất vào chân).',
    requiredWord: 'đi',
    sampleSentence: 'Trời mùa đông trở rét, mẹ nhắc em nhớ đi tất ấm và đi giày trước khi ra ngoài.',
    hint: 'Dùng từ "đi" gắn liền với giày, dép, tất, ủng...',
    teacherNote: 'Nghĩa chuyển: "Đi dép", "đi giày", "đi tất".'
  },
  {
    id: 'sp-4',
    title: 'Đặt câu với từ "kỉ niệm"',
    category: 'theme',
    instruction: 'Đặt 1 – 2 câu có sử dụng từ "kỉ niệm" thể hiện suy nghĩ của em về tình cảm gắn bó giữa bạn bè dưới mái trường.',
    requiredWord: 'kỉ niệm|kỷ niệm',
    sampleSentence: 'Những kỉ niệm ấm áp dưới mái trường tiểu học thân yêu cùng bạn bè sẽ mãi là hành trang quý giá trong trái tim em.',
    hint: 'Bày tỏ tình cảm trong sáng, thân thiết với bạn bè cùng lớp.',
    teacherNote: 'Viết hoa đầu câu, cuối câu có dấu chấm, câu văn giàu cảm xúc.'
  },
  {
    id: 'sp-5',
    title: 'Đặt câu có hình ảnh So sánh',
    category: 'figurative',
    instruction: 'Đặt 1 câu văn miêu tả cảnh thiên nhiên có sử dụng hình ảnh so sánh (với từ so sánh: như, tựa như, là).',
    requiredWord: 'như|tựa như|là',
    sampleSentence: 'Từng giọt sương mai đọng trên phiến lá lấp lánh như những hạt kim cương nhỏ xíu.',
    hint: 'Cấu trúc: Sự vật 1 + như (tựa như) + Sự vật 2.',
    teacherNote: 'Hình ảnh so sánh giúp câu văn sống động, gợi hình gợi cảm.'
  },
  {
    id: 'sp-6',
    title: 'Đặt câu có hình ảnh Nhân hóa',
    category: 'figurative',
    instruction: 'Đặt 1 câu văn miêu tả thiên nhiên có sử dụng biện pháp nhân hóa (gọi hoặc tả sự vật như con người).',
    requiredWord: 'bác|chú|cô|ông|thức dậy|thì thầm|múa|hát',
    sampleSentence: 'Sớm nay, chị gió nhè nhẹ bay qua thì thầm đánh thức những chồi non bừng tỉnh.',
    hint: 'Gán cho sự vật những hành động hoặc cảm xúc của con người nhé em!'
  },
  {
    id: 'sp-7',
    title: 'Đặt câu với đại từ xưng hô lễ phép',
    category: 'theme',
    instruction: 'Đặt 1 câu có dùng đại từ xưng hô lễ phép ("em" hoặc "cháu" hoặc "con") khi nói chuyện với thầy cô giáo hoặc ông bà.',
    requiredWord: 'em|cháu|con|thưa|ạ',
    sampleSentence: 'Thưa cô, em xin phép đọc bài tập đọc ngày hôm nay ạ.',
    hint: 'Thể hiện thái độ kính trọng, lễ phép của học trò với người lớn tuổi.',
    teacherNote: 'Nhớ có từ "thưa" hoặc "ạ" để câu văn thêm lễ phép.'
  },
  {
    id: 'sp-8',
    title: 'Đặt câu với đại từ thay thế',
    category: 'theme',
    instruction: 'Đặt câu có sử dụng đại từ thay thế ("đó", "vậy", "thế") để liên kết với câu trước mà không bị lặp từ.',
    requiredWord: 'đó|vậy|thế|này',
    sampleSentence: 'Mẹ vừa mua cho em một chiếc cặp sách mới. Đó là phần thưởng cho kì thi vừa qua của em.',
    hint: 'Đại từ thay thế giúp câu văn mạch lạc, tránh lặp lại từ ngữ ở câu trước.',
    teacherNote: 'Dùng "Đó", "Vậy", "Thế" ở đầu câu sau.'
  },
  {
    id: 'sp-9',
    title: 'Đặt câu hỏi với đại từ nghi vấn',
    category: 'theme',
    instruction: 'Đặt 1 câu hỏi có sử dụng đại từ nghi vấn (ví dụ: ai, gì, ở đâu, vì sao) và kết thúc bằng dấu chấm hỏi (?).',
    requiredWord: 'ai|gì|ở đâu|vì sao|bao nhiêu',
    sampleSentence: 'Vì sao những thửa ruộng bậc thang ở Mù Cang Chải lại uốn lượn đẹp đến thế?',
    hint: 'Đại từ nghi vấn dùng để hỏi, cuối câu nhớ đặt dấu chấm hỏi (?).',
    teacherNote: 'Lưu ý dấu chấm hỏi (?) ở cuối câu!'
  },
  {
    id: 'sp-10',
    title: 'Đặt câu với từ "chân" (Nghĩa chuyển)',
    category: 'polysemy',
    instruction: 'Đặt 1 câu có từ "chân" được dùng với NGHĨA CHUYỂN (ví dụ: chân núi, chân đồi, chân trời, chân bàn, chân thác).',
    requiredWord: 'chân',
    sampleSentence: 'Dưới chân núi Chư-pa sừng sững, dòng suối nhỏ chảy róc rách suốt ngày đêm.',
    hint: 'Từ "chân" chỉ vị trí tiếp giáp mặt đất hoặc phần dưới cùng của đồ vật/địa hình.',
    teacherNote: 'Tránh dùng chân người, chân gà/mèo vì đó là nghĩa gốc!'
  },
  {
    id: 'sp-11',
    title: 'Đặt câu với từ "mắt" (Nghĩa chuyển)',
    category: 'polysemy',
    instruction: 'Đặt 1 câu có từ "mắt" được dùng với NGHĨA CHUYỂN (ví dụ: mắt na, mắt tre, mắt lưới, mắt dứa, mắt bão).',
    requiredWord: 'mắt',
    sampleSentence: 'Quả na trong vườn bà ngoại đã mở to những mắt na tròn xoe, báo hiệu một mùa quả chín ngọt lành.',
    hint: 'Dùng các từ như mắt na, mắt tre, mắt lưới, mắt kính...',
    teacherNote: 'Nghĩa gốc của mắt là cơ quan thị giác của người/động vật.'
  }
];

export const SentenceBuilderPractice: React.FC<{
  studentName: string;
  onSuccess: () => void;
}> = ({ studentName, onSuccess }) => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [userSentence, setUserSentence] = useState('');
  const [feedback, setFeedback] = useState<{
    hasChecked: boolean;
    passed: boolean;
    notes: string[];
  } | null>(null);
  const [showSample, setShowSample] = useState(false);

  const currentPrompt = SENTENCE_PROMPTS[selectedPromptIndex];

  const handleCheckSentence = () => {
    const raw = userSentence.trim();
    const notes: string[] = [];
    let passed = true;

    if (!raw) {
      notes.push('Em chưa nhập câu văn nào cả.');
      setFeedback({ hasChecked: true, passed: false, notes });
      return;
    }

    // Check capital letter at beginning
    const firstChar = raw.charAt(0);
    if (firstChar === firstChar.toLowerCase() && firstChar !== firstChar.toUpperCase()) {
      notes.push('⚠️ Nhớ viết hoa chữ cái đầu câu em nhé!');
      passed = false;
    } else {
      notes.push('✓ Đã viết hoa đầu câu đúng quy định.');
    }

    // Check end punctuation (. ! ?)
    const lastChar = raw.slice(-1);
    if (!['.', '!', '?'].includes(lastChar)) {
      notes.push('⚠️ Cuối câu em cần đặt dấu chấm (.), dấu chấm than (!) hoặc dấu chấm hỏi (?) nhé!');
      passed = false;
    } else {
      notes.push('✓ Cuối câu có dấu kết thúc chuẩn.');
    }

    // Check required words
    const regex = new RegExp(`(${currentPrompt.requiredWord})`, 'i');
    if (!regex.test(raw)) {
      notes.push(`⚠️ Câu văn của em chưa xuất hiện từ khóa yêu cầu (${currentPrompt.requiredWord.split('|').join(' hoặc ')}).`);
      passed = false;
    } else {
      notes.push('✓ Sử dụng chính xác từ khóa theo yêu cầu đề bài.');
    }

    // Check length (at least 5 words)
    const wordCount = raw.split(/\s+/).length;
    if (wordCount < 5) {
      notes.push('💡 Câu văn hơi ngắn, em hãy thêm từ ngữ gợi tả cho câu văn thêm sinh động nhé!');
    } else {
      notes.push(`✓ Độ dài câu phù hợp (${wordCount} từ), diễn đạt trọn vẹn ý nghĩa.`);
    }

    if (passed) {
      soundManager.playCorrect();
      onSuccess();
    } else {
      soundManager.playEncourage();
    }

    setFeedback({ hasChecked: true, passed, notes });
  };

  const handleNextPrompt = () => {
    setUserSentence('');
    setFeedback(null);
    setShowSample(false);
    setSelectedPromptIndex((prev) => (prev + 1) % SENTENCE_PROMPTS.length);
  };

  return (
    <div className="bg-white border-2 border-emerald-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl shadow-xs">
            ✍️
          </span>
          <div>
            <h4 className="font-black text-slate-900 text-lg">
              Phòng Rèn Kỹ Năng Đặt Câu (Tiếng Việt Lớp 5)
            </h4>
            <p className="text-xs text-slate-500">
              Rèn chữ viết hoa đầu câu, dấu câu kết thúc, dùng từ đúng nghĩa và cảm xúc
            </p>
          </div>
        </div>

        <button
          onClick={handleNextPrompt}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Đổi đề bài khác ({selectedPromptIndex + 1}/{SENTENCE_PROMPTS.length})</span>
        </button>
      </div>

      {/* Prompt Card */}
      <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-4 sm:p-5 space-y-2">
        <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
          {currentPrompt.title}
        </span>
        <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {currentPrompt.instruction}
        </div>
        <p className="text-xs text-slate-600 italic">
          💡 {currentPrompt.hint}
        </p>
      </div>

      {/* Notebook input textarea */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-700">
          Bài viết của {studentName || 'em'}:
        </label>
        <div className="border-2 border-slate-300 rounded-2xl overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
          <textarea
            rows={4}
            value={userSentence}
            onChange={(e) => setUserSentence(e.target.value)}
            placeholder="Gõ câu văn của em tại đây... (Ví dụ: Em viết hoa chữ cái đầu và chấm câu khi kết thúc)"
            className="w-full p-4 text-base sm:text-lg notebook-ruled focus:outline-none resize-none text-slate-800 font-medium"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowSample(!showSample)}
          className="text-xs font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1.5"
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>{showSample ? 'Ẩn câu mẫu' : 'Xem câu mẫu tham khảo'}</span>
        </button>

        <button
          onClick={handleCheckSentence}
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl shadow-xs transition-all hover:scale-105 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Kiểm tra câu văn</span>
        </button>
      </div>

      {/* Sample Sentence Preview */}
      {showSample && (
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium space-y-1">
          <div className="font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Câu văn mẫu của cô giáo:</span>
          </div>
          <p className="italic text-slate-700 text-sm">"{currentPrompt.sampleSentence}"</p>
        </div>
      )}

      {/* AI Teacher Evaluation Box */}
      {feedback && feedback.hasChecked && (
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
          feedback.passed ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'
        }`}>
          <div className="flex items-center gap-2 mb-2 font-black text-sm">
            {feedback.passed ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-950">CÂU VĂN RẤT ĐẠT CHUẨN! Giỏi lắm bạn {studentName}!</span>
              </>
            ) : (
              <>
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span className="text-amber-950">NHẬN XÉT CỦA THẦY CÔ ĐỂ CÂU VĂN HOÀN THIỆN HƠN:</span>
              </>
            )}
          </div>

          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-200">
            {feedback.notes.map((note, idx) => (
              <li key={idx} className="leading-relaxed">{note}</li>
            ))}
          </ul>

          <div className="mt-3 flex justify-end">
            <button
              onClick={handleNextPrompt}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Luyện tiếp câu tiếp theo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

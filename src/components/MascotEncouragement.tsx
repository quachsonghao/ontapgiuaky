import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Award } from 'lucide-react';

interface MascotProps {
  studentName: string;
  status: 'idle' | 'correct' | 'wrong' | 'exam_completed';
  message?: string;
  streak?: number;
}

const mascotQuotes = {
  correct: [
    'Xuất sắc quá! Em giải rất chuẩn mực! ⭐',
    'Thật tuyệt vời! Kiến thức của em rất vững vàng! 👏',
    'Đúng rồi! Điểm 10 đang vẫy gọi em đấy! 🌟',
    'Thông minh lắm! Tiếp tục phát huy nào! 🚀',
    'Thầy cô và bố mẹ sẽ rất tự hào về em! 🏆'
  ],
  wrong: [
    'Không sao cả em ơi! Thất bại là mẹ thành công! 💪',
    'Đừng buồn nhé! Cùng xem giải thích chi tiết bên dưới là hiểu ngay thôi! 📖',
    'Chỉ là sơ suất một chút thôi, em đọc kĩ mẹo làm bài rồi thử lại nhé! 💡',
    'Bình tĩnh rà soát lại các phép tính nào em! Cố lên! ❤️'
  ],
  streak: [
    'Phong độ đỉnh cao! Đạt chuỗi 3 câu đúng liên tiếp! 🔥',
    'Chuỗi 5 câu đúng! Em xứng đáng là Thần đồng Lớp 5! 👑'
  ]
};

export const MascotEncouragement: React.FC<MascotProps> = ({
  studentName,
  status,
  message,
  streak = 0
}) => {
  useEffect(() => {
    if (status === 'correct' && streak >= 3) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else if (status === 'exam_completed') {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  }, [status, streak]);

  let displayMessage = message;
  let bubbleColor = 'bg-amber-50 border-amber-200 text-amber-950';
  let mascotIcon = '🦊'; // Sóc Bông thông minh

  if (status === 'correct') {
    mascotIcon = '🎉';
    bubbleColor = 'bg-emerald-50 border-emerald-300 text-emerald-950';
    if (!displayMessage) {
      displayMessage = mascotQuotes.correct[Math.floor(Math.random() * mascotQuotes.correct.length)];
    }
  } else if (status === 'wrong') {
    mascotIcon = '🦉';
    bubbleColor = 'bg-sky-50 border-sky-300 text-sky-950';
    if (!displayMessage) {
      displayMessage = mascotQuotes.wrong[Math.floor(Math.random() * mascotQuotes.wrong.length)];
    }
  } else if (status === 'exam_completed') {
    mascotIcon = '🏆';
    bubbleColor = 'bg-amber-100 border-amber-400 text-amber-950 font-bold';
    displayMessage = `Chúc mừng bạn ${studentName || 'học sinh'} đã hoàn thành xuất sắc bài thi!`;
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all">
      {/* Mascot Avatar with lively animation */}
      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-100 to-amber-200 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-xs">
          {mascotIcon}
        </div>
        {streak >= 3 && (
          <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-xs animate-bounce">
            {streak}🔥
          </span>
        )}
      </div>

      {/* Speech Bubble */}
      <div className={`flex-1 border rounded-xl px-3.5 py-2 text-xs leading-relaxed relative ${bubbleColor}`}>
        <div className="font-bold mb-0.5 flex items-center gap-1.5">
          <span>Bạn Sóc Bác Học</span>
          <span className="text-[10px] opacity-75 font-normal">nhắn nhủ {studentName ? `bạn ${studentName}` : 'em'}:</span>
        </div>
        <p className="font-medium">{displayMessage || `Chào ${studentName || 'bạn nhỏ'}! Hãy cùng ôn luyện để giành trọn điểm 10 nhé!`}</p>
      </div>
    </div>
  );
};

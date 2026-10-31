import { MockExam } from '../types';

export const mockExamsList: MockExam[] = [
  // ==========================================
  // ĐỀ 1: TOÁN LỚP 5 - GIỮA HỌC KÌ I
  // ==========================================
  {
    id: 'exam-math-1',
    title: 'Đề Ôn Tập Giữa Học Kì I – Đề Số 1 (Môn Toán)',
    subject: 'math',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Cấu trúc đầy đủ 2 phần: I. Trắc nghiệm (4 điểm - 8 câu) & II. Tự luận (6 điểm - 5 bài: tính phân số, đổi số thập phân, tính thuận tiện, giải toán có lời văn, toán tư duy).',
    questions: [
      // PHẦN I. TRẮC NGHIỆM (4 điểm)
      {
        id: 'em1-q1',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Giá trị của chữ số 5 trong số 27 530 846 là:',
        options: [
          { id: 'a', text: 'A. 500' },
          { id: 'b', text: 'B. 5 000' },
          { id: 'c', text: 'C. 500 000' },
          { id: 'd', text: 'D. 50 000' }
        ],
        correctOptionId: 'c',
        explanation: 'Chữ số 5 đứng ở hàng trăm nghìn của lớp nghìn, nên có giá trị là 500 000.',
        level: 1
      },
      {
        id: 'em1-q2',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Phân số 3/4 viết thành phân số thập phân có mẫu số 100 là:',
        options: [
          { id: 'a', text: 'A. 3/10' },
          { id: 'b', text: 'B. 34/100' },
          { id: 'c', text: 'C. 75/100' },
          { id: 'd', text: 'D. 75/10' }
        ],
        correctOptionId: 'c',
        explanation: 'Ta nhân cả tử số và mẫu số với 25: (3 × 25) / (4 × 25) = 75/100.',
        level: 1
      },
      {
        id: 'em1-q3',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Số thập phân gồm mười hai đơn vị, bốn phần mười và năm phần nghìn viết là:',
        options: [
          { id: 'a', text: 'A. 12,45' },
          { id: 'b', text: 'B. 12,405' },
          { id: 'c', text: 'C. 12,045' },
          { id: 'd', text: 'D. 12,4005' }
        ],
        correctOptionId: 'b',
        explanation: 'Phần nguyên là 12, hàng phần mười là 4, hàng phần trăm khuyết (ghi chữ số 0), hàng phần nghìn là 5. Do đó số cần viết là 12,405.',
        level: 1
      },
      {
        id: 'em1-q4',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Số lớn nhất trong các số 4,65 ; 4,56 ; 4,605 ; 4,506 là:',
        options: [
          { id: 'a', text: 'A. 4,65' },
          { id: 'b', text: 'B. 4,56' },
          { id: 'c', text: 'C. 4,605' },
          { id: 'd', text: 'D. 4,506' }
        ],
        correctOptionId: 'a',
        explanation: 'So sánh phần thập phân: 4,650 > 4,605 > 4,560 > 4,506. Vậy 4,65 là số lớn nhất.',
        level: 1
      },
      {
        id: 'em1-q5',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 5',
        type: 'multiple_choice',
        prompt: 'Góc có số đo 120° là góc gì?',
        options: [
          { id: 'a', text: 'A. Góc nhọn' },
          { id: 'b', text: 'B. Góc vuông' },
          { id: 'c', text: 'C. Góc tù' },
          { id: 'd', text: 'D. Góc bẹt' }
        ],
        correctOptionId: 'c',
        explanation: 'Góc nhọn < 90°; góc vuông = 90°; góc tù > 90° và < 180°; góc bẹt = 180°. Do đó 120° là góc tù.',
        level: 1
      },
      {
        id: 'em1-q6',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Làm tròn số 38,264 đến hàng phần mười ta được:',
        options: [
          { id: 'a', text: 'A. 38,3' },
          { id: 'b', text: 'B. 38,2' },
          { id: 'c', text: 'C. 38,26' },
          { id: 'd', text: 'D. 38' }
        ],
        correctOptionId: 'a',
        explanation: 'Chữ số ở hàng phần trăm là 6 (từ 5 đến 9) nên ta tăng hàng phần mười thêm 1 đơn vị: 2 + 1 = 3, được 38,3.',
        level: 2
      },
      {
        id: 'em1-q7',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Điền số thích hợp: 5 m 7 cm = ...... m',
        options: [
          { id: 'a', text: 'A. 5,7' },
          { id: 'b', text: 'B. 57' },
          { id: 'c', text: 'C. 5,007' },
          { id: 'd', text: 'D. 5,07' }
        ],
        correctOptionId: 'd',
        explanation: 'Vì 1 m = 100 cm nên 7 cm = 7/100 m = 0,07 m. Vậy 5 m 7 cm = 5,07 m.',
        level: 2
      },
      {
        id: 'em1-q8',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Điền số thích hợp: 3 ha = ...... m²',
        options: [
          { id: 'a', text: 'A. 300' },
          { id: 'b', text: 'B. 3 000' },
          { id: 'c', text: 'C. 30 000' },
          { id: 'd', text: 'D. 300 000' }
        ],
        correctOptionId: 'c',
        explanation: 'Vì 1 ha = 10 000 m² nên 3 ha = 3 × 10 000 = 30 000 m².',
        level: 2
      },

      // PHẦN II. TỰ LUẬN (6 điểm)
      {
        id: 'em1-q9',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 1 (1 điểm): Tính phép tính phân số',
        type: 'fill_blank',
        prompt: 'Tính giá trị của phép cộng phân số sau (nhập phân số tối giản):\n2/3 + 3/4 = ?',
        correctAnswer: ['17/12'],
        explanation: 'Quy đồng mẫu số chung là 12:\n2/3 = 8/12 ; 3/4 = 9/12\n8/12 + 9/12 = 17/12.',
        level: 2
      },
      {
        id: 'em1-q10',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 2 (1 điểm): Viết số đo diện tích theo đơn vị héc-ta',
        type: 'fill_blank',
        prompt: 'Viết số thập phân thích hợp vào chỗ chấm:\n25 000 m² = ...... ha',
        correctAnswer: ['2,5', '2.5'],
        unit: 'ha',
        explanation: 'Vì 1 ha = 10 000 m² nên 25 000 m² = 25 000 : 10 000 = 2,5 ha.',
        level: 2
      },
      {
        id: 'em1-q11',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 3 (1 điểm): Tính bằng cách thuận tiện nhất',
        type: 'fill_blank',
        prompt: 'Tính bằng cách thuận tiện nhất:\n125 × 37 × 8 = ?',
        correctAnswer: ['37000', '37 000'],
        explanation: 'Áp dụng tính chất giao hoán và kết hợp:\n125 × 37 × 8 = (125 × 8) × 37 = 1 000 × 37 = 37 000.',
        level: 2
      },
      {
        id: 'em1-q12',
        topicId: 'math-top-6',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 4 (2 điểm): Giải toán có lời văn',
        type: 'word_problem',
        prompt: 'Một phòng học hình chữ nhật có chiều dài 8 m, chiều rộng 6 m. Người ta lát nền bằng loại gạch hình vuông cạnh 40 cm; mỗi hộp gạch có 6 viên, giá 150 000 đồng một hộp. Hỏi cần bao nhiêu tiền để mua gạch lát kín nền phòng học đó (mạch vữa không đáng kể)?',
        correctAnswer: ['7500000', '7 500 000', '7.500.000'],
        unit: 'đồng',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Tính diện tích nền phòng học:',
            correctFormula: '8 × 6 = 48 (m²) = 480 000 cm²',
            correctResult: '48',
            unit: 'm²'
          },
          {
            stepPrompt: 'Bước 2: Tính diện tích một viên gạch men:',
            correctFormula: '40 × 40 = 1 600 (cm²)',
            correctResult: '1600',
            unit: 'cm²'
          },
          {
            stepPrompt: 'Bước 3: Tính số viên gạch cần để lát kín phòng học:',
            correctFormula: '480 000 : 1 600 = 300 (viên)',
            correctResult: '300',
            unit: 'viên'
          },
          {
            stepPrompt: 'Bước 4: Tính số hộp gạch cần mua:',
            correctFormula: '300 : 6 = 50 (hộp)',
            correctResult: '50',
            unit: 'hộp'
          },
          {
            stepPrompt: 'Bước 5: Tính tổng số tiền cần dùng để mua gạch:',
            correctFormula: '50 × 150 000 = 7 500 000 (đồng)',
            correctResult: '7500000',
            unit: 'đồng'
          }
        ],
        explanation: 'Bài giải chuẩn mực:\n• Diện tích phòng học là:\n  8 × 6 = 48 (m²)\n  Đổi 48 m² = 480 000 cm²\n• Diện tích một viên gạch men là:\n  40 × 40 = 1 600 (cm²)\n• Số viên gạch cần dùng để lát kín phòng học là:\n  480 000 : 1 600 = 300 (viên)\n• Số hộp gạch cần mua là:\n  300 : 6 = 50 (hộp)\n• Số tiền cần dùng để mua gạch là:\n  150 000 × 50 = 7 500 000 (đồng)\nĐáp số: 7 500 000 đồng.',
        level: 4
      },
      {
        id: 'em1-q13',
        topicId: 'math-top-6',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 5 (1 điểm): Toán tư duy hình học',
        type: 'fill_blank',
        prompt: 'Một tấm bìa được cắt thành 6 hình vuông bằng nhau, mỗi hình vuông có cạnh 15 cm (không có phần bìa thừa). Hỏi tấm bìa ban đầu có diện tích bao nhiêu đề-xi-mét vuông?',
        correctAnswer: ['13,5', '13.5'],
        unit: 'dm²',
        explanation: '• Diện tích 1 hình vuông là: 15 × 15 = 225 (cm²).\n• Diện tích tấm bìa ban đầu là: 225 × 6 = 1 350 (cm²).\n• Đổi sang dm²: 1 dm² = 100 cm² nên 1 350 cm² = 13,5 dm².\nĐáp số: 13,5 dm².',
        level: 3
      }
    ]
  },

  // ==========================================
  // ĐỀ 2: TOÁN LỚP 5 - ĐỀ SỐ 8 (THEO ẢNH ĐÍNH KÈM)
  // ==========================================
  {
    id: 'exam-math-8',
    title: 'Đề Ôn Tập Giữa Học Kì I – Đề Số 8 (Môn Toán)',
    subject: 'math',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Bám sát đề thi số 8 thực tế: I. Trắc nghiệm (4 điểm) & II. Tự luận (6 điểm: tính phân số hỗn số, đổi số thập phân 4 đơn vị, tính thuận tiện, giải toán sân bóng chu vi 320m, xếp thứ tự phân số).',
    questions: [
      {
        id: 'em8-q1',
        topicId: 'math-top-4',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Kết quả phép tính 18 040 − 7 960 khoảng mấy nghìn?',
        options: [
          { id: 'a', text: 'A. 11 nghìn' },
          { id: 'b', text: 'B. 9 nghìn' },
          { id: 'c', text: 'C. 10 nghìn' },
          { id: 'd', text: 'D. 12 nghìn' }
        ],
        correctOptionId: 'c',
        explanation: 'Ước lượng: 18 040 gần 18 000; 7 960 gần 8 000. Lấy 18 000 − 8 000 = 10 000 (khoảng 10 nghìn).',
        level: 1
      },
      {
        id: 'em8-q2',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Phân số nào dưới đây bằng phân số 3/5?',
        options: [
          { id: 'a', text: 'A. 6/15' },
          { id: 'b', text: 'B. 9/15' },
          { id: 'c', text: 'C. 5/3' },
          { id: 'd', text: 'D. 12/25' }
        ],
        correctOptionId: 'b',
        explanation: 'Nhân cả tử số và mẫu số của 3/5 với 3 ta được: (3 × 3) / (5 × 3) = 9/15.',
        level: 1
      },
      {
        id: 'em8-q3',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Số thập phân gồm tám đơn vị và năm phần trăm viết là:',
        options: [
          { id: 'a', text: 'A. 8,005' },
          { id: 'b', text: 'B. 8,5' },
          { id: 'c', text: 'C. 80,5' },
          { id: 'd', text: 'D. 8,05' }
        ],
        correctOptionId: 'd',
        explanation: 'Tám đơn vị là 8; năm phần trăm là 0,05. Viết là 8,05.',
        level: 1
      },
      {
        id: 'em8-q4',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Số lớn nhất trong các số 7,8 ; 7,88 ; 7,808 ; 7,08 là:',
        options: [
          { id: 'a', text: 'A. 7,8' },
          { id: 'b', text: 'B. 7,88' },
          { id: 'c', text: 'C. 7,808' },
          { id: 'd', text: 'D. 7,08' }
        ],
        correctOptionId: 'b',
        explanation: 'So sánh: 7,880 > 7,808 > 7,800 > 7,080. Số lớn nhất là 7,88.',
        level: 1
      },
      {
        id: 'em8-q5',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 5',
        type: 'multiple_choice',
        prompt: 'Hai đường thẳng song song với nhau thì:',
        options: [
          { id: 'a', text: 'A. Không bao giờ cắt nhau' },
          { id: 'b', text: 'B. Cắt nhau tại một điểm' },
          { id: 'c', text: 'C. Tạo thành 4 góc vuông' },
          { id: 'd', text: 'D. Tạo thành một góc nhọn' }
        ],
        correctOptionId: 'a',
        explanation: 'Hai đường thẳng song song không bao giờ cắt nhau dù kéo dài mãi mãi.',
        level: 1
      },
      {
        id: 'em8-q6',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Làm tròn số 0,856 đến hàng phần mười ta được:',
        options: [
          { id: 'a', text: 'A. 0,8' },
          { id: 'b', text: 'B. 0,86' },
          { id: 'c', text: 'C. 0,9' },
          { id: 'd', text: 'D. 0,85' }
        ],
        correctOptionId: 'c',
        explanation: 'Chữ số hàng phần trăm là 5, theo quy tắc từ 5 đến 9 thì tăng hàng phần mười thêm 1 đơn vị: 8 + 1 = 9, được 0,9.',
        level: 2
      },
      {
        id: 'em8-q7',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: '36 kg = ...... tạ. Số thích hợp điền vào chỗ chấm là:',
        options: [
          { id: 'a', text: 'A. 3,6' },
          { id: 'b', text: 'B. 0,36' },
          { id: 'c', text: 'C. 0,036' },
          { id: 'd', text: 'D. 36' }
        ],
        correctOptionId: 'b',
        explanation: 'Vì 1 tạ = 100 kg nên 36 kg = 36/100 tạ = 0,36 tạ.',
        level: 2
      },
      {
        id: 'em8-q8',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Điền số thích hợp: 9 ha = ...... m²',
        options: [
          { id: 'a', text: 'A. 900' },
          { id: 'b', text: 'B. 9 000' },
          { id: 'c', text: 'C. 90 000' },
          { id: 'd', text: 'D. 900 000' }
        ],
        correctOptionId: 'c',
        explanation: 'Vì 1 ha = 10 000 m² nên 9 ha = 9 × 10 000 = 90 000 m².',
        level: 2
      },

      // PHẦN II. TỰ LUẬN (6 điểm)
      {
        id: 'em8-q9',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 1 (1 điểm): Tính phép nhân hỗn số',
        type: 'fill_blank',
        prompt: 'Tính: 2 1/4 × 2/3 = ? (Nhập phân số tối giản)',
        correctAnswer: ['3/2'],
        explanation: 'Đổi hỗn số ra phân số: 2 1/4 = (2 × 4 + 1)/4 = 9/4.\nThực hiện phép nhân: 9/4 × 2/3 = (9 × 2) / (4 × 3) = 18/12 = 3/2.',
        level: 2
      },
      {
        id: 'em8-q10',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 2 (1 điểm): Viết số thập phân thích hợp',
        type: 'fill_blank',
        prompt: 'Viết số thập phân thích hợp vào chỗ chấm:\n3 tấn 75 kg = ...... tấn',
        correctAnswer: ['3,075', '3.075'],
        unit: 'tấn',
        explanation: 'Vì 1 tấn = 1 000 kg nên 75 kg = 75/1000 tấn = 0,075 tấn. Vậy 3 tấn 75 kg = 3,075 tấn.',
        level: 2
      },
      {
        id: 'em8-q11',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 3 (1 điểm): Tính bằng cách thuận tiện nhất',
        type: 'fill_blank',
        prompt: 'Tính bằng cách thuận tiện nhất:\n36 × 125 − 36 × 25 = ?',
        correctAnswer: ['3600', '3 600'],
        explanation: 'Áp dụng tính chất phân phối: 36 × (125 − 25) = 36 × 100 = 3 600.',
        level: 2
      },
      {
        id: 'em8-q12',
        topicId: 'math-top-6',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 4 (2 điểm): Giải toán có lời văn',
        type: 'word_problem',
        prompt: 'Một sân bóng hình chữ nhật có chu vi 320 m, chiều dài hơn chiều rộng 40 m.\na) Tính diện tích sân bóng.\nb) Người ta gieo cỏ trên toàn bộ sân, cứ 100 m² cần 3 kg hạt giống. Hỏi cần bao nhiêu YẾN hạt giống cỏ?',
        correctAnswer: ['18', '18 yến'],
        unit: 'yến',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Tính nửa chu vi sân bóng:',
            correctFormula: '320 : 2 = 160 (m)',
            correctResult: '160',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 2: Tính chiều dài sân bóng:',
            correctFormula: '(160 + 40) : 2 = 100 (m)',
            correctResult: '100',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 3: Tính chiều rộng sân bóng:',
            correctFormula: '100 − 40 = 60 (m)',
            correctResult: '60',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 4: Tính diện tích sân bóng:',
            correctFormula: '100 × 60 = 6 000 (m²)',
            correctResult: '6000',
            unit: 'm²'
          },
          {
            stepPrompt: 'Bước 5: Tính số yến hạt giống cỏ cần dùng:',
            correctFormula: '(6 000 : 100) × 3 = 180 (kg) = 18 yến',
            correctResult: '18',
            unit: 'yến'
          }
        ],
        explanation: 'Bài giải chuẩn mực:\n• Nửa chu vi sân bóng là: 320 : 2 = 160 (m)\n• Chiều dài sân bóng là: (160 + 40) : 2 = 100 (m)\n• Chiều rộng sân bóng là: 100 − 40 = 60 (m)\n• a) Diện tích sân bóng là: 100 × 60 = 6 000 (m²)\n• b) Số ki-lô-gam hạt giống cỏ cần dùng là: (6 000 : 100) × 3 = 180 (kg)\n  Đổi 180 kg = 18 yến (vì 1 yến = 10 kg)\nĐáp số:\n  a) 6 000 m²;\n  b) 18 yến hạt giống cỏ.',
        level: 4
      },
      {
        id: 'em8-q13',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 5 (1 điểm): Viết số thập phân rồi sắp xếp thứ tự',
        type: 'multiple_choice',
        prompt: 'Viết các phân số 3/4 ; 2/5 ; 7/10 dưới dạng số thập phân, rồi sắp xếp theo thứ tự từ lớn đến bé:',
        options: [
          { id: 'a', text: 'A. 0,75 > 0,7 > 0,4 (tức là 3/4 > 7/10 > 2/5)' },
          { id: 'b', text: 'B. 0,4 > 0,7 > 0,75' },
          { id: 'c', text: 'C. 0,7 > 0,75 > 0,4' },
          { id: 'd', text: 'D. 0,75 > 0,4 > 0,7' }
        ],
        correctOptionId: 'a',
        explanation: '• Đổi sang số thập phân: 3/4 = 0,75 ; 2/5 = 0,4 ; 7/10 = 0,7.\n• So sánh từ lớn đến bé: 0,75 > 0,7 > 0,4. Vậy thứ tự là 3/4 > 7/10 > 2/5.',
        level: 3
      }
    ]
  },

  // ==========================================
  // ĐỀ 3: TIẾNG VIỆT LỚP 5 - GIỮA HỌC KÌ I (SỚM MAI TRÊN ĐỒI CHÈ)
  // ==========================================
  {
    id: 'exam-vn-1',
    title: 'Đề Kiểm Tra Giữa Học Kì I – Đề Số 1 (Môn Tiếng Việt)',
    subject: 'vietnamese',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Cấu trúc chuẩn Sở GD&ĐT: A. Kiểm tra đọc (10 điểm gồm I. Đọc thầm và trả lời 11 câu hỏi đọc hiểu & Luyện từ và câu) & B. Kiểm tra viết (10 điểm gồm Dàn ý và Tập làm văn miêu tả cảnh thiên nhiên).',
    questions: [
      // A. KIỂM TRA ĐỌC - I. Đọc hiểu & Luyện từ và câu (7 điểm - 11 CÂU)
      {
        id: 'evn1-q1',
        topicId: 'vn-top-3',
        readingPassageId: 'som-mai-doi-che',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Bạn nhỏ theo bà lên đồi chè vào lúc nào?',
        options: [
          { id: 'a', text: 'A. Lúc trời còn tờ mờ sáng' },
          { id: 'b', text: 'B. Lúc trời đã trưa nắng' },
          { id: 'c', text: 'C. Lúc chiều vừa tắt nắng' },
          { id: 'd', text: 'D. Lúc mặt trời đã lên cao' }
        ],
        correctOptionId: 'a',
        explanation: 'Trong bài đọc: "Mỗi lần về quê, tôi thích nhất là được theo bà lên đồi từ lúc trời còn tờ mờ sáng."',
        level: 1
      },
      {
        id: 'evn1-q2',
        topicId: 'vn-top-3',
        readingPassageId: 'som-mai-doi-che',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Những luống chè xanh mướt uốn lượn quanh sườn đồi được so sánh với hình ảnh nào?',
        options: [
          { id: 'a', text: 'A. Một tấm khăn voan trắng' },
          { id: 'b', text: 'B. Những bậc thang khổng lồ dẫn lên trời' },
          { id: 'c', text: 'C. Những hạt ngọc long lanh' },
          { id: 'd', text: 'D. Dòng suối trong vắt uốn quanh chân núi' }
        ],
        correctOptionId: 'b',
        explanation: 'Trích: "trông như những bậc thang khổng lồ dẫn lên trời".',
        level: 1
      },
      {
        id: 'evn1-q3',
        topicId: 'vn-top-3',
        readingPassageId: 'som-mai-doi-che',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Đứng trên đỉnh đồi nhìn xuống, bạn nhỏ thấy khung cảnh làng quê hiện ra như thế nào?',
        options: [
          { id: 'a', text: 'A. Đông vui, tấp nập xe cộ qua lại' },
          { id: 'b', text: 'B. Rộng lớn với những cánh đồng lúa chín vàng' },
          { id: 'c', text: 'C. Yên bình với những mái nhà nhỏ xinh nép mình bên hàng cau, dòng suối trong vắt' },
          { id: 'd', text: 'D. Mờ mịt trong màn sương trắng dày đặc' }
        ],
        correctOptionId: 'c',
        explanation: 'Đoạn cuối viết: "tôi thấy làng quê hiện ra thật yên bình: những mái nhà nhỏ xinh nép mình bên hàng cau, dòng suối trong vắt uốn quanh chân núi."',
        level: 1
      },
      {
        id: 'evn1-q4',
        topicId: 'vn-top-3',
        readingPassageId: 'som-mai-doi-che',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 4',
        type: 'true_false',
        prompt: 'Ghi Đúng (Đ) hoặc Sai (S) vào các nhận định sau theo nội dung bài đọc:',
        tfItems: [
          { id: 'tf_sm1', statement: 'Buổi sớm, sương giăng mỏng như một tấm khăn voan trắng phủ lên những luống chè.', isTrue: true },
          { id: 'tf_sm2', statement: 'Khi lên tới đỉnh đồi thì trời đã về trưa và nắng rất gay gắt.', isTrue: false },
          { id: 'tf_sm3', statement: 'Từng giọt sương mai đọng trên búp chè non long lanh như những hạt ngọc.', isTrue: true },
          { id: 'tf_sm4', statement: 'Các cô, các chị lên hái chè lúc hoàng hôn chiều muộn.', isTrue: false }
        ],
        explanation: 'Nhận định 1 và 3 đúng theo văn bản; nhận định 2 và 4 sai vì thời điểm miêu tả là buổi sớm mai trong lành.',
        level: 2
      },
      {
        id: 'evn1-q5',
        topicId: 'vn-top-3',
        readingPassageId: 'som-mai-doi-che',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 5',
        type: 'multiple_choice',
        prompt: 'Câu nói của bà: “Mảnh đất này đã nuôi bà lớn lên, nuôi cả mẹ cháu lớn lên đấy.” giúp em hiểu điều gì?',
        options: [
          { id: 'a', text: 'A. Bà muốn cháu ở lại quê để cùng bà hái chè.' },
          { id: 'b', text: 'B. Bà kể cho cháu nghe công việc hái chè rất vất vả.' },
          { id: 'c', text: 'C. Bà muốn khoe với cháu về đồi chè của gia đình.' },
          { id: 'd', text: 'D. Bà gắn bó sâu nặng và luôn biết ơn mảnh đất quê hương.' }
        ],
        correctOptionId: 'd',
        explanation: 'Câu nói bộc lộ tình yêu quê hương sâu sắc và lòng biết ơn cội nguồn của người bà.',
        level: 2
      },
      {
        id: 'evn1-q6',
        topicId: 'vn-top-3',
        readingPassageId: 'som-mai-doi-che',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Trong câu “Rồi ông mặt trời thức dậy sau dãy núi xa”, mặt trời được nhân hoá bằng cách nào?',
        options: [
          { id: 'a', text: 'A. Gọi mặt trời bằng từ “ông” và tả hành động “thức dậy” như con người' },
          { id: 'b', text: 'B. So sánh mặt trời với dãy núi xa' },
          { id: 'c', text: 'C. Tả màu sắc rực rỡ của mặt trời' },
          { id: 'd', text: 'D. Tả mặt trời tròn như quả bóng' }
        ],
        correctOptionId: 'a',
        explanation: 'Gọi mặt trời bằng "ông" và tả hành động thức dậy như người giúp thiên nhiên trở nên sống động, gần gũi.',
        level: 2
      },
      {
        id: 'evn1-q7',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Hình ảnh so sánh “Từng giọt sương long lanh như những hạt ngọc” có tác dụng gì?',
        options: [
          { id: 'a', text: 'A. Cho biết giọt sương buổi sớm rất to và nặng' },
          { id: 'b', text: 'B. Làm nổi bật vẻ trong trẻo, lấp lánh và quý giá của giọt sương mai' },
          { id: 'c', text: 'C. Cho thấy giọt sương làm ướt đẫm búp chè non' },
          { id: 'd', text: 'D. Cho biết buổi sớm trên đồi chè rất lạnh' }
        ],
        correctOptionId: 'b',
        explanation: 'Hình ảnh so sánh làm nổi bật vẻ đẹp tinh khôi, trong vắt và lấp lánh của sương mai dưới ánh nắng sớm.',
        level: 2
      },
      {
        id: 'evn1-q8',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Từ nào đồng nghĩa với từ “rộn rã” trong câu “Tiếng nói cười rộn rã khắp nương”?',
        options: [
          { id: 'a', text: 'A. thì thầm' },
          { id: 'b', text: 'B. im ắng' },
          { id: 'c', text: 'C. rộn ràng' },
          { id: 'd', text: 'D. khe khẽ' }
        ],
        correctOptionId: 'c',
        explanation: '"Rộn rã" đồng nghĩa với "rộn ràng", chỉ không khí vui vẻ, rộn rịp âm thanh.',
        level: 1
      },
      {
        id: 'evn1-q9',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 9',
        type: 'true_false',
        prompt: 'Đánh giá từ "chân" trong các câu sau được dùng với nghĩa gốc hay nghĩa chuyển:',
        tfItems: [
          { id: 'tf_c1', statement: 'Từ "chân" trong "Nhà bà ngoại tôi ở dưới chân một quả đồi" là nghĩa gốc.', isTrue: false },
          { id: 'tf_c2', statement: 'Từ "chân" trong "Em bé chạy chân trần trên bãi cỏ" là nghĩa gốc.', isTrue: true },
          { id: 'tf_c3', statement: 'Từ "chân" trong "Dòng suối trong vắt uốn quanh chân núi" là nghĩa chuyển.', isTrue: true }
        ],
        explanation: '• Chân em bé: bộ phận cơ thể người -> Nghĩa gốc.\n• Chân đồi, chân núi: phần dưới cùng của núi đồi -> Nghĩa chuyển.',
        level: 2
      },
      {
        id: 'evn1-q10',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 10',
        type: 'multiple_choice',
        prompt: 'Trong câu nói của bà: “Mảnh đất này đã nuôi bà lớn lên, nuôi cả mẹ cháu lớn lên đấy.”, các từ nào đóng vai trò là đại từ xưng hô?',
        options: [
          { id: 'a', text: 'A. bà, cháu' },
          { id: 'b', text: 'B. mảnh đất, mẹ' },
          { id: 'c', text: 'C. lớn lên, nuôi' },
          { id: 'd', text: 'D. này, đấy' }
        ],
        correctOptionId: 'a',
        explanation: 'Các danh từ chỉ quan hệ gia đình "bà", "cháu" được người nói dùng để tự xưng và xưng hô với người đối thoại nên giữ vai trò là đại từ xưng hô.',
        level: 2
      },
      {
        id: 'evn1-q11',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 11',
        type: 'fill_blank',
        prompt: 'Tìm đại từ nghi vấn (dùng để hỏi) trong câu sau:\n"Ai đã chăm chỉ vun trồng nên những đồi chè xanh ngát này?"',
        correctAnswer: ['Ai', 'ai'],
        explanation: 'Từ "Ai" là đại từ nghi vấn dùng để hỏi về người.',
        level: 1
      },

      // B. KIỂM TRA VIẾT (10 điểm)
      {
        id: 'evn1-q12',
        topicId: 'vn-top-4',
        sectionTitle: 'B. KIỂM TRA VIẾT (10 điểm) – Tập làm văn tả cảnh thiên nhiên',
        questionNumberLabel: 'Bài viết (8 điểm)',
        type: 'fill_blank',
        prompt: 'Đề bài: Em hãy viết bài văn miêu tả một cảnh thiên nhiên (dòng sông, biển đảo, hoặc đồi chè quê em) mà em yêu thích (từ 15 – 20 câu).\n\n(Học sinh có thể lập dàn ý 3 phần: Mở bài - Thân bài - Kết bài và viết đoạn văn hoàn chỉnh vào trang vở dưới đây):',
        correctAnswer: ['bai_van_hoan_thanh'],
        essayData: {
          topicTitle: 'Tả cảnh sớm mai trên đồi chè quê ngoại',
          prompt: 'Tả cảnh thiên nhiên buổi sớm mai trên đồi chè',
          outlineGuide: [
            'Mở bài: Giới thiệu cảnh đồi chè vào một buổi sớm mai trong lành.',
            'Thân bài: Tả bao quát màn sương trắng, những luống chè như bậc thang lên trời; Tả chi tiết ánh nắng, giọt sương long lanh, các cô các chị thoăn thoắt hái chè một tôm hai lá, tiếng cười nói rộn rã.',
            'Kết bài: Cảm xúc yêu thương, gắn bó và tự hào về vẻ đẹp mảnh đất quê hương.'
          ],
          sampleEssay: 'Mỗi lần có dịp về thăm quê ngoại, điều khiến em say mê nhất chính là được cùng bà dạo bước lên đồi chè khi trời còn mờ sương. Buổi sớm, đồi chè chìm trong màn sương giăng mỏng manh như một dải khăn voan trắng bồng bềnh. Những luống chè xanh mướt uốn lượn quanh sườn đồi, trông xa như những bậc thang khổng lồ nối liền mặt đất với trời xanh. Khi ông mặt trời thức dậy sau rặng núi xa, từng tia nắng vàng rực rỡ đâm xuyên qua màn sương, chạm khẽ vào ngọn chè. Từng giọt sương mai long lanh như những viên kim cương nhỏ xíu, đung đưa trên từng búp non tươi mởn. Trên nương, các cô các chị thoăn thoắt ngắt từng búp chè một tôm hai lá, tiếng cười nói rộn rã hòa cùng tiếng chim hót véo von chào ngày mới. Đứng trên đỉnh đồi nhìn xuống làng quê thanh bình, em bỗng thấy trào dâng một tình yêu tha thiết với mảnh đất và con người nơi đây.'
        },
        explanation: 'Tiêu chí đánh giá bài văn đạt điểm 9-10:\n1. Bố cục 3 phần rõ ràng (Mở bài, Thân bài, Kết bài).\n2. Có ít nhất 2 hình ảnh so sánh và 2 hình ảnh nhân hóa sinh động.\n3. Dùng từ ngữ gợi tả màu sắc, âm thanh, ánh sáng phong phú.\n4. Trình bày sạch đẹp, câu văn mạch lạc, đúng chính tả.',
        level: 4
      }
    ]
  },

  // ==========================================
  // ĐỀ 4: TIẾNG VIỆT LỚP 5 - ĐỀ SỐ 2 (ĐÓN BÌNH MINH TRÊN ĐỒI CÁT)
  // ==========================================
  {
    id: 'exam-vn-week8',
    title: 'Phiếu Ôn Tập Cuối Tuần 8 (Môn Tiếng Việt Lớp 5)',
    subject: 'vietnamese',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Cấu trúc hoàn chỉnh Sở GD&ĐT: A. Kiểm tra đọc (10 điểm gồm I. Đọc thầm và trả lời 11 câu hỏi đọc hiểu bài "Đón bình minh trên đồi cát" & Luyện từ và câu: Từ nhiều nghĩa, Đại từ) & B. Kiểm tra viết (10 điểm: Tập làm văn miêu tả cảnh thiên nhiên).',
    questions: [
      {
        id: 'evw8-q1',
        topicId: 'vn-top-3',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Bố đưa Hà lên đồi cát từ sớm để làm gì?',
        options: [
          { id: 'a', text: 'A. Để tắm biển.' },
          { id: 'b', text: 'B. Để bắt còng gió.' },
          { id: 'c', text: 'C. Để đón mặt trời mọc.' },
          { id: 'd', text: 'D. Để thả diều.' }
        ],
        correctOptionId: 'c',
        explanation: 'Bố gọi Hà: "Dậy đi con, bố đưa con lên đồi cát đón mặt trời mọc!"',
        level: 1
      },
      {
        id: 'evw8-q2',
        topicId: 'vn-top-3',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 2',
        type: 'true_false',
        prompt: 'Ghi Đúng (Đ), Sai (S) vào các nhận định sau theo nội dung bài đọc:',
        tfItems: [
          { id: 'tf_d1', statement: 'Hai bố con lên đồi cát khi trời còn tối.', isTrue: true },
          { id: 'tf_d2', statement: 'Mặt trời mới mọc tròn và đỏ như một quả cầu lửa.', isTrue: true },
          { id: 'tf_d3', statement: 'Khi nắng lên, đồi cát chuyển từ màu vàng óng sang xám bạc.', isTrue: false },
          { id: 'tf_d4', statement: 'Bố dùng một quả bóng nhỏ để giải thích cho Hà.', isTrue: true }
        ],
        explanation: 'Nhận định 3 là SAI vì trong bài ghi: "Cả đồi cát như bừng tỉnh, chuyển từ màu xám bạc sang vàng óng."',
        level: 2
      },
      {
        id: 'evw8-q3',
        topicId: 'vn-top-3',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Theo lời bố, vì sao ta thấy Mặt Trời mọc ở đằng đông và lặn ở đằng tây?',
        options: [
          { id: 'a', text: 'A. Vì Mặt Trời luôn quay quanh Trái Đất.' },
          { id: 'b', text: 'B. Vì biển nằm ở phía đông của làng.' },
          { id: 'c', text: 'C. Vì gió biển đẩy Mặt Trời đi.' },
          { id: 'd', text: 'D. Vì Trái Đất tròn và luôn tự quay từ tây sang đông.' }
        ],
        correctOptionId: 'd',
        explanation: 'Bố giải thích: "Trái Đất của chúng ta tròn như quả bóng này và luôn tự quay từ tây sang đông... Vì Trái Đất quay như thế nên ta thấy Mặt Trời mọc ở đằng đông và lặn ở đằng tây."',
        level: 2
      },
      {
        id: 'evw8-q4',
        topicId: 'vn-top-3',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Khi ánh nắng đầu tiên trải trên mặt biển, đồi cát có sự thay đổi màu sắc kì diệu như thế nào?',
        options: [
          { id: 'a', text: 'A. Chuyển từ màu xám bạc sang màu vàng óng' },
          { id: 'b', text: 'B. Chuyển từ màu vàng óng sang màu xám bạc' },
          { id: 'c', text: 'C. Chuyển từ màu hồng nhạt sang màu trắng tinh' },
          { id: 'd', text: 'D. Chuyển từ màu xanh biếc sang màu đỏ ửng' }
        ],
        correctOptionId: 'a',
        explanation: 'Trong bài viết: "Cả đồi cát như bừng tỉnh, chuyển từ màu xám bạc sang vàng óng."',
        level: 2
      },
      {
        id: 'evw8-q5',
        topicId: 'vn-top-3',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 5',
        type: 'multiple_choice',
        prompt: 'Hình ảnh so sánh “Ông mặt trời từ từ nhô lên, tròn và đỏ như một quả cầu lửa” có tác dụng gì?',
        options: [
          { id: 'a', text: 'A. Cho biết mặt trời sắp lặn xuống biển' },
          { id: 'b', text: 'B. Làm nổi bật vẻ đẹp rực rỡ, kì vĩ và tràn đầy sức sống của vầng thái dương buổi sớm' },
          { id: 'c', text: 'C. Cho thấy không khí buổi sáng ở đồi cát rất oi bức' },
          { id: 'd', text: 'D. Miêu tả mặt trời nhỏ xíu như quả bóng đồ chơi' }
        ],
        correctOptionId: 'b',
        explanation: 'Biện pháp so sánh làm hiện lên bức tranh bình minh tráng lệ, ấm áp và bừng sáng trên mặt biển.',
        level: 2
      },
      {
        id: 'evw8-q6',
        topicId: 'vn-top-3',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Trong câu: “Hoá ra mỗi sáng không phải mặt trời thức dậy, mà chính Trái Đất đã xoay mình đón nắng.”, tác giả đã sử dụng biện pháp tu từ nào?',
        options: [
          { id: 'a', text: 'A. Nhân hoá (dùng các từ "thức dậy", "xoay mình đón nắng" như con người)' },
          { id: 'b', text: 'B. So sánh ngang bằng' },
          { id: 'c', text: 'C. Điệp từ điệp ngữ' },
          { id: 'd', text: 'D. Đảo ngữ' }
        ],
        correctOptionId: 'a',
        explanation: 'Trái Đất và Mặt Trời được nhân hóa qua các hành động sinh động như con người: "thức dậy", "xoay mình đón nắng".',
        level: 2
      },
      {
        id: 'evw8-q7',
        topicId: 'vn-top-2',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Trong các từ in đậm: mép biển, lún sâu dưới CHÂN, mặt biển, Hà tròn MẮT. Có mấy từ được dùng với NGHĨA CHUYỂN?',
        options: [
          { id: 'a', text: 'A. 1 từ ngữ' },
          { id: 'b', text: 'B. 2 từ ngữ (mép biển, mặt biển)' },
          { id: 'c', text: 'C. 3 từ ngữ' },
          { id: 'd', text: 'D. 4 từ ngữ' }
        ],
        correctOptionId: 'b',
        explanation: '• Chân và Mắt: bộ phận cơ thể con người -> Nghĩa gốc.\n• Mép biển và Mặt biển: dùng ẩn dụ chỉ phần giới hạn/bề mặt của biển -> Nghĩa chuyển. Vậy có 2 từ ngữ.',
        level: 3
      },
      {
        id: 'evw8-q8',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Từ "mũi" trong nhóm từ nào dưới đây gồm toàn các từ mang NGHĨA GỐC?',
        options: [
          { id: 'a', text: 'A. mũi dao, mũi kéo, mũi súng' },
          { id: 'b', text: 'B. mũi thuyền, mũi Cà Mau, mũi tên' },
          { id: 'c', text: 'C. sổ mũi, sống mũi, chảy máu mũi' },
          { id: 'd', text: 'D. mũi đất, mũi tàu' }
        ],
        correctOptionId: 'c',
        explanation: 'Sổ mũi, sống mũi, chảy máu mũi chỉ bộ phận cơ thể người -> Nghĩa gốc. Các từ còn lại đều là nghĩa chuyển.',
        level: 2
      },
      {
        id: 'evw8-q9',
        topicId: 'vn-top-1',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 9',
        type: 'fill_blank',
        prompt: 'Tìm các từ đóng vai trò là đại từ xưng hô trong câu nói của bố:\n"Dậy đi con, bố đưa con lên đồi cát đón mặt trời mọc!"',
        correctAnswer: ['bố, con', 'bố và con', 'bố', 'con'],
        explanation: 'Từ "bố" (đại từ tự xưng) và "con" (đại từ chỉ người nghe) được dùng làm đại từ xưng hô giữa hai cha con.',
        level: 2
      },
      {
        id: 'evw8-q10',
        topicId: 'vn-top-1',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 10',
        type: 'multiple_choice',
        prompt: 'Trong câu: “Trái Đất luôn tự quay từ tây sang đông. Vì Trái Đất quay như thế nên ta thấy Mặt Trời mọc ở đằng đông và lặn ở đằng tây.”, từ “thế” giữ vai trò gì?',
        options: [
          { id: 'a', text: 'A. Đại từ thay thế cho việc tự quay từ tây sang đông' },
          { id: 'b', text: 'B. Đại từ nghi vấn dùng để hỏi' },
          { id: 'c', text: 'C. Danh từ chỉ sự vật' },
          { id: 'd', text: 'D. Tính từ chỉ tính chất' }
        ],
        correctOptionId: 'a',
        explanation: 'Từ "thế" là đại từ thay thế cho cụm từ "tự quay từ tây sang đông" ở câu đi trước để tránh lặp từ.',
        level: 2
      },
      {
        id: 'evw8-q11',
        topicId: 'vn-top-2',
        readingPassageId: 'don-binh-minh-doi-cat',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 11',
        type: 'fill_blank',
        prompt: 'Tìm từ láy gợi tả những bước chân nhỏ bé của chú còng gió trong câu văn sau:\n"Mấy chú còng gió chạy ngang trên cát, để lại những vệt chân li ti như ai vừa thêu."',
        correctAnswer: ['li ti', 'Li ti'],
        explanation: 'Từ láy "li ti" gợi tả những dấu chân rất nhỏ, tinh tế in trên nền cát mịn màng.',
        level: 1
      },

      // B. KIỂM TRA VIẾT (10 điểm)
      {
        id: 'evw8-q12',
        topicId: 'vn-top-4',
        sectionTitle: 'B. KIỂM TRA VIẾT (10 điểm) – Tập làm văn tả cảnh thiên nhiên',
        questionNumberLabel: 'Bài viết (8 điểm)',
        type: 'fill_blank',
        prompt: 'Đề bài: Viết bài văn tả cảnh bình minh trên biển hoặc trên đồi cát quê hương (khoảng 15 – 20 câu):',
        correctAnswer: ['hoan_thanh'],
        essayData: {
          topicTitle: 'Tả cảnh bình minh trên bãi biển quê hương',
          prompt: 'Tả cảnh mặt trời mọc trên biển',
          outlineGuide: [
            'Mở bài: Giới thiệu chuyến đi đón bình minh cùng bố mẹ trên bờ biển miền Trung.',
            'Thân bài: Bầu trời hửng hồng, từng con sóng nhấp nhô vỗ về bờ cát mịn; Ông mặt trời như quả cầu lửa nhô lên dát vàng mặt biển; Những chiếc thuyền đánh cá trở về đầy ắp tôm cá.',
            'Kết bài: Tình yêu quê hương biển đảo và cảm xúc tự hào trước thiên nhiên kỳ thú.'
          ],
          sampleEssay: 'Mùa hè năm ngoái, em được bố mẹ cho về thăm quê nội ở một làng chài ven biển miền Trung. Sáng sớm, khi vạn vật còn say ngủ trong làn sương se lạnh, bố đã đưa em ra bờ cát đón bình minh. Bờ cát trắng mịn mát lạnh dưới từng bước chân trần. Phía chân trời xa, mặt biển phẳng lặng bỗng ửng hồng rồi rực rỡ hẳn lên. Ông mặt trời tròn trĩnh, đỏ rực như một quả cầu lửa khổng lồ từ từ nhô lên khỏi làn nước xanh biếc. Ánh nắng ban mai trải xuống biển một lớp vàng lấp lánh như được dát triệu mảnh ngọc sáng ngời. Xa xa, đoàn thuyền đánh cá nối đuôi nhau rẽ sóng cập bến, tiếng hò reo, tiếng cười nói của các bác ngư dân vang lên rộn rã cả một góc trời. Ngắm nhìn cảnh bình minh tráng lệ ấy, em càng thêm yêu quý và tự hào về biển đảo quê hương Việt Nam.'
        },
        explanation: 'Dàn ý và bài văn mẫu giúp học sinh cảm nhận vẻ đẹp ngôn từ, rèn luyện cách dùng từ gợi cảm và biện pháp tu từ.',
        level: 4
      }
    ]
  },

  // ==========================================
  // ĐỀ 5: TOÁN LỚP 5 - ĐỀ SỐ 3 (THỬA RUỘNG CHU VI 240M)
  // ==========================================
  {
    id: 'exam-math-3',
    title: 'Đề Ôn Tập Giữa Học Kì I – Đề Số 3 (Môn Toán)',
    subject: 'math',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Cấu trúc hoàn chỉnh: Phần I. Trắc nghiệm (4 điểm - 8 câu: giá trị chữ số thập phân, phân số thập phân, đổi đơn vị m², ha, kg) & Phần II. Tự luận (6 điểm: đặt tính số thập phân, đổi đơn vị, tính thuận tiện, giải toán thửa ruộng chu vi 240m, tìm hai số liên tiếp).',
    questions: [
      {
        id: 'em3-q1',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Trong số thập phân 45,082 chữ số 8 thuộc hàng nào?',
        options: [
          { id: 'a', text: 'A. Hàng phần mười' },
          { id: 'b', text: 'B. Hàng phần trăm' },
          { id: 'c', text: 'C. Hàng phần nghìn' },
          { id: 'd', text: 'D. Hàng đơn vị' }
        ],
        correctOptionId: 'b',
        explanation: 'Sau dấu phẩy: chữ số 0 thuộc hàng phần mười, chữ số 8 thuộc hàng phần trăm, chữ số 2 thuộc hàng phần nghìn.',
        level: 1
      },
      {
        id: 'em3-q2',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Phân số thập phân 35/1000 được viết thành số thập phân là:',
        options: [
          { id: 'a', text: 'A. 0,35' },
          { id: 'b', text: 'B. 0,035' },
          { id: 'c', text: 'C. 0,0035' },
          { id: 'd', text: 'D. 3,5' }
        ],
        correctOptionId: 'b',
        explanation: '35 phần nghìn có 3 chữ số ở phần thập phân, do đó viết là 0,035.',
        level: 1
      },
      {
        id: 'em3-q3',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Trong các số thập phân 12,34 ; 12,43 ; 12,043 ; 12,403 số bé nhất là:',
        options: [
          { id: 'a', text: 'A. 12,34' },
          { id: 'b', text: 'B. 12,43' },
          { id: 'c', text: 'C. 12,043' },
          { id: 'd', text: 'D. 12,403' }
        ],
        correctOptionId: 'c',
        explanation: 'Phần nguyên đều là 12. Hàng phần mười của 12,043 là 0, bé nhất trong các số đã cho. Vậy số bé nhất là 12,043.',
        level: 1
      },
      {
        id: 'em3-q4',
        topicId: 'math-top-4',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Nhân nhẩm số thập phân: 4,75 × 100 = ?',
        options: [
          { id: 'a', text: 'A. 47,5' },
          { id: 'b', text: 'B. 475' },
          { id: 'c', text: 'C. 4 750' },
          { id: 'd', text: 'D. 0,475' }
        ],
        correctOptionId: 'b',
        explanation: 'Muốn nhân một số thập phân với 100, ta chuyển dấu phẩy sang bên phải hai chữ số: 4,75 × 100 = 475.',
        level: 1
      },
      {
        id: 'em3-q5',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 5',
        type: 'multiple_choice',
        prompt: 'Số thích hợp điền vào chỗ chấm: 8 m² 4 dm² = ...... m²',
        options: [
          { id: 'a', text: 'A. 8,4' },
          { id: 'b', text: 'B. 8,04' },
          { id: 'c', text: 'C. 8,004' },
          { id: 'd', text: 'D. 84' }
        ],
        correctOptionId: 'b',
        explanation: 'Vì 1 m² = 100 dm² nên 4 dm² = 4/100 m² = 0,04 m². Vậy 8 m² 4 dm² = 8,04 m².',
        level: 2
      },
      {
        id: 'em3-q6',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Một thửa ruộng hình chữ nhật có chiều dài 25 m, chiều rộng 16 m. Diện tích thửa ruộng đó là:',
        options: [
          { id: 'a', text: 'A. 400 m²' },
          { id: 'b', text: 'B. 82 m²' },
          { id: 'c', text: 'C. 41 m²' },
          { id: 'd', text: 'D. 4 000 m²' }
        ],
        correctOptionId: 'a',
        explanation: 'Diện tích hình chữ nhật là: 25 × 16 = 400 (m²).',
        level: 1
      },
      {
        id: 'em3-q7',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Điền số thích hợp vào chỗ chấm: 4 tấn 50 kg = ...... tấn',
        options: [
          { id: 'a', text: 'A. 4,5' },
          { id: 'b', text: 'B. 4,05' },
          { id: 'c', text: 'C. 4,005' },
          { id: 'd', text: 'D. 450' }
        ],
        correctOptionId: 'b',
        explanation: 'Vì 1 tấn = 1 000 kg nên 50 kg = 50/1000 tấn = 0,05 tấn. Vậy 4 tấn 50 kg = 4,05 tấn.',
        level: 2
      },
      {
        id: 'em3-q8',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Làm tròn số thập phân 19,486 đến hàng phần trăm ta được:',
        options: [
          { id: 'a', text: 'A. 19,4' },
          { id: 'b', text: 'B. 19,48' },
          { id: 'c', text: 'C. 19,49' },
          { id: 'd', text: 'D. 19,5' }
        ],
        correctOptionId: 'c',
        explanation: 'Chữ số ở hàng phần nghìn là 6 (từ 5 đến 9) nên ta tăng hàng phần trăm thêm 1 đơn vị: 8 + 1 = 9, được 19,49.',
        level: 2
      },

      // PHẦN II. TỰ LUẬN (6 điểm)
      {
        id: 'em3-q9',
        topicId: 'math-top-4',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 1 (1 điểm): Đặt tính rồi tính',
        type: 'fill_blank',
        prompt: 'Tính: 256,4 + 178,85 = ?',
        correctAnswer: ['435,25', '435.25'],
        explanation: 'Đặt tính thẳng cột theo dấu phẩy:\n  256,40\n+ 178,85\n--------\n  435,25',
        level: 2
      },
      {
        id: 'em3-q10',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 2 (1 điểm): Viết số thập phân thích hợp',
        type: 'fill_blank',
        prompt: 'Viết số thập phân thích hợp vào chỗ chấm:\n6 km 35 m = ...... km',
        correctAnswer: ['6,035', '6.035'],
        unit: 'km',
        explanation: 'Vì 1 km = 1 000 m nên 35 m = 35/1000 km = 0,035 km. Vậy 6 km 35 m = 6,035 km.',
        level: 2
      },
      {
        id: 'em3-q11',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 3 (1 điểm): Tính bằng cách thuận tiện',
        type: 'fill_blank',
        prompt: 'Tính bằng cách thuận tiện nhất:\n4,8 × 7,5 + 4,8 × 2,5 = ?',
        correctAnswer: ['48'],
        explanation: 'Áp dụng tính chất phân phối:\n4,8 × 7,5 + 4,8 × 2,5 = 4,8 × (7,5 + 2,5) = 4,8 × 10 = 48.',
        level: 2
      },
      {
        id: 'em3-q12',
        topicId: 'math-top-6',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 4 (2 điểm): Giải toán có lời văn',
        type: 'word_problem',
        prompt: 'Một thửa ruộng hình chữ nhật có chu vi 240 m, chiều rộng bằng 3/5 chiều dài.\na) Tính diện tích thửa ruộng đó với đơn vị là héc-ta.\nb) Biết rằng cứ 100 m² thì thu hoạch được 60 kg thóc. Hỏi trên cả thửa ruộng người ta thu hoạch được bao nhiêu TẤN thóc?',
        correctAnswer: ['2,025', '2.025', '2,025 tấn'],
        unit: 'tấn',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Tính nửa chu vi thửa ruộng:',
            correctFormula: '240 : 2 = 120 (m)',
            correctResult: '120',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 2: Tính tổng số phần bằng nhau:',
            correctFormula: '3 + 5 = 8 (phần)',
            correctResult: '8',
            unit: 'phần'
          },
          {
            stepPrompt: 'Bước 3: Tính chiều dài thửa ruộng:',
            correctFormula: '(120 : 8) × 5 = 75 (m)',
            correctResult: '75',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 4: Tính chiều rộng thửa ruộng:',
            correctFormula: '120 − 75 = 45 (m)',
            correctResult: '45',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 5: Tính diện tích thửa ruộng theo đơn vị héc-ta:',
            correctFormula: '75 × 45 = 3 375 (m²) = 0,3375 ha',
            correctResult: '0,3375',
            unit: 'ha'
          },
          {
            stepPrompt: 'Bước 6: Tính số tấn thóc thu hoạch được trên cả thửa ruộng:',
            correctFormula: '(3 375 : 100) × 60 = 2 025 (kg) = 2,025 tấn',
            correctResult: '2,025',
            unit: 'tấn'
          }
        ],
        explanation: 'Bài giải chuẩn mực:\n• Nửa chu vi thửa ruộng là: 240 : 2 = 120 (m)\n• Tổng số phần bằng nhau là: 3 + 5 = 8 (phần)\n• Chiều dài thửa ruộng là: (120 : 8) × 5 = 75 (m)\n• Chiều rộng thửa ruộng là: 120 − 75 = 45 (m)\n• a) Diện tích thửa ruộng là: 75 × 45 = 3 375 (m²)\n  Đổi 3 375 m² = 0,3375 ha\n• b) Số thóc thu hoạch được là: (3 375 : 100) × 60 = 2 025 (kg)\n  Đổi 2 025 kg = 2,025 tấn\nĐáp số:\n  a) 0,3375 ha;\n  b) 2,025 tấn thóc.',
        level: 4
      },
      {
        id: 'em3-q13',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 5 (1 điểm): Toán tư duy tìm số tự nhiên',
        type: 'multiple_choice',
        prompt: 'Tìm hai số tự nhiên liên tiếp x và y sao cho: x < 19,85 < y',
        options: [
          { id: 'a', text: 'A. x = 19 ; y = 20' },
          { id: 'b', text: 'B. x = 18 ; y = 19' },
          { id: 'c', text: 'C. x = 19 ; y = 21' },
          { id: 'd', text: 'D. x = 20 ; y = 21' }
        ],
        correctOptionId: 'a',
        explanation: 'Số thập phân 19,85 lớn hơn số tự nhiên 19 và bé hơn số tự nhiên 20. Do đó hai số tự nhiên liên tiếp là x = 19 và y = 20.',
        level: 3
      }
    ]
  },

  // ==========================================
  // ĐỀ 6: TOÁN LỚP 5 - ĐỀ BỒI DƯỠNG NÂNG CAO
  // ==========================================
  {
    id: 'exam-math-4',
    title: 'Đề Ôn Tập Bồi Dưỡng Nâng Cao (Môn Toán Lớp 5)',
    subject: 'math',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Đề nâng cao phát triển tư duy: Phần I. Trắc nghiệm (4 điểm) & Phần II. Tự luận (6 điểm: 4 phép tính phân số, chuyển đổi đơn vị diện tích, tính thuận tiện tích số, giải toán mảnh đất chu vi 250m làm nhà và vườn cây, chèn số thập phân).',
    questions: [
      {
        id: 'em4-q1',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Rút gọn phân số 48/64 về phân số tối giản ta được:',
        options: [
          { id: 'a', text: 'A. 3/4' },
          { id: 'b', text: 'B. 6/8' },
          { id: 'c', text: 'C. 24/32' },
          { id: 'd', text: 'D. 12/16' }
        ],
        correctOptionId: 'a',
        explanation: 'Chia cả tử số và mẫu số cho ước chung lớn nhất là 16: (48 : 16) / (64 : 16) = 3/4.',
        level: 1
      },
      {
        id: 'em4-q2',
        topicId: 'math-top-1',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Chuyển hỗn số 3 5/8 thành phân số ta được:',
        options: [
          { id: 'a', text: 'A. 15/8' },
          { id: 'b', text: 'B. 29/8' },
          { id: 'c', text: 'C. 24/8' },
          { id: 'd', text: 'D. 35/8' }
        ],
        correctOptionId: 'b',
        explanation: 'Tử số của phân số mới bằng: 3 × 8 + 5 = 29. Giữ nguyên mẫu số 8, được 29/8.',
        level: 1
      },
      {
        id: 'em4-q3',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Chữ số 7 trong số thập phân 82,714 có giá trị là:',
        options: [
          { id: 'a', text: 'A. 7/10' },
          { id: 'b', text: 'B. 7/100' },
          { id: 'c', text: 'C. 7/1000' },
          { id: 'd', text: 'D. 7' }
        ],
        correctOptionId: 'a',
        explanation: 'Chữ số 7 đứng ngay sau dấu phẩy ở hàng phần mười nên có giá trị là 7/10 (hay 0,7).',
        level: 1
      },
      {
        id: 'em4-q4',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Số thích hợp điền vào chỗ chấm: 2 ha 50 m² = ...... m²',
        options: [
          { id: 'a', text: 'A. 2 050' },
          { id: 'b', text: 'B. 20 050' },
          { id: 'c', text: 'C. 200 050' },
          { id: 'd', text: 'D. 25 000' }
        ],
        correctOptionId: 'b',
        explanation: 'Vì 1 ha = 10 000 m² nên 2 ha = 20 000 m². Do đó 2 ha 50 m² = 20 000 + 50 = 20 050 m².',
        level: 2
      },
      {
        id: 'em4-q5',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 5',
        type: 'multiple_choice',
        prompt: 'Số thập phân nào dưới đây nằm giữa 0,4 và 0,5?',
        options: [
          { id: 'a', text: 'A. 0,39' },
          { id: 'b', text: 'B. 0,46' },
          { id: 'c', text: 'C. 0,51' },
          { id: 'd', text: 'D. 0,54' }
        ],
        correctOptionId: 'b',
        explanation: 'Vì 0,4 = 0,40 và 0,5 = 0,50 nên 0,40 < 0,46 < 0,50. Vậy số 0,46 nằm giữa 0,4 và 0,5.',
        level: 2
      },
      {
        id: 'em4-q6',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Điền số thích hợp: 3/4 m² = ...... dm²',
        options: [
          { id: 'a', text: 'A. 7,5' },
          { id: 'b', text: 'B. 75' },
          { id: 'c', text: 'C. 750' },
          { id: 'd', text: 'D. 0,75' }
        ],
        correctOptionId: 'b',
        explanation: 'Vì 1 m² = 100 dm² nên 3/4 m² = (100 × 3) : 4 = 75 dm².',
        level: 2
      },
      {
        id: 'em4-q7',
        topicId: 'math-top-4',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Kết quả của phép chia nhẩm: 45,6 : 100 = ?',
        options: [
          { id: 'a', text: 'A. 456' },
          { id: 'b', text: 'B. 4,56' },
          { id: 'c', text: 'C. 0,456' },
          { id: 'd', text: 'D. 0,0456' }
        ],
        correctOptionId: 'c',
        explanation: 'Muốn chia một số thập phân cho 100, ta chuyển dấu phẩy sang bên trái hai chữ số: 45,6 : 100 = 0,456.',
        level: 2
      },
      {
        id: 'em4-q8',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN I. TRẮC NGHIỆM (4 điểm) – Khoanh vào chữ cái đặt trước câu trả lời đúng',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Dãy số thập phân nào dưới đây được sắp xếp theo thứ tự từ bé đến lớn?',
        options: [
          { id: 'a', text: 'A. 5,08 ; 5,12 ; 5,2 ; 5,201' },
          { id: 'b', text: 'B. 5,201 ; 5,2 ; 5,12 ; 5,08' },
          { id: 'c', text: 'C. 5,12 ; 5,08 ; 5,2 ; 5,201' },
          { id: 'd', text: 'D. 5,08 ; 5,2 ; 5,12 ; 5,201' }
        ],
        correctOptionId: 'a',
        explanation: 'So sánh: 5,080 < 5,120 < 5,200 < 5,201. Dãy A xếp đúng thứ tự từ bé đến lớn.',
        level: 2
      },

      // PHẦN II. TỰ LUẬN (6 điểm)
      {
        id: 'em4-q9',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 1 (1 điểm): Tính phép nhân phân số',
        type: 'fill_blank',
        prompt: 'Tính: 4/7 × 21/16 = ? (Nhập phân số tối giản)',
        correctAnswer: ['3/4'],
        explanation: 'Rút gọn chéo trước khi nhân:\n(4 × 21) / (7 × 16) = (1 × 3) / (1 × 4) = 3/4.',
        level: 2
      },
      {
        id: 'em4-q10',
        topicId: 'math-top-3',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 2 (1 điểm): Viết số thập phân thích hợp',
        type: 'fill_blank',
        prompt: 'Viết số thập phân thích hợp vào chỗ chấm:\n5 m² 45 dm² = ...... m²',
        correctAnswer: ['5,45', '5.45'],
        unit: 'm²',
        explanation: 'Vì 1 m² = 100 dm² nên 45 dm² = 0,45 m². Vậy 5 m² 45 dm² = 5,45 m².',
        level: 2
      },
      {
        id: 'em4-q11',
        topicId: 'math-top-5',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 3 (1 điểm): Tính bằng cách thuận tiện',
        type: 'fill_blank',
        prompt: 'Tính bằng cách thuận tiện nhất:\n12,5 × 4,8 × 8 = ?',
        correctAnswer: ['480'],
        explanation: 'Áp dụng tính chất giao hoán và kết hợp: (12,5 × 8) × 4,8 = 100 × 4,8 = 480.',
        level: 2
      },
      {
        id: 'em4-q12',
        topicId: 'math-top-6',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 4 (2 điểm): Giải toán có lời văn',
        type: 'word_problem',
        prompt: 'Một mảnh đất hình chữ nhật có chu vi 250 m, chiều rộng kém chiều dài 25 m. Người ta dùng 1/5 diện tích mảnh đất để làm nhà ở, phần diện tích còn lại làm vườn cây ăn quả. Tính diện tích phần làm vườn cây ăn quả?',
        correctAnswer: ['3000', '3 000', '3000 m²'],
        unit: 'm²',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Tính nửa chu vi mảnh đất:',
            correctFormula: '250 : 2 = 125 (m)',
            correctResult: '125',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 2: Tính chiều dài mảnh đất:',
            correctFormula: '(125 + 25) : 2 = 75 (m)',
            correctResult: '75',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 3: Tính chiều rộng mảnh đất:',
            correctFormula: '75 − 25 = 50 (m)',
            correctResult: '50',
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 4: Tính diện tích toàn bộ mảnh đất:',
            correctFormula: '75 × 50 = 3 750 (m²)',
            correctResult: '3750',
            unit: 'm²'
          },
          {
            stepPrompt: 'Bước 5: Tính diện tích phần đất làm nhà ở:',
            correctFormula: '3 750 : 5 = 750 (m²)',
            correctResult: '750',
            unit: 'm²'
          },
          {
            stepPrompt: 'Bước 6: Tính diện tích phần đất làm vườn cây ăn quả:',
            correctFormula: '3 750 − 750 = 3 000 (m²)',
            correctResult: '3000',
            unit: 'm²'
          }
        ],
        explanation: 'Bài giải chuẩn mực:\n• Nửa chu vi mảnh đất là: 250 : 2 = 125 (m)\n• Chiều dài mảnh đất là: (125 + 25) : 2 = 75 (m)\n• Chiều rộng mảnh đất là: 75 − 25 = 50 (m)\n• Diện tích toàn bộ mảnh đất là: 75 × 50 = 3 750 (m²)\n• Diện tích làm nhà ở là: 3 750 × 1/5 = 750 (m²)\n• Diện tích làm vườn cây ăn quả là: 3 750 − 750 = 3 000 (m²)\nĐáp số: 3 000 m².',
        level: 4
      },
      {
        id: 'em4-q13',
        topicId: 'math-top-2',
        sectionTitle: 'PHẦN II. TỰ LUẬN (6 điểm)',
        questionNumberLabel: 'Bài 5 (1 điểm): Toán tư duy số thập phân',
        type: 'multiple_choice',
        prompt: 'Trong các cặp số thập phân sau, cặp nào đều nằm giữa 0,8 và 0,9?',
        options: [
          { id: 'a', text: 'A. 0,81 và 0,88' },
          { id: 'b', text: 'B. 0,79 và 0,85' },
          { id: 'c', text: 'C. 0,89 và 0,92' },
          { id: 'd', text: 'D. 0,78 và 0,91' }
        ],
        correctOptionId: 'a',
        explanation: 'Vì 0,8 = 0,80 và 0,9 = 0,90 nên 0,80 < 0,81 < 0,88 < 0,90. Do đó cả 0,81 và 0,88 đều nằm giữa 0,8 và 0,9.',
        level: 3
      }
    ]
  },

  // ==========================================
  // ĐỀ 7: TIẾNG VIỆT LỚP 5 - ĐỀ SỐ 3 (THÁC Y-A-LY)
  // ==========================================
  {
    id: 'exam-vn-yaly',
    title: 'Đề Kiểm Tra Giữa Học Kì I – Đề Số 3 (Môn Tiếng Việt)',
    subject: 'vietnamese',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Cấu trúc chuẩn Sở GD&ĐT: A. Kiểm tra đọc (10 điểm gồm I. Đọc thầm và trả lời 11 câu hỏi đọc hiểu văn bản "Thác Y-a-ly" & Luyện từ và câu: Đại từ, Từ đồng nghĩa, Từ nhiều nghĩa) & B. Kiểm tra viết (10 điểm: Tập làm văn miêu tả cảnh thiên nhiên).',
    questions: [
      {
        id: 'eyl-q1',
        topicId: 'vn-top-3',
        readingPassageId: 'thac-y-a-ly',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Thác Y-a-ly được tạo nên bởi dòng chảy của con sông nào cắt ngang qua sườn núi?',
        options: [
          { id: 'a', text: 'A. Sông Hương' },
          { id: 'b', text: 'B. Sông Pô-cô' },
          { id: 'c', text: 'C. Sông Hồng' },
          { id: 'd', text: 'D. Sông Đồng Nai' }
        ],
        correctOptionId: 'b',
        explanation: 'Trong bài nêu rõ: "Con sông Pô-cô chảy từ Kon Tum về tới đây, bị dãy núi chắn ngang... Nước ào ạt phóng qua núi rồi đổ xuống, tạo nên thác Y-a-ly."',
        level: 1
      },
      {
        id: 'eyl-q2',
        topicId: 'vn-top-3',
        readingPassageId: 'thac-y-a-ly',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Cảnh sắc bờ đông bắc và bờ tây của hồ nước có nét gì đối lập nhau?',
        options: [
          { id: 'a', text: 'A. Bờ đông bắc ồn ào náo nhiệt, bờ tây vắng vẻ hoang sơ' },
          { id: 'b', text: 'B. Bờ đông bắc phẳng lặng như gương, bờ tây sóng chồm dữ dội, nước réo ào ào' },
          { id: 'c', text: 'C. Cả hai bờ đều phẳng lặng êm đềm' },
          { id: 'd', text: 'D. Cả hai bờ đều có sóng lớn và bọt tung trắng xóa' }
        ],
        correctOptionId: 'b',
        explanation: 'Đoạn văn miêu tả sự tương phản: bờ đông bắc mặt hồ phẳng lặng như gương, còn bờ tây sóng chồm dữ dội, nước réo ào ào như tiếng quân reo.',
        level: 1
      },
      {
        id: 'eyl-q3',
        topicId: 'vn-top-3',
        readingPassageId: 'thac-y-a-ly',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Vào lúc sắp hoàng hôn, mặt sông và dòng thác được so sánh với hình ảnh tuyệt đẹp nào?',
        options: [
          { id: 'a', text: 'A. Dải lụa bạch uốn lượn quanh chân núi' },
          { id: 'b', text: 'B. Dát một mẻ vàng vừa luyện xong' },
          { id: 'c', text: 'C. Triệu hạt kim cương lấp lánh' },
          { id: 'd', text: 'D. Một tấm gương khổng lồ soi bóng núi rừng' }
        ],
        correctOptionId: 'b',
        explanation: 'Trích: "mặt trời xói thẳng vào lòng sông lấp lánh trông như là dát một mẻ vàng vừa luyện xong."',
        level: 2
      },
      {
        id: 'eyl-q4',
        topicId: 'vn-top-3',
        readingPassageId: 'thac-y-a-ly',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Thác nước Y-a-ly chảy mòn đá, tạo thành bao nhiêu bậc từ trên đỉnh núi xuống mặt nước?',
        options: [
          { id: 'a', text: 'A. Mười bậc đá' },
          { id: 'b', text: 'B. Mười hai bậc đá' },
          { id: 'c', text: 'C. Bảy bậc đá' },
          { id: 'd', text: 'D. Chín bậc đá' }
        ],
        correctOptionId: 'b',
        explanation: 'Trong bài viết: "Thác nước dựng đứng, chảy mòn đá, thành mười hai bậc từ trên đỉnh núi xuống mặt nước."',
        level: 1
      },
      {
        id: 'eyl-q5',
        topicId: 'vn-top-3',
        readingPassageId: 'thac-y-a-ly',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 5',
        type: 'true_false',
        prompt: 'Ghi Đúng (Đ) hoặc Sai (S) vào ô trống theo nội dung bài "Thác Y-a-ly":',
        tfItems: [
          { id: 'tf_yl_a', statement: 'Thác Y-a-ly nằm trên dãy núi Chư-pa ở vùng đất Tây Nguyên hùng vĩ.', isTrue: true },
          { id: 'tf_yl_b', statement: 'Bờ đông bắc mặt hồ phẳng lặng như gương, cây gỗ tếch soi bóng.', isTrue: true },
          { id: 'tf_yl_c', statement: 'Bờ tây của hồ hoàn toàn êm đềm, không hề có tiếng nước réo.', isTrue: false },
          { id: 'tf_yl_d', statement: 'Chiều chiều ven hồ có các chú tắc kè có cánh và cô chuột túi địu con.', isTrue: true }
        ],
        explanation: 'Ý c là SAI vì bờ tây sóng chồm dữ dội, nước réo ào ào như trăm vạn tiếng quân reo.',
        level: 2
      },
      {
        id: 'eyl-q6',
        topicId: 'vn-top-3',
        readingPassageId: 'thac-y-a-ly',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Trong câu: “Nước trút từ trên trời xuống, trông như một biển mù sương, đẹp tuyệt vời.”, tác giả đã sử dụng biện pháp tu từ nào?',
        options: [
          { id: 'a', text: 'A. Biện pháp so sánh (nước trút xuống như một biển mù sương)' },
          { id: 'b', text: 'B. Biện pháp nhân hoá' },
          { id: 'c', text: 'C. Biện pháp đảo ngữ' },
          { id: 'd', text: 'D. Biện pháp điệp từ' }
        ],
        correctOptionId: 'a',
        explanation: 'Tác giả dùng từ so sánh "như" để ví làn nước đổ từ trên cao xuống trông huyền ảo như một biển mù sương.',
        level: 2
      },
      {
        id: 'eyl-q7',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Từ đồng nghĩa với từ "hùng vĩ" trong câu "một khung cảnh hùng vĩ diễn ra trước mắt" là:',
        options: [
          { id: 'a', text: 'A. kì vĩ' },
          { id: 'b', text: 'B. bình lặng' },
          { id: 'c', text: 'C. nhỏ bé' },
          { id: 'd', text: 'D. êm ả' }
        ],
        correctOptionId: 'a',
        explanation: '"Hùng vĩ" đồng nghĩa với "kì vĩ", "tráng lệ", "nguy nga".',
        level: 1
      },
      {
        id: 'eyl-q8',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 8',
        type: 'true_false',
        prompt: 'Xác định từ "chân" trong các câu sau được dùng với nghĩa gốc (Đ) hay nghĩa chuyển (S):',
        tfItems: [
          { id: 'tf_yl1', statement: 'Dòng nước ào ạt đổ xuống chân thác Y-a-ly. (Nghĩa chuyển)', isTrue: true },
          { id: 'tf_yl2', statement: 'Du khách đi bộ từng bước bằng đôi chân dẻo dai. (Nghĩa gốc)', isTrue: true },
          { id: 'tf_yl3', statement: 'Những mái nhà sàn nép mình dưới chân núi Chư-pa. (Nghĩa gốc)', isTrue: false }
        ],
        explanation: '• Chân thác, chân núi: phần dưới cùng tiếp giáp mặt đất -> Nghĩa chuyển.\n• Đôi chân du khách: bộ phận cơ thể người -> Nghĩa gốc.',
        level: 2
      },
      {
        id: 'eyl-q9',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 9',
        type: 'fill_blank',
        prompt: 'Tìm đại từ thay thế trong câu: "Nước sông Pô-cô chảy về tới dãy núi Chư-pa. Ở đó, một hồ nước tuyệt đẹp đã hình thành."',
        correctAnswer: ['đó', 'Đó'],
        explanation: 'Từ "đó" là đại từ thay thế cho địa điểm "dãy núi Chư-pa" đã được nhắc ở câu trước.',
        level: 2
      },
      {
        id: 'eyl-q10',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 10',
        type: 'multiple_choice',
        prompt: 'Trong câu: “Ai đã từng một lần đến ngắm thác Y-a-ly cũng phải trầm trồ khen ngợi.”, từ “Ai” là loại từ gì?',
        options: [
          { id: 'a', text: 'A. Đại từ dùng để trỏ chung mọi người (đại từ phiếm chỉ)' },
          { id: 'b', text: 'B. Đại từ nghi vấn dùng để hỏi' },
          { id: 'c', text: 'C. Danh từ riêng chỉ người' },
          { id: 'd', text: 'D. Động từ chỉ hành động' }
        ],
        correctOptionId: 'a',
        explanation: 'Trong câu này, "Ai" không dùng để hỏi mà dùng để chỉ chung bất cứ người nào (đại từ phiếm chỉ trỏ người).',
        level: 2
      },
      {
        id: 'eyl-q11',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 11',
        type: 'fill_blank',
        prompt: 'Điền đại từ xưng hô ngôi thứ nhất số ít thích hợp vào chỗ trống trong câu sau:\n"Thác Y-a-ly đẹp kì vĩ quá, [...] ước mong một ngày nào đó sẽ được đến thăm nơi này."',
        correctAnswer: ['em', 'Em', 'tôi', 'Tôi'],
        explanation: 'Đại từ xưng hô "em" hoặc "tôi" phù hợp để hoàn chỉnh câu bày tỏ ước mơ của bản thân.',
        level: 1
      },

      // B. KIỂM TRA VIẾT (10 điểm)
      {
        id: 'eyl-q12',
        topicId: 'vn-top-4',
        sectionTitle: 'B. KIỂM TRA VIẾT (10 điểm) – Tập làm văn tả cảnh thiên nhiên',
        questionNumberLabel: 'Bài viết (8 điểm)',
        type: 'fill_blank',
        prompt: 'Đề bài: Viết bài văn miêu tả một thắng cảnh thiên nhiên kì thú (thác nước, hang động, đỉnh núi hoặc bờ biển quê hương) mà em yêu thích (từ 15 – 20 câu):',
        correctAnswer: ['hoan_thanh'],
        essayData: {
          topicTitle: 'Tả cảnh thác nước hùng vĩ giữa núi rừng',
          prompt: 'Tả thác nước kì vĩ giữa núi rừng',
          outlineGuide: [
            'Mở bài: Giới thiệu cảnh thác nước mà em có dịp đến thăm hoặc nhìn thấy qua truyền hình.',
            'Thân bài: Tả âm thanh từ xa như sấm rền; Tả dòng thác từ trên cao trút xuống trắng xóa như dải lụa bạch khổng lồ; Những vạt cây rừng xanh tốt đôi bờ, hơi nước bốc lên mát lạnh như sương mù; Du khách thích thú ngắm cảnh.',
            'Kết bài: Cảm nghĩ tự hào và tình yêu trước vẻ đẹp thiên nhiên non sông gấm vóc Việt Nam.'
          ],
          sampleEssay: 'Đất nước Việt Nam ta có biết bao cảnh đẹp say đắm lòng người, nhưng để lại cho em ấn tượng sâu sắc nhất chính là cảnh thác nước hùng vĩ giữa núi rừng đại ngàn. Từ xa nửa cây số, tiếng nước réo ầm ầm như tiếng muôn vạn tiếng quân reo đã vang dội khắp thung lũng. Đến gần, dòng thác hiện ra sừng sững như một dải lụa bạch khổng lồ buông mình từ đỉnh núi xuống mặt hồ sâu thẳm. Bọt nước tung trắng xóa, tạo nên một làn sương mờ ảo bao phủ khắp không gian. Dưới ánh nắng vàng rực rỡ, những hạt bụi nước li ti khúc xạ ánh sáng tạo thành một dải cầu vồng bảy sắc lung linh vắt ngang dòng thác. Hai bên bờ, những rặng cây cổ thụ vươn cành tỏa bóng mát rượi, chim chóc líu lo hòa cùng tiếng reo của dòng nước tạo nên bản hòa ca tuyệt diệu. Đứng trước cảnh tượng kì vĩ ấy, em cảm thấy tâm hồn mình thật thư thái và càng thêm yêu mến non sông đất nước Việt Nam.'
        },
        explanation: 'Bài văn mẫu đạt điểm cao nhờ sử dụng từ ngữ gợi hình gợi cảm phong phú, kết hợp so sánh và nhân hóa tài tình.',
        level: 4
      }
    ]
  },

  // ==========================================
  // ĐỀ 8: TIẾNG VIỆT LỚP 5 - ĐỀ SỐ 4 (CÂY LÁ ĐỎ)
  // ==========================================
  {
    id: 'exam-vn-cld',
    title: 'Đề Kiểm Tra Giữa Học Kì I – Đề Số 4 (Môn Tiếng Việt)',
    subject: 'vietnamese',
    durationMinutes: 40,
    totalScore: 10,
    description: 'Cấu trúc hoàn chỉnh Sở GD&ĐT: A. Kiểm tra đọc (10 điểm gồm I. Đọc thầm và trả lời 11 câu hỏi đọc hiểu bài "Cây lá đỏ" & Luyện từ và câu: Đại từ, Từ đồng nghĩa, Từ nhiều nghĩa) & B. Kiểm tra viết (10 điểm: Tập làm văn miêu tả cảnh thiên nhiên).',
    questions: [
      {
        id: 'ecld-q1',
        topicId: 'vn-top-3',
        readingPassageId: 'cay-la-do',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 1',
        type: 'multiple_choice',
        prompt: 'Vì sao chị Phương lại gọi cái cây ở góc vườn là "cây lá đỏ"?',
        options: [
          { id: 'a', text: 'A. Vì cây nở hoa màu đỏ rực rỡ' },
          { id: 'b', text: 'B. Vì quả của cây chín có màu đỏ tươi' },
          { id: 'c', text: 'C. Vì cứ vào dịp gần Tết là lá cây ấy lại đỏ rực lên như một đám lửa' },
          { id: 'd', text: 'D. Vì thân cây được sơn màu đỏ' }
        ],
        correctOptionId: 'c',
        explanation: 'Đoạn đầu nêu rõ: "chị Phương rất quý nó và gọi nó là “cây lá đỏ”, vì cứ vào dịp gần Tết là lá cây ấy lại đỏ rực lên như một đám lửa."',
        level: 1
      },
      {
        id: 'ecld-q2',
        topicId: 'vn-top-3',
        readingPassageId: 'cay-la-do',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 2',
        type: 'multiple_choice',
        prompt: 'Nắm hạt giống cây lá đỏ là do ai mang về tặng chị Phương và từ đâu đến?',
        options: [
          { id: 'a', text: 'A. Do chị Duyên mang về từ vùng rừng núi nơi chị công tác' },
          { id: 'b', text: 'B. Do bố Loan mua từ hội chợ giống cây trồng' },
          { id: 'c', text: 'C. Do một người bạn ở trường sư phạm tặng' },
          { id: 'd', text: 'D. Do bà con ở Hưng Yên gửi lên' }
        ],
        correctOptionId: 'a',
        explanation: 'Trong thư chị Phương viết: "Một lần, chị Duyên đem về cho chị một nắm hạt cây lá đỏ. Chị Duyên bảo ở vùng rừng núi, nơi chị ấy làm việc có nhiều thứ cây ấy lắm."',
        level: 1
      },
      {
        id: 'ecld-q3',
        topicId: 'vn-top-3',
        readingPassageId: 'cay-la-do',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 3',
        type: 'multiple_choice',
        prompt: 'Vì sao gia đình Loan lại từng có ý định chặt cây lá đỏ đi?',
        options: [
          { id: 'a', text: 'A. Vì cây lá đỏ bị sâu bệnh khô héo' },
          { id: 'b', text: 'B. Vì gia đình định trồng cây nhãn Hưng Yên mà vườn lại chật' },
          { id: 'c', text: 'C. Vì cây chắn lối đi vào nhà' },
          { id: 'd', text: 'D. Vì cây không che được bóng mát' }
        ],
        correctOptionId: 'b',
        explanation: 'Trong bài viết: "Loan láng máng nghe thấy ông bàn với bà và bố mẹ định trồng cây nhãn Hưng Yên nhưng vườn chật quá. Có lẽ phải chặt cây lá đỏ đi."',
        level: 1
      },
      {
        id: 'ecld-q4',
        topicId: 'vn-top-3',
        readingPassageId: 'cay-la-do',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 4',
        type: 'multiple_choice',
        prompt: 'Chị Duyên đã hy sinh trong hoàn cảnh anh dũng nào?',
        options: [
          { id: 'a', text: 'A. Trong một lần đang giảng bài cho các em nhỏ vùng cao' },
          { id: 'b', text: 'B. Giữa lúc đang cùng đồng đội dũng cảm lấp hố bom cho xe ta ra chiến trường' },
          { id: 'c', text: 'C. Khi đang trồng rừng trên sườn đồi' },
          { id: 'd', text: 'D. Trong một chuyến đi hái thuốc cho thương binh' }
        ],
        correctOptionId: 'b',
        explanation: 'Trong thư chị Phương viết: "Sau lần gặp ấy, chị Duyên đã anh dũng hy sinh giữa lúc đang cùng đồng đội lấp hố bom cho xe ta ra chiến trường, em ạ..."',
        level: 1
      },
      {
        id: 'ecld-q5',
        topicId: 'vn-top-3',
        readingPassageId: 'cay-la-do',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 5',
        type: 'true_false',
        prompt: 'Ghi Đúng (Đ) hoặc Sai (S) vào các nhận định sau theo nội dung bài đọc "Cây lá đỏ":',
        tfItems: [
          { id: 'tf_cld1', statement: 'Cây lá đỏ cho những chùm quả rất thơm ngon ngọt lịm.', isTrue: false },
          { id: 'tf_cld2', statement: 'Chị Duyên là người bạn thân nhất của chị Phương thời học sinh.', isTrue: true },
          { id: 'tf_cld3', statement: 'Chị Phương tha thiết nhờ Loan nói với gia đình đừng chặt cây lá đỏ.', isTrue: true },
          { id: 'tf_cld4', statement: 'Đọc xong thư, Loan thấy cây lá đỏ đẹp hơn và quý cây hơn bao giờ hết.', isTrue: true }
        ],
        explanation: 'Ý 1 là SAI vì bài nêu: "Tuy quả nó không ăn được nhưng chị rất quý cây đó."',
        level: 2
      },
      {
        id: 'ecld-q6',
        topicId: 'vn-top-3',
        readingPassageId: 'cay-la-do',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 6',
        type: 'multiple_choice',
        prompt: 'Hình ảnh so sánh lá cây “đỏ rực lên như một đám lửa” có tác dụng gì?',
        options: [
          { id: 'a', text: 'A. Cho thấy cây đang bị cháy' },
          { id: 'b', text: 'B. Làm nổi bật màu đỏ rực rỡ, ấm áp và bừng sáng cả một góc vườn giữa tiết trời mùa đông giáp Tết' },
          { id: 'c', text: 'C. Cho biết cây lá đỏ rất nguy hiểm' },
          { id: 'd', text: 'D. Miêu tả lá cây héo úa' }
        ],
        correctOptionId: 'b',
        explanation: 'Hình ảnh so sánh làm nổi bật sắc đỏ kiêu hãnh, nồng ấm và tràn đầy sức sống của tán lá trong những ngày đông giá lạnh.',
        level: 2
      },
      {
        id: 'ecld-q7',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 7',
        type: 'multiple_choice',
        prompt: 'Từ nào dưới đây đồng nghĩa với từ “anh dũng” trong bài?',
        options: [
          { id: 'a', text: 'A. dũng cảm' },
          { id: 'b', text: 'B. cần cù' },
          { id: 'c', text: 'C. thật thà' },
          { id: 'd', text: 'D. hiền hậu' }
        ],
        correctOptionId: 'a',
        explanation: '"Anh dũng" đồng nghĩa với dũng cảm, can đảm, quả cảm.',
        level: 1
      },
      {
        id: 'ecld-q8',
        topicId: 'vn-top-2',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 8',
        type: 'multiple_choice',
        prompt: 'Từ “lá” trong câu nào dưới đây được dùng với NGHĨA CHUYỂN?',
        options: [
          { id: 'a', text: 'A. Lá bàng mùa đông rụng đỏ rực góc sân trường.' },
          { id: 'b', text: 'B. Loan nâng niu đọc lá thư chan chứa ân tình của chị Phương.' },
          { id: 'c', text: 'C. Những chiếc lá chè non rung rinh dưới nắng sớm.' },
          { id: 'd', text: 'D. Lá chuối xanh mướt đọng sương mai.' }
        ],
        correctOptionId: 'b',
        explanation: '"Lá thư" là nghĩa chuyển (dựa trên nét tương đồng về hình dáng mỏng dẹt). Các trường hợp còn lại đều là bộ phận của cây -> Nghĩa gốc.',
        level: 2
      },
      {
        id: 'ecld-q9',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 9',
        type: 'multiple_choice',
        prompt: 'Trong câu: “Em còn nhớ chị Duyên không?”, từ “không” giữ vai trò gì?',
        options: [
          { id: 'a', text: 'A. Từ dùng để phủ định' },
          { id: 'b', text: 'B. Đại từ nghi vấn dùng để hỏi xác nhận' },
          { id: 'c', text: 'C. Danh từ chỉ sự vật' },
          { id: 'd', text: 'D. Tính từ chỉ tính chất' }
        ],
        correctOptionId: 'b',
        explanation: 'Từ "không" đứng ở cuối câu hỏi dùng để hỏi xác nhận, là từ dùng để hỏi (nghi vấn).',
        level: 2
      },
      {
        id: 'ecld-q10',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 10',
        type: 'fill_blank',
        prompt: 'Điền đại từ xưng hô thích hợp vào chỗ trống trong lời nhắn gửi của Loan:\n"Chị Phương cứ yên tâm nhé, [...] sẽ bảo vệ và chăm sóc cây lá đỏ cẩn thận."',
        correctAnswer: ['em', 'Em'],
        explanation: 'Đại từ xưng hô "em" thể hiện vai vế người em nói chuyện với chị gái.',
        level: 1
      },
      {
        id: 'ecld-q11',
        topicId: 'vn-top-1',
        sectionTitle: 'A. KIỂM TRA ĐỌC (10 điểm) – I. Đọc thầm và làm bài tập (7 điểm)',
        questionNumberLabel: 'Câu 11',
        type: 'fill_blank',
        prompt: 'Tìm đại từ thay thế cho "cây lá đỏ" trong câu sau:\n"Tuy quả nó không ăn được nhưng chị rất quý cây đó."',
        correctAnswer: ['nó', 'Nó'],
        explanation: 'Từ "nó" là đại từ thay thế cho đối tượng "cây lá đỏ" nhằm tránh lặp từ.',
        level: 2
      },

      // B. KIỂM TRA VIẾT (10 điểm)
      {
        id: 'ecld-q12',
        topicId: 'vn-top-4',
        sectionTitle: 'B. KIỂM TRA VIẾT (10 điểm) – Tập làm văn tả cảnh thiên nhiên',
        questionNumberLabel: 'Bài viết (8 điểm)',
        type: 'fill_blank',
        prompt: 'Đề bài: Viết bài văn miêu tả một cảnh đẹp thiên nhiên quê hương (hoàng hôn trên dòng sông, buổi sớm mùa thu trên cánh đồng lúa, hoặc một góc vườn thiên nhiên rực rỡ sắc màu) mà em yêu thích (từ 15 – 20 câu):',
        correctAnswer: ['hoan_thanh'],
        essayData: {
          topicTitle: 'Tả cảnh hoàng hôn thanh bình trên dòng sông quê hương',
          prompt: 'Tả cảnh dòng sông quê em vào buổi chiều hoàng hôn',
          outlineGuide: [
            'Mở bài: Giới thiệu dòng sông quê hương hiền hòa vào một buổi chiều hoàng hôn lãng mạn.',
            'Thân bài: Nắng chiều nhạt dần, mặt nước lấp lánh dát vàng dát bạc; Bầu trời nhuộm sắc đỏ tía, những cánh chim vội vã bay về tổ; Hai bên bờ sông, lũy tre rì rào trong gió nhẹ; Con thuyền câu buông lưới bình yên.',
            'Kết bài: Tình cảm gắn bó yêu thương tha thiết với dòng sông và thiên nhiên quê nhà.'
          ],
          sampleEssay: 'Quê hương em có biết bao cảnh đẹp làm say lòng người, nhưng gắn bó thân thiết và để lại trong em nhiều cảm xúc nhất chính là dòng sông hiền hòa vào những buổi chiều hoàng hôn buông xuống. Khi ánh nắng chói chang của ban ngày dần tàn lụi, vầng thái dương tựa như một quả cầu lửa khổng lồ từ từ hạ mình xuống sau rặng núi xa. Bầu trời chuyển dần từ màu vàng cam sang một màu tím biếc diệu kỳ. Mặt sông phẳng lặng như một tấm gương khổng lồ soi bóng mây trời, phản chiếu muôn ngàn tia sáng lấp lánh như dát bạc. Những làn gió thu se lạnh thổi qua làm mặt nước gợn sóng lăn tăn, khẽ vỗ về đôi bờ đất phù sa màu mỡ. Ven sông, những rặng tre xanh rì rào trò chuyện cùng đàn chim ríu rít gọi nhau bay về tổ. Xa xa, chiếc thuyền chài của bác vạn chài buông lưới giữa dòng nước đỏ rực, tiếng gõ mái chèo nhịp nhàng hòa vào không gian yên ả. Đứng ngắm hoàng hôn buông trên dòng sông quê mẹ, em thấy lòng mình bình yên đến lạ và càng thêm trân quý mảnh đất chôn nhau cắt rốn này.'
        },
        explanation: 'Bài văn mẫu miêu tả cảnh thiên nhiên dòng sông hoàng hôn giàu chất thơ, kết hợp hình ảnh so sánh, nhân hóa và liên tưởng độc đáo.',
        level: 4
      }
    ]
  }
];


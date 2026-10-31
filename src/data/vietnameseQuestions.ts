import { ExerciseQuestion } from '../types';

export const vietnamesePronounQuestions: ExerciseQuestion[] = [
  {
    id: 'vn-pn-1',
    topicId: 'vn-top-1',
    type: 'multiple_choice',
    title: 'Nhận biết nhóm từ chỉ toàn đại từ',
    prompt: 'Dòng nào dưới đây chỉ gồm các đại từ?',
    options: [
      { id: 'a', text: 'A. tôi, bạn, chúng tôi, họ' },
      { id: 'b', text: 'B. mẹ, cô giáo, em, học sinh' },
      { id: 'c', text: 'C. ai, đẹp, nào, chúng ta' },
      { id: 'd', text: 'D. kia, chạy, vậy, tôi' }
    ],
    correctOptionId: 'a',
    explanation: '• Dòng A chỉ gồm các đại từ xưng hô: tôi, bạn, chúng tôi, họ.\n• Dòng B gồm các danh từ chỉ người thân, nghề nghiệp (mẹ, cô giáo, em, học sinh) dùng để xưng hô chứ không phải là đại từ.\n• Dòng C có từ "đẹp" là tính từ.\n• Dòng D có từ "chạy" là động từ.',
    hint: 'Phân biệt đại từ với các danh từ chỉ người thân, nghề nghiệp nhé em!',
    level: 1
  },
  {
    id: 'vn-pn-2',
    topicId: 'vn-top-1',
    type: 'multiple_choice',
    title: 'Phát hiện đại từ thay thế trong câu',
    prompt: 'Trong câu: "Mây kéo kín bầu trời. Thấy vậy, đàn chim vội bay về tổ.", từ nào là đại từ và dùng để làm gì?',
    options: [
      { id: 'a', text: 'A. Từ "vậy" – là đại từ thay thế cho việc mây kéo kín bầu trời.' },
      { id: 'b', text: 'B. Từ "thấy" – là động từ chỉ hoạt động.' },
      { id: 'c', text: 'C. Từ "đàn chim" – là đại từ xưng hô.' },
      { id: 'd', text: 'D. Từ "về tổ" – là đại từ chỉ địa điểm.' }
    ],
    correctOptionId: 'a',
    explanation: 'Từ "vậy" là đại từ thay thế, thay cho cả nội dung sự việc ở câu trước ("mây kéo kín bầu trời"), giúp câu văn ngắn gọn và tránh lặp lại nguyên văn.',
    hint: 'Đại từ thay thế thường là các từ: thế, vậy, đó, này, ấy...',
    level: 2
  },
  {
    id: 'vn-pn-3',
    topicId: 'vn-top-1',
    type: 'multiple_choice',
    title: 'Sửa lỗi dùng đại từ xưng hô không phù hợp',
    prompt: 'Câu văn nào dưới đây có lỗi dùng đại từ xưng hô chưa phù hợp, cần sửa lại?',
    options: [
      { id: 'a', text: 'A. Cô giáo bước vào lớp. Chúng nó đứng dậy chào cô.' },
      { id: 'b', text: 'B. Lan nói với Mai: "Chúng mình cùng đến thư viện nhé!"' },
      { id: 'c', text: 'C. Nam thưa với bà: "Cháu mời bà uống nước ạ!"' },
      { id: 'd', text: 'D. Chúng ta hãy cùng nhau giữ gìn lớp học xanh, sạch, đẹp.' }
    ],
    correctOptionId: 'a',
    explanation: 'Câu A dùng đại từ "chúng nó" khi xưng hô với cô giáo là thiếu lễ phép. Cần sửa đại từ "chúng nó" thành "chúng em" để thể hiện sự tôn trọng, lễ phép với thầy cô giáo.',
    hint: 'Chú ý cách xưng hô lễ phép của học sinh với thầy cô!',
    level: 2
  },
  {
    id: 'vn-pn-4',
    topicId: 'vn-top-1',
    type: 'fill_blank',
    title: 'Điền đại từ xưng hô lịch sự',
    prompt: 'Điền đại từ xưng hô thích hợp vào chỗ chấm:\nNam thưa với bà: "............ mời bà uống nước ạ!"',
    correctAnswer: ['Cháu', 'cháu', 'Con', 'con'],
    explanation: 'Khi nói chuyện với bà, học sinh xưng hô lễ phép là "cháu" hoặc "con" để thể hiện sự kính trọng người lớn tuổi trong gia đình.',
    hint: 'Xưng hô với ông bà cần dùng từ lễ phép.',
    level: 1
  },
  {
    id: 'vn-pn-5',
    topicId: 'vn-top-1',
    type: 'multiple_choice',
    title: 'Xác định nội dung đại từ thay thế',
    prompt: 'Trong câu: "Bố làm một chiếc giá sách. Đó là món quà bố tặng em.", từ in đậm "Đó" thay thế cho từ ngữ nào?',
    options: [
      { id: 'a', text: 'A. một chiếc giá sách' },
      { id: 'b', text: 'B. bố' },
      { id: 'c', text: 'C. món quà' },
      { id: 'd', text: 'D. em' }
    ],
    correctOptionId: 'a',
    explanation: 'Từ "Đó" thay thế cho "một chiếc giá sách" vừa được nhắc đến ở câu trước, giúp tránh lặp từ.',
    level: 1
  },
  {
    id: 'vn-pn-6',
    topicId: 'vn-top-1',
    type: 'multiple_choice',
    title: 'Xác định đại từ nghi vấn (dùng để hỏi)',
    prompt: 'Từ nào trong câu sau là đại từ nghi vấn: "Ai đã dạy các em bài học làm người quý giá ấy?"',
    options: [
      { id: 'a', text: 'A. Ai' },
      { id: 'b', text: 'B. các em' },
      { id: 'c', text: 'C. bài học' },
      { id: 'd', text: 'D. ấy' }
    ],
    correctOptionId: 'a',
    explanation: 'Từ "Ai" là đại từ nghi vấn dùng để hỏi về người.',
    level: 1
  }
];

export const vietnameseWordMeaningQuestions: ExerciseQuestion[] = [
  {
    id: 'vn-poly-1',
    topicId: 'vn-top-2',
    type: 'true_false',
    title: 'Phân biệt nghĩa gốc và nghĩa chuyển của từ "chân"',
    prompt: 'Xác định từ "chân" trong các câu sau được dùng với nghĩa gốc hay nghĩa chuyển:',
    tfItems: [
      { id: 'tf1', statement: 'Từ "chân" trong câu "Em bé chạy chân trần trên bãi cỏ" là nghĩa gốc.', isTrue: true },
      { id: 'tf2', statement: 'Từ "chân" trong câu "Nhà bà ngoại tôi ở dưới chân một quả đồi" là nghĩa gốc.', isTrue: false },
      { id: 'tf3', statement: 'Từ "chân" trong câu "Dòng suối trong vắt uốn quanh chân núi" là nghĩa chuyển.', isTrue: true },
      { id: 'tf4', statement: 'Từ "chân" trong câu "Bà bước chầm chậm, đôi chân đã mỏi" là nghĩa chuyển.', isTrue: false }
    ],
    explanation: '• "Chân em bé" và "đôi chân bà" là bộ phận của cơ thể người để đi đứng -> Nghĩa gốc.\n• "Chân đồi", "chân núi" là phần dưới cùng tiếp giáp với mặt đất -> Nghĩa chuyển (dựa trên sự tương đồng về vị trí dưới cùng).',
    hint: 'Bộ phận cơ thể người/động vật là nghĩa gốc; phần dưới cùng của đồ vật/núi đồi là nghĩa chuyển.',
    level: 2
  },
  {
    id: 'vn-poly-2',
    topicId: 'vn-top-2',
    type: 'multiple_choice',
    title: 'Phân biệt nghĩa gốc và nghĩa chuyển của từ "lá"',
    prompt: 'Trong câu: "Chị Phương viết một lá thư tha thiết gửi về cho Loan.", từ "lá" được dùng với nghĩa gốc hay nghĩa chuyển?',
    options: [
      { id: 'a', text: 'A. Nghĩa chuyển' },
      { id: 'b', text: 'B. Nghĩa gốc' },
      { id: 'c', text: 'C. Vừa là nghĩa gốc vừa là nghĩa chuyển' },
      { id: 'd', text: 'D. Không phải hai nghĩa trên' }
    ],
    correctOptionId: 'a',
    explanation: '• Nghĩa gốc của từ "lá": Bộ phận của cây xanh thường có màu xanh, mọc từ cành hoặc thân cây (ví dụ: lá cây, lá bàng).\n• "Lá thư", "lá cờ", "lá buồm": Dùng với nghĩa chuyển (dựa trên nét tương đồng về hình dáng mỏng, dẹt).',
    hint: 'Nghĩa gốc của "lá" là lá của cây cối.',
    level: 1
  },
  {
    id: 'vn-poly-3',
    topicId: 'vn-top-2',
    type: 'multiple_choice',
    title: 'Tìm từ đồng nghĩa với "hùng vĩ"',
    prompt: 'Dãy từ nào dưới đây gồm các từ đồng nghĩa với từ "hùng vĩ" trong câu "khung cảnh hùng vĩ của núi rừng"?',
    options: [
      { id: 'a', text: 'A. Tráng lệ, kỳ vĩ, nguy nga' },
      { id: 'b', text: 'B. Phẳng lặng, êm đềm, bình yên' },
      { id: 'c', text: 'C. Mênh mông, rộng lớn, thênh thang' },
      { id: 'd', text: 'D. Rực rỡ, lấp lánh, thơ mộng' }
    ],
    correctOptionId: 'a',
    explanation: '"Hùng vĩ" có nghĩa là to lớn, đồ sộ, gây ấn tượng mạnh mẽ. Các từ đồng nghĩa gồm: kỳ vĩ, tráng lệ, nguy nga.',
    hint: 'Từ gợi tả sự kì vĩ, đồ sộ của thiên nhiên cảnh vật.',
    level: 2
  },
  {
    id: 'vn-poly-4',
    topicId: 'vn-top-2',
    type: 'multiple_choice',
    title: 'Tìm từ đồng nghĩa với "anh dũng"',
    prompt: 'Dòng nào dưới đây gồm các từ đồng nghĩa với từ "anh dũng"?',
    options: [
      { id: 'a', text: 'A. dũng cảm, quả cảm' },
      { id: 'b', text: 'B. hiền lành, thật thà' },
      { id: 'c', text: 'C. siêng năng, cần mẫn' },
      { id: 'd', text: 'D. rộn rã, náo nhiệt' }
    ],
    correctOptionId: 'a',
    explanation: '"Anh dũng" đồng nghĩa với dũng cảm, quả cảm, can đảm, không ngại hiểm nguy hy sinh vì việc lớn.',
    level: 1
  },
  {
    id: 'vn-poly-5',
    topicId: 'vn-top-2',
    type: 'multiple_choice',
    title: 'Phân loại từ "mũi" mang nghĩa gốc và nghĩa chuyển',
    prompt: 'Nhóm từ nào dưới đây gồm toàn các từ mà từ "mũi" được dùng với NGHĨA CHUYỂN?',
    options: [
      { id: 'a', text: 'A. mũi dao, mũi thuyền, mũi Cà Mau, mũi tên' },
      { id: 'b', text: 'B. sổ mũi, ngạt mũi, sống mũi' },
      { id: 'c', text: 'C. mũi người, cánh mũi, chảy máu mũi' },
      { id: 'd', text: 'D. mũi chó, mũi mèo, mũi lợn' }
    ],
    correctOptionId: 'a',
    explanation: 'Mũi dao, mũi thuyền, mũi Cà Mau, mũi tên đều mượn đặc điểm "phần nhọn đầu nhô ra phía trước" để gọi tên đồ vật và địa danh -> Dùng với nghĩa chuyển.',
    level: 2
  },
  {
    id: 'vn-poly-6',
    topicId: 'vn-top-2',
    type: 'multiple_choice',
    title: 'Các nét nghĩa của từ "ngọt"',
    prompt: 'Trong câu: "Con dao mới mài này cắt rau rất ngọt.", từ "ngọt" có ý nghĩa gì?',
    options: [
      { id: 'a', text: 'A. Cắt rất sắc bén, dễ dàng, đường cắt mịn màng' },
      { id: 'b', text: 'B. Có vị như vị của đường, mật' },
      { id: 'c', text: 'C. Âm thanh nghe rất êm dịu' },
      { id: 'd', text: 'D. Lời nói dịu dàng dễ nghe' }
    ],
    correctOptionId: 'a',
    explanation: 'Từ "ngọt" trong "cắt rất ngọt" được dùng với nghĩa chuyển: chỉ sự bén ngọt, sắc bén, cắt lướt qua dễ dàng.',
    level: 2
  }
];

export const vietnameseReadingQuestionsThacYAly: ExerciseQuestion[] = [
  {
    id: 'vn-rd-yaly-1',
    topicId: 'vn-top-3',
    readingPassageId: 'thac-y-a-ly',
    type: 'multiple_choice',
    title: 'Đọc hiểu Thác Y-a-ly – Vị trí',
    prompt: 'Hồ nước tuyệt đẹp ở lưng chừng trời nằm trên dãy núi nào?',
    options: [
      { id: 'a', text: 'A. Dãy núi Trường Sơn' },
      { id: 'b', text: 'B. Dãy núi Chư-pa' },
      { id: 'c', text: 'C. Dãy núi Ngọc Linh' },
      { id: 'd', text: 'D. Dãy núi Hoàng Liên Sơn' }
    ],
    correctOptionId: 'b',
    explanation: 'Trong bài đọc ghi rõ: "Ở Tây Nguyên có một hồ rộng mênh mông nằm trên dãy núi Chư-pa."',
    level: 1
  },
  {
    id: 'vn-rd-yaly-2',
    topicId: 'vn-top-3',
    readingPassageId: 'thac-y-a-ly',
    type: 'multiple_choice',
    title: 'Đọc hiểu Thác Y-a-ly – Bờ đông bắc',
    prompt: 'Cảnh vật ở phía bờ đông bắc của mặt hồ được miêu tả như thế nào?',
    options: [
      { id: 'a', text: 'A. Sóng chồm dữ dội, bọt tung trắng xóa, nước réo ào ào.' },
      { id: 'b', text: 'B. Nước ào ạt phóng qua núi rồi đổ xuống thành mười hai bậc.' },
      { id: 'c', text: 'C. Mặt hồ phẳng lặng như gương, cây gỗ tếch xòe tán rộng soi bóng xuống mặt nước.' },
      { id: 'd', text: 'D. Nước trút từ trên trời xuống trông như một biển mù sương.' }
    ],
    correctOptionId: 'c',
    explanation: 'Đoạn 2 nêu rõ: "Ở phía bờ đông bắc, mặt hồ phẳng lặng như gương. Những cây gỗ tếch xòe tán rộng soi bóng xuống mặt nước."',
    level: 1
  },
  {
    id: 'vn-rd-yaly-3',
    topicId: 'vn-top-3',
    readingPassageId: 'thac-y-a-ly',
    type: 'multiple_choice',
    title: 'Đọc hiểu Thác Y-a-ly – Tìm nhận định SAI',
    prompt: 'Ý nào dưới đây là nhận định SAI về thác Y-a-ly?',
    options: [
      { id: 'a', text: 'A. Thác Y-a-ly được tạo thành do nguồn nước sông Pô-cô thúc mạnh vào sườn núi Chư-pa.' },
      { id: 'b', text: 'B. Nơi đây chỉ có cảnh đẹp thiên nhiên chứ không có công trình thủy điện nào.' },
      { id: 'c', text: 'C. Thác nước chảy mòn đá tạo thành mười hai bậc từ trên đỉnh núi xuống mặt nước.' },
      { id: 'd', text: 'D. Phía bờ tây, mặt hồ sóng chồm dữ dội, bọt tung trắng xóa.' }
    ],
    correctOptionId: 'b',
    explanation: 'Nhận định B là SAI vì trong bài nêu rõ: "Ở đây có nhà máy thủy điện Y-a-ly và là nơi nghỉ mát vô cùng hấp dẫn."',
    level: 2
  },
  {
    id: 'vn-rd-yaly-8',
    topicId: 'vn-top-3',
    readingPassageId: 'thac-y-a-ly',
    type: 'multiple_choice',
    title: 'Kiến thức từ câu – Xác định tính từ',
    prompt: 'Trong câu: “Những cây gỗ tếch xòe tán rộng soi bóng xuống mặt nước.”, từ nào là tính từ?',
    options: [
      { id: 'a', text: 'A. cây' },
      { id: 'b', text: 'B. xòe' },
      { id: 'c', text: 'C. rộng' },
      { id: 'd', text: 'D. bóng' }
    ],
    correctOptionId: 'c',
    explanation: '• "cây", "bóng", "mặt nước" là danh từ.\n• "xòe", "soi" là động từ.\n• "rộng" là tính từ chỉ đặc điểm kích thước của tán cây.',
    level: 2
  }
];

export const vietnameseReadingQuestionsCayLaDo: ExerciseQuestion[] = [
  {
    id: 'vn-rd-cld-1',
    topicId: 'vn-top-3',
    readingPassageId: 'cay-la-do',
    type: 'multiple_choice',
    title: 'Đọc hiểu Cây lá đỏ – Nguồn gốc',
    prompt: 'Cây lá đỏ trồng ở góc vườn nhà Loan có nguồn gốc từ đâu?',
    options: [
      { id: 'a', text: 'A. Do chị Phương mua ở hội chợ hoa Tết.' },
      { id: 'b', text: 'B. Do ông của Loan mang ở quê lên trồng.' },
      { id: 'c', text: 'C. Do chị Duyên mang hạt từ vùng rừng núi về tặng chị Phương.' },
      { id: 'd', text: 'D. Do mẹ Loan xin giống từ nhà hàng xóm.' }
    ],
    correctOptionId: 'c',
    explanation: 'Trong thư chị Phương viết: "Một lần, chị Duyên đem về cho chị một nắm hạt cây lá đỏ. Chị Duyên bảo ở vùng rừng núi... có nhiều thứ cây ấy lắm."',
    level: 1
  },
  {
    id: 'vn-rd-cld-2',
    topicId: 'vn-top-3',
    readingPassageId: 'cay-la-do',
    type: 'multiple_choice',
    title: 'Đọc hiểu Cây lá đỏ – Lí do định chặt cây',
    prompt: 'Vì sao ông bàn với bà và bố mẹ định chặt cây lá đỏ đi?',
    options: [
      { id: 'a', text: 'A. Vì cây lá đỏ bị sâu bệnh khô héo.' },
      { id: 'b', text: 'B. Vì vườn chật mà gia đình muốn trồng cây nhãn Hưng Yên.' },
      { id: 'c', text: 'C. Vì cây lá đỏ rụng nhiều lá làm bẩn sân vườn.' },
      { id: 'd', text: 'D. Vì quả của cây lá đỏ có vị quá chua.' }
    ],
    correctOptionId: 'b',
    explanation: 'Loan nghe thấy ông bàn định trồng cây nhãn Hưng Yên nhưng vườn chật quá nên có lẽ phải chặt cây lá đỏ đi.',
    level: 1
  },
  {
    id: 'vn-rd-cld-3',
    topicId: 'vn-top-3',
    readingPassageId: 'cay-la-do',
    type: 'multiple_choice',
    title: 'Đọc hiểu Cây lá đỏ – Ý nghĩa kỉ niệm',
    prompt: 'Vì sao chị Phương lại thiết tha xin gia đình đừng chặt cây lá đỏ đi?',
    options: [
      { id: 'a', text: 'A. Vì cây lá đỏ cho rất nhiều quả ngọt.' },
      { id: 'b', text: 'B. Vì cây là kỉ niệm thiêng liêng của chị với chị Duyên - người bạn thân đã hy sinh.' },
      { id: 'c', text: 'C. Vì cây lá đỏ che bóng mát cho cả ngôi nhà.' },
      { id: 'd', text: 'D. Vì chị Phương muốn giữ lại để bán cây lấy tiền.' }
    ],
    correctOptionId: 'b',
    explanation: 'Cây lá đỏ gắn liền với kỉ niệm của chị Phương và chị Duyên - người bạn thân thời học sinh đã dũng cảm hy sinh trên chiến trường bảo vệ Tổ quốc.',
    level: 2
  },
  {
    id: 'vn-rd-cld-5',
    topicId: 'vn-top-3',
    readingPassageId: 'cay-la-do',
    type: 'multiple_choice',
    title: 'Tác dụng của biện pháp so sánh',
    prompt: 'Hình ảnh so sánh “đỏ rực lên như một đám lửa” có tác dụng gì?',
    options: [
      { id: 'a', text: 'A. Giúp người đọc hình dung màu sắc lá đỏ vô cùng rực rỡ, ấm áp và bừng sáng góc vườn.' },
      { id: 'b', text: 'B. Làm người đọc cảm thấy sợ hãi vì nghĩ cây sắp bốc cháy.' },
      { id: 'c', text: 'C. Cho biết cây lá đỏ rất nóng và nguy hiểm.' },
      { id: 'd', text: 'D. Thể hiện cây lá đỏ đang bị héo úa.' }
    ],
    correctOptionId: 'a',
    explanation: 'Hình ảnh so sánh làm nổi bật sắc đỏ chói lọi, rực rỡ và tràn đầy sức sống của cây vào dịp giáp Tết, làm sáng bừng cả không gian góc vườn.',
    level: 3
  }
];

export const vietnameseReadingQuestionsDoiChe: ExerciseQuestion[] = [
  {
    id: 'vn-rd-che-1',
    topicId: 'vn-top-3',
    readingPassageId: 'som-mai-doi-che',
    type: 'multiple_choice',
    title: 'Đọc hiểu Sớm mai trên đồi chè – Thời điểm',
    prompt: 'Bạn nhỏ theo bà lên đồi chè vào lúc nào?',
    options: [
      { id: 'a', text: 'A. Lúc trời còn tờ mờ sáng' },
      { id: 'b', text: 'B. Lúc trời đã trưa nắng' },
      { id: 'c', text: 'C. Lúc chiều vừa tắt nắng' },
      { id: 'd', text: 'D. Lúc mặt trời đã lên cao' }
    ],
    correctOptionId: 'a',
    explanation: 'Bài đọc viết: "Mỗi lần về quê, tôi thích nhất là được theo bà lên đồi từ lúc trời còn tờ mờ sáng."',
    level: 1
  },
  {
    id: 'vn-rd-che-2',
    topicId: 'vn-top-3',
    readingPassageId: 'som-mai-doi-che',
    type: 'multiple_choice',
    title: 'Hình ảnh so sánh luống chè',
    prompt: 'Những luống chè xanh mướt uốn lượn quanh sườn đồi được so sánh với hình ảnh nào?',
    options: [
      { id: 'a', text: 'A. Một tấm khăn voan trắng' },
      { id: 'b', text: 'B. Những bậc thang khổng lồ dẫn lên trời' },
      { id: 'c', text: 'C. Những hạt ngọc long lanh' },
      { id: 'd', text: 'D. Dòng suối trong vắt uốn quanh chân núi' }
    ],
    correctOptionId: 'b',
    explanation: 'Trích câu văn: "Các luống chè xanh mướt uốn lượn quanh sườn đồi, trông như những bậc thang khổng lồ dẫn lên trời."',
    level: 1
  },
  {
    id: 'vn-rd-che-5',
    topicId: 'vn-top-3',
    readingPassageId: 'som-mai-doi-che',
    type: 'multiple_choice',
    title: 'Phát hiện biện pháp nhân hóa',
    prompt: 'Trong câu: “Rồi ông mặt trời thức dậy sau dãy núi xa.”, mặt trời được nhân hóa bằng cách nào?',
    options: [
      { id: 'a', text: 'A. Gọi mặt trời bằng từ “ông” và tả hành động “thức dậy” như con người.' },
      { id: 'b', text: 'B. So sánh mặt trời với dãy núi xa.' },
      { id: 'c', text: 'C. Tả màu sắc rực rỡ của mặt trời.' },
      { id: 'd', text: 'D. Tả mặt trời tròn như quả bóng.' }
    ],
    correctOptionId: 'a',
    explanation: 'Tác giả dùng từ xưng hô của người ("ông") và hoạt động của con người ("thức dậy") để gọi và tả mặt trời, làm cho thiên nhiên trở nên gần gũi, sinh động.',
    level: 2
  }
];

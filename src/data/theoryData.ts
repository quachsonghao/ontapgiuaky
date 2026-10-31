import { TheorySection } from '../types';

export const mathTheoryList: TheorySection[] = [
  {
    id: 'math-th-1',
    subject: 'math',
    title: '1. Phân số thập phân và Số thập phân',
    summary: 'Nền tảng kiến thức quan trọng nhất của học kì I môn Toán lớp 5.',
    bullets: [
      {
        heading: 'Phân số thập phân là gì?',
        content: 'Các phân số có mẫu số là 10, 100, 1 000, 10 000,... được gọi là phân số thập phân.',
        examples: [
          '7/10; 63/100; 125/1000 là các phân số thập phân.',
          'Chú ý: Phân số như 3/4 có thể quy đồng thành 75/100 (nhân cả tử và mẫu với 25) để thành phân số thập phân!',
          'Phân số 18/500 có thể rút gọn chia cả tử và mẫu cho 5? 18 không chia hết cho 5, hoặc quy đồng nhân 2 thành 36/1000.'
        ]
      },
      {
        heading: 'Cấu tạo số thập phân',
        content: 'Mỗi số thập phân gồm hai phần: Phần nguyên và Phần thập phân, chúng được ngăn cách bởi dấu phẩy.',
        examples: [
          'Ví dụ số 42,309: Phần nguyên là 42; Phần thập phân gồm 3 phần mười, 0 phần trăm, 9 phần nghìn.',
          'Các hàng bên trái dấu phẩy (phần nguyên): đơn vị, chục, trăm, nghìn,...',
          'Các hàng bên phải dấu phẩy (phần thập phân): hàng phần mười (sau dấu phẩy 1 chữ số), hàng phần trăm (2 chữ số), hàng phần nghìn (3 chữ số)...'
        ]
      },
      {
        heading: 'Quy tắc viết số thập phân',
        content: 'Muốn viết số thập phân, ta viết lần lượt từ hàng cao đến hàng thấp: trước hết viết phần nguyên, viết dấu phẩy, sau đó viết phần thập phân. Cần ghi đủ chữ số 0 ở những hàng không có đơn vị!',
        examples: [
          'Số gồm: 56 đơn vị, 4 phần mười và 7 phần nghìn được viết là: 56,407 (hàng phần trăm khuyết thì viết số 0).',
          'Số gồm: hai mươi lăm đơn vị và sáu phần trăm viết là: 25,06.'
        ]
      }
    ],
    memoryTip: 'Mẹo nhớ: Đếm số chữ số 0 ở mẫu số của phân số thập phân bằng đúng số chữ số sau dấu phẩy! (Mẫu số 10 có 1 số 0 -> 0,1; mẫu số 100 có 2 số 0 -> 0,01).'
  },
  {
    id: 'math-th-2',
    subject: 'math',
    title: '2. Đọc, viết, so sánh và làm tròn số thập phân',
    summary: 'Cách so sánh độ lớn và kỹ năng làm tròn số thập phân chuẩn xác.',
    bullets: [
      {
        heading: 'Cách đọc số thập phân',
        content: 'Đọc phần nguyên trước, sau đó đọc "phẩy", rồi đọc phần thập phân.',
        examples: [
          '90,07 đọc là: "Chín mươi phẩy không bảy" (hoặc chín mươi phẩy không trăm linh bảy).',
          '6,305 đọc là: "Sáu phẩy ba trăm linh năm".'
        ]
      },
      {
        heading: 'Quy tắc so sánh hai số thập phân',
        content: 'Bước 1: So sánh phần nguyên trước. Số nào có phần nguyên lớn hơn thì số đó lớn hơn.\nBước 2: Nếu phần nguyên bằng nhau, so sánh từng hàng ở phần thập phân từ trái sang phải (so sánh hàng phần mười, nếu bằng nhau thì so sánh hàng phần trăm, hàng phần nghìn...).',
        examples: [
          'So sánh: 42,086 < 42,168 < 42,275 < 42,309 (hàng phần mười 0 < 1 < 2 < 3).',
          'So sánh: 7,88 > 7,808 > 7,8 (vì 7,8 = 7,800).'
        ]
      },
      {
        heading: 'Quy tắc làm tròn số thập phân',
        content: 'Muốn làm tròn một số thập phân đến một hàng nào đó, ta nhìn chữ số ngay sau hàng đó:',
        rules: [
          'Nếu chữ số sau nó từ 0 đến 4: GIỮ NGUYÊN chữ số ở hàng cần làm tròn và bỏ các chữ số phía sau.',
          'Nếu chữ số sau nó từ 5 đến 9: TĂNG chữ số ở hàng cần làm tròn thêm 1 đơn vị và bỏ các chữ số phía sau.'
        ],
        examples: [
          'Làm tròn 2,76 đến hàng phần mười: Chữ số hàng phần trăm là 6 (lớn hơn 5) -> Làm tròn thành 2,8.',
          'Làm tròn 38,264 đến hàng phần mười: Chữ số hàng phần trăm là 6 -> Làm tròn thành 38,3.',
          'Làm tròn 0,856 đến hàng phần mười: Chữ số hàng phần trăm là 5 -> Làm tròn thành 0,9.'
        ]
      }
    ],
    memoryTip: 'Mẹo nhớ: "Từ 0 đến 4 giữ nguyên - Từ 5 đến 9 cộng thêm 1"!'
  },
  {
    id: 'math-th-3',
    subject: 'math',
    title: '3. Đơn vị đo diện tích, khối lượng và độ dài',
    summary: 'Bảng quy đổi và các mối liên hệ đặc biệt giữa các đơn vị.',
    bullets: [
      {
        heading: 'Bảng đơn vị đo diện tích',
        content: 'km² — hm² (ha) — dam² — m² — dm² — cm² — mm².\nMỗi đơn vị diện tích liền kề gấp hoặc kém nhau 100 lần (tương ứng với 2 chữ số 0).',
        examples: [
          '1 km² = 100 ha = 1 000 000 m²',
          '1 ha = 10 000 m²',
          '1 m² = 100 dm² = 10 000 cm² = 1 000 000 mm²',
          '1 dm² = 100 cm² = 0,01 m²'
        ]
      },
      {
        heading: 'Phương pháp đổi đơn vị đo sang số thập phân',
        content: 'Khi đổi từ đơn vị bé sang đơn vị lớn hơn, ta chia cho 10, 100, 1 000,... rồi viết dưới dạng số thập phân.',
        examples: [
          '7 m² 8 dm² = 7 m² + 8/100 m² = 7,08 m² (Vì 1 m² = 100 dm²).',
          '4 600 ha = 46 km² (Vì 1 km² = 100 ha, lấy 4600 : 100 = 46).',
          '3/4 km² = 75 ha (Vì 1 km² = 100 ha, lấy 100 x 3/4 = 75 ha).',
          '3 tấn 75 kg = 3,075 tấn (Vì 1 tấn = 1000 kg).'
        ]
      }
    ],
    memoryTip: 'Cực kì lưu ý: 1 ha = 10 000 m² (ha chính là héc-tô-mét vuông hm²). Đổi 9 ha = 90 000 m²!'
  },
  {
    id: 'math-th-4',
    subject: 'math',
    title: '4. Đặt tính & 4 phép tính chuẩn Tiểu học',
    summary: 'Cách trình bày các phép tính theo đúng quy chuẩn vở ô ly tiểu học.',
    bullets: [
      {
        heading: 'Phép nhân số tự nhiên và số thập phân',
        content: '• Viết thừa số thứ nhất ở trên, thừa số thứ hai ở dưới sao cho các chữ số thẳng cột với nhau.\n• Thực hiện nhân từng chữ số của thừa số thứ hai với thừa số thứ nhất từ phải sang trái.\n• Tích riêng thứ hai lùi sang trái 1 cột so với tích riêng thứ nhất, tích riêng thứ ba lùi 2 cột.\n• Cộng các tích riêng lại với nhau.',
        examples: [
          'Ví dụ 3 125 x 24 = 75 000:',
          'Tích riêng thứ nhất: 3125 x 4 = 12 500',
          'Tích riêng thứ hai: 3125 x 2 = 6 250 (lùi vào 1 cột sang bên trái)',
          'Cộng hai tích riêng: 12500 + 62500 = 75 000.'
        ]
      },
      {
        heading: 'Phép chia số tự nhiên',
        content: '• Đặt tính số bị chia bên trái, số chia bên phải, ngăn cách bởi vạch dọc và vạch ngang.\n• Lấy từ trái sang phải của số bị chia số chữ số đủ lớn hơn hoặc bằng số chia để chia lượt đầu tiên.\n• Ở mỗi lượt chia, tìm thương rồi nhân ngược lại và trừ nhẩm để tìm số dư.\n• Hạ chữ số tiếp theo xuống cạnh số dư để chia tiếp.',
        examples: [
          '6 342 : 42 = 151:',
          'Lượt 1: 63 chia 42 được 1, dư 21.',
          'Lượt 2: Hạ 4 được 214; 214 chia 42 được 5 (5 x 42 = 210), dư 4.',
          'Lượt 3: Hạ 2 được 42; 42 chia 42 được 1, dư 0.'
        ]
      },
      {
        heading: 'Phép cộng, trừ số thập phân',
        content: 'Viết số hạng này dưới số hạng kia sao cho các chữ số ở cùng một hàng đặt thẳng cột với nhau (dấu phẩy thẳng cột với dấu phẩy). Cộng/trừ như đối với số tự nhiên, rồi đặt dấu phẩy ở kết quả thẳng cột với các dấu phẩy của các số hạng.',
        examples: [
          '5,34 + 7,49 = 12,83',
          '18,6 + 8,72 = 27,32 (coi 18,6 là 18,60)'
        ]
      }
    ],
    memoryTip: 'Khi đặt tính phép tính số thập phân, tiêu chí số 1 là: DẤU PHẨY PHẢI THẲNG HÀNG DỌC!'
  },
  {
    id: 'math-th-5',
    subject: 'math',
    title: '5. Phân số và Tính bằng cách thuận tiện',
    summary: 'Kỹ năng nhóm số thông minh giúp tính nhanh, chính xác.',
    bullets: [
      {
        heading: 'Quy tắc 4 phép tính phân số',
        content: '• Cộng, trừ khác mẫu: Quy đồng mẫu số rồi cộng/trừ các tử số với nhau, giữ nguyên mẫu số chung.\n• Nhân hai phân số: Lấy tử số nhân tử số, mẫu số nhân mẫu số.\n• Chia hai phân số: Lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược.',
        examples: [
          '2/7 x 7/5 : 4/5 = (2/7 x 7/5) x 5/4 = 2/5 x 5/4 = 2/4 = 1/2.'
        ]
      },
      {
        heading: 'Tính thuận tiện bằng tính chất phân phối',
        content: 'Công thức vàng: a x b + a x c = a x (b + c)\nHoặc: a x b - a x c = a x (b - c)\nLưu ý quan trọng: Một số a đứng một mình chính là a x 1!',
        examples: [
          '3 015 x 68 + 3 015 x 31 + 3 015 = 3 015 x (68 + 31 + 1) = 3 015 x 100 = 301 500.',
          '4/7 + 4/7 x 5 + 8 x 4/7 = 4/7 x (1 + 5 + 8) = 4/7 x 14 = 8.'
        ]
      }
    ],
    memoryTip: 'Khi thấy thừa số đứng trơ trọi một mình, nhớ ngay nhân với 1 (a = a x 1) để nhóm thành tròn chục, tròn trăm!'
  },
  {
    id: 'math-th-6',
    subject: 'math',
    title: '6. Phương pháp Giải toán có lời văn',
    summary: 'Các dạng bài kinh điển: Tìm phân số của một số, diện tích lát nền, năng suất thu hoạch.',
    bullets: [
      {
        heading: 'Dạng: Tìm phân số của một số',
        content: 'Muốn tìm phân số của một số, ta lấy số đó nhân với phân số đó.\nPhân biệt 2 cách diễn đạt dễ nhầm:\n• "... phân số của SỐ ĐÓ": Lấy trực tiếp tổng ban đầu nhân với phân số.\n• "... phân số của SỐ CÒN LẠI": BẮT BUỘC phải tính số còn lại trước, sau đó mới nhân!',
        examples: [
          'Ví dụ bài bán cam: Có 168 quả cam. Lần 1 bán 1/4 số cam đó (= 168 x 1/4 = 42 quả).',
          'Số cam CÒN LẠI là: 168 - 42 = 126 quả.',
          'Lần 2 bán 2/7 số cam CÒN LẠI: 126 x 2/7 = 36 quả.',
          'Tổng cả 2 lần bán được: 42 + 36 = 78 quả.'
        ]
      },
      {
        heading: 'Dạng: Bài toán diện tích & Lát nền nhà',
        content: 'Bước 1: Đổi về cùng một đơn vị đo (thường đổi ra mét vuông hoặc centimét vuông).\nBước 2: Tính diện tích phòng học/sân bóng.\nBước 3: Tính diện tích 1 viên gạch (cạnh x cạnh).\nBước 4: Tính số viên gạch = Diện tích phòng : Diện tích 1 viên gạch.',
        examples: [
          'Phòng học 8m x 6m: Diện tích = 48 m² = 480 000 cm².',
          'Viên gạch cạnh 40cm: Diện tích = 40 x 40 = 1 600 cm².',
          'Số viên gạch = 480 000 : 1 600 = 300 viên gạch.'
        ]
      }
    ],
    memoryTip: 'Cấu trúc bài giải chuẩn mực: 1. Câu lời giải rõ ràng -> 2. Phép tính (kèm mở ngoặc đơn vị) -> 3. Đáp số ghi rõ!'
  }
];

export const vietnameseTheoryList: TheorySection[] = [
  {
    id: 'vn-th-1',
    subject: 'vietnamese',
    title: '1. Chuyên đề Đại từ (Xưng hô, Thay thế, Nghi vấn)',
    summary: 'Kiến thức trọng tâm về đại từ trong phân môn Luyện từ và câu lớp 5.',
    bullets: [
      {
        heading: 'Đại từ là gì?',
        content: 'Đại từ là từ dùng để xưng hô, để thay thế hoặc để hỏi trong câu. Dùng đại từ hợp lý giúp câu văn gọn gàng, tránh lặp từ và thể hiện đúng mối quan hệ giao tiếp.',
        examples: [
          'Xưng hô: tôi, tớ, chúng tôi, cậu, bạn, nó, họ,...',
          'Thay thế: thế, vậy, đó, này, ấy, kia,... (Ví dụ: "Trời sắp mưa. Điều đó ai cũng nhận ra.")',
          'Nghi vấn (để hỏi): ai, gì, nào, sao, vì sao, bao nhiêu, đâu,... (Ví dụ: "Ai trực nhật hôm nay?")'
        ]
      },
      {
        heading: 'Đại từ xưng hô theo 3 ngôi giao tiếp',
        content: '• Ngôi thứ nhất (người nói): tôi, tớ, mình, chúng tôi, chúng ta...\n• Ngôi thứ hai (người nghe): cậu, bạn, các bạn, các cậu...\n• Ngôi thứ ba (người/vật được nói tới): nó, họ, chúng nó...',
        examples: [
          'Lưu ý quan trọng: Nhiều danh từ chỉ người thân hoặc nghề nghiệp cũng được dùng để xưng hô: ông, bà, bố, mẹ, anh, chị, em, thầy, cô,... Khi đó cần xét cách dùng trong câu!'
        ]
      },
      {
        heading: 'Mẹo phân biệt & Lỗi thường gặp khi dùng đại từ',
        content: '1. Không phải mọi từ xưng hô đều là đại từ (ông, bà, thầy, cô là danh từ chỉ thân tộc, nghề nghiệp dùng để xưng hô).\n2. Từ nghi vấn chỉ là đại từ khi được dùng ĐỂ HỎI. Trong câu "Ai cũng chăm chú", từ "ai" không dùng để hỏi nên không phải đại từ nghi vấn.\n3. Khi dùng đại từ thay thế phải rõ đối tượng thay thế, nếu không câu sẽ bị mơ hồ!',
        examples: [
          'Câu lỗi: "Nam gặp Tuấn và Bình. Cậu nhờ bạn mang hộ chiếc hộp." -> Chưa rõ "cậu", "bạn" là ai!',
          'Sửa lại: "Nam gặp Tuấn và Bình. Nam nhờ Tuấn mang hộ chiếc hộp."'
        ]
      }
    ],
    memoryTip: 'Đại từ xưng hô: Tôi - Bạn - Nó. Đại từ thay thế: Đó - Này - Vậy. Đại từ để hỏi: Ai - Gì - Đâu - Sao - Bao nhiêu!'
  },
  {
    id: 'vn-th-2',
    subject: 'vietnamese',
    title: '2. Từ đồng nghĩa & Sắc thái biểu cảm',
    summary: 'Giúp vốn từ của học sinh phong phú, viết văn sinh động và hấp dẫn.',
    bullets: [
      {
        heading: 'Khái niệm Từ đồng nghĩa',
        content: 'Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau.',
        examples: [
          'Từ đồng nghĩa hoàn toàn (có thể thay thế cho nhau): xe lửa – tàu hỏa; má – mẹ; quả – trái.',
          'Từ đồng nghĩa không hoàn toàn (khác nhau về sắc thái ý nghĩa hoặc thái độ tình cảm): ăn – xơi – chén; hy sinh – từ trần – chết; anh dũng – dũng cảm – quả cảm.'
        ]
      },
      {
        heading: 'Các cặp từ đồng nghĩa thường gặp trong đề thi lớp 5',
        content: '• Chỉ sự rộng lớn, bao la: mênh mông, bát ngát, thênh thang, bao la, vô tận.\n• Chỉ cảnh đẹp hùng vĩ: tráng lệ, kỳ vĩ, nguy nga, đồ sộ, hùng tráng.\n• Chỉ vẻ đẹp: đẹp đẽ, tươi đẹp, xinh đẹp, duyên dáng, mỹ lệ.\n• Chỉ sự dũng cảm: anh dũng, can đảm, quả cảm, gan dạ.\n• Chỉ âm thanh nhộn nhịp: rộn rã, náo nhiệt, rộn ràng, tấp nập.',
        examples: [
          'Câu ví dụ: "Cánh đồng lúa chín rộng mênh mông bát ngát."',
          'Câu ví dụ: "Dãy núi Hoàng Liên Sơn trông thật hùng vĩ và tráng lệ."'
        ]
      }
    ],
    memoryTip: 'Khi làm bài, hãy chú ý ngữ cảnh! "Hy sinh" dùng cho liệt sĩ, chiến sĩ vì tổ quốc; không dùng từ suồng sã trong văn cảnh trang trọng.'
  },
  {
    id: 'vn-th-3',
    subject: 'vietnamese',
    title: '3. Từ nhiều nghĩa: Nghĩa gốc và Nghĩa chuyển',
    summary: 'Phân biệt hiện tượng chuyển nghĩa của từ qua mối liên hệ về hình thức hoặc công dụng.',
    bullets: [
      {
        heading: 'Khái niệm Nghĩa gốc và Nghĩa chuyển',
        content: '• Nghĩa gốc: Là nghĩa ban đầu của từ, xuất hiện đầu tiên và trực tiếp phản ánh sự vật, hiện tượng.\n• Nghĩa chuyển: Là nghĩa được suy ra, hình thành trên cơ sở nghĩa gốc dựa trên mối liên hệ về hình dáng, vị trí, công dụng...',
        examples: [
          'Từ "CHÂN":',
          '+ Nghĩa gốc: Bộ phận dưới cùng của cơ thể người/động vật dùng để đi đứng (Em bé đi chân trần trên cỏ; Đôi chân thoăn thoắt).',
          '+ Nghĩa chuyển: Bộ phận dưới cùng tiếp giáp mặt đất của sự vật khác (Chân núi, chân đồi, chân bàn, chân trời, chân tháp).'
        ]
      },
      {
        heading: 'Các từ nhiều nghĩa kinh điển trong đề thi',
        content: '1. "Lá": Lá cây, lá bàng (nghĩa gốc) -> Lá thư, lá cờ, lá phổi (nghĩa chuyển).\n2. "Mắt": Mắt người (nghĩa gốc) -> Mắt na, mắt dứa, mắt lưới, mắt tre (nghĩa chuyển).\n3. "Mũi": Mũi người, sổ mũi (nghĩa gốc) -> Mũi dao, mũi tên, mũi thuyền, mũi Cà Mau (nghĩa chuyển - đầu nhọn nhô ra phía trước).\n4. "Ngọt": Quả xoài ngọt lịm (nghĩa gốc - vị giác) -> Lời nói ngọt ngào, tiếng sáo ngọt, dao cắt rất ngọt (nghĩa chuyển).\n5. "Đi": Đi bộ, đi chân đất (nghĩa gốc - di chuyển) -> Đi giày dép, đi tất (nghĩa chuyển - xỏ vào chân).',
        examples: [
          'Mẹo nhớ: Nếu chỉ bộ phận cơ thể nguyên bản hoặc vị giác trực tiếp = NGHĨA GỐC. Nếu dùng ẩn dụ cho vật khác = NGHĨA CHUYỂN.'
        ]
      }
    ],
    memoryTip: 'Hỏi tự hỏi: "Từ này có phải đang nói về nghĩa đầu tiên của con người/sinh học không?" Nếu đúng -> Nghĩa gốc. Nếu mượn để tả đồ vật, vị trí -> Nghĩa chuyển!'
  },
  {
    id: 'vn-th-4',
    subject: 'vietnamese',
    title: '4. Biện pháp tu từ: So sánh và Nhân hóa',
    summary: 'Hai vũ khí vàng giúp bài văn miêu tả đạt điểm 9, 10.',
    bullets: [
      {
        heading: 'Biện pháp So sánh',
        content: 'Đối chiếu hai sự vật, hiện tượng có nét tương đồng để làm nổi bật đặc điểm của sự vật được miêu tả.\nCấu trúc: [Sự vật 1] + [Từ so sánh: như, là, tựa như, ngỡ như] + [Sự vật 2]',
        examples: [
          '"Những tia nắng đầu tiên đỏ rực như những sợi chỉ vàng đâm xuyên qua màn sương."',
          '"Mặt hồ phẳng lặng như một tấm gương khổng lồ soi bóng mây trời."',
          '"Những giọt sương đọng trên lá lấp lánh như những hạt kim cương nhỏ xíu."'
        ]
      },
      {
        heading: 'Biện pháp Nhân hóa',
        content: 'Gán cho sự vật, loài vật những đặc điểm, hành động, cảm xúc hoặc cách gọi của con người.\nCó 3 cách nhân hóa chính:\n1. Gọi sự vật bằng từ ngữ dùng để gọi người (Bác mặt trời, chị gió, cô mây, ông trăng).\n2. Tả sự vật bằng từ ngữ tả người (Mặt trời thức dậy, suối róc rách hát ca, cây lá dang tay đón nắng).\n3. Trò chuyện, tâm tình với sự vật như với con người.',
        examples: [
          '"Rồi ông mặt trời thức dậy sau dãy núi xa, nhẹ nhàng vén bức màn sương."'
        ]
      }
    ],
    memoryTip: 'Trong bài văn tả cảnh, ít nhất phải có 2 hình ảnh so sánh và 2 hình ảnh nhân hóa để bài viết giàu cảm xúc và sống động!'
  },
  {
    id: 'vn-th-5',
    subject: 'vietnamese',
    title: '5. Kỹ năng Viết bài văn tả cảnh thiên nhiên',
    summary: 'Dàn ý chuẩn, cách viết mở bài gián tiếp và kết bài mở rộng ấn tượng.',
    bullets: [
      {
        heading: 'Cấu trúc bài văn miêu tả phong cảnh (3 phần)',
        content: '• Mở bài: Giới thiệu cảnh thiên nhiên định tả (Cảnh gì? Ở đâu? Em quan sát vào thời điểm nào? Ấn tượng chung ban đầu).\n• Thân bài:\n  + Tả bao quát cảnh vật (khung cảnh rộng lớn, bầu trời, không khí, màu sắc chủ đạo).\n  + Tả chi tiết theo trình tự không gian (từ xa đến gần, từ cao xuống thấp) hoặc thời gian (sáng, trưa, chiều).\n  + Tả các sự vật tiêu biểu: mặt nước, cây cối, ánh sáng, gió, mây...\n  + Hoạt động của con người hoặc loài vật gắn liền với cảnh (người dân lên rẫy, chim chóc chuyền cành, thuyền bè qua lại).\n• Kết bài: Nêu cảm nghĩ, tình yêu quê hương đất nước và ý thức giữ gìn, bảo vệ cảnh đẹp.',
        examples: [
          'Đề tài gợi ý: Tả dòng sông quê hương, Tả cảnh biển lúc bình minh, Tả đồi chè quê em, Tả ruộng bậc thang Mù Cang Chải.'
        ]
      },
      {
        heading: 'Bí quyết viết đoạn văn hấp dẫn',
        content: '• Sử dụng từ láy tượng hình, tượng thanh: róc rách, lấp lánh, mơn mởn, thoang thoảng, rộn rã...\n• Kết hợp nhiều giác quan: Thị giác (màu sắc), Thính giác (tiếng chim, tiếng suối), Khứu giác (mùi hương lúa mới, hương chè thơm mát), Xúc giác (làn gió mơn man mát lạnh).',
        examples: [
          'Luyện viết đủ từ 15 đến 20 câu, liên kết mạch lạc giữa các đoạn văn bằng các từ nối (Buổi sớm..., Khi nắng lên..., Đứng trước khung cảnh ấy...).'
        ]
      }
    ],
    memoryTip: 'Mở bài gián tiếp đi từ câu thơ hoặc kỉ niệm đẹp sẽ luôn tạo ấn tượng sâu sắc với thầy cô chấm bài!'
  }
];

export interface EssaySample {
  id: string;
  category: 'bien_dao' | 'dong_que' | 'thoi_tiet' | 'song_nui' | 'truong_hoc';
  categoryLabel: string;
  title: string;
  prompt: string;
  wordCount: number;
  sentenceCount: number;
  openings: {
    direct: string;
    indirect: string;
  };
  bodyOutline: {
    overview: string;
    details: string[];
    humanActivities: string;
  };
  endings: {
    nonExtended: string;
    extended: string;
  };
  sampleEssayFull: string;
  rhetoricalDevices: {
    comparisons: string[];
    personifications: string[];
    vividWords: string[];
  };
  teacherReview: {
    score: string;
    strengths: string[];
    advice: string;
  };
}

export const ESSAY_SAMPLES: EssaySample[] = [
  // ==========================================
  // BÀI 1: BÌNH MINH TRÊN BÃI BIỂN MIỀN TRUNG
  // ==========================================
  {
    id: 'essay-binh-minh-bien',
    category: 'bien_dao',
    categoryLabel: 'Biển đảo quê hương',
    title: 'Tả cảnh bình minh trên bãi biển quê hương',
    prompt: 'Em hãy viết bài văn miêu tả cảnh bình minh trên bãi biển quê hương hoặc một bãi biển mà em từng có dịp đến thăm.',
    wordCount: 485,
    sentenceCount: 26,
    openings: {
      direct: 'Trong chuyến du lịch cùng gia đình vào dịp nghỉ hè năm ngoái, em đã có dịp được ngắm nhìn cảnh bình minh rực rỡ và tráng lệ trên bãi biển Sầm Sơn.',
      indirect: 'Nhà thơ Huy Cận từng viết những vần thơ say đắm về biển trời: "Mặt trời xuống biển như hòn lửa / Sóng đã cài then, đêm sập cửa...". Nếu cảnh hoàng hôn trên biển mang vẻ huyền bí, tĩnh lặng thì khoảnh khắc bình minh thức giấc trên đại dương bao la lại chan chứa sức sống diệu kỳ. Kỉ niệm được cùng bố đón những tia nắng đầu tiên trên bãi biển quê hương là bức tranh thiên nhiên tuyệt mỹ nhất mà em không bao giờ quên.'
    },
    bodyOutline: {
      overview: 'Bầu trời lúc sớm mai còn se se lạnh, màn đêm chưa tan hẳn, biển phẳng lặng như tấm gương khổng lồ mang màu xám bạc huyền bí.',
      details: [
        'Lúc trời còn tờ mờ tối: Gió biển thổi lồng lộng mang theo vị mặn nồng nàn đặc trưng của đại dương; bờ cát trắng mịn mát lạnh dưới từng bước chân trần.',
        'Khoảnh khắc mặt trời ló rạng: Phía chân trời xa, mặt biển bỗng ửng hồng rồi chuyển dần sang sắc đỏ cam rực rỡ. Ông mặt trời tròn trĩnh, đỏ rực như một quả cầu lửa khổng lồ từ từ nhô lên khỏi làn nước biếc.',
        'Khi nắng lên cao: Những tia nắng sớm tinh khôi như muôn ngàn sợi chỉ vàng rớt xuống, dát lên mặt nước một lớp áo lấp lánh như triệu mảnh ngọc sáng ngời. Sóng biển nối đuôi nhau vỗ bờ rì rào khúc ca bất tận.'
      ],
      humanActivities: 'Đoàn thuyền đánh cá ngoài khơi xa rẽ sóng trở về cập bến, những khoang thuyền đầy ắp tôm cá tươi rói. Tiếng cười nói, tiếng hò reo của bà con làng chài rộn rã làm xôn xao cả một vùng biển sớm.'
    },
    endings: {
      nonExtended: 'Ngắm nhìn cảnh bình minh trên biển, em càng thêm yêu mến và tự hào về vẻ đẹp của thiên nhiên đất nước Việt Nam ta.',
      extended: 'Đứng trước biển cả bao la vào buổi sớm mai, lòng em dâng lên một niềm tự hào và tình yêu tha thiết với biển đảo quê hương. Cảnh sắc tráng lệ ấy không chỉ là món quà vô giá của mẹ thiên nhiên mà còn nhắc nhở chúng em ý thức giữ gìn bờ biển luôn xanh, sạch, đẹp. Mai này dù đi đâu xa, hình ảnh mặt trời rực hồng nhô lên từ lòng biển biếc vẫn mãi khắc sâu trong trái tim em như một niềm thương mến dịu dàng.'
    },
    sampleEssayFull: `Mỗi chuyến đi xa đều để lại trong tâm trí chúng ta những kỉ niệm khó quên, nhưng khoảnh khắc khiến em say đắm nhất chính là buổi sớm mai được cùng bố đón bình minh trên bãi biển quê nội.

Khi vạn vật còn đang say giấc nồng trong màn sương sớm, bố đã khẽ gọi em thức dậy. Bước chân ra bờ biển, không khí mát lành se se lạnh phả vào da thịt khiến tâm hồn em bừng tỉnh sảng khoái. Gió biển thổi lồng lộng, mang theo vị mặn mòi quen thuộc của đại dương bao la. Dưới chân em, bờ cát trắng trải dài tít tắp, mịn màng và mát rượi. Mặt biển lúc này vẫn còn phẳng lặng, khoác lên mình tấm áo màu xám bạc huyền bí.

Chỉ ít phút sau, điều kì diệu của thiên nhiên bắt đầu hé lộ. Phía chân trời xa tít tắp, một vệt sáng hồng phớt nhẹ nhàng lan tỏa, xua đi những vệt tối cuối cùng của màn đêm. Rồi mép biển bỗng ửng đỏ rực rỡ. Ông mặt trời tròn trĩnh, đỏ au như một quả cầu lửa khổng lồ từ từ đội sóng nhô lên khỏi đáy biển sâu. Ánh bình minh vừa ló rạng đã vội vàng buông muôn vàn tia nắng vàng óng ả xuống mặt nước, dát lên làn sóng biếc một lớp lụa lấp lánh tựa hồ triệu viên kim cương lung linh. Từng đợt sóng biển nối đuôi nhau xô vào bờ cát, tung bọt trắng xóa như những tràng pháo tay ròn rã chào đón ngày mới. Trên bầu trời cao vút, từng đàn chim hải âu chao lượn đôi cánh mềm mại, cất tiếng kêu ríu rít mừng vui.

Bãi biển mỗi lúc một thêm nhộn nhịp. Xa xa, đoàn thuyền đánh cá sau một đêm dài lênh đênh ngoài khơi xa đang nối đuôi nhau rẽ sóng cập bến. Những mẻ cá bạc lấp lánh, những chú mực tươi roi rói đầy ắp khoang thuyền. Tiếng reo hò, tiếng cười nói râm ran của các bác ngư dân làng chài hòa cùng tiếng sóng vỗ tạo nên một khúc ca lao động tràn ngập niềm vui và no ấm.

Đứng trước biển trời lồng lộng, hít hà mùi hương mặn mòi của gió biển, em cảm thấy tâm hồn mình thật thư thái và trào dâng niềm tự hào sâu sắc về vẻ đẹp quê hương Việt Nam. Em thầm hứa sẽ luôn học tập thật tốt và cùng bạn bè chung tay gìn giữ cho bờ biển quê mình mãi luôn xanh, sạch, đẹp.`,
    rhetoricalDevices: {
      comparisons: [
        'Mặt biển phẳng lặng, khoác lên mình tấm áo màu xám bạc huyền bí.',
        'Ông mặt trời tròn trĩnh, đỏ au như một quả cầu lửa khổng lồ từ từ đội sóng nhô lên.',
        'Dát lên làn sóng biếc một lớp lụa lấp lánh tựa hồ triệu viên kim cương lung linh.',
        'Từng đợt sóng nối đuôi nhau vỗ bờ như những tràng pháo tay ròn rã chào đón ngày mới.'
      ],
      personifications: [
        'Vạn vật còn đang say giấc nồng trong màn sương sớm.',
        'Ông mặt trời từ từ đội sóng nhô lên đón chào ngày mới.',
        'Từng đàn hải âu cất tiếng cất tiếng kêu ríu rít mừng vui.'
      ],
      vividWords: ['lồng lộng', 'mặn mòi', 'tít tắp', 'óng ả', 'tròn trĩnh', 'râm ran', 'long lanh', 'sảng khoái']
    },
    teacherReview: {
      score: '10/10',
      strengths: [
        'Bố cục 3 phần rõ ràng, mở bài gián tiếp đầy lôi cuốn dẫn dắt người đọc rất tự nhiên.',
        'Miêu tả biến chuyển màu sắc và ánh sáng của biển vô cùng tinh tế (xám bạc -> ửng hồng -> vàng óng lấp lánh).',
        'Kết hợp nhuần nhuyễn giữa cảnh thiên nhiên kì vĩ và nhịp sống lao động ấm áp của con người miền biển.'
      ],
      advice: 'Học sinh nên ghi nhớ cách sử dụng các từ láy tả ánh sáng và âm thanh để bài viết luôn có nhạc điệu mượt mà.'
    }
  },

  // ==========================================
  // BÀI 2: SỚM MAI TRÊN ĐỒI CHÈ QUÊ NGOẠI
  // ==========================================
  {
    id: 'essay-som-mai-doi-che',
    category: 'dong_que',
    categoryLabel: 'Làng quê thanh bình',
    title: 'Tả cảnh buổi sớm mai trên đồi chè quê ngoại',
    prompt: 'Em hãy viết bài văn miêu tả cảnh một buổi sớm mai trên đồi chè xanh mướt ở quê hương mà em yêu thích.',
    wordCount: 470,
    sentenceCount: 25,
    openings: {
      direct: 'Quê ngoại em ở một vùng trung du xanh ngút ngàn, nơi có những đồi chè trải dài bát ngát. Cảnh tượng đồi chè vào một sớm mai thanh bình là bức tranh đẹp nhất trong lòng em.',
      indirect: 'Mỗi khi mùa hè đến, tâm hồn em lại náo nức mong ngóng ngày được bố mẹ đưa về thăm quê ngoại. Ở đó không có khói bụi xe cộ của phố thị ồn ào, chỉ có những dãy đồi xanh thẳm nối tiếp nhau tận chân trời. Trong muôn vàn cảnh đẹp của quê hương, em yêu thích nhất là được cùng bà ngoại cất bước lên đồi chè khi trời vừa tờ mờ sáng.'
    },
    bodyOutline: {
      overview: 'Bao quát toàn cảnh đồi chè chìm trong màn sương trắng mỏng manh, không khí mát lành phảng phất hương chè non thơm dịu.',
      details: [
        'Màn sương sớm: Sương giăng bảng lảng như chiếc khăn voan trắng dịu dàng phủ lên luống chè.',
        'Luống chè uốn lượn: Những luống chè xanh mướt tăm tắp ôm quanh sườn đồi, trông xa như những bậc thang khổng lồ dẫn lối lên trời xanh.',
        'Khi mặt trời thức dậy: Những tia nắng sớm tinh nghịch xuyên qua kẽ lá, đánh thức đồi chè bừng tỉnh. Giọt sương sớm long lanh như những hạt ngọc đọng trên búp chè non một tôm hai lá.'
      ],
      humanActivities: 'Tiếng cười nói rộn rã của các cô, các chị công nhân hái chè nón lá trắng nhấp nhô, đôi bàn tay khéo léo thoăn thoắt hái từng búp chè tươi non.'
    },
    endings: {
      nonExtended: 'Em rất yêu đồi chè quê ngoại và mong sao đồi chè mãi mãi xanh tươi, đem lại cuộc sống ấm no cho dân làng.',
      extended: 'Đứng trên đỉnh đồi lộng gió, phóng tầm mắt ngắm nhìn làng quê trù phú nép mình bên dòng suối trong veo, em nghe lòng mình trào dâng một tình thương quê ngoại da diết. Câu nói mộc mạc của bà: "Mảnh đất này nuôi bà lớn lên, nuôi cả mẹ cháu đấy" đã nhắc nhở em phải luôn biết ơn cội nguồn. Đồi chè không chỉ dệt nên bức tranh thiên nhiên tuyệt mỹ mà còn là nơi lưu giữ những kỉ niệm ngọt ngào nhất của tuổi thơ em.'
    },
    sampleEssayFull: `Mỗi khi có dịp về thăm quê ngoại, niềm vui lớn nhất của em chính là được theo chân bà bước lên đồi chè vào lúc trời còn tờ mờ sáng.

Buổi sớm mai, không gian vùng trung du chìm đắm trong sự tĩnh lặng êm đềm. Màn sương đêm mỏng manh như một dải khăn voan trắng bồng bềnh phủ trùm lên khắp các sườn đồi. Không khí trong lành, mát rượi, thoang thoảng mùi hương ngai ngái mà ngọt ngào của lá chè tươi non. Dưới ánh sáng ban mai lấp ló, những luống chè xanh mướt uốn lượn nhấp nhô theo triền đồi, trông xa tựa như những bậc thang khổng lồ nối liền mặt đất với vòm trời xanh thẳm. Đi men theo lối mòn nhỏ, chẳng mấy chốc gấu quần em đã ướt đẫm bởi những giọt sương mai đọng trên phiến lá.

Bỗng nhiên, phía rặng núi xa xa, ông mặt trời rón rén thức dậy sau giấc ngủ dài. Những tia nắng vàng đầu tiên nhẹ nhàng buông xuống, xuyên qua làn sương mỏng manh làm bừng sáng cả một vùng đồi bát ngát. Từng giọt sương đêm đọng trên búp chè non long lanh như những hạt ngọc trời ban, rung rinh rồi tan biến vào hư không. Dưới ánh nắng chan hòa, búp chè "một tôm hai lá" nõn nà như ngậm trọn tinh hoa của đất trời. Đàn chim chào mào, chim sâu ríu rít gọi nhau chuyền cành, tấu lên khúc nhạc rộn rã chào đón ngày mới.

Trên lưng đồi, không khí lao động đã bắt đầu rộn ràng. Các bà, các cô đội nón lá trắng nhấp nhô giữa nương xanh, đôi bàn tay thoăn thoắt ngắt từng búp chè non bỏ vào gùi tre sau lưng. Tiếng nói cười khúc khích, tiếng chào hỏi rôm rả làm xua tan đi mọi nỗi mệt nhọc thường nhật. 

Đứng trên đỉnh đồi nhìn xuống dòng suối trong vắt uốn quanh chân núi, em thấy quê hương mình đẹp bình yên đến lạ kì. Em bỗng thấy thương quê ngoại da diết và thầm hứa sẽ luôn chăm ngoan học giỏi để mai này góp phần xây dựng quê hương ngày thêm giàu đẹp.`,
    rhetoricalDevices: {
      comparisons: [
        'Màn sương đêm mỏng manh như một dải khăn voan trắng bồng bềnh.',
        'Các luống chè trông xa tựa như những bậc thang khổng lồ nối liền mặt đất với trời xanh.',
        'Từng giọt sương long lanh như những hạt ngọc trời ban.'
      ],
      personifications: [
        'Ông mặt trời rón rén thức dậy sau giấc ngủ dài.',
        'Những tia nắng tinh nghịch đánh thức cả đồi chè bừng tỉnh.',
        'Đàn chim ríu rít tấu lên khúc ca chào ngày mới.'
      ],
      vividWords: ['bảng lảng', 'uốn lượn', 'thoăn thoắt', 'nõn nà', 'ríu rít', 'rôm rả', 'bát ngát', 'trong vắt']
    },
    teacherReview: {
      score: '9.75/10',
      strengths: [
        'Ngôn từ chọn lọc tinh tế, các câu văn có nhịp điệu uyển chuyển giàu cảm xúc.',
        'Hình ảnh "bậc thang khổng lồ lên trời" và "hạt ngọc trời ban" tạo điểm nhấn nghệ thuật độc đáo.',
        'Đoạn kết bộc lộ tình cảm gắn bó chân thành với người bà và quê hương xứ sở.'
      ],
      advice: 'Cần phát huy khả năng sử dụng khứu giác và thính giác khi miêu tả để bài viết trọn vẹn hơn nữa.'
    }
  },

  // ==========================================
  // BÀI 3: MỘT CƠN MƯA RÀO MÙA HẠ
  // ==========================================
  {
    id: 'essay-mua-rao-mua-ha',
    category: 'thoi_tiet',
    categoryLabel: 'Hiện tượng thiên nhiên',
    title: 'Tả một cơn mưa rào mùa hạ',
    prompt: 'Em hãy viết bài văn miêu tả cảnh một cơn mưa rào bất chợt vào mùa hạ (tả theo trình tự: trước cơn mưa, trong cơn mưa và sau khi mưa tạnh).',
    wordCount: 520,
    sentenceCount: 28,
    openings: {
      direct: 'Những buổi chiều mùa hạ oi ả thường xuất hiện những cơn mưa rào bất chợt. Cơn mưa rào chiều qua đã đem lại bầu không khí trong lành mát mẻ cho khu phố em.',
      indirect: 'Mùa hè đến mang theo cái nắng chói chang, oi nồng như thiêu như đốt khiến cỏ cây và vạn vật đều trở nên ủ rũ, mệt mỏi. Nhưng chỉ cần một cơn gió lạ thoảng qua, bầu trời liền thay đổi thần tốc. Đó là lúc những cơn mưa rào mùa hạ đổ xuống tưới mát trần gian, mang đến sức sống mới cho vạn vật muôn loài.'
    },
    bodyOutline: {
      overview: 'Bầu trời đang nắng chang chang bỗng sầm lại, mây đen cuồn cuộn kéo đến báo hiệu cơn dông.',
      details: [
        'Trước khi mưa: Gió thổi giật mạnh cuốn theo lá khô bay xào xạc; mây đen đặc như mực tràn ngập bầu trời; đàn kiến hối hả tha mồi về tổ; người đi đường vội vã rảo bước mặc áo mưa.',
        'Trong cơn mưa: Mưa bắt đầu rơi lộp bộp vài hạt to, rồi nhanh chóng ào ào trút nước như thác đổ; sấm chớp rạch ngang nền trời đen đặc; dòng nước cuồn cuộn chảy xiết nơi rãnh cống; cây cối nghiêng ngả hả hê tắm mưa.',
        'Sau khi mưa: Mưa ngớt dần rồi tạnh hẳn; vòm trời xanh ngắt không một gợn mây; chiếc cầu vồng bảy sắc lung linh bắc ngang bầu trời; cây cối được tắm rửa sạch sẽ rung rinh giọt nước óng ánh.'
      ],
      humanActivities: 'Mọi người lại ùa ra đường tiếp tục công việc; tiếng chim hót véo von trên vòm lá xanh mướt; lũ trẻ con thích thú ra sân chơi đùa đón làn gió mát.'
    },
    endings: {
      nonExtended: 'Cơn mưa rào mùa hạ đến nhanh rồi đi cũng nhanh, để lại một không gian thật dễ chịu và trong lành.',
      extended: 'Cơn mưa rào mùa hạ tựa như một phép màu kì diệu của thiên nhiên, cuốn trôi đi cái nóng bức ngột ngạt và bao lớp bụi bặm của chuỗi ngày oi ả. Cơn mưa đã tưới tắm cho cỏ cây thêm xanh tốt, cho lòng người thêm dịu dàng và sảng khoái. Mỗi lần đón một cơn mưa rào hạ về, em lại thêm yêu quý và trân trọng sự đổi thay kì diệu của thời tiết quê hương.'
    },
    sampleEssayFull: `Mấy ngày hôm nay, trời nắng chang chang như đổ lửa. Không khí oi ả, ngột ngạt bao trùm cả khu phố khiến ai nấy đều thèm một làn gió mát. Bỗng nhiên, vào một buổi chiều muộn, một cơn mưa rào bất chợt ập đến tưới mát cả vạn vật đất trời.

Trước khi mưa đổ xuống, bầu trời bỗng biến chuyển kì lạ. Gió mùa hạ bỗng nổi lên từng cơn lồng lộng, cuốn bay những chiếc lá khô xoay tít trên mặt đường. Bầu trời trong xanh thoắt cái bị những đám mây đen kịt, nặng trĩu tựa như ai vừa đổ mực loang khắp nền trời. Lũ chim sẻ hoảng hốt bay vội về tổ dưới mái hiên. Dưới đường, dòng người hối hả rảo bước chân, tiếng còi xe inh ỏi, ai nấy đều cuống cuồng mặc thêm chiếc áo mưa mỏng để kịp về nhà tránh cơn dông.

Thế rồi, mưa bắt đầu rơi. Ban đầu chỉ là vài giọt lộp bộp rơi nghiêng trên mái tôn, rồi chỉ trong chớp mắt, mưa rào ào ào trút xuống như ai hắt nước từ trên trời cao. Đất cát bốc lên một mùi ngai ngái nồng nồng quen thuộc. Mưa xối xả, giăng mắc trắng xóa cả một góc trời mù mịt. Từng tia chớp ngoằn ngoèo rạch ngang màn mây đen đặc, theo sau là tiếng sấm "đùng... đoàng" rung chuyển cả không gian. Những rặng cây ven đường nghiêng ngả đón gió, vẫy những cành lá xanh tươi như đang hả hê tắm mát sau chuỗi ngày khát nước dài đằng đẵng. Nước mưa trên mặt đường cuồn cuộn chảy dồn về miệng cống như những con suối nhỏ sủi bọt trắng xóa.

Mưa đến thật nhanh và đi cũng thật vội. Chỉ chừng ba mươi phút sau, tiếng mưa nhỏ dần rồi tạnh hẳn. Mặt trời lại lấp ló sau vòm mây, tỏa ra những tia nắng vàng dịu dàng, ấm áp. Cả bầu trời như vừa được gột rửa, khoác lên một màu xanh biếc trong veo. Kì diệu thay, một chiếc cầu vồng bảy sắc lung linh vắt ngang qua vòm trời rộng lớn. Cây cối sau cơn mưa trông tươi tỉnh hẳn lên, từng chiếc lá xanh biếc rung rinh giọt nước đọng lại lấp lánh như viên pha lê. Chim chóc lại ríu rít chuyền cành cất cao tiếng hót véo von chào ngày mới.

Cơn mưa rào mùa hạ đã xua tan đi hoàn toàn cái ngột ngạt oi bức, trả lại cho thiên nhiên vẻ tươi mới và tràn đầy nhựa sống. Đứng bên hiên nhà hít căng lồng ngực bầu không khí trong lành, em cảm thấy tâm hồn mình thật thư thái và yêu đời tha thiết.`,
    rhetoricalDevices: {
      comparisons: [
        'Mây đen kịt, nặng trĩu tựa như ai vừa đổ mực loang khắp nền trời.',
        'Mưa rào ào ào trút xuống như ai hắt nước từ trên trời cao.',
        'Giọt nước đọng lại trên phiến lá lấp lánh như những viên pha lê.'
      ],
      personifications: [
        'Cây cối hả hê tắm mát sau chuỗi ngày khát nước đằng đẵng.',
        'Mặt trời lấp ló sau vòm mây, dịu dàng tỏa ánh nắng.',
        'Chim chóc cất tiếng hát véo von chào ngày mới sau cơn mưa.'
      ],
      vividWords: ['oi ả', 'cuồn cuộn', 'lộp bộp', 'xối xả', 'ngoằn ngoèo', 'hối hả', 'loang loáng', 'tươi tỉnh']
    },
    teacherReview: {
      score: '10/10',
      strengths: [
        'Trình tự miêu tả chặt chẽ, đúng chuẩn cấu trúc 3 giai đoạn của một bài văn tả thời tiết.',
        'Sử dụng nhiều từ ngữ gợi tả âm thanh phong phú (lộp bộp, ào ào, đùng đoàng, ríu rít).',
        'Hình ảnh cầu vồng bảy sắc và cây cối tắm mưa được miêu tả rất sinh động, đậm chất tuổi thơ.'
      ],
      advice: 'Học sinh nên áp dụng cách chuyển đoạn mượt mà như câu "Mưa đến thật nhanh và đi cũng thật vội".'
    }
  },

  // ==========================================
  // BÀI 4: CÁNH ĐỒNG LÚA CHÍN MÙA VÀNG
  // ==========================================
  {
    id: 'essay-canh-dong-lua-chin',
    category: 'dong_que',
    categoryLabel: 'Làng quê thanh bình',
    title: 'Tả cảnh cánh đồng lúa chín quê em',
    prompt: 'Em hãy viết bài văn miêu tả cảnh cánh đồng lúa chín vàng trĩu hạt vào một buổi sáng mùa gặt ở quê em.',
    wordCount: 495,
    sentenceCount: 26,
    openings: {
      direct: 'Quê hương em có biết bao nhiêu cảnh đẹp, nhưng nơi gắn bó và để lại trong em nhiều ấn tượng sâu đậm nhất chính là cánh đồng lúa chín quê nhà vào ngày mùa.',
      indirect: 'Trong kí ức tuổi thơ của mỗi người con đất Việt, hình ảnh làng quê luôn gắn liền với rặng tre xanh, cây đa, giếng nước và đặc biệt là cánh đồng lúa vàng óng ả trải rộng mênh mông. Mỗi độ thu về, khi ngọn gió heo may se lạnh gõ cửa từng ngõ xóm, cánh đồng làng em lại khoác lên mình một tấm áo vàng rực rỡ báo hiệu một mùa màng bội thu no ấm.'
    },
    bodyOutline: {
      overview: 'Đứng trên bờ đê cao nhìn xuống, cánh đồng lúa trải rộng tít tắp như một biển vàng mênh mông bát ngát.',
      details: [
        'Sóng lúa: Từng cơn gió thu thổi qua, những ngọn lúa nhấp nhô uốn lượn như muôn ngàn con sóng vàng xô nhau chạy mãi.',
        'Bông lúa trĩu hạt: Từng bông lúa cong cong hình lưỡi liềm uốn câu, hạt nào hạt nấy mây mẩy, tròn trịa, căng tràn sữa ngọt.',
        'Hương vị đồng quê: Mùi hương lúa chín thơm thoang thoảng, quyện vào sương mai làm ngây ngất lòng người; những chú châu chấu, cào cào bật tanh tách trên bờ cỏ.'
      ],
      humanActivities: 'Các bác nông dân nón trắng nhấp nhô, tay thoăn thoắt lia từng nhát liềm gặt lúa; tiếng máy tuốt lúa giòn giã; nụ cười rạng rỡ của người nông dân mừng vụ mùa thắng lợi.'
    },
    endings: {
      nonExtended: 'Ngắm nhìn cánh đồng lúa chín, em càng thêm biết ơn sự vất vả, một nắng hai sương của các bác nông dân.',
      extended: 'Mỗi hạt gạo trắng trong thơm dẻo chúng em ăn hôm nay đều được đánh đổi bằng bao giọt mồ hôi thánh thót của người nông dân trên cánh đồng. Đứng giữa hương thơm ngạt ngào của lúa chín, em càng thêm trân quý hạt ngọc trời ban và thương yêu tha thiết quê hương mình. Em ước mong cánh đồng làng em vụ nào cũng trĩu hạt no ấm, đem lại nụ cười rạng rỡ cho những người nông dân một đời tần tảo.'
    },
    sampleEssayFull: `Mỗi độ thu về, khi bầu trời trở nên cao xanh lồng lộng và ngọn gió heo may se se lạnh thổi qua ngõ xóm, cánh đồng làng em lại bừng lên sắc vàng rực rỡ của mùa lúa chín.

Đứng từ trên đỉnh bờ đê cao nhìn xuống, cánh đồng hiện ra như một tấm thảm lụa khổng lồ bằng vàng óng ả, trải dài tít tắp đến tận chân trời. Dưới ánh nắng sớm tinh khôi, cả cánh đồng bừng sáng lộng lẫy. Mỗi khi có một làn gió sớm lướt qua, muôn ngàn bông lúa lại uốn lượn nhấp nhô tựa hồ những lớp sóng vàng nối đuôi nhau xô mãi về phía rặng tre làng xa xa.

Bước xuống con đường mòn nhỏ ven ruộng, em nghe rõ hương thơm ngọt ngào của lúa chín thoang thoảng quyện vào trong gió sớm mát lành. Từng bông lúa trĩu nặng uốn cong như những chiếc lưỡi liềm, đầu bông rủ xuống trĩu hạt vì mang trọn tinh hoa của đất mẹ. Những hạt thóc mây mẩy, vàng ruộm, căng tròn như muốn bật tung lớp vỏ trấu để khoe hạt ngọc trắng ngần bên trong. Từng giọt sương mai còn sót lại đọng trên chóp hạt thóc lấp lánh như những hạt kim cương nhỏ xíu. Dưới chân bờ cỏ, mấy chú cào cào, châu chấu áo xanh nhảy tanh tách, chim sâu thoăn thoắt chuyền từ khóm lúa này sang khóm khác cất tiếng hót vui tai.

Ngày mùa, không khí trên đồng tưng bừng và rộn rã lạ thường. Các bác, các cô nông dân đội nón lá trắng nhấp nhô, đôi bàn tay gầy guộc thoăn thoắt lia từng đường liềm ngọt sớt. Những bó lúa vàng ươm được xếp ngay ngắn bên vệ đường. Xa xa, chiếc máy gặt đập liên hợp chạy rì rầm trên ruộng, nhả ra từng bao thóc vàng ươm trĩu nặng. Tiếng cười nói râm ran, tiếng gọi nhau í ới của bà con làm xao động cả một vùng quê yên bình. Dù những giọt mồ hôi lăn dài trên gò má sạm đen vì nắng gió, nhưng trên gương mặt ai nấy đều rạng rỡ niềm vui mừng đón vụ mùa bội thu.

Cánh đồng lúa chín là hình ảnh đẹp đẽ và thân thương nhất của làng quê em. Ngắm nhìn đồng lúa trĩu hạt, em càng thêm trân trọng bát cơm trắng dẻo thơm và biết ơn sâu sắc những người nông dân đã "một nắng hai sương" làm nên hạt gạo nuôi sống con người.`,
    rhetoricalDevices: {
      comparisons: [
        'Cánh đồng hiện ra như một tấm thảm lụa khổng lồ bằng vàng óng ả.',
        'Muôn ngàn bông lúa uốn lượn tựa hồ những lớp sóng vàng nối đuôi nhau.',
        'Từng bông lúa uốn cong như những chiếc lưỡi liềm.'
      ],
      personifications: [
        'Bông lúa đầu rủ xuống vì mang trọn tinh hoa của đất mẹ.',
        'Hạt thóc mây mẩy như muốn bật tung lớp vỏ trấu để khoe hạt ngọc trắng ngần.',
        'Gió sớm vuốt ve những ngọn lúa đang say ngủ.'
      ],
      vividWords: ['mây mẩy', 'vàng ruộm', 'thoang thoảng', 'uốn lượn', 'râm ran', 'tần tảo', 'óng ả', 'trĩu nặng']
    },
    teacherReview: {
      score: '10/10',
      strengths: [
        'Cách quan sát từ xa đến gần, từ bao quát đến chi tiết từng bông lúa rất tinh tế.',
        'Gợi tả được đầy đủ cả thị giác (sắc vàng), khứu giác (hương lúa thơm nồng) và thính giác (tiếng máy tuốt, tiếng cười râm ran).',
        'Lồng ghép bài học nhân văn sâu sắc: biết ơn người nông dân và quý trọng hạt ngọc trời.'
      ],
      advice: 'Học sinh có thể kết hợp trích dẫn một câu ca dao ngắn về người nông dân để tăng thêm chiều sâu văn học.'
    }
  },

  // ==========================================
  // BÀI 5: ĐÊM TRĂNG ĐẸP Ở LÀNG QUÊ
  // ==========================================
  {
    id: 'essay-dem-trang-lang-que',
    category: 'dong_que',
    categoryLabel: 'Làng quê thanh bình',
    title: 'Tả cảnh một đêm trăng đẹp ở làng quê',
    prompt: 'Em hãy viết bài văn miêu tả cảnh một đêm trăng rằm tuyệt đẹp ở làng quê em hoặc nơi em đang sinh sống.',
    wordCount: 475,
    sentenceCount: 25,
    openings: {
      direct: 'Đêm nay là đêm rằm tháng Tám, bầu trời trong vắt và ánh trăng sáng vằng vặc soi tỏ khắp mọi nẻo đường làng quê em.',
      indirect: 'Mỗi khi màn đêm buông xuống, làng quê lại chìm vào sự yên tĩnh thanh bình. Nhưng đẹp nhất, thơ mộng nhất có lẽ là những đêm trăng rằm sáng trong. Ánh trăng hiền hòa tựa như dòng sữa mẹ dịu êm, tưới tắm lên cỏ cây hoa lá và đánh thức những vẻ đẹp huyền ảo nhất của đất trời quê hương.'
    },
    bodyOutline: {
      overview: 'Bầu trời đêm sâu thẳm, trăng tròn vành vạnh như chiếc đĩa bạc khổng lồ lơ lửng giữa ngàn sao lấp lánh.',
      details: [
        'Trăng mọc: Ban đầu trăng e thẹn lấp ló sau rặng tre già, rồi từ từ nhô cao, tỏa ánh sáng bàng bạc dịu mát khắp nhân gian.',
        'Cảnh vật dưới trăng: Dòng sông quê lấp loáng như dát một mẻ bạc khổng lồ; bóng tre đổ dài trên đường làng; mặt ao sóng sánh ánh vàng; những đóa hoa quỳnh nở e ấp tỏa hương ngào ngạt.',
        'Âm thanh đêm trăng: Tiếng dế mèn cất giọng rả rích trong kẽ gạch; tiếng gió thổi xào xạc qua rặng tre; tiếng lá rơi nhè nhẹ.'
      ],
      humanActivities: 'Các cụ già ngồi trước hiên nhà thưởng trà đàm đạo; lũ trẻ con rủ nhau ra sân đình chơi trốn tìm, rước đèn, cất vang tiếng hát đồng dao trong trẻo.'
    },
    endings: {
      nonExtended: 'Đêm trăng làng quê thật êm đềm và thơ mộng, để lại trong em nhiều ấn tượng khó phai mờ.',
      extended: 'Ngắm nhìn vầng trăng tròn vành vạnh soi sáng mảnh đất quê hương, tâm hồn em cảm thấy bình yên và trong trẻo đến lạ kì. Ánh trăng quê mẹ hiền hòa như một miền cổ tích nuôi dưỡng tâm hồn em lớn lên từng ngày. Mai sau dẫu có đi đến những phương trời xa lạ rực rỡ ánh đèn màu, bóng trăng quê hương vẫn mãi là ngọn đèn soi sáng dẫn lối em về với cội nguồn yêu dấu.'
    },
    sampleEssayFull: `Những đêm hè oi ả thường làm lòng người mỏi mệt, nhưng chỉ cần một đêm trăng rằm mát lành xuất hiện, cả làng quê em dường như bừng tỉnh trong một bức tranh cổ tích huyền ảo.

Khi hoàng hôn vừa tắt hẳn, màn đêm chầm chậm buông bức màn nhung đen mịn màng ôm trọn lấy xóm làng. Bầu trời đêm sâu thẳm, lác đác những vì sao nhỏ lấp lánh như những ngọn đèn tí hon. Thoạt đầu, vầng trăng tròn trĩnh còn e thẹn giấu mình sau ngọn tre già ở cuối làng. Rồi như một nàng tiên xinh đẹp bước ra từ cõi mộng, trăng từ từ nhô lên cao, tròn vành vạnh tựa như một chiếc đĩa bạc khổng lồ lơ lửng giữa trời xanh.

Ánh trăng bàng bạc, dịu êm tuôn chảy xuống vạn vật tựa như dòng suối ngọc. Dưới ánh trăng tỏ, con đường làng quanh co phủ một màu vàng nhạt lung linh. Bóng những rặng tre, hàng cau ngả dài trên mặt đất theo từng cơn gió thoảng. Dòng sông quê hiền hòa chảy lững lờ, mặt nước sóng sánh ánh trăng như được ai đó dát lên triệu vảy bạc lấp lánh. Nơi góc vườn, những bông hoa nhài trắng muốt khẽ hé nở, tỏa hương thơm ngào ngạt quyện vào làn gió đêm mát rượi. Đâu đó trong bờ cỏ, tiếng chú dế mèn hòa tấu khúc ca rả rích cùng tiếng ếch nhái râm ran nơi bờ ao, tạo nên một bản hòa ca đêm trăng thật êm ả.

Đêm trăng cũng là lúc làng quê rộn rã niềm vui. Trên chiếc chõng tre đặt giữa sân nhà, ông nội và các bác hàng xóm ngồi nhâm nhi chén trà sen thơm ngát, rôm rả bàn chuyện mùa màng. Lũ trẻ con chúng em tụ tập ngoài sân gạch rộng thênh thang, cùng nhau chơi trò rồng rắn lên mây, trốn tìm rồi ríu rít hát những câu đồng dao quen thuộc. Tiếng cười nói giòn tan của tuổi thơ vang vọng khắp xóm nhỏ dưới ánh trăng thanh.

Đêm đã về khuya, vầng trăng càng lên cao càng trong trẻo và vằng vặc sáng soi. Đứng dưới ánh trăng hiền từ, em thấy yêu biết bao mảnh đất quê hương thanh bình và ước mong sao những đêm trăng tuyệt diệu này sẽ mãi in sâu trong kí ức tuổi thơ.`,
    rhetoricalDevices: {
      comparisons: [
        'Màn đêm chầm chậm buông bức màn nhung đen mịn màng.',
        'Trăng tròn vành vạnh tựa như một chiếc đĩa bạc khổng lồ.',
        'Mặt nước sóng sánh ánh trăng như được dát lên triệu vảy bạc lấp lánh.'
      ],
      personifications: [
        'Vầng trăng e thẹn giấu mình sau ngọn tre già.',
        'Trăng như một nàng tiên xinh đẹp bước ra từ cõi mộng.',
        'Dòng sông hiền hòa chảy lững lờ ngắm nhìn trăng đêm.'
      ],
      vividWords: ['vằng vặc', 'bàng bạc', 'sóng sánh', 'rả rích', 'râm ran', 'tròn vành vạnh', 'e thẹn', 'lững lờ']
    },
    teacherReview: {
      score: '9.75/10',
      strengths: [
        'Hình ảnh vầng trăng được nhân hóa như một "nàng tiên e thẹn" rất duyên dáng và giàu sức gợi cảm.',
        'Miêu tả không gian tĩnh lặng nhưng không tẻ nhạt nhờ kết hợp âm thanh dế mèn và tiếng trẻ con nô đùa.',
        'Văn phong trong sáng, thuần hậu, mang đậm nét đẹp văn hóa làng quê Bắc Bộ.'
      ],
      advice: 'Học sinh có thể bổ sung thêm chi tiết về ánh trăng chiếu qua kẽ lá rọi xuống sân nhà để tạo thêm hiệu ứng thị giác.'
    }
  },

  // ==========================================
  // BÀI 6: HOÀNG HÔN TRÊN DÒNG SÔNG QUÊ HƯƠNG
  // ==========================================
  {
    id: 'essay-hoang-hon-dong-song',
    category: 'song_nui',
    categoryLabel: 'Sông núi & Cảnh vật',
    title: 'Tả cảnh hoàng hôn trên dòng sông quê hương',
    prompt: 'Em hãy viết bài văn miêu tả cảnh thiên nhiên một buổi chiều hoàng hôn êm ả trên dòng sông quê em.',
    wordCount: 490,
    sentenceCount: 26,
    openings: {
      direct: 'Quê hương em có con sông Đáy hiền hòa chảy qua làng. Trong muôn vàn khoảnh khắc của ngày, em yêu thích nhất là được ngắm nhìn cảnh hoàng hôn buông xuống trên dòng sông quê.',
      indirect: 'Nhà thơ Đỗ Trung Quân từng viết: "Quê hương là con diều biếc / Tuổi thơ con thả trên đồng / Quê hương là con đò nhỏ / Êm đềm khua nước ven sông...". Dòng sông quê hương từ bao đời nay đã chở nặng phù sa tắm mát tâm hồn bao thế hệ. Và có lẽ, khoảnh khắc dòng sông khoác lên mình vẻ đẹp thơ mộng, huyền ảo nhất chính là khi ánh hoàng hôn dần buông xuống cuối chân trời.'
    },
    bodyOutline: {
      overview: 'Mặt trời lặn dần về phía rặng núi xa, không gian chuyển từ màu vàng mơ sang sắc đỏ tía lộng lẫy, dòng sông lững lờ trôi như một dải lụa đào khổng lồ.',
      details: [
        'Bầu trời và ánh nắng: Ông mặt trời như quả cầu lửa khổng lồ từ từ chìm xuống rặng núi phía tây; từng vệt mây ngũ sắc ửng hồng viền quanh nền trời tím biếc.',
        'Mặt nước dòng sông: Ánh hoàng hôn rọi xuống làm mặt sông sóng sánh như được dát một lớp vàng lỏng lấp lánh; những gợn sóng lăn tăn xô nhẹ vào đôi bờ; rặng tre già ngả bóng soi mình xuống làn nước trong xanh.',
        'Âm thanh và cảnh vật đôi bờ: Tiếng gió chiều thổi qua rặng tre xào xạc như khúc nhạc đồng quê; từng đàn chim tíu tít bay về tổ ấm; không khí mát rượi xua đi cái oi nồng ban trưa.'
      ],
      humanActivities: 'Những chiếc thuyền chài chầm chậm buông lưới khua mái chèo róc rách; khói lam chiều từ những mái nhà tranh ven sông lững lờ bay lên hòa vào sương chiều mờ ảo; lũ trẻ dắt trâu thong thả trở về làng.'
    },
    endings: {
      nonExtended: 'Cảnh hoàng hôn trên dòng sông quê hương thật bình yên và thơ mộng, đọng lại trong em nhiều cảm xúc dịu êm.',
      extended: 'Ngắm nhìn dòng sông quê mình trong buổi chiều tà, lòng em dâng lên một tình yêu quê hương đất nước tha thiết và sâu nặng. Dòng sông êm đềm không chỉ nuôi lớn bao thế hệ người dân quê em bằng dòng nước ngọt lành mà còn là chứng nhân cho bao kỉ niệm tuổi thơ dấu yêu. Dù mai này khôn lớn có đi đến những phương trời xa lạ, hình ảnh dòng sông quê dát vàng ánh hoàng hôn vẫn mãi là bến đỗ bình yên trong trái tim em.'
    },
    sampleEssayFull: `Mỗi buổi chiều tan học, em thường cùng chúng bạn dạo bước trên con đê đầu làng để ngắm nhìn vẻ đẹp thơ mộng của dòng sông quê hương khi hoàng hôn buông xuống.

Khi ánh nắng chói chang của một ngày hè dần tắt, không gian bắt đầu dịu mát lại. Phía chân trời tây, ông mặt trời tròn trĩnh, đỏ rực như một quả cầu lửa khổng lồ đang từ từ hạ thấp dần sau rặng tre già. Bầu trời nhuộm một màu vàng cam rực rỡ, rồi chuyển sang sắc tím hồng huyền ảo. Những đám mây trắng xốp trôi bồng bềnh, mép mây được viền bởi những dải ánh sáng vàng lung linh tựa như những chiếc khăn choàng lộng lẫy của các nàng tiên nữ.

Dòng sông quê lúc này hiện lên tựa như một dải lụa đào mềm mại vắt ngang qua cánh đồng xanh ngát. Ánh hoàng hôn rọi thẳng xuống mặt nước làm cho lòng sông sóng sánh, lấp lánh như được ai đó dát một mẻ vàng vừa luyện xong. Từng đợt sóng lăn tăn nối đuôi nhau vỗ nhẹ vào bờ cát, phát ra những âm thanh rì rào êm ả như lời ru của mẹ. Hai bên bờ sông, những rặng tre xanh rì rào ngả bóng râm xuống làn nước trong veo, như đang nghiêng mình soi gương chải chuốt lại mái tóc sau một ngày dài đón gió. Từng đàn chim chao liệng trên không trung rồi hối hả vỗ cánh bay về tổ ấm trên các lùm cây ven sông.

Cảnh sinh hoạt của con người càng làm cho bức tranh hoàng hôn thêm phần ấm áp. Xa xa trên mặt sông, vài con thuyền chài của các bác ngư dân khẽ buông mái chèo khua nước "ì oạp", chiếc lưới xòe rộng như một cánh chim bạc rồi chìm dần xuống làn nước biếc. Trên đường đê, đàn trâu no cỏ thong dong gõ móng từng bước chậm rãi trở về chuồng, trên lưng trâu là tiếng cười nói giòn tan của lũ trẻ mục đồng. Từ những nếp nhà ngói đỏ ven sông, làn khói lam chiều nhè nhẹ bốc lên, mang theo mùi thơm của cơm mới và rơm rạ nồng nàn.

Hoàng hôn trên dòng sông quê hương là một bức tranh thiên nhiên tuyệt mỹ, êm đềm và thanh bình. Chiêm ngưỡng cảnh sắc quê mình, em càng thêm gắn bó và tự hào về mảnh đất nơi mình đã sinh ra và lớn lên.`,
    rhetoricalDevices: {
      comparisons: [
        'Ông mặt trời đỏ rực như một quả cầu lửa khổng lồ hạ thấp dần.',
        'Dòng sông tựa như một dải lụa đào mềm mại vắt ngang cánh đồng.',
        'Mặt nước lấp lánh như được dát một mẻ vàng vừa luyện xong.'
      ],
      personifications: [
        'Rặng tre xanh nghiêng mình soi gương chải chuốt mái tóc.',
        'Mây trời khoác lên chiếc khăn choàng lộng lẫy.',
        'Sóng vỗ nhẹ như lời ru êm ả của mẹ.'
      ],
      vividWords: ['sóng sánh', 'lững lờ', 'chao liệng', 'thong dong', 'ì oạp', 'lăn tăn', 'huyền ảo', 'nồng nàn']
    },
    teacherReview: {
      score: '10/10',
      strengths: [
        'Miêu tả cảnh thiên nhiên theo trình tự biến đổi thời gian của buổi chiều tà xuất sắc.',
        'Bức tranh thiên nhiên sông nước tràn ngập sắc màu (vàng cam, đỏ rực, tím biếc, xanh ngọc) và âm thanh đồng quê yên bình.',
        'Kết hợp hình ảnh khói lam chiều và trẻ mục đồng làm cảnh thiên nhiên đậm hồn quê Việt Nam.'
      ],
      advice: 'Học sinh nên ghi nhớ các tính từ chỉ màu sắc hoàng hôn để bài văn thêm chất thơ.'
    }
  },

  // ==========================================
  // BÀI 7: THÁC NƯỚC HÙNG VĨ GIỮA ĐẠI NGÀN
  // ==========================================
  {
    id: 'essay-thac-nuoc-hung-vi',
    category: 'song_nui',
    categoryLabel: 'Sông núi & Thắng cảnh',
    title: 'Tả cảnh một thác nước hùng vĩ giữa núi rừng đại ngàn',
    prompt: 'Em hãy viết bài văn miêu tả cảnh một thác nước hùng vĩ kì ảo giữa núi rừng (Thác Y-a-ly hoặc Thác Bản Giốc) mà em từng được chiêm ngưỡng.',
    wordCount: 510,
    sentenceCount: 27,
    openings: {
      direct: 'Đất nước Việt Nam ta có biết bao danh lam thắng cảnh kì vĩ, nhưng nơi khiến em choáng ngợp và say đắm nhất chính là cảnh tượng thác nước Y-a-ly giữa đại ngàn Tây Nguyên hùng vĩ.',
      indirect: 'Tây Nguyên đại ngàn không chỉ nổi tiếng với tiếng cồng chiêng ngân vang, những rừng cao su bạt ngàn mà còn níu chân du khách bởi những thắng cảnh thiên nhiên tráng lệ. Trong chuyến đi thực tế cùng gia đình vào mùa hè năm ngoái, em đã có dịp tận mắt chiêm ngưỡng vẻ đẹp tuyệt mỹ của thác nước Y-a-ly – một kì quan thiên nhiên nằm giữa lưng chừng trời.'
    },
    bodyOutline: {
      overview: 'Từ xa đã nghe tiếng thác réo gầm vang vọng như tiếng muôn quân reo giữa núi rừng trùng điệp.',
      details: [
        'Từ xa nhìn lại: Dòng thác dựng đứng, đổ từ trên đỉnh núi cao xuống qua mười hai bậc đá, trông tựa như một dải lụa bạch khổng lồ buông mình giữa màu xanh ngút ngàn của rừng đại ngàn.',
        'Đến gần thác: Nước ào ạt trút xuống, bọt tung trắng xóa mịt mù như biển mây khói; hơi nước bốc lên mát lạnh phả vào không gian; ánh nắng hoàng hôn xói thẳng vào lòng sông làm nước sáng lấp lánh như dát một mẻ vàng vừa luyện xong.',
        'Cảnh vật xung quanh: Những vách đá sừng sững bị dòng nước chảy mòn qua ngàn năm; cây cối hai bên bờ xòe tán soi bóng xuống hồ nước phẳng lặng như gương.'
      ],
      humanActivities: 'Du khách trầm trồ chụp ảnh, những cô chú công nhân vận hành nhà máy thủy điện Y-a-ly ngày đêm đem lại nguồn sáng cho Tổ quốc.'
    },
    endings: {
      nonExtended: 'Chiêm ngưỡng thác nước hùng vĩ, em vô cùng khâm phục sức mạnh kì diệu của mẹ thiên nhiên non nước Việt Nam.',
      extended: 'Đứng trước dòng thác Y-a-ly kì vĩ, cảm nhận từng hạt bụi nước mát lạnh vương trên bờ mi, em thấy tâm hồn mình rộng mở và tràn đầy niềm tự hào dân tộc. Thác nước không chỉ là thắng cảnh tuyệt mỹ làm say lòng du khách muôn phương mà còn là biểu tượng cho sức sống kiên cường, dũng mãnh của con người Tây Nguyên. Em mong ước non sông gấm vóc quê mình sẽ mãi giữ được vẻ đẹp hoang sơ, tráng lệ ấy qua ngàn đời.'
    },
    sampleEssayFull: `Đất nước Việt Nam ta mang hình chữ S với muôn trùng cảnh sắc tươi đẹp, nhưng để lại trong em ấn tượng sâu sắc và choáng ngợp nhất chính là khung cảnh kì vĩ của thác nước Y-a-ly giữa đại ngàn Tây Nguyên.

Khi chiếc xe chở gia đình em còn cách thác nước chừng nửa ngày đường, âm thanh của dòng thác đã vọng lại ầm ào. Tiếng nước réo cuồn cuộn giữa núi rừng trùng điệp nghe tựa hồ như có trăm vạn tiếng quân reo nơi trận mạc. Càng đến gần, không khí càng trở nên mát mẻ lạ kì, mang theo mùi ngai ngái tươi mát của núi rừng hoang sơ.

Vừa bước chân đến điểm ngắm cảnh, trước mắt em hiện ra một bức tranh thiên nhiên tuyệt mỹ đến ngỡ ngàng. Bắt nguồn từ con sông Pô-cô chảy xiết, dòng nước thúc mạnh vào sườn núi Chư-pa sừng sững rồi ào ạt phóng qua vách đá dựng đứng, đổ sầm sập xuống mặt hồ tạo nên dòng thác Y-a-ly huyền thoại. Dòng nước trắng xóa trút từ trên đỉnh núi xuống thành mười hai bậc đá tựa như một dải lụa bạch khổng lồ buông lững lờ giữa lưng chừng trời. Bọt nước tung trắng xóa như một biển mù sương huyền ảo, khiến cho cảnh sắc xung quanh nửa thực nửa hư tựa chốn bồng lai tiên cảnh.

Tuyệt vời nhất là khoảnh khắc hoàng hôn buông xuống. Khi mặt trời ngả dần về hướng tây, những tia nắng đỏ rực rỡ xói thẳng vào dòng nước đang tuôn trào, làm cho cả mặt thác và lòng sông lấp lánh như được dát một mẻ vàng vừa luyện xong. Những hạt bụi nước li ti bay trong gió khúc xạ ánh nắng tạo nên một chiếc cầu vồng bảy sắc lung linh vắt ngang qua dòng nước xiết. Hai bên bờ thác, những rặng cây tếch cổ thụ vươn cành tỏa bóng mát rượi, chim rừng ríu rít chuyền cành, thi thoảng vài chú tắc kè có cánh chao lượn trên ngọn cỏ làm cho bức tranh thiên nhiên càng thêm phần sống động.

Nơi đây còn có nhà máy thủy điện Y-a-ly hiện đại ngày đêm biến sức nước thành dòng điện thắp sáng mọi miền quê hương. Chiêm ngưỡng dòng thác kì vĩ, em càng thêm khâm phục bàn tay kiến tạo của thiên nhiên và tài trí của con người Việt Nam. Mai này lớn khôn, em mong sẽ được trở lại thăm mảnh đất Tây Nguyên đầy nắng gió và kiêu hùng này.`,
    rhetoricalDevices: {
      comparisons: [
        'Tiếng nước réo nghe tựa hồ như có trăm vạn tiếng quân reo giữa núi rừng.',
        'Dòng thác tựa như một dải lụa bạch khổng lồ buông lững lờ giữa lưng chừng trời.',
        'Cả lòng sông lấp lánh như được dát một mẻ vàng vừa luyện xong.'
      ],
      personifications: [
        'Dòng nước thúc mạnh vào sườn núi Chư-pa bắt núi rừng phải cắt đôi.',
        'Những hạt bụi nước nô đùa bay trong gió.',
        'Những rặng cây tếch cổ thụ dang tay tỏa bóng mát rượi.'
      ],
      vividWords: ['trùng điệp', 'ầm ào', 'cuồn cuộn', 'lững lờ', 'sừng sững', 'lấp lánh', 'lung linh', 'kì vĩ']
    },
    teacherReview: {
      score: '10/10',
      strengths: [
        'Bám sát văn bản đọc hiểu lớp 5 nhưng diễn đạt mở rộng rất sáng tạo, giàu nhạc điệu.',
        'Hình ảnh "dát mẻ vàng vừa luyện xong" và "trăm vạn tiếng quân reo" được vận dụng xuất sắc.',
        'Kết hợp tài tình giữa cảnh hùng vĩ thiên nhiên và ý nghĩa công trình thủy điện thắp sáng Tổ quốc.'
      ],
      advice: 'Bài viết rất xuất sắc, xứng đáng làm bài văn mẫu mực cho toàn khối lớp 5 noi theo.'
    }
  },

  // ==========================================
  // BÀI 8: RUỘNG BẬC THANG MÙ CANG CHẢI
  // ==========================================
  {
    id: 'essay-mu-cang-chai',
    category: 'song_nui',
    categoryLabel: 'Sông núi & Thắng cảnh',
    title: 'Tả cảnh ruộng bậc thang Mù Cang Chải mùa lúa chín',
    prompt: 'Em hãy viết bài văn miêu tả vẻ đẹp kì ảo của những thửa ruộng bậc thang Mù Cang Chải vào mùa lúa chín vàng.',
    wordCount: 480,
    sentenceCount: 25,
    openings: {
      direct: 'Vùng rẻo cao Tây Bắc nước ta có một danh lam thắng cảnh làm say lòng biết bao du khách, đó chính là ruộng bậc thang Mù Cang Chải vào mùa lúa chín.',
      indirect: 'Việt Nam mến yêu của chúng ta có biết bao danh lam thắng cảnh kì thú, từ biển bạc mênh mông đến rừng xanh bạt ngàn. Nhưng nếu ai đã từng một lần đặt chân đến vùng rẻo cao Mù Cang Chải vào mùa thu, chắc chắn sẽ không thể nào quên được kiệt tác ruộng bậc thang vàng rực – một bức tranh thiên nhiên tuyệt mỹ được dệt nên từ bàn tay lao động cần cù của đồng bào H\'Mông.'
    },
    bodyOutline: {
      overview: 'Những sườn núi dốc đứng khoác lên mình tấm áo vàng rực rỡ, ruộng bậc thang tầng tầng lớp lớp nối từ chân thung lũng lên tận đỉnh trời.',
      details: [
        'Hình dáng bậc thang: Những thửa ruộng uốn lượn mềm mại như những đường vân gỗ khổng lồ, trông tựa như những mâm xôi vàng óng ả ắp đầy giữa non cao.',
        'Màu sắc và ánh sáng: Dưới ánh nắng thu trong vắt, màu vàng của lúa chín hòa cùng màu xanh thẳm của mây trời và núi rừng tạo nên bản hòa sắc tuyệt mĩ; gió thu thổi làm sóng lúa nhấp nhô rập rờn.',
        'Hương vị: Mùi hương lúa nếp mới thơm ngọt ngào thoang thoảng quyện vào làn sương mỏng mát lạnh của buổi sớm vùng cao.'
      ],
      humanActivities: 'Các cô gái H\'Mông xúng xính trong chiếc váy xòe sặc sỡ nhấp nhô gặt lúa; tiếng sáo mèo trầm bổng; tiếng trẻ thơ nô đùa trên nương.'
    },
    endings: {
      nonExtended: 'Em rất yêu thích ruộng bậc thang Mù Cang Chải và hi vọng kì quan này sẽ luôn được bảo tồn xanh đẹp.',
      extended: 'Ruộng bậc thang Mù Cang Chải không chỉ là một danh thắng quốc gia độc nhất vô nhị mà còn là bản hùng ca về sự kiên cường, sáng tạo của con người trước thiên nhiên khắc nghiệt. Đứng trước những tầng sóng lúa vàng rực lưng trời, em càng thêm khâm phục bàn tay tài hoa của đồng bào các dân tộc vùng cao và tự hào xiết bao về vẻ đẹp tráng lệ của non sông đất Việt.'
    },
    sampleEssayFull: `Mỗi độ thu về, khi những cơn gió heo may bắt đầu tràn qua các thung lũng vùng cao Tây Bắc, Mù Cang Chải lại bừng tỉnh, khoác lên mình tấm áo vàng rực rỡ và lộng lẫy nhất trong năm.

Từ trên con đèo Khau Phạ nhìn xuống, cả một không gian bao la rộng lớn hiện ra như một bức tranh thủy mặc khổng lồ. Những thửa ruộng bậc thang tầng tầng lớp lớp, uốn lượn mềm mại quanh các sườn núi dốc đứng, nối tiếp nhau từ chân đồi sâu thẳm vút lên tận đỉnh trời xanh. Trông xa, những triền ruộng vàng ươm ấy tựa hồ như những nấc thang khổng lồ dẫn lối lên thiên đường, hay như những mâm xôi vàng óng ả được mẹ thiên nhiên bày biện giữa núi rừng đại ngàn.

Dưới ánh nắng thu vàng trong vắt như mật ong, từng bông lúa nếp trĩu nặng hạt vàng óng đang độ chín rộ. Mỗi khi có ngọn gió thu lướt qua, những thảm lúa lại rập rờn nhấp nhô tạo thành từng làn sóng vàng lung linh nối đuôi nhau xô mãi vào sườn núi. Không khí trên nương phảng phất hương thơm ngào ngạt của lúa nếp nương mới gặt, ngọt ngào và thanh khiết đến nao lòng.

Điểm tô cho bức tranh mùa vàng thêm phần sống động chính là con người vùng cao hồn hậu. Giữa biển lúa vàng rực rỡ, những chiếc váy xòe hoa sặc sỡ đủ sắc màu của các cô, các chị người H'Mông thấp thoáng tựa như những cánh bướm rực rỡ bay lượn giữa đồng. Tiếng nói cười khúc khích hòa cùng tiếng khèn Mông trầm bổng, da diết vang vọng khắp thung lũng, làm cho không khí ngày mùa rộn ràng như ngày hội lớn.

Ruộng bậc thang Mù Cang Chải là một kiệt tác tuyệt vời của thiên nhiên và mồ hôi công sức của con người. Ngắm nhìn mùa vàng nơi đây, em càng thêm yêu quý dải đất hình chữ S thân yêu và cảm phục bàn tay lao động cần cù, tài hoa của đồng bào miền núi Tây Bắc.`,
    rhetoricalDevices: {
      comparisons: [
        'Cả không gian hiện ra như một bức tranh thủy mặc khổng lồ.',
        'Những triền ruộng vàng ươm tựa hồ như những nấc thang khổng lồ dẫn lên trời.',
        'Váy xòe sặc sỡ thấp thoáng tựa như những cánh bướm rực rỡ bay lượn.'
      ],
      personifications: [
        'Mù Cang Chải bừng tỉnh, khoác lên mình tấm áo vàng rực rỡ.',
        'Gió thu dịu dàng vuốt ve những làn sóng lúa đang thì trĩu hạt.',
        'Thiên nhiên bày biện những mâm xôi vàng giữa núi rừng.'
      ],
      vividWords: ['tầng tầng lớp lớp', 'bát ngát', 'rập rờn', 'thoang thoảng', 'xúng xính', 'trầm bổng', 'hồn hậu', 'óng ả']
    },
    teacherReview: {
      score: '10/10',
      strengths: [
        'Khả năng quan sát không gian từ góc nhìn trên cao vô cùng thoáng đạt và phóng khoáng.',
        'Sử dụng nhiều hình ảnh so sánh độc đáo đậm chất văn hóa dân tộc như "nấc thang lên trời", "mâm xôi vàng".',
        'Hình ảnh con người vùng cao với chiếc váy hoa và tiếng khèn Mông mang lại sức sống ấm áp cho cảnh vật.'
      ],
      advice: 'Học sinh nên giữ gìn vốn từ ngữ gợi cảm phong phú này để phát triển tốt hơn ở các lớp học sau.'
    }
  }
];

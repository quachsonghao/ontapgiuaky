import { ExerciseQuestion, VerticalMathData } from '../types';

// Helper random functions
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 1. Phân số thập phân và đọc viết số thập phân
export function generateDecimalReadingWriting(): ExerciseQuestion {
  const templates = [
    () => {
      const whole = getRandomInt(10, 99);
      const tenths = getRandomInt(1, 9);
      const thousandths = getRandomInt(1, 9);
      const value = `${whole},${tenths}0${thousandths}`;
      const wrong1 = `${whole},${tenths}${thousandths}`;
      const wrong2 = `${whole},0${tenths}${thousandths}`;
      const wrong3 = `${whole},${tenths}00${thousandths}`;

      const options = [
        { id: 'opt-a', text: value },
        { id: 'opt-b', text: wrong1 },
        { id: 'opt-c', text: wrong2 },
        { id: 'opt-d', text: wrong3 }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `dec-write-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-1',
        type: 'multiple_choice' as const,
        title: 'Viết số thập phân',
        prompt: `Viết số thập phân gồm: ${whole} đơn vị, ${tenths} phần mười và ${thousandths} phần nghìn:`,
        options,
        correctOptionId: options.find(o => o.text === value)?.id,
        explanation: `• Phần nguyên là ${whole} đơn vị.\n• Hàng phần mười là ${tenths}.\n• Vì đề bài không nhắc đến phần trăm nên hàng phần trăm bằng 0.\n• Hàng phần nghìn là ${thousandths}.\nVậy số thập phân là ${value}.`,
        hint: 'Chú ý chữ số 0 ở hàng phần trăm bị khuyết nhé em!',
        commonMistake: `Nhiều bạn nhầm thành ${wrong1} do quên mất số 0 ở hàng phần trăm!`,
        level: 1
      };
    },
    () => {
      const whole = getRandomInt(10, 80);
      const hundredths = getRandomInt(1, 9);
      const value = `${whole},0${hundredths}`;
      const wrong1 = `${whole},${hundredths}`;
      const wrong2 = `${whole},00${hundredths}`;
      const wrong3 = `${whole * 10 + hundredths}`;

      const options = [
        { id: 'opt-a', text: value },
        { id: 'opt-b', text: wrong1 },
        { id: 'opt-c', text: wrong2 },
        { id: 'opt-d', text: wrong3 }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `dec-write-2-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-1',
        type: 'multiple_choice' as const,
        title: 'Viết số thập phân có hàng phần mười bằng 0',
        prompt: `Số thập phân gồm: ${whole} đơn vị và ${hundredths} phần trăm được viết là:`,
        options,
        correctOptionId: options.find(o => o.text === value)?.id,
        explanation: `Hàng phần mười bị khuyết nên ta ghi chữ số 0 vào hàng phần mười. Do đó số cần viết là ${value}.`,
        hint: 'Phần trăm là chữ số thứ 2 sau dấu phẩy.',
        commonMistake: `Học sinh dễ nhầm viết là ${wrong1} (đó là ${hundredths} phần mười chứ không phải phần trăm).`,
        level: 1
      };
    },
    () => {
      const num = pickRandom([3, 7, 9, 11, 21]);
      const den = pickRandom([4, 5, 20, 25, 50]);
      const factor = 100 / den;
      const decNum = (num * factor);
      const decStr = (decNum / 100).toString().replace('.', ',');
      const fracStr = `${num}/${den}`;
      const decFracStr = `${decNum}/100`;

      return {
        id: `dec-frac-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-1',
        type: 'fill_blank' as const,
        title: 'Chuyển phân số thành phân số thập phân',
        prompt: `Chuyển phân số ${fracStr} thành phân số thập phân có mẫu số là 100:`,
        correctAnswer: [decFracStr, `${decNum}/100`, `${decNum}`],
        unit: '',
        explanation: `Ta nhân cả tử số và mẫu số với ${factor}:\n${fracStr} = (${num} x ${factor}) / (${den} x ${factor}) = ${decFracStr} (dưới dạng số thập phân là ${decStr}).`,
        hint: `Lấy 100 chia cho mẫu số ${den} được ${factor}, rồi nhân cả tử và mẫu với ${factor}.`,
        level: 2
      };
    }
  ];

  return pickRandom(templates)();
}

// 2. So sánh và làm tròn số thập phân
export function generateDecimalCompareAndRound(): ExerciseQuestion {
  const isRound = Math.random() > 0.5;

  if (isRound) {
    const whole = getRandomInt(1, 99);
    const tenths = getRandomInt(0, 9);
    const hundredths = getRandomInt(0, 9);
    const thousandths = getRandomInt(1, 9);
    const original = `${whole},${tenths}${hundredths}${thousandths}`;
    
    // round to tenths
    let roundedTenths = tenths;
    let roundedWhole = whole;
    if (hundredths >= 5) {
      roundedTenths += 1;
      if (roundedTenths === 10) {
        roundedTenths = 0;
        roundedWhole += 1;
      }
    }
    const result = `${roundedWhole},${roundedTenths}`;

    return {
      id: `round-${Date.now()}-${Math.random()}`,
      topicId: 'math-top-2',
      type: 'fill_blank' as const,
      title: 'Làm tròn số thập phân',
      prompt: `Làm tròn số thập phân ${original} đến hàng phần mười ta được:`,
      correctAnswer: [result, result.replace(',', '.')],
      explanation: `• Chữ số ở hàng phần mười là ${tenths}.\n• Chữ số ngay sau nó (ở hàng phần trăm) là ${hundredths}.\n• ${hundredths >= 5 ? `Vì ${hundredths} ≥ 5 nên ta cộng thêm 1 vào hàng phần mười` : `Vì ${hundredths} < 5 nên ta giữ nguyên hàng phần mười`}.\n• Vậy làm tròn đến hàng phần mười được: ${result}.`,
      hint: 'Quan sát chữ số ở hàng phần trăm (chữ số thứ hai sau dấu phẩy).',
      commonMistake: 'Quên quy tắc: nếu chữ số sau nó từ 5 trở lên mới tăng 1 đơn vị, từ 0 đến 4 thì giữ nguyên.',
      level: 2
    };
  } else {
    // Compare max
    const baseWhole = getRandomInt(20, 80);
    const baseTenths = getRandomInt(1, 7);
    const n1 = `${baseWhole},${baseTenths}08`;
    const n2 = `${baseWhole},${baseTenths + 1}25`;
    const n3 = `${baseWhole},${baseTenths + 2}09`;
    const n4 = `${baseWhole},${baseTenths}92`;
    const numbers = [n1, n2, n3, n4].sort(() => Math.random() - 0.5);
    const maxVal = n3;

    const options = numbers.map((n, idx) => ({ id: `opt-${idx}`, text: n }));

    return {
      id: `compare-${Date.now()}-${Math.random()}`,
      topicId: 'math-top-2',
      type: 'multiple_choice' as const,
      title: 'Tìm số thập phân lớn nhất',
      prompt: `Tìm số thập phân lớn nhất trong các số sau: ${numbers.join(' ; ')}`,
      options,
      correctOptionId: options.find(o => o.text === maxVal)?.id,
      explanation: `Tất cả các số đều có phần nguyên là ${baseWhole}.\nSo sánh hàng phần mười: ${baseTenths + 2} là lớn nhất.\nVậy số lớn nhất là ${maxVal}.`,
      hint: 'So sánh phần nguyên trước, nếu bằng nhau thì so sánh hàng phần mười.',
      level: 1
    };
  }
}

// 3. Đơn vị đo diện tích và khối lượng
export function generateAreaAndUnits(): ExerciseQuestion {
  const templates = [
    () => {
      const ha = getRandomInt(15, 85);
      const m2 = ha * 10000;
      return {
        id: `unit-ha-m2-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-3',
        type: 'fill_blank' as const,
        title: 'Đổi đơn vị héc-ta sang mét vuông',
        prompt: `Điền số thích hợp vào chỗ chấm: ${ha} ha = ............ m²`,
        correctAnswer: [m2.toString(), m2.toLocaleString('vi-VN')],
        unit: 'm²',
        explanation: `Vì 1 ha = 10 000 m² nên ${ha} ha = ${ha} x 10 000 = ${m2.toLocaleString('vi-VN')} m².`,
        hint: '1 ha (héc-ta) bằng 10 000 mét vuông (thêm 4 chữ số 0).',
        level: 2
      };
    },
    () => {
      const km2Num = pickRandom([3, 5, 7]);
      const den = pickRandom([4, 5, 10]);
      const haResult = (100 * km2Num) / den;
      return {
        id: `unit-km2-ha-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-3',
        type: 'fill_blank' as const,
        title: 'Đổi phân số ki-lô-mét vuông sang héc-ta',
        prompt: `Điền số thích hợp: ${km2Num}/${den} km² = ............ ha`,
        correctAnswer: [haResult.toString()],
        unit: 'ha',
        explanation: `Vì 1 km² = 100 ha nên:\n${km2Num}/${den} km² = 100 x ${km2Num} : ${den} = ${haResult} ha.`,
        hint: '1 km² = 100 ha, lấy 100 nhân với phân số đó.',
        level: 2
      };
    },
    () => {
      const m2 = getRandomInt(3, 9);
      const dm2 = getRandomInt(1, 99);
      const dm2Str = dm2 < 10 ? `0${dm2}` : `${dm2}`;
      const decResult = `${m2},${dm2Str}`;
      return {
        id: `unit-m2-dm2-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-3',
        type: 'fill_blank' as const,
        title: 'Viết số đo diện tích dưới dạng số thập phân',
        prompt: `Viết số thập phân thích hợp vào chỗ chấm: ${m2} m² ${dm2} dm² = ............ m²`,
        correctAnswer: [decResult, decResult.replace(',', '.')],
        unit: 'm²',
        explanation: `Vì 1 m² = 100 dm² nên 1 dm² = 1/100 m² = 0,01 m².\nDo đó ${m2} m² ${dm2} dm² = ${m2} + ${dm2}/100 m² = ${decResult} m².`,
        hint: '1 mét vuông bằng 100 đề-xi-mét vuông, tức là 2 chữ số sau dấu phẩy.',
        commonMistake: dm2 < 10 ? `Nếu viết là ${m2},${dm2} là SAI vì ${dm2} dm² là ${dm2} phần trăm (${dm2Str}), không phải phần mười!` : undefined,
        level: 3
      };
    },
    () => {
      const tan = getRandomInt(2, 8);
      const kg = getRandomInt(15, 95);
      const kgStr = kg < 100 ? (kg < 10 ? `00${kg}` : `0${kg}`) : `${kg}`;
      const decResult = `${tan},${kgStr}`;
      return {
        id: `unit-tan-kg-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-3',
        type: 'fill_blank' as const,
        title: 'Đổi đơn vị đo khối lượng sang tấn',
        prompt: `Viết số thập phân thích hợp: ${tan} tấn ${kg} kg = ............ tấn`,
        correctAnswer: [decResult, decResult.replace(',', '.')],
        unit: 'tấn',
        explanation: `Vì 1 tấn = 1 000 kg nên 1 kg = 1/1000 tấn = 0,001 tấn.\nDo đó ${tan} tấn ${kg} kg = ${tan} + ${kg}/1000 tấn = ${decResult} tấn.`,
        hint: '1 tấn bằng 1000 kg, phần thập phân phải có đủ 3 chữ số!',
        level: 2
      };
    }
  ];

  return pickRandom(templates)();
}

// 4. Đặt tính rồi tính chuẩn tiểu học
export function generateVerticalMathProblem(type?: 'multiply' | 'divide' | 'add' | 'subtract'): ExerciseQuestion {
  const chosen = type || pickRandom(['multiply', 'divide', 'add', 'subtract']);

  if (chosen === 'multiply') {
    const num1 = pickRandom([3125, 2468, 1542, 684, 825, 1420]);
    const num2 = pickRandom([24, 37, 45, 36, 52]);
    const d1 = num2 % 10;
    const d2 = Math.floor(num2 / 10);
    const p1 = num1 * d1;
    const p2 = num1 * d2;
    const total = num1 * num2;

    const verticalMath: VerticalMathData = {
      operation: 'multiply',
      num1,
      num2,
      result: total,
      intermediateLines: [
        { text: `${p1}`, note: `Tích riêng thứ nhất (${num1} x ${d1})` },
        { text: `${p2} `, note: `Tích riêng thứ hai (${num1} x ${d2}, lùi sang trái 1 cột)` },
        { text: '------', isDivider: true },
        { text: `${total}`, note: `Cộng hai tích riêng` }
      ]
    };

    return {
      id: `vm-mul-${Date.now()}-${Math.random()}`,
      topicId: 'math-top-4',
      type: 'vertical_math' as const,
      title: 'Đặt tính rồi tính: Phép nhân',
      prompt: `Đặt tính rồi tính: ${num1} x ${num2}`,
      correctAnswer: [total.toString()],
      verticalMath,
      explanation: `Cách đặt tính và thực hiện phép nhân ${num1} x ${num2}:\n• Bước 1: Nhân ${d1} với ${num1} được tích riêng thứ nhất: ${p1}.\n• Bước 2: Nhân ${d2} với ${num1} được tích riêng thứ hai: ${p2} (viết lùi sang trái 1 cột).\n• Bước 3: Cộng hai tích riêng lại ta được kết quả: ${total}.`,
      hint: 'Nhớ viết tích riêng thứ hai lùi sang trái một cột so với tích riêng thứ nhất em nhé!',
      level: 2
    };
  }

  if (chosen === 'divide') {
    const divisor = pickRandom([36, 42, 25, 34, 45]);
    const quotient = getRandomInt(120, 240);
    const dividend = divisor * quotient;

    // Simulation of division steps
    const dividendStr = dividend.toString();
    const firstTwo = parseInt(dividendStr.slice(0, 2), 10);
    let startIdx = 2;
    let currentVal = firstTwo;
    if (firstTwo < divisor) {
      currentVal = parseInt(dividendStr.slice(0, 3), 10);
      startIdx = 3;
    }

    const lines: { text: string; note?: string }[] = [];
    let rem = currentVal;
    let stepCount = 1;

    for (let i = startIdx; i <= dividendStr.length; i++) {
      const qDigit = Math.floor(rem / divisor);
      const sub = qDigit * divisor;
      const stepRem = rem - sub;
      lines.push({ text: `Lượt ${stepCount}: ${rem} : ${divisor} được ${qDigit}, dư ${stepRem}` });
      if (i < dividendStr.length) {
        rem = stepRem * 10 + parseInt(dividendStr[i], 10);
        stepCount++;
      }
    }

    const verticalMath: VerticalMathData = {
      operation: 'divide',
      num1: dividend,
      num2: divisor,
      result: quotient,
      remainder: 0,
      intermediateLines: lines.map(l => ({ text: l.text, note: l.note }))
    };

    return {
      id: `vm-div-${Date.now()}-${Math.random()}`,
      topicId: 'math-top-4',
      type: 'vertical_math' as const,
      title: 'Đặt tính rồi tính: Phép chia',
      prompt: `Đặt tính rồi tính: ${dividend} : ${divisor}`,
      correctAnswer: [quotient.toString()],
      verticalMath,
      explanation: `Cách đặt tính và thực hiện phép chia ${dividend} : ${divisor} = ${quotient}:\n` + lines.map(l => `• ${l.text}`).join('\n') + `\n=> Phép chia hết, thương là ${quotient}.`,
      hint: 'Thực hiện chia từ trái sang phải, tìm số dư ở mỗi lượt rồi hạ chữ số tiếp theo.',
      level: 3
    };
  }

  // Add / Subtract decimals
  const isAdd = chosen === 'add';
  const a = (getRandomInt(100, 999) / 10).toFixed(1).replace('.', ',');
  const b = (getRandomInt(100, 999) / 100).toFixed(2).replace('.', ',');
  const aNum = parseFloat(a.replace(',', '.'));
  const bNum = parseFloat(b.replace(',', '.'));
  const resNum = isAdd ? aNum + bNum : aNum - bNum;
  const resStr = resNum.toFixed(2).replace('.', ',');

  const verticalMath: VerticalMathData = {
    operation: isAdd ? 'add' : 'subtract',
    num1: a,
    num2: b,
    result: resStr,
    intermediateLines: [
      { text: `  ${a}` },
      { text: `${isAdd ? '+' : '-'} ${b}` },
      { text: '------', isDivider: true },
      { text: `  ${resStr}`, note: 'Dấu phẩy đặt thẳng cột' }
    ]
  };

  return {
    id: `vm-dec-${isAdd ? 'add' : 'sub'}-${Date.now()}-${Math.random()}`,
    topicId: 'math-top-4',
    type: 'vertical_math' as const,
    title: `Đặt tính rồi tính: ${isAdd ? 'Phép cộng' : 'Phép trừ'} số thập phân`,
    prompt: `Đặt tính rồi tính: ${a} ${isAdd ? '+' : '-'} ${b}`,
    correctAnswer: [resStr, resStr.replace(',', '.'), parseFloat(resStr.replace(',', '.')).toString()],
    verticalMath,
    explanation: `Quy tắc vàng khi đặt tính số thập phân:\n• Viết các chữ số ở cùng một hàng thẳng cột với nhau (dấu phẩy thẳng cột với dấu phẩy).\n• Coi ${a} là ${a}0 để dễ tính toán.\n• Đặt dấu phẩy ở kết quả thẳng cột với dấu phẩy của các số hạng.\n=> Kết quả: ${resStr}.`,
    hint: 'Dóng thẳng cột các dấu phẩy trước khi tính!',
    level: 2
  };
}

// 5. Tính bằng cách thuận tiện nhất
export function generateConvenientMath(): ExerciseQuestion {
  const templates = [
    () => {
      const a = pickRandom([3015, 2450, 1875, 4200, 5160]);
      const b = getRandomInt(55, 75);
      const c = 99 - b; // so b + c + 1 = 100
      const expr = `${a} x ${b} + ${a} x ${c} + ${a}`;
      const total = a * 100;

      return {
        id: `conv-dist-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-5',
        type: 'fill_blank' as const,
        title: 'Tính bằng cách thuận tiện nhất (Số tự nhiên)',
        prompt: `Tính giá trị biểu thức bằng cách thuận tiện nhất:\n${expr} = ?`,
        correctAnswer: [total.toString(), total.toLocaleString('vi-VN')],
        explanation: `Ta thấy số ${a} xuất hiện ở tất cả các tích. Lưu ý: ${a} chính là ${a} x 1!\nTa có:\n  ${expr}\n= ${a} x (${b} + ${c} + 1)\n= ${a} x 100\n= ${total.toLocaleString('vi-VN')}.`,
        hint: 'Nhớ rằng một số đứng một mình tương đương với số đó nhân với 1!',
        commonMistake: 'Nhiều bạn quên cộng thêm 1 từ số hạng cuối cùng!',
        level: 3
      };
    },
    () => {
      const num = pickRandom([3, 4, 5, 2]);
      const den = pickRandom([7, 9, 11]);
      const b = getRandomInt(3, 6);
      const c = getRandomInt(2, 5);
      const sum = 1 + b + c; // e.g. 1 + 5 + 8 = 14
      const result = (num * sum) / den;

      // Ensure neat integer or simple fraction
      const fracStr = `${num}/${den}`;
      const expr = `${fracStr} + ${fracStr} x ${b} + ${fracStr} x ${c}`;
      const finalVal = (result % 1 === 0) ? result.toString() : `${num * sum}/${den}`;

      return {
        id: `conv-frac-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-5',
        type: 'fill_blank' as const,
        title: 'Tính bằng cách thuận tiện nhất (Phân số)',
        prompt: `Tính bằng cách thuận tiện nhất:\n${expr} = ?`,
        correctAnswer: [finalVal, result.toString()],
        explanation: `Biểu thức có thừa số chung là ${fracStr}:\n  ${expr}\n= ${fracStr} x (1 + ${b} + ${c})\n= ${fracStr} x ${sum}\n= ${finalVal}.`,
        hint: 'Đặt phân số chung ra ngoài dấu ngoặc: A x (1 + B + C).',
        level: 3
      };
    },
    () => {
      // Four fractions grouping
      const d1 = 9;
      const d2 = 7;
      const n1 = 4;
      const n2 = 5; // n1+n2 = 9
      const m1 = 2;
      const m2 = 5; // m1+m2 = 7
      const expr = `${n1}/${d1} + ${m1}/${d2} + ${n2}/${d1} + ${m2}/${d2}`;
      
      return {
        id: `conv-group-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-5',
        type: 'fill_blank' as const,
        title: 'Nhóm phân số có cùng mẫu số',
        prompt: `Tính bằng cách thuận tiện nhất:\n${expr} = ?`,
        correctAnswer: ['2'],
        explanation: `Nhóm các phân số có cùng mẫu số lại với nhau:\n= (${n1}/${d1} + ${n2}/${d1}) + (${m1}/${d2} + ${m2}/${d2})\n= 9/9 + 7/7\n= 1 + 1 = 2.`,
        hint: 'Nhóm các phân số có cùng mẫu số lại với nhau để tạo thành số tự nhiên tròn trĩnh!',
        level: 2
      };
    }
  ];

  return pickRandom(templates)();
}

// 6. Giải toán có lời văn
export function generateWordProblem(): ExerciseQuestion {
  const templates = [
    () => {
      // Rice store problem (PDF Bài 27)
      const total = pickRandom([360, 450, 540, 720]);
      const morningFrac = { num: 2, den: 9 };
      const afternoonFrac = { num: 1, den: 3 };

      const morningKg = (total * morningFrac.num) / morningFrac.den;
      const afternoonKg = (total * afternoonFrac.num) / afternoonFrac.den;
      const remainingKg = total - morningKg - afternoonKg;

      return {
        id: `wp-rice-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-6',
        type: 'word_problem' as const,
        title: 'Giải toán: Phân số của một số',
        prompt: `Một cửa hàng có ${total} kg gạo. Buổi sáng cửa hàng bán được 2/9 số gạo đó, buổi chiều bán được 1/3 số gạo đó. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?`,
        correctAnswer: [remainingKg.toString()],
        unit: 'kg',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Tính số ki-lô-gam gạo buổi sáng bán được:',
            correctFormula: `${total} x 2/9 = ${morningKg} (kg)`,
            correctResult: morningKg.toString(),
            unit: 'kg'
          },
          {
            stepPrompt: 'Bước 2: Tính số ki-lô-gam gạo buổi chiều bán được:',
            correctFormula: `${total} x 1/3 = ${afternoonKg} (kg)`,
            correctResult: afternoonKg.toString(),
            unit: 'kg'
          },
          {
            stepPrompt: 'Bước 3: Tính số ki-lô-gam gạo cửa hàng còn lại:',
            correctFormula: `${total} - (${morningKg} + ${afternoonKg}) = ${remainingKg} (kg)`,
            correctResult: remainingKg.toString(),
            unit: 'kg'
          }
        ],
        finalAnswer: remainingKg.toString(),
        explanation: `Bài giải chuẩn Tiểu học:\n\n` +
          `Buổi sáng cửa hàng bán được số ki-lô-gam gạo là:\n  ${total} x 2/9 = ${morningKg} (kg)\n\n` +
          `Buổi chiều cửa hàng bán được số ki-lô-gam gạo là:\n  ${total} x 1/3 = ${afternoonKg} (kg)\n\n` +
          `Cả hai buổi cửa hàng bán được số gạo là:\n  ${morningKg} + ${afternoonKg} = ${morningKg + afternoonKg} (kg)\n\n` +
          `Cửa hàng còn lại số ki-lô-gam gạo là:\n  ${total} - ${morningKg + afternoonKg} = ${remainingKg} (kg)\n\n` +
          `Đáp số: ${remainingKg} kg gạo.`,
        hint: 'Cả buổi sáng và chiều đều tính theo "số gạo đó", tức là số gạo ban đầu!',
        level: 3
      };
    },
    () => {
      // Oranges problem - "... of the remaining" (PDF Bài 28)
      const total = pickRandom([168, 140, 196, 224]);
      const firstSell = total / 4;
      const remaining = total - firstSell;
      const secondSell = (remaining * 2) / 7;
      const totalSold = firstSell + secondSell;

      return {
        id: `wp-orange-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-6',
        type: 'word_problem' as const,
        title: 'Giải toán: Phân số của số còn lại (Rất hay thi)',
        prompt: `Cô Bình mang ${total} quả cam ra chợ bán. Lần thứ nhất, cô bán được 1/4 số cam đó. Lần thứ hai, cô bán được 2/7 SỐ CAM CÒN LẠI sau lần bán thứ nhất. Hỏi cô Bình đã bán được tất cả bao nhiêu quả cam?`,
        correctAnswer: [totalSold.toString()],
        unit: 'quả cam',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Tính số cam bán lần thứ nhất:',
            correctFormula: `${total} x 1/4 = ${firstSell} (quả)`,
            correctResult: firstSell.toString(),
            unit: 'quả'
          },
          {
            stepPrompt: 'Bước 2: Tính số cam CÒN LẠI sau lần bán thứ nhất:',
            correctFormula: `${total} - ${firstSell} = ${remaining} (quả)`,
            correctResult: remaining.toString(),
            unit: 'quả'
          },
          {
            stepPrompt: 'Bước 3: Tính số cam bán lần thứ hai (lấy số còn lại nhân 2/7):',
            correctFormula: `${remaining} x 2/7 = ${secondSell} (quả)`,
            correctResult: secondSell.toString(),
            unit: 'quả'
          },
          {
            stepPrompt: 'Bước 4: Tính tổng số cam cô Bình đã bán được cả hai lần:',
            correctFormula: `${firstSell} + ${secondSell} = ${totalSold} (quả)`,
            correctResult: totalSold.toString(),
            unit: 'quả'
          }
        ],
        finalAnswer: totalSold.toString(),
        explanation: `Bài giải chuẩn mực:\n\n` +
          `Lần thứ nhất cô Bình bán được số cam là:\n  ${total} x 1/4 = ${firstSell} (quả cam)\n\n` +
          `Số cam còn lại sau lần bán thứ nhất là:\n  ${total} - ${firstSell} = ${remaining} (quả cam)\n\n` +
          `Lần thứ hai cô Bình bán được số cam là:\n  ${remaining} x 2/7 = ${secondSell} (quả cam)\n\n` +
          `Cô Bình đã bán được tất cả số cam là:\n  ${firstSell} + ${secondSell} = ${totalSold} (quả cam)\n\n` +
          `Đáp số: ${totalSold} quả cam.`,
        hint: 'Chú ý chữ "SỐ CAM CÒN LẠI": em phải tìm số cam còn lại trước khi tính lần thứ hai!',
        commonMistake: `Rất nhiều bạn lấy ${total} x 2/7 là SAI vì 2/7 là của số còn lại, không phải của tổng ban đầu!`,
        level: 3
      };
    },
    () => {
      // Soccer field / Tile problem (Image 1, Bài 4)
      const perimeter = 320; // P = 320 -> semi = 160
      const diff = 40; // L - W = 40
      const semi = perimeter / 2; // 160
      const length = (semi + diff) / 2; // 100
      const width = (semi - diff) / 2; // 60
      const area = length * width; // 6000 m2
      const seedPer100 = 3; // kg
      const totalSeedKg = (area / 100) * seedPer100; // 180 kg
      const totalSeedYen = totalSeedKg / 10; // 18 yến

      return {
        id: `wp-field-${Date.now()}-${Math.random()}`,
        topicId: 'math-top-6',
        type: 'word_problem' as const,
        title: 'Giải toán hình học: Chu vi, diện tích và gieo hạt giống',
        prompt: `Một sân bóng hình chữ nhật có chu vi là ${perimeter} m, chiều dài hơn chiều rộng ${diff} m.\na) Tính diện tích sân bóng.\nb) Người ta gieo cỏ trên toàn bộ sân, cứ 100 m² cần ${seedPer100} kg hạt giống. Hỏi cần bao nhiêu YẾN hạt giống cỏ?`,
        correctAnswer: [totalSeedYen.toString(), `${totalSeedYen} yến`],
        unit: 'yến',
        wordProblemSteps: [
          {
            stepPrompt: 'Bước 1: Nửa chu vi sân bóng:',
            correctFormula: `${perimeter} : 2 = ${semi} (m)`,
            correctResult: semi.toString(),
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 2: Chiều dài sân bóng:',
            correctFormula: `(${semi} + ${diff}) : 2 = ${length} (m)`,
            correctResult: length.toString(),
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 3: Chiều rộng sân bóng:',
            correctFormula: `${semi} - ${length} = ${width} (m)`,
            correctResult: width.toString(),
            unit: 'm'
          },
          {
            stepPrompt: 'Bước 4: Diện tích sân bóng:',
            correctFormula: `${length} x ${width} = ${area} (m²)`,
            correctResult: area.toString(),
            unit: 'm²'
          },
          {
            stepPrompt: 'Bước 5: Số yến hạt giống cỏ cần dùng (đổi kg ra yến):',
            correctFormula: `(${area} : 100) x ${seedPer100} = ${totalSeedKg} (kg) = ${totalSeedYen} yến`,
            correctResult: totalSeedYen.toString(),
            unit: 'yến'
          }
        ],
        finalAnswer: totalSeedYen.toString(),
        explanation: `Bài giải đầy đủ chuẩn Tiểu học:\n\n` +
          `Nửa chu vi của sân bóng là:\n  ${perimeter} : 2 = ${semi} (m)\n\n` +
          `Chiều dài sân bóng là:\n  (${semi} + ${diff}) : 2 = ${length} (m)\n\n` +
          `Chiều rộng sân bóng là:\n  ${length} - ${diff} = ${width} (m)\n\n` +
          `a) Diện tích sân bóng là:\n  ${length} x ${width} = ${area} (m²)\n\n` +
          `b) Số ki-lô-gam hạt giống cỏ cần dùng là:\n  (${area} : 100) x ${seedPer100} = ${totalSeedKg} (kg)\n\n` +
          `Đổi: ${totalSeedKg} kg = ${totalSeedYen} yến (vì 1 yến = 10 kg).\n\n` +
          `Đáp số:\n  a) ${area} m²;\n  b) ${totalSeedYen} yến hạt giống.`,
        hint: 'Đây là bài toán Tìm hai số khi biết Tổng và Hiệu (Tổng là nửa chu vi). Đừng quên đổi sang đơn vị YẾN nhé!',
        level: 4
      };
    }
  ];

  return pickRandom(templates)();
}

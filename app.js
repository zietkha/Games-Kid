/**
 * English Kha Master Kids — Application Engine
 * Interactive English Learning & Games for Primary School Students (Grades 1-5)
 * Developed by Nguyen Viet Kha
 */

// ==========================================================================
// 1. Curricula Database: Grades 1 - 5 Rich Content & Games
// ==========================================================================
const CURRICULUM = {
  1: {
    grade: 1,
    name: "Lớp 1 — Vỡ Lòng & Làm Quen",
    theme: "Chữ cái, Màu sắc, Số đếm & Động vật bé yêu",
    color: "#3b82f6",
    icon: "🐣",
    words: [
      { id: "g1_1", word: "Cat", phonetic: "/kæt/", meaning: "Con mèo", emoji: "🐱", example: "The cat is sleeping on the mat.", category: "Động vật" },
      { id: "g1_2", word: "Dog", phonetic: "/dɒɡ/", meaning: "Con chó", emoji: "🐶", example: "I have a friendly dog.", category: "Động vật" },
      { id: "g1_3", word: "Apple", phonetic: "/ˈæp.əl/", meaning: "Quả táo", emoji: "🍎", example: "This red apple is sweet.", category: "Trái cây" },
      { id: "g1_4", word: "Sun", phonetic: "/sʌn/", meaning: "Mặt trời", emoji: "☀️", example: "The sun is shining bright.", category: "Thiên nhiên" },
      { id: "g1_5", word: "Fish", phonetic: "/fɪʃ/", meaning: "Con cá", emoji: "🐟", example: "The fish is swimming fast.", category: "Động vật" },
      { id: "g1_6", word: "Bird", phonetic: "/bɜːd/", meaning: "Con chim", emoji: "🐦", example: "The bird is singing in the tree.", category: "Động vật" },
      { id: "g1_7", word: "Blue", phonetic: "/bluː/", meaning: "Màu xanh dương", emoji: "💙", example: "The sky is clear blue.", category: "Màu sắc" },
      { id: "g1_8", word: "Red", phonetic: "/red/", meaning: "Màu đỏ", emoji: "❤️", example: "I wear a nice red hat.", category: "Màu sắc" },
      { id: "g1_9", word: "One", phonetic: "/wʌn/", meaning: "Số một (1)", emoji: "1️⃣", example: "I have one little puppy.", category: "Số đếm" },
      { id: "g1_10", word: "Two", phonetic: "/tuː/", meaning: "Số hai (2)", emoji: "2️⃣", example: "Two eyes to see the world.", category: "Số đếm" }
    ],
    quiz: [
      {
        prompt: 'Từ tiếng Anh nào chỉ "Con mèo"?',
        emoji: "🐱",
        options: ["Cat", "Dog", "Bird", "Fish"],
        answer: 0,
        explanation: '"Cat" là Con mèo trong tiếng Anh.'
      },
      {
        prompt: 'Quả táo trong tiếng Anh phát âm là gì?',
        emoji: "🍎",
        options: ["Banana", "Apple", "Orange", "Grape"],
        answer: 1,
        explanation: '"Apple" (/ˈæp.əl/) có nghĩa là quả táo.'
      },
      {
        prompt: 'Màu đỏ tiếng Anh là từ nào?',
        emoji: "🔴",
        options: ["Green", "Blue", "Red", "Yellow"],
        answer: 2,
        explanation: '"Red" là màu đỏ.'
      },
      {
        prompt: 'Từ nào sau đây chỉ "Mặt trời"?',
        emoji: "☀️",
        options: ["Moon", "Star", "Cloud", "Sun"],
        answer: 3,
        explanation: '"Sun" chính là ông mặt trời tỏa nắng ấm áp.'
      },
      {
        prompt: 'Số 2 trong tiếng Anh đọc là gì?',
        emoji: "2️⃣",
        options: ["One", "Two", "Three", "Four"],
        answer: 1,
        explanation: '"Two" nghĩa là số 2.'
      }
    ]
  },
  2: {
    grade: 2,
    name: "Lớp 2 — Đồ Dùng & Gia Đình",
    theme: "Dụng cụ học tập, người thân trong nhà, bộ phận cơ thể & đồ chơi",
    color: "#10b981",
    icon: "🦊",
    words: [
      { id: "g2_1", word: "Book", phonetic: "/bʊk/", meaning: "Quyển sách", emoji: "📖", example: "Open your English book, please.", category: "Học tập" },
      { id: "g2_2", word: "Pencil", phonetic: "/ˈpen.səl/", meaning: "Bút chì", emoji: "✏️", example: "I draw a picture with a pencil.", category: "Học tập" },
      { id: "g2_3", word: "Mother", phonetic: "/ˈmʌð.ər/", meaning: "Mẹ yêu", emoji: "👩", example: "My mother is very kind.", category: "Gia đình" },
      { id: "g2_4", word: "Father", phonetic: "/ˈfɑː.ðər/", meaning: "Bố yêu", emoji: "👨", example: "My father plays football with me.", category: "Gia đình" },
      { id: "g2_5", word: "Ball", phonetic: "/bɔːl/", meaning: "Quả bóng", emoji: "⚽", example: "Let us kick the soccer ball.", category: "Đồ chơi" },
      { id: "g2_6", word: "Doll", phonetic: "/dɒl/", meaning: "Búp bê", emoji: "🪆", example: "She has a pretty doll.", category: "Đồ chơi" },
      { id: "g2_7", word: "Eye", phonetic: "/aɪ/", meaning: "Đôi mắt", emoji: "👁️", example: "She has bright brown eyes.", category: "Cơ thể" },
      { id: "g2_8", word: "Nose", phonetic: "/nəʊz/", meaning: "Chiếc mũi", emoji: "👃", example: "Touch your little nose.", category: "Cơ thể" },
      { id: "g2_9", word: "Hand", phonetic: "/hænd/", meaning: "Bàn tay", emoji: "✋", example: "Clap your hands together!", category: "Cơ thể" },
      { id: "g2_10", word: "Ruler", phonetic: "/ˈruː.lər/", meaning: "Thước kẻ", emoji: "📏", example: "Draw a straight line with a ruler.", category: "Học tập" }
    ],
    quiz: [
      {
        prompt: 'Từ nào chỉ "Cây bút chì"?',
        emoji: "✏️",
        options: ["Ruler", "Pen", "Pencil", "Eraser"],
        answer: 2,
        explanation: '"Pencil" là bút chì dùng để vẽ và viết bài.'
      },
      {
        prompt: '"Mother" có nghĩa là ai trong gia đình?',
        emoji: "👩",
        options: ["Bố", "Mẹ", "Chị gái", "Anh trai"],
        answer: 1,
        explanation: '"Mother" là Mẹ.'
      },
      {
        prompt: 'Đôi mắt trong tiếng Anh được gọi là:',
        emoji: "👁️",
        options: ["Ear", "Eye", "Mouth", "Hand"],
        answer: 1,
        explanation: '"Eye" là mắt.'
      },
      {
        prompt: 'Thước kẻ tiếng Anh là:',
        emoji: "📏",
        options: ["Ruler", "Book", "Desk", "Bag"],
        answer: 0,
        explanation: '"Ruler" là thước kẻ học sinh.'
      }
    ]
  },
  3: {
    grade: 3,
    name: "Lớp 3 — Cuộc Sống Thường Ngày",
    theme: "Món ăn ngon, đồ uống, thời tiết & các hoạt động thể chất",
    color: "#f59e0b",
    icon: "🐼",
    words: [
      { id: "g3_1", word: "Pizza", phonetic: "/ˈpiːt.sə/", meaning: "Bánh pizza", emoji: "🍕", example: "We eat yummy cheese pizza.", category: "Thức ăn" },
      { id: "g3_2", word: "Water", phonetic: "/ˈwɔː.tər/", meaning: "Nước uống", emoji: "💧", example: "Drink plenty of fresh water.", category: "Đồ uống" },
      { id: "g3_3", word: "Sunny", phonetic: "/ˈsʌn.i/", meaning: "Trời nắng", emoji: "🌞", example: "It is a warm sunny day.", category: "Thời tiết" },
      { id: "g3_4", word: "Rainy", phonetic: "/ˈreɪ.ni/", meaning: "Trời mưa", emoji: "🌧️", example: "Take an umbrella on rainy days.", category: "Thời tiết" },
      { id: "g3_5", word: "Jump", phonetic: "/dʒʌmp/", meaning: "Nhảy cao", emoji: "🦘", example: "Can you jump as high as a kangaroo?", category: "Hành động" },
      { id: "g3_6", word: "Sing", phonetic: "/sɪŋ/", meaning: "Hát ca", emoji: "🎤", example: "The children sing happy songs.", category: "Hành động" },
      { id: "g3_7", word: "Bread", phonetic: "/bred/", meaning: "Bánh mì", emoji: "🍞", example: "I have bread and milk for breakfast.", category: "Thức ăn" },
      { id: "g3_8", word: "Milk", phonetic: "/mɪlk/", meaning: "Sữa tươi", emoji: "🥛", example: "Cold milk gives you strong bones.", category: "Đồ uống" }
    ],
    quiz: [
      {
        prompt: 'Thời tiết "Có nắng" tiếng Anh là gì?',
        emoji: "🌞",
        options: ["Rainy", "Windy", "Sunny", "Snowy"],
        answer: 2,
        explanation: '"Sunny" diễn tả ngày nắng đẹp trời.'
      },
      {
        prompt: 'Hành động "Hát" trong tiếng Anh là:',
        emoji: "🎤",
        options: ["Dance", "Sing", "Swim", "Sleep"],
        answer: 1,
        explanation: '"Sing" là ca hát.'
      },
      {
        prompt: 'Đồ uống "Sữa" tiếng Anh là gì?',
        emoji: "🥛",
        options: ["Tea", "Juice", "Milk", "Soda"],
        answer: 2,
        explanation: '"Milk" là sữa tươi thơm ngon bổ dưỡng.'
      }
    ]
  },
  4: {
    grade: 4,
    name: "Lớp 4 — Nghề Nghiệp & Thế Giới Xung Quanh",
    theme: "Ước mơ nghề nghiệp, các địa điểm trong thành phố & trang phục",
    color: "#8b5cf6",
    icon: "🦁",
    words: [
      { id: "g4_1", word: "Doctor", phonetic: "/ˈdɒk.tər/", meaning: "Bác sĩ", emoji: "👨‍⚕️", example: "The doctor cures sick people.", category: "Nghề nghiệp" },
      { id: "g4_2", word: "Teacher", phonetic: "/ˈtiː.tʃər/", meaning: "Thầy/Cô giáo", emoji: "👩‍🏫", example: "My teacher helps me learn English.", category: "Nghề nghiệp" },
      { id: "g4_3", word: "School", phonetic: "/skuːl/", meaning: "Trường học", emoji: "🏫", example: "We go to primary school together.", category: "Địa điểm" },
      { id: "g4_4", word: "Park", phonetic: "/pɑːk/", meaning: "Công viên", emoji: "🏞️", example: "We ride bicycles in the city park.", category: "Địa điểm" },
      { id: "g4_5", word: "Shirt", phonetic: "/ʃɜːt/", meaning: "Áo sơ mi", emoji: "👔", example: "He wears a neat white shirt.", category: "Trang phục" },
      { id: "g4_6", word: "Shoes", phonetic: "/ʃuːz/", meaning: "Đôi giày", emoji: "👟", example: "Tie your sports shoes before running.", category: "Trang phục" },
      { id: "g4_7", word: "Hospital", phonetic: "/ˈhɒs.pɪ.təl/", meaning: "Bệnh viện", emoji: "🏥", example: "Doctors and nurses work at the hospital.", category: "Địa điểm" },
      { id: "g4_8", word: "Pilot", phonetic: "/ˈpaɪ.lət/", meaning: "Phi công", emoji: "👨‍✈️", example: "The pilot flies an airplane in the sky.", category: "Nghề nghiệp" }
    ],
    quiz: [
      {
        prompt: 'Ai là người dạy học trên lớp?',
        emoji: "👩‍🏫",
        options: ["Doctor", "Teacher", "Pilot", "Chef"],
        answer: 1,
        explanation: '"Teacher" là thầy cô giáo truyền cảm hứng tri thức.'
      },
      {
        prompt: '"Công viên" tiếng Anh là gì?',
        emoji: "🏞️",
        options: ["Hospital", "Market", "Park", "Cinema"],
        answer: 2,
        explanation: '"Park" là công viên cây xanh.'
      },
      {
        prompt: 'Người lái máy bay được gọi là:',
        emoji: "✈️",
        options: ["Driver", "Sailor", "Pilot", "Engineer"],
        answer: 2,
        explanation: '"Pilot" là phi công bay lượn trên bầu trời.'
      }
    ]
  },
  5: {
    grade: 5,
    name: "Lớp 5 — Giao Tiếp & Hội Nhập",
    theme: "Khám phá các quốc gia, kỳ nghỉ mơ ước & bảo vệ môi trường",
    color: "#ec4899",
    icon: "🚀",
    words: [
      { id: "g5_1", word: "Vietnam", phonetic: "/ˌvjetˈnæm/", meaning: "Việt Nam quê hương", emoji: "🇻🇳", example: "I am proud to be Vietnamese.", category: "Đất nước" },
      { id: "g5_2", word: "Holiday", phonetic: "/ˈhɒl.ə.deɪ/", meaning: "Kỳ nghỉ hè", emoji: "🏖️", example: "We enjoy our summer holiday by the sea.", category: "Du lịch" },
      { id: "g5_3", word: "Earth", phonetic: "/ɜːθ/", meaning: "Trái Đất", emoji: "🌍", example: "Let us protect planet Earth together.", category: "Môi trường" },
      { id: "g5_4", word: "Future", phonetic: "/ˈfjuː.tʃər/", meaning: "Tương lai", emoji: "🌟", example: "Study hard for a bright future.", category: "Khái niệm" },
      { id: "g5_5", word: "Robot", phonetic: "/ˈrəʊ.bɒt/", meaning: "Người máy thông minh", emoji: "🤖", example: "The robot can speak English fluently.", category: "Khoa học" },
      { id: "g5_6", word: "England", phonetic: "/ˈɪŋ.ɡlənd/", meaning: "Nước Anh", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", example: "London is the capital of England.", category: "Đất nước" },
      { id: "g5_7", word: "Beach", phonetic: "/biːtʃ/", meaning: "Bãi biển", emoji: "🏖️", example: "We build sandcastles on the beach.", category: "Du lịch" }
    ],
    quiz: [
      {
        prompt: 'Tên đất nước thân yêu của chúng ta:',
        emoji: "🇻🇳",
        options: ["Japan", "Vietnam", "England", "America"],
        answer: 1,
        explanation: '"Vietnam" là đất nước Việt Nam tươi đẹp!'
      },
      {
        prompt: '"Trái Đất" tiếng Anh là:',
        emoji: "🌍",
        options: ["Sun", "Moon", "Earth", "Mars"],
        answer: 2,
        explanation: '"Earth" là hành tinh Trái Đất của chúng ta.'
      },
      {
        prompt: '"Bãi biển" tiếng Anh là gì?',
        emoji: "🏖️",
        options: ["Mountain", "Beach", "River", "Forest"],
        answer: 1,
        explanation: '"Beach" là bãi biển với cát vàng và sóng vỗ.'
      }
    ]
  }
};

// ==========================================================================
// 2. Application State Management
// ==========================================================================
const AppState = {
  currentGrade: 1,
  audioRate: 0.85,
  soundEnabled: true,
  
  // User Profile & Stats
  user: {
    name: "Bé Siêu Nhân",
    avatar: "🦁",
    xp: 350,
    streak: 3,
    level: 3,
    lessonsDone: 14,
    onlineSeconds: 2700, // 45 mins
    badges: ["welcome", "speed", "scramble_pro"],
    lastCheckinDate: "",
    checkinCount: 3
  },

  // Flashcard State
  flashcardIndex: 0,
  isCardFlipped: false,
  masteredWords: [],

  // Quiz Challenge State
  quizIndex: 0,
  quizScore: 0,
  quizTimerInterval: null,
  quizTimeRemaining: 15,
  quizAnswerSelected: false,

  // Picture Match Game State
  pictureScore: 0,
  pictureCurrentWord: null,
  pictureChoices: [],
  pictureAnswered: false,

  // Scramble Game State
  scrambleCurrentWord: null,
  scrambleSelectedLetters: [],
  scrambleAvailableLetters: []
};

// Load Saved Local State
function loadSavedState() {
  try {
    const saved = localStorage.getItem('ekm_kids_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.user) AppState.user = { ...AppState.user, ...parsed.user };
      if (parsed.currentGrade) AppState.currentGrade = parsed.currentGrade;
      if (parsed.masteredWords) AppState.masteredWords = parsed.masteredWords;
      if (parsed.soundEnabled !== undefined) AppState.soundEnabled = parsed.soundEnabled;
    }
  } catch (e) {
    console.warn("Storage access notice:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem('ekm_kids_state', JSON.stringify({
      user: AppState.user,
      currentGrade: AppState.currentGrade,
      masteredWords: AppState.masteredWords,
      soundEnabled: AppState.soundEnabled
    }));
  } catch (e) {}
}

// ==========================================================================
// 3. Audio Synthesis & Sound Effects (Web Audio API)
// ==========================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// ==========================================================================
// Kahoot-Authentic Sound Engine (Web Audio API)
// ==========================================================================

// 1. Kahoot Correct Answer: Bright, snappy ascending major arpeggio
// E5 (659.25Hz) -> G#5 (830.61Hz) -> B5 (987.77Hz) -> E6 (1318.51Hz)
function playKahootCorrectSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [
      { freq: 659.25, time: 0.00, dur: 0.12 }, // E5
      { freq: 830.61, time: 0.07, dur: 0.12 }, // G#5
      { freq: 987.77, time: 0.14, dur: 0.12 }, // B5
      { freq: 1318.51, time: 0.21, dur: 0.42 }  // E6
    ];

    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0.001, now + n.time);
      gain.gain.linearRampToValueAtTime(0.28, now + n.time + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur + 0.05);
    });
  } catch (e) {}
}

// 2. Kahoot Wrong Answer: Characteristic low 2-tone descending filtered buzz
function playKahootWrongSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const buzzTones = [
      { startFreq: 311.13, endFreq: 246.94, time: 0.00, dur: 0.18 },
      { startFreq: 196.00, endFreq: 146.83, time: 0.14, dur: 0.28 }
    ];

    buzzTones.forEach(t => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(t.startFreq, now + t.time);
      osc.frequency.exponentialRampToValueAtTime(t.endFreq, now + t.time + t.dur);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, now + t.time);
      filter.frequency.exponentialRampToValueAtTime(300, now + t.time + t.dur);

      gain.gain.setValueAtTime(0.001, now + t.time);
      gain.gain.linearRampToValueAtTime(0.22, now + t.time + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + t.time + t.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + t.time);
      osc.stop(now + t.time + t.dur + 0.02);
    });
  } catch (e) {}
}

// 3. Kahoot Score Ticker: Snappy woodblock pop
function playKahootTickSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.03);

    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.035);
  } catch (e) {}
}

// 4. Kahoot Powerup Celebration Fanfare
function playKahootPowerupSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.065);
      gain.gain.setValueAtTime(0.001, now + idx * 0.065);
      gain.gain.linearRampToValueAtTime(0.24, now + idx * 0.065 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.065 + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.065);
      osc.stop(now + idx * 0.065 + 0.3);
    });
  } catch (e) {}
}

function playSoundSuccess() {
  playKahootCorrectSound();
}

function playSoundWrong() {
  playKahootWrongSound();
}

// Speak word aloud for pronunciation demonstration
function speakWord(text) {
  if (!('speechSynthesis' in window)) {
    showToast("⚠️ Trình duyệt chưa hỗ trợ phát âm tự động.", "warning");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = AppState.audioRate;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// 4. Confetti Celebrations System
// ==========================================================================
let confettiParticles = [];
let confettiAnimationId = null;

function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#2563eb', '#60a5fa', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];
  confettiParticles = [];

  for (let i = 0; i < 90; i++) {
    confettiParticles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.45,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -14 - 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      gravity: 0.42,
      opacity: 1
    });
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.009;

      if (p.opacity > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      confettiAnimationId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render();
}

// ==========================================================================
// 5. XP, Streaks & Gamification Engine
// ==========================================================================
function addXP(points, reason = "") {
  AppState.user.xp += points;
  updateNavStats();
  saveState();
  if (reason) {
    showToast(`⚡ +${points} XP: ${reason}!`, "success");
  }
}

function updateNavStats() {
  const xpEl = document.getElementById('navXpCount');
  const streakEl = document.getElementById('navStreakCount');
  const nameEl = document.getElementById('navLearnerName');
  const avatarEl = document.getElementById('navAvatarEmoji');
  const soundIcon = document.getElementById('soundIcon');
  const greetingName = document.getElementById('dashGreetingName');
  const modalProfileName = document.getElementById('modalProfileName');
  const modalAvatarDisplay = document.getElementById('modalAvatarDisplay');

  if (xpEl) xpEl.textContent = AppState.user.xp.toLocaleString();
  if (streakEl) streakEl.textContent = AppState.user.streak;
  if (nameEl) nameEl.textContent = AppState.user.name;
  if (avatarEl) avatarEl.textContent = AppState.user.avatar;
  if (soundIcon) soundIcon.textContent = AppState.soundEnabled ? '🔊' : '🔇';
  if (greetingName) greetingName.textContent = AppState.user.name;
  if (modalProfileName) modalProfileName.textContent = AppState.user.name;
  if (modalAvatarDisplay) modalAvatarDisplay.textContent = AppState.user.avatar;

  const pXp = document.getElementById('profileXpVal');
  const pStreak = document.getElementById('profileStreakVal');
  const pLessons = document.getElementById('profileLessonsDone');
  const pRank = document.getElementById('profileRankLevel');
  const pAvatar = document.getElementById('currentAvatarDisplay');

  if (pXp) pXp.textContent = AppState.user.xp;
  if (pStreak) pStreak.textContent = AppState.user.streak;
  if (pLessons) pLessons.textContent = AppState.user.lessonsDone;
  if (pAvatar) pAvatar.textContent = AppState.user.avatar;

  const xp = AppState.user.xp;
  let level = 1;
  let rankTitle = "Tân Binh Tiếng Anh";
  if (xp >= 1500) { level = 5; rankTitle = "Đại Kiện Tướng Song Ngữ 👑"; }
  else if (xp >= 800) { level = 4; rankTitle = "Thần Đồng Giao Tiếp ⭐"; }
  else if (xp >= 300) { level = 3; rankTitle = "Chiến Thần Tiếng Anh ⚡"; }
  else if (xp >= 100) { level = 2; rankTitle = "Nhà Thám Hiểm Chăm Chỉ 🌟"; }

  AppState.user.level = level;
  if (pRank) pRank.textContent = `Level ${level} • ${rankTitle}`;
}

setInterval(() => {
  if (document.visibilityState === 'visible') {
    AppState.user.onlineSeconds += 60;
    saveState();
    renderLeaderboard();
  }
}, 60000);

// ==========================================================================
// 6. Navigation, Routing & Grade Selector
// ==========================================================================
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab, .mobile-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      if (targetId) switchView(targetId);
    });
  });

  const brandBtn = document.getElementById('brandBtn');
  if (brandBtn) {
    brandBtn.addEventListener('click', () => switchView('view-dashboard'));
  }

  const openProfileBtn = document.getElementById('openProfileBtn');
  if (openProfileBtn) {
    openProfileBtn.addEventListener('click', () => openModal('profileModal'));
  }

  const dailyCheckinBtn = document.getElementById('dailyCheckinBtn');
  if (dailyCheckinBtn) {
    dailyCheckinBtn.addEventListener('click', () => {
      renderDailyCheckinGrid();
      openModal('checkinModal');
    });
  }

  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      updateNavStats();
      saveState();
      showToast(AppState.soundEnabled ? "🔊 Đã bật âm thanh hiệu ứng" : "🔇 Đã tắt âm thanh hiệu ứng", "info");
    });
  }

  const speedToggles = document.querySelectorAll('.speed-toggle');
  speedToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      speedToggles.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.audioRate = parseFloat(btn.getAttribute('data-speed'));
      showToast(`Tốc độ đọc: ${btn.textContent}`, "info");
    });
  });

  window.addEventListener('hashchange', handleHashRouting);
  if (window.location.hash) {
    handleHashRouting();
  }
}

function goBackToHome() {
  switchView('view-dashboard');
}
window.goBackToHome = goBackToHome;

function scrollToGrades() {
  const el = document.getElementById('gradesSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
window.scrollToGrades = scrollToGrades;

// Teacher Zone Controls (Đấu Trường & Teacher Zone Tại Trang Chủ)
function scrollToTeacherZone() {
  switchView('view-dashboard');
  setTimeout(() => {
    const el = document.getElementById('homepageTeacherZone');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    initBaamCreatorFileInput();
    renderBaamCreatorPresets();
    renderBaamCustomQuestionsList();
    renderCreatorPresets();
    renderCreatorQuestionsList();
    if (typeof syncTeacherZoneTeamsUI === 'function') {
      syncTeacherZoneTeamsUI();
    }
  }, 100);
}
window.scrollToTeacherZone = scrollToTeacherZone;

function openTeacherZone() {
  scrollToTeacherZone();
  showToast("👩‍🏫 Đã chuyển đến Teacher Zone: Tinh chỉnh trò chơi & danh sách học sinh!", "info");
}
window.openTeacherZone = openTeacherZone;

function openTeacherZonePrompt() {
  scrollToTeacherZone();
}
window.openTeacherZonePrompt = openTeacherZonePrompt;

function verifyTeacherPin() {
  closeModal('teacherAccessModal');
  scrollToTeacherZone();
}
window.verifyTeacherPin = verifyTeacherPin;

function closeTeacherZone() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast("Trở về đầu trang Đấu trường!", "info");
}
window.closeTeacherZone = closeTeacherZone;

function switchView(viewId) {
  const views = document.querySelectorAll('.app-view');
  views.forEach(v => v.classList.remove('active'));

  const tabs = document.querySelectorAll('.nav-tab, .mobile-tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-target') === viewId) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (viewId === 'view-games') {
    renderFlashcard();
    initPictureGame();
    initScrambleGame();
  } else if (viewId === 'view-leaderboard') {
    renderLeaderboard();
  } else if (viewId === 'view-baamboozle') {
    if (typeof initBaamboozleUI === 'function') {
      initBaamboozleUI();
    }
  } else if (viewId === 'view-ai-studio') {
    if (typeof initAiStudioUI === 'function') {
      initAiStudioUI();
    }
  } else if (viewId === 'view-teacher-zone') {
    initBaamCreatorFileInput();
    renderBaamCreatorPresets();
    renderBaamCustomQuestionsList();
    renderCreatorPresets();
    renderCreatorQuestionsList();
  }
}

function handleHashRouting() {
  const hash = window.location.hash;
  if (!hash) return;

  if (hash.startsWith('#/lop/')) {
    const parts = hash.split('/');
    const grade = parseInt(parts[2]);
    if (grade >= 1 && grade <= 5) {
      selectGrade(grade);
      switchView('view-dashboard');
    }
  } else if (hash === '#/games') {
    switchView('view-games');
  } else if (hash === '#/leaderboard') {
    switchView('view-leaderboard');
  } else if (hash === '#/profile') {
    openModal('profileModal');
  }
}

function renderGradeCards() {
  const container = document.getElementById('gradeCardsGrid');
  if (!container) return;

  container.innerHTML = '';
  for (let g = 1; g <= 5; g++) {
    const data = CURRICULUM[g];
    const card = document.createElement('div');
    card.className = `grade-card ${g === AppState.currentGrade ? 'active' : ''}`;
    card.onclick = () => selectGrade(g);

    card.innerHTML = `
      <span class="grade-icon">${data.icon}</span>
      <div class="grade-num">Lớp ${g}</div>
      <div class="grade-target-age">${g + 5} - ${g + 6} tuổi</div>
    `;
    container.appendChild(card);
  }
}

function selectGrade(grade) {
  AppState.currentGrade = grade;
  AppState.flashcardIndex = 0;
  AppState.quizIndex = 0;

  renderGradeCards();
  updateDashboardGradeView();

  saveState();
  showToast(`🎒 Đã chuyển sang chương trình Tiếng Anh Lớp ${grade}!`, "info");
}

function updateDashboardGradeView() {
  const data = CURRICULUM[AppState.currentGrade];
  const titleEl = document.getElementById('currentGradeTitle');
  const themeEl = document.getElementById('currentGradeTheme');

  if (titleEl) titleEl.textContent = `🌟 ${data.name}`;
  if (themeEl) themeEl.textContent = `Chủ đề: ${data.theme}`;

  const cReading = document.getElementById('count-reading');
  const cQuiz = document.getElementById('count-quiz');
  const cListening = document.getElementById('count-listening');
  const cWriting = document.getElementById('count-writing');

  if (cReading) cReading.textContent = `${data.words.length} thẻ từ vựng`;
  if (cQuiz) cQuiz.textContent = `${data.quiz.length} câu đố vui`;
  if (cListening) cListening.textContent = `Đoán hình vui`;
  if (cWriting) cWriting.textContent = `Ghép chữ Scramble`;
}

function openSkillModal(gameType) {
  switchView('view-games');
  switchGameTab(gameType);
}

// ==========================================================================
// 7. Mini-Games: Flashcard 3D, Speed Quiz, Picture Match & Word Scramble
// ==========================================================================
function initGamesEngine() {
  const tabs = document.querySelectorAll('.game-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchGameTab(tab.getAttribute('data-game'));
    });
  });

  // Flashcard controls
  const prevCard = document.getElementById('prevCardBtn');
  const nextCard = document.getElementById('nextCardBtn');
  const shuffleBtn = document.getElementById('shuffleCardsBtn');
  const fcSpeak = document.getElementById('fcSpeakBtn');

  if (prevCard) {
    prevCard.addEventListener('click', () => {
      const words = CURRICULUM[AppState.currentGrade].words;
      AppState.flashcardIndex = (AppState.flashcardIndex - 1 + words.length) % words.length;
      unflipCard();
      renderFlashcard();
    });
  }
  if (nextCard) {
    nextCard.addEventListener('click', () => {
      const words = CURRICULUM[AppState.currentGrade].words;
      AppState.flashcardIndex = (AppState.flashcardIndex + 1) % words.length;
      unflipCard();
      renderFlashcard();
    });
  }
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      const words = CURRICULUM[AppState.currentGrade].words;
      AppState.flashcardIndex = Math.floor(Math.random() * words.length);
      unflipCard();
      renderFlashcard();
      showToast("🔀 Đã đổi ngẫu nhiên thẻ bài mới!", "info");
    });
  }
  if (fcSpeak) {
    fcSpeak.addEventListener('click', () => {
      const curr = CURRICULUM[AppState.currentGrade].words[AppState.flashcardIndex];
      if (curr) speakWord(curr.word);
    });
  }

  // Quiz Next Button & Listen Button
  const quizNext = document.getElementById('quizNextQuestionBtn');
  const quizListen = document.getElementById('quizListenQuestionBtn');
  if (quizNext) quizNext.addEventListener('click', nextQuizQuestion);
  if (quizListen) {
    quizListen.addEventListener('click', () => {
      const q = CURRICULUM[AppState.currentGrade].quiz[AppState.quizIndex];
      if (q) speakWord(q.options[q.answer]);
    });
  }

  // Picture Match Listen Button & Next Button
  const picListen = document.getElementById('pictureListenBtn');
  const picNext = document.getElementById('pictureNextBtn');
  if (picListen) {
    picListen.addEventListener('click', () => {
      if (AppState.pictureCurrentWord) speakWord(AppState.pictureCurrentWord.word);
    });
  }
  if (picNext) {
    picNext.addEventListener('click', initPictureGame);
  }

  // Scramble controls
  const scrambleReset = document.getElementById('scrambleResetBtn');
  const scrambleCheck = document.getElementById('scrambleCheckBtn');
  if (scrambleReset) scrambleReset.addEventListener('click', resetScrambleSlots);
  if (scrambleCheck) scrambleCheck.addEventListener('click', checkScrambleAnswer);

  window.addEventListener('keydown', handleKeyboardForScramble);
}

function switchGameTab(gameType) {
  const tabs = document.querySelectorAll('.game-tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-game') === gameType) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  const boxes = document.querySelectorAll('.game-box');
  boxes.forEach(b => b.classList.remove('active'));

  const activeBox = document.getElementById(`game-${gameType}-box`);
  if (activeBox) activeBox.classList.add('active');

  if (gameType === 'flashcard') renderFlashcard();
  if (gameType === 'quiz') startQuizSession();
  if (gameType === 'picture') initPictureGame();
  if (gameType === 'scramble') initScrambleGame();
}

// --- Flashcard 3D Logic ---
function flipCard() {
  const card = document.getElementById('interactiveFlashcard');
  if (card) {
    card.classList.toggle('flipped');
    AppState.isCardFlipped = card.classList.contains('flipped');
    if (AppState.isCardFlipped) {
      addXP(2);
    }
  }
}

function unflipCard() {
  const card = document.getElementById('interactiveFlashcard');
  if (card) {
    card.classList.remove('flipped');
    AppState.isCardFlipped = false;
  }
}

function renderFlashcard() {
  const words = CURRICULUM[AppState.currentGrade].words;
  const wordObj = words[AppState.flashcardIndex];
  if (!wordObj) return;

  document.getElementById('fcFrontEmoji').textContent = wordObj.emoji;
  document.getElementById('fcFrontWord').textContent = wordObj.word;
  document.getElementById('fcFrontPhonetic').textContent = wordObj.phonetic;

  document.getElementById('fcBackMeaning').textContent = wordObj.meaning;
  document.getElementById('fcBackExample').textContent = `"${wordObj.example}"`;
  document.getElementById('cardPaginationText').textContent = `Thẻ ${AppState.flashcardIndex + 1} / ${words.length}`;

  const isMastered = AppState.masteredWords.includes(wordObj.id);
  const statusEl = document.getElementById('srsCardStatus');
  if (statusEl) {
    statusEl.textContent = isMastered ? "Trạng thái: 🟢 Đã nhớ kỹ" : "Trạng thái: 🟡 Đang học";
    statusEl.style.background = isMastered ? "#dcfce7" : "#fef3c7";
    statusEl.style.color = isMastered ? "#15803d" : "#b45309";
  }
}

function markCardMastered() {
  const curr = CURRICULUM[AppState.currentGrade].words[AppState.flashcardIndex];
  if (!curr) return;

  if (!AppState.masteredWords.includes(curr.id)) {
    AppState.masteredWords.push(curr.id);
    addXP(5, `Ghi nhớ từ "${curr.word}"`);
    playSoundSuccess();
    triggerConfetti();
    saveState();
  }
  renderFlashcard();
}

// --- Speed Quiz Challenge Logic ---
function startQuizSession() {
  AppState.quizIndex = 0;
  AppState.quizScore = 0;
  document.getElementById('quizCurrentScore').textContent = '0';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  clearInterval(AppState.quizTimerInterval);
  AppState.quizAnswerSelected = false;
  AppState.quizTimeRemaining = 15;

  const quizList = CURRICULUM[AppState.currentGrade].quiz;
  const q = quizList[AppState.quizIndex];
  if (!q) return;

  document.getElementById('quizQuestionCount').textContent = `Câu ${AppState.quizIndex + 1} / ${quizList.length}`;
  document.getElementById('quizProgressBar').style.width = `${((AppState.quizIndex + 1) / quizList.length) * 100}%`;
  document.getElementById('quizQuestionEmoji').textContent = q.emoji;
  document.getElementById('quizQuestionPrompt').textContent = q.prompt;
  document.getElementById('quizExplanationBox').style.display = 'none';

  const grid = document.getElementById('quizOptionsGrid');
  grid.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}`;
    btn.onclick = () => selectQuizAnswer(idx, btn);
    grid.appendChild(btn);
  });

  updateQuizTimerDisplay();
  AppState.quizTimerInterval = setInterval(() => {
    AppState.quizTimeRemaining--;
    updateQuizTimerDisplay();
    if (AppState.quizTimeRemaining <= 0) {
      clearInterval(AppState.quizTimerInterval);
      handleQuizTimeout();
    }
  }, 1000);
}

function updateQuizTimerDisplay() {
  const timerEl = document.getElementById('quizTimeRemaining');
  if (timerEl) timerEl.textContent = AppState.quizTimeRemaining;
}

function selectQuizAnswer(selectedIndex, selectedBtn) {
  if (AppState.quizAnswerSelected) return;
  AppState.quizAnswerSelected = true;
  clearInterval(AppState.quizTimerInterval);

  const q = CURRICULUM[AppState.currentGrade].quiz[AppState.quizIndex];
  const allBtns = document.querySelectorAll('.quiz-opt-btn');

  const expBox = document.getElementById('quizExplanationBox');
  const expTitle = document.getElementById('quizExpTitle');
  const expText = document.getElementById('quizExpText');

  if (selectedIndex === q.answer) {
    selectedBtn.classList.add('correct');
    AppState.quizScore += 20;
    document.getElementById('quizCurrentScore').textContent = AppState.quizScore;
    playSoundSuccess();
    triggerConfetti();
    addXP(20, "Đáp án Quiz chuẩn xác");

    expTitle.textContent = "Chính xác tuyệt đối! 🎉";
    expTitle.style.color = "#15803d";
    expText.textContent = q.explanation;
  } else {
    selectedBtn.classList.add('incorrect');
    if (allBtns[q.answer]) allBtns[q.answer].classList.add('correct');
    playSoundWrong();

    expTitle.textContent = "Chưa chính xác rồi bé ơi! 💡";
    expTitle.style.color = "#b91c1c";
    expText.textContent = q.explanation;
  }

  expBox.style.display = 'block';
}

function handleQuizTimeout() {
  if (AppState.quizAnswerSelected) return;
  AppState.quizAnswerSelected = true;
  const q = CURRICULUM[AppState.currentGrade].quiz[AppState.quizIndex];
  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  if (allBtns[q.answer]) allBtns[q.answer].classList.add('correct');
  playSoundWrong();

  const expBox = document.getElementById('quizExplanationBox');
  document.getElementById('quizExpTitle').textContent = "Hết giờ mất rồi! ⏰";
  document.getElementById('quizExpTitle').style.color = "#b91c1c";
  document.getElementById('quizExpText').textContent = q.explanation;
  expBox.style.display = 'block';
}

function nextQuizQuestion() {
  const quizList = CURRICULUM[AppState.currentGrade].quiz;
  AppState.quizIndex++;
  if (AppState.quizIndex < quizList.length) {
    renderQuizQuestion();
  } else {
    clearInterval(AppState.quizTimerInterval);
    showToast(`🏆 Bé đã hoàn thành thử thách Quiz với ${AppState.quizScore} điểm!`, "success");
    triggerConfetti();
    AppState.user.lessonsDone++;
    saveState();
    startQuizSession();
  }
}

// --- Picture Match Game Logic ---
function initPictureGame() {
  const words = CURRICULUM[AppState.currentGrade].words;
  const target = words[Math.floor(Math.random() * words.length)];
  AppState.pictureCurrentWord = target;
  AppState.pictureAnswered = false;

  const distractors = words.filter(w => w.id !== target.id);
  const shuffledDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [target, ...shuffledDistractors].sort(() => Math.random() - 0.5);
  AppState.pictureChoices = choices;

  document.getElementById('picturePhoneticHint').textContent = target.phonetic;
  document.getElementById('pictureFeedbackText').textContent = 'Bấm loa nghe từ rồi chọn hình bên dưới!';
  document.getElementById('pictureNextBtn').style.display = 'none';

  setTimeout(() => speakWord(target.word), 400);

  const grid = document.getElementById('pictureCardsGrid');
  grid.innerHTML = '';
  choices.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'pic-choice-card';
    card.innerHTML = `
      <span class="pic-choice-emoji">${ch.emoji}</span>
      <span class="pic-choice-label">${ch.meaning}</span>
    `;
    card.onclick = () => selectPictureChoice(ch, card);
    grid.appendChild(card);
  });
}

function selectPictureChoice(chosenWord, cardEl) {
  if (AppState.pictureAnswered) return;
  AppState.pictureAnswered = true;

  const target = AppState.pictureCurrentWord;
  const fbText = document.getElementById('pictureFeedbackText');
  const nextBtn = document.getElementById('pictureNextBtn');

  if (chosenWord.id === target.id) {
    cardEl.classList.add('correct');
    AppState.pictureScore += 20;
    document.getElementById('pictureGameScore').textContent = AppState.pictureScore;
    playSoundSuccess();
    triggerConfetti();
    addXP(20, `Nghe đúng hình "${target.word}"`);
    fbText.innerHTML = `🎉 <strong>Chính xác!</strong> Đó là từ "${target.word}" (${target.meaning})!`;
    fbText.style.color = "#15803d";
  } else {
    cardEl.classList.add('incorrect');
    playSoundWrong();
    fbText.innerHTML = `💡 Chưa đúng rồi bé ơi! Từ vừa đọc là "<strong>${target.word}</strong>" (${target.meaning})!`;
    fbText.style.color = "#b91c1c";

    const allCards = document.querySelectorAll('.pic-choice-card');
    AppState.pictureChoices.forEach((ch, idx) => {
      if (ch.id === target.id && allCards[idx]) allCards[idx].classList.add('correct');
    });
  }

  nextBtn.style.display = 'inline-flex';
}

// --- Word Scramble Game Logic ---
function initScrambleGame() {
  const words = CURRICULUM[AppState.currentGrade].words;
  const randomWordObj = words[Math.floor(Math.random() * words.length)];
  AppState.scrambleCurrentWord = randomWordObj;

  document.getElementById('scrambleEmoji').textContent = randomWordObj.emoji;
  document.getElementById('scrambleMeaning').textContent = `Gợi ý nghĩa: ${randomWordObj.meaning}`;

  const cleanLetters = randomWordObj.word.toUpperCase().split('');
  const shuffled = [...cleanLetters].sort(() => Math.random() - 0.5);

  AppState.scrambleAvailableLetters = shuffled.map((char, id) => ({ id, char, used: false }));
  AppState.scrambleSelectedLetters = [];

  renderScrambleBoard();
}

function renderScrambleBoard() {
  const slotsContainer = document.getElementById('scrambleAnswerSlots');
  const bankContainer = document.getElementById('scrambleLetterBank');
  const targetWord = AppState.scrambleCurrentWord.word.toUpperCase();

  slotsContainer.innerHTML = '';
  for (let i = 0; i < targetWord.length; i++) {
    const slot = document.createElement('div');
    const placedLetter = AppState.scrambleSelectedLetters[i];
    slot.className = `slot-tile ${placedLetter ? 'filled' : ''}`;
    slot.textContent = placedLetter ? placedLetter.char : '';
    if (placedLetter) {
      slot.style.cursor = 'pointer';
      slot.onclick = () => removeScrambleLetter(i);
    }
    slotsContainer.appendChild(slot);
  }

  bankContainer.innerHTML = '';
  AppState.scrambleAvailableLetters.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `scramble-letter-btn ${item.used ? 'used' : ''}`;
    btn.textContent = item.char;
    btn.onclick = () => pickScrambleLetter(item);
    bankContainer.appendChild(btn);
  });
}

function pickScrambleLetter(item) {
  if (item.used) return;
  const targetLen = AppState.scrambleCurrentWord.word.length;
  if (AppState.scrambleSelectedLetters.length >= targetLen) return;

  item.used = true;
  AppState.scrambleSelectedLetters.push(item);
  renderScrambleBoard();
}

function removeScrambleLetter(index) {
  const removed = AppState.scrambleSelectedLetters.splice(index, 1)[0];
  if (removed) {
    removed.used = false;
    renderScrambleBoard();
  }
}

function resetScrambleSlots() {
  AppState.scrambleAvailableLetters.forEach(l => l.used = false);
  AppState.scrambleSelectedLetters = [];
  renderScrambleBoard();
}

function checkScrambleAnswer() {
  const currentWord = AppState.scrambleCurrentWord.word.toUpperCase();
  const formedWord = AppState.scrambleSelectedLetters.map(l => l.char).join('');

  if (formedWord.length < currentWord.length) {
    showToast("Bé hãy điền đủ tất cả các chữ cái nhé!", "info");
    return;
  }

  if (formedWord === currentWord) {
    playSoundSuccess();
    triggerConfetti();
    addXP(25, `Xếp đúng từ "${currentWord}"`);
    showToast(`🎉 Xuất sắc! Bé đã xếp đúng từ "${currentWord}" (+25 XP)!`, "success");
    setTimeout(initScrambleGame, 1600);
  } else {
    playSoundWrong();
    showToast(`Chưa đúng rồi bé ơi! Từ đúng là "${currentWord}". Hãy thử lại nào!`, "warning");
    resetScrambleSlots();
  }
}

function handleKeyboardForScramble(e) {
  const scrambleView = document.getElementById('view-games');
  if (!scrambleView || !scrambleView.classList.contains('active')) return;
  const scrambleBox = document.getElementById('game-scramble-box');
  if (!scrambleBox || !scrambleBox.classList.contains('active')) return;

  const key = e.key.toUpperCase();
  if (key === 'BACKSPACE') {
    if (AppState.scrambleSelectedLetters.length > 0) {
      removeScrambleLetter(AppState.scrambleSelectedLetters.length - 1);
    }
  } else if (/^[A-Z]$/.test(key)) {
    const available = AppState.scrambleAvailableLetters.find(l => !l.used && l.char === key);
    if (available) {
      pickScrambleLetter(available);
    }
  } else if (key === 'ENTER') {
    checkScrambleAnswer();
  }
}

// ==========================================================================
// 8. Daily Check-in (Điểm Danh) Engine
// ==========================================================================
function renderDailyCheckinGrid() {
  const grid = document.getElementById('checkinCalendarGrid');
  if (!grid) return;

  const daysData = [
    { day: "Thứ 2", xp: 15, gift: "🌱" },
    { day: "Thứ 3", xp: 20, gift: "⭐" },
    { day: "Thứ 4", xp: 25, gift: "⚡" },
    { day: "Thứ 5", xp: 30, gift: "💎" },
    { day: "Thứ 6", xp: 35, gift: "🔥" },
    { day: "Thứ 7", xp: 40, gift: "👑" },
    { day: "C.Nhật", xp: 50, gift: "🎁" }
  ];

  grid.innerHTML = '';
  daysData.forEach((d, idx) => {
    const isChecked = idx < AppState.user.checkinCount;
    const isToday = idx === AppState.user.checkinCount;
    const card = document.createElement('div');
    card.className = `checkin-day-card ${isChecked ? 'checked' : ''} ${isToday ? 'today' : ''}`;
    card.innerHTML = `
      <span class="day-label">${d.day}</span>
      <div class="day-gift">${isChecked ? '✅' : d.gift}</div>
      <span class="day-reward-xp">+${d.xp} XP</span>
    `;
    grid.appendChild(card);
  });

  const today = new Date().toISOString().slice(0, 10);
  const claimBtn = document.getElementById('claimCheckinRewardBtn');
  if (claimBtn) {
    if (AppState.user.lastCheckinDate === today) {
      claimBtn.textContent = "Hôm nay bé đã điểm danh rồi! ✓";
      claimBtn.disabled = true;
      claimBtn.style.opacity = '0.6';
    } else {
      claimBtn.textContent = "Điểm Danh Hôm Nay (+30 XP) 🚀";
      claimBtn.disabled = false;
      claimBtn.style.opacity = '1';
    }
  }
}

function claimDailyCheckin() {
  const today = new Date().toISOString().slice(0, 10);
  if (AppState.user.lastCheckinDate === today) {
    showToast("Hôm nay bé đã điểm danh rồi, hãy quay lại vào ngày mai nhé!", "info");
    return;
  }

  AppState.user.lastCheckinDate = today;
  AppState.user.streak++;
  AppState.user.checkinCount = (AppState.user.checkinCount + 1) % 7;
  addXP(30, "Điểm danh chuyên cần");
  playSoundSuccess();
  triggerConfetti();

  renderDailyCheckinGrid();
  renderLeaderboard();
  saveState();
  showToast("🎉 Điểm danh thành công! Chuỗi Streak của bé đã tăng lên!", "success");
}

// ==========================================================================
// 9. Leaderboard Engine
// ==========================================================================
function renderLeaderboard() {
  const tbody = document.getElementById('leaderboardTbody');
  if (!tbody) return;

  const mockStudents = [
    { rank: 1, name: "Bảo Trâm 👧", grade: "Lớp 3", timeMins: 110, days: 5, lessons: 28, xp: 1680 },
    { rank: 2, name: "Minh Khang 👦", grade: "Lớp 2", timeMins: 85, days: 4, lessons: 22, xp: 1240 },
    { rank: 3, name: `${AppState.user.name} (Bạn) ⭐`, grade: `Lớp ${AppState.currentGrade}`, timeMins: Math.round(AppState.user.onlineSeconds / 60), days: AppState.user.streak, lessons: AppState.user.lessonsDone, xp: AppState.user.xp, isUser: true },
    { rank: 4, name: "Khánh An 🧒", grade: "Lớp 1", timeMins: 38, days: 3, lessons: 12, xp: 620 },
    { rank: 5, name: "Tuấn Kiệt 👦", grade: "Lớp 4", timeMins: 30, days: 2, lessons: 9, xp: 450 }
  ];

  mockStudents.sort((a, b) => b.xp - a.xp);

  tbody.innerHTML = '';
  mockStudents.forEach((st, idx) => {
    const tr = document.createElement('tr');
    if (st.isUser) tr.className = 'user-row';

    let rankBadge = `${idx + 1}`;
    if (idx === 0) rankBadge = '🥇 1';
    if (idx === 1) rankBadge = '🥈 2';
    if (idx === 2) rankBadge = '🥉 3';

    tr.innerHTML = `
      <td><strong>${rankBadge}</strong></td>
      <td>${st.name}</td>
      <td><span class="grade-tag">${st.grade}</span></td>
      <td>${st.timeMins} phút</td>
      <td>🔥 ${st.days} ngày</td>
      <td>${st.lessons} bài</td>
      <td><strong>${st.xp.toLocaleString()} XP</strong></td>
    `;
    tbody.appendChild(tr);

    if (st.isUser) {
      const liveRank = document.getElementById('myLiveRank');
      const liveTime = document.getElementById('myTotalOnlineTime');
      const podTitle = document.getElementById('podiumUserTitle');
      const podXp = document.getElementById('podiumUserXp');

      if (liveRank) liveRank.textContent = `#${idx + 1}`;
      if (liveTime) liveTime.textContent = `${st.timeMins} phút`;
      if (podTitle) podTitle.textContent = `${AppState.user.name} (Bạn)`;
      if (podXp) podXp.textContent = `${st.xp} XP`;
    }
  });
}

// ==========================================================================
// 10. Profile Modal & Badges Showcase
// ==========================================================================
const ALL_BADGES = [
  { id: "welcome", name: "Khởi Đầu", emoji: "🌱", desc: "Tham gia ứng dụng học tiếng Anh" },
  { id: "speed", name: "Trùm Quiz", emoji: "⚡", desc: "Hoàn thành bài trắc nghiệm nhanh" },
  { id: "scramble_pro", name: "Vua Xếp Chữ", emoji: "🧩", desc: "Ghép thành công 5 từ tiếng Anh" },
  { id: "picture_master", name: "Bậc Thầy Đoán Hình", emoji: "🖼️", desc: "Nghe và chọn đúng 5 bức hình" },
  { id: "streak_master", name: "Bé Chăm Chỉ", emoji: "🔥", desc: "Giữ chuỗi 3 ngày học liên tục" },
  { id: "champion", name: "Đại Kiện Tướng", emoji: "👑", desc: "Tích lũy trên 1000 điểm XP" }
];

function renderBadges() {
  const container = document.getElementById('badgesContainer');
  if (!container) return;

  container.innerHTML = '';
  ALL_BADGES.forEach(b => {
    const isUnlocked = AppState.user.badges.includes(b.id) || AppState.user.xp >= 300;
    const badgeEl = document.createElement('div');
    badgeEl.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;
    badgeEl.title = b.desc;
    badgeEl.innerHTML = `
      <span class="badge-emoji">${b.emoji}</span>
      <span class="badge-name">${b.name}</span>
    `;
    container.appendChild(badgeEl);
  });
}

function selectAvatar(emoji) {
  AppState.user.avatar = emoji;
  const currentDisplay = document.getElementById('currentAvatarDisplay');
  if (currentDisplay) currentDisplay.textContent = emoji;
  updateNavStats();
  saveState();
  showToast(`Đã đổi Avatar thành ${emoji}!`, "success");
}

function saveLearnerName() {
  const input = document.getElementById('learnerNameInput');
  if (input && input.value.trim()) {
    AppState.user.name = input.value.trim();
    updateNavStats();
    saveState();
    renderLeaderboard();
    showToast(`✨ Chào bé ${AppState.user.name}! Tên đã được lưu thành công.`, "success");
  }
}

// Modal Handlers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    if (modalId === 'profileModal') renderBadges();
    if (modalId === 'checkinModal') renderDailyCheckinGrid();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function startLearningAdventure() {
  closeModal('welcomeModal');
  triggerConfetti();
  playSoundSuccess();
  showToast("Chào mừng bé bắt đầu hành trình chơi trò chơi Tiếng Anh!", "success");
}

// ==========================================================================
// 11. Toast Notification Helper
// ==========================================================================
function showToast(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast glass-panel';

  let icon = '🔔';
  if (type === 'success') icon = '🎉';
  if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 12. Baamboozle Game Engine & AI Lesson Creator
// ==========================================================================

const DEFAULT_BAAMBOOZLE_LESSONS = [
  {
    id: "baam_grade1",
    grade: 1,
    title: "Lớp 1: Giao Tiếp Đầu Đời & Thế Giới Động Vật",
    sentences: [
      { q: "What is your name?", a: "Tên bạn là gì? ➔ My name is...", emoji: "🐣" },
      { q: "How are you today?", a: "Bạn có khỏe không? ➔ I am happy / I am good!", emoji: "😊" },
      { q: "What color is this apple?", a: "Quả táo này màu gì? ➔ It is red (Màu đỏ).", emoji: "🍎" },
      { q: "Is this a cute cat?", a: "Đây có phải con mèo không? ➔ Yes, it is a cat!", emoji: "🐱" },
      { q: "How old are you?", a: "Bạn bao nhiêu tuổi? ➔ I am six / seven years old.", emoji: "🎂" },
      { q: "What animal is barking?", a: "Con vật nào đang sủa gâu gâu? ➔ The dog (Con chó).", emoji: "🐶" },
      { q: "Count from one to three!", a: "Đếm từ 1 đến 3 bằng tiếng Anh! ➔ One, Two, Three!", emoji: "🔢" },
      { q: "What color is the sky?", a: "Bầu trời có màu gì? ➔ It is blue (Màu xanh da trời).", emoji: "☁️" },
      { q: "Can a bird fly high?", a: "Con chim có biết bay lượn không? ➔ Yes, a bird can fly!", emoji: "🐦" },
      { q: "Where does a fish live?", a: "Con cá bơi lội sống ở đâu? ➔ In the water / pond.", emoji: "🐟" },
      { q: "Say 'Hello' and wave your hand!", a: "Nói xin chào và vẫy tay chào bạn! ➔ Hello teacher!", emoji: "👋" },
      { q: "What is 1 plus 1?", a: "Một cộng một bằng mấy? ➔ One plus one is two (2).", emoji: "➕" }
    ]
  },
  {
    id: "baam_grade2",
    grade: 2,
    title: "Lớp 2: Dụng Cụ Học Tập & Gia Đình Yêu Thương",
    sentences: [
      { q: "What is in your school bag?", a: "Trong cặp sách của bạn có gì? ➔ Books, pencils and a ruler.", emoji: "🎒" },
      { q: "Who is the kind woman at home?", a: "Người phụ nữ hiền hậu ở nhà là ai? ➔ My mother (Mẹ yêu).", emoji: "👩" },
      { q: "What do you use to draw a line?", a: "Dùng dụng cụ nào để kẻ đường thẳng? ➔ A ruler (Cây thước kẻ).", emoji: "📏" },
      { q: "Do you like kicking the ball?", a: "Bạn có thích đá bóng không? ➔ Yes, I do! (Quả bóng).", emoji: "⚽" },
      { q: "Touch your nose and blink your eyes!", a: "Chạm tay vào mũi và chớp mắt nào! ➔ (Học sinh thực hiện)", emoji: "👃" },
      { q: "What do you write notes with?", a: "Bạn viết bài bằng cái gì? ➔ A pencil / pen (Bút chì).", emoji: "✏️" },
      { q: "Who plays sports with you?", a: "Ai thường chơi thể thao với bạn? ➔ My father / brother.", emoji: "👨" },
      { q: "What pretty toy do girls love?", a: "Món đồ chơi xinh xắn các bạn nữ thích? ➔ A doll (Búp bê).", emoji: "🪆" },
      { q: "Clap your hands three times!", a: "Vỗ tay 3 nhịp thật vui nào! ➔ Clap, clap, clap!", emoji: "👏" },
      { q: "Open your English book, please!", a: "Xin mời mở sách tiếng Anh ra học! ➔ Yes, teacher!", emoji: "📖" },
      { q: "How many fingers on two hands?", a: "Hai bàn tay của bạn có bao nhiêu ngón? ➔ Ten fingers (10 ngón).", emoji: "🖐️" },
      { q: "Is your pencil long or short?", a: "Bút chì của bạn dài hay ngắn? ➔ It is long / short.", emoji: "✏️" }
    ]
  },
  {
    id: "baam_grade3",
    grade: 3,
    title: "Lớp 3: Bữa Ăn Ngon, Đồ Uống & Thời Tiết",
    sentences: [
      { q: "What would you like to eat?", a: "Bạn muốn ăn món gì ngon? ➔ I would like pizza / bread.", emoji: "🍕" },
      { q: "How is the weather today?", a: "Thời tiết hôm nay như thế nào? ➔ It is sunny and warm.", emoji: "🌞" },
      { q: "What drink gives you strong bones?", a: "Đồ uống nào giúp xương phát triển chắc khỏe? ➔ Fresh milk.", emoji: "🥛" },
      { q: "Do you bring an umbrella when it rains?", a: "Trời mưa bạn có mang theo ô không? ➔ Yes, I do.", emoji: "🌧️" },
      { q: "Can you jump high like a kangaroo?", a: "Bạn nhảy cao được như chuột túi không? ➔ Yes, I can jump high!", emoji: "🦘" },
      { q: "What is your favorite song to sing?", a: "Bài hát tiếng Anh bé yêu thích nhất? ➔ ABC song / Twinkle Star.", emoji: "🎤" },
      { q: "Do you drink 2 liters of water daily?", a: "Bạn có uống đủ nước lọc mỗi ngày không? ➔ Yes, I drink lots of water.", emoji: "💧" },
      { q: "What do you have for breakfast?", a: "Bữa sáng bạn thường ăn món gì? ➔ Bread, eggs and milk.", emoji: "🍞" },
      { q: "Can you run fast in physical education?", a: "Bạn có chạy nhanh trong giờ thể dục không? ➔ Yes, I run very fast!", emoji: "🏃" },
      { q: "Is today cold or hot in your city?", a: "Hôm nay ở thành phố trời nóng hay lạnh? ➔ It is warm / cool.", emoji: "🌡️" },
      { q: "What sweet fruit is yellow and sweet?", a: "Quả gì màu vàng ngọt ngào khỉ rất mê? ➔ A banana (Quả chuối).", emoji: "🍌" },
      { q: "What time do you wake up every morning?", a: "Buổi sáng bạn thức dậy lúc mấy giờ? ➔ At 6:00 or 6:30 AM.", emoji: "⏰" }
    ]
  },
  {
    id: "baam_grade4",
    grade: 4,
    title: "Lớp 4: Ước Mơ Nghề Nghiệp & Thế Giới Quanh Ta",
    sentences: [
      { q: "What does your father or mother do?", a: "Bố hoặc mẹ của bạn làm nghề gì? ➔ He/She is a teacher/doctor.", emoji: "👨‍⚕️" },
      { q: "Where do doctors and nurses work?", a: "Bác sĩ và y tá làm việc ở đâu? ➔ At the city hospital.", emoji: "🏥" },
      { q: "Who flies an airplane across the clouds?", a: "Ai là người điều khiển máy bay trên trời? ➔ A pilot (Phi công).", emoji: "✈️" },
      { q: "What fun activity do you do in the park?", a: "Bạn thích chơi gì ở công viên? ➔ Ride bicycles and roller skate.", emoji: "🏞️" },
      { q: "What clothes are you wearing today?", a: "Hôm nay bạn đang mặc trang phục gì? ➔ A white shirt and blue shorts.", emoji: "👔" },
      { q: "Where do primary students learn English?", a: "Học sinh tiểu học học tập mỗi ngày ở đâu? ➔ At school.", emoji: "🏫" },
      { q: "Who prepares delicious meals in a restaurant?", a: "Ai nấu các món ăn ngon ở nhà hàng? ➔ A chef / cook.", emoji: "🍳" },
      { q: "What time do your morning classes begin?", a: "Tiết học buổi sáng bắt đầu lúc mấy giờ? ➔ At 7:30 in the morning.", emoji: "⏰" },
      { q: "What is your favorite school subject?", a: "Môn học yêu thích nhất của bạn là gì? ➔ English / Math / Science.", emoji: "🎨" },
      { q: "How do you commute to school?", a: "Bạn đi đến trường bằng phương tiện gì? ➔ By bike / on foot / by bus.", emoji: "🚲" },
      { q: "Where can you borrow fascinating books?", a: "Nơi nào bạn có thể mượn sách hay đọc? ➔ The school library.", emoji: "📚" },
      { q: "What do you want to become in the future?", a: "Sau này lớn lên bạn ước mơ làm gì? ➔ I want to be an engineer/pilot.", emoji: "🌟" }
    ]
  },
  {
    id: "baam_grade5",
    grade: 5,
    title: "Lớp 5: Giao Tiếp Hội Nhập, Du Lịch & Môi Trường",
    sentences: [
      { q: "Where are you from?", a: "Bạn đến từ đất nước nào? ➔ I am from Vietnam (Tôi đến từ VN).", emoji: "🇻🇳" },
      { q: "What did you do during your summer vacation?", a: "Kỳ nghỉ hè bạn đã tham gia hoạt động gì? ➔ I visited the beach.", emoji: "🏖️" },
      { q: "Why should we protect planet Earth?", a: "Vì sao chúng ta phải bảo vệ Trái Đất? ➔ To keep our nature clean and green.", emoji: "🌍" },
      { q: "What is the capital city of England?", a: "Thủ đô của nước Anh là thành phố nào? ➔ London.", emoji: "🇬🇧" },
      { q: "How can smart robots help people?", a: "Người máy thông minh hỗ trợ con người ra sao? ➔ Helping with work and chores.", emoji: "🤖" },
      { q: "What should you do to save clean water?", a: "Làm gì để tiết kiệm nguồn nước ngọt? ➔ Turn off taps after using.", emoji: "💧" },
      { q: "Which famous place in Vietnam would you like to visit?", a: "Danh lam thắng cảnh nào ở VN bạn muốn đến? ➔ Ha Long Bay / Da Nang.", emoji: "🏞️" },
      { q: "What is your dream job when you grow up?", a: "Nghề nghiệp mơ ước của bạn trong tương lai? ➔ A software engineer.", emoji: "💻" },
      { q: "How often do you practice speaking English?", a: "Bạn có thường xuyên luyện nói tiếng Anh không? ➔ Every single day!", emoji: "🗣️" },
      { q: "Which season do you like most and why?", a: "Bạn thích mùa nào nhất trong năm và vì sao? ➔ Summer, for outdoor fun.", emoji: "☀️" },
      { q: "What can we do to reduce plastic waste?", a: "Chúng ta làm gì để giảm bớt rác thải nhựa? ➔ Reuse bags and recycle.", emoji: "♻️" },
      { q: "If you had a superpower, what would it be?", a: "Nếu có siêu năng lực, bạn muốn có phép màu gì? ➔ Flying in the sky / Teleport.", emoji: "🚀" }
    ]
  }
];

const DEFAULT_TEAM_NAMES = {
  1: "🦊 Đội Cáo Đỏ",
  2: "🦁 Đội Sư Tử Xanh"
};

// Active Baamboozle State
const BaamState = {
  currentTeam: 1, // 1 or 2
  scores: { 1: 0, 2: 0 },
  tiles: [], // 16 tiles
  openedCount: 0,
  activeTile: null,
  activeTileIndex: -1,
  selectedLessonId: "baam_grade1",
  isGameActive: false,
  editingQuestionIndex: -1,
  teamNames: {
    1: localStorage.getItem('ekm_baam_team1_name') || DEFAULT_TEAM_NAMES[1],
    2: localStorage.getItem('ekm_baam_team2_name') || DEFAULT_TEAM_NAMES[2]
  }
};

// Helper: Get formatted team name
function getTeamName(team) {
  if (BaamState && BaamState.teamNames && BaamState.teamNames[team]) {
    return BaamState.teamNames[team];
  }
  return team === 1 ? DEFAULT_TEAM_NAMES[1] : DEFAULT_TEAM_NAMES[2];
}

// Helper: Extract leading emoji or mascot for the wheel center
function getTeamEmoji(team) {
  const name = getTeamName(team);
  const match = name.match(/(\p{Extended_Pictographic}|\p{Emoji_Presentation})/u);
  if (match) return match[0];
  return team === 1 ? "🦊" : "🦁";
}

// Sync team names across scoreboard, wheels, buttons, and modals
function updateTeamNamesUI() {
  const name1 = getTeamName(1);
  const name2 = getTeamName(2);

  const tText1 = document.getElementById('teamNameText1');
  const tText2 = document.getElementById('teamNameText2');
  if (tText1) tText1.textContent = name1;
  if (tText2) tText2.textContent = name2;

  const wTitle1 = document.getElementById('wheelTeamTitle1');
  const wTitle2 = document.getElementById('wheelTeamTitle2');
  if (wTitle1) wTitle1.textContent = name1;
  if (wTitle2) wTitle2.textContent = name2;

  const sBtn1 = document.getElementById('spinWheelBtn1');
  const sBtn2 = document.getElementById('spinWheelBtn2');
  if (sBtn1) sBtn1.textContent = `🎯 Quay gọi ${name1}`;
  if (sBtn2) sBtn2.textContent = `🎯 Quay gọi ${name2}`;

  const rLabel1 = document.getElementById('rosterTeamLabel1');
  const rLabel2 = document.getElementById('rosterTeamLabel2');
  if (rLabel1) rLabel1.textContent = name1;
  if (rLabel2) rLabel2.textContent = name2;

  const inp1 = document.getElementById('editTeamNameInput1');
  const inp2 = document.getElementById('editTeamNameInput2');
  if (inp1 && !inp1.matches(':focus')) inp1.value = name1;
  if (inp2 && !inp2.matches(':focus')) inp2.value = name2;

  const dualTitle1 = document.getElementById('baamDualTeam1Title');
  const dualTitle2 = document.getElementById('baamDualTeam2Title');
  if (dualTitle1) dualTitle1.textContent = name1.toUpperCase();
  if (dualTitle2) dualTitle2.textContent = name2.toUpperCase();

  ['baam', 'ai'].forEach(prefix => {
    const tzInp1 = document.getElementById(`${prefix}TzTeamNameInput1`);
    const tzInp2 = document.getElementById(`${prefix}TzTeamNameInput2`);
    if (tzInp1 && !tzInp1.matches(':focus')) tzInp1.value = name1;
    if (tzInp2 && !tzInp2.matches(':focus')) tzInp2.value = name2;
  });

  updateBaamScoreboard();
}

// Save custom team names from modal
function saveTeamNamesFromModal() {
  const inp1 = document.getElementById('editTeamNameInput1');
  const inp2 = document.getElementById('editTeamNameInput2');

  const n1 = (inp1 && inp1.value.trim()) ? inp1.value.trim() : DEFAULT_TEAM_NAMES[1];
  const n2 = (inp2 && inp2.value.trim()) ? inp2.value.trim() : DEFAULT_TEAM_NAMES[2];

  BaamState.teamNames[1] = n1;
  BaamState.teamNames[2] = n2;

  try {
    localStorage.setItem('ekm_baam_team1_name', n1);
    localStorage.setItem('ekm_baam_team2_name', n2);
  } catch (e) {}

  updateTeamNamesUI();
  drawBaamWheel(1);
  drawBaamWheel(2);
  closeModal('baamTeamNamesModal');
  playKahootCorrectSound();
  showToast(`🎉 Đã đổi tên 2 đội thành: "${n1}" & "${n2}"!`, "success");
}

// Reset team names to default
function resetDefaultTeamNames() {
  BaamState.teamNames[1] = DEFAULT_TEAM_NAMES[1];
  BaamState.teamNames[2] = DEFAULT_TEAM_NAMES[2];
  try {
    localStorage.removeItem('ekm_baam_team1_name');
    localStorage.removeItem('ekm_baam_team2_name');
  } catch (e) {}

  const inp1 = document.getElementById('editTeamNameInput1');
  const inp2 = document.getElementById('editTeamNameInput2');
  if (inp1) inp1.value = DEFAULT_TEAM_NAMES[1];
  if (inp2) inp2.value = DEFAULT_TEAM_NAMES[2];

  updateTeamNamesUI();
  drawBaamWheel(1);
  drawBaamWheel(2);
  playKahootCorrectSound();
  showToast("🔄 Đã khôi phục tên đội mặc định!", "info");
}

// Quick apply team preset name
function applyTeamPreset(team, name) {
  const inp = document.getElementById(`editTeamNameInput${team}`);
  if (inp) {
    inp.value = name;
    playKahootTickSound();
  }
}

// Window bindings
window.saveTeamNamesFromModal = saveTeamNamesFromModal;
window.resetDefaultTeamNames = resetDefaultTeamNames;
window.applyTeamPreset = applyTeamPreset;
window.getTeamName = getTeamName;
window.getTeamEmoji = getTeamEmoji;
window.updateTeamNamesUI = updateTeamNamesUI;

// Power-Up Sound Effects
function playSoundPowerup() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.2, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  } catch (e) {}
}

function playSoundMystery() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.35);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.45);
  } catch (e) {}
}

// Get all lessons (default + custom)
function getAllBaamboozleLessons() {
  let customLessons = [];
  try {
    const saved = localStorage.getItem('ekm_custom_lessons');
    if (saved) customLessons = JSON.parse(saved);
  } catch (e) {
    console.warn("Error reading custom lessons:", e);
  }
  return [...DEFAULT_BAAMBOOZLE_LESSONS, ...customLessons];
}

// Populate Lesson Select Dropdown
function renderBaamLessonSelect() {
  const select = document.getElementById('baamLessonSelect');
  if (!select) return;

  const lessons = getAllBaamboozleLessons();
  select.innerHTML = '';

  lessons.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l.id;
    opt.textContent = `${l.isCustom ? '⭐ [Tự Tạo] ' : ''}${l.title}`;
    if (l.id === BaamState.selectedLessonId) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });

  select.onchange = () => {
    BaamState.selectedLessonId = select.value;
    initBaamboozleGame();
    showToast(`Đã tải bộ câu hỏi: ${select.options[select.selectedIndex].text}`, "info");
  };
}

// ==========================================================================
// Baamboozle Custom Questions & Presets Database (Giáo viên tự tạo bài)
// ==========================================================================
const BAAM_QUESTIONS_STORAGE_KEY = 'ekm_baam_custom_questions';

const DEFAULT_BAAM_CUSTOM_QUESTIONS = [
  {
    id: "baam_cq_1",
    vocab: "Elephant",
    meaning: "Con voi to lớn",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_2",
    vocab: "Apple",
    meaning: "Quả táo đỏ ngọt ngào",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_3",
    vocab: "Doctor",
    meaning: "Bác sĩ khám chữa bệnh",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_4",
    vocab: "Cat",
    meaning: "Chú mèo con dễ thương",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_5",
    vocab: "School",
    meaning: "Trường tiểu học thân yêu",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_6",
    vocab: "Dog",
    meaning: "Chú cún con vẫy đuôi",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_7",
    vocab: "Pizza",
    meaning: "Bánh pizza phô mai",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_8",
    vocab: "Bird",
    meaning: "Chú chim hót líu lo",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_9",
    vocab: "Bicycle",
    meaning: "Chiếc xe đạp nhỏ",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80",
    points: 20
  },
  {
    id: "baam_cq_10",
    vocab: "Beach",
    meaning: "Bãi biển đầy cát vàng",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    points: 25
  },
  {
    id: "baam_cq_11",
    vocab: "Book",
    meaning: "Quyển sách tiếng Anh",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
    points: 15
  },
  {
    id: "baam_cq_12",
    vocab: "Sun",
    meaning: "Mặt trời rực rỡ buổi sớm",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=600&auto=format&fit=crop&q=80",
    points: 50
  }
];

const BAAM_IMAGE_PRESETS = [
  { name: "Elephant", vocab: "Elephant", meaning: "Con voi", url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&auto=format&fit=crop&q=80" },
  { name: "Apple", vocab: "Apple", meaning: "Quả táo", url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80" },
  { name: "Doctor", vocab: "Doctor", meaning: "Bác sĩ", url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80" },
  { name: "Cat", vocab: "Cat", meaning: "Con mèo", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80" },
  { name: "School", vocab: "School", meaning: "Trường học", url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80" },
  { name: "Dog", vocab: "Dog", meaning: "Con chó", url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80" },
  { name: "Pizza", vocab: "Pizza", meaning: "Bánh pizza", url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { name: "Bird", vocab: "Bird", meaning: "Con chim", url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=80" }
];

// Helper: Get custom questions from localStorage
function getBaamCustomQuestions() {
  try {
    const raw = localStorage.getItem(BAAM_QUESTIONS_STORAGE_KEY);
    if (raw !== null) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.warn("Error reading custom questions from storage:", e);
  }
  // Default to 12 illustrated sample questions
  const def = JSON.parse(JSON.stringify(DEFAULT_BAAM_CUSTOM_QUESTIONS));
  try {
    localStorage.setItem(BAAM_QUESTIONS_STORAGE_KEY, JSON.stringify(def));
  } catch (e) {}
  return def;
}

// Helper: Save custom questions to localStorage
function saveBaamCustomQuestions(questions) {
  try {
    localStorage.setItem(BAAM_QUESTIONS_STORAGE_KEY, JSON.stringify(questions));
  } catch (e) {
    console.warn("Storage error:", e);
  }
}

// Switch Teacher Zone Sub-Mode (Tích hợp 2 Đội & Vòng Quay trực tiếp trong từng trò chơi)
function switchTeacherMode(mode) {
  const baamView = document.getElementById('teacherModeBaam');
  const aiView = document.getElementById('teacherModeAi');
  const btnBaam = document.getElementById('teacherTabBtnBaam');
  const btnAi = document.getElementById('teacherTabBtnAi');

  if (mode === 'baam') {
    if (baamView) baamView.style.display = 'block';
    if (aiView) aiView.style.display = 'none';
    if (btnBaam) btnBaam.classList.add('active');
    if (btnAi) btnAi.classList.remove('active');
    renderBaamCustomQuestionsList();
    renderBaamCreatorPresets();
    syncTeacherZoneTeamsUI();
  } else {
    if (baamView) baamView.style.display = 'none';
    if (aiView) aiView.style.display = 'block';
    if (btnAi) btnAi.classList.add('active');
    if (btnBaam) btnBaam.classList.remove('active');
    renderCreatorPresets();
    renderCreatorQuestionsList();
    syncTeacherZoneTeamsUI();
  }
}
window.switchTeacherMode = switchTeacherMode;

// Render preset thumbnails in Baamboozle Creator
function renderBaamCreatorPresets() {
  const container = document.getElementById('baamCreatorPresetThumbs');
  if (!container) return;
  container.innerHTML = '';

  BAAM_IMAGE_PRESETS.forEach(p => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset-thumb-btn';
    btn.title = `Chọn ảnh: ${p.name}`;
    btn.innerHTML = `<img src="${p.url}" alt="${p.name}" loading="lazy">`;
    btn.onclick = () => {
      BaamState.selectedCreatorImage = p.url;
      const urlInput = document.getElementById('baamCreatorImageUrl');
      const vocabInput = document.getElementById('baamCreatorVocabInput');
      const meaningInput = document.getElementById('baamCreatorMeaningInput');
      const previewWrap = document.getElementById('baamCreatorImagePreviewWrap');
      const previewImg = document.getElementById('baamCreatorImagePreview');

      if (urlInput) urlInput.value = p.url;
      if (vocabInput) vocabInput.value = p.vocab;
      if (meaningInput) meaningInput.value = p.meaning;
      if (previewWrap) previewWrap.style.display = 'block';
      if (previewImg) previewImg.src = p.url;

      speakWord(p.vocab);
      playKahootTickSound();
    };
    container.appendChild(btn);
  });
}

// Test Pronunciation for the word in the creator input
function testSpeakBaamVocab() {
  const vocabInput = document.getElementById('baamCreatorVocabInput');
  const text = vocabInput ? vocabInput.value.trim() : "";
  if (!text) {
    showToast("⚠️ Vui lòng nhập từ vựng tiếng Anh trước khi bấm nghe!", "warning");
    if (vocabInput) vocabInput.focus();
    return;
  }
  speakWord(text);
  showToast(`🔊 Đang phát âm từ vựng: "${text}"`, "info");
}
window.testSpeakBaamVocab = testSpeakBaamVocab;

// Load a question into the creator form for viewing or editing
function loadBaamQuestionForEdit(idx, silent = false) {
  const list = getBaamCustomQuestions();
  if (idx < 0 || idx >= list.length) return;
  const q = list[idx];
  BaamState.editingQuestionIndex = idx;

  const vocabInput = document.getElementById('baamCreatorVocabInput');
  const meaningInput = document.getElementById('baamCreatorMeaningInput');
  const pointsSelect = document.getElementById('baamCreatorPoints');
  const urlInput = document.getElementById('baamCreatorImageUrl');
  const previewWrap = document.getElementById('baamCreatorImagePreviewWrap');
  const previewImg = document.getElementById('baamCreatorImagePreview');
  const formTitle = document.getElementById('baamCreatorFormTitle');
  const saveBtn = document.getElementById('baamSaveCreatorBtn');
  const cancelBtn = document.getElementById('baamCancelEditBtn');

  if (vocabInput) vocabInput.value = q.vocab || '';
  if (meaningInput) meaningInput.value = q.meaning || '';
  if (pointsSelect) pointsSelect.value = q.points || 20;
  if (urlInput) urlInput.value = (q.image && !q.image.startsWith('data:')) ? q.image : '';

  BaamState.selectedCreatorImage = q.image || '';
  if (q.image && previewWrap && previewImg) {
    previewWrap.style.display = 'block';
    previewImg.src = q.image;
  }

  if (formTitle) {
    formTitle.innerHTML = `✏️ Đang sửa câu #${idx + 1}: <span style="color:var(--blue);">${q.vocab}</span>`;
  }
  if (saveBtn) {
    saveBtn.innerHTML = `💾 Cập nhật câu hỏi #${idx + 1}`;
  }
  if (cancelBtn) {
    cancelBtn.style.display = 'inline-flex';
  }

  // Highlight active editing card in list
  document.querySelectorAll('.baam-q-card').forEach((c, i) => {
    if (i === idx) c.classList.add('active-editing');
    else c.classList.remove('active-editing');
  });

  if (!silent) {
    if (vocabInput) vocabInput.focus();
    playKahootTickSound();
    showToast(`✏️ Đã nạp câu #${idx + 1} ("${q.vocab}") vào bảng soạn để xem và chỉnh sửa!`, "info");
  }
}
window.loadBaamQuestionForEdit = loadBaamQuestionForEdit;

// Cancel editing and revert to new question form
function cancelBaamEdit() {
  BaamState.editingQuestionIndex = -1;
  const vocabInput = document.getElementById('baamCreatorVocabInput');
  const meaningInput = document.getElementById('baamCreatorMeaningInput');
  const urlInput = document.getElementById('baamCreatorImageUrl');
  const fileInput = document.getElementById('baamCreatorImageFile');
  const previewWrap = document.getElementById('baamCreatorImagePreviewWrap');
  const previewImg = document.getElementById('baamCreatorImagePreview');
  const formTitle = document.getElementById('baamCreatorFormTitle');
  const saveBtn = document.getElementById('baamSaveCreatorBtn');
  const cancelBtn = document.getElementById('baamCancelEditBtn');

  if (vocabInput) vocabInput.value = '';
  if (meaningInput) meaningInput.value = '';
  if (urlInput) urlInput.value = '';
  if (fileInput) fileInput.value = '';
  if (previewWrap) previewWrap.style.display = 'none';
  if (previewImg) previewImg.src = '';
  BaamState.selectedCreatorImage = '';

  if (formTitle) formTitle.textContent = 'Tạo câu hỏi / Từ vựng có hình ảnh & phát âm';
  if (saveBtn) saveBtn.innerHTML = '💾 Lưu câu hỏi Baamboozle';
  if (cancelBtn) cancelBtn.style.display = 'none';

  document.querySelectorAll('.baam-q-card').forEach(c => c.classList.remove('active-editing'));
}
window.cancelBaamEdit = cancelBaamEdit;

// Auto fill first saved question if form is empty on load
function autoFillFirstSavedQuestionIfEmpty() {
  const vocabInput = document.getElementById('baamCreatorVocabInput');
  if (vocabInput && !vocabInput.value.trim() && BaamState.editingQuestionIndex === -1) {
    const list = getBaamCustomQuestions();
    if (list && list.length > 0) {
      loadBaamQuestionForEdit(0, true);
    }
  }
}
window.autoFillFirstSavedQuestionIfEmpty = autoFillFirstSavedQuestionIfEmpty;

// Save or Update a Baamboozle Question
function saveBaamCreatorQuestion() {
  const vocabInput = document.getElementById('baamCreatorVocabInput');
  const meaningInput = document.getElementById('baamCreatorMeaningInput');
  const pointsSelect = document.getElementById('baamCreatorPoints');
  const urlInput = document.getElementById('baamCreatorImageUrl');

  const vocab = vocabInput ? vocabInput.value.trim() : "";
  const meaning = meaningInput ? meaningInput.value.trim() : "";
  const points = pointsSelect ? parseInt(pointsSelect.value) || 20 : 20;
  const image = BaamState.selectedCreatorImage || (urlInput ? urlInput.value.trim() : "");

  if (!vocab) {
    showToast("⚠️ Vui lòng nhập từ vựng hoặc câu hỏi tiếng Anh!", "warning");
    if (vocabInput) vocabInput.focus();
    return;
  }

  const list = getBaamCustomQuestions();
  const isEditing = BaamState.editingQuestionIndex >= 0 && BaamState.editingQuestionIndex < list.length;

  if (isEditing) {
    const existing = list[BaamState.editingQuestionIndex];
    list[BaamState.editingQuestionIndex] = {
      ...existing,
      vocab: vocab,
      meaning: meaning || "Trả lời tự nhiên bằng tiếng Anh",
      image: image || existing.image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
      points: points
    };
    saveBaamCustomQuestions(list);
    showToast(`💾 Đã cập nhật thành công câu hỏi #${BaamState.editingQuestionIndex + 1} ("${vocab}")!`, "success");
    cancelBaamEdit();
  } else {
    const newQuestion = {
      id: `baam_cq_${Date.now()}`,
      vocab: vocab,
      meaning: meaning || "Trả lời tự nhiên bằng tiếng Anh",
      image: image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
      points: points
    };
    list.push(newQuestion);
    saveBaamCustomQuestions(list);
    showToast(`💾 Đã lưu câu hỏi "${vocab}" (+${points}đ) vào kho Baamboozle vĩnh viễn!`, "success");

    // Reset form inputs for next question
    if (vocabInput) vocabInput.value = '';
    if (meaningInput) meaningInput.value = '';
    if (urlInput) urlInput.value = '';
    const fileInput = document.getElementById('baamCreatorImageFile');
    if (fileInput) fileInput.value = '';
    const previewWrap = document.getElementById('baamCreatorImagePreviewWrap');
    const previewImg = document.getElementById('baamCreatorImagePreview');
    if (previewWrap) previewWrap.style.display = 'none';
    if (previewImg) previewImg.src = '';
    BaamState.selectedCreatorImage = '';
    if (vocabInput) vocabInput.focus();
  }

  renderBaamCustomQuestionsList();
  initBaamboozleGame(); // Tự động đồng bộ ngay vào bàn đấu 16 ô Baamboozle
  playKahootCorrectSound();
  addXP(20, `Soạn câu Baamboozle: ${vocab}`);
}
window.saveBaamCreatorQuestion = saveBaamCreatorQuestion;

// Render Baamboozle Question List
function renderBaamCustomQuestionsList() {
  const container = document.getElementById('baamCustomQuestionsList');
  const countEl = document.getElementById('baamCustomQuestionsCount');
  if (!container) return;

  const list = getBaamCustomQuestions();
  if (countEl) countEl.textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:32px 14px; color:#64748B;">
        <div style="font-size:42px; margin-bottom:8px;">📭</div>
        <p style="font-weight:700; margin-bottom:6px;">Chưa có câu hỏi Baamboozle nào!</p>
        <p style="font-size:14px;">Thầy cô hãy soạn câu hỏi bên trái hoặc bấm "Nạp 12 câu mẫu" nhé.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  list.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = `baam-q-card ${BaamState.editingQuestionIndex === idx ? 'active-editing' : ''}`;
    card.innerHTML = `
      <img src="${q.image || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80'}" alt="${q.vocab}" class="baam-q-thumb" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80'">
      <div class="baam-q-info" onclick="loadBaamQuestionForEdit(${idx})" title="Nhấp để xem lại & sửa câu này">
        <div class="baam-q-vocab">
          <span>${idx + 1}. ${q.vocab}</span>
          <button type="button" class="btn btn-secondary small-btn" onclick="event.stopPropagation(); speakWord('${(q.vocab || '').replace(/'/g, "\\'")}')" title="Phát âm từ vựng" style="padding:2px 8px; font-size:13px; border-width:2px;">
            🔊
          </button>
        </div>
        <div class="baam-q-meaning">${q.meaning || 'Chưa có nghĩa tiếng Việt'}</div>
        <span class="baam-q-points">⭐ +${q.points || 20} điểm</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:6px;">
        <button type="button" class="btn btn-secondary small-btn" onclick="event.stopPropagation(); loadBaamQuestionForEdit(${idx})" title="Xem lại & sửa câu hỏi này" style="padding:6px 10px; font-size:13px; font-weight:700;">
          ✏️ Sửa
        </button>
        <button type="button" class="btn btn-danger small-btn" onclick="event.stopPropagation(); deleteBaamCustomQuestion(${idx})" title="Xóa câu hỏi này" style="padding:6px 10px; font-size:13px;">
          🗑️
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}
window.renderBaamCustomQuestionsList = renderBaamCustomQuestionsList;

// Delete single question
function deleteBaamCustomQuestion(idx) {
  const list = getBaamCustomQuestions();
  const deleted = list.splice(idx, 1);
  saveBaamCustomQuestions(list);
  if (BaamState.editingQuestionIndex === idx) {
    cancelBaamEdit();
  } else if (BaamState.editingQuestionIndex > idx) {
    BaamState.editingQuestionIndex--;
  }
  renderBaamCustomQuestionsList();
  initBaamboozleGame();
  showToast(`Đã xóa câu "${deleted[0] ? deleted[0].vocab : 'hỏi'}"! Bàn đấu Baamboozle đã được cập nhật.`, "info");
}
window.deleteBaamCustomQuestion = deleteBaamCustomQuestion;

// Clear all questions
function clearAllBaamCustomQuestions() {
  saveBaamCustomQuestions([]);
  cancelBaamEdit();
  renderBaamCustomQuestionsList();
  initBaamboozleGame();
  showToast("Đã xóa sạch tất cả câu hỏi Baamboozle! Bàn đấu Baamboozle đã được làm mới.", "success");
}
window.clearAllBaamCustomQuestions = clearAllBaamCustomQuestions;

// Reset to default 12 questions
function resetToDefaultBaamQuestions() {
  const def = JSON.parse(JSON.stringify(DEFAULT_BAAM_CUSTOM_QUESTIONS));
  saveBaamCustomQuestions(def);
  cancelBaamEdit();
  renderBaamCustomQuestionsList();
  initBaamboozleGame();
  playKahootCorrectSound();
  showToast("Đã khôi phục 12 câu hỏi Baamboozle mẫu có hình ảnh!", "success");
}
window.resetToDefaultBaamQuestions = resetToDefaultBaamQuestions;

// Export questions, teams, and rosters to a JSON backup file
function exportBaamQuestionsToFile() {
  const list = getBaamCustomQuestions();
  const data = {
    appName: "English Kha Master",
    version: "2.0",
    exportDate: new Date().toISOString(),
    customQuestions: list,
    teamNames: BaamState.teamNames,
    rosters: {
      1: (BaamWheelState && BaamWheelState[1]) ? BaamWheelState[1].students : [],
      2: (BaamWheelState && BaamWheelState[2]) ? BaamWheelState[2].students : []
    }
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `EnglishKhaMaster_Questions_Backup_${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("💾 Đã tải file dự phòng câu hỏi và cấu hình về máy thành công!", "success");
}
window.exportBaamQuestionsToFile = exportBaamQuestionsToFile;

// Import questions from a JSON file
function importBaamQuestionsFromFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data)) {
        saveBaamCustomQuestions(data);
      } else if (data.customQuestions && Array.isArray(data.customQuestions)) {
        saveBaamCustomQuestions(data.customQuestions);
        if (data.teamNames) {
          if (data.teamNames[1]) {
            BaamState.teamNames[1] = data.teamNames[1];
            try { localStorage.setItem('ekm_baam_team1_name', data.teamNames[1]); } catch(err){}
          }
          if (data.teamNames[2]) {
            BaamState.teamNames[2] = data.teamNames[2];
            try { localStorage.setItem('ekm_baam_team2_name', data.teamNames[2]); } catch(err){}
          }
          updateTeamNamesUI();
        }
        if (data.rosters && typeof BaamWheelState !== 'undefined') {
          if (Array.isArray(data.rosters[1])) {
            BaamWheelState[1].students = data.rosters[1];
            try { localStorage.setItem('ekm_baam_roster_1', JSON.stringify(data.rosters[1])); } catch(err){}
          }
          if (Array.isArray(data.rosters[2])) {
            BaamWheelState[2].students = data.rosters[2];
            try { localStorage.setItem('ekm_baam_roster_2', JSON.stringify(data.rosters[2])); } catch(err){}
          }
          if (typeof syncRosterUI === 'function') syncRosterUI();
          if (typeof drawBaamWheel === 'function') {
            drawBaamWheel(1);
            drawBaamWheel(2);
          }
        }
      } else {
        showToast("⚠️ Định dạng file JSON không hợp lệ!", "warning");
        return;
      }
      renderBaamCustomQuestionsList();
      initBaamboozleGame();
      playKahootCorrectSound();
      showToast("🎉 Nạp file câu hỏi và danh sách đội thành công!", "success");
    } catch (err) {
      showToast("⚠️ Lỗi đọc file JSON: " + err.message, "danger");
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}
window.importBaamQuestionsFromFile = importBaamQuestionsFromFile;

// Start game using the custom questions bank
function startPlayingBaamCustomGame() {
  initBaamboozleGame();
  switchView('view-baamboozle');
  playKahootPowerupSound();
  showToast("🚀 Trận đấu Baamboozle đã sẵn sàng! Mời 2 đội chọn ô số!", "success");
}
window.startPlayingBaamCustomGame = startPlayingBaamCustomGame;

// Hook Baamboozle Creator File & URL Inputs
function initBaamCreatorFileInput() {
  const fileInput = document.getElementById('baamCreatorImageFile');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          BaamState.selectedCreatorImage = evt.target.result;
          const previewWrap = document.getElementById('baamCreatorImagePreviewWrap');
          const previewImg = document.getElementById('baamCreatorImagePreview');
          if (previewWrap) previewWrap.style.display = 'block';
          if (previewImg) previewImg.src = evt.target.result;
          playKahootTickSound();
          showToast("📁 Đã tải ảnh cho câu hỏi Baamboozle!", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const urlInput = document.getElementById('baamCreatorImageUrl');
  if (urlInput) {
    urlInput.addEventListener('input', () => {
      const url = urlInput.value.trim();
      if (url) {
        BaamState.selectedCreatorImage = url;
        const previewWrap = document.getElementById('baamCreatorImagePreviewWrap');
        const previewImg = document.getElementById('baamCreatorImagePreview');
        if (previewWrap) previewWrap.style.display = 'block';
        if (previewImg) previewImg.src = url;
      }
    });
  }
}

// ==========================================================================
// Direct Score Animation with Visual Flair & Kahoot Sounds
// ==========================================================================
function animateDirectScoreChange(team, delta) {
  const oldScore = BaamState.scores[team] !== undefined ? BaamState.scores[team] : 0;
  const newScore = oldScore + delta;
  BaamState.scores[team] = newScore;

  // 1. Play authentic Kahoot sound
  if (delta > 0) {
    playKahootCorrectSound();
  } else if (delta < 0) {
    playKahootWrongSound();
  }

  // 2. Score card visual bounce / shake
  const card = document.getElementById(`teamCard${team}`);
  if (card) {
    card.classList.remove('score-bump-gain', 'score-bump-loss');
    void card.offsetWidth; // force reflow
    card.classList.add(delta >= 0 ? 'score-bump-gain' : 'score-bump-loss');
    setTimeout(() => {
      card.classList.remove('score-bump-gain', 'score-bump-loss');
    }, 600);
  }

  // 3. Floating score pill (+20, -10, etc.)
  const floatContainer = document.getElementById(`teamScoreFloat${team}`);
  if (floatContainer) {
    const pill = document.createElement('div');
    const sign = delta > 0 ? `+${delta}` : `${delta}`;
    pill.className = `floating-score-pill ${delta > 0 ? 'gain' : delta < 0 ? 'loss' : 'neutral'}`;
    pill.textContent = `${sign} đ`;
    floatContainer.appendChild(pill);
    setTimeout(() => {
      pill.remove();
    }, 1250);
  }

  // 4. Smooth ticker animation on score element
  const scoreEl = document.getElementById(`teamScore${team}`) || document.getElementById(`baamTeam${team}Score`);
  if (scoreEl) {
    if (newScore < 0) {
      scoreEl.classList.add('is-negative');
    } else {
      scoreEl.classList.remove('is-negative');
    }

    const steps = Math.min(Math.max(Math.abs(delta), 1), 8);
    const stepDuration = 35;
    let stepCount = 0;
    const startVal = oldScore;

    if (steps > 0 && delta !== 0) {
      const ticker = setInterval(() => {
        stepCount++;
        const currentVal = Math.round(startVal + (delta * (stepCount / steps)));
        scoreEl.textContent = currentVal;
        playKahootTickSound();
        if (stepCount >= steps) {
          clearInterval(ticker);
          scoreEl.textContent = newScore;
        }
      }, stepDuration);
    } else {
      scoreEl.textContent = newScore;
    }
  }

  // Sync secondary score display if exists
  const altScoreEl = document.getElementById(`baamTeam${team}Score`);
  if (altScoreEl && altScoreEl !== scoreEl) {
    altScoreEl.textContent = newScore;
  }
}

// Initialize Baamboozle Game Match
function initBaamboozleGame() {
  const customQuestions = getBaamCustomQuestions();
  let pool = [];

  if (customQuestions && customQuestions.length > 0) {
    pool = customQuestions.map(q => ({
      q: q.vocab || q.q,
      a: q.meaning || q.a,
      image: q.image || "",
      points: q.points || 20,
      emoji: q.emoji || "❓"
    }));
  } else {
    const lessons = getAllBaamboozleLessons();
    let currentLesson = lessons.find(l => l.id === BaamState.selectedLessonId) || DEFAULT_BAAMBOOZLE_LESSONS[0];
    pool = [...currentLesson.sentences];
  }

  // Reset scores and team
  BaamState.currentTeam = 1;
  BaamState.scores = { 1: 0, 2: 0 };
  BaamState.openedCount = 0;
  BaamState.activeTile = null;
  BaamState.activeTileIndex = -1;
  BaamState.isGameActive = true;

  // Shuffle question pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Build 12 Question Tiles
  const questionTiles = [];
  for (let i = 0; i < 12; i++) {
    const s = pool[i % pool.length];
    questionTiles.push({
      type: "question",
      q: s.q,
      a: s.a,
      image: s.image || "",
      points: s.points || 20,
      emoji: s.emoji || "❓",
      opened: false
    });
  }

  // 4 Mystery Power-ups
  const powerupTiles = [
    {
      type: "powerup",
      powerupType: "bonus",
      title: "Rương Kho Báu Vàng! 🎁",
      desc: "Đang mở rương thần kỳ... Nhảy 3 lần trong 2.5 giây rồi nổ thành +40 điểm!",
      icon: "🎁",
      points: 40,
      opened: false
    },
    {
      type: "powerup",
      powerupType: "swap",
      title: "Cơn Lốc Đảo Ngược! ⚡",
      desc: "Bất ngờ chưa! Một cơn lốc ma thuật hoán đổi toàn bộ điểm số của hai đội cho nhau!",
      icon: "⚡",
      points: 0,
      opened: false
    },
    {
      type: "powerup",
      powerupType: "steal",
      title: "Cướp Điểm Siêu Hạng! 🔄",
      desc: "Đội bạn được quyền rút bớt điểm của đối thủ! Chọn 1 trong 3 mức cướp điểm (5đ, 10đ, 20đ):",
      icon: "🔄",
      points: 10,
      opened: false
    },
    {
      type: "powerup",
      powerupType: "bomb",
      title: "Bạn đã đạp trúng mìn! 💣",
      desc: "Ối dồi ôi! Bạn đã đạp trúng mìn trừ 20 điểm!",
      icon: "💣",
      points: -20,
      opened: false
    }
  ];

  // Combine and shuffle the 16 tiles
  const allTiles = [...questionTiles, ...powerupTiles];
  for (let i = allTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allTiles[i], allTiles[j]] = [allTiles[j], allTiles[i]];
  }

  BaamState.tiles = allTiles;
  renderBaamTiles();
  updateBaamScoreboard();

  // Update banner in view-baamboozle
  const bannerTitle = document.getElementById('baamActiveQuestionsTitle');
  const bannerDesc = document.getElementById('baamActiveQuestionsDesc');
  if (bannerTitle) {
    if (customQuestions && customQuestions.length > 0) {
      const sampleWords = pool.slice(0, 4).map(p => p.q).join(', ');
      bannerTitle.innerHTML = `🎯 Đang chơi kho câu hỏi: <strong>${customQuestions.length} câu</strong> đã lưu ("${sampleWords}${pool.length > 4 ? '...' : ''}")`;
      if (bannerDesc) {
        bannerDesc.textContent = "Hệ thống luôn lưu trữ vĩnh viễn các từ vựng này. Khi mở lại website vẫn hiển thị và chơi đúng bộ từ đã setup!";
      }
    } else {
      bannerTitle.textContent = "🎯 Đang chơi với bộ câu hỏi bài học mặc định";
    }
  }
}

// Render the 16 Baamboozle Tiles on the grid
function renderBaamTiles() {
  const grid = document.getElementById('baamTilesGrid');
  if (!grid) return;

  grid.innerHTML = '';
  BaamState.tiles.forEach((tile, idx) => {
    const tileEl = document.createElement('div');
    tileEl.className = `baam-tile ${tile.opened ? 'opened' : ''}`;
    tileEl.id = `baamTile_${idx}`;

    if (tile.opened) {
      if (tile.type === 'powerup') {
        tileEl.innerHTML = `<span class="tile-opened-icon">${tile.icon}</span>`;
      } else {
        tileEl.innerHTML = `<span class="tile-opened-icon">✅</span>`;
      }
    } else {
      tileEl.innerHTML = `
        <div class="tile-inner">
          <span class="tile-number">${idx + 1}</span>
          <span class="tile-sparkle">✨</span>
        </div>
      `;
      tileEl.addEventListener('click', () => openBaamTile(idx));
    }

    grid.appendChild(tileEl);
  });

  const remainingEl = document.getElementById('baamRemainingTilesText');
  if (remainingEl) {
    const remaining = 16 - BaamState.openedCount;
    remainingEl.textContent = `Còn lại: ${remaining} / 16 ô`;
  }
}

// Update Active Scoreboard & Turn Display (Hiện cực kỳ đậm nét đội đang đến lượt)
function updateBaamScoreboard() {
  const card1 = document.getElementById('teamCard1');
  const card2 = document.getElementById('teamCard2');
  const score1 = document.getElementById('teamScore1') || document.getElementById('baamTeam1Score');
  const score2 = document.getElementById('teamScore2') || document.getElementById('baamTeam2Score');
  const badge1 = document.getElementById('teamTurnBadge1');
  const badge2 = document.getElementById('teamTurnBadge2');
  const banner = document.getElementById('baamTurnBanner');
  const turnText = document.getElementById('baamTurnText') || document.getElementById('baamTurnIndicator');

  if (score1) {
    score1.textContent = BaamState.scores[1];
    if (BaamState.scores[1] < 0) {
      score1.classList.add('is-negative');
    } else {
      score1.classList.remove('is-negative');
    }
  }
  if (score2) {
    score2.textContent = BaamState.scores[2];
    if (BaamState.scores[2] < 0) {
      score2.classList.add('is-negative');
    } else {
      score2.classList.remove('is-negative');
    }
  }

  if (BaamState.currentTeam === 1) {
    if (card1) {
      card1.classList.add('active');
    }
    if (card2) {
      card2.classList.remove('active');
    }
    if (badge1) {
      badge1.textContent = "🎯 ĐANG ĐẾN LƯỢT!";
    }
    if (badge2) {
      badge2.textContent = "⏳ Đang chờ lượt...";
    }
    if (banner) {
      banner.className = "turn-highlight-banner team-1-turn";
    }
    if (turnText) {
      turnText.innerHTML = `Lượt của: <strong style="color:#DC2626;">${getTeamName(1)}</strong> — Hãy bấm chọn 1 ô số!`;
    }
  } else {
    if (card2) {
      card2.classList.add('active');
    }
    if (card1) {
      card1.classList.remove('active');
    }
    if (badge2) {
      badge2.textContent = "🎯 ĐANG ĐẾN LƯỢT!";
    }
    if (badge1) {
      badge1.textContent = "⏳ Đang chờ lượt...";
    }
    if (banner) {
      banner.className = "turn-highlight-banner team-2-turn";
    }
    if (turnText) {
      turnText.innerHTML = `Lượt của: <strong style="color:#2563EB;">${getTeamName(2)}</strong> — Hãy bấm chọn 1 ô số!`;
    }
  }
}

let baamAutoTurnTimer = null;

function clearBaamAutoTimer() {
  if (baamAutoTurnTimer) {
    clearTimeout(baamAutoTurnTimer);
    baamAutoTurnTimer = null;
  }
}

// Handle tile click
function openBaamTile(idx) {
  clearBaamAutoTimer();
  const tile = BaamState.tiles[idx];
  if (!tile || tile.opened) return;

  BaamState.activeTile = tile;
  BaamState.activeTileIndex = idx;

  const modalTileNum = document.getElementById('baamModalTileNum');
  const modalTeamTurn = document.getElementById('baamModalTeamTurn') || document.getElementById('baamModalCurrentTeam');
  const teamName = getTeamName(BaamState.currentTeam);

  if (modalTileNum) modalTileNum.textContent = `Ô Số #${idx + 1}`;
  if (modalTeamTurn) modalTeamTurn.textContent = `Lượt của: ${teamName}`;

  const powerupBox = document.getElementById('baamPowerupBox');
  const questionContent = document.getElementById('baamQuestionContent');

  if (tile.type === 'powerup') {
    if (questionContent) questionContent.style.display = 'none';
    if (powerupBox) powerupBox.style.display = 'block';

    const chestWrap = document.getElementById('baamChestEventWrap');
    const stealWrap = document.getElementById('baamStealEventWrap');
    const standardWrap = document.getElementById('baamStandardEventWrap');

    if (tile.powerupType === 'bonus') {
      // 1. Rương kho báu vàng: Nhảy 3 lần trong 2.5s rồi nổ thành +40 điểm
      if (chestWrap) chestWrap.style.display = 'block';
      if (stealWrap) stealWrap.style.display = 'none';
      if (standardWrap) standardWrap.style.display = 'none';

      const chestAnimBox = document.getElementById('chestAnimBox');
      const chestTitle = document.getElementById('chestEventTitle');
      const chestDesc = document.getElementById('chestEventDesc');
      const rewardBanner = document.getElementById('chestRewardBanner');
      const rewardConfirmBtn = document.getElementById('chestRewardConfirmBtn');

      if (chestAnimBox) {
        chestAnimBox.textContent = '🎁';
        chestAnimBox.className = 'chest-box-anim';
        void chestAnimBox.offsetWidth; // trigger reflow
        chestAnimBox.classList.add('chest-bouncing');
      }

      if (chestTitle) chestTitle.textContent = "Đang mở rương kho báu vàng...";
      if (chestDesc) chestDesc.textContent = "Hồi hộp chờ đợi xem điều bất ngờ gì bên trong!";
      if (rewardBanner) rewardBanner.style.display = 'none';
      if (rewardConfirmBtn) rewardConfirmBtn.style.display = 'none';

      // Phát âm thanh nhịp nhảy 3 lần (0s, 0.8s, 1.6s)
      playChestJumpSound(1);
      setTimeout(() => playChestJumpSound(2), 800);
      setTimeout(() => playChestJumpSound(3), 1600);

      // Đúng 2.5 giây (2500ms): Rương nổ tung thành +40 điểm!
      setTimeout(() => {
        if (chestAnimBox) {
          chestAnimBox.classList.remove('chest-bouncing');
          chestAnimBox.classList.add('chest-exploded');
          chestAnimBox.textContent = '🌟';
        }
        if (chestTitle) chestTitle.textContent = "🎉 RƯƠNG VÀNG NỔ TUNG!";
        if (chestDesc) chestDesc.textContent = `Tuyệt vời! ${teamName} nhận ngay +40 Điểm thưởng!`;
        if (rewardBanner) rewardBanner.style.display = 'block';
        if (rewardConfirmBtn) rewardConfirmBtn.style.display = 'block';

        playKahootPowerupSound();
        playSoundCheerAndApplause();
      }, 2500);

    } else if (tile.powerupType === 'steal') {
      // 2. Cướp điểm siêu hạng: 3 Lựa chọn (5đ, 10đ, 20đ)
      if (chestWrap) chestWrap.style.display = 'none';
      if (stealWrap) stealWrap.style.display = 'block';
      if (standardWrap) standardWrap.style.display = 'none';
      playSoundMystery();

    } else {
      // 3. Đạp trúng mìn (-20đ) hoặc Đảo ngược điểm (swap)
      if (chestWrap) chestWrap.style.display = 'none';
      if (stealWrap) stealWrap.style.display = 'none';
      if (standardWrap) standardWrap.style.display = 'block';

      const icon = document.getElementById('baamPowerupIcon');
      const title = document.getElementById('baamPowerupTitle');
      const desc = document.getElementById('baamPowerupDesc');
      const okBtn = document.getElementById('baamPowerupOkBtn');

      if (tile.powerupType === 'bomb') {
        if (icon) icon.textContent = '💣';
        if (title) title.textContent = "Bạn đã đạp trúng mìn! 💣";
        if (desc) desc.textContent = "Ối dồi ôi! Bạn đã đạp trúng mìn trừ 20 điểm!";
        if (okBtn) okBtn.textContent = "Chấp nhận trừ 20 điểm & đổi lượt";

        // Rung giật mìn nổ
        const modalCard = document.querySelector('#baamTileModal .modal-card');
        if (modalCard) {
          modalCard.classList.remove('mine-shaking');
          void modalCard.offsetWidth;
          modalCard.classList.add('mine-shaking');
        }
        playBombExplosionSound();
      } else {
        // Swap
        if (icon) icon.textContent = '⚡';
        if (title) title.textContent = tile.title;
        if (desc) desc.textContent = tile.desc;
        if (okBtn) okBtn.textContent = "Đổi điểm 2 đội & tiếp tục";
        playSoundMystery();
      }
    }
  } else {
    // Show standard question with image & English prompt
    playKahootPowerupSound();
    if (powerupBox) powerupBox.style.display = 'none';
    if (questionContent) questionContent.style.display = 'block';

    const emojiEl = document.getElementById('baamQuestionEmoji');
    const promptEl = document.getElementById('baamPromptText');
    const listenPromptBtn = document.getElementById('baamListenPromptBtn');
    const inputEl = document.getElementById('baamStudentAnswerInput');
    const inputRow = document.getElementById('baamInteractiveInputRow');
    const quickScoreRow = document.getElementById('baamQuickScoreRow');
    const resultSuccess = document.getElementById('baamResultSuccess');
    const resultWrong = document.getElementById('baamResultWrong');
    const imageWrap = document.getElementById('baamImageWrap');
    const imageEl = document.getElementById('baamQuestionImg');

    if (emojiEl) emojiEl.textContent = tile.emoji || "❓";

    // Ẩn nút nghe phát âm khi đang mở câu hỏi để không làm lộ đáp án
    if (listenPromptBtn) listenPromptBtn.style.display = 'none';

    // Phân tích câu hỏi: là câu hỏi giao tiếp hay từ vựng flashcard
    const rawQ = (tile.q || '').trim();
    const isQuestionSentence = rawQ.includes('?') ||
      /^(what|where|when|why|who|how|is|are|do|does|can|which)\b/i.test(rawQ);

    // Show image if available
    if (tile.image) {
      if (imageWrap) imageWrap.style.display = 'block';
      if (imageEl) imageEl.src = tile.image;

      if (promptEl) {
        if (isQuestionSentence) {
          promptEl.innerHTML = `<span style="font-size:28px; font-weight:800; line-height:1.35; color:var(--ink);">${rawQ}</span>`;
        } else {
          // Từ vựng kèm hình ảnh: KHÔNG hiển thị từ tiếng Anh (đáp án) mà hiển thị lời mời gợi mở để học sinh suy nghĩ!
          promptEl.innerHTML = `
            <div style="font-size:28px; font-weight:800; color:var(--ink);">❓ What is this in English?</div>
            <div style="font-size:17px; color:#64748B; font-weight:700; margin-top:6px;">(Nhìn hình ảnh và đoán từ vựng Tiếng Anh)</div>
          `;
        }
      }
    } else {
      if (imageWrap) imageWrap.style.display = 'none';
      if (imageEl) imageEl.src = '';

      if (promptEl) {
        if (isQuestionSentence) {
          promptEl.innerHTML = `<span style="font-size:28px; font-weight:800; line-height:1.35; color:var(--ink);">${rawQ}</span>`;
        } else {
          // Từ vựng không có ảnh: Hiển thị nghĩa tiếng Việt để học sinh dịch sang tiếng Anh
          promptEl.innerHTML = `
            <div style="font-size:18px; color:#64748B; font-weight:700;">Dịch sang Tiếng Anh từ:</div>
            <div style="font-size:30px; color:var(--ink); font-weight:800; margin-top:6px;">"${tile.a}" ❓</div>
          `;
        }
      }
    }

    // Reset interactive fields
    if (inputEl) {
      inputEl.value = "";
      inputEl.disabled = false;
    }
    if (inputRow) inputRow.style.display = 'block';
    if (quickScoreRow) quickScoreRow.style.display = 'grid';
    if (resultSuccess) resultSuccess.style.display = 'none';
    if (resultWrong) resultWrong.style.display = 'none';

    // Cập nhật điểm động lên nút Đúng (+20đ, +15đ, +50đ...) và nút Trừ
    const correctBtn = document.getElementById('baamAnswerCorrectBtn');
    if (correctBtn) correctBtn.innerHTML = `✅ Đúng (+${tile.points || 20}đ)`;
    const penaltyBtn = document.getElementById('baamAnswerPenaltyBtn');
    if (penaltyBtn) penaltyBtn.innerHTML = `⚠️ Trừ (-10đ)`;

    // GHI CHÚ: KHÔNG phát âm trước khi trả lời để tránh làm lộ đáp án cho học sinh.
    // Phát âm chuẩn bản xứ sẽ tự động vang lên ngay khi bấm Đúng / Trừ trong handleBaamAnswerCorrect / handleBaamAnswerPenalty.
  }

  openModal('baamTileModal');
}

// Student submits an answer from the input box
function handleBaamStudentCheck() {
  const inputEl = document.getElementById('baamStudentAnswerInput');
  if (!inputEl) return;
  const userText = inputEl.value.trim().toLowerCase();

  if (!userText) {
    showToast("⚠️ Vui lòng nhập đáp án vào ô hoặc bấm nút Đúng / Trừ bên dưới!", "warning");
    inputEl.focus();
    return;
  }

  const tile = BaamState.activeTile;
  if (!tile) return;
  const targetAns = (tile.a || "").toLowerCase();
  const targetQ = (tile.q || "").toLowerCase();

  // Smart matching đáp án tiếng Anh & tiếng Việt
  const isMatch = targetAns.includes(userText) || userText.includes(targetAns) ||
                  targetQ.includes(userText) || userText.includes(targetQ) ||
                  targetAns.split(/[\s,()/-]+/).some(w => w.length > 2 && userText.includes(w));

  if (isMatch) {
    handleBaamAnswerCorrect();
  } else {
    handleBaamAnswerPenalty();
  }
}

// Team Answered Correct (+20 Points or question points) -> Tự động nhảy đáp án & chuyển lượt
function handleBaamAnswerCorrect() {
  const tile = BaamState.activeTile;
  if (!tile) return;
  clearBaamAutoTimer();

  const team = BaamState.currentTeam;
  const teamName = getTeamName(team);
  const points = (tile && tile.points) ? tile.points : 20;

  // Cộng trực tiếp với hiệu ứng nảy thẻ điểm và âm thanh Kahoot
  animateDirectScoreChange(team, points);
  triggerConfetti();
  playKahootPowerupSound();
  playSoundCheerAndApplause();

  addXP(points, `Baamboozle: ${teamName} trả lời chuẩn xác`);
  showToast(`🎉 Chính xác! +${points} Điểm cho ${teamName}!`, "success");

  // Ẩn các nút chấm điểm, tự động nhảy đáp án đúng to rõ
  const inputRow = document.getElementById('baamInteractiveInputRow');
  const quickScoreRow = document.getElementById('baamQuickScoreRow');
  const resultSuccess = document.getElementById('baamResultSuccess');
  const resultWrong = document.getElementById('baamResultWrong');
  const successTitle = document.getElementById('baamSuccessTitle');
  const ansText = document.getElementById('baamCorrectAnswerText');

  if (inputRow) inputRow.style.display = 'none';
  if (quickScoreRow) quickScoreRow.style.display = 'none';
  if (resultWrong) resultWrong.style.display = 'none';

  if (resultSuccess) {
    resultSuccess.style.display = 'flex';
    if (successTitle) successTitle.textContent = `🎉 Chính xác! +${points} Điểm!`;
    if (ansText) ansText.textContent = `${tile.q} ➔ ${tile.a}`;
  }

  // Phát âm lại từ vựng chuẩn bản xứ
  speakWord(tile.q);

  // Không tự động out — giữ nguyên modal để thầy cô & học sinh cùng xem đáp án và phát âm.
  // Khi thầy cô bấm nút "Đổi lượt tiếp theo ➔" thì mới chuyển lượt.
}

// Team Answered Penalty (-10 Points) -> Nhảy đáp án đúng & chờ bấm đổi lượt
function handleBaamAnswerPenalty() {
  const tile = BaamState.activeTile;
  if (!tile) return;
  clearBaamAutoTimer();

  const team = BaamState.currentTeam;
  const teamName = getTeamName(team);
  animateDirectScoreChange(team, -10);

  playSoundFunnyBoing();
  showToast(`⚠️ ${teamName} bị trừ 10 Điểm! (Còn: ${BaamState.scores[team]} điểm)`, "warning");

  // Ẩn các nút chấm điểm, tự động nhảy đáp án đúng to rõ
  const inputRow = document.getElementById('baamInteractiveInputRow');
  const quickScoreRow = document.getElementById('baamQuickScoreRow');
  const resultSuccess = document.getElementById('baamResultSuccess');
  const resultWrong = document.getElementById('baamResultWrong');
  const wrongTitle = document.getElementById('baamWrongTitle');
  const ansText = document.getElementById('baamWrongAnswerText');

  if (inputRow) inputRow.style.display = 'none';
  if (quickScoreRow) quickScoreRow.style.display = 'none';
  if (resultSuccess) resultSuccess.style.display = 'none';

  if (resultWrong) {
    resultWrong.style.display = 'flex';
    if (wrongTitle) wrongTitle.textContent = `⚠️ Bị trừ 10 điểm! (${teamName}: còn ${BaamState.scores[team]}đ)`;
    if (ansText) ansText.textContent = `${tile.q} ➔ ${tile.a}`;
  }

  // Phát âm từ vựng để học sinh ghi nhớ
  speakWord(tile.q);

  // Không tự động out — chỉ chuyển lượt khi người dùng bấm nút Đổi lượt tiếp theo.
}

// Manual Score Adjustment for Teachers (+10 / -10)
window.adjustBaamTeamScore = function(team, delta) {
  animateDirectScoreChange(team, delta);
  const teamName = team === 1 ? 'Đội Cáo Đỏ' : 'Đội Sư Tử Xanh';
  if (delta > 0) {
    showToast(`➕ Đã cộng ${delta} điểm cho ${teamName} (hiện có: ${BaamState.scores[team]} điểm)`, "success");
  } else {
    showToast(`➖ Đã trừ ${Math.abs(delta)} điểm của ${teamName} (hiện có: ${BaamState.scores[team]} điểm)`, "warning");
  }
};

// Xác nhận nhận thưởng +40 điểm rương vàng sau khi nổ
function handleBaamChestConfirm() {
  const currentTeam = BaamState.currentTeam;
  const currentTeamName = getTeamName(currentTeam);

  animateDirectScoreChange(currentTeam, 40);
  playKahootPowerupSound();
  showToast(`🎁 +40 Điểm Thưởng Cho Toàn Đội ${currentTeamName}!`, "success");

  markActiveTileCompleted();
}
window.handleBaamChestConfirm = handleBaamChestConfirm;

// Thực hiện cướp điểm theo 3 lựa chọn (5đ, 10đ, 20đ)
function executeBaamStealChoice(stolenPoints) {
  const currentTeam = BaamState.currentTeam;
  const otherTeam = currentTeam === 1 ? 2 : 1;
  const currentTeamName = getTeamName(currentTeam);
  const otherTeamName = getTeamName(otherTeam);

  animateDirectScoreChange(otherTeam, -stolenPoints);
  animateDirectScoreChange(currentTeam, stolenPoints);
  playKahootPowerupSound();

  showToast(`🔄 ${currentTeamName} đã cướp thành công ${stolenPoints} Điểm từ ${otherTeamName}!`, "success");
  markActiveTileCompleted();
}
window.executeBaamStealChoice = executeBaamStealChoice;

// Confirm Power-Up Event -> Trừ mìn 20đ hoặc Đảo ngược điểm
function handleBaamPowerupConfirm() {
  const tile = BaamState.activeTile;
  if (!tile || tile.type !== 'powerup') return;

  const currentTeam = BaamState.currentTeam;
  const currentTeamName = getTeamName(currentTeam);

  if (tile.powerupType === 'bomb') {
    animateDirectScoreChange(currentTeam, -20);
    showToast(`💣 ${currentTeamName} bị trừ 20 Điểm vì đạp trúng mìn!`, "warning");
  } else if (tile.powerupType === 'swap') {
    const temp1 = BaamState.scores[1];
    const temp2 = BaamState.scores[2];
    BaamState.scores[1] = temp2;
    BaamState.scores[2] = temp1;
    playSoundMystery();
    animateDirectScoreChange(1, 0);
    animateDirectScoreChange(2, 0);
    showToast(`⚡ Điểm 2 đội đã được hoán đổi cho nhau!`, "info");
  }

  markActiveTileCompleted();
}

// Mark current tile as opened and alternate turns
function markActiveTileCompleted() {
  clearBaamAutoTimer();
  if (BaamState.activeTile) {
    BaamState.activeTile.opened = true;
    BaamState.openedCount++;
  }

  closeModal('baamTileModal');
  renderBaamTiles();

  // Check if all 16 tiles opened
  if (BaamState.openedCount >= 16) {
    triggerBaamGameOver();
  } else {
    // Switch turn
    BaamState.currentTeam = BaamState.currentTeam === 1 ? 2 : 1;
    updateBaamScoreboard();
  }
}

// Game Over Celebration
function triggerBaamGameOver() {
  BaamState.isGameActive = false;
  triggerConfetti();
  playSoundPowerup();

  const titleEl = document.getElementById('baamVictoryTitle');
  const descEl = document.getElementById('baamVictoryDesc');
  const fName1 = document.getElementById('finalName1');
  const fScore1 = document.getElementById('finalScore1');
  const fName2 = document.getElementById('finalName2');
  const fScore2 = document.getElementById('finalScore2');

  const s1 = BaamState.scores[1];
  const s2 = BaamState.scores[2];
  const name1 = getTeamName(1);
  const name2 = getTeamName(2);

  if (fName1) fName1.textContent = name1;
  if (fName2) fName2.textContent = name2;

  if (s1 > s2) {
    if (titleEl) titleEl.textContent = `🏆 ${name1} Chiến Thắng!`;
    if (descEl) descEl.textContent = `${name1} xuất sắc dẫn trước với tỉ số ấn tượng ${s1} - ${s2}!`;
  } else if (s2 > s1) {
    if (titleEl) titleEl.textContent = `🏆 ${name2} Chiến Thắng!`;
    if (descEl) descEl.textContent = `${name2} bứt phá ngoạn mục với tỉ số ${s2} - ${s1}!`;
  } else {
    if (titleEl) titleEl.textContent = "🤝 Hai Đội Hòa Nhau Tuyệt Vời!";
    if (descEl) descEl.textContent = `Cả 2 đội ngang tài ngang sức với cùng số điểm ${s1}!`;
  }

  addXP(50, "Hoàn thành trận đấu Baamboozle kịch tính");
  openModal('baamVictoryModal');
}

// Restart match
function restartBaamboozleGame() {
  closeModal('baamVictoryModal');
  initBaamboozleGame();
  showToast("🚀 Trận đấu Baamboozle mới đã sẵn sàng!", "info");
}

// ==========================================================================
// 12.1. Lucky Wheels Engine for Baamboozle (2 Vòng quay may mắn gọi học sinh 2 đội)
// ==========================================================================

const DEFAULT_TEAM1_ROSTER = [
  "Minh Khang", "Bảo Trâm", "Tuấn Kiệt", "Gia Bảo", "Khánh An",
  "Hải Đăng", "Bảo Ngọc", "Phương Thảo", "Hoàng Nam", "Thảo My"
];

const DEFAULT_TEAM2_ROSTER = [
  "Đăng Khoa", "Thanh Trúc", "Việt Hoàng", "Quỳnh Anh", "Đức Anh",
  "Hương Giang", "Quang Huy", "Ngọc Diệp", "Anh Dũng", "Cẩm Ly"
];

const WHEEL_PALETTES = {
  1: ["#EF4444", "#F97316", "#F59E0B", "#10B981", "#06B6D4", "#8B5CF6", "#EC4899", "#3B82F6"],
  2: ["#3B82F6", "#06B6D4", "#10B981", "#8B5CF6", "#EC4899", "#F59E0B", "#F97316", "#EF4444"]
};

const BaamWheelState = {
  1: {
    students: [],
    rotation: 0,
    isSpinning: false,
    lastWinner: null,
    lastWinnerIndex: -1,
    lastTickSlice: -1
  },
  2: {
    students: [],
    rotation: 0,
    isSpinning: false,
    lastWinner: null,
    lastWinnerIndex: -1,
    lastTickSlice: -1
  },
  isDualSpinning: false,
  activeWinnerTeam: 1
};

// Load student rosters from localStorage
function loadStudentRosters() {
  let r1 = null;
  let r2 = null;
  try {
    const s1 = localStorage.getItem('ekm_baam_team1_students');
    const s2 = localStorage.getItem('ekm_baam_team2_students');
    if (s1) r1 = JSON.parse(s1);
    if (s2) r2 = JSON.parse(s2);
  } catch (e) {
    console.warn("Error loading student rosters:", e);
  }

  BaamWheelState[1].students = (Array.isArray(r1) && r1.length > 0) ? r1 : [...DEFAULT_TEAM1_ROSTER];
  BaamWheelState[2].students = (Array.isArray(r2) && r2.length > 0) ? r2 : [...DEFAULT_TEAM2_ROSTER];

  syncRosterUI();
  drawBaamWheel(1);
  drawBaamWheel(2);
}

// Sync textareas and count badges
function syncRosterUI() {
  const t1 = document.getElementById('rosterInputTeam1');
  const t2 = document.getElementById('rosterInputTeam2');
  const c1 = document.getElementById('wheelRosterCount1');
  const c2 = document.getElementById('wheelRosterCount2');
  const mc1 = document.getElementById('rosterCountTeam1');
  const mc2 = document.getElementById('rosterCountTeam2');

  const count1 = BaamWheelState[1].students.length;
  const count2 = BaamWheelState[2].students.length;

  if (t1) t1.value = BaamWheelState[1].students.join('\n');
  if (t2) t2.value = BaamWheelState[2].students.join('\n');
  if (c1) c1.textContent = `${count1} bạn`;
  if (c2) c2.textContent = `${count2} bạn`;
  if (mc1) mc1.textContent = `(${count1} bạn)`;
  if (mc2) mc2.textContent = `(${count2} bạn)`;
}

// Save student rosters from modal textareas
function saveStudentRosters() {
  const t1 = document.getElementById('rosterInputTeam1');
  const t2 = document.getElementById('rosterInputTeam2');

  const parseLines = (text) => {
    if (!text) return [];
    return text
      .split('\n')
      .map(line => line.replace(/^[\s\d\.\-\*•]+/, '').trim())
      .filter(line => line.length > 0);
  };

  const list1 = t1 ? parseLines(t1.value) : [];
  const list2 = t2 ? parseLines(t2.value) : [];

  BaamWheelState[1].students = list1;
  BaamWheelState[2].students = list2;

  try {
    localStorage.setItem('ekm_baam_team1_students', JSON.stringify(list1));
    localStorage.setItem('ekm_baam_team2_students', JSON.stringify(list2));
  } catch (e) {
    console.warn("Error saving student rosters:", e);
  }

  syncRosterUI();
  drawBaamWheel(1);
  drawBaamWheel(2);
  closeModal('baamStudentRosterModal');
  playKahootCorrectSound();
  showToast(`🎉 Đã lưu danh sách: Đội 1 (${list1.length} bạn) — Đội 2 (${list2.length} bạn)!`, "success");
}

// Restore default rosters
function loadDefaultStudentRosters() {
  BaamWheelState[1].students = [...DEFAULT_TEAM1_ROSTER];
  BaamWheelState[2].students = [...DEFAULT_TEAM2_ROSTER];
  syncRosterUI();
  try {
    localStorage.setItem('ekm_baam_team1_students', JSON.stringify(BaamWheelState[1].students));
    localStorage.setItem('ekm_baam_team2_students', JSON.stringify(BaamWheelState[2].students));
  } catch (e) {}
  drawBaamWheel(1);
  drawBaamWheel(2);
  playKahootCorrectSound();
  showToast("🔄 Đã nạp lại danh sách mẫu 20 học sinh!", "info");
}

// Auto split single Excel pasted list into 2 teams
function autoSplitRosterFromQuickPaste() {
  const input = document.getElementById('rosterQuickPasteInput');
  const raw = input ? input.value.trim() : "";
  if (!raw) {
    showToast("⚠️ Vui lòng dán danh sách học sinh từ Excel vào ô trên trước!", "warning");
    if (input) input.focus();
    return;
  }

  // Split by line break or comma/semicolon/tab
  const items = raw
    .split(/[\r\n\t,;]+/)
    .map(name => name.replace(/^[\s\d\.\-\*•]+/, '').trim())
    .filter(name => name.length > 0);

  if (items.length === 0) {
    showToast("⚠️ Không tìm thấy tên hợp lệ trong nội dung đã dán!", "warning");
    return;
  }

  // Split into 2 halves
  const half = Math.ceil(items.length / 2);
  const team1List = items.slice(0, half);
  const team2List = items.slice(half);

  const t1 = document.getElementById('rosterInputTeam1');
  const t2 = document.getElementById('rosterInputTeam2');
  if (t1) t1.value = team1List.join('\n');
  if (t2) t2.value = team2List.join('\n');

  const mc1 = document.getElementById('rosterCountTeam1');
  const mc2 = document.getElementById('rosterCountTeam2');
  if (mc1) mc1.textContent = `(${team1List.length} bạn)`;
  if (mc2) mc2.textContent = `(${team2List.length} bạn)`;

  if (input) input.value = '';
  playKahootTickSound();
  showToast(`✨ Đã tự động chia đều ${items.length} học sinh: Đội 1 (${team1List.length}), Đội 2 (${team2List.length})! Bấm "Lưu danh sách" để hoàn tất.`, "success");
}

// Draw Lucky Wheel on Canvas
function drawBaamWheel(team) {
  const canvas = document.getElementById(`wheelCanvas${team}`);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = width / 2 - 8;

  ctx.clearRect(0, 0, width, height);

  const students = BaamWheelState[team].students || [];
  const numSlices = students.length;

  if (numSlices === 0) {
    // Empty state
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#F8FAFC";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#CBD5E1";
    ctx.stroke();

    ctx.fillStyle = "#64748B";
    ctx.font = "bold 15px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Chưa có học sinh", cx, cy - 10);
    ctx.font = "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("Bấm 'Dán từ Excel'", cx, cy + 14);
    ctx.restore();
    return;
  }

  const palette = WHEEL_PALETTES[team] || WHEEL_PALETTES[1];
  const sliceAngle = (2 * Math.PI) / numSlices;
  const rotation = BaamWheelState[team].rotation;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);

  // Draw slices
  for (let i = 0; i < numSlices; i++) {
    const startAngle = i * sliceAngle;
    const endAngle = (i + 1) * sliceAngle;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, startAngle, endAngle);
    ctx.closePath();

    ctx.fillStyle = palette[i % palette.length];
    ctx.fill();

    ctx.lineWidth = numSlices > 35 ? 1 : numSlices > 20 ? 1.5 : 2.5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

    // Draw text (name)
    ctx.save();
    const midAngle = startAngle + sliceAngle / 2;
    ctx.rotate(midAngle);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    // Dynamic responsive font sizing and character truncation for large rosters (10 - 60+ students)
    let fontSize = 14;
    let maxChars = 16;
    if (numSlices > 45) {
      fontSize = 8.5;
      maxChars = 9;
    } else if (numSlices > 30) {
      fontSize = 9.5;
      maxChars = 11;
    } else if (numSlices > 20) {
      fontSize = 11;
      maxChars = 13;
    } else if (numSlices > 12) {
      fontSize = 12.5;
      maxChars = 15;
    }

    ctx.font = `900 ${fontSize}px "Nunito", "Baloo 2", sans-serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    let name = students[i];
    if (name.length > maxChars) {
      name = name.slice(0, maxChars - 1) + '…';
    }

    const textOffset = numSlices > 30 ? radius - 12 : radius - 16;
    ctx.fillText(name, textOffset, 0);
    ctx.restore();
  }

  ctx.restore();

  // Draw Center Hub
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, 32, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFFFF";
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = team === 1 ? "#EF4444" : "#3B82F6";
  ctx.stroke();

  ctx.font = '24px "Baloo 2", "Nunito", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "transparent";
  ctx.fillText(getTeamEmoji(team), cx, cy + 1);
  ctx.restore();
}

// Spin a Single Wheel
function spinBaamWheel(team, onComplete) {
  const state = BaamWheelState[team];
  if (state.isSpinning) return;
  if (!state.students || state.students.length === 0) {
    showToast(`⚠️ Vui lòng thêm học sinh cho ${getTeamName(team)} trước khi quay!`, "warning");
    openModal('baamStudentRosterModal');
    return;
  }

  state.isSpinning = true;
  BaamWheelState.activeWinnerTeam = team;

  // Disable spin buttons during spin
  const btn1 = document.getElementById('spinWheelBtn1');
  const btn2 = document.getElementById('spinWheelBtn2');
  if (btn1) btn1.disabled = true;
  if (btn2) btn2.disabled = true;

  const numSlices = state.students.length;
  const sliceAngle = (2 * Math.PI) / numSlices;

  // Spin parameters
  const minRotations = 6;
  const extraRotations = Math.floor(Math.random() * 4);
  const randomTargetAngle = Math.random() * 2 * Math.PI;
  const totalSpinAngle = (minRotations + extraRotations) * 2 * Math.PI + randomTargetAngle;

  const startRotation = state.rotation;
  const targetRotation = startRotation + totalSpinAngle;
  const duration = 3800 + Math.random() * 400; // ~4s
  const startTime = performance.now();

  state.lastTickSlice = -1;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function frame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    state.rotation = startRotation + totalSpinAngle * eased;
    drawBaamWheel(team);

    // Audio tick when slice crosses the top pointer (12 o'clock = 1.5 * Math.PI)
    const pointerAngle = 1.5 * Math.PI;
    const normalizedAngle = ((pointerAngle - (state.rotation % (2 * Math.PI))) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const currentSlice = Math.floor(normalizedAngle / sliceAngle) % numSlices;
    if (currentSlice !== state.lastTickSlice) {
      state.lastTickSlice = currentSlice;
      playKahootTickSound();
    }

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      state.rotation = targetRotation % (2 * Math.PI);
      state.isSpinning = false;
      drawBaamWheel(team);

      // Calculate winner
      const finalNormAngle = ((pointerAngle - (state.rotation % (2 * Math.PI))) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
      const winnerIndex = Math.floor(finalNormAngle / sliceAngle) % numSlices;
      const winnerStudent = state.students[winnerIndex];

      state.lastWinner = winnerStudent;
      state.lastWinnerIndex = winnerIndex;

      if (btn1) btn1.disabled = false;
      if (btn2) btn2.disabled = false;

      if (typeof onComplete === 'function') {
        onComplete(winnerStudent, winnerIndex);
      } else {
        showSingleWinnerModal(team, winnerStudent);
      }
    }
  }

  requestAnimationFrame(frame);
}

// Show Single Winner Modal
function showSingleWinnerModal(team, studentName) {
  playKahootCorrectSound();
  triggerConfetti();

  const wrapSingle = document.getElementById('baamSingleWinnerWrap');
  const wrapDual = document.getElementById('baamDualWinnerWrap');
  const nameEl = document.getElementById('baamWinnerName');
  const teamEl = document.getElementById('baamWinnerTeam');

  if (wrapSingle) wrapSingle.style.display = 'block';
  if (wrapDual) wrapDual.style.display = 'none';

  if (nameEl) nameEl.textContent = studentName;
  if (teamEl) {
    teamEl.textContent = getTeamName(team);
    if (team === 1) {
      teamEl.style.color = '#DC2626';
      teamEl.style.background = '#FEE2E2';
    } else {
      teamEl.style.color = '#2563EB';
      teamEl.style.background = '#DBEAFE';
    }
  }

  openModal('baamWinnerModal');
}

// Spin both wheels simultaneously (Dual 1 vs 1)
function spinBothBaamWheels() {
  const s1 = BaamWheelState[1].students;
  const s2 = BaamWheelState[2].students;

  if (!s1 || s1.length === 0 || !s2 || s2.length === 0) {
    showToast("⚠️ Vui lòng thêm học sinh cho cả 2 đội trước khi quay song song!", "warning");
    openModal('baamStudentRosterModal');
    return;
  }

  let winner1 = null;
  let winner2 = null;
  let completedCount = 0;

  function checkDone() {
    completedCount++;
    if (completedCount === 2) {
      playKahootPowerupSound();
      triggerConfetti();

      const wrapSingle = document.getElementById('baamSingleWinnerWrap');
      const wrapDual = document.getElementById('baamDualWinnerWrap');
      const dualName1 = document.getElementById('baamDualWinner1');
      const dualName2 = document.getElementById('baamDualWinner2');
      const dualTitle1 = document.getElementById('baamDualTeam1Title');
      const dualTitle2 = document.getElementById('baamDualTeam2Title');

      if (wrapSingle) wrapSingle.style.display = 'none';
      if (wrapDual) wrapDual.style.display = 'block';

      if (dualName1) dualName1.textContent = winner1;
      if (dualName2) dualName2.textContent = winner2;
      if (dualTitle1) dualTitle1.textContent = getTeamName(1).toUpperCase();
      if (dualTitle2) dualTitle2.textContent = getTeamName(2).toUpperCase();

      openModal('baamWinnerModal');
    }
  }

  spinBaamWheel(1, (student) => {
    winner1 = student;
    checkDone();
  });

  spinBaamWheel(2, (student) => {
    winner2 = student;
    checkDone();
  });
}

// Handle action from single winner modal: 'remove' or 'keep'
function handleWinnerAction(action) {
  const team = BaamWheelState.activeWinnerTeam || 1;
  const state = BaamWheelState[team];
  const student = state.lastWinner;

  if (action === 'remove' && student) {
    state.students = state.students.filter(name => name !== student);
    try {
      localStorage.setItem(`ekm_baam_team${team}_students`, JSON.stringify(state.students));
    } catch (e) {}

    syncRosterUI();
    drawBaamWheel(team);
    showToast(`🗑️ Đã xóa "${student}" khỏi vòng quay ${getTeamName(team)}!`, "info");
  } else {
    showToast(`💾 Đã giữ lại "${student}" trong vòng quay cho các lượt sau!`, "success");
  }

  closeModal('baamWinnerModal');
}

// Handle action from dual winner modal: 'remove_both' or 'keep_both'
function handleDualWinnerAction(action) {
  const w1 = BaamWheelState[1].lastWinner;
  const w2 = BaamWheelState[2].lastWinner;

  if (action === 'remove_both') {
    if (w1) {
      BaamWheelState[1].students = BaamWheelState[1].students.filter(n => n !== w1);
      try {
        localStorage.setItem('ekm_baam_team1_students', JSON.stringify(BaamWheelState[1].students));
      } catch (e) {}
    }
    if (w2) {
      BaamWheelState[2].students = BaamWheelState[2].students.filter(n => n !== w2);
      try {
        localStorage.setItem('ekm_baam_team2_students', JSON.stringify(BaamWheelState[2].students));
      } catch (e) {}
    }

    syncRosterUI();
    drawBaamWheel(1);
    drawBaamWheel(2);
    showToast(`🗑️ Đã xóa 2 bạn ("${w1}" & "${w2}") khỏi 2 vòng quay!`, "info");
  } else {
    showToast("💾 Đã giữ lại cả 2 bạn trong vòng quay!", "success");
  }

  closeModal('baamWinnerModal');
}

// Attach live input listeners for rosters in modal
function initRosterInputListeners() {
  const t1 = document.getElementById('rosterInputTeam1');
  const t2 = document.getElementById('rosterInputTeam2');
  const mc1 = document.getElementById('rosterCountTeam1');
  const mc2 = document.getElementById('rosterCountTeam2');

  const updateCount = (textarea, countBadge) => {
    if (!textarea || !countBadge) return;
    const count = textarea.value.split('\n').filter(l => l.trim().length > 0).length;
    countBadge.textContent = `(${count} bạn)`;
  };

  if (t1) t1.addEventListener('input', () => updateCount(t1, mc1));
  if (t2) t2.addEventListener('input', () => updateCount(t2, mc2));
}

// Global window bindings
window.spinBaamWheel = spinBaamWheel;
window.spinBothBaamWheels = spinBothBaamWheels;
window.loadStudentRosters = loadStudentRosters;
window.saveStudentRosters = saveStudentRosters;
window.loadDefaultStudentRosters = loadDefaultStudentRosters;
window.autoSplitRosterFromQuickPaste = autoSplitRosterFromQuickPaste;
window.handleWinnerAction = handleWinnerAction;
window.handleDualWinnerAction = handleDualWinnerAction;

// ==========================================================================
// Teacher Zone Teams & Excel Roster Management (Tích hợp trong Baamboozle & Đoán hình)
// ==========================================================================
function syncTeacherZoneTeamsUI() {
  const n1 = getTeamName(1);
  const n2 = getTeamName(2);

  ['baam', 'ai'].forEach(prefix => {
    const inp1 = document.getElementById(`${prefix}TzTeamNameInput1`);
    const inp2 = document.getElementById(`${prefix}TzTeamNameInput2`);
    if (inp1 && !inp1.matches(':focus')) inp1.value = n1;
    if (inp2 && !inp2.matches(':focus')) inp2.value = n2;

    const r1 = document.getElementById(`${prefix}TzRosterInputTeam1`);
    const r2 = document.getElementById(`${prefix}TzRosterInputTeam2`);
    if (r1 && BaamWheelState[1] && BaamWheelState[1].students && !r1.matches(':focus')) {
      r1.value = BaamWheelState[1].students.join('\n');
    }
    if (r2 && BaamWheelState[2] && BaamWheelState[2].students && !r2.matches(':focus')) {
      r2.value = BaamWheelState[2].students.join('\n');
    }
  });

  updateTzRosterCounts();
}

function updateTzRosterCounts() {
  ['baam', 'ai'].forEach(prefix => {
    const r1 = document.getElementById(`${prefix}TzRosterInputTeam1`);
    const r2 = document.getElementById(`${prefix}TzRosterInputTeam2`);
    const c1 = document.getElementById(`${prefix}TzRosterCountTeam1`);
    const c2 = document.getElementById(`${prefix}TzRosterCountTeam2`);

    if (r1 && c1) {
      const count1 = r1.value.split('\n').map(s => s.trim()).filter(Boolean).length;
      c1.textContent = `(${count1} học sinh)`;
    }
    if (r2 && c2) {
      const count2 = r2.value.split('\n').map(s => s.trim()).filter(Boolean).length;
      c2.textContent = `(${count2} học sinh)`;
    }
  });
}

function applyTzTeamPreset(team1Name, team2Name) {
  ['baam', 'ai'].forEach(prefix => {
    const inp1 = document.getElementById(`${prefix}TzTeamNameInput1`);
    const inp2 = document.getElementById(`${prefix}TzTeamNameInput2`);
    if (inp1) inp1.value = team1Name;
    if (inp2) inp2.value = team2Name;
  });

  BaamState.teamNames[1] = team1Name;
  BaamState.teamNames[2] = team2Name;
  updateTeamNamesUI();
  try {
    localStorage.setItem('ekm_baam_team_names', JSON.stringify(BaamState.teamNames));
  } catch (e) {
    console.warn("Storage error:", e);
  }
  showToast(`🏷️ Đã chọn cặp tên: ${team1Name} vs ${team2Name}!`, "success");
}

function syncTzTeamName(teamNum, sourcePrefix = 'baam') {
  const inp = document.getElementById(`${sourcePrefix}TzTeamNameInput${teamNum}`);
  if (!inp) return;
  const val = inp.value.trim();
  if (val) {
    BaamState.teamNames[teamNum] = val;
    // Đồng bộ sang tab còn lại
    const otherPrefix = sourcePrefix === 'baam' ? 'ai' : 'baam';
    const otherInp = document.getElementById(`${otherPrefix}TzTeamNameInput${teamNum}`);
    if (otherInp) otherInp.value = val;
    updateTeamNamesUI();
  }
}

function autoSplitRosterFromTzQuickPaste(prefix = 'baam') {
  const input = document.getElementById(`${prefix}TzRosterQuickPasteInput`);
  if (!input) return;
  const rawText = input.value.trim();
  if (!rawText) {
    showToast("⚠️ Vui lòng dán danh sách học sinh từ file Excel vào ô trước!", "warning");
    input.focus();
    return;
  }

  // Parse by newline, comma or semicolon
  let names = rawText
    .split(/[\r\n,;]+/)
    .map(n => n.trim().replace(/^[\d\.\-\)\s]+/, '')) // remove leading index numbers
    .filter(n => n.length > 0);

  if (names.length < 2) {
    showToast("⚠️ Cần ít nhất 2 học sinh để chia đều cho 2 đội!", "warning");
    return;
  }

  // Random shuffle
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  }

  const mid = Math.ceil(names.length / 2);
  const team1List = names.slice(0, mid);
  const team2List = names.slice(mid);

  // Cập nhật cho cả 2 tab để luôn đồng nhất
  ['baam', 'ai'].forEach(p => {
    const t1 = document.getElementById(`${p}TzRosterInputTeam1`);
    const t2 = document.getElementById(`${p}TzRosterInputTeam2`);
    if (t1) t1.value = team1List.join('\n');
    if (t2) t2.value = team2List.join('\n');
  });

  updateTzRosterCounts();
  showToast(`⚡ Đã chia đều ${names.length} học sinh: Đội 1 (${team1List.length} em) & Đội 2 (${team2List.length} em)!`, "success");
}

function saveTeacherZoneTeams(prefix = 'baam') {
  const inp1 = document.getElementById(`${prefix}TzTeamNameInput1`);
  const inp2 = document.getElementById(`${prefix}TzTeamNameInput2`);
  if (inp1 && inp1.value.trim()) BaamState.teamNames[1] = inp1.value.trim();
  if (inp2 && inp2.value.trim()) BaamState.teamNames[2] = inp2.value.trim();

  const r1 = document.getElementById(`${prefix}TzRosterInputTeam1`);
  const r2 = document.getElementById(`${prefix}TzRosterInputTeam2`);

  const list1 = r1 ? r1.value.split('\n').map(s => s.trim()).filter(Boolean) : [];
  const list2 = r2 ? r2.value.split('\n').map(s => s.trim()).filter(Boolean) : [];

  if (list1.length > 0) BaamWheelState[1].students = list1;
  if (list2.length > 0) BaamWheelState[2].students = list2;

  try {
    localStorage.setItem('ekm_baam_team_names', JSON.stringify(BaamState.teamNames));
    localStorage.setItem('ekm_baam_roster_t1', JSON.stringify(BaamWheelState[1].students));
    localStorage.setItem('ekm_baam_roster_t2', JSON.stringify(BaamWheelState[2].students));
  } catch (e) {
    console.warn("Storage error:", e);
  }

  updateTeamNamesUI();
  syncTeacherZoneTeamsUI();
  syncRosterUI();
  drawBaamWheel(1);
  drawBaamWheel(2);
  updateTzRosterCounts();
  showToast("💾 Đã lưu cấu hình 2 Đội & Vòng Quay May Mắn thành công!", "success");
}

function saveTeacherZoneTeamsAndPlay(targetGame = 'baam') {
  saveTeacherZoneTeams(targetGame);
  setTimeout(() => {
    if (targetGame === 'baam') {
      switchView('view-baamboozle');
      showToast("🎲 Bắt đầu trận đấu Baamboozle ngay thôi!", "success");
    } else {
      switchView('view-ai-studio');
      showToast("🖼️ Bắt đầu màn chiếu bảng Đoán hình ngay thôi!", "success");
    }
  }, 250);
}

function loadDefaultTeacherZoneTeams() {
  BaamState.teamNames[1] = DEFAULT_TEAM_NAMES[1];
  BaamState.teamNames[2] = DEFAULT_TEAM_NAMES[2];
  BaamWheelState[1].students = [...DEFAULT_TEAM1_ROSTER];
  BaamWheelState[2].students = [...DEFAULT_TEAM2_ROSTER];

  try {
    localStorage.setItem('ekm_baam_team_names', JSON.stringify(BaamState.teamNames));
    localStorage.setItem('ekm_baam_roster_t1', JSON.stringify(BaamWheelState[1].students));
    localStorage.setItem('ekm_baam_roster_t2', JSON.stringify(BaamWheelState[2].students));
  } catch (e) {
    console.warn("Storage error:", e);
  }

  updateTeamNamesUI();
  syncTeacherZoneTeamsUI();
  syncRosterUI();
  drawBaamWheel(1);
  drawBaamWheel(2);
  showToast("🔄 Đã khôi phục 2 Đội và danh sách 20 học sinh mặc định!", "info");
}

window.syncTeacherZoneTeamsUI = syncTeacherZoneTeamsUI;
window.updateTzRosterCounts = updateTzRosterCounts;
window.applyTzTeamPreset = applyTzTeamPreset;
window.syncTzTeamName = syncTzTeamName;
window.autoSplitRosterFromTzQuickPaste = autoSplitRosterFromTzQuickPaste;
window.saveTeacherZoneTeams = saveTeacherZoneTeams;
window.saveTeacherZoneTeamsAndPlay = saveTeacherZoneTeamsAndPlay;
window.loadDefaultTeacherZoneTeams = loadDefaultTeacherZoneTeams;

// AI Sentence Synthesizer Engine
const AI_TOPIC_TEMPLATES = {
  1: [
    { en: "What is your name?", vi: "Tên bạn là gì? (My name is...)" },
    { en: "How are you today?", vi: "Hôm nay bạn thế nào? (I am happy)" },
    { en: "What color is the red hat?", vi: "Chiếc mũ này màu gì? (It is red)" },
    { en: "Look at the sleeping cat!", vi: "Nhìn chú mèo đang ngủ kìa! (A cute cat)" },
    { en: "Can you count to five?", vi: "Bạn đếm đến 5 được không? (1, 2, 3, 4, 5)" },
    { en: "Point to the shining sun!", vi: "Hãy chỉ vào ông mặt trời! (The yellow sun)" },
    { en: "Is this a friendly puppy?", vi: "Đây có phải cún con ngoan không? (Yes, it is)" },
    { en: "What sweet fruit is this?", vi: "Đây là quả gì ngọt lịm? (It is an apple)" },
    { en: "Can a little fish swim fast?", vi: "Cá nhỏ có bơi nhanh không? (Yes, it can)" },
    { en: "Say goodbye to your teacher!", vi: "Chào tạm biệt cô giáo nào! (Goodbye teacher)" },
    { en: "Stand up and touch your ears!", vi: "Đứng lên và chạm vào tai nào! (Touch ears)" },
    { en: "What sound does a duck make?", vi: "Con vịt kêu như thế nào? (Quack quack!)" }
  ],
  2: [
    { en: "Where is your school backpack?", vi: "Cặp sách của bạn ở đâu? (On the desk)" },
    { en: "What do you write with?", vi: "Bạn dùng gì để viết bài? (A pencil / pen)" },
    { en: "Who is the kind mother?", vi: "Ai là người mẹ hiền hậu? (My mother)" },
    { en: "Can you pass me the ruler?", vi: "Đưa cho mình cây thước kẻ nhé! (Here you are)" },
    { en: "Let us kick the football together!", vi: "Cùng nhau đá bóng nào! (Play football)" },
    { en: "How many eyes do you have?", vi: "Bạn có mấy mắt để ngắm nhìn? (Two bright eyes)" },
    { en: "Open your English book on page ten!", vi: "Mở sách tiếng Anh trang 10 ra! (Open book)" },
    { en: "Who plays games with you at home?", vi: "Ai chơi trò chơi cùng bạn ở nhà? (My father)" },
    { en: "What toy has pretty yellow hair?", vi: "Món đồ chơi nào có tóc vàng xinh? (A doll)" },
    { en: "Clap your hands and turn around!", vi: "Vỗ tay và xoay một vòng nào! (Clap and turn)" },
    { en: "What color is your pencil case?", vi: "Hộp bút của bạn màu gì? (It is blue/pink)" },
    { en: "Raise your right hand high!", vi: "Giơ cao tay phải của bạn lên nào! (Raise hand)" }
  ],
  3: [
    { en: "What would you like for lunch?", vi: "Bữa trưa bạn muốn ăn món gì? (Pizza and salad)" },
    { en: "How is the weather outside?", vi: "Thời tiết bên ngoài thế nào? (It is sunny and warm)" },
    { en: "Do you enjoy drinking cold milk?", vi: "Bạn có thích uống sữa tươi lạnh không? (Yes, I do)" },
    { en: "Why do we carry an umbrella today?", vi: "Tại sao hôm nay mang ô? (Because it is rainy)" },
    { en: "Can you jump as high as a frog?", vi: "Bạn có nhảy cao như chú ếch được không? (Yes, I can)" },
    { en: "Sing your favorite English nursery song!", vi: "Hãy hát một bài hát tiếng Anh quen thuộc! (Singing)" },
    { en: "What healthy food gives you energy?", vi: "Thực phẩm nào cung cấp nhiều năng lượng? (Bread and eggs)" },
    { en: "How many glasses of water daily?", vi: "Bạn uống bao nhiêu ly nước mỗi ngày? (About 6-8 glasses)" },
    { en: "Where do you play badminton with friends?", vi: "Bạn chơi cầu lông cùng bạn ở đâu? (In the schoolyard)" },
    { en: "What time do you go to sleep at night?", vi: "Bạn đi ngủ lúc mấy giờ ban đêm? (At 9:30 PM)" },
    { en: "Do you like eating crispy apples?", vi: "Bạn có thích ăn táo giòn ngọt không? (Yes, very much)" },
    { en: "Can you ride a bicycle in the park?", vi: "Bạn có biết đạp xe đạp ở công viên không? (Yes, I can)" }
  ],
  4: [
    { en: "What profession does your father do?", vi: "Bố bạn làm nghề nghiệp gì? (He is a doctor/engineer)" },
    { en: "Where do caring doctors help patients?", vi: "Các bác sĩ tận tình cứu chữa ở đâu? (At the hospital)" },
    { en: "Who navigates airplanes across skies?", vi: "Ai là người lái máy bay qua những đám mây? (A brave pilot)" },
    { en: "What do you like to do on Sundays?", vi: "Chủ nhật bạn thích làm gì nhất? (Go to the city park)" },
    { en: "Describe the clothes you are wearing!", vi: "Hãy miêu tả trang phục bạn đang mặc! (Shirt and pants)" },
    { en: "Where do diligent students go each day?", vi: "Mỗi ngày học sinh chăm chỉ đến đâu? (Primary school)" },
    { en: "Who cooks mouthwatering food in kitchens?", vi: "Ai chế biến món ăn ngon tuyệt trong bếp? (A talented chef)" },
    { en: "What is your best subject at school?", vi: "Môn học bạn giỏi nhất trên lớp là gì? (English / Math)" },
    { en: "How do you commute to school safely?", vi: "Bạn đến trường an toàn bằng cách nào? (By bike or bus)" },
    { en: "Where can you discover amazing storybooks?", vi: "Nơi nào có thể tìm thấy sách truyện hấp dẫn? (The library)" },
    { en: "What is your biggest aspiration in life?", vi: "Ước mơ lớn nhất trong đời bạn là gì? (To be an astronaut)" },
    { en: "What time does your evening homework finish?", vi: "Mấy giờ bạn hoàn thành bài tập về nhà? (At 8:30 PM)" }
  ],
  5: [
    { en: "Which wonderful country are you from?", vi: "Bạn sinh ra ở đất nước tuyệt vời nào? (I am from Vietnam)" },
    { en: "Where did you go for summer vacation?", vi: "Kỳ nghỉ hè bạn đã đi du lịch ở đâu? (To Nha Trang beach)" },
    { en: "Why is preserving mother Earth important?", vi: "Vì sao giữ gìn Trái Đất là quan trọng? (To protect wildlife)" },
    { en: "What iconic clock is located in London?", vi: "Tháp đồng hồ biểu tượng nào ở Luân Đôn? (Big Ben tower)" },
    { en: "How will intelligent robots assist humanity?", vi: "Người máy thông minh sẽ hỗ trợ con người ra sao? (Exploring space)" },
    { en: "What action helps save precious tap water?", vi: "Hành động nào giúp bảo vệ nguồn nước sạch? (Turn off faucets)" },
    { en: "Name a breathtaking UNESCO site in Vietnam!", vi: "Kể tên di sản thiên nhiên nổi tiếng của VN! (Ha Long Bay)" },
    { en: "What technology career inspires you most?", vi: "Ngành công nghệ nào truyền cảm hứng cho bạn? (AI Programmer)" },
    { en: "How often do you communicate in English?", vi: "Bạn giao tiếp tiếng Anh bao nhiêu lần? (Every day with friends)" },
    { en: "Which season brings warm golden sunshine?", vi: "Mùa nào mang đến nắng vàng rực rỡ? (Summer / Autumn)" },
    { en: "How can students combat plastic pollution?", vi: "Học sinh làm gì để chống ô nhiễm rác nhựa? (Use cloth bags)" },
    { en: "What would you explore if you had a spaceship?", vi: "Nếu có phi thuyền, bạn muốn khám phá nơi nào? (Mars & Stars)" }
  ]
};

// AI Generate Sentences Button Handler
function generateAISentences() {
  const gradeInput = document.getElementById('lessonGradeInput');
  const titleInput = document.getElementById('lessonTitleInput');
  const textarea = document.getElementById('lessonSentencesInput');

  const grade = parseInt(gradeInput ? gradeInput.value : 1) || 1;
  let templates = AI_TOPIC_TEMPLATES[grade] || AI_TOPIC_TEMPLATES[1];

  let currentTitle = titleInput ? titleInput.value.trim() : "";
  const lowerTitle = currentTitle.toLowerCase();

  if (lowerTitle.includes("job") || lowerTitle.includes("nghề") || lowerTitle.includes("work")) {
    templates = [
      { en: "Doctor", vi: "Bác sĩ khám chữa bệnh (He works at the hospital)" },
      { en: "Teacher", vi: "Cô giáo dạy học (She teaches students in school)" },
      { en: "Pilot", vi: "Phi công lái máy bay (Flies airplanes in the sky)" },
      { en: "Chef", vi: "Đầu bếp nấu món ngon (Cooks delicious food)" },
      { en: "Firefighter", vi: "Lính cứu hỏa dũng cảm (Puts out fires safely)" },
      { en: "Police officer", vi: "Chiến sĩ công an giữ trật tự (Helps everyone)" },
      { en: "Farmer", vi: "Bác nông dân trồng lúa rau (Grows fresh food)" },
      { en: "Dentist", vi: "Bác sĩ nha khoa khám răng (Checks bright smiles)" },
      { en: "Astronaut", vi: "Nhà du hành vũ trụ (Flies to outer space)" },
      { en: "Artist", vi: "Họa sĩ vẽ tranh (Paints colorful pictures)" },
      { en: "Singer", vi: "Ca sĩ biểu diễn (Sings beautiful songs)" },
      { en: "Department store", vi: "Cửa hàng bách hóa / Siêu thị nhu yếu phẩm" }
    ];
  } else if (!currentTitle) {
    const titlesByGrade = {
      1: "Khám Phá Chữ Cái & Động Vật Bé Yêu",
      2: "Gia Đình Đầm Ấm & Đồ Dùng Học Tập",
      3: "Thức Ăn Dinh Dưỡng & Thời Tiết Bốn Mùa",
      4: "Ước Mơ Nghề Nghiệp & Thế Giới Quanh Em",
      5: "Khám Phá Thế Giới & Môi Trường Xanh"
    };
    if (titleInput) titleInput.value = titlesByGrade[grade] || "Bài Học Tiếng Anh Mới";
  }

  // Format sentences: English | Vietnamese
  const lines = templates.map(t => `${t.en} | ${t.vi}`);
  if (textarea) {
    textarea.value = lines.join('\n');
  }

  playSoundSuccess();
  showToast("✨ AI đã biên soạn 12 mẫu câu chuẩn theo chủ đề thành công!", "success");
}

// Intelligent line parser: supports |, /, -, :, ➔, ->, and parentheses
function parseQuestionAnswerLine(line) {
  let q = "";
  let a = "";
  const delimiters = ['|', '/', '➔', '->', ':', '-'];
  for (const d of delimiters) {
    if (line.includes(d)) {
      const idx = line.indexOf(d);
      q = line.substring(0, idx).trim();
      a = line.substring(idx + d.length).trim();
      break;
    }
  }

  if (!q) {
    const match = line.match(/^([^(]+)\(([^)]+)\)/);
    if (match) {
      q = match[1].trim();
      a = match[2].trim();
    } else {
      q = line.trim();
      a = "Trả lời tự nhiên bằng tiếng Anh";
    }
  }

  // Vietnamese tone detection to guarantee English sentence is always the prompt
  const vietnameseToneRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
  if (vietnameseToneRegex.test(q) && !vietnameseToneRegex.test(a) && a.length > 0) {
    const tmp = q;
    q = a;
    a = tmp;
  }

  return { q, a };
}

// Automatically fix any previously saved lessons with merged questions like "word / meaning"
function migrateExistingCustomLessons() {
  try {
    const saved = localStorage.getItem('ekm_custom_lessons');
    if (saved) {
      const customs = JSON.parse(saved);
      let updated = false;
      customs.forEach(c => {
        if (c.sentences && Array.isArray(c.sentences)) {
          c.sentences.forEach(s => {
            if (s.q && (s.q.includes('/') || s.q.includes('|') || s.q.includes('-') || s.q.includes(':'))) {
              const full = s.q + (s.a && s.a !== "Good answer!" && s.a !== "Trả lời tự nhiên bằng tiếng Anh" ? ' / ' + s.a : '');
              const parsed = parseQuestionAnswerLine(full);
              if (parsed.q && parsed.a) {
                s.q = parsed.q;
                s.a = parsed.a;
                updated = true;
              }
            }
          });
        }
      });
      if (updated) {
        localStorage.setItem('ekm_custom_lessons', JSON.stringify(customs));
      }
    }
  } catch (e) {
    console.warn("Migration notice:", e);
  }
}

// Save Custom Lesson
function saveCustomLesson() {
  const gradeInput = document.getElementById('lessonGradeInput');
  const titleInput = document.getElementById('lessonTitleInput');
  const textarea = document.getElementById('lessonSentencesInput');

  const grade = parseInt(gradeInput ? gradeInput.value : 1) || 1;
  const title = (titleInput && titleInput.value.trim()) ? titleInput.value.trim() : `Bài học tự tạo Lớp ${grade}`;
  const rawText = textarea ? textarea.value.trim() : "";

  if (!rawText) {
    showToast("⚠️ Vui lòng nhập ít nhất vài mẫu câu hoặc bấm 'AI Sinh Mẫu Câu'!", "warning");
    return;
  }

  const rawLines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const sentences = [];
  const defaultEmojis = ["🌟", "🎯", "💡", "🚀", "🦄", "🐶", "🍎", "⚽", "📖", "🎈", "🎨", "🌈"];

  rawLines.forEach((line, idx) => {
    const { q, a } = parseQuestionAnswerLine(line);
    if (q) {
      sentences.push({
        q: q,
        a: a || "Good answer!",
        emoji: defaultEmojis[idx % defaultEmojis.length]
      });
    }
  });

  if (sentences.length < 4) {
    showToast("⚠️ Bài học nên có ít nhất 4 câu hỏi để chơi Baamboozle vui nhất!", "warning");
    return;
  }

  const newLesson = {
    id: `custom_lesson_${Date.now()}`,
    grade: grade,
    title: title,
    sentences: sentences,
    isCustom: true
  };

  // Save to localStorage
  try {
    let customs = [];
    const saved = localStorage.getItem('ekm_custom_lessons');
    if (saved) customs = JSON.parse(saved);
    customs.unshift(newLesson);
    localStorage.setItem('ekm_custom_lessons', JSON.stringify(customs));
  } catch (e) {
    console.warn("Error saving custom lesson:", e);
  }

  // Update Baam state and select this lesson
  BaamState.selectedLessonId = newLesson.id;
  renderBaamLessonSelect();
  initBaamboozleGame();

  closeModal('addLessonModal');
  switchView('view-baamboozle');
  triggerConfetti();
  playSoundPowerup();
  addXP(30, "Tạo bài học mới & lập đấu trường Baamboozle");
  showToast(`🎉 Đã tạo thành công bài học "${title}"! Sẵn sàng đấu Baamboozle!`, "success");
}

// Initialize Baamboozle Arena UI listeners
function initBaamboozleUI() {
  migrateExistingCustomLessons();
  renderBaamLessonSelect();
  if (!BaamState.isGameActive || BaamState.tiles.length === 0) {
    initBaamboozleGame();
  }
  updateTeamNamesUI();
  loadStudentRosters();
}

function initBaamboozleEngine() {
  migrateExistingCustomLessons();
  renderBaamLessonSelect();
  initBaamboozleGame();
  updateTeamNamesUI();
  loadStudentRosters();
  initRosterInputListeners();

  // Restart match button
  const restartBtn = document.getElementById('baamRestartGameBtn');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartBaamboozleGame);
  }

  // Listen Prompt Audio Button
  const listenPromptBtn = document.getElementById('baamListenPromptBtn');
  if (listenPromptBtn) {
    listenPromptBtn.addEventListener('click', () => {
      if (BaamState.activeTile && BaamState.activeTile.q) {
        speakWord(BaamState.activeTile.q);
      }
    });
  }

  // Student Input & Check Button
  const studentCheckBtn = document.getElementById('baamStudentCheckBtn');
  if (studentCheckBtn) {
    studentCheckBtn.addEventListener('click', handleBaamStudentCheck);
  }
  const studentInput = document.getElementById('baamStudentAnswerInput');
  if (studentInput) {
    studentInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleBaamStudentCheck();
    });
  }

  // Reveal Answer Button
  const revealAnswerBtn = document.getElementById('baamRevealAnswerBtn');
  if (revealAnswerBtn) {
    revealAnswerBtn.addEventListener('click', handleBaamRevealAnswer);
  }

  // Correct Button (+20)
  const correctBtn = document.getElementById('baamAnswerCorrectBtn');
  if (correctBtn) {
    correctBtn.addEventListener('click', handleBaamAnswerCorrect);
  }

  // Wrong Button (0)
  const wrongBtn = document.getElementById('baamAnswerWrongBtn');
  if (wrongBtn) {
    wrongBtn.addEventListener('click', handleBaamAnswerWrong);
  }

  // Penalty Button (-10)
  const penaltyBtn = document.getElementById('baamAnswerPenaltyBtn');
  if (penaltyBtn) {
    penaltyBtn.addEventListener('click', handleBaamAnswerPenalty);
  }

  // Next Turn After Correct Answer
  const proceedTurnBtn = document.getElementById('baamProceedTurnBtn');
  if (proceedTurnBtn) {
    proceedTurnBtn.addEventListener('click', () => {
      markActiveTileCompleted();
    });
  }

  // Next Turn After Wrong / Reveal Answer
  const proceedWrongBtn = document.getElementById('baamProceedWrongTurnBtn');
  if (proceedWrongBtn) {
    proceedWrongBtn.addEventListener('click', () => {
      markActiveTileCompleted();
    });
  }

  // Powerup OK Button
  const powerupOkBtn = document.getElementById('baamPowerupOkBtn');
  if (powerupOkBtn) {
    powerupOkBtn.addEventListener('click', handleBaamPowerupConfirm);
  }
}

function initAddLessonModal() {
  const openBtn = document.getElementById('openAddLessonBtn');
  if (openBtn) {
    openBtn.addEventListener('click', () => openModal('addLessonModal'));
  }

  const aiBtn = document.getElementById('aiGenerateSentencesBtn');
  if (aiBtn) {
    aiBtn.addEventListener('click', generateAISentences);
  }

  const saveBtn = document.getElementById('saveLessonBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveCustomLesson);
  }
}

// ==========================================================================
// 13. Audio Synthesis: Cheer & Applause & Creative Funny Fail Sound
// ==========================================================================

// Sound when answering correctly: "Yeah!" cheering + crowd applause
function playSoundCheerAndApplause() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 1. Triumphant Major Chords (C5, E5, G5, C6, E6)
    const fanfareNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    fanfareNotes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.22, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.45);
    });

    // 2. Realistic Clapping / Applause Synthesis using Filtered Noise Bursts
    const bufferSize = ctx.sampleRate * 1.4; // 1.4 seconds of applause
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    // Bandpass filter to model acoustic hand claps (~1200Hz)
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(1.8, now);

    // Clapping rhythmic bursts envelope
    const clapGain = ctx.createGain();
    clapGain.gain.setValueAtTime(0.01, now + 0.2);
    
    // Simulate multiple staggered claps
    const clapTimes = [0.22, 0.32, 0.40, 0.49, 0.58, 0.67, 0.76, 0.85, 0.95, 1.05, 1.15, 1.25];
    clapTimes.forEach(t => {
      clapGain.gain.setValueAtTime(0.35, now + t);
      clapGain.gain.exponentialRampToValueAtTime(0.02, now + t + 0.06);
    });
    clapGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

    whiteNoise.connect(filter);
    filter.connect(clapGain);
    clapGain.connect(ctx.destination);

    whiteNoise.start(now + 0.2);
    whiteNoise.stop(now + 1.4);

    // 3. Spoken voice: "Yeah! Hoan hô bé giỏi quá!"
    if ('speechSynthesis' in window) {
      setTimeout(() => {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance("Yeah! Excellent job!");
        utter.lang = 'en-US';
        utter.rate = 1.0;
        utter.pitch = 1.25; // Joyful kid pitch
        window.speechSynthesis.speak(utter);
      }, 100);
    }
  } catch (e) {
    console.warn("Cheer sound error:", e);
  }
}

// Creative fail sound: Cartoon "Boing-Boing-Wobble!" 🪀 + Comical Slide
// Âm thanh mỗi nhịp rương kho báu nhảy tưng (tăng dần cao độ)
function playChestJumpSound(jumpIndex = 1) {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const baseFreq = jumpIndex === 1 ? 260 : jumpIndex === 2 ? 360 : 490;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.18);

    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  } catch (e) {
    console.warn("Chest jump sound error:", e);
  }
}

// Âm thanh mìn nổ (Bomb Explosion)
function playBombExplosionSound() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Sub-bass pitch drop (boom)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.55);

    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);

    // Noise burst
    const bufferSize = Math.floor(ctx.sampleRate * 0.45);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(80, now + 0.45);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.38, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.45);
  } catch (e) {
    console.warn("Bomb sound error:", e);
  }
}

function playSoundFunnyBoing() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 1. Cartoon Spring Boing (Rapid Frequency Modulation)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Frequency sweeps up and wobbles like a twanging ruler/spring
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.25);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.38);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.55);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);

    // 2. Comical descending trombone wah-wah
    const trombone = ctx.createOscillator();
    const tbGain = ctx.createGain();
    trombone.type = 'sawtooth';
    trombone.frequency.setValueAtTime(320, now + 0.2);
    trombone.frequency.linearRampToValueAtTime(220, now + 0.65);

    tbGain.gain.setValueAtTime(0.18, now + 0.2);
    tbGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    trombone.connect(tbGain);
    tbGain.connect(ctx.destination);
    trombone.start(now + 0.2);
    trombone.stop(now + 0.7);

    // 3. Gentle friendly speech reminder
    if ('speechSynthesis' in window) {
      setTimeout(() => {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance("Oh no, try again!");
        utter.lang = 'en-US';
        utter.rate = 0.95;
        utter.pitch = 1.1;
        window.speechSynthesis.speak(utter);
      }, 350);
    }
  } catch (e) {
    console.warn("Funny sound error:", e);
  }
}

// ==========================================================================
// 14. AI Picture & Sentence Cloze Game Studio
// ==========================================================================

// Default curated question bank with high-quality photos & sentences
const DEFAULT_AI_PICTURE_QUESTIONS = [
  {
    id: "ai_q_1",
    type: "picture_word",
    questionTitle: "What animal is this?",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    vocab: "Cat",
    phonetic: "/kæt/",
    meaning: "Con mèo",
    fullSentence: "The cat is sleeping peacefully on the warm sofa.",
    sentenceMeaning: "Con mèo đang ngủ ngoan ngoãn trên chiếc ghế sô-pha ấm áp.",
    targetWord: "cat",
    clozeSentence: "The [ _______ ] is sleeping peacefully on the warm sofa.",
    distractors: ["cat", "dog", "bird", "fish"]
  },
  {
    id: "ai_q_2",
    type: "picture_word",
    questionTitle: "What fruit is this in English?",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80",
    vocab: "Apple",
    phonetic: "/ˈæp.əl/",
    meaning: "Quả táo",
    fullSentence: "I enjoy eating a sweet red apple every morning.",
    sentenceMeaning: "Tôi rất thích ăn một quả táo đỏ ngọt ngào mỗi buổi sáng.",
    targetWord: "apple",
    clozeSentence: "I enjoy eating a sweet red [ _______ ] every morning.",
    distractors: ["apple", "banana", "orange", "grape"]
  },
  {
    id: "ai_q_3",
    type: "picture_word",
    questionTitle: "What animal is this?",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
    vocab: "Dog",
    phonetic: "/dɒɡ/",
    meaning: "Con chó",
    fullSentence: "The friendly dog loves running after the soccer ball.",
    sentenceMeaning: "Chú cún thân thiện rất thích chạy đuổi theo quả bóng đá.",
    targetWord: "dog",
    clozeSentence: "The friendly [ _______ ] loves running after the soccer ball.",
    distractors: ["dog", "cat", "rabbit", "tiger"]
  },
  {
    id: "ai_q_4",
    type: "picture_word",
    questionTitle: "What place is this?",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
    vocab: "School",
    phonetic: "/skuːl/",
    meaning: "Trường học",
    fullSentence: "We go to primary school to learn English with teachers.",
    sentenceMeaning: "Chúng em đến trường tiểu học để học tiếng Anh cùng thầy cô.",
    targetWord: "school",
    clozeSentence: "We go to primary [ _______ ] to learn English with teachers.",
    distractors: ["school", "hospital", "park", "market"]
  },
  {
    id: "ai_q_5",
    type: "picture_word",
    questionTitle: "What food is this in English?",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    vocab: "Pizza",
    phonetic: "/ˈpiːt.sə/",
    meaning: "Bánh pizza",
    fullSentence: "My family shares a hot cheese pizza for dinner.",
    sentenceMeaning: "Cả gia đình em cùng thưởng thức món bánh pizza phô mai nóng hổi cho bữa tối.",
    targetWord: "pizza",
    clozeSentence: "My family shares a hot cheese [ _______ ] for dinner.",
    distractors: ["pizza", "bread", "soup", "noodles"]
  },
  {
    id: "ai_q_6",
    type: "picture_word",
    questionTitle: "What job is this?",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    vocab: "Doctor",
    phonetic: "/ˈdɒk.tər/",
    meaning: "Bác sĩ",
    fullSentence: "The kind doctor takes great care of sick children.",
    sentenceMeaning: "Bác sĩ tận tình chăm sóc chu đáo cho các bệnh nhi.",
    targetWord: "doctor",
    clozeSentence: "The kind [ _______ ] takes great care of sick children.",
    distractors: ["doctor", "teacher", "pilot", "driver"]
  },
  {
    id: "ai_q_7",
    type: "picture_word",
    questionTitle: "Where is this place in English?",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    vocab: "Beach",
    phonetic: "/biːtʃ/",
    meaning: "Bãi biển",
    fullSentence: "We build yellow sandcastles when visiting the sunny beach.",
    sentenceMeaning: "Chúng em xây những lâu đài cát vàng khi đi chơi bãi biển đầy nắng.",
    targetWord: "beach",
    clozeSentence: "We build yellow sandcastles when visiting the sunny [ _______ ].",
    distractors: ["beach", "mountain", "river", "forest"]
  },
  {
    id: "ai_q_8",
    type: "picture_word",
    questionTitle: "What object is this in English?",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
    vocab: "Book",
    phonetic: "/bʊk/",
    meaning: "Quyển sách",
    fullSentence: "Please open your English book on page twenty.",
    sentenceMeaning: "Xin mời mở quyển sách tiếng Anh của bạn ở trang số hai mươi.",
    targetWord: "book",
    clozeSentence: "Please open your English [ _______ ] on page twenty.",
    distractors: ["book", "ruler", "pencil", "bag"]
  },
  {
    id: "ai_q_9",
    type: "picture_word",
    questionTitle: "What vehicle is this in English?",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80",
    vocab: "Bicycle",
    phonetic: "/ˈbaɪ.sɪ.kəl/",
    meaning: "Xe đạp",
    fullSentence: "He rides his blue bicycle around the neighborhood park.",
    sentenceMeaning: "Cậu bé đạp chiếc xe đạp màu xanh dạo quanh công viên khu phố.",
    targetWord: "bicycle",
    clozeSentence: "He rides his blue [ _______ ] around the neighborhood park.",
    distractors: ["bicycle", "airplane", "bus", "train"]
  },
  {
    id: "ai_q_10",
    type: "picture_word",
    questionTitle: "What animal is this?",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=80",
    vocab: "Bird",
    phonetic: "/bɜːd/",
    meaning: "Con chim",
    fullSentence: "The little blue bird sings cheerful melodies in the morning.",
    sentenceMeaning: "Chú chim nhỏ màu xanh cất tiếng hót líu lo vui vẻ vào mỗi sáng.",
    targetWord: "bird",
    clozeSentence: "The little blue [ _______ ] sings cheerful melodies in the morning.",
    distractors: ["bird", "fish", "duck", "chicken"]
  }
];

// Presets for the creator thumbnail gallery
const CREATOR_IMAGE_PRESETS = [
  {
    name: "Cat (Mèo)",
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    vocab: "Cat",
    phonetic: "/kæt/",
    meaning: "Con mèo",
    sentence: "The cat is sleeping peacefully on the sofa.",
    sentenceMeaning: "Con mèo đang ngủ ngoan ngoãn trên ghế sô-pha."
  },
  {
    name: "Apple (Táo)",
    url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80",
    vocab: "Apple",
    phonetic: "/ˈæp.əl/",
    meaning: "Quả táo",
    sentence: "I eat a fresh sweet apple every morning.",
    sentenceMeaning: "Tôi ăn một quả táo tươi ngọt mỗi buổi sáng."
  },
  {
    name: "Dog (Chó)",
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
    vocab: "Dog",
    phonetic: "/dɒɡ/",
    meaning: "Con chó",
    sentence: "The cheerful dog plays in the garden.",
    sentenceMeaning: "Chú chó vui vẻ đang chơi đùa trong vườn."
  },
  {
    name: "School (Trường)",
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
    vocab: "School",
    phonetic: "/skuːl/",
    meaning: "Trường học",
    sentence: "We go to school to learn good things.",
    sentenceMeaning: "Chúng em đến trường để học những điều hay."
  },
  {
    name: "Pizza (Bánh)",
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    vocab: "Pizza",
    phonetic: "/ˈpiːt.sə/",
    meaning: "Bánh pizza",
    sentence: "We love eating hot cheese pizza together.",
    sentenceMeaning: "Chúng mình thích cùng ăn bánh pizza phô mai nóng hổi."
  },
  {
    name: "Doctor (Bác sĩ)",
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
    vocab: "Doctor",
    phonetic: "/ˈdɒk.tər/",
    meaning: "Bác sĩ",
    sentence: "The doctor helps people stay healthy.",
    sentenceMeaning: "Bác sĩ giúp đỡ mọi người luôn khỏe mạnh."
  },
  {
    name: "Beach (Biển)",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    vocab: "Beach",
    phonetic: "/biːtʃ/",
    meaning: "Bãi biển",
    sentence: "The sunny beach has yellow sand and blue waves.",
    sentenceMeaning: "Bãi biển đầy nắng có bờ cát vàng và sóng xanh."
  },
  {
    name: "Book (Sách)",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
    vocab: "Book",
    phonetic: "/bʊk/",
    meaning: "Quyển sách",
    sentence: "Reading a good book gives us wisdom.",
    sentenceMeaning: "Đọc một cuốn sách hay mang lại cho ta tri thức."
  }
];

// Active Studio State
const AiStudioState = {
  currentMode: 'play', // 'play' or 'create'
  creatorQuestionType: 'picture_word', // 'picture_word' or 'sentence_cloze'
  currentIndex: 0,
  score: 0,
  streak: 0,
  questions: [],
  selectedCreatorImage: "",
  previewClozeData: null
};

// Storage key for persisting all created and active questions in browser
const AI_QUESTIONS_STORAGE_KEY = 'ekm_ai_questions_bank';

// Load questions from localStorage (guarantees questions created by user are always preserved)
function getSavedAiQuestions() {
  try {
    const saved = localStorage.getItem(AI_QUESTIONS_STORAGE_KEY);
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
    // Default to empty array so user starts with a completely clean database
    return [];
  } catch (e) {
    console.warn("Error reading questions bank:", e);
    return [];
  }
}

// Save active question bank to localStorage
function saveAiQuestionsBank() {
  try {
    localStorage.setItem(AI_QUESTIONS_STORAGE_KEY, JSON.stringify(AiStudioState.questions));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
}

function getAllAiQuestions() {
  if (AiStudioState.questions && Array.isArray(AiStudioState.questions)) {
    return AiStudioState.questions;
  }
  return getSavedAiQuestions();
}

// Select question type in Creator Studio: 'picture_word' or 'sentence_cloze'
function selectCreatorQuestionType(type) {
  AiStudioState.creatorQuestionType = type;

  const cardPic = document.getElementById('qTypePictureWord');
  const cardCloze = document.getElementById('qTypeSentenceCloze');
  const clozeSteps = document.getElementById('clozeModeSteps');
  const vocabLabel = document.getElementById('creatorVocabStepLabel');
  const stepQTitle = document.getElementById('stepQuestionTitle');
  const previewBox = document.getElementById('creatorAiPreviewBox');

  if (type === 'picture_word') {
    if (cardPic) cardPic.classList.add('active');
    if (cardCloze) cardCloze.classList.remove('active');
    if (clozeSteps) clozeSteps.style.display = 'none';
    if (stepQTitle) stepQTitle.style.display = 'block';
    if (previewBox) previewBox.style.display = 'none';
    if (vocabLabel) vocabLabel.textContent = '3. Từ Vựng Đáp Án Đúng (Tiếng Anh):';
  } else {
    if (cardCloze) cardCloze.classList.add('active');
    if (cardPic) cardPic.classList.remove('active');
    if (clozeSteps) clozeSteps.style.display = 'block';
    if (stepQTitle) stepQTitle.style.display = 'none';
    if (vocabLabel) vocabLabel.textContent = '3. Từ Vựng Chính (Tiếng Anh):';
  }
}
window.selectCreatorQuestionType = selectCreatorQuestionType;

// Switch between 'play' and 'create' sub-modes
function switchStudioMode(mode) {
  AiStudioState.currentMode = mode;

  const btnPlay = document.getElementById('btnModeAiPlay');
  const btnCreate = document.getElementById('btnModeAiCreate');
  const viewPlay = document.getElementById('aiStudioPlayMode');
  const viewCreate = document.getElementById('aiStudioCreateMode');

  if (mode === 'play') {
    if (btnPlay) btnPlay.classList.add('active');
    if (btnCreate) btnCreate.classList.remove('active');
    if (viewPlay) viewPlay.classList.add('active');
    if (viewCreate) viewCreate.classList.remove('active');
    loadAiGameQuestion();
  } else {
    if (btnCreate) btnCreate.classList.add('active');
    if (btnPlay) btnPlay.classList.remove('active');
    if (viewCreate) viewCreate.classList.add('active');
    if (viewPlay) viewPlay.classList.remove('active');
    selectCreatorQuestionType(AiStudioState.creatorQuestionType || 'picture_word');
    renderCreatorPresets();
    renderCreatorQuestionsList();
  }
}

// Initialize AI Studio
function initAiStudioUI() {
  AiStudioState.questions = getSavedAiQuestions();
  AiStudioState.currentIndex = 0;
  AiStudioState.score = 0;
  AiStudioState.streak = 0;
  loadAiGameQuestion();
  renderCreatorPresets();
  renderCreatorQuestionsList();
}

// Load current question in Game Player
function loadAiGameQuestion() {
  const qList = AiStudioState.questions;
  const emptyState = document.getElementById('aiPlayEmptyState');
  const activeStage = document.getElementById('aiPlayActiveStage');

  if (!qList || qList.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (activeStage) activeStage.style.display = 'none';
    const progressText = document.getElementById('aiGameProgressText');
    const progressFill = document.getElementById('aiGameProgressFill');
    if (progressText) progressText.textContent = `0 / 0`;
    if (progressFill) progressFill.style.width = `0%`;
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (activeStage) activeStage.style.display = 'block';

  const idx = AiStudioState.currentIndex % AiStudioState.questions.length;
  const q = AiStudioState.questions[idx];

  // Update progress
  const progressText = document.getElementById('aiGameProgressText');
  const progressFill = document.getElementById('aiGameProgressFill');
  const scoreEl = document.getElementById('aiGameScore');
  const streakEl = document.getElementById('aiGameStreak');

  if (progressText) progressText.textContent = `Câu ${idx + 1} / ${AiStudioState.questions.length}`;
  if (progressFill) progressFill.style.width = `${((idx + 1) / AiStudioState.questions.length) * 100}%`;
  if (scoreEl) scoreEl.textContent = AiStudioState.score;
  if (streakEl) streakEl.textContent = AiStudioState.streak;

  // Update Picture Image
  const imgEl = document.getElementById('aiPlayImage');
  if (imgEl) {
    imgEl.src = q.image;
    imgEl.alt = q.vocab || "Minh họa câu đố";
  }

  // Determine mode: picture_word vs sentence_cloze
  const isPictureWord = (q.type === 'picture_word') || (!q.clozeSentence && !q.fullSentence);
  const qTitleBanner = document.getElementById('aiPlayQuestionTitleBanner');
  const qTitleEl = document.getElementById('aiPlayQuestionTitle');
  const wordTaskCard = document.getElementById('aiPlayWordTaskCard');
  const clozeCard = document.getElementById('aiPlayClozeSentenceCard');
  const stageTag = document.getElementById('aiPlayStageTag');
  const speakSentenceBtn = document.getElementById('aiPlaySpeakSentenceBtn');
  const taskMeaningHint = document.getElementById('aiPlayTaskMeaningHint');
  const taskTitle = document.getElementById('aiPlayTaskTitle');
  const inputLabel = document.getElementById('aiAnswerInputLabel');

  const defaultTitle = isPictureWord ? "What is this in English?" : "Fill in the blank with the correct word";
  const questionTitle = q.questionTitle || defaultTitle;

  if (qTitleBanner) qTitleBanner.style.display = 'flex';
  if (qTitleEl) qTitleEl.textContent = questionTitle;

  if (isPictureWord) {
    // Mode: Picture & Vocabulary Input
    if (wordTaskCard) wordTaskCard.style.display = 'block';
    if (clozeCard) clozeCard.style.display = 'none';
    if (stageTag) stageTag.textContent = '🖼️ Thử thách: Chiếu ảnh & Điền từ vựng đúng';
    if (taskTitle) taskTitle.textContent = questionTitle;
    if (taskMeaningHint) {
      if (q.meaning) {
        taskMeaningHint.innerHTML = `💡 Nghĩa tiếng Việt: <strong>${q.meaning}</strong>`;
        taskMeaningHint.style.display = 'inline-block';
      } else {
        taskMeaningHint.style.display = 'none';
      }
    }
    if (inputLabel) inputLabel.textContent = 'Nhập từ vựng tiếng Anh đúng với bức ảnh:';
    if (speakSentenceBtn) {
      speakSentenceBtn.onclick = () => speakWord(q.vocab);
    }
  } else {
    // Mode: Sentence Cloze
    if (wordTaskCard) wordTaskCard.style.display = 'none';
    if (clozeCard) clozeCard.style.display = 'block';
    if (stageTag) stageTag.textContent = '📝 Thử thách: Điền từ khuyết trong mẫu câu';
    if (inputLabel) inputLabel.textContent = 'Nhập từ vựng thích hợp vào ô trống:';

    const sentenceDisplay = document.getElementById('aiPlaySentenceDisplay');
    const sentenceMeaning = document.getElementById('aiPlaySentenceMeaning');
    if (sentenceDisplay && q.clozeSentence) {
      const clozeFormatted = q.clozeSentence.replace(
        /\[\s*______+\s*\]/g,
        `<span class="cloze-blank-slot" id="activeClozeSlot">? ? ?</span>`
      );
      sentenceDisplay.innerHTML = clozeFormatted;
    }
    if (sentenceMeaning) {
      sentenceMeaning.textContent = q.sentenceMeaning ? `"${q.sentenceMeaning}"` : "";
    }
    if (speakSentenceBtn) {
      speakSentenceBtn.onclick = () => speakWord(q.fullSentence || q.vocab);
    }
  }

  // Reset Input Box
  const inputEl = document.getElementById('aiAnswerInput');
  if (inputEl) {
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();
  }

  const clearBtn = document.getElementById('aiAnswerClearBtn');
  if (clearBtn && inputEl) {
    clearBtn.onclick = () => {
      inputEl.value = "";
      updateActiveClozeSlotText("? ? ?");
      inputEl.focus();
    };
  }

  // Dynamic Word Bank Chips
  const wordBankContainer = document.getElementById('aiPlayWordBank');
  if (wordBankContainer) {
    wordBankContainer.innerHTML = '';
    const distractorsList = (q.distractors && q.distractors.length > 0)
      ? [...q.distractors]
      : [q.targetWord || q.vocab, "friend", "happy", "great"];

    const chips = [...distractorsList];
    // Shuffle chips
    for (let i = chips.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chips[i], chips[j]] = [chips[j], chips[i]];
    }

    chips.forEach(w => {
      if (!w) return;
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'word-chip';
      chip.textContent = w;
      chip.onclick = () => {
        if (inputEl && !inputEl.disabled) {
          inputEl.value = w;
          updateActiveClozeSlotText(w);
        }
      };
      wordBankContainer.appendChild(chip);
    });
  }

  // Bind typing listener to update slot text in real-time
  if (inputEl) {
    inputEl.oninput = () => {
      updateActiveClozeSlotText(inputEl.value.trim() || "? ? ?");
    };
    inputEl.onkeydown = (e) => {
      if (e.key === 'Enter') submitAiGameAnswer();
    };
  }

  // Reset Buttons and Feedback Banner
  const submitBtn = document.getElementById('aiGameSubmitBtn');
  const nextBtn = document.getElementById('aiGameNextBtn');
  const hintBtn = document.getElementById('aiGameHintBtn');
  const revealBtn = document.getElementById('aiGameRevealBtn');
  const feedbackBanner = document.getElementById('aiFeedbackBanner');

  if (submitBtn) submitBtn.style.display = 'block';
  if (nextBtn) nextBtn.style.display = 'none';
  if (hintBtn) hintBtn.disabled = false;
  if (revealBtn) revealBtn.style.display = 'inline-block';
  if (feedbackBanner) feedbackBanner.style.display = 'none';
}

function updateActiveClozeSlotText(text) {
  const slot = document.getElementById('activeClozeSlot');
  if (slot) slot.textContent = text;
}

// Reveal friendly hint
function revealAiGameHint() {
  const qList = AiStudioState.questions;
  if (!qList || qList.length === 0) return;
  const q = qList[AiStudioState.currentIndex % qList.length];
  const inputEl = document.getElementById('aiAnswerInput');
  const target = (q.targetWord || q.vocab || "").trim();
  if (!target) return;

  const firstLetter = target.charAt(0).toUpperCase();
  showToast(`💡 Gợi ý: Từ bắt đầu bằng chữ cái "${firstLetter}" và có ${target.length} chữ cái!`, "info");
  if (inputEl && !inputEl.value) {
    inputEl.value = firstLetter;
    updateActiveClozeSlotText(firstLetter + "...");
  }
}

// Teacher / Student reveals the correct answer directly
function revealDirectAnswer() {
  const qList = AiStudioState.questions;
  if (!qList || qList.length === 0) return;
  const q = qList[AiStudioState.currentIndex % qList.length];
  const inputEl = document.getElementById('aiAnswerInput');
  const feedbackBanner = document.getElementById('aiFeedbackBanner');
  const fbIcon = document.getElementById('aiFbIcon');
  const fbTitle = document.getElementById('aiFbTitle');
  const fbDesc = document.getElementById('aiFbDesc');
  const submitBtn = document.getElementById('aiGameSubmitBtn');
  const nextBtn = document.getElementById('aiGameNextBtn');

  const answer = (q.targetWord || q.vocab || "").trim();
  if (inputEl) {
    inputEl.value = answer;
    inputEl.disabled = true;
    updateActiveClozeSlotText(answer);
  }

  if (feedbackBanner) {
    feedbackBanner.className = 'ai-feedback-banner info';
    feedbackBanner.style.display = 'flex';
    if (fbIcon) fbIcon.textContent = '💡';
    if (fbTitle) fbTitle.textContent = `Đáp Án Đúng: "${answer}"`;
    if (fbDesc) {
      if (q.meaning) {
        fbDesc.textContent = `Nghĩa tiếng Việt: "${q.meaning}" ${q.fullSentence ? `| Câu mẫu: ${q.fullSentence}` : ''}`;
      } else {
        fbDesc.textContent = `Từ vựng chính xác cho bức ảnh này là "${answer}".`;
      }
    }
  }

  if (submitBtn) submitBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'block';

  speakWord(answer);
  showToast(`👀 Đáp án là: "${answer}"`, "info");
}
window.revealDirectAnswer = revealDirectAnswer;

// Submit answer verification (Check)
function submitAiGameAnswer() {
  const qList = AiStudioState.questions;
  if (!qList || qList.length === 0) return;
  const q = qList[AiStudioState.currentIndex % qList.length];
  const inputEl = document.getElementById('aiAnswerInput');
  const feedbackBanner = document.getElementById('aiFeedbackBanner');
  const fbIcon = document.getElementById('aiFbIcon');
  const fbTitle = document.getElementById('aiFbTitle');
  const fbDesc = document.getElementById('aiFbDesc');
  const submitBtn = document.getElementById('aiGameSubmitBtn');
  const nextBtn = document.getElementById('aiGameNextBtn');

  if (!inputEl) return;
  const userAns = inputEl.value.trim().toLowerCase();
  const targetAns = (q.targetWord || q.vocab || "").trim().toLowerCase();

  if (!userAns) {
    showToast("⚠️ Vui lòng nhập từ hoặc bấm chọn 1 thẻ từ gợi ý bên dưới trước khi kiểm tra!", "warning");
    inputEl.focus();
    return;
  }

  const isPictureWord = (q.type === 'picture_word') || (!q.clozeSentence && !q.fullSentence);

  if (userAns === targetAns) {
    // CORRECT ANSWER!
    playSoundCheerAndApplause();
    triggerConfetti();

    AiStudioState.score += 20;
    AiStudioState.streak += 1;
    addXP(25, `Hoàn thành chính xác từ vựng: ${q.vocab}`);

    const scoreEl = document.getElementById('aiGameScore');
    const streakEl = document.getElementById('aiGameStreak');
    if (scoreEl) scoreEl.textContent = AiStudioState.score;
    if (streakEl) streakEl.textContent = AiStudioState.streak;

    if (feedbackBanner) {
      feedbackBanner.className = 'ai-feedback-banner success';
      feedbackBanner.style.display = 'flex';
      if (fbIcon) fbIcon.innerHTML = '<svg width="40" height="40"><use href="#robot-kha-happy"></use></svg>';
      if (fbTitle) fbTitle.textContent = 'Chính xác tuyệt vời! 👏';
      if (fbDesc) {
        if (isPictureWord) {
          fbDesc.textContent = `Học sinh đã trả lời đúng từ: "${q.vocab}" ${q.meaning ? `(${q.meaning})` : ''}`;
        } else {
          fbDesc.textContent = `Đã hoàn thành đúng mẫu câu: "${q.fullSentence}"`;
        }
      }
    }

    updateActiveClozeSlotText(`✅ ${q.targetWord || q.vocab}`);
    inputEl.disabled = true;
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'block';

    speakWord(q.vocab || q.targetWord);
    showToast("🎉 Hoan hô! Đáp án hoàn toàn chính xác!", "success");
  } else {
    // WRONG ANSWER!
    playSoundFunnyBoing();

    if (feedbackBanner) {
      feedbackBanner.className = 'ai-feedback-banner wrong';
      feedbackBanner.style.display = 'flex';
      if (fbIcon) fbIcon.innerHTML = '<svg width="40" height="40"><use href="#robot-kha-sad"></use></svg>';
      if (fbTitle) fbTitle.textContent = 'Chưa chính xác rồi!';
      if (fbDesc) {
        fbDesc.textContent = `Hãy quan sát kỹ bức ảnh và thử lại hoặc bấm "Xem Đáp Án" để kiểm tra nhé!`;
      }
    }

    // Shake animation
    inputEl.style.animation = 'none';
    inputEl.offsetHeight; // reflow
    inputEl.style.animation = 'shake 0.4s ease';

    showToast("Ối chà, câu trả lời chưa đúng, hãy thử lại nào! 🪀", "warning");
    inputEl.focus();
  }
}

// Next question
function nextAiGameQuestion() {
  AiStudioState.currentIndex++;
  if (AiStudioState.currentIndex >= AiStudioState.questions.length) {
    triggerConfetti();
    playSoundCheerAndApplause();
    showToast("🏆 Hoan hô! Bé đã hoàn thành tất cả các câu đố hình ảnh!", "success");
    AiStudioState.currentIndex = 0;
  }
  loadAiGameQuestion();
}

function restartAiPictureGame() {
  AiStudioState.currentIndex = 0;
  AiStudioState.score = 0;
  AiStudioState.streak = 0;
  loadAiGameQuestion();
  showToast("🔄 Trò chơi đã được bắt đầu lại!", "info");
}

// --------------------------------------------------------------------------
// Creator Studio: Image Upload, Presets & Cloze Generator
// --------------------------------------------------------------------------

function renderCreatorPresets() {
  const container = document.getElementById('creatorPresetThumbs');
  if (!container) return;

  container.innerHTML = '';
  CREATOR_IMAGE_PRESETS.forEach(p => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset-thumb-btn';
    btn.title = p.name;
    btn.innerHTML = `<img src="${p.url}" alt="${p.name}">`;
    btn.onclick = () => selectCreatorPreset(p);
    container.appendChild(btn);
  });
}

function selectCreatorPreset(preset) {
  AiStudioState.selectedCreatorImage = preset.url;

  const previewWrap = document.getElementById('creatorImagePreviewWrap');
  const previewImg = document.getElementById('creatorImagePreview');
  const urlInput = document.getElementById('creatorImageUrlInput');
  const vocabInput = document.getElementById('creatorVocabInput');
  const meaningInput = document.getElementById('creatorMeaningInput');
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');

  if (previewWrap) previewWrap.style.display = 'block';
  if (previewImg) previewImg.src = preset.url;
  if (urlInput) urlInput.value = preset.url;
  if (vocabInput) vocabInput.value = preset.vocab;
  if (meaningInput) meaningInput.value = preset.meaning;
  if (sentenceInput) sentenceInput.value = preset.sentence;
  if (sentenceMeaningInput) sentenceMeaningInput.value = preset.sentenceMeaning;

  previewAiClozeTransform();
  showToast(`Đã chọn hình ảnh & mẫu câu mẫu: ${preset.name}!`, "info");
}

function removeCreatorImage() {
  AiStudioState.selectedCreatorImage = "";
  const previewWrap = document.getElementById('creatorImagePreviewWrap');
  const previewImg = document.getElementById('creatorImagePreview');
  const urlInput = document.getElementById('creatorImageUrlInput');
  if (previewWrap) previewWrap.style.display = 'none';
  if (previewImg) previewImg.src = "";
  if (urlInput) urlInput.value = "";
}

// ============================================================
// AI Auto-Generate Sentence & Translation for Grade 4 Students
// Teacher only needs to provide image + vocabulary
// ============================================================
const GRADE4_SENTENCE_TEMPLATES = {
  // General template - generates sentence patterns by vocab word
  // Format: { en: "full sentence", vi: "Vietnamese translation" }
  default: [
    { en: "$V is very important for us.", vi: "$M rất quan trọng với chúng ta." },
    { en: "I can see a $V in the picture.", vi: "Tôi có thể thấy $M trong bức tranh." },
    { en: "The $V is my favourite.", vi: "$M là điều tôi yêu thích nhất." },
    { en: "We learn about $V in class.", vi: "Chúng ta học về $M trong lớp học." },
    { en: "A $V is something we see every day.", vi: "$M là thứ chúng ta thấy mỗi ngày." },
    { en: "Let us look at the $V together.", vi: "Hãy cùng nhìn vào $M nào!" },
    { en: "Can you tell me about a $V?", vi: "Bạn có thể kể cho tôi nghe về $M không?" },
    { en: "The $V makes people happy.", vi: "$M làm cho mọi người vui vẻ." },
    { en: "We use $V in our daily life.", vi: "Chúng ta dùng $M trong cuộc sống hàng ngày." },
    { en: "I like to learn more about $V.", vi: "Tôi thích tìm hiểu thêm về $M." }
  ],
  // Keyword-specific sentences for common grade 4 vocabulary
  school: [
    { en: "We go to school to learn English every day.", vi: "Chúng em đến trường học tiếng Anh mỗi ngày." },
    { en: "The school has many classrooms and a big yard.", vi: "Trường học có nhiều phòng học và một sân rộng." },
    { en: "I love going to school with my friends.", vi: "Tôi thích đến trường cùng các bạn." }
  ],
  doctor: [
    { en: "The doctor helps sick people feel better.", vi: "Bác sĩ giúp người bệnh cảm thấy khỏe hơn." },
    { en: "A doctor works at the hospital every day.", vi: "Bác sĩ làm việc ở bệnh viện mỗi ngày." },
    { en: "The doctor checks my temperature carefully.", vi: "Bác sĩ kiểm tra nhiệt độ của tôi cẩn thận." }
  ],
  teacher: [
    { en: "The teacher explains the lesson clearly.", vi: "Cô giáo giải thích bài học rõ ràng." },
    { en: "Our teacher is very kind and helpful.", vi: "Giáo viên của chúng em rất tốt bụng và giỏi." },
    { en: "The teacher writes on the board every day.", vi: "Cô giáo viết lên bảng mỗi ngày." }
  ],
  hospital: [
    { en: "The hospital is a big and clean building.", vi: "Bệnh viện là một tòa nhà lớn và sạch sẽ." },
    { en: "Doctors and nurses work at the hospital.", vi: "Các bác sĩ và y tá làm việc ở bệnh viện." },
    { en: "We go to the hospital when we are sick.", vi: "Chúng ta đến bệnh viện khi bị ốm." }
  ],
  park: [
    { en: "Children love to play in the park after school.", vi: "Các bạn nhỏ thích chơi trong công viên sau giờ học." },
    { en: "The park has many trees and green grass.", vi: "Công viên có nhiều cây xanh và thảm cỏ." },
    { en: "We ride bicycles in the park on Sundays.", vi: "Chúng ta đạp xe trong công viên vào Chủ nhật." }
  ],
  beach: [
    { en: "We build sandcastles on the beach in summer.", vi: "Chúng ta xây lâu đài cát trên bãi biển vào mùa hè." },
    { en: "The beach has golden sand and blue waves.", vi: "Bãi biển có cát vàng và sóng xanh đẹp tuyệt." },
    { en: "I love swimming at the beach with my family.", vi: "Tôi thích bơi ở bãi biển cùng gia đình." }
  ],
  book: [
    { en: "Reading a book helps us learn many new things.", vi: "Đọc sách giúp chúng ta học được nhiều điều mới." },
    { en: "I read a new book every week at the library.", vi: "Tôi đọc một cuốn sách mới mỗi tuần ở thư viện." },
    { en: "My book has colourful pictures and easy words.", vi: "Cuốn sách của tôi có hình ảnh sặc sỡ và từ dễ hiểu." }
  ],
  cat: [
    { en: "The cat sleeps on the soft chair every afternoon.", vi: "Chú mèo ngủ trên chiếc ghế êm mỗi buổi chiều." },
    { en: "I have a cute cat with orange and white fur.", vi: "Tôi có một chú mèo dễ thương với bộ lông cam trắng." },
    { en: "The cat drinks milk from a small bowl.", vi: "Chú mèo uống sữa từ một chiếc bát nhỏ." }
  ],
  dog: [
    { en: "My dog runs and plays in the garden all day.", vi: "Chú chó của tôi chạy nhảy trong vườn cả ngày." },
    { en: "The dog wags its tail when it is happy.", vi: "Chú chó vẫy đuôi khi nó vui." },
    { en: "I take my dog for a walk in the park.", vi: "Tôi dắt chó đi dạo trong công viên." }
  ],
  pilot: [
    { en: "The pilot flies the airplane across the sky.", vi: "Phi công lái máy bay bay qua bầu trời." },
    { en: "A pilot needs to study hard for many years.", vi: "Một phi công cần học chăm chỉ trong nhiều năm." },
    { en: "The pilot wears a special uniform and hat.", vi: "Phi công mặc đồng phục đặc biệt và đội mũ." }
  ],
  police: [
    { en: "The police officer helps keep our streets safe.", vi: "Cảnh sát giúp giữ cho đường phố chúng ta an toàn." },
    { en: "Police officers work hard to protect everyone.", vi: "Các cảnh sát làm việc chăm chỉ để bảo vệ mọi người." }
  ],
  market: [
    { en: "My mother buys fresh vegetables at the market.", vi: "Mẹ tôi mua rau tươi ở chợ mỗi buổi sáng." },
    { en: "The market is busy and colourful in the morning.", vi: "Chợ rất nhộn nhịp và rực rỡ sắc màu vào buổi sáng." },
    { en: "We can find many kinds of food at the market.", vi: "Chúng ta có thể tìm thấy nhiều loại thức ăn ở chợ." }
  ],
  bicycle: [
    { en: "I ride my bicycle to school every morning.", vi: "Tôi đạp xe đến trường mỗi buổi sáng." },
    { en: "My bicycle is blue and has a small basket.", vi: "Chiếc xe đạp của tôi màu xanh và có giỏ nhỏ." }
  ],
  pizza: [
    { en: "We eat hot cheese pizza at the weekend.", vi: "Chúng tôi ăn bánh pizza phô mai nóng vào cuối tuần." },
    { en: "Pizza is a popular food loved by many children.", vi: "Pizza là món ăn phổ biến được nhiều trẻ em yêu thích." }
  ],
  water: [
    { en: "We should drink eight glasses of water every day.", vi: "Chúng ta nên uống tám ly nước mỗi ngày." },
    { en: "Clean water is very important for our health.", vi: "Nước sạch rất quan trọng cho sức khỏe của chúng ta." }
  ]
};

function aiAutoGenerateSentence() {
  const vocabInput = document.getElementById('creatorVocabInput');
  const vocab = vocabInput ? vocabInput.value.trim() : '';

  if (!vocab) {
    showToast('⚠️ Vui lòng nhập từ vựng ở bước 2 trước nhé!', 'warning');
    if (vocabInput) vocabInput.focus();
    return;
  }

  // Show loading state
  const btn = document.getElementById('aiGenerateSentenceBtn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>⏳</span> AI đang tạo mẫu câu...';
  }

  // Small artificial delay for UX feel
  setTimeout(() => {
    const vocabLower = vocab.toLowerCase();
    const key = Object.keys(GRADE4_SENTENCE_TEMPLATES).find(k => vocabLower.includes(k) || k.includes(vocabLower));
    let templates = key ? GRADE4_SENTENCE_TEMPLATES[key] : GRADE4_SENTENCE_TEMPLATES.default;

    // Pick a random template
    const chosen = templates[Math.floor(Math.random() * templates.length)];

    // Replace $V with vocab (capitalized) and $M with meaning
    const meaningInput = document.getElementById('creatorMeaningInput');
    const meaning = meaningInput ? meaningInput.value.trim() : vocab;
    const displayMeaning = meaning || vocab;

    // Capitalise vocab for use in sentences
    const vocabCap = vocab.charAt(0).toUpperCase() + vocab.slice(1);

    const en = chosen.en.replace(/\$V/g, vocabCap).replace(/\$M/g, displayMeaning);
    const vi = chosen.vi.replace(/\$V/g, vocabCap).replace(/\$M/g, displayMeaning);

    // Auto-fill meaning if blank
    if (meaningInput && !meaningInput.value.trim()) {
      meaningInput.value = displayMeaning;
    }

    // Fill results
    const sentenceInput = document.getElementById('creatorSentenceInput');
    const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');
    const resultBox = document.getElementById('aiSentenceResultBox');
    const vocabLabel = document.getElementById('aiResultVocabLabel');
    const step4 = document.getElementById('step4ClozeSection');

    if (sentenceInput) sentenceInput.value = en;
    if (sentenceMeaningInput) sentenceMeaningInput.value = vi;
    if (vocabLabel) vocabLabel.textContent = vocabCap;
    if (resultBox) resultBox.style.display = 'block';
    if (step4) step4.style.display = 'block';

    // Reset button
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<span>🔄</span> AI Tạo Lại Mẫu Câu Khác';
    }

    // Auto run cloze preview
    previewAiClozeTransform();

    showToast(`✨ AI đã tạo mẫu câu cho từ "${vocabCap}" — bạn có thể chỉnh sửa rồi lưu ngay!`, 'success');
    playSoundSuccess();
  }, 800);
}

// AI Cloze transformation logic
function previewAiClozeTransform() {
  const vocabInput = document.getElementById('creatorVocabInput');
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const previewBox = document.getElementById('creatorAiPreviewBox');
  const previewSentence = document.getElementById('creatorAiSentencePreview');
  const previewCorrect = document.getElementById('creatorAiCorrectWordPreview');
  const previewDistractors = document.getElementById('creatorAiDistractorsPreview');

  const vocab = (vocabInput ? vocabInput.value.trim() : "") || "Cat";
  const sentence = (sentenceInput ? sentenceInput.value.trim() : "") || "The cat is sleeping on the mat.";

  const clozeRadio = document.querySelector('input[name="aiClozeMode"]:checked');
  const mode = clozeRadio ? clozeRadio.value : 'vocab';

  let targetWord = vocab.toLowerCase();
  let clozeSentence = sentence;
  let distractors = [];

  const wordsInSentence = sentence.split(/\s+/).map(w => w.replace(/[.,!?;:]/g, ''));

  if (mode === 'vocab') {
    // Blank out exact vocab word
    const regex = new RegExp(`\\b${vocab}\\b`, 'gi');
    if (regex.test(sentence)) {
      clozeSentence = sentence.replace(regex, '[ _______ ]');
      targetWord = vocab.toLowerCase();
    } else {
      // If vocab is not directly in sentence, pick the first word matching or pick first word > 3 letters
      const found = wordsInSentence.find(w => w.toLowerCase() === vocab.toLowerCase()) || wordsInSentence[0];
      targetWord = found.toLowerCase();
      const r = new RegExp(`\\b${found}\\b`, 'i');
      clozeSentence = sentence.replace(r, '[ _______ ]');
    }
  } else if (mode === 'random_word') {
    // Pick a random word from sentence (length > 3)
    const candidates = wordsInSentence.filter(w => w.length >= 4);
    const chosen = candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : wordsInSentence[0];
    targetWord = chosen.toLowerCase();
    const r = new RegExp(`\\b${chosen}\\b`, 'i');
    clozeSentence = sentence.replace(r, '[ _______ ]');
  } else if (mode === 'letters') {
    // Blank out letters within the vocab word: e.g. c _ t
    if (vocab.length > 2) {
      const mid = Math.floor(vocab.length / 2);
      targetWord = vocab[mid].toLowerCase();
      const maskedVocab = vocab.substring(0, mid) + ' _ ' + vocab.substring(mid + 1);
      const r = new RegExp(`\\b${vocab}\\b`, 'i');
      clozeSentence = sentence.replace(r, maskedVocab);
    } else {
      targetWord = vocab.toLowerCase();
      clozeSentence = sentence.replace(new RegExp(`\\b${vocab}\\b`, 'i'), '[ _______ ]');
    }
  }

  // === Semantic Distractor Generator ===
  // Groups by category so distractors are always contextually related
  const SEMANTIC_GROUPS = {
    places: [
      "department store", "supermarket", "bookstore", "cinema", "hospital",
      "school", "park", "library", "museum", "restaurant", "café", "hotel",
      "market", "stadium", "zoo", "airport", "bank", "post office", "pharmacy",
      "bakery", "gym", "swimming pool", "church", "temple", "police station"
    ],
    jobs: [
      "doctor", "teacher", "pilot", "nurse", "engineer", "chef", "farmer",
      "police officer", "firefighter", "dentist", "artist", "scientist",
      "driver", "actor", "singer", "soldier", "astronaut", "lawyer", "vet"
    ],
    animals: [
      "cat", "dog", "bird", "fish", "rabbit", "tiger", "elephant", "lion",
      "monkey", "horse", "cow", "duck", "frog", "snake", "bee", "butterfly",
      "penguin", "giraffe", "bear", "sheep", "chicken", "parrot", "whale"
    ],
    food: [
      "pizza", "bread", "rice", "milk", "apple", "banana", "orange", "egg",
      "soup", "cake", "cookie", "sandwich", "salad", "noodles", "chocolate",
      "ice cream", "juice", "tea", "coffee", "water", "cheese", "yogurt"
    ],
    school_items: [
      "book", "pencil", "ruler", "eraser", "pen", "notebook", "bag",
      "scissors", "glue", "crayon", "desk", "chair", "blackboard", "marker"
    ],
    body_parts: [
      "eye", "nose", "mouth", "ear", "hand", "foot", "head", "arm",
      "leg", "finger", "shoulder", "knee", "tooth", "hair", "back"
    ],
    colors: [
      "red", "blue", "green", "yellow", "orange", "purple", "pink",
      "black", "white", "brown", "grey", "gold", "silver"
    ],
    weather: [
      "sunny", "rainy", "cloudy", "windy", "snowy", "foggy",
      "stormy", "hot", "cold", "warm", "cool"
    ],
    transport: [
      "bicycle", "car", "bus", "train", "airplane", "boat", "motorbike",
      "truck", "taxi", "helicopter", "ship", "subway", "tram"
    ],
    family: [
      "mother", "father", "brother", "sister", "grandmother", "grandfather",
      "uncle", "aunt", "cousin", "baby", "son", "daughter", "parent"
    ],
    actions: [
      "run", "jump", "swim", "sing", "dance", "read", "write", "draw",
      "eat", "sleep", "play", "study", "cook", "walk", "fly", "climb"
    ],
    adjectives: [
      "big", "small", "happy", "sad", "fast", "slow", "tall", "short",
      "beautiful", "funny", "clever", "kind", "brave", "clean", "noisy"
    ]
  };

  // Detect which category the target word belongs to
  function detectSemanticCategory(word) {
    const w = word.toLowerCase();
    for (const [cat, words] of Object.entries(SEMANTIC_GROUPS)) {
      if (words.some(entry => entry.toLowerCase() === w || w.includes(entry.toLowerCase()) || entry.toLowerCase().includes(w))) {
        return cat;
      }
    }
    // Fallback: pick category based on keyword hints
    if (/store|market|shop|mall|plaza|supermarket|center|hospital|school|park|library|airport|bank/.test(w)) return 'places';
    if (/doctor|teacher|pilot|nurse|engineer|chef|farmer|police|driver|actor/.test(w)) return 'jobs';
    if (/cat|dog|fish|bird|lion|tiger|bear|duck|frog|horse/.test(w)) return 'animals';
    if (/bread|rice|milk|apple|pizza|cake|soup|egg|juice/.test(w)) return 'food';
    if (/car|bus|bike|train|boat|plane|truck|taxi/.test(w)) return 'transport';
    if (/red|blue|green|yellow|orange|purple|pink|black|white/.test(w)) return 'colors';
    return null;
  }

  const category = detectSemanticCategory(targetWord);
  let pool;
  if (category && SEMANTIC_GROUPS[category]) {
    // Use words from the same category (excluding the answer itself)
    pool = SEMANTIC_GROUPS[category].filter(w => w.toLowerCase() !== targetWord.toLowerCase());
  } else {
    // If no category detected, extract meaningful content words from the sentence as fallback
    const sentenceWords = sentence
      .split(/\s+/)
      .map(w => w.replace(/[.,!?;:'"]/g, '').toLowerCase())
      .filter(w => w.length >= 4 && w !== targetWord && !['this','that','then','they','them','with','have','from','been','were','will','your','what','when','where','which'].includes(w));
    // Supplement with related academic pool
    const academicPool = ["beautiful", "important", "wonderful", "interesting", "popular", "favourite", "different", "together", "special", "careful"];
    pool = [...new Set([...sentenceWords, ...academicPool])].filter(w => w !== targetWord);
  }

  // Shuffle pool and pick 3 distractors
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Pick best 3 distractors (prefer similar word length ±3 chars)
  const scored = pool.map(w => ({ w, score: Math.abs(w.length - targetWord.length) }));
  scored.sort((a, b) => a.score - b.score);
  const best3 = scored.slice(0, 3).map(x => x.w);
  distractors = [targetWord, ...best3];

  AiStudioState.previewClozeData = {
    targetWord: targetWord,
    clozeSentence: clozeSentence,
    distractors: distractors
  };

  if (previewBox) previewBox.style.display = 'block';
  if (previewSentence) previewSentence.innerHTML = clozeSentence.replace(/\[\s*______+\s*\]/g, `<span class="cloze-blank-slot">? ? ?</span>`);
  if (previewCorrect) previewCorrect.textContent = targetWord;
  if (previewDistractors) previewDistractors.textContent = distractors.join(', ');
}

// Save question created by teacher / user
function saveCreatorQuestion() {
  const type = AiStudioState.creatorQuestionType || 'picture_word';
  const urlInput = document.getElementById('creatorImageUrlInput');
  const titleInput = document.getElementById('creatorQuestionTitleInput');
  const vocabInput = document.getElementById('creatorVocabInput');
  const meaningInput = document.getElementById('creatorMeaningInput');
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');

  const rawVocab = vocabInput ? vocabInput.value.trim() : "";
  if (!rawVocab) {
    showToast("⚠️ Vui lòng nhập từ vựng tiếng Anh trước khi lưu!", "warning");
    if (vocabInput) vocabInput.focus();
    return;
  }

  const imageUrl = AiStudioState.selectedCreatorImage || (urlInput ? urlInput.value.trim() : "") || "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80";
  const vocab = rawVocab;
  const meaning = (meaningInput ? meaningInput.value.trim() : "") || "";
  const questionTitle = (titleInput ? titleInput.value.trim() : "") || (type === 'picture_word' ? "What is this in English?" : "Fill in the blank with the correct word");

  let newQuestion = null;

  if (type === 'picture_word') {
    // Generate distractors for picture word
    const commonDistractorsPool = [
      "apple", "banana", "orange", "grape", "mango", "school", "doctor", "teacher",
      "hospital", "park", "beach", "book", "pencil", "cat", "dog", "bird", "fish",
      "tiger", "lion", "elephant", "car", "bus", "train", "plane", "bicycle", "pizza",
      "water", "house", "garden", "market", "clock", "chair", "table", "window", "door"
    ];
    let pool = commonDistractorsPool.filter(w => w.toLowerCase() !== vocab.toLowerCase());
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    // Prefer words of similar length
    const scored = pool.map(w => ({ w, score: Math.abs(w.length - vocab.length) }));
    scored.sort((a, b) => a.score - b.score);
    const distractors = [vocab.toLowerCase(), ...scored.slice(0, 3).map(x => x.w)];

    newQuestion = {
      id: `custom_ai_q_${Date.now()}`,
      type: 'picture_word',
      questionTitle: questionTitle,
      image: imageUrl,
      vocab: vocab,
      meaning: meaning,
      targetWord: vocab.toLowerCase(),
      distractors: distractors,
      isCustom: true
    };
  } else {
    // sentence_cloze mode
    const sentence = (sentenceInput ? sentenceInput.value.trim() : "") || `I see a ${vocab} in the picture.`;
    const sentenceMeaning = (sentenceMeaningInput ? sentenceMeaningInput.value.trim() : "") || `Tôi nhìn thấy ${meaning || vocab} trong tranh.`;

    previewAiClozeTransform();
    const clozeData = AiStudioState.previewClozeData || {
      targetWord: vocab.toLowerCase(),
      clozeSentence: sentence.replace(new RegExp(`\\b${vocab}\\b`, 'gi'), '[ _______ ]'),
      distractors: [vocab.toLowerCase(), "special", "popular", "careful"]
    };

    newQuestion = {
      id: `custom_ai_q_${Date.now()}`,
      type: 'sentence_cloze',
      questionTitle: questionTitle,
      image: imageUrl,
      vocab: vocab,
      meaning: meaning,
      fullSentence: sentence,
      sentenceMeaning: sentenceMeaning,
      targetWord: clozeData.targetWord,
      clozeSentence: clozeData.clozeSentence,
      distractors: clozeData.distractors,
      isCustom: true
    };
  }

  // Append question to keep sequential order (Câu 1, Câu 2, Câu 3...)
  if (!Array.isArray(AiStudioState.questions)) {
    AiStudioState.questions = [];
  }
  AiStudioState.questions.push(newQuestion);
  saveAiQuestionsBank();

  // Refresh questions list & reset input form for the next question
  renderCreatorQuestionsList();
  resetCreatorFormInputs();

  playSoundCheerAndApplause();
  addXP(20, `Tạo câu đố: ${vocab}`);
  const totalSaved = AiStudioState.questions.length;
  showToast(`💾 Đã lưu câu đố #${totalSaved} ("${vocab}")! Bạn có thể tiếp tục tạo câu tiếp theo.`, "success");
}

// Reset creator form fields so teacher can immediately create the next question
function resetCreatorFormInputs() {
  const vocabInput = document.getElementById('creatorVocabInput');
  const meaningInput = document.getElementById('creatorMeaningInput');
  const urlInput = document.getElementById('creatorImageUrlInput');
  const fileInput = document.getElementById('creatorImageFileInput');
  const titleInput = document.getElementById('creatorQuestionTitleInput');
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');
  const previewWrap = document.getElementById('creatorImagePreviewWrap');
  const previewImg = document.getElementById('creatorImagePreview');
  const resultBox = document.getElementById('aiSentenceResultBox');
  const step4 = document.getElementById('step4ClozeSection');
  const previewBox = document.getElementById('creatorAiPreviewBox');

  if (vocabInput) vocabInput.value = '';
  if (meaningInput) meaningInput.value = '';
  if (urlInput) urlInput.value = '';
  if (fileInput) fileInput.value = '';
  if (sentenceInput) sentenceInput.value = '';
  if (sentenceMeaningInput) sentenceMeaningInput.value = '';
  if (previewWrap) previewWrap.style.display = 'none';
  if (previewImg) previewImg.src = '';
  if (resultBox) resultBox.style.display = 'none';
  if (step4) step4.style.display = 'none';
  if (previewBox) previewBox.style.display = 'none';

  AiStudioState.selectedCreatorImage = '';
  AiStudioState.previewClozeData = null;

  if (titleInput && !titleInput.value) {
    titleInput.value = "What is this in English?";
  }
  if (vocabInput) vocabInput.focus();
}

// Start playing from the very first question created
function startPlayingFromFirstQuestion() {
  if (!AiStudioState.questions || AiStudioState.questions.length === 0) {
    showToast("⚠️ Ngân hàng câu đố hiện đang trống. Hãy tạo câu đố trước khi chơi!", "warning");
    return;
  }
  // Start from question 1
  AiStudioState.currentIndex = 0;
  AiStudioState.score = 0;
  AiStudioState.streak = 0;
  switchStudioMode('play');
  showToast(`🎮 Bắt đầu trò chơi từ Câu 1 (Tổng số: ${AiStudioState.questions.length} câu)!`, "success");
}

// Render Questions List in Creator Mode
function renderCreatorQuestionsList() {
  const container = document.getElementById('creatorQuestionsList');
  const countEl = document.getElementById('creatorQuestionsCount');
  if (!container) return;

  const questions = AiStudioState.questions || [];
  if (countEl) countEl.textContent = questions.length;

  container.innerHTML = '';

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="empty-bank-box" style="background:#f8fafc; border:2.5px dashed #94a3b8; border-radius:16px; padding:32px 18px; text-align:center;">
        <div style="font-size:2.8rem; margin-bottom:8px;">📭</div>
        <div style="font-weight:800; font-size:1.1rem; color:#1e293b; margin-bottom:6px;">Chưa có câu đố nào. Thầy cô hãy tạo câu đố mới nhé!</div>
        <p style="font-size:0.95rem; line-height:1.6; color:#64748b; margin-bottom:14px;">
          Toàn bộ câu đố trong database đã được dọn sạch. Bây giờ thầy cô có thể nhập ảnh và từ vựng ở form bên trái để tạo bài từ từ cho học sinh chơi!
        </p>
        <button type="button" class="btn btn-secondary small-btn" onclick="resetToDefaultAiQuestions()" style="font-weight:700;">🔄 Khôi phục 10 câu mẫu</button>
      </div>
    `;
    return;
  }

  questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'created-q-card';
    const isPicWord = q.type === 'picture_word' || (!q.clozeSentence && !q.fullSentence);
    const typeBadge = isPicWord
      ? `<span class="q-type-badge-sm pic-type">🖼️ Chiếu ảnh & Điền từ</span>`
      : `<span class="q-type-badge-sm cloze-type">📝 Mẫu câu AI</span>`;
    const subtitle = isPicWord
      ? (q.questionTitle ? `❓ ${q.questionTitle}` : `🎯 Đáp án: ${q.vocab}`)
      : (q.clozeSentence || q.fullSentence || "");

    card.innerHTML = `
      <div class="q-order-badge" style="background:#e0f2fe; color:#0369a1; font-weight:800; font-size:0.82rem; border-radius:8px; padding:3px 7px; flex-shrink:0;">#${idx + 1}</div>
      <img src="${q.image}" class="created-q-thumb" alt="${q.vocab}" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80'">
      <div class="created-q-info">
        <div style="display:flex; align-items:center; gap:6px; margin-bottom:3px;">
          ${typeBadge}
        </div>
        <div class="created-q-word">${q.vocab} ${q.meaning ? `<span style="font-size:0.82rem; font-weight:600; color:#0284c7;">(${q.meaning})</span>` : ''}</div>
        <div class="created-q-cloze" title="${subtitle}">${subtitle}</div>
      </div>
      <div class="created-q-actions">
        <button type="button" class="glass-btn small-btn btn-primary" onclick="playSpecificAiQuestion(${idx})" title="Chơi từ câu này">▶ Chơi</button>
        <button type="button" class="glass-btn small-btn" onclick="loadAiQuestionForEdit(${idx})" title="Xem lại & sửa câu này" style="background:#F1F5F9; color:#1E293B;">✏️ Sửa</button>
        <button type="button" class="glass-btn small-btn btn-delete-q" onclick="deleteAiQuestion(${idx})" title="Xóa câu hỏi này">✕ Xóa</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function loadAiQuestionForEdit(idx) {
  if (!AiStudioState.questions || idx < 0 || idx >= AiStudioState.questions.length) return;
  const q = AiStudioState.questions[idx];
  selectCreatorQuestionType(q.type || 'picture_word');

  const vocabInput = document.getElementById('creatorVocabInput');
  const meaningInput = document.getElementById('creatorMeaningInput');
  const titleInput = document.getElementById('creatorQuestionTitleInput');
  const urlInput = document.getElementById('creatorImageUrlInput');
  const previewWrap = document.getElementById('creatorImagePreviewWrap');
  const previewImg = document.getElementById('creatorImagePreview');
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');

  if (vocabInput) vocabInput.value = q.vocab || '';
  if (meaningInput) meaningInput.value = q.meaning || '';
  if (titleInput) titleInput.value = q.questionTitle || '';
  if (urlInput) urlInput.value = (q.image && !q.image.startsWith('data:')) ? q.image : '';
  if (sentenceInput && q.fullSentence) sentenceInput.value = q.fullSentence;
  if (sentenceMeaningInput && q.sentenceMeaning) sentenceMeaningInput.value = q.sentenceMeaning;

  if (q.image && previewWrap && previewImg) {
    previewWrap.style.display = 'block';
    previewImg.src = q.image;
    AiStudioState.selectedCreatorImage = q.image;
  }
  showToast(`✏️ Đã nạp câu #${idx + 1} ("${q.vocab}") vào bảng soạn!`, "info");
}
window.loadAiQuestionForEdit = loadAiQuestionForEdit;

function playSpecificAiQuestion(idx) {
  AiStudioState.currentIndex = idx;
  switchStudioMode('play');
}

// Delete a single question from active bank
function deleteAiQuestion(idx) {
  if (!AiStudioState.questions || idx < 0 || idx >= AiStudioState.questions.length) return;
  const q = AiStudioState.questions[idx];
  const word = q.vocab || `Câu số ${idx + 1}`;
  AiStudioState.questions.splice(idx, 1);
  saveAiQuestionsBank();
  if (AiStudioState.currentIndex >= AiStudioState.questions.length) {
    AiStudioState.currentIndex = Math.max(0, AiStudioState.questions.length - 1);
  }
  renderCreatorQuestionsList();
  if (AiStudioState.currentMode === 'play') {
    loadAiGameQuestion();
  }
  showToast(`Đã xóa câu đố "${word}"!`, "info");
}

// Clear all questions in the bank (Lược bỏ hết bài - xóa sạch khỏi database)
function clearAllAiQuestions() {
  AiStudioState.questions = [];
  AiStudioState.currentIndex = 0;
  localStorage.setItem(AI_QUESTIONS_STORAGE_KEY, JSON.stringify([]));
  localStorage.setItem('ekm_ai_cleared_by_user', 'true');
  localStorage.removeItem('ekm_ai_image_sentences');
  renderCreatorQuestionsList();
  loadAiGameQuestion();
  showToast("Đã xóa sạch tất cả câu đố trong hệ thống!", "success");
}

// Reset question bank to default samples
function resetToDefaultAiQuestions() {
  if (confirm("Bạn có muốn nạp lại bộ 10 câu hỏi mẫu mặc định của hệ thống không?")) {
    AiStudioState.questions = JSON.parse(JSON.stringify(DEFAULT_AI_PICTURE_QUESTIONS));
    AiStudioState.currentIndex = 0;
    saveAiQuestionsBank();
    localStorage.removeItem('ekm_ai_cleared_by_user');
    renderCreatorQuestionsList();
    loadAiGameQuestion();
    showToast("Đã khôi phục 10 câu hỏi mẫu thành công!", "success");
  }
}

function generateAiSamplePack() {
  selectCreatorPreset(CREATOR_IMAGE_PRESETS[Math.floor(Math.random() * CREATOR_IMAGE_PRESETS.length)]);
  previewAiClozeTransform();
  showToast("🤖 AI đã điền mẫu câu & phân tích từ vựng sẵn sàng!", "success");
}

// Hook File Input upload listener
function initCreatorFileInput() {
  const fileInput = document.getElementById('creatorImageFileInput');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          AiStudioState.selectedCreatorImage = evt.target.result;
          const previewWrap = document.getElementById('creatorImagePreviewWrap');
          const previewImg = document.getElementById('creatorImagePreview');
          if (previewWrap) previewWrap.style.display = 'block';
          if (previewImg) previewImg.src = evt.target.result;
          showToast("📁 Đã tải ảnh từ máy tính thành công!", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const urlInput = document.getElementById('creatorImageUrlInput');
  if (urlInput) {
    urlInput.addEventListener('input', () => {
      const url = urlInput.value.trim();
      if (url) {
        AiStudioState.selectedCreatorImage = url;
        const previewWrap = document.getElementById('creatorImagePreviewWrap');
        const previewImg = document.getElementById('creatorImagePreview');
        if (previewWrap) previewWrap.style.display = 'block';
        if (previewImg) previewImg.src = url;
      }
    });
  }
}

// ==========================================================================
// 15. Application Bootstrap on DOM Ready
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  updateNavStats();
  initNavigation();
  renderGradeCards();
  updateDashboardGradeView();
  initGamesEngine();
  renderLeaderboard();
  initBaamboozleEngine();
  initAddLessonModal();
  initAiStudioUI();
  initCreatorFileInput();
  initBaamCreatorFileInput();
  renderBaamCreatorPresets();
  renderBaamCustomQuestionsList();
  autoFillFirstSavedQuestionIfEmpty();
  renderCreatorPresets();
  renderCreatorQuestionsList();
  syncTeacherZoneTeamsUI();

  const hasVisited = localStorage.getItem('ekm_kids_visited');
  if (!hasVisited) {
    setTimeout(() => {
      openModal('welcomeModal');
      localStorage.setItem('ekm_kids_visited', 'true');
    }, 600);
  }

  // Keyboard accessibility: Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModals = document.querySelectorAll('.modal-overlay.active');
      activeModals.forEach(m => m.classList.remove('active'));
    }
  });
});



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

function playSoundSuccess() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
    osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.3); // C6

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.55);
  } catch (e) {}
}

function playSoundWrong() {
  if (!AppState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  } catch (e) {}
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

  if (xpEl) xpEl.textContent = AppState.user.xp.toLocaleString();
  if (streakEl) streakEl.textContent = AppState.user.streak;
  if (nameEl) nameEl.textContent = AppState.user.name;
  if (avatarEl) avatarEl.textContent = AppState.user.avatar;
  if (soundIcon) soundIcon.textContent = AppState.soundEnabled ? '🔊' : '🔇';

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
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      switchView(targetId);
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
      showToast(`Tốc độ phát âm: ${btn.textContent}`, "info");
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

function switchView(viewId) {
  const views = document.querySelectorAll('.app-view');
  views.forEach(v => v.classList.remove('active'));

  const tabs = document.querySelectorAll('.nav-tab');
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

// Active Baamboozle State
const BaamState = {
  currentTeam: 1, // 1 or 2
  scores: { 1: 0, 2: 0 },
  tiles: [], // 16 tiles
  openedCount: 0,
  activeTile: null,
  activeTileIndex: -1,
  selectedLessonId: "baam_grade1",
  isGameActive: false
};

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

// Initialize Baamboozle Game Match
function initBaamboozleGame() {
  const lessons = getAllBaamboozleLessons();
  let currentLesson = lessons.find(l => l.id === BaamState.selectedLessonId);
  if (!currentLesson) {
    currentLesson = DEFAULT_BAAMBOOZLE_LESSONS[0];
    BaamState.selectedLessonId = currentLesson.id;
  }

  // Reset scores and team
  BaamState.currentTeam = 1;
  BaamState.scores = { 1: 0, 2: 0 };
  BaamState.openedCount = 0;
  BaamState.activeTile = null;
  BaamState.activeTileIndex = -1;
  BaamState.isGameActive = true;

  // Build 16 tiles: 12 Questions + 4 Mystery Power-ups
  const sentencePool = [...currentLesson.sentences];
  // Shuffle sentence pool
  for (let i = sentencePool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sentencePool[i], sentencePool[j]] = [sentencePool[j], sentencePool[i]];
  }

  const questionTiles = [];
  for (let i = 0; i < 12; i++) {
    const s = sentencePool[i % sentencePool.length];
    questionTiles.push({
      type: "question",
      q: s.q,
      a: s.a,
      emoji: s.emoji || "❓",
      opened: false
    });
  }

  const powerupTiles = [
    {
      type: "powerup",
      powerupType: "bonus",
      title: "Rương Kho Báu Vàng! 🎁",
      desc: "Chúc mừng đội bạn! Vô tình mở trúng rương vàng bí mật, nhận ngay +50 Điểm thưởng!",
      icon: "🎁",
      points: 50,
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
      desc: "Nhanh như chớp! Đội bạn rút thành công 15 Điểm từ đối thủ sang kho điểm của mình!",
      icon: "🔄",
      points: 15,
      opened: false
    },
    {
      type: "powerup",
      powerupType: "bomb",
      title: "Vỏ Chuối Trơn Trượt! 💣",
      desc: "Ối dồi ôi! Đội bạn đạp phải vỏ chuối, trượt chân bị trừ 20 Điểm!",
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

// Update Active Scoreboard & Turn Display
function updateBaamScoreboard() {
  const card1 = document.getElementById('teamCard1');
  const card2 = document.getElementById('teamCard2');
  const score1 = document.getElementById('teamScore1');
  const score2 = document.getElementById('teamScore2');
  const turnText = document.getElementById('baamTurnText');

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
      const badge = card1.querySelector('.team-badge');
      if (badge) badge.textContent = "Đến Lượt! 🎯";
    }
    if (card2) {
      card2.classList.remove('active');
      const badge = card2.querySelector('.team-badge');
      if (badge) badge.textContent = "Chờ Lượt ⏳";
    }
    if (turnText) {
      turnText.innerHTML = `Lượt của: <strong class="text-team-1">Đội Cáo Đỏ 🦊</strong> — Hãy chọn 1 ô số!`;
    }
  } else {
    if (card2) {
      card2.classList.add('active');
      const badge = card2.querySelector('.team-badge');
      if (badge) badge.textContent = "Đến Lượt! 🎯";
    }
    if (card1) {
      card1.classList.remove('active');
      const badge = card1.querySelector('.team-badge');
      if (badge) badge.textContent = "Chờ Lượt ⏳";
    }
    if (turnText) {
      turnText.innerHTML = `Lượt của: <strong class="text-team-2">Đội Sư Tử Xanh 🦁</strong> — Hãy chọn 1 ô số!`;
    }
  }
}

// Handle tile click
function openBaamTile(idx) {
  const tile = BaamState.tiles[idx];
  if (!tile || tile.opened) return;

  BaamState.activeTile = tile;
  BaamState.activeTileIndex = idx;

  const modalTileNum = document.getElementById('baamModalTileNum');
  const modalTeamTurn = document.getElementById('baamModalTeamTurn');
  const teamName = BaamState.currentTeam === 1 ? "Đội Cáo Đỏ 🦊" : "Đội Sư Tử Xanh 🦁";

  if (modalTileNum) modalTileNum.textContent = `Ô Số ${idx + 1}`;
  if (modalTeamTurn) modalTeamTurn.textContent = `Lượt của: ${teamName}`;

  const powerupBox = document.getElementById('baamPowerupBox');
  const questionContent = document.getElementById('baamQuestionContent');

  if (tile.type === 'powerup') {
    // Show surprise mystery powerup
    playSoundMystery();
    if (questionContent) questionContent.style.display = 'none';
    if (powerupBox) {
      powerupBox.style.display = 'flex';
      const icon = document.getElementById('baamPowerupIcon');
      const title = document.getElementById('baamPowerupTitle');
      const desc = document.getElementById('baamPowerupDesc');
      if (icon) icon.textContent = tile.icon;
      if (title) title.textContent = tile.title;
      if (desc) desc.textContent = tile.desc;
    }
  } else {
    // Show standard English sentence question
    playSoundSuccess();
    if (powerupBox) powerupBox.style.display = 'none';
    if (questionContent) questionContent.style.display = 'block';

    const emojiEl = document.getElementById('baamQuestionEmoji');
    const promptEl = document.getElementById('baamPromptText');
    const inputEl = document.getElementById('baamStudentAnswerInput');
    const inputRow = document.getElementById('baamInteractiveInputRow');
    const quickScoreRow = document.getElementById('baamQuickScoreRow');
    const resultSuccess = document.getElementById('baamResultSuccess');
    const resultWrong = document.getElementById('baamResultWrong');

    if (emojiEl) emojiEl.textContent = tile.emoji || "❓";
    if (promptEl) promptEl.textContent = tile.q;

    // Reset interactive fields
    if (inputEl) {
      inputEl.value = "";
      inputEl.disabled = false;
    }
    if (inputRow) inputRow.style.display = 'block';
    if (quickScoreRow) quickScoreRow.style.display = 'flex';
    if (resultSuccess) resultSuccess.style.display = 'none';
    if (resultWrong) resultWrong.style.display = 'none';

    // Pronounce English prompt
    setTimeout(() => {
      speakWord(tile.q);
    }, 250);
  }

  openModal('baamTileModal');
}

// Student submits an answer from the input box
function handleBaamStudentCheck() {
  const inputEl = document.getElementById('baamStudentAnswerInput');
  if (!inputEl) return;
  const userText = inputEl.value.trim().toLowerCase();

  if (!userText) {
    showToast("⚠️ Vui lòng nhập câu trả lời hoặc bấm 'Xem Đáp Án'!", "warning");
    inputEl.focus();
    return;
  }

  const tile = BaamState.activeTile;
  if (!tile) return;
  const targetAns = (tile.a || "").toLowerCase();

  // Smart matching: contains or partial word match
  const isMatch = targetAns.includes(userText) || userText.includes(targetAns) ||
                  targetAns.split(/[\s,()/-]+/).some(w => w.length > 2 && userText.includes(w));

  if (isMatch) {
    handleBaamAnswerCorrect();
  } else {
    handleBaamAnswerWrong();
  }
}

// Reveal Answer button click (Shows answer underneath)
function handleBaamRevealAnswer() {
  const tile = BaamState.activeTile;
  if (!tile) return;

  const inputRow = document.getElementById('baamInteractiveInputRow');
  const quickScoreRow = document.getElementById('baamQuickScoreRow');
  const resultSuccess = document.getElementById('baamResultSuccess');
  const resultWrong = document.getElementById('baamResultWrong');
  const ansText = document.getElementById('baamWrongAnswerText');

  if (inputRow) inputRow.style.display = 'none';
  if (quickScoreRow) quickScoreRow.style.display = 'none';
  if (resultSuccess) resultSuccess.style.display = 'none';

  if (resultWrong) {
    resultWrong.style.display = 'block';
    if (ansText) ansText.textContent = tile.a;
  }

  speakWord(tile.q);
}

// Team Answered Correct (+20 Points) -> HIỆN ĐÁP ÁN Ở DƯỚI CÂU TIẾNG ANH
function handleBaamAnswerCorrect() {
  const tile = BaamState.activeTile;
  if (!tile) return;

  const team = BaamState.currentTeam;
  BaamState.scores[team] += 20;

  // Sound: "Yeah!" + Crowd Applause
  playSoundCheerAndApplause();
  triggerConfetti();

  addXP(20, `Baamboozle: Đội ${team === 1 ? 'Cáo Đỏ' : 'Sư Tử Xanh'} trả lời chuẩn xác`);
  showToast(`🎉 Yeahhh! +20 Điểm cho Đội ${team === 1 ? 'Cáo Đỏ' : 'Sư Tử Xanh'}!`, "success");

  // Update live scoreboard
  updateBaamScoreboard();

  // Hide input & action controls
  const inputRow = document.getElementById('baamInteractiveInputRow');
  const quickScoreRow = document.getElementById('baamQuickScoreRow');
  const resultSuccess = document.getElementById('baamResultSuccess');
  const resultWrong = document.getElementById('baamResultWrong');
  const ansText = document.getElementById('baamCorrectAnswerText');

  if (inputRow) inputRow.style.display = 'none';
  if (quickScoreRow) quickScoreRow.style.display = 'none';
  if (resultWrong) resultWrong.style.display = 'none';

  // Hiện đáp án màu xanh rực rỡ ở DƯỚI câu tiếng Anh
  if (resultSuccess) {
    resultSuccess.style.display = 'block';
    if (ansText) ansText.textContent = tile.a;
  }
}

// Team Answered Wrong (0 Points) -> Hiện đáp án đúng ở dưới
function handleBaamAnswerWrong() {
  const tile = BaamState.activeTile;
  if (!tile) return;

  const team = BaamState.currentTeam;
  playSoundFunnyBoing();
  showToast(`Cố gắng hơn ở ô tiếp theo nhé Đội ${team === 1 ? 'Cáo Đỏ' : 'Sư Tử Xanh'}!`, "warning");

  const inputRow = document.getElementById('baamInteractiveInputRow');
  const quickScoreRow = document.getElementById('baamQuickScoreRow');
  const resultSuccess = document.getElementById('baamResultSuccess');
  const resultWrong = document.getElementById('baamResultWrong');
  const ansText = document.getElementById('baamWrongAnswerText');

  if (inputRow) inputRow.style.display = 'none';
  if (quickScoreRow) quickScoreRow.style.display = 'none';
  if (resultSuccess) resultSuccess.style.display = 'none';

  // Hiện đáp án chuẩn ở DƯỚI câu tiếng Anh
  if (resultWrong) {
    resultWrong.style.display = 'block';
    const badge = resultWrong.querySelector('.res-badge');
    if (badge) badge.textContent = `💡 ĐÁP ÁN CHUẨN (0 Điểm)`;
    if (ansText) ansText.textContent = tile.a;
  }
}

// Team Answered Wrong & Gets Penalized (-10 Points) -> Cho phép ÂM ĐIỂM luôn nếu chưa có điểm!
function handleBaamAnswerPenalty() {
  const tile = BaamState.activeTile;
  if (!tile) return;

  const team = BaamState.currentTeam;
  // Trừ trực tiếp 10 điểm (nếu đang 0 điểm sẽ thành -10 điểm)
  BaamState.scores[team] -= 10;
  updateBaamScoreboard();

  playSoundFunnyBoing();
  const teamName = team === 1 ? 'Đội Cáo Đỏ' : 'Đội Sư Tử Xanh';
  showToast(`⚠️ ${teamName} bị trừ 10 Điểm! (Hiện tại: ${BaamState.scores[team]} điểm)`, "warning");

  const inputRow = document.getElementById('baamInteractiveInputRow');
  const quickScoreRow = document.getElementById('baamQuickScoreRow');
  const resultSuccess = document.getElementById('baamResultSuccess');
  const resultWrong = document.getElementById('baamResultWrong');
  const ansText = document.getElementById('baamWrongAnswerText');

  if (inputRow) inputRow.style.display = 'none';
  if (quickScoreRow) quickScoreRow.style.display = 'none';
  if (resultSuccess) resultSuccess.style.display = 'none';

  // Hiện đáp án chuẩn ở DƯỚI câu tiếng Anh
  if (resultWrong) {
    resultWrong.style.display = 'block';
    const badge = resultWrong.querySelector('.res-badge');
    if (badge) badge.textContent = `⚠️ BỊ TRỪ 10 ĐIỂM (${teamName}: ${BaamState.scores[team]}đ)`;
    if (ansText) ansText.textContent = tile.a;
  }
}

// Manual Score Adjustment for Teachers (+10 / -10) -> Cho phép âm điểm
window.adjustBaamTeamScore = function(team, delta) {
  BaamState.scores[team] += delta;
  updateBaamScoreboard();
  const teamName = team === 1 ? 'Đội Cáo Đỏ' : 'Đội Sư Tử Xanh';
  if (delta > 0) {
    playSoundSuccess();
    showToast(`➕ Đã cộng ${delta} điểm cho ${teamName} (hiện có: ${BaamState.scores[team]} điểm)`, "success");
  } else {
    playSoundFunnyBoing();
    showToast(`➖ Đã trừ ${Math.abs(delta)} điểm của ${teamName} (hiện có: ${BaamState.scores[team]} điểm)`, "warning");
  }
};

// Confirm Power-Up Event
function handleBaamPowerupConfirm() {
  const tile = BaamState.activeTile;
  if (!tile || tile.type !== 'powerup') return;

  const currentTeam = BaamState.currentTeam;
  const otherTeam = currentTeam === 1 ? 2 : 1;
  const currentTeamName = currentTeam === 1 ? 'Đội Cáo Đỏ' : 'Đội Sư Tử Xanh';
  const otherTeamName = otherTeam === 1 ? 'Đội Cáo Đỏ' : 'Đội Sư Tử Xanh';

  if (tile.powerupType === 'bonus') {
    BaamState.scores[currentTeam] += tile.points;
    playSoundPowerup();
    showToast(`🎁 +50 Điểm Thưởng Siêu To Khổng Lồ! (${currentTeamName}: ${BaamState.scores[currentTeam]}đ)`, "success");
  } else if (tile.powerupType === 'swap') {
    const temp = BaamState.scores[1];
    BaamState.scores[1] = BaamState.scores[2];
    BaamState.scores[2] = temp;
    playSoundMystery();
    showToast(`⚡ Điểm 2 đội đã được hoán đổi cho nhau!`, "info");
  } else if (tile.powerupType === 'steal') {
    // Cướp trọn vẹn số điểm: Đội kia dù đang 0 điểm vẫn bị trừ xuống âm điểm tương ứng!
    const stolen = tile.points;
    BaamState.scores[otherTeam] -= stolen; // Ví dụ: 0 - 15 = -15 điểm
    BaamState.scores[currentTeam] += stolen; // Đội cướp nhận +15 điểm
    playSoundPowerup();
    showToast(`🔄 Cướp ${stolen} Điểm từ ${otherTeamName}! (${otherTeamName} còn: ${BaamState.scores[otherTeam]}đ)`, "success");
  } else if (tile.powerupType === 'bomb') {
    // Vỏ chuối: Đội dẫm phải dù đang 0 điểm vẫn bị trừ thẳng thành -20 điểm!
    BaamState.scores[currentTeam] += tile.points; // tile.points = -20
    playSoundWrong();
    showToast(`💣 Bị trừ 20 Điểm vì trượt vỏ chuối! (${currentTeamName}: còn ${BaamState.scores[currentTeam]}đ)`, "warning");
  }

  updateBaamScoreboard();
  markActiveTileCompleted();
}

// Mark current tile as opened and alternate turns
function markActiveTileCompleted() {
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

  if (fScore1) fScore1.textContent = s1;
  if (fScore2) fScore2.textContent = s2;

  if (s1 > s2) {
    if (titleEl) titleEl.textContent = "🏆 Đội Cáo Đỏ Chiến Thắng!";
    if (descEl) descEl.textContent = `Đội Cáo Đỏ xuất sắc dẫn trước với tỉ số ấn tượng ${s1} - ${s2}!`;
  } else if (s2 > s1) {
    if (titleEl) titleEl.textContent = "🏆 Đội Sư Tử Xanh Chiến Thắng!";
    if (descEl) descEl.textContent = `Đội Sư Tử Xanh bứt phá ngoạn mục với tỉ số ${s2} - ${s1}!`;
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
}

function initBaamboozleEngine() {
  migrateExistingCustomLessons();
  renderBaamLessonSelect();
  initBaamboozleGame();

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
      return JSON.parse(saved); // If saved is [] -> returns []
    }
    const wasCleared = localStorage.getItem('ekm_ai_cleared_by_user');
    if (wasCleared === 'true') {
      return [];
    }
    // First time seed: save default questions to localStorage
    localStorage.setItem(AI_QUESTIONS_STORAGE_KEY, JSON.stringify(DEFAULT_AI_PICTURE_QUESTIONS));
    return JSON.parse(JSON.stringify(DEFAULT_AI_PICTURE_QUESTIONS));
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

  // Update Picture & Vocab Under Image
  const imgEl = document.getElementById('aiPlayImage');
  const vocabEl = document.getElementById('aiPlayVocabWord');
  const phoneticEl = document.getElementById('aiPlayVocabPhonetic');
  const meaningEl = document.getElementById('aiPlayVocabMeaning');

  if (imgEl) {
    imgEl.src = q.image;
    imgEl.alt = q.vocab;
  }
  if (vocabEl) vocabEl.textContent = q.vocab;
  if (phoneticEl) phoneticEl.textContent = q.phonetic || "";
  if (meaningEl) meaningEl.textContent = q.meaning || "";

  // Audio button handlers
  const speakVocabBtn = document.getElementById('aiPlaySpeakVocabBtn');
  if (speakVocabBtn) {
    speakVocabBtn.onclick = () => speakWord(q.vocab);
  }

  const speakSentenceBtn = document.getElementById('aiPlaySpeakSentenceBtn');
  if (speakSentenceBtn) {
    speakSentenceBtn.onclick = () => speakWord(q.fullSentence);
  }

  // Cloze Sentence Display
  const sentenceDisplay = document.getElementById('aiPlaySentenceDisplay');
  const sentenceMeaning = document.getElementById('aiPlaySentenceMeaning');

  if (sentenceDisplay) {
    // Render with highlighted pulsing blank slot
    const clozeFormatted = q.clozeSentence.replace(
      /\[\s*______+\s*\]/g,
      `<span class="cloze-blank-slot" id="activeClozeSlot">? ? ?</span>`
    );
    sentenceDisplay.innerHTML = clozeFormatted;
  }

  if (sentenceMeaning) {
    sentenceMeaning.textContent = `"${q.sentenceMeaning}"`;
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
    const chips = [...q.distractors];
    // Shuffle chips
    for (let i = chips.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chips[i], chips[j]] = [chips[j], chips[i]];
    }

    chips.forEach(w => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'word-chip';
      chip.textContent = w;
      chip.onclick = () => {
        if (inputEl) {
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
  const feedbackBanner = document.getElementById('aiFeedbackBanner');

  if (submitBtn) submitBtn.style.display = 'block';
  if (nextBtn) nextBtn.style.display = 'none';
  if (hintBtn) hintBtn.disabled = false;
  if (feedbackBanner) feedbackBanner.style.display = 'none';
}

function updateActiveClozeSlotText(text) {
  const slot = document.getElementById('activeClozeSlot');
  if (slot) slot.textContent = text;
}

// Reveal friendly hint
function revealAiGameHint() {
  const q = AiStudioState.questions[AiStudioState.currentIndex % AiStudioState.questions.length];
  const inputEl = document.getElementById('aiAnswerInput');
  const firstLetter = q.targetWord.charAt(0).toUpperCase();
  showToast(`💡 Gợi ý: Từ bắt đầu bằng chữ cái "${firstLetter}" và có ${q.targetWord.length} chữ cái!`, "info");
  if (inputEl && !inputEl.value) {
    inputEl.value = firstLetter;
    updateActiveClozeSlotText(firstLetter + "...");
  }
}

// Submit answer verification
function submitAiGameAnswer() {
  const q = AiStudioState.questions[AiStudioState.currentIndex % AiStudioState.questions.length];
  const inputEl = document.getElementById('aiAnswerInput');
  const feedbackBanner = document.getElementById('aiFeedbackBanner');
  const fbIcon = document.getElementById('aiFbIcon');
  const fbTitle = document.getElementById('aiFbTitle');
  const fbDesc = document.getElementById('aiFbDesc');
  const submitBtn = document.getElementById('aiGameSubmitBtn');
  const nextBtn = document.getElementById('aiGameNextBtn');

  if (!inputEl) return;
  const userAns = inputEl.value.trim().toLowerCase();
  const targetAns = q.targetWord.trim().toLowerCase();

  if (!userAns) {
    showToast("⚠️ Bé hãy nhập từ hoặc bấm chọn 1 thẻ từ gợi ý bên dưới nhé!", "warning");
    inputEl.focus();
    return;
  }

  if (userAns === targetAns) {
    // CORRECT ANSWER!
    playSoundCheerAndApplause();
    triggerConfetti();

    AiStudioState.score += 20;
    AiStudioState.streak += 1;
    addXP(25, `Hoàn thành mẫu câu xuất sắc: ${q.vocab}`);

    const scoreEl = document.getElementById('aiGameScore');
    const streakEl = document.getElementById('aiGameStreak');
    if (scoreEl) scoreEl.textContent = AiStudioState.score;
    if (streakEl) streakEl.textContent = AiStudioState.streak;

    if (feedbackBanner) {
      feedbackBanner.className = 'ai-feedback-banner success';
      feedbackBanner.style.display = 'flex';
      if (fbIcon) fbIcon.textContent = '🎉';
      if (fbTitle) fbTitle.textContent = 'Yeahhh! Chính xác tuyệt vời! 👏';
      if (fbDesc) fbDesc.textContent = `Bé đã hoàn thành đúng mẫu câu: "${q.fullSentence}"`;
    }

    updateActiveClozeSlotText(`✅ ${q.targetWord}`);
    inputEl.disabled = true;
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'block';

    showToast("🎉 Yeahhh! Giỏi quá, tiếp tục phát huy nào!", "success");
  } else {
    // WRONG ANSWER!
    playSoundFunnyBoing();

    if (feedbackBanner) {
      feedbackBanner.className = 'ai-feedback-banner wrong';
      feedbackBanner.style.display = 'flex';
      if (fbIcon) fbIcon.textContent = '🤔';
      if (fbTitle) fbTitle.textContent = 'Chưa chính xác rồi nè!';
      if (fbDesc) fbDesc.textContent = `Bé hãy nhìn kỹ hình ảnh gợi ý và đọc kỹ câu để chọn từ đúng nhé!`;
    }

    // Shake animation
    inputEl.style.animation = 'none';
    inputEl.offsetHeight; // reflow
    inputEl.style.animation = 'shake 0.4s ease';

    showToast("Ối chà, bé hãy nhìn kỹ ảnh rồi thử lại nha! 🪀", "warning");
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
  const urlInput = document.getElementById('creatorImageUrlInput');
  const vocabInput = document.getElementById('creatorVocabInput');
  const meaningInput = document.getElementById('creatorMeaningInput');
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');

  const rawVocab = vocabInput ? vocabInput.value.trim() : "";
  if (!rawVocab) {
    showToast("⚠️ Vui lòng nhập từ vựng tiếng Anh ở Bước 2 trước khi lưu!", "warning");
    if (vocabInput) vocabInput.focus();
    return;
  }

  const imageUrl = AiStudioState.selectedCreatorImage || (urlInput ? urlInput.value.trim() : "") || "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80";
  const vocab = rawVocab;
  const meaning = (meaningInput ? meaningInput.value.trim() : "") || "";
  const sentence = (sentenceInput ? sentenceInput.value.trim() : "") || `I see a ${vocab} in the picture.`;
  const sentenceMeaning = (sentenceMeaningInput ? sentenceMeaningInput.value.trim() : "") || `Tôi nhìn thấy ${meaning || vocab} trong tranh.`;

  previewAiClozeTransform();
  const clozeData = AiStudioState.previewClozeData;

  const newQuestion = {
    id: `custom_ai_q_${Date.now()}`,
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
  const sentenceInput = document.getElementById('creatorSentenceInput');
  const sentenceMeaningInput = document.getElementById('creatorSentenceMeaningInput');
  const previewWrap = document.getElementById('creatorImagePreviewWrap');
  const previewImg = document.getElementById('creatorImagePreview');
  const resultBox = document.getElementById('aiSentenceResultBox');
  const step4 = document.getElementById('step4ClozeSection');
  const previewBox = document.getElementById('aiClozePreviewBox');

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
      <div class="empty-bank-box" style="background:#f8fafc; border:2px dashed #94a3b8; border-radius:16px; padding:32px 18px; text-align:center;">
        <div style="font-size:2.8rem; margin-bottom:8px;">📭</div>
        <div style="font-weight:800; font-size:1.1rem; color:#1e293b; margin-bottom:6px;">Chưa có bài nào được tạo</div>
        <p style="font-size:0.9rem; line-height:1.6; color:#64748b; margin-bottom:14px;">
          Toàn bộ câu đố trong database đã được xóa sạch. Bây giờ bạn có thể nhập ảnh và từ vựng ở form bên trái để tạo bài từ từ cho học sinh chơi!
        </p>
        <button type="button" class="glass-btn small-btn" onclick="resetToDefaultAiQuestions()" style="font-weight:700; color:#2563eb;">🔄 Khôi phục 10 câu mẫu</button>
      </div>
    `;
    return;
  }

  questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'created-q-card';
    card.innerHTML = `
      <div class="q-order-badge" style="background:#e0f2fe; color:#0369a1; font-weight:800; font-size:0.82rem; border-radius:8px; padding:3px 7px; flex-shrink:0;">#${idx + 1}</div>
      <img src="${q.image}" class="created-q-thumb" alt="${q.vocab}" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80'">
      <div class="created-q-info">
        <div class="created-q-word">${q.vocab} ${q.meaning ? `<span style="font-size:0.82rem; font-weight:600; color:#0284c7;">(${q.meaning})</span>` : ''}</div>
        <div class="created-q-cloze" title="${q.clozeSentence}">${q.clozeSentence}</div>
      </div>
      <div class="created-q-actions">
        <button type="button" class="glass-btn small-btn btn-primary" onclick="playSpecificAiQuestion(${idx})" title="Chơi từ câu này">▶ Chơi</button>
        <button type="button" class="glass-btn small-btn btn-delete-q" onclick="deleteAiQuestion(${idx})" title="Xóa câu hỏi này">✕ Xóa</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function playSpecificAiQuestion(idx) {
  AiStudioState.currentIndex = idx;
  switchStudioMode('play');
}

// Delete a single question from active bank
function deleteAiQuestion(idx) {
  if (!AiStudioState.questions || idx < 0 || idx >= AiStudioState.questions.length) return;
  const q = AiStudioState.questions[idx];
  const word = q.vocab || `Câu số ${idx + 1}`;
  if (confirm(`Bạn có chắc muốn xóa câu đố "${word}" khỏi ngân hàng không?`)) {
    AiStudioState.questions.splice(idx, 1);
    saveAiQuestionsBank();
    if (AiStudioState.currentIndex >= AiStudioState.questions.length) {
      AiStudioState.currentIndex = Math.max(0, AiStudioState.questions.length - 1);
    }
    renderCreatorQuestionsList();
    if (AiStudioState.currentMode === 'play') {
      loadAiGameQuestion();
    }
    showToast(`Đã xóa câu đố "${word}" thành công!`, "info");
  }
}

// Clear all questions in the bank (Lược bỏ hết bài - xóa sạch khỏi database)
function clearAllAiQuestions() {
  if (confirm("⚠️ Bạn có chắc muốn LƯỢC BỎ VÀ XÓA SẠCH toàn bộ bài trong database không?\n\nSau khi xóa, web sẽ hiện 'Chưa có bài nào được tạo' để bạn tự tạo bài từ từ cho học sinh.")) {
    AiStudioState.questions = [];
    AiStudioState.currentIndex = 0;
    localStorage.setItem(AI_QUESTIONS_STORAGE_KEY, JSON.stringify([]));
    localStorage.setItem('ekm_ai_cleared_by_user', 'true');
    localStorage.removeItem('ekm_ai_image_sentences');
    renderCreatorQuestionsList();
    loadAiGameQuestion();
    showToast("🧹 Đã xóa sạch bài trong database! Hiện chưa có bài nào được tạo.", "success");
  }
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

  const hasVisited = localStorage.getItem('ekm_kids_visited');
  if (!hasVisited) {
    setTimeout(() => {
      openModal('welcomeModal');
      localStorage.setItem('ekm_kids_visited', 'true');
    }, 600);
  }
});



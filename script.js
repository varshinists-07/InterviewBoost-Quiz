const startBtn = document.getElementById("startBtn");
const landing = document.getElementById("landing");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const optionsWrap = document.getElementById("optionsWrap");
const feedback = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const topicLabel = document.getElementById("topicLabel");

const finalScore = document.getElementById("finalScore");
const previousScoreEl = document.getElementById("previousScore");
const improvementEl = document.getElementById("improvement");
const topicStats = document.getElementById("topicStats");

const questions = [
  // ================= LOGICAL REASONING (30) =================
  { topic: "Logical Reasoning", q: "If all roses are flowers and some flowers fade quickly, which of the following is true?", options: ["Some roses fade quickly", "All flowers are roses", "Some flowers fade quickly"], answer: "Some flowers fade quickly" },
  { topic: "Logical Reasoning", q: "Find the odd one: Apple, Mango, Banana, Carrot", options: ["Apple","Mango","Carrot"], answer: "Carrot" },
  { topic: "Logical Reasoning", q: "In a certain code, CAT = 24, BAT = 23, then RAT = ?", options: ["42","25","24"], answer: "42" },
  { topic: "Logical Reasoning", q: "If 2 men can complete a work in 10 days, how many men are required to complete in 5 days?", options: ["2","4","6"], answer: "4" },
  { topic: "Logical Reasoning", q: "Which number comes next in the series: 2, 6, 12, 20, ?", options: ["28","30","32"], answer: "30" },
  { topic: "Logical Reasoning", q: "If Monday was 2 days ago, what day is tomorrow?", options: ["Thursday","Friday","Saturday"], answer: "Friday" },
  { topic: "Logical Reasoning", q: "Find the missing number: 4, 9, 16, 25, ?", options: ["30","35","36"], answer: "36" },
  { topic: "Logical Reasoning", q: "Pointing to a man, she said: 'He is my father’s only son.' Who is he?", options: ["Her uncle","Her brother","Her cousin"], answer: "Her brother" },
  { topic: "Logical Reasoning", q: "If A = 1, B = 2, …, Z = 26, then sum of CAT?", options: ["24","25","27"], answer: "24" },
  { topic: "Logical Reasoning", q: "Which is odd: Square, Circle, Triangle, Rectangle?", options: ["Circle","Triangle","Rectangle"], answer: "Circle" },
  { topic: "Logical Reasoning", q: "If all cats are animals, and some animals are wild, then?", options: ["All cats are wild","Some animals are cats","No cats are wild"], answer: "Some animals are cats" },
  { topic: "Logical Reasoning", q: "Find missing number: 3, 6, 12, 24, ?", options: ["36","48","60"], answer: "48" },
  { topic: "Logical Reasoning", q: "If the opposite of South-East is?", options: ["North-East","North-West","South-West"], answer: "North-West" },
  { topic: "Logical Reasoning", q: "Odd one: Cow, Goat, Lion, Dog", options: ["Cow","Lion","Goat"], answer: "Lion" },
  { topic: "Logical Reasoning", q: "Which comes next? 2, 4, 8, 16, ?", options: ["24","30","32"], answer: "32" },
  { topic: "Logical Reasoning", q: "Father is 3 times the age of son. After 15 years, father will be twice the age. What is son's age?", options: ["10","15","20"], answer: "15" },
  { topic: "Logical Reasoning", q: "If A is B’s father, B is C’s sister, C is D’s mother. How is A related to D?", options: ["Grandfather","Father","Uncle"], answer: "Grandfather" },
  { topic: "Logical Reasoning", q: "Find the odd number: 121, 144, 169, 225", options: ["121","144","225"], answer: "225" },
  { topic: "Logical Reasoning", q: "If LEMON = 50, ORANGE = 60, then MANGO = ?", options: ["40","50","55"], answer: "55" },
  { topic: "Logical Reasoning", q: "Series: 5, 10, 20, 40, ?", options: ["60","70","80"], answer: "80" },
  { topic: "Logical Reasoning", q: "Which word is odd: Pen, Pencil, Paper, Book", options: ["Pen","Pencil","Paper"], answer: "Paper" },
  { topic: "Logical Reasoning", q: "Which comes next? A, Z, B, Y, C, ?", options: ["W","D","X"], answer: "X" },
  { topic: "Logical Reasoning", q: "If in a code, CAT = DBU, then DOG = ?", options: ["EPI","EOG","EPH"], answer: "EPI" },
  { topic: "Logical Reasoning", q: "Odd one: Facebook, Twitter, Instagram, Excel", options: ["Twitter","Excel","Instagram"], answer: "Excel" },
  { topic: "Logical Reasoning", q: "Series: 1, 4, 9, 16, ?", options: ["20","25","30"], answer: "25" },
  { topic: "Logical Reasoning", q: "Pointing at a man: He is the son of my mother’s brother. Who is he?", options: ["Brother","Cousin","Uncle"], answer: "Cousin" },
  { topic: "Logical Reasoning", q: "If in a code, HELLO = IFMMP, then WORLD = ?", options: ["XPSME","YQSMF","XORLE"], answer: "XPSME" },
  { topic: "Logical Reasoning", q: "Which shape has no sides?", options: ["Square","Circle","Triangle"], answer: "Circle" },
  { topic: "Logical Reasoning", q: "Which comes next? 11, 13, 17, 19, ?", options: ["21","23","25"], answer: "23" },

  // ================= QUANTITATIVE (30) =================
  { topic: "Quantitative", q: "What is 15% of 200?", options: ["25","30","35"], answer: "30" },
  { topic: "Quantitative", q: "Simplify: 12 * 12", options: ["124","144","134"], answer: "144" },
  { topic: "Quantitative", q: "Find x: 2x + 5 = 15", options: ["5","10","15"], answer: "5" },
  { topic: "Quantitative", q: "What is √81?", options: ["9","8","7"], answer: "9" },
  { topic: "Quantitative", q: "If cost price is 100 and profit is 20, SP = ?", options: ["110","120","130"], answer: "120" },
  { topic: "Quantitative", q: "Average of 10, 20, 30?", options: ["15","20","25"], answer: "20" },
  { topic: "Quantitative", q: "Solve: 2/5 of 100?", options: ["20","30","40"], answer: "40" },
  { topic: "Quantitative", q: "If 12 workers make 36 toys, how many toys for 24 workers?", options: ["72","48","60"], answer: "72" },
  { topic: "Quantitative", q: "Simplify: 45 ÷ 9", options: ["5","6","7"], answer: "5" },
  { topic: "Quantitative", q: "LCM of 12 and 18?", options: ["36","48","54"], answer: "36" },
  { topic: "Quantitative", q: "HCF of 24 and 36?", options: ["6","12","18"], answer: "12" },
  { topic: "Quantitative", q: "What is 25²?", options: ["525","625","725"], answer: "625" },
  { topic: "Quantitative", q: "If a man walks 4 km/hr, how long for 12 km?", options: ["2 hr","3 hr","4 hr"], answer: "3 hr" },
  { topic: "Quantitative", q: "Solve: 7² - 5²", options: ["24","12","20"], answer: "24" },
  { topic: "Quantitative", q: "Find SI: P=1000, R=10%, T=2 yrs", options: ["100","150","200"], answer: "200" },
  { topic: "Quantitative", q: "Simplify: 1/2 + 1/3", options: ["5/6","2/5","7/6"], answer: "5/6" },
  { topic: "Quantitative", q: "Solve: 15 × 14", options: ["200","210","220"], answer: "210" },
  { topic: "Quantitative", q: "If a train 120m long crosses pole in 12s, speed?", options: ["10m/s","12m/s","15m/s"], answer: "10m/s" },
  { topic: "Quantitative", q: "Convert 0.75 to fraction?", options: ["3/4","2/3","5/8"], answer: "3/4" },
  { topic: "Quantitative", q: "What is 8C2?", options: ["28","56","36"], answer: "28" },
  { topic: "Quantitative", q: "What is 6P2?", options: ["30","36","42"], answer: "30" },
  { topic: "Quantitative", q: "Solve: log10(100)", options: ["1","2","3"], answer: "2" },
  { topic: "Quantitative", q: "Simplify: 50% of 360", options: ["160","170","180"], answer: "180" },
  { topic: "Quantitative", q: "Find CI: P=1000, R=10%, T=2 yrs", options: ["210","220","230"], answer: "210" },
  { topic: "Quantitative", q: "Ratio of 2:3, then 6:9 is?", options: ["Equal","Not equal","Half"], answer: "Equal" },
  { topic: "Quantitative", q: "Probability of getting head in coin toss?", options: ["1/3","1/2","1/4"], answer: "1/2" },
  { topic: "Quantitative", q: "Area of circle radius 7?", options: ["154","144","164"], answer: "154" },
  { topic: "Quantitative", q: "Perimeter of square side 5?", options: ["20","25","15"], answer: "20" },
  { topic: "Quantitative", q: "If speed=60 km/hr, time=2 hr, distance?", options: ["100","120","140"], answer: "120" },
  { topic: "Quantitative", q: "Simplify: (5³)", options: ["115","120","125"], answer: "125" },

  // ================= VERBAL (30) =================
  { topic: "Verbal", q: "Synonym of 'Happy'?", options: ["Joyful","Sad","Angry"], answer: "Joyful" },
  { topic: "Verbal", q: "Antonym of 'Brave'?", options: ["Courageous","Cowardly","Strong"], answer: "Cowardly" },
  { topic: "Verbal", q: "Fill in blank: She ___ going to school.", options: ["is","are","were"], answer: "is" },
  { topic: "Verbal", q: "Correct spelling?", options: ["Accomodate","Acommodate","Accommodate"], answer: "Accommodate" },
  { topic: "Verbal", q: "Choose correct: He ___ playing football.", options: ["was","were","are"], answer: "was" },
  { topic: "Verbal", q: "Opposite of 'Rich'?", options: ["Wealthy","Poor","Strong"], answer: "Poor" },
  { topic: "Verbal", q: "Which is a verb?", options: ["Run","Blue","Table"], answer: "Run" },
  { topic: "Verbal", q: "Synonym of 'Big'?", options: ["Large","Tiny","Short"], answer: "Large" },
  { topic: "Verbal", q: "Choose article: ___ apple a day keeps doctor away.", options: ["A","An","The"], answer: "An" },
  { topic: "Verbal", q: "Past tense of 'Go'?", options: ["Goed","Went","Gone"], answer: "Went" },
  { topic: "Verbal", q: "Plural of 'Child'?", options: ["Childs","Children","Childes"], answer: "Children" },
  { topic: "Verbal", q: "Synonym of 'Fast'?", options: ["Quick","Slow","Lazy"], answer: "Quick" },
  { topic: "Verbal", q: "Antonym of 'Success'?", options: ["Failure","Win","Pass"], answer: "Failure" },
  { topic: "Verbal", q: "Fill blank: They ___ going home now.", options: ["is","are","was"], answer: "are" },
  { topic: "Verbal", q: "Choose correct spelling:", options: ["Recieve","Receive","Receeve"], answer: "Receive" },
  { topic: "Verbal", q: "Synonym of 'Smart'?", options: ["Intelligent","Foolish","Dull"], answer: "Intelligent" },
  { topic: "Verbal", q: "Opposite of 'Begin'?", options: ["Start","End","Go"], answer: "End" },
  { topic: "Verbal", q: "Choose correct: The sun ___ in the east.", options: ["rise","rises","rised"], answer: "rises" },
  { topic: "Verbal", q: "Plural of 'Mouse'?", options: ["Mouses","Mice","Mousees"], answer: "Mice" },
  { topic: "Verbal", q: "Fill blank: He has ___ books.", options: ["much","many","lot"], answer: "many" },
  { topic: "Verbal", q: "Synonym of 'Angry'?", options: ["Mad","Calm","Happy"], answer: "Mad" },
  { topic: "Verbal", q: "Antonym of 'Cold'?", options: ["Cool","Hot","Warm"], answer: "Hot" },
  { topic: "Verbal", q: "Choose correct tense: She ___ finished her work.", options: ["have","has","having"], answer: "has" },
  { topic: "Verbal", q: "Correct spelling?", options: ["Definately","Definitely","Definitley"], answer: "Definitely" },
  { topic: "Verbal", q: "Fill blank: I ___ my homework yesterday.", options: ["did","done","do"], answer: "did" },
  { topic: "Verbal", q: "Synonym of 'Bright'?", options: ["Shiny","Dark","Dull"], answer: "Shiny" },
  { topic: "Verbal", q: "Antonym of 'Win'?", options: ["Victory","Lose","Success"], answer: "Lose" },
  { topic: "Verbal", q: "Choose correct: Birds ___ fly.", options: ["can","may","might"], answer: "can" },
  { topic: "Verbal", q: "Plural of 'Foot'?", options: ["Foots","Feet","Footes"], answer: "Feet" },
  { topic: "Verbal", q: "Opposite of 'Light'?", options: ["Bright","Dark","Glow"], answer: "Dark" }
];


let currentQ = 0;
let score = 0;
let timer;
let timeLeft = 25;

let topicCorrect = { "Logical Reasoning":0, "Quantitative":0, "Verbal":0 };
let topicTotal = { "Logical Reasoning":0, "Quantitative":0, "Verbal":0 };

function startQuiz() {
  landing.classList.add("hidden");
  resultPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  score = 0;
  currentQ = 0;
  scoreEl.textContent = score;
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 25;
  timerEl.textContent = timeLeft;
  startTimer();

  let qObj = questions[currentQ];
  topicLabel.textContent = "Topic: " + qObj.topic;
  questionText.textContent = qObj.q;
  optionsWrap.innerHTML = "";
  feedback.textContent = "";

  topicTotal[qObj.topic]++;

  qObj.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(btn, qObj.answer, qObj.topic);
    optionsWrap.appendChild(btn);
  });
}

function checkAnswer(btn, correct, topic) {
  let chosen = btn.textContent;
  if (chosen === correct) {
    btn.classList.add("correct");
    feedback.textContent = "✅ Correct!";
    score++;
    topicCorrect[topic]++;
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "❌ Wrong!";
    Array.from(optionsWrap.children).forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
  }
  scoreEl.textContent = score;
  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function endQuiz() {
  quizPage.classList.add("hidden");
  resultPage.classList.remove("hidden");

  let prev = localStorage.getItem("quizScore");
  previousScoreEl.textContent = prev ? `Your previous score: ${prev}` : "This is your first attempt.";

  let improvement = prev ? score - prev : 0;
  improvementEl.textContent = prev ? `Improvement: ${improvement >= 0 ? "+"+improvement : improvement}` : "";

  localStorage.setItem("quizScore", score);
  finalScore.textContent = `You scored ${score} / ${questions.length}`;

  topicStats.innerHTML = "<h3>📊 Topic-wise Performance</h3>";
  for (let t in topicTotal) {
    let percent = topicTotal[t] ? ((topicCorrect[t] / topicTotal[t]) * 100).toFixed(1) : 0;
    topicStats.innerHTML += `<p>${t}: ${percent}% correct</p>`;
  }
}

startBtn.onclick = startQuiz;
restartBtn.onclick = startQuiz;

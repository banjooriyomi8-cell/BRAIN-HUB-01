// Brain Hub Quiz Battle — 50 questions, five categories.
const questions = [
  { question: "What is the capital of Nigeria?", options: ["Lagos", "Abuja", "Kano", "Ibadan"], answer: "Abuja", category: "General Knowledge" },
  { question: "How many days are in a leap year?", options: ["365", "366", "364", "360"], answer: "366", category: "General Knowledge" },
  { question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific", category: "General Knowledge" },
  { question: "How many continents are there?", options: ["Five", "Six", "Seven", "Eight"], answer: "Seven", category: "General Knowledge" },
  { question: "Which country is famous for the pyramids of Giza?", options: ["Ghana", "Egypt", "India", "Mexico"], answer: "Egypt", category: "General Knowledge" },
  { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], answer: "Yen", category: "General Knowledge" },
  { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: "Portuguese", category: "General Knowledge" },
  { question: "How many sides does a hexagon have?", options: ["Five", "Six", "Seven", "Eight"], answer: "Six", category: "General Knowledge" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars", category: "General Knowledge" },
  { question: "What is the largest mammal in the world?", options: ["Elephant", "Giraffe", "Blue whale", "Shark"], answer: "Blue whale", category: "General Knowledge" },

  { question: "What is the chemical formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "H2O", category: "Science" },
  { question: "Which organ pumps blood around the body?", options: ["Liver", "Lungs", "Heart", "Kidney"], answer: "Heart", category: "Science" },
  { question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: "Carbon dioxide", category: "Science" },
  { question: "What is the basic unit of life?", options: ["Atom", "Cell", "Organ", "Tissue"], answer: "Cell", category: "Science" },
  { question: "Which force pulls objects toward Earth?", options: ["Friction", "Magnetism", "Gravity", "Electricity"], answer: "Gravity", category: "Science" },
  { question: "What is the nearest star to Earth?", options: ["Sirius", "The Sun", "Polaris", "Alpha Centauri"], answer: "The Sun", category: "Science" },
  { question: "Which part of a plant absorbs water from the soil?", options: ["Leaves", "Flowers", "Roots", "Fruits"], answer: "Roots", category: "Science" },
  { question: "What is the hardest naturally occurring substance?", options: ["Iron", "Quartz", "Diamond", "Gold"], answer: "Diamond", category: "Science" },
  { question: "Which blood cells help fight infections?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "White blood cells", category: "Science" },
  { question: "At sea level, water boils at what temperature?", options: ["50°C", "90°C", "100°C", "120°C"], answer: "100°C", category: "Science" },

  { question: "What is 12 × 8?", options: ["86", "96", "108", "88"], answer: "96", category: "Mathematics" },
  { question: "What is the square root of 144?", options: ["10", "11", "12", "14"], answer: "12", category: "Mathematics" },
  { question: "What is 25% of 200?", options: ["25", "40", "50", "75"], answer: "50", category: "Mathematics" },
  { question: "What is 15 + 27?", options: ["32", "42", "43", "52"], answer: "42", category: "Mathematics" },
  { question: "What is 9 squared?", options: ["18", "72", "81", "99"], answer: "81", category: "Mathematics" },
  { question: "What is half of 3/4?", options: ["3/8", "1/4", "2/3", "1/8"], answer: "3/8", category: "Mathematics" },
  { question: "A triangle has how many angles?", options: ["Two", "Three", "Four", "Five"], answer: "Three", category: "Mathematics" },
  { question: "What is 100 divided by 4?", options: ["20", "25", "40", "50"], answer: "25", category: "Mathematics" },
  { question: "What is the next prime number after 7?", options: ["8", "9", "10", "11"], answer: "11", category: "Mathematics" },
  { question: "If x + 5 = 12, what is x?", options: ["5", "6", "7", "8"], answer: "7", category: "Mathematics" },

  { question: "What comes next: 2, 4, 8, 16, __?", options: ["20", "24", "30", "32"], answer: "32", category: "Logic" },
  { question: "Which number does not belong: 2, 4, 6, 9, 10?", options: ["2", "6", "9", "10"], answer: "9", category: "Logic" },
  { question: "If all roses are flowers, are all flowers roses?", options: ["Yes", "No", "Sometimes always", "Cannot tell"], answer: "No", category: "Logic" },
  { question: "A dozen eggs contains how many eggs?", options: ["6", "10", "12", "24"], answer: "12", category: "Logic" },
  { question: "You overtake the person in second place. What place are you in?", options: ["First", "Second", "Third", "Fourth"], answer: "Second", category: "Logic" },
  { question: "Which is heavier: 1 kg of iron or 1 kg of cotton?", options: ["Iron", "Cotton", "They weigh the same", "Cannot tell"], answer: "They weigh the same", category: "Logic" },
  { question: "If today is Monday, what day is it in 10 days?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], answer: "Thursday", category: "Logic" },
  { question: "A farmer has 10 sheep. All but 3 run away. How many remain?", options: ["3", "7", "10", "0"], answer: "3", category: "Logic" },
  { question: "What comes next: 1, 4, 9, 16, __?", options: ["20", "24", "25", "36"], answer: "25", category: "Logic" },
  { question: "If 5 machines make 5 items in 5 minutes, how long for 100 machines to make 100 items?", options: ["5 minutes", "20 minutes", "100 minutes", "1 minute"], answer: "5 minutes", category: "Logic" },

  { question: "What has keys but cannot open locks?", options: ["A door", "A piano", "A box", "A car"], answer: "A piano", category: "Brain Teasers" },
  { question: "What has a neck but no head?", options: ["A snake", "A bottle", "A chair", "A shoe"], answer: "A bottle", category: "Brain Teasers" },
  { question: "What gets wetter the more it dries?", options: ["A towel", "The sun", "A sponge", "A cloud"], answer: "A towel", category: "Brain Teasers" },
  { question: "What has hands but cannot clap?", options: ["A robot", "A clock", "A baby", "A teacher"], answer: "A clock", category: "Brain Teasers" },
  { question: "What has one eye but cannot see?", options: ["A needle", "An eagle", "A camera", "A person"], answer: "A needle", category: "Brain Teasers" },
  { question: "What goes up but never comes down?", options: ["A balloon", "Your age", "Smoke", "A bird"], answer: "Your age", category: "Brain Teasers" },
  { question: "What has many teeth but cannot bite?", options: ["A lion", "A comb", "A crocodile", "A shark"], answer: "A comb", category: "Brain Teasers" },
  { question: "What can travel around the world while staying in one corner?", options: ["A plane", "A stamp", "The Sun", "A map"], answer: "A stamp", category: "Brain Teasers" },
  { question: "What belongs to you but other people use it more?", options: ["Your money", "Your name", "Your shoes", "Your phone"], answer: "Your name", category: "Brain Teasers" },
  { question: "The more you take, the more you leave behind. What are they?", options: ["Books", "Steps", "Coins", "Pictures"], answer: "Steps", category: "Brain Teasers" }
];

const facts = [
  "Octopuses have three hearts and blue blood.",
  "Honey can remain edible for a very long time when properly sealed and stored.",
  "A group of flamingos is called a flamboyance.",
  "Your brain uses a substantial share of your body's energy, even when you are resting.",
  "Bananas are berries botanically, while strawberries are not true berries."
];
const quotes = [
  "The more you learn, the more you realize how much you don't know.",
  "Small daily improvements lead to remarkable results.",
  "Curiosity is the beginning of lifelong learning.",
  "Your brain grows stronger when you challenge it.",
  "Consistency turns knowledge into progress."
];

const $ = (id) => document.getElementById(id);
const els = {
  progress: $("quiz-progress"), progressBar: $("progress-bar"), scoreLive: $("score-live"),
  welcome: $("welcome-screen"), questionScreen: $("question-screen"), resultScreen: $("result-screen"),
  category: $("category-select"), start: $("start-btn"), number: $("question-number"),
  categoryLabel: $("category-label"), question: $("question-text"), options: $("options"),
  feedback: $("answer-feedback"), answerCount: $("answer-count"), next: $("next-btn"),
  scoreCard: $("score-card"), answeredStat: $("answered-stat"), correctStat: $("correct-stat"),
  remainingStat: $("remaining-stat"), finalScore: $("final-score"), resultMessage: $("result-message"),
  correctCount: $("correct-count"), wrongCount: $("wrong-count"), percentage: $("percentage")
};

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = 0;
let hasAnswered = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function updateStats() {
  const total = quizQuestions.length || questions.length;
  els.scoreLive.textContent = `Score: ${score}`;
  els.scoreCard.textContent = `${score} / ${total}`;
  els.answeredStat.textContent = answered;
  els.correctStat.textContent = score;
  els.remainingStat.textContent = Math.max(total - answered, 0);
  els.progressBar.style.width = `${quizQuestions.length ? (answered / quizQuestions.length) * 100 : 0}%`;
}

function startQuiz() {
  const selectedCategory = els.category.value;
  const filtered = selectedCategory === "All"
    ? questions
    : questions.filter((item) => item.category === selectedCategory);

  quizQuestions = shuffle(filtered);
  currentIndex = 0;
  score = 0;
  answered = 0;
  hasAnswered = false;

  els.welcome.hidden = true;
  els.resultScreen.hidden = true;
  els.questionScreen.hidden = false;
  els.next.disabled = true;
  updateStats();
  showQuestion();
}

function showQuestion() {
  hasAnswered = false;
  const item = quizQuestions[currentIndex];
  if (!item) return showResults();

  els.progress.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  els.number.textContent = currentIndex + 1;
  els.categoryLabel.textContent = item.category.toUpperCase();
  els.question.textContent = item.question;
  els.options.replaceChildren();
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.answerCount.textContent = "Choose one answer";
  els.next.disabled = true;
  els.next.textContent = currentIndex === quizQuestions.length - 1 ? "See Results →" : "Next Question →";

  const letters = ["A", "B", "C", "D"];
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[index];
    const label = document.createElement("span");
    label.textContent = option;
    button.append(letter, label);
    button.addEventListener("click", () => chooseAnswer(option, item, button));
    els.options.appendChild(button);
  });
  updateStats();
}

function chooseAnswer(option, item, selectedButton) {
  if (hasAnswered) return;
  hasAnswered = true;
  answered++;
  const isCorrect = option === item.answer;
  if (isCorrect) score++;

  [...els.options.querySelectorAll("button")].forEach((button) => {
    button.disabled = true;
    const label = button.querySelector("span:last-child").textContent;
    if (label === item.answer) button.classList.add("correct");
    else if (button === selectedButton && !isCorrect) button.classList.add("incorrect");
  });

  els.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  els.feedback.textContent = isCorrect
    ? "Correct! Great thinking. 🎉"
    : `Not quite. The correct answer is: ${item.answer}.`;
  els.answerCount.textContent = isCorrect ? "+1 point" : "Keep going — you've got this!";
  els.next.disabled = false;
  updateStats();
}

function nextQuestion() {
  if (!hasAnswered) return;
  currentIndex++;
  if (currentIndex >= quizQuestions.length) showResults();
  else showQuestion();
}

function showResults() {
  els.questionScreen.hidden = true;
  els.resultScreen.hidden = false;
  const total = quizQuestions.length;
  const wrong = total - score;
  const percent = total ? Math.round((score / total) * 100) : 0;
  els.progress.textContent = "Challenge complete!";
  els.finalScore.textContent = `Your score: ${score}/${total}`;
  els.correctCount.textContent = score;
  els.wrongCount.textContent = wrong;
  els.percentage.textContent = `${percent}%`;
  els.resultMessage.textContent = percent >= 80
    ? "Excellent work! Your brain is on fire. Keep it up!"
    : percent >= 50
      ? "Good effort! Practice makes your brain stronger."
      : "Every challenge is a chance to learn. Try again and beat your score!";
  updateStats();
}

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  $("fact-text").textContent = fact;
  $("fact-card").hidden = false;
  $("fact-card").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
  $("theme-toggle").textContent = document.body.classList.contains("light-mode") ? "🌙 Dark mode" : "☀️ Light mode";
}

function rotateQuote() {
  $("quote-text").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

els.start.addEventListener("click", startQuiz);
els.next.addEventListener("click", nextQuestion);
$("play-again-btn").addEventListener("click", startQuiz);
$("fact-btn").addEventListener("click", showFact);
$("theme-toggle").addEventListener("click", toggleTheme);
$("year").textContent = new Date().getFullYear();
rotateQuote();

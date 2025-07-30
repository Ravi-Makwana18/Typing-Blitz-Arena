const testItem = document.getElementById("textDisplay");
const inputItem = document.getElementById("textInput");
const timeName = document.getElementById("timeName");
const time = document.getElementById("time");
const cwName = document.getElementById("cwName");
const cw = document.getElementById("cw");
const wpmName = document.getElementById("wpmName");
const wpm = document.getElementById("wpm");
const accuracyName = document.getElementById("accuracyName");
const accuracy = document.getElementById("accuracy");
const restartBtn = document.getElementById("restartBtn");
const thirty = document.getElementById("thirty");
const sixty = document.getElementById("sixty");
const beg = document.getElementById("beg");
const pro = document.getElementById("pro");
const resultsModal = document.getElementById("resultsModal");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const shareBtn = document.getElementById("shareBtn");

// --- Configuration ---
const API_BASE_URL = 'https://typing-blitz-arena.vercel.app/';

// Hardcoded word lists for fallback
const hardWordsFallback = [  "ability", "able", "about", "above", "accept", "according", "account", "across", "action", "activity", "actually", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "agency", "agent", "ago", "agree", "agreement", "ahead", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "around", "arrive", "article", "artist", "assume", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "ball", "bank", "beat", "beautiful", "because", "become", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "bill", "billion", "black", "blood", "blue", "board", "body", "book", "born", "both", "break", "bring", "brother", "budget", "build", "building", "business", "call", "camera", "campaign", "cancer", "candidate", "capital", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "dark", "data", "daughter", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "doctor", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "general", "generation", "girl", "give", "glass", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "head", "health", "hear", "heart", "heat", "heavy", "help", "here", "herself", "high", "him", "himself", "his", "history", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "item", "it's", "itself", "join", "just", "keep", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lead", "leader", "learn", "least", "leave", "left", "legal", "less", "letter", "level", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "love", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "maybe", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "news", "newspaper", "next", "nice", "night", "none", "north", "note", "nothing", "notice", "number", "occur", "off", "offer", "office", "officer", "official", "often", "once", "only", "onto", "open", "operation", "opportunity", "option", "order", "organization", "other", "others", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "peace", "people", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "safe", "same", "save", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "situation", "size", "skill", "skin", "small", "smile", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "tend", "term", "test", "than", "thank", "that", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "today", "together", "tonight", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "type", "under", "understand", "unit", "until", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "watch", "water", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "whole", "whom", "whose", "wide", "wife", "will", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "young", "your", "yourself"];
const basicWordsFallback = ["a", "about", "above", "across", "act",  "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone",  "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "aunt",  "away", "baby", "back", "bad", "bag", "ball", "bank", "base",  "bath", "be", "bean", "bear",  "bed", "beer", "before", "begin", "bell", "below", "best", "big", "bird", "birth",  "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "both",  "bowl", "box", "boy", "branch", "brave", "bread", "break", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn",  "bus", "busy", "but", "buy", "by", "cake", "call", "can",  "cap", "car", "card", "care", "carry", "case", "cat", "catch",  "chair", "chase", "cheap", "cheese",  "child",   "choice",  "circle", "city", "class", "clever", "clean", "clear", "climb", "clock", "cloth",  "cloud",  "close", "coffee", "coat", "coin", "cold",  "colour", "comb",  "common", "compare", "come",  "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost",  "count",   "cover", "crash", "cross", "cry", "cup",  "cut", "dance",  "dark",  "day", "dead", "decide", "deep", "deer",  "desk",   "die",  "dirty",  "dish", "do", "dog", "door",  "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty", "each", "ear", "early", "earn", "earth", "east", "easy", "eat", "effect", "egg", "eight",   "else", "empty", "end", "enemy", "enjoy",  "enter", "equal",  "even",  "event", "ever", "every",  "exact",   "except",  "expect",  "explain",  "eye", "face", "fact", "fail", "fall", "false", "family", "famous", "far", "farm",  "fast", "fat", "fault", "fear", "feed", "feel", "fever", "few", "fight", "fill", "film", "find", "fine",  "fire", "first", "fish", "fit", "five", "fix", "flag", "flat", "float", "floor", "flour",  "fly", "fold", "food", "fool", "foot", "for", "force",  "forest", "forget",  "fork", "form", "fox", "four", "free", "freeze", "fresh", "friend",  "from", "front", "fruit", "full", "fun", "funny",   "future", "game",  "gate","get", "gift", "give", "glad", "glass", "go", "goat", "god", "gold", "good",   "grass", "grave", "great", "green", "gray",  "group", "grow", "gun", "hair", "half", "hall",  "hand",  "happy", "hard", "hat", "hate", "have", "he", "head",  "hear", "heavy", "heart",  "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole",  "home", "hope", "horse",  "hot", "hotel", "house", "how",  "hour", "hurry",  "hurt", "I", "ice", "idea", "if",  "in",   "into", "invent", "iron",  "is", "island", "it", "its", "jelly", "job", "join", "juice", "jump", "just", "keep", "key", "kill", "kind", "king",  "knee", "knife", "knock", "know", "lady", "lamp", "land", "large", "last", "late", "laugh", "lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "lie", "life", "light", "like", "lion", "lip", "list",  "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "luck",  "main", "make", "male", "man", "many", "map", "mark", "may", "me", "meal", "mean", "meat",  "meet",  "milk", "mind",  "miss",  "mix", "model",   "money",  "month", "moon", "more",  "most",  "mouth", "move", "much", "music", "must", "my", "name",  "near", "neck", "need", "needle",  "net", "never", "new", "news",  "next", "nice", "night", "nine", "no", "noble", "noise", "none", "nor", "north", "nose", "not",  "notice", "now",  "obey",  "ocean", "of", "off", "offer", "office", "often", "oil", "old", "on", "one", "only", "open",  "or", "orange", "order", "other", "our", "out",  "over", "own", "page", "pain", "paint", "pair", "pan", "paper",  "park", "part",  "party", "pass", "past", "path", "pay", "peace", "pen",   "per",  "piano", "pick",  "piece", "pig", "pin", "pink", "place", "plane", "plant",  "plate", "play", "please",  "plenty",  "point",  "polite", "pool", "poor",    "pour", "power",  "press", "pretty",  "price", "prince", "prison",  "prize",      "pull", "punish", "pupil", "push", "put", "queen",  "quick", "quiet", "radio", "rain", "rainy", "raise", "reach", "read", "ready", "real",  "red",   "rent",   "reply", "rest",  "rice", "rich", "ride", "right", "ring", "rise", "road", "rob", "rock", "room", "round", "rude", "rule", "ruler", "run", "rush", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school",  "search", "seat", "second", "see", "seem", "sell", "send",  "serve", "seven", "sex", "shade",  "shake", "shape", "share", "sharp", "she", "sheep", "sheet",  "shine", "ship", "shirt", "shoe", "shoot", "shop", "short",   "shout", "show", "sick", "side",   "silly", "silver",  "simple", "single", "since", "sing", "sink", "sister", "sit", "six", "size", "skill", "skin", "skirt", "sky", "sleep", "slip", "slow", "small", "smell", "smile", "smoke", "snow", "so", "soap", "sock", "soft", "some",  "son", "soon", "sorry", "sound", "soup", "south", "space", "speak",  "speed", "spell", "spend", "spoon", "sport", "spread", "spring", "square", "stamp", "stand", "star", "start",  "stay", "steal", "steam", "step", "still",  "stone", "stop", "store", "storm", "story",  "street", "study", "stupid",  "such", "sugar",  "sun", "sunny",  "sure",  "sweet", "swim", "sword", "table", "take", "talk", "tall", "taste", "taxi", "tea", "teach", "team", "tear",   "tell", "ten", "tennis", "test", "than", "that", "the", "their", "then", "there",  "these", "thick", "thin", "thing", "think", "third", "this",  "threat", "three", "tidy", "tie", "title", "to", "today", "toe", "too", "tool", "tooth", "top", "total", "touch", "town", "train", "tram",  "tree",  "true", "trust", "twice", "try", "turn", "type", "ugly", "uncle", "under",  "unit", "until", "up", "use", "useful", "usual", "usually",  "very",  "voice", "visit", "wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water", "way", "we", "weak", "wear",  "week", "weight",  "were", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while", "white", "who", "why", "wide", "wife", "wild", "will", "win", "wind",  "wine",  "wire", "wise", "wish", "with",  "woman",  "word", "work", "world", "worry", "yard", "yell",  "yet", "you", "young", "your", "zero", "zoo"];


// Function to fetch words from the backend
const getWords = async () => {
  try {
    const result = await axios.get(`${API_BASE_URL}/getWords`);
    if (result.status === 200) {
      localStorage.setItem('basicWords', JSON.stringify(result.data.basic));
      localStorage.setItem('topWords', JSON.stringify(result.data.hard));
      console.log("Words fetched and stored in localStorage.");
    } else {
      console.warn("Server returned non-200 status:", result.status);
      useFallbackWords();
    }
  } catch (err) {
    console.error("Error fetching words from server:", err);
    useFallbackWords();
  }
  displayTest(difficulty);
};

// Function to use hardcoded fallback words
function useFallbackWords() {
    console.log("Using hardcoded fallback words as server words could not be fetched.");
    localStorage.setItem('basicWords', JSON.stringify(basicWordsFallback));
    localStorage.setItem('topWords', JSON.stringify(hardWordsFallback));
}

// Call getWords once when the script loads
getWords();

let wordNo = 1;
let wordsSubmitted = 0;
let wordsCorrect = 0;
let timer = 30;
let flag = 0;
let factor = 2; 
let seconds; 
let difficulty = 1;
let startTime = 0;
let totalCharactersTyped = 0;
let totalErrors = 0;
let currentWordErrors = 0;

// --- Event Listeners ---
inputItem.addEventListener('input', function (event) {
  if (flag === 0) {
    flag = 1;
    startTime = Date.now();
    timeStart();
  }
  
  const charEntered = event.data;
  totalCharactersTyped++;
  
  if (/\s/g.test(charEntered)) {
    checkWord();
  } else {
    currentWord();
  }
  
  // Update real-time metrics
  updateRealTimeMetrics();
});

thirty.addEventListener("click", function () {
  if (flag === 0 || time.innerText === "0%") { 
    timer = 30;
    factor = 2;
    limitColor(thirty, sixty);
    time.innerText = timer;
    restartTest();
  }
});
sixty.addEventListener("click", function () {
  if (flag === 0 || time.innerText === "0%") {
    timer = 60;
    factor = 1;
    limitColor(sixty, thirty);
    time.innerText = timer;
    restartTest();
  }
});

beg.addEventListener("click", function () {
  if (flag === 0 || time.innerText === "0%") { 
    difficulty = 1;
    limitColor(beg, pro);
    restartTest();
  }
});
pro.addEventListener("click", function () {
  if (flag === 0 || time.innerText === "0%") {
    difficulty = 2;
    limitColor(pro, beg);
    restartTest();
  }
});

restartBtn.addEventListener("click", restartTest);

// Results modal event listeners
tryAgainBtn.addEventListener("click", function() {
  hideResultsModal();
  restartTest();
});

shareBtn.addEventListener("click", function() {
  shareResults();
});

// Close modal when clicking outside
resultsModal.addEventListener("click", function(e) {
  if (e.target === resultsModal) {
    hideResultsModal();
  }
});

// --- Core Game Functions ---

function restartTest() {
  wordsSubmitted = 0;
  wordsCorrect = 0;
  totalCharactersTyped = 0;
  totalErrors = 0;
  currentWordErrors = 0;
  flag = 0;
  startTime = 0;

  clearInterval(seconds);

  time.classList.remove("current");
  cw.classList.remove("current");
  wpm.classList.remove("current");
  accuracy.classList.remove("current");
  
  time.innerText = timer;
  timeName.innerText = "Time";
  cw.innerText = wordsCorrect;
  cwName.innerText = "Words";
  wpm.innerText = "0";
  wpmName.innerText = "WPM";
  accuracy.innerText = "100%";
  accuracyName.innerText = "Accuracy";
  
  inputItem.disabled = false;
  inputItem.value = '';
  inputItem.focus();

  displayTest(difficulty);
  limitVisible();
}

function timeStart() {
  limitInvisible();
  seconds = setInterval(function () {
    time.innerText--;
    updateRealTimeMetrics(); // Update metrics every second
    if (time.innerText == "0") {
      timeOver();
      clearInterval(seconds);
    }
  }, 1000);
}

function timeOver() {
  inputItem.disabled = true;
  restartBtn.focus();
  displayScore();
  
  // Show results modal after a short delay
  setTimeout(() => {
    showResultsModal();
  }, 1000);
}

function limitColor(itema, itemr) {
  itema.classList.add('yellow');
  itemr.classList.remove('yellow');
}

function limitVisible() {
  thirty.style.visibility = 'visible';
  sixty.style.visibility = 'visible';
  beg.style.visibility = 'visible';
  pro.style.visibility = 'visible';
}

function limitInvisible() {
  thirty.style.visibility = 'hidden';
  sixty.style.visibility = 'hidden';
  beg.style.visibility = 'hidden';
  pro.style.visibility = 'hidden';
}

function displayScore() {
  const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
  const finalWPM = calculateWPM(timeElapsed);
  const finalAccuracy = calculateAccuracy();

  time.classList.add("current");
  cw.classList.add("current");
  wpm.classList.add("current");
  accuracy.classList.add("current");

  time.innerText = Math.round(timeElapsed * 60) + "s";
  timeName.innerText = "Time";

  cw.innerText = wordsCorrect;
  cwName.innerText = "Correct";

  wpm.innerText = finalWPM;
  wpmName.innerText = "WPM";

  accuracy.innerText = finalAccuracy + "%";
  accuracyName.innerText = "Accuracy";
}

function currentWord() {
  const wordEntered = inputItem.value;
  const currentID = "word " + wordNo;
  const currentSpan = document.getElementById(currentID);

  if (!currentSpan) return;

  const curSpanWord = currentSpan.innerText.trim();
  
  // Reset current word errors for new word
  if (wordEntered.length === 1) {
    currentWordErrors = 0;
  }

  if (wordEntered === curSpanWord.substring(0, wordEntered.length)) {
    colorSpan(currentID, 2);
  } else {
    colorSpan(currentID, 3);
    if (wordEntered.length <= curSpanWord.length) {
      currentWordErrors++;
      totalErrors++;
    }
  }
}

function checkWord() {
  const wordEntered = inputItem.value.trim();
  inputItem.value = '';

  const wordID = "word " + wordNo;
  const checkSpan = document.getElementById(wordID);

  if (!checkSpan) return;

  const targetWord = checkSpan.innerText.trim();

  wordsSubmitted++;

  if (targetWord === wordEntered) {
    colorSpan(wordID, 1);
    wordsCorrect++;
    cw.innerText = wordsCorrect;
  } else {
    colorSpan(wordID, 3);
  }

  wordNo++;

  if (wordNo > 40) {
    displayTest(difficulty);
  } else {
    const nextID = "word " + wordNo;
    colorSpan(nextID, 2);
  }

  const nextWordElement = document.getElementById("word " + wordNo);
  if (nextWordElement) {
      const textDisplayRect = testItem.getBoundingClientRect();
      const nextWordRect = nextWordElement.getBoundingClientRect();

      if (nextWordRect.top < textDisplayRect.top || nextWordRect.bottom > textDisplayRect.bottom) {
          testItem.scrollTop = nextWordElement.offsetTop - (textDisplayRect.height / 2) + (nextWordRect.height / 2);
      }
  }
}

// --- New Metrics Functions ---

function calculateWPM(timeInMinutes) {
  if (timeInMinutes === 0) return 0;
  // Standard WPM calculation: (total characters typed / 5) / time in minutes
  // Subtract errors to get net WPM
  const grossWPM = (totalCharactersTyped / 5) / timeInMinutes;
  const netWPM = Math.max(0, grossWPM - (totalErrors / timeInMinutes));
  return Math.round(netWPM);
}

function calculateAccuracy() {
  if (totalCharactersTyped === 0) return 100;
  const accuracyPercent = ((totalCharactersTyped - totalErrors) / totalCharactersTyped) * 100;
  return Math.max(0, Math.round(accuracyPercent));
}

function updateRealTimeMetrics() {
  if (startTime === 0) return;
  
  const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
  
  if (timeElapsed > 0) {
    const currentWPM = calculateWPM(timeElapsed);
    const currentAccuracy = calculateAccuracy();
    
    // Update display during typing
    if (flag === 1 && time.innerText !== "0") {
      wpm.innerText = currentWPM;
      accuracy.innerText = currentAccuracy + "%";
      cw.innerText = wordsCorrect;
    }
  }
}

// --- Results Modal Functions ---

function showResultsModal() {
  const timeElapsed = (Date.now() - startTime) / 1000 / 60;
  const finalWPM = calculateWPM(timeElapsed);
  const finalAccuracy = calculateAccuracy();
  
  // Update modal content
  document.getElementById("finalWPM").innerText = finalWPM;
  document.getElementById("finalAccuracy").innerText = finalAccuracy + "%";
  document.getElementById("finalCorrect").innerText = wordsCorrect;
  document.getElementById("finalTotal").innerText = wordsSubmitted;
  
  // Show modal
  resultsModal.classList.add("show");
}

function hideResultsModal() {
  resultsModal.classList.remove("show");
}

function shareResults() {
  const timeElapsed = (Date.now() - startTime) / 1000 / 60;
  const finalWPM = calculateWPM(timeElapsed);
  const finalAccuracy = calculateAccuracy();
  
  const shareText = `🔥 Just completed a typing test on Typing Blitz Arena!

📊 My Results:
⚡ WPM: ${finalWPM}
🎯 Accuracy: ${finalAccuracy}%
✅ Correct Words: ${wordsCorrect}/${wordsSubmitted}
⏱️ Time: ${timer}s (${difficulty === 1 ? 'Beginner' : 'Pro'} mode)

Think you can beat my score? Try it at: ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: 'Typing Blitz Arena Results',
      text: shareText,
      url: window.location.href
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(shareText).then(() => {
      // Show temporary notification
      const notification = document.createElement('div');
      notification.textContent = 'Results copied to clipboard! 📋';
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #34d399, #10b981);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(52, 211, 153, 0.4);
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }).catch(() => {
      alert('Unable to share results. Your browser might not support this feature.');
    });
  }
}

// --- Performance Tracking ---

function getPerformanceGrade(wpm, accuracy) {
  if (wpm >= 60 && accuracy >= 95) return { grade: 'S+', color: '#fbbf24', emoji: '🏆' };
  if (wpm >= 50 && accuracy >= 90) return { grade: 'S', color: '#34d399', emoji: '⭐' };
  if (wpm >= 40 && accuracy >= 85) return { grade: 'A', color: '#60a5fa', emoji: '🔥' };
  if (wpm >= 30 && accuracy >= 80) return { grade: 'B', color: '#a78bfa', emoji: '💪' };
  if (wpm >= 20 && accuracy >= 70) return { grade: 'C', color: '#fb7185', emoji: '👍' };
  return { grade: 'D', color: '#9ca3af', emoji: '📚' };
}

function colorSpan(id, color) {
  const span = document.getElementById(id);
  if (!span) return;

  span.classList.remove('correct', 'wrong', 'current');

  if (color === 1) {
    span.classList.add('correct');
  } else if (color === 2) {
    span.classList.add('current');
  } else if (color === 3) {
    span.classList.add('wrong');
  }
}

function displayTest(diff) {
  wordNo = 1;
  testItem.innerHTML = '';

  let newTest = randomWords(diff);
  newTest.forEach(function (word, i) {
    let wordSpan = document.createElement('span');
    wordSpan.innerText = word + " ";
    wordSpan.setAttribute("id", "word " + (i + 1));
    testItem.appendChild(wordSpan);
  });

  const nextID = "word " + wordNo;
  colorSpan(nextID, 2);
  testItem.scrollTop = 0;
}

function randomWords(diff) {
  const topWords = JSON.parse(localStorage.getItem('topWords'));
  const basicWords = JSON.parse(localStorage.getItem('basicWords'));

  let wordArray = [];
  if (diff === 1) {
    wordArray = basicWords || [];
  } else {
    wordArray = topWords || [];
  }

  if (wordArray.length === 0) {
      console.warn("Word list is empty. Cannot generate random words. Using hardcoded fallback.");
      return ["error", "loading", "words", "please", "check", "server", "and", "refresh"];
  }

  const selectedWords = [];
  for (let i = 0; i < 50; i++) {
    const randomNumber = Math.floor(Math.random() * wordArray.length);
    selectedWords.push(wordArray[randomNumber]);
  }
  return selectedWords;
}
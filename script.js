const moods = [
  { id: "happy", icon: "😊", title: "Happy", desc: "Bright, energetic songs to lift your mood." },
  { id: "sad", icon: "😢", title: "Sad", desc: "Soft emotional songs for slow moments." },
  { id: "focus", icon: "🎯", title: "Focus", desc: "Calm music for studying and deep work." },
  { id: "chill", icon: "😌", title: "Chill", desc: "Relaxing songs for peaceful vibes." },
  { id: "angry", icon: "😤", title: "Angry", desc: "Powerful tracks to release frustration." },
  { id: "romantic", icon: "❤️", title: "Romantic", desc: "Love songs for dreamy moods." }
];

const moodData = {
  english: {
    happy: {
      video: "ZbZSe6N_BXs",
      title: "English Happy Playlist",
      desc: "A bright English playlist for happy, energetic moments.",
      songs: ["Happy - Pharrell Williams", "Good Time - Owl City", "Can’t Stop The Feeling - Justin Timberlake"]
    },
    sad: {
      video: "hLQl3WQQoQ0",
      title: "English Sad Playlist",
      desc: "Emotional English songs for calm and heavy moods.",
      songs: ["Someone Like You - Adele", "Let Her Go - Passenger", "Fix You - Coldplay"]
    },
    focus: {
      video: "jfKfPfyJRdk",
      title: "English Focus Playlist",
      desc: "Soft lofi music to help you focus while studying.",
      songs: ["Lofi Beats", "Study Chillhop", "Calm Focus Mix"]
    },
    chill: {
      video: "5qap5aO4i9A",
      title: "English Chill Playlist",
      desc: "Relaxed English vibe for slow evenings.",
      songs: ["Chill Mix", "Soft Pop", "Calm Acoustic"]
    },
    angry: {
      video: "btPJPFnesV4",
      title: "English Power Playlist",
      desc: "Strong songs to convert anger into energy.",
      songs: ["Eye of the Tiger", "Stronger", "Believer"]
    },
    romantic: {
      video: "450p7goxZqg",
      title: "English Romantic Playlist",
      desc: "Sweet love songs for romantic moods.",
      songs: ["All of Me", "Perfect", "Thinking Out Loud"]
    }
  },

  hindi: {
    happy: {
      video: "H2f7MZaw3Yo",
      title: "Hindi Happy Playlist",
      desc: "Bollywood happy songs for cheerful energy.",
      songs: ["Gallan Goodiyaan", "London Thumakda", "Badtameez Dil"]
    },
    sad: {
      video: "284Ov7ysmfA",
      title: "Hindi Sad Playlist",
      desc: "Emotional Hindi songs for deep feelings.",
      songs: ["Channa Mereya", "Agar Tum Saath Ho", "Kabira"]
    },
    focus: {
      video: "DWcJFNfaw9c",
      title: "Hindi Focus Playlist",
      desc: "Hindi lofi songs for study and focus.",
      songs: ["Hindi Lofi Mix", "Bollywood Chill Beats", "Study Lofi"]
    },
    chill: {
      video: "sFMRqxCexDk",
      title: "Hindi Chill Playlist",
      desc: "Soft Hindi songs for relaxed moods.",
      songs: ["Ilahi", "Safarnama", "Khaabon Ke Parinday"]
    },
    angry: {
      video: "l_MyUGq7pgs",
      title: "Hindi Motivation Playlist",
      desc: "Powerful Bollywood songs for motivation.",
      songs: ["Zinda", "Sultan", "Kar Har Maidaan Fateh"]
    },
    romantic: {
      video: "hoNb6HuNmU0",
      title: "Hindi Romantic Playlist",
      desc: "Hindi romantic songs for love vibes.",
      songs: ["Raabta", "Tum Hi Ho", "Kesariya"]
    }
  },

  kannada: {
    happy: {
      video: "2bMEe0UYaMw",
      title: "Kannada Happy Playlist",
      desc: "Kannada songs with happy and positive energy.",
      songs: ["Kannada Happy Hits", "Feel Good Kannada", "Kannada Dance Vibes"]
    },
    sad: {
      video: "cAMHx-m9oh8",
      title: "Kannada Sad Playlist",
      desc: "Emotional Kannada songs for soft moments.",
      songs: ["Kannada Sad Hits", "Melody Kannada", "Emotional Mix"]
    },
    focus: {
      video: "jfKfPfyJRdk",
      title: "Kannada Focus Playlist",
      desc: "Calm instrumental/lofi vibe for focus.",
      songs: ["Study Beats", "Calm Lofi", "Focus Music"]
    },
    chill: {
      video: "5qap5aO4i9A",
      title: "Kannada Chill Playlist",
      desc: "Relaxed Kannada-style chill vibe.",
      songs: ["Kannada Chill Mix", "Soft Melody", "Evening Vibes"]
    },
    angry: {
      video: "mgmVOuLgFB0",
      title: "Kannada Power Playlist",
      desc: "Strong music for confidence and energy.",
      songs: ["Power Hits", "Mass Kannada", "Motivation Mix"]
    },
    romantic: {
      video: "rRzxEiBLQCA",
      title: "Kannada Romantic Playlist",
      desc: "Kannada love songs for romantic moods.",
      songs: ["Kannada Love Hits", "Melody Love", "Romantic Mix"]
    }
  }
};

const fallbackLanguages = ["telugu", "tamil", "malayalam", "korean", "japanese"];

fallbackLanguages.forEach(lang => {
  moodData[lang] = JSON.parse(JSON.stringify(moodData.english));

  Object.keys(moodData[lang]).forEach(mood => {
    moodData[lang][mood].title = `${capitalize(lang)} ${capitalize(mood)} Playlist`;
    moodData[lang][mood].desc = `A ${capitalize(lang)} inspired ${mood} playlist selected for your vibe.`;
  });
});

const quotes = {
  happy: "Keep the energy bright. Today is yours.",
  sad: "It is okay to feel soft. Music will sit with you.",
  focus: "One song, one task, one strong step.",
  chill: "Slow down. You are still moving forward.",
  angry: "Turn the fire into power.",
  romantic: "Some songs feel like memories."
};

const moodGrid = document.getElementById("moodGrid");
const languageSelect = document.getElementById("languageSelect");
const intensityRange = document.getElementById("intensityRange");
const intensityText = document.getElementById("intensityText");
const loader = document.getElementById("loader");
const emptyState = document.getElementById("emptyState");
const playerContent = document.getElementById("playerContent");
const youtubePlayer = document.getElementById("youtubePlayer");
const playlistTitle = document.getElementById("playlistTitle");
const playlistDesc = document.getElementById("playlistDesc");
const songList = document.getElementById("songList");
const languageBadge = document.getElementById("languageBadge");
const youtubeLink = document.getElementById("youtubeLink");
const favBtn = document.getElementById("favBtn");
const quoteText = document.getElementById("quoteText");
const favoritesList = document.getElementById("favoritesList");
const recentList = document.getElementById("recentList");

let currentMood = null;
let currentLanguage = "english";

function renderMoodCards() {
  moodGrid.innerHTML = moods.map(mood => `
    <div class="mood-card" onclick="playMood('${mood.id}')">
      <span>${mood.icon}</span>
      <h2>${mood.title}</h2>
      <p>${mood.desc}</p>
    </div>
  `).join("");
}

function playMood(mood) {
  currentMood = mood;
  currentLanguage = languageSelect.value;

  loader.classList.remove("hidden");
  emptyState.classList.add("hidden");
  playerContent.classList.add("hidden");

  setTimeout(() => {
    const data = moodData[currentLanguage][mood];
    const intensity = intensityRange.value;
    const videoId = data.video;

    youtubePlayer.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

    playlistTitle.textContent = `${data.title} - ${getIntensityName(intensity)}`;
    playlistDesc.textContent = data.desc;
    languageBadge.textContent = `Language: ${capitalize(currentLanguage)}`;
    quoteText.textContent = quotes[mood];

    songList.innerHTML = data.songs.map(song => `<li>${song}</li>`).join("");

    youtubeLink.href = `https://www.youtube.com/watch?v=${videoId}`;
    favBtn.onclick = () => addFavorite(currentLanguage, mood);

    loader.classList.add("hidden");
    playerContent.classList.remove("hidden");

    saveRecent(currentLanguage, mood);
  }, 700);
}

function getIntensityName(value) {
  if (value == 1) return "Soft";
  if (value == 2) return "Balanced";
  return "High Energy";
}

intensityRange.addEventListener("input", () => {
  intensityText.textContent = `${getIntensityName(intensityRange.value)} vibe`;
});

document.getElementById("searchBtn").addEventListener("click", () => {
  let input = document.getElementById("moodSearch").value.toLowerCase().trim();

  if (input.includes("tired") || input.includes("relax")) input = "chill";
  if (input.includes("study") || input.includes("work")) input = "focus";
  if (input.includes("love") || input.includes("crush")) input = "romantic";
  if (input.includes("angry") || input.includes("mad")) input = "angry";
  if (input.includes("cry") || input.includes("low")) input = "sad";
  if (input.includes("joy") || input.includes("dance")) input = "happy";

  if (moodData[languageSelect.value][input]) {
    playMood(input);
  } else {
    alert("Try words like happy, sad, tired, love, study, angry");
  }
});

document.getElementById("randomBtn").addEventListener("click", () => {
  const random = moods[Math.floor(Math.random() * moods.length)].id;
  playMood(random);
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

function addFavorite(language, mood) {
  let favs = JSON.parse(localStorage.getItem("musicFavs")) || [];

  const exists = favs.some(item => item.language === language && item.mood === mood);

  if (!exists) {
    favs.push({ language, mood });
  }

  localStorage.setItem("musicFavs", JSON.stringify(favs));
  renderFavorites();
}

function renderFavorites() {
  let favs = JSON.parse(localStorage.getItem("musicFavs")) || [];

  if (favs.length === 0) {
    favoritesList.innerHTML = `<p>No favorites yet.</p>`;
    return;
  }

  favoritesList.innerHTML = favs.map((item, index) => `
    <div class="saved-item">
      <span onclick="quickPlay('${item.language}', '${item.mood}')">
        ${capitalize(item.language)} - ${capitalize(item.mood)}
      </span>
      <button class="delete-btn" onclick="deleteFavorite(${index})">Delete</button>
    </div>
  `).join("");
}

function deleteFavorite(index) {
  let favs = JSON.parse(localStorage.getItem("musicFavs")) || [];
  favs.splice(index, 1);
  localStorage.setItem("musicFavs", JSON.stringify(favs));
  renderFavorites();
}

function saveRecent(language, mood) {
  let recent = JSON.parse(localStorage.getItem("musicRecent")) || [];

  recent = recent.filter(item => !(item.language === language && item.mood === mood));
  recent.unshift({ language, mood });
  recent = recent.slice(0, 6);

  localStorage.setItem("musicRecent", JSON.stringify(recent));
  renderRecent();
}

function renderRecent() {
  let recent = JSON.parse(localStorage.getItem("musicRecent")) || [];

  if (recent.length === 0) {
    recentList.innerHTML = `<p>No recently played yet.</p>`;
    return;
  }

  recentList.innerHTML = recent.map((item, index) => `
    <div class="saved-item">
      <span onclick="quickPlay('${item.language}', '${item.mood}')">
        ${capitalize(item.language)} - ${capitalize(item.mood)}
      </span>
      <button class="delete-btn" onclick="deleteRecent(${index})">Delete</button>
    </div>
  `).join("");
}

function deleteRecent(index) {
  let recent = JSON.parse(localStorage.getItem("musicRecent")) || [];
  recent.splice(index, 1);
  localStorage.setItem("musicRecent", JSON.stringify(recent));
  renderRecent();
}

function quickPlay(language, mood) {
  languageSelect.value = language;
  playMood(mood);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

renderMoodCards();
renderFavorites();
renderRecent();
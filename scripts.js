let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

// This code is for the voice selection 😄
window.speechSynthesis.onvoiceschanged = () => {
  console.log("voices changed");
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// This code is event listener for the voice selection 😄
voiceSelect.addEventListener("change", () => {
  console.log("voice changed");
  speech.voice = voices[voiceSelect.value];
});

// This code is for the button 😄
document.querySelector("button").addEventListener("click", () => {
  console.log("button clicked");
  speech.text = document.querySelector("textarea").value;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
});



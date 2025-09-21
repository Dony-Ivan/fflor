// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
   { text: "Two Augusts ago", time: 0 },
  { text: "I told the truth, oh, but you didn't like it, you went home", time: 2 },
  { text: "You're in your Benz, I'm by the gate", time: 10 },
  { text: "Now you go alone", time: 14 },
  { text: "Charm all the people you train for, you mean well but aim low", time: 17 },
  { text: "And I'll make it known like I'm getting paid", time: 22 },
  { text: "That's just the way life goes", time: 30 },
  { text: "I like to slam doors closed", time: 29 },
  { text: "Trust me, I know it's always about me", time: 32 },
  { text: "I love you, I'm sorry", time: 36 },
  { text: "Two summers from now", time: 40 },
  { text: "We'll have been talking, but not all that often, we're cool now", time: 43 },
  { text: "I'll be on a boat, you're on a plane", time: 49 },
  { text: "Going somewhere, same", time: 52 },
  { text: "And I'll have a drink", time: 55 },
  { text: "Wistfully lean out my window and watch the sun set on the lake", time: 57 },
  { text: "I might not feel real, but it's okay, mh", time: 63 },
  { text: "'Cause that's just the way life goes", time: 67 },
  { text: "I push my luck, it shows", time: 70 },
  { text: "Thankful you don't send someone to kill me", time: 73 },
  { text: "I love you, I'm sorry", time: 77 },
  { text: "You were the best but you were the worst", time: 82 },
  { text: "As sick as it sounds, I loved you first", time: 85 },
  { text: "I was a dick, it is what it is", time: 88 },
  { text: "A habit to kick, the age-old curse", time: 91 },
  { text: "I tend to laugh whenever I'm sad", time: 94 },
  { text: "I stare at the crash, it actually works", time: 97 },
  { text: "Making amends, this shit never ends", time: 100 },
  { text: "I'm wrong again, wrong again", time: 103 },
  { text: "The way life goes", time: 107 },
  { text: "Joyriding down our road", time: 109 },
  { text: "Lay on the horn to prove that it haunts me", time: 112 },
  { text: "I love you, I'm sorry", time: 116 },
  { text: "The way life goes (you were the best but you were the worst)", time: 121 },
  { text: "(As sick as it sounds, I loved you first)", time: 125 },
  { text: "I wanna speak in code (I was a dick, it is what it is)", time: 129 },
  { text: "(A habit to kick, the age-old curse)", time: 133 },
  { text: "Hope that I don't, won't make it about me (I tend to laugh whenever I'm sad)", time: 137 },
  { text: "(Stare at the crash, it actually works)", time: 142 },
  { text: "I love you, I'm sorry", time: 146 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
const message = `HAPPY BIRTHDAY!\nOn your birthday I just want to pause for a moment and tell you how grateful I am that you exist, not just today, but in my life, in my world, in the quiet corners where your presence has always meant more than you know. You are one of those rare people who make life feel lighter simply by being on around, the kind of friend who turns ordinary days into memories and hard moments into something survivable. I'm thankful for every laugh we've shared, every late conversation, every comfortable silence, and every time you stayed when leaving would've been easier. You've seen me as I am, imperfect and growing, and you never asked me to be anything else, and that kind of acceptance is a gift I hold close to my heart. On your birthday, I hope you realize how deeply appreciated you are, how your kindness ripples into the lives around you, and how your existence alone has already made this world softer and warmer. I pray that this new year of your life brings you peace when you're tired, courage when you're unsure, and happiness that doesn't feel rushed or temporary. May your dreams feel closer, your heart feel lighter, and your path be 100 guided by goodness even on days you don't understand the journey. I hope you're surrounded by love that feels genuine, opportunities that feel right, and moments that remind you how special you truly are. Thank you for being my safe place, my laughter, my reminder that friendship can be pure and steady. Happy birthday tosomeone who deserves all the good things this life has to offer-today and always,know that you are cherished, celebrated,and loved in ways words will never fully capture, but my heart understands completely.\n\nI hope this new year of your life brings you endless happiness, good health, success in every direction, and so much love. You deserve all the beautiful things in this world. And I truly pray that our friendship lasts sampai kita tua — sampai rambut kita dah putih, sampai tangan kita dah menggigil, sampai kita tak ingat semua benda… tapi kita masih ingat each other.\n\nAnd I want you to know this: I’ll always be here for you. Just like how you’ve always been there for me. No matter what happens, no matter how busy life gets, no matter where we end up later, if you ever need me — even at your lowest — I’ll show up. I’ll always choose to be there for you the way you’ve been there for me.\n\nSo today, celebrate yourself. Happy Birthday again, my precious friend. Let’s stay in each other’s lives until forever.. LOBEUSOMUCHHHHH.\n\n\nlalaygbaikdancantik `;

function showLetter() {
  const intro = document.getElementById("introText");
  const button = document.querySelector(".btn");
  const popup = document.getElementById("popup");
  const typedText = document.getElementById("typedText");
  const music = document.getElementById("bgMusic");

  music.play();

  // Fade out intro
  intro.style.opacity = 0;

  // Hide button
  button.style.display = "none";

  // Delay for fade out
  setTimeout(() => {
    popup.classList.add("show"); // show letter + image

    // Typewriter animation
    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 500);
}
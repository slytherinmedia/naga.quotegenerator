const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
"The best revenge is massive success. - Frank Sinatra",
"Success is not in what you have, but who you are. - Bo Bennett",
"The only limit to our realization of tomorrow will be our doubts of today.- Franklin D. Roosevelt",
"If you're going through hell, keep going. - Winston Churchill",
"Innovation distinguishes between a leader and a follower.- Steve Jobs ",
"The only person you are destined to become is the person you decide to be.- Ralph Waldo Emerson",
"Opportunities don't happen. You create them.- Chris Grosser",
"The biggest risk is not taking any risk. - Mark Zuckerberg",
"The only thing worse than starting something and failing is not starting something. - Seth Godin",
"You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
"Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
"The secret to success is to know something nobody else knows. - Aristotle Onassis",
"The best way to predict the future is to create it. - Peter Drucker",
"The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
"Your most unhappy customers are your greatest source of learning. - Bill Gates",
"I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
"The way to get started is to quit talking and begin doing. - Walt Disney",
"The successful warrior is the average man, with laser-like focus. - Bruce Lee",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
"Do not be embarrassed by your failures; learn from them and start again. - Richard Branson",
"The question isn't who is going to let me; it's who is going to stop me. - Ayn Rand",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
"Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
"I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. - Steve Jobs",
"You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out. - Steve Jobs",
"The only place where success comes before work is in the dictionary. - Vidal Sassoon",
"The successful man is the one who finds out what is the matter with his business before his competitors do. - Roy L. Smith",
"Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
"The secret of success in life is for a man to be ready for his opportunity when it comes. - Benjamin Disraeli",
"Don't worry about failure; you only have to be right once. - Drew Houston",
"Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
"It's fine to celebrate success, but it is more important to heed the lessons of failure. - Bill Gates",
"The best way to predict the future is to create it. - Peter Drucker",
"Don't aim for success if you want it; just do what you love and believe in, and it will come naturally. - David Frost",
"The difference between a successful person and others is not the lack of strength, not the lack of knowledge, but rather the lack of will. - Vince Lombardi",
"I never dreamed about success. I worked for it. - Estée Lauder",
"The successful warrior is the average man, with laser-like focus. - Bruce Lee",
"Success is not in what you have, but who you are. - Bo Bennett",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"The biggest risk is not taking any risk. - Mark Zuckerberg",
"Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
"If you want to achieve greatness, stop asking for permission. - Anonymous"
  // Add more quotes here...
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function rollDiceAnimation() {
  const dice = document.getElementById('dice');
  dice.style.animation = 'roll 2s ease-in-out';
  setTimeout(function () {
    dice.style.animation = 'stopRolling 0.2s linear';
  }, 2000);
}

function rollDice() {
  if (!isDiceRolling) {
    isDiceRolling = true;
    rollDiceAnimation();
    setTimeout(function () {
      const dice = document.getElementById('dice');
      const code = document.getElementById('code');
      const quote = document.getElementById('quote');
      const randomNumber = Math.floor(Math.random() * 50) + 1;

      dice.innerHTML = randomNumber;
      code.innerHTML = `Your code is: ${randomNumber}`;
      quote.innerHTML = quotes[randomNumber - 1]; // Subtract 1 to get the correct array index
      isDiceRolling = false;
    }, 2200); // Add a slight delay to ensure the dice stops rolling before updating the number and quote
  }
}

let isDiceRolling = false;

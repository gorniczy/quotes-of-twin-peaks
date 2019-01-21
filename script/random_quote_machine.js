// The list of characters to randomly choose from

const characters = {
  0: "Laura",
  1: "Audrey",
  2: "Cooper",
  3: "Bob",
  4: "Leland",
  5: "Andy",
  6: "Lucy",
  7: "Margaret",
  8: "Leo",
  9: "Waldo"
}

// The list of pictures and quotes assigned to each character

const content = {
  Laura: {
    images: ["images/laura.png",
      "images/laura_2.png"
    ],
    quotes: ["I hate asparagus.",
      "Does this mean I'll never grow up?",
      "Nervous about meeting 'J' tonight.",
      "I just know I'm going to get lost in those woods again tonight.",
      "Remember me telling you about that mystery man?",
      "Sometimes my arms bend back.",
      "I feel like I'm going to dream tonight.",
      "Its easier talking into the recorder.",
      "I guess I feel I can say anything. All my secrets. The naked ones.",
      "Why is it so easy to make men like me?",
      "This guy can really light my f - i - r - e as in red corvette.",
      "Oh, here comes mom with milk and cookies.",
      "Tonight is the night that I die.",
      "I know he wants me, I can feel his fire.",
      "If I die he can't hurt me anymore.",
      "Last night I had the strangest dream.",
      "I was in a red room with a small man dressed in red.",
      "It was frustrating trying to talk.",
      "No one in the real world would believe me."
    ]
  },
  Audrey: {
    images: ["images/audrey.png",
      "images/audrey_2.png"
    ],
    quotes: ["Please don't make me leave.",
      "Love stinks!",
      "Do you like coffee?",
      "God I love this music.",
      "Isn't it too dreamy?",
      "Do your palms ever itch?",
      "In real life there is no algebra.",
      "A tall, dark and handsome stranger falls madly in love with me.",
      "Its like a hot cold.",
      "When you hold an ice cube on your bare skin for a long time.",
      "Daddy are you ashamed of me?",
      "Please let me be your daughter again.",
      "I can't tell you all my secrets.",
      "Here try this. It smells like a forest.",
      "I'm not shy.",
      "I hope you won't think any less of me for trying to help you.",
      "Help me.",
      "I am in trouble but I'm gonna come home now."
    ]
  },
  Cooper: {
    images: ["images/cooper.png",
      "images/cooper_2.png"
    ],
    quotes: ["I've never seen so many trees in my life.",
      "You've been through a lot today.",
      "That's a lot of girl scout cookies.",
      "I think I saw a cotton tail rabbit.",
      "Know why I'm whittling?",
      "Give me a donut.",
      "Man, smell those trees, smell those douglas firs.",
      "A policeman's dream.",
      "Black as midnight on a moonless night.",
      "Cherry pie?",
      "Two more pieces of this incredible pie.",
      "I told you I had a feeling we'd see this again.",
      "I'm holding in my hand a small box of chocolate bunnies.",
      "You didn't love her anyway.",
      "You know, this is, excuse me, a damn fine cup of coffee.",
      "Black as midnight on a moonless night.",
      "My dream is a code waiting to be broken.",
      "Do you know where dreams come from?",
      "Suddenly it was twenty five years later.",
      "I was old sitting in a red room.",
      "Murder is not a faceless event here.",
      "Mmm, this must be where pies go when they die.",
      "This is the man I saw in my dream.",
      "We're going to need some more coffee.",
      "There's a large group of insane men staying on my floor.",
      "The beard sort of ruins the effect of the lingerie.",
      "What did your log see?",
      "What I want and what I need are two different things.",
      "The night is young.",
      "I'm going to get the food, and you're going to get dressed.",
      "Secrets are dangerous things.",
      "I don't like birds.",
      "See you on the other side.",
      "He's too stupid to lie.",
      "What kind of dangerous game have you been playing?",
      "I know who killed Laura Palmer.",
      "Laura and I had the same dream",
      "I gave my ring to the giant.",
      "Stay very very quiet, you read me?",
      "I have reasons to believe that the killer is in this room.",
      "Someone is missing.",
      "Did you kill Laura Palmer?",
      "Find the light."
    ]
  },
  Bob: {
    images: ["images/bob.png",
      "images/bob_2.png"
    ],
    quotes: ["I will kill again!",
      "Catch you with my death bag.",
      "You may think I've gone insane.",
      "Whoo!!! Whoo-whoo!!! Hoo-hoo-hoo!!!",
      "Through the darkness of future's past, the magician longs to see.",
      "One chants out between two worlds: Fire, walk with me.",
      "You've been a good vehicle and I've enjoyed the ride.",
      "I'm out!",
      "Be quiet!",
      "He can't ask for your soul."
    ]
  },
  Leland: {
    images: ["images/leland.png",
      "images/leland_2.png"
    ],
    quotes: ["We have to dance for Laura.",
      "Will you dance with me? Please.",
      " Oh mairzy doats and dozy doats and liddle lamzy divey.",
      " A kiddley divey too, wolden ewe.",
      "Say, mare's eat oats and doe's eat oats and little lambs eat ivy.",
      "God, I feel like singing.",
      "Forget your troubles and just get happy.",
      "He lived right next door. I was just a little boy.",
      "Have you ever experienced absolute loss?",
      "Chicks and ducks and geese better scurry.",
      "May I show you my new clubs?",
      "May I get you a glass of lemonade.",
      "I know the cure for what ails you.",
      "I know that gum. I used to chew it when I was a kid.",
      "That’s my most favorite gum in the world.",
      "I was just a boy. I saw him in my dreams.",
      "He opened me, and I invited him and he came inside me.",
      "He made me do things. Terrible things."
    ]
  },
  Andy: {
    images: ["images/andy.png",
      "images/andy_2.png"
    ],
    quotes: ["It's not a puzzle at all!",
      "It didn't hurt ... it didn't hurt a bit.",
      "My gun just slipped out of my hand.",
      "I've been feeling a little high strung.",
      "I feel so dumb. I dropped my gun and it went off.",
      "Here's a bird. Louis Armstrong, he's a parakeet.",
      "Oh Punky.",
      "As we say in the law enforcement game, its a cold trail.",
      "It's a map.",
      "I have the answer to the riddle that you told me this morning.",
      "Don't make me say where these came from.",
      "Could you go slower? I want to write all of this down.",
      "J'ai une ... you know, it means I am a lonely soul."
    ]
  },
  Lucy: {
    images: ["images/lucy.png",
      "images/lucy_2.png"
    ],
    quotes: ["I'm pregnant.",
      "Oh, I'm ... getting excited.",
      "Sweetie?",
      "But there's no 'i' in Jack.",
      "I would like to chat but I am now under orders to examine these files.",
      "It's the line with the light that's blinking.",
      "Maybe it's our baby and maybe it isn't.",
      "As far as I can tell it is a fifty/fifty proposition.",
      "Poor child.",
      "One moment please.",
      "I'm going to make him some chicken soup.",
      "I guess some people don't know quite as much as they think they do.",
      "Check.",
      "What do you know about saving our planet?"
    ]
  },
  Margaret: {
    images: ["images/margaret.png",
      "images/margaret_2.png"
    ],
    quotes: ["My log does not judge.",
      "Ask it.",
      "One day my log will have something to say about this.",
      "My Log saw something that night.",
      "I've got tea. I've got cookies. No cake.",
      "The owls won't see us in here.",
      "Wait for the tea. The fish aren't running.",
      "Your two days late, but that's your concern.",
      "Tea first. Then be ready.",
      "Fire is the devil hiding like a coward in the smoke.",
      "Sshhh!",
      "The owls were silent."
    ]
  },
  Leo: {
    images: ["images/leo.png",
      "images/leo_2.png"
    ],
    quotes: ["What kind of cigarettes do you smoke?",
      "Where's my shirt?",
      "Did you finish cleaning my boots?",
      "Be a good girl and save me a piece of pie.",
      "This is gonna hurt you.",
      "Leo needs a new pair of shoes.",
      "A man needs a clean house.",
      "I paid my debt to society.",
      "Maybe that's peanuts to you. Not to me.",
      "Just give me a damn beer!",
      "You haven't got the guts.",
      "Come on lover boy. Leo's waiting.",
      "You've got about one hour to think about what you've done to me.",
      "New shoes."
    ]
  },
  Waldo: {
    images: ["images/waldo.png",
      "images/waldo_2.png"
    ],
    quotes: ["Laura, Laura",
      "Stop it!",
      "Don't go there",
      "Hurting me!"
    ]
  }
}

// DOM elements set to constants

const introPage = document.getElementById("intro_page");
const actionPage = document.getElementById("action_page");
const monoButton = document.getElementById("mono_button");
const stereoButton = document.getElementById("stereo_button");
const gridOne = document.getElementById("grid_one");
const gridTwo = document.getElementById("grid_two");
const coffeeIcon1 = document.getElementById("coffee_1");
const coffeeIcon2 = document.getElementById("coffee_2");
const coffeeIcon3 = document.getElementById("coffee_3");
const coffeeIcon4 = document.getElementById("coffee_4");
const pieIcon1 = document.getElementById("pie_1");
const pieIcon2 = document.getElementById("pie_2");
const pieIcon3 = document.getElementById("pie_3");
const pieIcon4 = document.getElementById("pie_4");
const monoImage = document.getElementById("image");
const monoQuote = document.getElementById("quote");
const stereoImageOne = document.getElementById("image_1");
const stereoImageTwo = document.getElementById("image_2");
const stereoQuoteOne = document.getElementById("quote_1");
const stereoQuoteTwo = document.getElementById("quote_2");
const socialIcons = document.getElementById("social");
const caption = document.getElementById("caption");

// Choose between 'monologue' and 'dialogue' quoting

function switchMonoStereo(mode) {
  const isMono = mode === "mono";
  const activeForMono = isMono ? "active" : "inactive";
  const activeForStereo = isMono ? "inactive" : "active";
  const inlineForMono = isMono ? "inline" : "none";
  const inlineForStereo = isMono ? "none" : "inline";
  monoButton.src = "images/mono " + activeForMono + " button.png";
  stereoButton.src = "images/stereo " + activeForStereo + " button.png";
  coffeeIcon1.style.display = inlineForMono;
  pieIcon1.style.display = inlineForMono;
  coffeeIcon2.style.display = inlineForStereo;
  pieIcon2.style.display = inlineForStereo;
  coffeeIcon3.style.display = inlineForMono;
  pieIcon3.style.display = inlineForMono;
  coffeeIcon4.style.display = inlineForStereo;
  pieIcon4.style.display = inlineForStereo;
}

// Hide intro page and show action page

let gridOneVisible;
let gridTwoVisible;

function changePage(mode) {
  const isMono = mode === "mono";
  const inlineForMono = isMono ? "inline" : "none";
  const inlineBlockForStereo = isMono ? "none" : "inline-block";
  gridOne.style.display = inlineForMono;
  gridTwo.style.display = inlineBlockForStereo;
  introPage.style.display = "none";
  actionPage.style.display = "block";
  socialIcons.style.display = "inline";
  caption.style.display = "inline";
  gridOneVisible = isMono ? true : false;
  gridTwoVisible = isMono ? false : true;
}

// Display grid_one or grid_two

function showGridOne() {
  if (!gridOneVisible) {
    gridOne.style.display = "inline";
    gridTwo.style.display = "none";
    gridOneVisible = true;
    gridTwoVisible = false;
  }
  return null;
}

function showGridTwo() {
  if (!gridTwoVisible) {
    gridOne.style.display = "none";
    gridTwo.style.display = "inline-block";
    gridOneVisible = false;
    gridTwoVisible = true;
  }
  return null;
}

// Return a random number

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

// Generate basic 'monologue' quote

function randomize() {
  const characterNum = randomNum(10);
  const character = characters[characterNum];
  const quoteListLength = content[character].quotes.length;
  const quoteNum = randomNum(quoteListLength);
  const quotation = content[character].quotes[quoteNum];
  const image = content[character].images[0];
  monoImage.src = image;
  monoImage.alt = "image of " + character;
  monoQuote.innerHTML = quotation;
}

// Generate mixed 'monologue' quote (random character to random quote)

function mix() {
  const characterNum = randomNum(10);
  const characterNum2 = randomNum(10);
  const character = characters[characterNum];
  const quotedCharacter = characters[characterNum2];
  const quoteListLength = content[quotedCharacter].quotes.length;
  const quoteNum = randomNum(quoteListLength);
  const quotation = content[quotedCharacter].quotes[quoteNum];
  const image = content[character].images[0];
  monoImage.src = image;
  monoImage.alt = "image of " + character;
  monoQuote.innerHTML = quotation;

}

// Generate basic 'dialogue' quote

function combine() {
  const characterNum = randomNum(10);
  const characterNum2 = randomNum(10);
  const characterOne = characters[characterNum];
  const characterTwo = characters[characterNum2];
  const quoteOneListLength = content[characterOne].quotes.length;
  const quoteTwoListLength = content[characterTwo].quotes.length;
  const quoteOneNum = randomNum(quoteOneListLength);
  const quoteTwoNum = randomNum(quoteTwoListLength);
  const quotationOne = content[characterOne].quotes[quoteOneNum];
  const quotationTwo = content[characterTwo].quotes[quoteTwoNum];
  const imageOne = content[characterOne].images[0];
  const imageTwo = content[characterTwo].images[1];
  if (characterOne != characterTwo) {
    stereoImageOne.src = imageOne;
    stereoImageOne.alt = "image of " + characterOne;
    stereoQuoteOne.innerHTML = quotationOne;
    stereoImageTwo.src = imageTwo;
    stereoImageTwo.alt = "image of " + characterTwo;
    stereoQuoteTwo.innerHTML = quotationTwo;
  } else {
    combine();
  }
}

// Generate mixed 'dialogue' quote (2 random characters to 2 random quotes)

function combineMix() {
  const characterNum = randomNum(10);
  const characterNum2 = randomNum(10);
  const characterNum3 = randomNum(10);
  const characterNum4 = randomNum(10);
  const characterOne = characters[characterNum];
  const characterTwo = characters[characterNum2];
  const quotedCharacterOne = characters[characterNum3];
  const quotedCharacterTwo = characters[characterNum4];
  const quoteOneListLength = content[quotedCharacterOne].quotes.length;
  const quoteTwoListLength = content[quotedCharacterTwo].quotes.length;
  const quoteOneNum = randomNum(quoteOneListLength);
  const quoteTwoNum = randomNum(quoteTwoListLength);
  const quotationOne = content[quotedCharacterOne].quotes[quoteOneNum];
  const quotationTwo = content[quotedCharacterTwo].quotes[quoteTwoNum];
  const imageOne = content[characterOne].images[0];
  const imageTwo = content[characterTwo].images[1];

  if (characterOne != characterTwo && quotedCharacterOne != quotedCharacterTwo) {
    stereoImageOne.src = imageOne;
    stereoImageOne.alt = "image of " + characterOne;
    stereoQuoteOne.innerHTML = quotationOne;
    stereoImageTwo.src = imageTwo;
    stereoImageTwo.alt = "image of " + characterTwo;
    stereoQuoteTwo.innerHTML = quotationTwo;
  } else {
    combine();
  }
}

// Functions added to click events

coffeeIcon1.addEventListener("click", function() {
  randomize();
  changePage("mono");
});
pieIcon1.addEventListener("click", function() {
  mix();
  changePage("mono");
});
coffeeIcon2.addEventListener("click", function() {
  combine();
  changePage("stereo");
});
pieIcon2.addEventListener("click", function() {
  combineMix();
  changePage("stereo");
});
coffeeIcon3.addEventListener("click", function() {
  randomize();
  showGridOne();
});
pieIcon3.addEventListener("click", function() {
  mix();
  showGridOne();
});
coffeeIcon4.addEventListener("click", function() {
  combine();
  showGridTwo();
});
pieIcon4.addEventListener("click", function() {
  combineMix();
  showGridTwo();
});
monoButton.addEventListener("click", function() {
  switchMonoStereo("mono")
});
stereoButton.addEventListener("click", function() {
  switchMonoStereo("stereo")
});

// The list of characters to randomly choose from

const list = {
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

const quoteImage = {
  Laura: {
    image: ["images/laura.png",
      "images/laura_2.png"
    ],
    quote: ["I hate asparagus.",
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
      "I know he wants me, I can feel his fire. But if I die he can’t hurt me anymore.",
      "Last night I had the strangest dream.",
      "I was in a red room with a small man dressed in red and an old man sitting in a chair.",
      "It was frustrating trying to talk.",
      "I got up and walked to the old man. Then I leaned over and whispered the secret in his ear.",
      "No one in the real world would believe me."
    ]
  },
  Audrey: {
    image: ["images/audrey.png",
      "images/audrey_2.png"
    ],
    quote: ["Please don't make me leave.",
      "Love stinks!",
      "Do you like coffee?",
      "God I love this music.",
      "Isn't it too dreamy?",
      "Do your palms ever itch?",
      "In real life there is no algebra.",
      "A tall, dark and handsome stranger falls madly in love with me.",
      "Its like a hot cold. Like when you hold an ice cube on your bare skin for a long time.",
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
    image: ["images/cooper.png",
      "images/cooper_2.png"
    ],
    quote: ["I've never seen so many trees in my life.",
      "You've been through a lot today.",
      "That's a lot of girl scout cookies.",
      "I think I saw a cotton tail rabbit.",
      "Know why I'm whittling?",
      "Give me a donut.",
      "Man, smell those trees, smell those douglas firs.",
      "A policeman's dream.",
      "Black as midnight on a moonless night.",
      "Cherry pie?",
      "Damn, I still can't get the taste of that fish filtered coffee out of my mouth.",
      "Two more pieces of this incredible pie.",
      "I told you I had a feeling we'd see this again.",
      "I'm holding in my hand a small box of chocolate bunnies.",
      "You didn't love her anyway.",
      "You know, this is, excuse me, a damn fine cup of coffee.",
      "Black as midnight on a moonless night.",
      "My dream is a code waiting to be broken.",
      "Do you know where dreams come from?",
      "Suddenly it was twenty five years later. I was old sitting in a red room.",
      "Murder is not a faceless event here.",
      "Mmm, this must be where pies go when they die.",
      "This is the man I saw in my dream.",
      "In the heat of the investigative pursuit the shortest distance between two points is not necessarily a straight line.",
      "In the grand design women were drawn from a different set of blueprints.",
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
    image: ["images/bob.png",
      "images/bob_2.png"
    ],
    quote: ["I will kill again!",
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
    image: ["images/leland.png",
      "images/leland_2.png"
    ],
    quote: ["We have to dance for Laura.",
      "Will you dance with me? Please.",
      " Oh mairzy doats and dozy doats and liddle lamzy divey. A kiddley divey too, wolden ewe.",
      "Now if the words sound queer and funny to your ear and a little bit jumble and jivy.",
      "Say, mare's eat oats and doe's eat oats and little lambs eat ivy.",
      "God, I feel like singing.",
      "Forget your troubles and just get happy.",
      "He lived right next door. I was just a little boy.",
      "Have you ever experienced absolute loss?",
      "Chicks and ducks and geese better scurry.",
      "May I show you my new clubs?",
      "May I get you a glass of lemonade.",
      "I know the cure for what ails you.",
      "I know that gum. I used to chew it when I was a kid. That’s my most favorite gum in the world.",
      "I was just a boy. I saw him in my dreams.",
      "He opened me, and I invited him and he came inside me.",
      "When he was inside, I didn't know, and when he was gone, I couldn't remember.",
      "He made me do things. Terrible things."
    ]
  },
  Andy: {
    image: ["images/andy.png",
      "images/andy_2.png"
    ],
    quote: ["It's not a puzzle at all!",
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
    image: ["images/lucy.png",
      "images/lucy_2.png"
    ],
    quote: ["I'm pregnant.",
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
      "I'm dressed like a sheep, all this wool.",
      "What do you know about saving our planet?"
    ]
  },
  Margaret: {
    image: ["images/margaret.png",
      "images/margaret_2.png"
    ],
    quote: ["My log does not judge.",
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
    image: ["images/leo.png",
      "images/leo_2.png"
    ],
    quote: ["What kind of cigarettes do you smoke?",
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
    image: ["images/waldo.png",
      "images/waldo_2.png"
    ],
    quote: ["Laura, Laura",
      "Stop it!",
      "Don't go there",
      "Hurting me!"
    ]
  }
}

// set DOM elements to constants

const monoButton = document.getElementById("mono_button");
const stereoButton = document.getElementById("stereo_button");
const coffeeIcon1 = document.getElementById("coffee_1");
const coffeeIcon2 = document.getElementById("coffee_2");
const coffeeIcon3 = document.getElementById("coffee_3");
const coffeeIcon4 = document.getElementById("coffee_4");
const pieIcon1 = document.getElementById("pie_1");
const pieIcon2 = document.getElementById("pie_2");
const pieIcon3 = document.getElementById("pie_3");
const pieIcon4 = document.getElementById("pie_4");

// Functions to choose between 'monologue' and 'dialogue' quoting

let isMono = true;

function switchMonoStereo() {
  
  const activeForStereo = isMono ? "active" : "inactive";
  const activeForMono = isMono ? "inactive" : "active";
  const inlineForStereo = isMono ? "inline" : "none";
  const inlineForMono = isMono ? "none" : "inline";

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

  isMono = !isMono;

}

// Basic 'monologue' quote fucntion

function randomize() {

  document.getElementById("grid_one").style.display = "inline";
  document.getElementById("grid_two").style.display = "none";
  coffeeIcon4.style.display = "none";
  pieIcon4.style.display = "none";
  document.getElementById("social").style.display = "inline";
  document.getElementById("caption").style.display = "inline";
  var result = list[Math.floor(Math.random() * 10)];
  var quoted = quoteImage[result].quote[Math.floor(Math.random() * quoteImage[result].quote.length)];
  document.getElementById("image").src = quoteImage[result].image[0];
  document.getElementById("image").alt = "image of " + result;
  document.getElementById("quote").innerHTML = quoted;
  document.getElementById("first_page").style.display = "none";
  document.getElementById("second_page").style.display = "block";
  if (quoted.length < 200) {
    document.getElementById("sheet").src = "images/torn sheet small.png";
  } else {
    document.getElementById("sheet").src = "images/torn sheet large.png";
  }
}

// Mixed 'monologue' quote fucntion (random character to random quote)

function mix() {
  document.getElementById("grid_one").style.display = "inline";
  document.getElementById("grid_two").style.display = "none";
  coffeeIcon4.style.display = "none";
  pieIcon4.style.display = "none";
  document.getElementById("social").style.display = "inline";
  document.getElementById("caption").style.display = "inline";
  var result = list[Math.floor(Math.random() * 10)];
  document.getElementById("image").src = quoteImage[result].image[0];
  document.getElementById("image").alt = "image of " + result;
  var mixMe = list[Math.floor(Math.random() * 10)];
  var quoted = quoteImage[mixMe].quote[Math.floor(Math.random() * quoteImage[mixMe].quote.length)];
  document.getElementById("quote").innerHTML = quoted;
  document.getElementById("first_page").style.display = "none";
  document.getElementById("second_page").style.display = "block";
  document.getElementById("sheet").src = "images/torn sheet small.png";
}

// Basic "dialogue" quote function

function combine() {
  document.getElementById("grid_two").style.display = "inline-block";
  document.getElementById("grid_one").style.display = "none";
  document.getElementById("social").style.display = "inline";
  document.getElementById("caption").style.display = "inline";
  var resultOne = list[Math.floor(Math.random() * 10)];
  var resultTwo = list[Math.floor(Math.random() * 10)];
  if (resultOne != resultTwo) {
    document.getElementById("image_1").src = quoteImage[resultOne].image[0];
    document.getElementById("image_1").alt = "image of " + resultOne;
    document.getElementById("quote_1").innerHTML = quoteImage[resultOne].quote[Math.floor(Math.random() * quoteImage[resultOne].quote.length)];
    document.getElementById("image_2").src = quoteImage[resultTwo].image[1];
    document.getElementById("image_2").alt = "image of " + resultTwo;
    document.getElementById("quote_2").innerHTML = quoteImage[resultTwo].quote[Math.floor(Math.random() * quoteImage[resultTwo].quote.length)];
    document.getElementById("first_page").style.display = "none";
    document.getElementById("second_page").style.display = "block";
  } else {
    combine();
  }
}

// Mixed 'dialogue' quote fucntion (2 random characters to 2 random quotes)

function combineMix() {
  document.getElementById("grid_two").style.display = "inline-block";
  document.getElementById("grid_one").style.display = "none";
  document.getElementById("social").style.display = "inline";
  document.getElementById("caption").style.display = "inline";
  var resultOne = list[Math.floor(Math.random() * 10)];
  var mixMeOne = list[Math.floor(Math.random() * 10)];
  var resultTwo = list[Math.floor(Math.random() * 10)];
  var mixMeTwo = list[Math.floor(Math.random() * 10)];
  if (resultOne != resultTwo && mixMeOne != mixMeTwo) {
    document.getElementById("image_1").src = quoteImage[resultOne].image[0];
    document.getElementById("image_1").alt = "image of " + resultOne;
    document.getElementById("quote_1").innerHTML = quoteImage[mixMeOne].quote[Math.floor(Math.random() * quoteImage[mixMeOne].quote.length)];
    document.getElementById("image_2").src = quoteImage[resultTwo].image[1];
    document.getElementById("image_2").alt = "image of " + resultTwo;
    document.getElementById("quote_2").innerHTML = quoteImage[mixMeTwo].quote[Math.floor(Math.random() * quoteImage[mixMeTwo].quote.length)];
    document.getElementById("first_page").style.display = "none";
    document.getElementById("second_page").style.display = "block";
  } else {
    combine();
  }
}

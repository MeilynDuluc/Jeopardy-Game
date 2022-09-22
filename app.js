//variables
const closeBtn = document.querySelector(".close-modal")
const game = document.querySelector(".game")
const boardEl = document.querySelector(".board")
const scoreEl = document.getElementsByClassName("score")
const question100f = document.querySelector(".questions100F")
const question200f = document.querySelector(".questions200F")
const question300f = document.querySelector(".questions300F")
const question400f = document.querySelector(".questions400F")
const question500f = document.querySelector(".questions500F")
const question100s = document.querySelector(".questions100S")
const question200s = document.querySelector(".questions200S")
const question300s = document.querySelector(".questions300S")
const question400s = document.querySelector(".questions400S")
const question500s = document.querySelector(".questions500S")
const question100a = document.querySelector(".questions100A")
const question200a = document.querySelector(".questions200A")
const question300a = document.querySelector(".questions300A")
const question400a = document.querySelector(".questions400A")
const question500a = document.querySelector(".questions500A")
const questionModalEl = document.getElementById("question-modal")
const textBoxEl = document.getElementsByClassName("text-box")
const answerBoxEl = document.getElementsByClassName("answer-box")
const submitBtn = document.querySelector("#submit")

//functions
const closeModal = (evt) => {
  modal.style.display = "none";
  game.style.visibility= "visible";
  boardEl.style.visibility= "visible";
}

const open100f = () => {
console.log (categories[0].questions[0])
questionModalEl.style.display = "block";
questionModalEl.innerHTML = "Sliced apples sautéed in butter are a classic filling for these French pancakes." 
answerBoxEl.style.display= "block"

const checkWin = (ans, ques) => {
  if (ans === ques.answer) {
    textBoxEl.innerHTML = "correct"
  } else {
    textBoxEl.innerHTML = "incorrect"
  }

}

}

const open200f = () => {
  console.log (categories[0].questions[1])
questionModalEl.style.display = "block";
questionModalEl.innerHTML = "For a change of pace at soup time, try soup aux cerises, made with red wine & this fruit." 
answerBoxEl.style.display= "block"
}

const open300f = () => {
  console.log (categories[0].questions[2])
  questionModalEl.style.display = "block";
  questionModalEl.innerHTML = "Aromatics, like garlic & fennel, are key to this Middle Eastern rice dish with a 5-letter name." 
  answerBoxEl.style.display= "block"
  

}

const open400f = () => {
  
}

const open500f = () => {
  
}
const open100s = () => {

}

const open200s = () => {
  
}

const open300s = () => {
  
}

const open400s = () => {
  
}

const open500s = () => {
  
}

const open100a = () => {

}

const open200a = () => {
  
}

const open300a = () => {
  
}

const open400a = () => {
  
}

const open500a = () => {
  
}



//event listeners
closeBtn.addEventListener("click", closeModal)
question100f.addEventListener("click", open100f);
question200f.addEventListener("click", open200f)
question300f.addEventListener("click", open300f)
question400f.addEventListener("click", open400f)
question500f.addEventListener("click", open500f)
question100s.addEventListener("click", open100s)
question200s.addEventListener("click", open200s)
question300s.addEventListener("click", open300s)
question400s.addEventListener("click", open400s)
question500s.addEventListener("click", open500s)
question100a.addEventListener("click", open100a)
question200a.addEventListener("click", open200a)
question300a.addEventListener("click", open300a)
question400a.addEventListener("click", open400a)
question500a.addEventListener("click", open500a)
submitBtn.addEventListener("click", () => {
  alert('correct')
  
  
})




// //game

//questions from https://triviabliss.com/examples-of-jeopardy-questions/

const categories = [
  {
    topic: 'Food & Drinks',
    questions: [
      {
        question: 'Sliced apples sautéed in butter are a classic filling for these French pancakes.',
        answer: 'crepes',
        level: '100',
       },
      {
        question: 'Question: For a change of pace at soup time, try soup aux cerises, made with red wine & this fruit.',
        answer: 'cherries',
        level: '200',
      },
     {
        question: 'Aromatics, like garlic & fennel, are key to this Middle Eastern rice dish with a 5-letter name.',
        answer: 'pilaf',
        level:'300',
      },
     {
        question: "To make mousse d’ecrevisses, you need at least 30 of these freshwater crustaceans.",
        answer: 'crayfish',
        level: '400',
     },
     {
        question: 'Many a French meal ends with a dry red wine served with this blue-veined treat, the “cheese of kings and popes.',
        answer: 'roquefort',
        level: '500',
      },
  ],
},
{
  topic: 'Sports',
  questions: [
    {
      question: 'In 2020 Dominic Thiem completed a comeback to win this event & became the first new male Grand Slam winner in 6 years.',
      answer: 'The U.S open',
      level: '100',
     },
    {
      question: ' Like a score in U.S. football, a goal kick, a reminder of rugby’s soccer origins, is worth this many points.',
      answer: '3',
      level: '200',
    },
   {
      question: 'First held in Uruguay in 1930, it’s the largest single-sport tournament in the world.',
      answer: 'The World Cup',
      level:'300',
    },
   {
      question: " Also a term used in baseball, it’s what the Brits call a soccer field.",
      answer: 'a pitch',
      level: '400',
   },
   {
      question: 'In the NFL each of these measures 10 yards by 53 1/3 yards.',
      answer: 'the end zone',
      level: '500',
    },
  ],
},
{
  topic: 'Animals',
  questions: [
    {
      question: 'The 2-toed one of these can live up to 20 years, most of it upside down in the canopy of the rainforest.',
      answer: 'a sloth',
      level: '100',
     },
    {
      question: 'The arrival of foxes in Western Australia in the 1920s was bad news for the quokka, a type of this kangaroo relative.',
      answer: 'wallaby',
      level: '200',
    },
   {
      question: 'Koalas have adapted their diet with an extra-long gut to break down poisons in these leaves & sleep 20 hours a day due to a lack of nutrition in the leaves.',
      answer: 'eucalyptus',
      level:'300',
    },
   {
      question: "Also a term used in baseball, it’s what the Brits call a soccer field.",
      answer: 'a pitch',
      level: '400',
   },
   {
      question: 'When faced with danger, certain ducks, snakes & mammals do this, also called thanatosis.',
      answer: 'play dead',
      level: '500',
    },
  ],
},
]



// function addCategory(){
//     const column = document.createElement('div')
//     column.classList.add('column')

//       const topicTitle = document.createElement('div')
//       topicTitle.classList.add('topic-title')
//       topicTitle.innerText = category.topic

//       column.appendChild(topicTitle)
//       game.append(column)
// }

// categories.forEach(category => addCategory(category))



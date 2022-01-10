const quizDB = [
    {
         question: "Q1: What is the full form of HTML?",
          a: "Hello To My Land",
          b: "Hey Text Markup Language",
          c: "HyperText Makup Language",
          d: "HyperText Markup Language",
          ans: "Ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "Ans1"
    },

    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Product",
        c: "Hey Transfer Product",
        d: "Hypertext Transfer Protocol",
        ans: "Ans4"
    },
    
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScripy",
        b: "JavaSuper",
        c: "JustScript",
        d: "JustSheets",
        ans: "Ans1"
    },  
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");  /* it has id in HTML page so for calling we use # in #option*/
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");


const answers = document.querySelectorAll(".answer");   /* select all the classes or its reference in html file of <li> */

const showScore = document.querySelector("#showScore"); /* for show result weuse showScore with # because of id if class used then has other way of representation */

let questionCount = 0;
let score = 0;

const loadQustion = () => {
    
    const questionList = quizDB[questionCount];

    question.innerText  = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQustion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
      if(curAnsElem.checked){
          answer = curAnsElem.id;
      }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener("click", () => {
      const checkedAnswer = getCheckAnswer();  
      console.log(checkedAnswer);

      if (checkedAnswer  == quizDB[questionCount].ans){
          score++;
      };

//For next Question Asked
   
      questionCount++;

      deselectAll();

      if(questionCount < quizDB.length){
          loadQustion();
      }
      else{
                      // for `` this sine we use to search Character Map App and type = grave accent(the sine name)
          showScore.innerHTML = `      
            <h3> You scored ${score}/${quizDB.length} </h3>
            
            <button class="btn" onclick="location.reload()"> Play Again </button>
            ` ;
            showScore.classList.remove("scoreArea");
      }

}); 
//Set the questions
let submitQuiz = [
    {
      question: "Which css property is used to display items on a row",
      options: ["AtikuAbubakar","MuhammedBuhari", "BolaAhmedTinubu"],
      answer: "BolaAhmedTinubu",
    },
    {
      question: "Nigeria as a country has how many states",
      options: ["36", "30", "38"],
      answer: "36",
    },
    {
      question: "Lagos State is the Headquarter of Nigeria",
      options: ["True", "False", "NotSure"],
      answer: "False",
    },
    {
      question: "You must be of -----years before you can get Driving license in Nigeria",
      options: ["20", "15", "18"],
      answer: "18",
    },
    {
      question: "Nigeria is in which Continent",
      options: ["Africa", "Europe", "Asian"],
      answer: "Africa",
    },
  ];
  
  let dataView = document.querySelector(".data-view");
  
  function quizResult() {
    let corrects = 50;
    let wrong = 0;
    let result = 0;
  
    let quizArray = submitQuiz.map((quiz, index) => {
      return  `<div class="row my-3 py-2 justify-content-between">
                <div class="left col-6 shadow">
                  <div class="d-flex">
                  <p class="col-1">${index + 1}</p>
                  <p class="question" style="font-size: 20px">${quiz.question}</p>
                  </div>
                  <select name="" id="select-item" class="w-100 py-2">
                    <option value="" select-disabled>Select an answer</option>
                    ${quiz.options.map((option) => {
                      return `<option value=${option}>${option}</option>`;
                    })}
                  </select>
                </div>
                <div class="right col-5 shadow">
                  <p class="selected">Selected answer:</p>
                  <p class="correct">Correct answer:</p>
                  <p class="status">Status:</p>
                </div>
              </div>`;
    });
  
    //Validate and display answers
    dataView.innerHTML = quizArray.join(" ");
  
    let selectElement = document.querySelectorAll("select");
  
    selectElement.forEach((select, index) => {
      select.addEventListener("change", (event) => {
        let selectValue = event.target.value;
        let picked = document.querySelectorAll(".selected")[index];
        picked.innerHTML = `Selected answer: ${selectValue}`;
        let correct = document.querySelectorAll(".correct")[index];
        correct.innerHTML = `Correct answer: ${submitQuiz[index].answer}`;
  
  
        //display results
  
        if (submitQuiz[index].answer === selectValue) {
          document.querySelectorAll(".status")[
            index
          ].innerHTML = `Status: Correct`;
          result += corrects;
          document.querySelector(".result").innerHTML = `${result}/300`;
        } else {
          document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
          result += wrong;
          document.querySelector(".result").innerHTML = `${result}/300`;
        }
      });
    });
  }
  
  quizResult();
  
  let input = document.getElementById(".input");
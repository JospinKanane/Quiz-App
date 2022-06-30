//Code for validation and for passing at next page.
document.getElementById("start").addEventListener("submit", (e) => {
    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    e.preventDefault();
    e.stopPropagation();
    let error;
  
    if (!email.value) {
      error = "Veuillez entrer un email";
    }
    if (!nom.value) {
      error = "Veuillez entrer un nom";
    }
    if (!nom.value && !email.value) {
      error = "Veuillez renseigner tous les champs";
    }
    if (error) {
      document.getElementById("error").innerHTML = error;
    } else {
      document.querySelector(".container").style.display = "none";
      document.querySelector(".questionPage").style.display = "flex";
    }
    lessTime()
    barLess()
  });

  //Fonctions qui gèrent le temps

  let time = 60;
  let insideBar = 100;
  const timer = document.querySelector("#timer");
  function lessTime() {
    timer.innerHTML = time;
    time--; 
      if(time == -1){
      time = 60;
      n++;
      loadQuiz();
    }
    setTimeout(lessTime, 1000);
    }
  function barLess() {
    if (insideBar >= 0) {
      document.getElementById("myProgressBar").style.width = insideBar + "%";
      insideBar--;
    } else {
      insideBar = 100;
      insideBar--;
    }
    setTimeout(barLess, 600);
  }
  
  //Mon tableau de questions
  
  const quizData = [
    {
      id: 1,
      question: "Quel est le type de fichier JavaScript ?",
      a: ".ts",
      b: ".jsx",
      c: ".js",
      d: ".j",
      correct: 2
    },
    {
      id: 2,
      question: "Quelle est la fonction qui nous permet d'afficher un élèment",
      a: "console()",
      b: "console.log()",
      c: "console.log[]",
      d: "console{}",
      correct: 1
    },
    {
      id: 3,
      question: "Pour déclarer une variable modifiable il faut :",
      a: "let",
      b: "var",
      c: "const",
      d: "cont",
      correct: 0
    },
    {
      id: 4,
      question: "Pour déclarer une variable non modifiable il faut :",
      a: "const",
      b: "var",
      c: "let",
      d: "cont",
      correct: 0
    },
    {
      id: 5,
      question: "La balise qui permet de créer un bouton :",
      a: "let",
      b: "var",
      c: "button",
      d: "p",
      correct: 2
    },
    {
      id: 6,
      question: "La fonction qui permet de créer un élèment :",
      a: "let",
      b: "var",
      c: "button",
      d: "document.createElement()",
      correct: 3
    },
    {
      id: 7,
      question: "Le créateur de JavaScrpit :",
      a: "Bezos",
      b: "Breind Eich",
      c: "ZukerBurg",
      d: "Billgate",
      correct: 1
    },
    {
      id: 8,
      question: "React.js appartient à :",
      a: "MicroSoft",
      b: "Amazon",
      c: "Meta",
      d: "Alphabet",
      correct: 2
    },
    {
      id: 9,
      question: "Comment faire appelle à une fonction nommée « sum »?",
      a: "sum()",
      b: "call function sum()",
      c: "for",
      d: "call sum()",
      correct: 0
    },
    {
      id: 10,
      question: "Pour changer la couleur d'un élèment en JavaScrpit :",
      a: 'element.display.color = "couleur"',
      b: 'element.style.color = "couleur"',
      c: 'element.color.style = "couleur"',
      d: 'element.color.display = "couleur"',
      correct: 2
    },
    {
      id: 11,
      question: "Pour changer la couleur de fond d'un élèment en JavaScrpit :",
      a: 'element.display.backgroundcolor = "couleur"',
      b: 'element.style.backgroundColor = "couleur"',
      c: 'element.style.color = "couleur"' ,
      d: 'element.color.display = "couleur"',
      correct: 1
    },
    {
      id: 12,
      question:
        "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?",
      a: 'if (c == "XYZ") then { } else { }',
      b: 'if (c = "XYZ") then { } else { }',
      c: 'if (c == "XYZ") { } else ({ })',
      d: 'if (c = "XYZ") { } else { }' ,
      correct: 3
    },
    {
      id: 13,
      question: "Comment créer une fonction en JavaScript?",
      a: "function f()",
      b: "function = f()",
      c: "function:f()",
      d: "Aucune de ces réponses n’est vraie.",
      correct: 0
    },
    {
      id: 14,
      question:
        "Comment écrire une condition IF pour vérifier si « a » n’est   PAS égal à 2?",
      a: "if a <> 2",
      b: "if (a != 2)",
      c: "if a =! 2 then",
      d: "if (a <> 2)",
      correct: 1
    },
    {
      id: 15,
      question: "Comment écrire une condition IF en JavaScript ?",
      a: "if a = 2 then",
      b: "if a = 2",
      c: "if a == 2 else",
      d: "if (a == 2)",
      correct: 3
    },
    {
      id:0,
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      correct: 0,
    }
  ];
  // Lecture de differentes variables
  
  const quizContainer = document.querySelector(".questionPage");
  const questionId = document.querySelector("#questionId");
  const question = document.querySelector("p");
  const answerEls = document.querySelectorAll(".answer");
  const a_text = document.querySelector("#a_text");
  const b_text = document.querySelector("#b_text");
  const c_text = document.querySelector("#c_text");
  const d_text = document.querySelector("#d_text");
  const nextBtn = document.querySelector(".nextBtn");
  const quitBtn = document.querySelector(".quitBtn");
  
  let score = 0;
  let max = 15;
  let n = 0;
  
  // Fonction pour parcourir et afficher les objets du tableau
  
  const loadQuiz = () => {
    questionId.innerHTML = quizData[n].id;
    question.innerHTML = quizData[n].question;
    a_text.innerHTML = quizData[n].a;
    b_text.innerHTML = quizData[n].b;
    c_text.innerHTML = quizData[n].c;
    d_text.innerHTML = quizData[n].d;
  };
  
  // La fonction qui évalue la reponse donnée

  let userAnswer;
  function isSelected() {
    answerEls.forEach((answer, index) => {
      if (answer.checked) {
        userAnswer = index;
        if(userAnswer == quizData[n].correct){
          score++;
        }
      }
    });
  }
  
  //l'évènement qui gère le bouton suivant.
  
  nextBtn.addEventListener("click", () => {
    isSelected();
    n++;
    loadQuiz();
    answerEls.forEach(answer => answer.checked = false);
    if(nextBtn.click){
      time =60;
      insideBar = 100;
      time--;
      insideBar--;
    }

    if (n == 15) {
      document.querySelector(".questionPage").style.display = "none";
      document.querySelector(".finalContainer").style.display = "flex";
      document.querySelector(".userName").innerHTML = nom.value;
      document.querySelector(".userMail").innerHTML = email.value;
      if (score > 7 || score == max) {
        document.querySelector("#score").innerHTML = score;
        document.querySelector("img").src = "images/check-success.png";
        document.querySelector("img").style.border = "10px solid #24b474";
      } else if (score <= 7 && score < max) {
        document.querySelector("#score").innerHTML = score;
        document.querySelector("img").src = "images/check_fail.png";
        document.querySelector("img").style.border = "10px solid red";
      }
    }
  });
  
  // L'évènement sur le boutton quitter
  
  quitBtn.addEventListener("click", () => {
    document.querySelector(".questionPage").style.display = "none";
    document.querySelector(".finalContainer").style.display = "flex";
    document.querySelector(".userName").innerHTML = nom.value;
    document.querySelector(".userMail").innerHTML = email.value;
  
    if (score > 7 || score == max) {
      document.querySelector("#score").innerHTML = score;
      document.querySelector("img").src = "images/check-success.png";
      document.querySelector("img").style.border = "10px solid #24b474";
    }
    if (score <= 7 && score < max) {
      document.querySelector("#score").innerHTML = score;
      document.querySelector("img").src = "images/check_fail.png";
      document.querySelector("img").style.border = "10px solid red";
    }
  });
  
  // L'évènement qui gère le renvoie à la page d'accueil
  
  document.querySelector(".accueil").addEventListener("click", () => {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".finalContainer").style.display = "none";
    window.location.reload();
  });
  
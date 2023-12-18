
    var magic8Ball = {}; // This line declares a variable named magic8Ball and initializes it as an empty object.
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."]; //This line adds a property named listOfAnswers to the magic8Ball object and assigns an array of possible answers to it.


    var answerDiv = document.getElementById("answer"); //1-دا يمسك الخانه اللي راح يطلع فيها الجواب ويتحكم فيها,عشان يظهرها ويخسها وقت ما يحتاج
    var ballImage = document.getElementById("8ball"); //للصوره ,عشان راح يحتاج يغير فيها كمان


    answerDiv.style.display = "none"; //1-دحين بقلو يخفيلي هوا


    magic8Ball.askQuestion = function(question) { //This line adds a method named askQuestion to the magic8Ball object. The method takes a question as a parameter
      // and contains the logic for shaking the magic 8-ball, selecting a random answer, and displaying the answer.
        ballImage.classList.add("shake"); 
        //when the magic 8-ball is clicked, the "shake" class is added to the #8ball element using the classList.add("shake") method. This triggers the shake animation.

//يظهر دي الصوره
      ballImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";

      answerDiv.style.display = "block";//1-دحين يطلع الاجابه

//اللي بعد ال= يطلعلي رقم عشوائي 
      var randomNumber = Math.random();
      
      //دا يضرب الرقم العشوائي في طول الـ
      //araay حقي
      //ويطلعلي رقم صحيح بطولو,عشان ما يطلع لي رقم اصغر او اكبر منو 
      var randomIndex = Math.floor(randomNumber * this.listOfAnswers.length);

      //This line sets the textContent property of the HTML element referenced by answerDiv to the randomly selected answer. 
      //This updates the content of the HTML element on the webpage with the chosen answer.
      var answer = this.listOfAnswers[randomIndex];


      answerDiv.textContent = answer; //هنا اعين الجواب العشوائي للخانه اللي تطلع الاجابه .اللي سويناها رقم -1


//هدول ما يفرقو كتير فالصفحه موجودين بس احتياط
      console.log(question);
      console.log(answer);

    };


    var onClick = function() { //هنا اباه يسويلي repeat لما اضغط
      answerDiv.style.display = "none";  //1-دحين بقلو يخفيلي هوا تاني

//يرجعلي الصوره القديمه
      ballImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";


//After a brief delay (achieved using setTimeout), the "shake" class is removed from the #8ball element with classList.remove("shake"). 
//This allows the shake effect to be repeated when the magic 8-ball is clicked again.
      setTimeout(function(){
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
      }, 500); //the 500 represents the time delay in milliseconds (half a sec) before the function is executed.
   
    };

    
    document.getElementById("questionButton").addEventListener("click", onClick);
  
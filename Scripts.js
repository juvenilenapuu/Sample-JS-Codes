
      //if selection sample1
      var marks = 50;
      if ((marks = 50)) {
        document.write("Qualified");
      }

      //if selection sample2
      var name = "Talleh";
      if (name == "Talleh") {
        document.write("You are allowed");
      }


      //if else selection
      var marks = 80;
      if (marks >= 70) {
        document.write("Qualified");
      } else {
        document.write("Try another level");
      }


       //JavaScript output
       document.write();


      //JS code to prompt user input(Text)
       var name = window.prompt("Enter your name");
       document.write("<br/>");
       document.write("Hi " + name);
       var age = window.prompt("Enter your age");
       document.write("<br/>");
       document.write("Your age is " + age);


      //JS code to prompt user input(Arithmetic operator)
       var num1 = Number(window.prompt("Enter first number"));
       var num2 = Number(window.prompt("Enter second number"));
       // var result = num1 + num2;
       document.write("Sum of two numbers is " + (num1 + num2));
       document.write("<br/>");
       document.write("Subtraction of two numbers is " + (num1 - num2));
       document.write("<br/>");
       document.write("Division of two numbers is " + num1 / num2);
       document.write("<br/>");
       document.write("Multiplication of two numbers is " + num1 * num2);
       document.write("<br/>");
       document.write("Modulas of two numbers is " + (num1 % num2)); */


      //JavaScript code involving Comparison operator;
       var a = 10;
       var b = 20;
       document.write(a == b);
       document.write("<br>");
       document.write(a != b);
       document.write("<br>");
       document.write(a > b);
       document.write("<br>");
       document.write(a >= b);
       document.write("<br>");
       document.write(a < b);
       document.write("<br>");
       document.write(a <= b);


       //JavaScript code involving Comparison operator;
       var a = 10;
       var b = 20;
       var c = 30;
       var d = 40;
       document.write(a > b && c < d); //tt
       //tt=>t, tf=>f, ft=>f, ff=>f
       document.write("<br>");

       document.write(a > b || c < d); //tt
       //tt=>t, tf=>t, ft=>t, ff=>f
       document.write("<br>");

       document.write(!a > b || c < d); //ff
       //t=>f, f=>t

      var a = 10;
      var b = 20;
      var result = a < b ? "It is True" : "It is False";
      document.write(result);

      //const data type
      const a = 3.4;
      document.write(a);

      //JS sample function code
      function test1() {
        let x = 3;
        document.write(x);
        function test2() {
          let x = 30;
          document.write(x);
        }
        test2();
      }
      test1();


      //JS if else selection
      var cat1 = Number(window.prompt("Enter your cat1 marks"));
      var cat2 = Number(window.prompt("Enter your cat2 marks"));
      var sum = cat1 + cat2;
      document.write("The sum is " + sum);
      var name = window.prompt("Enter you name");
      if (name == "Anto") {
        document.write(name + " You are allowed");
      } else {
        document.write(name + " You are not allowed");
      }

      //JS if else if selection
      var marks = Number(window.prompt("Enter your pass mark"));
      if (marks >= 90) {
        document.write("You are qualified for full scholarship");
      } else if (marks > 80) {
        document.write("You are qualified for 80% scholarship");
      } else if (marks > 70) {
        document.write("You are qualified for 70% scholarship");
      } else if (marks > 60) {
        document.write("You are qualified for 60% scholarship");
      } else if (marks >= 50) {
        document.write("You are qualified for average scholarship");
      } else {
        document.write("You are not qualified for this scholarship");
      }

      //JS switch case selection
      switch (3) {
        case 1:
          document.write("It is 1");
          break;
        case 2:
          document.write("It is 2");
          break;
        case 3:
          document.write("It is 3");
          break;
        case 4:
          document.write("Do not match");
          break;
      }

      //JS Switch case problem 1
      var chr = window.prompt("Enter a character");
      switch (chr) {
        case "a":
        case "A":
          document.write("It is a vowel");
          break;
        case "e":
        case "E":
          document.write("It is a vowel");
          break;
        case "i":
        case "I":
          document.write("It is a vowel");
          break;
        case "o":
        case "O":
          document.write("It is a vowel");
          break;
        case "u":
        case "U":
          document.write("It is a vowel");
          break;
        default:
          document.write("It is not a vowel");
      }

      //Switch case problem 2
      var nmbr = window.prompt("Enter a random number from 1 to 7");
      switch (nmbr) {
        case "1":
          document.write("It is Saturday");
          break;
        case "2":
          document.write("It is Sunday");
          break;
        case "3":
          document.write("It is Monday");
          break;
        case "4":
          document.write("It is Tuesday");
          break;
        case "5":
          document.write("It is Wednesday");
          break;
        case "6":
          document.write("It is Thursday");
          break;
        case "7":
          document.write("It is Friday");
          break;
        default:
          document.write("Did not match with any case");
          break;
      }
 

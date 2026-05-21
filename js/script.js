/*
Author: Tyrell McCallum
 */


document.addEventListener("DOMContentLoaded", function () {

    var myForm = document.getElementById("registrationForm");

    if (myForm) {
        myForm.addEventListener("submit", function (event) {
          
            event.preventDefault();

          
            var errorBox = document.getElementById("errorBox");
            var successBox = document.getElementById("successBox");

           
            errorBox.style.display = "none";
            errorBox.innerHTML = "";
            successBox.style.display = "none";
            successBox.innerHTML = "";

          
            var nameValue = document.getElementById("fullName").value.trim();
            var emailValue = document.getElementById("email").value.trim();
            var phoneValue = document.getElementById("phone").value.trim();
            var ageValue = document.getElementById("age").value.trim();
            var tierValue = document.getElementById("membershipType").value;
            var insuranceValue = document.getElementById("insurance").value;
            var emergencyValue = document.getElementById("emergencyName").value.trim();
            var goalsValue = document.getElementById("fitnessGoals").value.trim();

           
            var errorList = [];

          
            var allInputs = [nameValue, emailValue, phoneValue, ageValue, tierValue, insuranceValue, emergencyValue, goalsValue];
            var hasMissingField = false;

            for (var i = 0; i < allInputs.length; i++) {
                if (allInputs[i] === "") {
                    hasMissingField = true;
                }
            }

         
            if (hasMissingField === true) {
                errorList.push("You must fill out every single field in the form.");
            }

           
            if (emailValue !== "") {
                if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
                    errorList.push("Your email address is missing an '@' or a '.' symbol.");
                }
            }

            
            var cleanPhone = phoneValue.replace("-", "").replace(" ", "");
            if (phoneValue !== "") {
                if (cleanPhone.length !== 10) {
                    errorList.push("Your phone number must be exactly 10 numbers long.");
                }
            }

           
            if (ageValue !== "") {
                var ageNumber = parseInt(ageValue);
                if (ageNumber < 14 || ageNumber > 100) {
                    errorList.push("You must be between 14 and 100 years old to sign up.");
                }
            }

           
            if (errorList.length > 0) {
                
                var htmlContent = "<strong>Please fix these errors:</strong><ul>";
                for (var j = 0; j < errorList.length; j++) {
                    htmlContent = htmlContent + "<li>" + errorList[j] + "</li>";
                }
                htmlContent = htmlContent + "</ul>";

            
                errorBox.innerHTML = htmlContent;
                errorBox.style.display = "block";
            } else {
                
                successBox.innerHTML = "<strong>Success!</strong> Welcome to Iron Pulse Gym, " + nameValue + "!";
                successBox.style.display = "block";
                myForm.reset();
            }
        });
    }

   
    var toggleButton = document.getElementById("themeToggleBtn");
    
    
    var darkModeOn = false;

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (darkModeOn === false) {
                
                document.documentElement.style.setProperty('--bg-main', '#121212');
                document.documentElement.style.setProperty('--bg-content', '#1e1e1e');
                document.documentElement.style.setProperty('--text-main', '#f4f6f9');
                document.documentElement.style.setProperty('--form-bg', '#2d2d2d');
                document.documentElement.style.setProperty('--card-tint', 'rgba(255, 255, 255, 0.1)');
                document.documentElement.style.setProperty('--table-stripe', '#333333');
                document.documentElement.style.setProperty('--shadow-color', '#000000');
                
              
                darkModeOn = true;
            } else {
               
                document.documentElement.style.setProperty('--bg-main', '#000000');
                document.documentElement.style.setProperty('--bg-content', '#ffffff');
                document.documentElement.style.setProperty('--text-main', '#333333');
                document.documentElement.style.setProperty('--form-bg', '#f2f2f2');
                document.documentElement.style.setProperty('--card-tint', 'rgba(204, 204, 204, 0.3)');
                document.documentElement.style.setProperty('--table-stripe', '#ccc');
                document.documentElement.style.setProperty('--shadow-color', '#ccc');
                
                
                darkModeOn = false;
            }
        });
    }

    
    var dayLabel = document.getElementById("daysBox");
    var hourLabel = document.getElementById("hoursBox");
    var minuteLabel = document.getElementById("minutesBox");
    var secondLabel = document.getElementById("secondsBox");

    if (dayLabel && hourLabel && minuteLabel && secondLabel) {
        
        var targetDate = new Date("December 31, 2026 23:59:59").getTime();

        
        var myTimer = setInterval(function () {
            var rightNow = new Date().getTime();
            var timeLeft = targetDate - rightNow;

           
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

           
            if (timeLeft < 0) {
                clearInterval(myTimer);
                document.querySelector(".countdown-section").innerHTML = "<h2>Promotion Over!</h2><p>The deal has expired.</p>";
            } else {
              
                dayLabel.textContent = days;
                hourLabel.textContent = hours;
                minuteLabel.textContent = minutes;
                secondLabel.textContent = seconds;
            }
        }, 1000);
    }
});
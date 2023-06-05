// variable declarations
const elements = document.querySelectorAll('.indivi-info, .business-info');
let formDisplayOne = document.querySelector(".display-one");
let ClickDisplayOne = document.querySelector(".data");
let formDisplayFour = document.querySelector(".display-four");
let formDisplayTwo = document.querySelector(".display-two");
let returnAngle = document.querySelectorAll(".return-back-angle");
let formDisplayThree = document.querySelector(".display-three");


//below variables are for password visibility 
const passwordInput = document.querySelector('.control-input');
const showPasswordIcons = document.querySelectorAll('.fa-eye-slash, .fa-eye');
const closedEyeIcon = document.querySelector('.closed-eye');
const openEyeIcon = document.querySelector('.open-eye');

// const passwordField = document.querySelector('.control-input');
// const toggleButton = document.querySelector('.fa-eye-slash');
// const toggleButtonB = document.querySelector('.fa-eye');
// let lightnavigationB = document.querySelector(".arrow-container-B");



elements.forEach(element => {
  const lightnavigation = element.querySelector(".arrow-container");
  const lightnavigationB = element.querySelector(".arrow-container-B");

  element.addEventListener('mouseover', function() {
    element.classList.add('hover-effect');
    if (lightnavigation) {
      lightnavigation.style.display = "block";
    }
    if (lightnavigationB) {
      lightnavigationB.style.display = "block";
    }
  });

  element.addEventListener('mouseout', function() {
    element.classList.remove('hover-effect');
    if (lightnavigation) {
      lightnavigation.style.display = "none";
    }
    if (lightnavigationB) {
      lightnavigationB.style.display = "none";
    }
  });
});







// JS code for password display
  showPasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      var x = document.getElementById("myInput");
      
      if (x.type === "password") {
        // Show password
        x.type = "text";
        // passwordInput.setAttribute('type', 'text');
        x.style.color = "black"
        closedEyeIcon.style.display = 'none';
        openEyeIcon.style.display = 'block';
      } else {
        // Hide password
        x.type = "password";
        // passwordInput.setAttribute('type', 'password');
        x.style.color = "#8692A6"
        closedEyeIcon.style.display = 'block';
        openEyeIcon.style.display = 'none';
      }
    });
  });





 

 


//JS code for password display for signIn form
const eyeSlashIconsForSignIn = document.querySelectorAll('.eye-slash, .eye-open');
const closedEyeIconForSignIn = document.querySelector('.closed-eye-signIn');
const openEyeIconForSignIn = document.querySelector('.open-eye-signIn');

//  let eyeSlashIconsForSignIn = document.getElementById('eye-slash');
// let eyeOpenIconsForSignIn = document.getElementById('eye-open');

eyeSlashIconsForSignIn.forEach(icon => {
  icon.addEventListener('click', () => {
    var x = document.getElementById("myInput-for-SignIn");
    
    if (x.type === "password") {
      // Show password
      x.type = "text";
      // passwordInput.setAttribute('type', 'text');
      x.style.color = "black"
      closedEyeIconForSignIn.style.display = 'none';
      openEyeIconForSignIn.style.display = 'block';
    } else {
      // Hide password
      x.type = "password";
      // passwordInput.setAttribute('type', 'password');
      x.style.color = "#8692A6"
      closedEyeIconForSignIn.style.display = 'block';
      openEyeIconForSignIn.style.display = 'none';
    }
  });
});



  //JavaScript code to change phone numbers according to their country flag/colors
  function updateCountryLogo() {

    var countrySelect = document.getElementById("countrySelect");
    var selectedCountry = countrySelect.value;
    var countryLogo = document.querySelector(".country-logo");
    
    // Set the background image of the country logo based on the selected country
    switch (selectedCountry) {
      case "Nigeria":
        countryLogo.src= "images/Nigflag.png";
        break;
      case "United-State":
        countryLogo.src= "images/united-stated.png";
        break;
        case "Luzembourg":
        countryLogo.src= "images/luzembourge.png";
        break;
      case "Algeria":
        countryLogo.src= "images/algeria.png";
        break;
        case "Angola":
        countryLogo.src= "images/angola.png";
        break;
        case "Belarus":
        countryLogo.src= "images/belrus.png";
        break;
        case "Brunei":
        countryLogo.src= "images/brunei.png";
        break;
        case "Austria":
        countryLogo.src= "images/austria.png";
        break;
        case "Idia":
          countryLogo.src= "images/india.png";
          break;
        case "Israel":
        countryLogo.src= "images/israel.png";
        break;
       
      // Add more cases for each country option
      default:
        countryLogo.src= "images/Nigflag.png"; // Set a default image or empty if needed
        break;
    }
  }
  


 //reduce select placeholder once the select option is being selected 
  const select = document.querySelector('.CountrySelect');
  const placeholder = document.querySelector('.CountrySelectOption');
  
  select.addEventListener('change', () => {
    placeholder.style.opacity = select.value ? 0 : 1;
  });


//input validation for BVN
const userInput = document.getElementById('userInput');
const icon = document.getElementById('icon');

userInput.addEventListener('input', function() {
  const inputValue = userInput.value;
  const filteredValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
  const maxLength = 11; // Maximum length of digits

  userInput.value = filteredValue.slice(0, maxLength);
  
  if (filteredValue.length >= maxLength) {
    icon.style.color = '#08AD36'; // change to desired color
  } else {
    icon.style.color = 'red'; // change to desired color
  }
});



// form validation for BVN
// function validateForBvn() {
  
 

//   if (icon.style.color = 'red') {
//     alert('Incorrect BVN code');
   
//     // formDisplayOne.style.display = "none";
//   } else {
//     formDisplayFour.style.display = "none";
//     formDisplayOne.style.display = "block";
//   }
//   return false;
// }

//displays of forms begins here

ClickDisplayOne.addEventListener('click', function() {
  formDisplayOne.style.display = "none";
  formDisplayTwo.style.display = "block";
});


//Code for Sign-In form begins here
let signInSection = document.querySelector(".sign-in-section");
var SignInButton = document.getElementById("Sign-in");


SignInButton.addEventListener('click', function() {
  formDisplayOne.style.display = "none";
  signInSection.style.display = "block";
});

// JS code returning back to the previous page. 

returnAngle.forEach(function(button) {
  button.addEventListener('click', function() {
    var computedStyleTwo = window.getComputedStyle(formDisplayTwo);
    var computedStyleThree = window.getComputedStyle(formDisplayThree);
    var computedStyleFour = window.getComputedStyle(formDisplayFour);
    var computedStyleFive = window.getComputedStyle(signInSection);

    if (computedStyleTwo.display === "block") {
      formDisplayTwo.style.display = "none";
      formDisplayOne.style.display = "block";

    } else if (computedStyleThree.display === "block") {
      formDisplayThree.style.display = "none";
      formDisplayTwo.style.display = "block";

    } else if (computedStyleFour.display === "block") {
      formDisplayFour.style.display = "none";
      formDisplayThree.style.display = "block";

    } else if (computedStyleFive.display === "block") {
      signInSection.style.display = "none";
      formDisplayOne.style.display = "block";
    } else {
      formDisplayFour.style.display = "none";
      formDisplayOne.style.display = "block";
    }
  });
});





//form validation of users input goes here

function validateAndSubmitForm() {
  function setBorderRed(element) {
    element.style.border = '1px solid red';
  }

  function setBorderBlue(element) {
    element.style.border = '1px solid blue';
  }

  var isValid = true;

  var cardNumber = document.getElementById("fullname");
  if (cardNumber.value === '') {
    setBorderRed(cardNumber);
    isValid = false;
  } else {
    setBorderBlue(cardNumber);
  }

  var securityCode = document.getElementById("emmailAdress");
  if (securityCode.value === '') {
    setBorderRed(securityCode);
    isValid = false;
  } else {
    setBorderBlue(securityCode);
  }

  var createPassword = document.getElementById("myInput");
  if (createPassword.value === '') {
    setBorderRed(createPassword);
    isValid = false;
  } else {
    setBorderBlue(createPassword);
  }

  var checkBox = document.getElementById("checkBox");
  if (!checkBox.checked) {
    setBorderRed(checkBox);
    isValid = false;
  } else {
    setBorderBlue(checkBox);
  }
 

  if (isValid) {
    formDisplayThree.style.display = "block"; 
    formDisplayTwo.style.display = "none";
    // formDisplayOne.style.display = "none";
  } else {
    alert('Please fill in your details');
  }
  return false;
}




// validation for form completion
function validateAndCompleteForm() {
  function setBorderRed(element) {
    element.style.border = '1px solid red';
  }

  function setBorderBlue(element) {
    element.style.border = '1px solid blue';
  }

  var isValid = true;

  var selectOption = document.getElementById("countrySelect");
  if (selectOption.selectedIndex === 0) {
    setBorderRed(selectOption);
    isValid = false;
  } //else {
  //   alert('Please select your country code');
    
  // }

  var cardNumber = document.getElementById("tel");
  if (cardNumber.value === '') {
    setBorderRed(cardNumber);
    isValid = false;
  } else {
    setBorderBlue(cardNumber);
  }

  var securityCode = document.getElementById("address");
  if (securityCode.value === '') {
    setBorderRed(securityCode);
    isValid = false;
  } else {
    setBorderBlue(securityCode);
  }

  var createPassword = document.getElementById("countrySelectResi");
  if (createPassword.value === '') {
    setBorderRed(createPassword);
    isValid = false;
  } else {
    setBorderBlue(createPassword);
  }

 

  // var checkBox = document.getElementById("checkBox");
  // if (!checkBox.checked) {
  //   setBorderRed(checkBox);
  //   isValid = false;
  // } else {
  //   setBorderBlue(checkBox);
  // }
 

  if (isValid) {
    formDisplayFour.style.display = "block"; 
    formDisplayThree.style.display = "none";
    // formDisplayOne.style.display = "none";
  } else {
    alert('Please fill in your details');
  }
  return false;
}

//validation for final completion of form.

function validateAndFinalCompleteForm() {
  function setBorderRed(element) {
    element.style.border = '1px solid red';
  }

  function setBorderBlue(element) {
    element.style.border = '1px solid blue';
  }

  var isValid = true;


  var verifyBvn = document.getElementById("userInput");
  if (verifyBvn.value === '' || icon.style.color === 'red') {
    setBorderRed(verifyBvn);
    isValid = false;
  } else {
    setBorderBlue(verifyBvn);
  }



  if (isValid) {
    formDisplayOne.style.display = "block"; 
    formDisplayFour.style.display = "none";
    // formDisplayOne.style.display = "none";
  } else {
    alert('Incorrect BVN Code');
  }
  return false;
}



//  validation for signInSection
function validateAndFinalSignInSection() {
  function setBorderRed(element) {
    element.style.border = '1px solid red';
  }

  function setBorderBlue(element) {
    element.style.border = '1px solid blue';
  }

  var isValid = true;

  var cardNumber = document.getElementById("emmailAdress-for-SignIn");
  if (cardNumber.value === '') {
    setBorderRed(cardNumber);
    isValid = false;
  } else {
    setBorderBlue(cardNumber);
  }

  var verifyBvn = document.getElementById("myInput-for-SignIn");
  if (verifyBvn.value === '') {
    setBorderRed(verifyBvn);
    isValid = false;
  } else {
    setBorderBlue(verifyBvn);
  }



  if (isValid) {
    formDisplayOne.style.display = "block"; 
    signInSection.style.display = "none";
    // formDisplayOne.style.display = "none";
  } else {
    alert('Incorrect details');
  }
  return false;
}

// Select the password input and the eye icons
// const passwordInput = document.querySelector('.control-input');
// const showPasswordIcons = document.querySelectorAll('.fa-eye-slash');

// Add click event listener to each eye icon
// showPasswordIcons.forEach(icon => {

//   const iconA = icon.querySelector(".closed-eye");
//   const iconB = icon.querySelector("open-eye");

//   icon.addEventListener('click', () => {
//     if (passwordInput.type == 'password') {
//       // Show password
//       passwordInput.type = 'text';
//       iconA.style.display = "none"
//       iconB.style.display = "block"
//     } else {
//       // Hide password
//       passwordInput.type = 'password';
//       iconA.style.display = "block"
//       iconB.style.display = "none"
//     }
//   });
// });








// elements.forEach(element => {
//   let lightnavigation = element.querySelector(".arrow-container");
//   let lightnavigationB = element.querySelector(".arrow-container-B");

//   element.addEventListener('mouseover', function() {
//     element.classList.add('hover-effect');
//     lightnavigation.style.display = "block";
//     lightnavigationB.style.display = "block";
//   });

//   element.addEventListener('mouseout', function() {
//     element.classList.remove('hover-effect');
//     lightnavigation.style.display = "none";
//     lightnavigationB.style.display = "none";
    
//   });
// });


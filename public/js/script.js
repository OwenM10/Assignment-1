
// Navagation bar tabs
function openTab(evt, tabName) {
    
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


//Real time for dashboard page
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
document.getElementById('time').innerHTML = n + ' ' + time;

//Lighting mode boxes
$("input:checkbox").on('click', function() {

var $box = $(this);
if ($box.is(":checked")) {
  var group = "input:checkbox[name='" + $box.attr("name") + "']";
  $(group).prop("checked", false);
  $box.prop("checked", true);
} else {
  $box.prop("checked", false);
}
});



//Tempature adjustment
function increaseTemp() {
const input = document.getElementById("temperature");
const currentTemp = parseFloat(input.value);
const newTemp = currentTemp + 0.5;
if (newTemp <= 25) {
  input.value = newTemp.toFixed(1);
}
}

function decreaseTemp() {
const input = document.getElementById("temperature");
const currentTemp = parseFloat(input.value);
const newTemp = currentTemp - 0.5;
if (newTemp >= 10) {
  input.value = newTemp.toFixed(1);
}
}


// Select the form and password input fields
const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#password-confirm');

// Add event listener to the form on submission
form.addEventListener('submit', (event) => {
// Prevent the form from submitting by default
event.preventDefault();

// Get the values of the password and password confirmation inputs
const password = passwordInput.value;
const confirmPassword = confirmPasswordInput.value;

// Check if the password is at least 8 characters long
if (password.length < 8) {
  alert('Password must be at least 8 characters long');
  return;
}

// Check if the password and password confirmation match
if (password !== confirmPassword) {
  alert('Password and password confirmation do not match');
  return;
}

// If both checks pass, submit the form
form.submit();
});
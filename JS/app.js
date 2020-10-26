var firebaseConfig = {
    apiKey: "AIzaSyBzIf45a8rz21ai9669BoWcH4s6S8e9zqs",
    authDomain: "portfolio-a6b8d.firebaseapp.com",
    databaseURL: "https://portfolio-a6b8d.firebaseio.com",
    projectId: "portfolio-a6b8d",
    storageBucket: "portfolio-a6b8d.appspot.com",
    messagingSenderId: "570274780720",
    appId: "1:570274780720:web:f1930ffc4265ef4d8e7ff5",
    measurementId: "G-11T7QPBLQ8"
  };

firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("info");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
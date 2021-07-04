
var firebaseConfig = {
    apiKey: "AIzaSyA19OYG15GxojT7AoPZ7Bu8A6C8OWnFPzM",
    authDomain: "soufianekre-323242.firebaseapp.com",
    projectId: "soufianekre-323242",
    storageBucket: "soufianekre-323242.appspot.com",
    messagingSenderId: "536525450319",
    appId: "1:536525450319:web:ef172caf6a3c8a86790e3a",
    databaseURL: "https://soufianekre-323242-default-rtdb.europe-west1.firebasedatabase.app/"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var messagesRef = database.ref('messages')


// listen for form submit
console.log("The main js file is working ");
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();
    console.log(123);

    // get Values

    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('email_message');
    saveMessage(name, email, subject, message);
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000)
}

// function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;

}

function saveMessage(name, email, subject, message) {
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
}
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAxowrM0Ych8guI8P_LV0IqrL1jF2Bnypw",
    authDomain: "likhithademo.firebaseapp.com",
    projectId: "likhithademo",
    storageBucket: "likhithademo.appspot.com",
    messagingSenderId: "682708695482",
    appId: "1:682708695482:web:ac003192f7af93fc570583",
    measurementId: "G-CFK55KM5BQ"
};
firebase.initializeApp(firebaseConfig);

// Reference to Firebase auth service
const auth = firebase.auth();

// Login function
document.getElementById('loginButton').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("Login successful!");
            // Redirect to a different page if necessary
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
});

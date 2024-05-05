const firebaseConfig = {
    apiKey: "AIzaSyA_689PodOtnpB_9stmo2cJbPaROZnSBHA",
    authDomain: "bulut-e2a8d.firebaseapp.com",
    databaseURL: "https://bulut-e2a8d-default-rtdb.firebaseio.com",
    projectId: "bulut-e2a8d",
    storageBucket: "bulut-e2a8d.appspot.com",
    messagingSenderId: "993966488616",
    appId: "1:993966488616:web:b2f380dacc1a0f3108091d"
  };

  firebase.initializeApp(firebaseConfig);

var bulutDB =  firebase.database().ref('bulut');
//contactForm butonun içinde olduğu formun id değeri//submit butonun type'ı
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    var name = getElementVal("name");

    saveMessages(name);
}

const saveMessages = (name ) =>{
var newBulut = bulutDB.push();

newBulut.set({

    name: name,
})

}

const getElementVal =(id) =>{
    return document.getElementById(id).value;
}
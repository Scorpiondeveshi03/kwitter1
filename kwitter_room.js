
var firebaseConfig = {

      apiKey: "AIzaSyD6UaHDNiTOqJQ_gTMdL24E1Cp1Cd3upLk",
    
      authDomain: "face-gram-b81cd.firebaseapp.com",
    
      databaseURL: "https://face-gram-b81cd-default-rtdb.firebaseio.com",
    
      projectId: "face-gram-b81cd",
    
      storageBucket: "face-gram-b81cd.appspot.com",
    
      messagingSenderId: "456595648672",
    
      appId: "1:456595648672:web:21bd18c9ad2f2d4e5659c5"
    
    };
    
    
    
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

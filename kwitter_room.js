
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_buQYz8X-_pEiZHjB8c6iSE-xj36K1Nk",
      authDomain: "chat-output.firebaseapp.com",
      projectId: "chat-output",
      storageBucket: "chat-output.appspot.com",
      messagingSenderId: "1061202241000",
      appId: "1:1061202241000:web:4da9fb9062736edff8b05d",
      measurementId: "G-VD6L2V95RW"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

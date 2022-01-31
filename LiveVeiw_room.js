var firebaseConfig = {
    apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
    authDomain: "testkwitter.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "testkwitter",
    storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
    appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b"
  };
  
  
  
    firebase.initializeApp(firebaseConfig);
    
    

function joinGroup(){
  group_name = document.getElementById("group_name").value;

firebase.database().ref("/").child(group_name).update({
  purpose : "adding group name"
});
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Group_names = childKey;
 //Start code
 console.log("Group Name - " + group_name);
 row = "<div class='room_name' id="+Group_names+" onclick='redirectToGroupName(this.id)'>#"+ Group_name + "</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData(); 
 






    
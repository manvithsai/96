const firebaseConfig = {
    apiKey: "AIzaSyCFS-piYY-z_BsvvtwTmclFviwJar3ixAs",
    authDomain: "lets-chat-c4246.firebaseapp.com",
    databaseURL: "https://lets-chat-c4246-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c4246",
    storageBucket: "lets-chat-c4246.appspot.com",
    messagingSenderId: "58439448462",
    appId: "1:58439448462:web:1096a40783cb967effd6df",
    measurementId: "G-FKKXRJG37M"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
});
document.getElementById("msg").value="";
    }
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
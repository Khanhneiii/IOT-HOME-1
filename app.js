let mqtt = require('mqtt')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// Import the functions you need from the SDKs you need

const {initializeApp} = require("firebase/app")
const { getDatabase, ref,set, onValue } = require("firebase/database")

const mainRouter = require('./routes/main')

const firebaseConfig = {
    apiKey: "AIzaSyC0KeezZB68slMRpvCWTOErT0ndCBx4iJk",
    authDomain: "dht-home-b0439.firebaseapp.com",
    databaseURL: "https://dht-home-b0439-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dht-home-b0439",
    storageBucket: "dht-home-b0439.appspot.com",
    messagingSenderId: "1030501109314",
    appId: "1:1030501109314:web:adef68673277eb03c6e7db",
    measurementId: "G-2Z930YPYD2"
  };
  
  // Initialize Firebase
  const FBapp = initializeApp(firebaseConfig);
  const RTDB = getDatabase(FBapp);
  let config = {
      port: 1883,
      clientId: "Nodejs"
  }
  
  
const app = express()
  
const db = getDatabase();
  
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(mainRouter)

app.listen(8080)
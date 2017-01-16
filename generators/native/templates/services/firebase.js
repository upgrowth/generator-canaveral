import Rebase from 're-base';

const firebase = Rebase.createClass({
  apiKey: "<%= firebaseApiKey %>",
  authDomain: "<%= firebaseName %>.firebaseapp.com",
  databaseURL: "https://<%= firebaseName %>.firebaseio.com",
  storageBucket: "<%= firebaseName %>.appspot.com",
  messagingSenderId: "<%= firebaseSenderId %>"
}, 'App');

export default firebase;

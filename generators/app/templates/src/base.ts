import * as Rebase from 're-base';

const config = {
  apiKey: "<%= firebaseApiKey %>",
  authDomain: "<%= firebaseName %>.firebaseapp.com",
  databaseURL: "https://<%= firebaseName %>.firebaseio.com",
  storageBucket: "<%= firebaseName %>.appspot.com",
  messagingSenderId: "<%= firebaseSenderId %>"
};

let base = Rebase.createClass(config);
export default base;
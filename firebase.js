<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyAO4avHYZsIMgeibThNl6HTGaPWH4GiqD0",

  authDomain: "reskuyyy-df105.firebaseapp.com",

  projectId: "reskuyyy-df105",

  storageBucket: "reskuyyy-df105.firebasestorage.app",

  messagingSenderId: "954977450705",

  appId: "1:954977450705:web:b653ab6277c1798f57a3f0"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.auth = auth;

</script>

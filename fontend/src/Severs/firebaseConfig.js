import * as firebase from 'firebase';

const config = { 
    apiKey: "AIzaSyCIBWszyy5PVOle9wA3D5EW3mKPX3XDxQc",
            authDomain: "fir-demo-a3e0d.firebaseapp.com",
            projectId: "fir-demo-a3e0d",
            storageBucket: "fir-demo-a3e0d.appspot.com",
            messagingSenderId: "242223125274",
            appId: "1:242223125274:web:81c9fdaaf8c31af045d2a3",
            measurementId: "G-9B8W8BY45N"
}

export const firebaseRN = firebase.initializeApp(config);

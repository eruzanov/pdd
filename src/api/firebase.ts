import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCdWAmx0fgPXsVbUo1FzhMCYd5mjJACFfI',
    authDomain: 'pdd-project.firebaseapp.com',
    databaseURL: 'https://pdd-project.firebaseio.com',
    projectId: 'pdd-project',
    storageBucket: 'pdd-project.appspot.com',
    messagingSenderId: '696706749765',
    appId: '1:696706749765:web:b9a8dab1799f57406f5a2c',
};
firebase.initializeApp(firebaseConfig);

export default firebase;

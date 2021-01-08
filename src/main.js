// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
        apiKey: 'AIzaSyBpcLrhdVZRTeeOZUxk2B-OZYUC5DsuSzE',
        authDomain: 'progress-report-v2.firebaseapp.com',
        databaseURL: 'https://progress-report-v2-default-rtdb.firebaseio.com',
        projectId: 'progress-report-v2',
        storageBucket: 'progress-report-v2.appspot.com',
        messagingSenderId: '345522979460',
        appId: '1:345522979460:web:21162387d45a5de4e078d1'
    }
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
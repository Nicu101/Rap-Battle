import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';

import firebase from 'firebase/app';
import '@firebase/firestore';

import vuelidate from 'vuelidate';
Vue.use(vuelidate);

Vue.config.productionTip = false;

const firebaseConfig =  {
	apiKey: "AIzaSyCP673NCqkK40ZKh-O4nDdlP3kva0kcLmw",
	authDomain: "test1-de379.firebaseapp.com",
	databaseURL: "https://test1-de379.firebaseio.com",
	projectId: "test1-de379",
	storageBucket: "test1-de379.appspot.com",
    	messagingSenderId: "923764420149",
    	appId: "1:923764420149:web:700f69bb84cb0e3ca18b7c",
	measurementId: "G-HPDCL1JFJC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const firestore = firebase.firestore;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

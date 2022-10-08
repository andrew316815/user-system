import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ChartList from 'vue-chartist'
import './/assets/chart.min.css'

createApp( App ).use( store ).use( router ).use( ChartList ).mount( '#app' )

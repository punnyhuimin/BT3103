import { Bubble } from 'vue-chartjs'
import database from './firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: []
        },
        options: {
            title: {
              display: true,
              text: 'GDP, happiness and population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('bubble').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            var a = {
                label: [doc.data().label],
                backgroundColor: [doc.data().backgroundColor],
                borderColor: [doc.data().borderColor],
                 data: [{
                   x: doc.data().x,
                   y: doc.data().y,
                   r: doc.data().r
                 }]
            }
            console.log(a)
            this.datacollection.datasets.push(a)
        })
        this.renderChart(this.datacollection, this.options)
        console.log(this.datacollection.datasets)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}
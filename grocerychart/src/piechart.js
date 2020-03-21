import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: function () {
    return {
        datacollection: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Sales (Thousands)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
              }]
        },
        options: {
          title: {
            display: true,
            text: 'Overall sales in 2020'
          },
          scales:{
              yAxes:[{
                  ticks:{
                      min:0
                  }

              }]
          },
          layout:{
            padding:{
                left: 5,
                right: 0,
                top: 0,
                bottom: 10
            }
        }
        
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
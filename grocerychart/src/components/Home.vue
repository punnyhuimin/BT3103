<template>
    <div id="main">
        <div id="chart">
            <charts></charts>
        
        </div>
        <div id="chart">
            <doughnut></doughnut>
        
        </div>
         <div id="chart">
            <linechart></linechart>
        </div>
        <div id = "chart">
            <piechart></piechart>
        </div>
        <div id= "bubz">
            <bubblechart></bubblechart>
        </div>
    </div>
</template>

<script>
import charts from '../charts.js'
import doughnut from '../doughnut.js'
import linechart from '../linechart.js'
import piechart from '../piechart.js'
import bubblechart from '../FirebaseData.js'
export default {
    components:{
        charts,doughnut,linechart,piechart,bubblechart
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:255px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
#bubz {
  height:380px;
  width:1146px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:60px;
  float:left;
}
</style>>
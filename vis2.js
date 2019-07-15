//Parsing the data that we 
var data = d3.csvParse( iris, d3.autoType)
//console.log prints or send sout a fiunction to the browser console
console.log (data);

var w = 800;
var h = 800;
var margin = 20;
var height= h-20;
var width= w-20;

var chart2 = d3.select("#vis2")
              .append("svg") 
              .attr("width", w)
              .attr("height", h)
              .style("background-color", "#f0f8ff")
    
const xScale2 = d3.scaleBand()
                .domain(data.map(d=> d.Species)) 
                .range([0,width])

const colScale2 =d3.scaleOrdinal(d3.schemeSet2)
                .domain(data.map(d=> d.Species))

const xAxis2= chart2.append("g")
                .call( d3.axisBottom(xScale2))
                .attr("transform",`translate(0,${h/2})`)



var vis2 = chart2.selectAll("rect")
                .data(data)
 
vis2.enter()
// .data(data.filter(function(d){return d.species==="Setosa"}))
.append("rect")
.attr("x", d=> xScale2(d.Species))
.attr("y", h/2)
.attr("width", d=> (d.SepalWidthCm)*40)
.attr("height", d=> (d.SepalLengthCm)*40)
.attr("fill"," #87dfb2 " )
.attr("fill-opacity", 0.05)



vis2.enter()
// .data(data.filter(function(d){return d.species==="Setosa"}))
.append("rect")
.attr("x", d=> xScale2(d.Species))
.attr("y", d=> h/2-(d.PetalLengthCm)*40)
.attr("width", d=> (d.PetalWidthCm)*40)
.attr("height", d=> (d.PetalLengthCm)*40)
.attr("fill"," #bec4f6 " )
.attr("fill-opacity", 0.05)





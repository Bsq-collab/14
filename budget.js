//Bayan Berri & Joyce Wu
//Softdev2 pd7
//K14 -- You are Smarter Than the President*
//2018-03-24

//FY 2000 Spending (%)
//Health and Human Services: 19, Social Security Administration: 22, Defense: 14
//Treasury: 20, Veteran Affairs: 2, Agriculture: 4, Other Departments/Agencies:19

//FY 2016 Spending (%)
//Health and Human Services: 26, Social Security Administration: 24, Defense: 14
//Treasury: 13, Veteran Affairs: 4, Agriculture: 4, Other Departments/Agencies:15

//build bar
//data alternating between 2000 and 2016
var data = [19, 26, 22, 24, 14, 14, 20, 13, 2, 4, 4, 4, 19, 15];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

//changes bar graph width according to %'s
barEnter.style("width", function(d){
  return d * 10 + "px";});

//returns %'s on graph
barEnter.text(function(d) {return d;});

//changes color based on year to make double bar graph
//2000 == steelblue, 2016 == orange
barEnter.style("background-color", function(d, i){
  if(i%2 == 0){
    return "steelblue";
  }else{
    return "orange";
  }
});

var chart;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log()
function comparison(value) {
  document.getElementById("demo").innerHTML = val;
  if(val=="1975"){
    console.log("Inside 1975")
    chart = "RaceDemographics1975.png"
  }
  else if(val=="1990"){
    chart = "RaceDemographics1990.png"
    console.log("Inside 1990")
  }
  else if(val=="2005"){
    chart = "RaceDemographics2005.png"
    console.log("Inside 2005")
  }
  else{
    chart = "RaceDemographics2015.png"
    console.log("Inside 2015")

  }
}

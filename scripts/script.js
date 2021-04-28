// const url =
//   "https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";

const country = document.getElementById("country");
const startDate = document.getElementById("start");
const endDate = document.getElementById("end");
const btn = document.getElementById("btn");

btn.addEventListener("click", getInput);
function getInput() {
  let searchCountry = country.value;
  let start = startDate.value;
  let end = endDate.value;
  if (searchCountry === "") {
    alert("Please fill all fields");
    return;
  }
  if(start==="")
  {
    alert("Please fill all fields");
    return; 
  }
  if(end==="")
  {
    alert("Please fill all fields");
    return;
  }

  start= start.split("-").reverse().join("-");
  end=end.split("-").reverse().join("-");
  getCovidData(searchCountry, start, end);
}

function getCovidData(country, start, end) {
  //const url = `https://api.covid19api.com/country/${country}/status/confirmed?from=${start}T00:00:00Z&to=${end}T00:00:00Z`;
  const url = "https://api.covid19api.com/country/"+country+"?from="+start+"T00:00:00Z&to="+end+"T00:00:00Z";
  //const url = `https://api.covid19api.com/country/india/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`;
  const data = fetch(url);

  data
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showCovidData(data);
    });
}

function showCovidData(data) {
  console.log(data);
  //   if (data.length === 1) {
  let output = "<div>";
 // output.setAttribute("class","outerdiv");

  for (let i = data.length-1; i >0; i--) {
    output += `<div class="coviddata">`;
    output += `<p>Confirmed Cases: ${data[i].Confirmed}</p>`;
    output += `<p>Active Cases: ${data[i].Active}</p>`;
    output += `<p>Deaths: ${data[i].Deaths}</p>`;
    output += `</div>`;
  }

  output += "</div>";

  document.getElementById("outputdiv").innerHTML = output;
}

// https://api.covid19api.com/country/$%7bcountry%7d?from=$%7bdateOne%7dT00:00:00Z&to=$%7bdateTwo%7dT00:00:00Z
// https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
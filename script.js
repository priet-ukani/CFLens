const svg = d3.select("#my_dataviz"),
  width = +svg.attr("width"),
  height = +svg.attr("height");
var currentCountryName = null;
var selectedValue="MaxRating";
const path = d3.geoPath();
const projection = d3.geoMercator()
  .translate([width / 2, height / 2]);

const data = new Map();
range=[0,4000]
if(selectedValue!="MaxRating")
{
    range=[0,2000]
}

var colorScale = d3.scaleLinear()

    .domain(range) // Define the range of values
    // .range(["#ddddff", "#0000ff"]);
    .range(["#e5f5e0", "#006d2c"]);


    function generatePopupContent(countryName, dataType) {
      // Create a container for the popup content
      let popupContentContainer = document.createElement("div");
      popupContentContainer.classList.add("popup-content");
    
      // Create popup content based on the selected data type
      let popupContent = `
        <div class="popup">
          <div class="popup-header">
            <h3>${countryName}</h3>
            <button class="close-btn">&times;</button>
          </div>
          <div id="barChart"></div>
        </div>`;
  
      // Append popup content to the container
      popupContentContainer.innerHTML = popupContent;
  
      // Append the container to the body
      // document.body.appendChild(popupContentContainer);
  
      // Fetch data from CSV file and generate bar chart
      d3.csv("orgStats.csv").then(function(orgData) {
          // Filter data based on the country name
          const filteredData = orgData.filter(function(d) {
              var country_name_filter = d.Country;
              if (country_name_filter === "United States") {
                  country_name_filter = "USA";
              }
              if (country_name_filter === "United Kingdom") {
                  country_name_filter = "England";
              }
              return country_name_filter === countryName;
          });
      
          // Sort the filtered data by organization value in descending order
          filteredData.sort(function(a, b) {
              return b.Value - a.Value;
          });
      
          // Get the top 10 organizations
          const topOrganizations = filteredData.slice(0, 10);
          if(topOrganizations.length==0){
            console.log("Bhai Bhai");
            // popupContentContainer.innerHTML = "<h1>No Data Available</h1>";
            const barchartdiv = document.querySelector("#barChart");
            console.log(barchartdiv)
            barchartdiv.innerHTML="<h1>No Data Available</h1>";
            return `
            <h1>No Data Available</h1>`;
          }
          // Plot bar chart based on the selected data type
          const margin = { top: 20, right: 20, bottom: 30, left: 40 };
          const width = 400 - margin.left - margin.right;
          const height = 300 - margin.top - margin.bottom;
          const svg = d3.select("#barChart")
              .append("svg")
              .attr("width", width + margin.left + margin.right+500)
        .attr("height", height + margin.top + margin.bottom + 500)
              .append("g")
              .attr("transform", "translate(" + (margin.left + 180) + "," + (margin.top + 100) + ")");      
          const x = d3.scaleBand()
              .domain(topOrganizations.map(d => d.Organisation))
              .range([0, width+200])
              .padding(0.1);
      
          const y = d3.scaleLinear()
              .domain([0, d3.max(topOrganizations, d => +d[dataType])]) // Use the selected data type here
              .range([height, 0]);
      
              var tooltip1 = d3.select(".popup-container")
              .append("div")
              .attr("class", "tooltip1")
              .style("opacity", 0)
              .html("Bhai");

              const svg2 = d3.select("#page-top");
              const svgRect = svg2.node().getBoundingClientRect();
              const top_margin=svgRect.top;
              const svg3 = d3.select("#my_dataviz");
              const svgRect2 = svg3.node().getBoundingClientRect();
              const top_margin2=svgRect2.top;
          svg.selectAll(".bar")
              .data(topOrganizations)
              .enter().append("rect")
              .attr("class", "bar")
              .attr("x", d => x(d.Organisation))
              .attr("width", x.bandwidth())
              .attr("y", d => y(+d[dataType])) // Use the selected data type here
              .attr("height", d => height - y(+d[dataType]))
              .on("mouseover", function (event, d) {
                // d3.select(this)
                //     .style("opacity", 1)
                //     .style("stroke", "black")
                //     .style("stroke-width", "2px");
      
                // var value = data.get(d.properties.name.toUpperCase()) || 0;
                var Info = `Organisation Name:${d.Organisation}<br/>${dataType}:${d[dataType]}`;
                console.log(Info);

                // Update tooltip content and position
                tooltip1.style("opacity", 1);
                tooltip1
                    .html(Info)
                    .style("left",  parseInt(event.pageX)-svgRect2.left+20 + "px") 
                    .style("top", parseInt(event.pageY)+top_margin-top_margin2 + "px");
                console.log("Kanda");
            })
            .on("mousemove", function (event, d) {
              tooltip1
                  .style("left",  parseInt(event.pageX)-svgRect2.left+20 + "px") 
                  .style("top", parseInt(event.pageY)+top_margin-top_margin2 + "px");
          })
            .on("mouseout", function (event, d) {
                d3.select(this)
                    // .style("opacity", .8)
                    .style("stroke", "transparent");
                
                // Hide the tooltip
                tooltip1.style("opacity", 0);
            });
          
          svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x))
              .selectAll("text")
              .attr("transform", "rotate(-90)")
              .attr("x", -10)
              .attr("y", 0)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .style("font-size", "18px")
            //   .style("font-wight", "bold")
              ;
      
          svg.append("g")
              .call(d3.axisLeft(y))
              .style("font-size", "18px")
              .style("font-wight", "bold")
            //   .style("font-wight", "bold")
              ;
      });
    
      // Add event listener to the close button after it's appended to the DOM
      popupContentContainer.querySelector(".close-btn").addEventListener("click", function() {
          document.body.removeChild(popupContentContainer); // Remove the popup content container
      });
  
      return popupContent;
  }
  
  

  function handleCountryClick(event, d) {
    var countryName = d.properties.name;
    currentCountryName=countryName;
    const popup = document.createElement("div");
    popup.classList.add("popup-container");

    var temp_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
    const popupContent = generatePopupContent(countryName, temp_value);
    popup.innerHTML = popupContent;

    const svg = d3.select("#page-top");
    const svgRect = svg.node().getBoundingClientRect();
    const top_margin=svgRect.top;
    const svg3 = d3.select("#my_dataviz");
    const svgRect2 = svg3.node().getBoundingClientRect();
    const top_margin2=svgRect2.top;
    console.log(top_margin)
    // console.log(svgRect.left, svgRect.top, svgRect.width, svgRect.height)
    popup.style.left = `${svgRect2.left}px`;
    popup.style.top = `${-top_margin+top_margin2}px`;
    popup.style.width = `${svgRect2.width}px`;
    popup.style.height = `${svgRect2.height}px`;
    // const select_world = document.getElementsByClassName("world_map");
    // select_world[0].appendChild(popup);
    document.body.appendChild(popup);

    const closeBtn = popup.querySelector(".close-btn");
    closeBtn.addEventListener("click", function() {
        document.body.removeChild(popup);
        make_graph(selectedValue, null);
        currentCountryName=null;
    });
}



function make_graph(dataType, countryName) {
  Promise.all([
      d3.json("https://enjalot.github.io/wwsd/data/world/world-110m.geojson"),
      d3.csv("countryStats.csv", function(d) {
          data.set(d.Country, +parseFloat(d[dataType])); // Use the selected data type here
      })
  ]).then(function(loadData){
      let topo = loadData[0];
      let maxExportValue = d3.max(Array.from(data.values()));

      // Create the tooltip
      var tooltip = d3.select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

      svg.selectAll("path").remove(); // Remove existing paths before redrawing

      svg.selectAll("path")
          .data(topo.features)
          .enter()
          .append("path")
          .attr("d", d3.geoPath().projection(projection))
          .attr("fill", function (d) {
              let str = d.properties.name.toUpperCase();
              d.total = data.get(str) || 0;
              return colorScale(d.total);
          })
          .style("stroke", "transparent")
          .attr("class", function(d){ return "Country" } )
          .style("opacity", .8)
          .on("click",function(event,d){
              handleCountryClick(event,d);
          })
          .on("mouseover", function (event, d) {
              d3.select(this)
                  .style("opacity", 1)
                  .style("stroke", "black")
                  .style("stroke-width", "2px");

              var value = data.get(d.properties.name.toUpperCase()) || 0;
              var countryInfo = `Country: ${d.properties.name}<br/>${selectedValue}: ${ value.toFixed(2)}`;
              
              // Update tooltip content and position
              tooltip.transition().duration(200).style("opacity", 1);
              tooltip
                  .html(countryInfo)
                  .style("left",  parseInt(event.pageX) + 20 + "px") 
                  .style("top", parseInt(event.pageY) + 20 + "px");
          })
          .on("mousemove", function (event, d) {
              tooltip
                  .style("left",  20 + parseInt(event.pageX) + "px") 
                  .style("top", 20 + parseInt(event.pageY) + "px");
          })
          .on("mouseout", function (event, d) {
              d3.select(this)
                  .style("opacity", .8)
                  .style("stroke", "transparent");
              
              // Hide the tooltip
              tooltip.transition().duration(500).style("opacity", 0);
          });

      // If a country is selected, redraw its bar chart
      if (countryName) {
          var dataType = selectedValue === "MaxRating" ? "maxRating" : "avgRating"; // Determine the dataType based on selectedValue
          // generatePopupContent(countryName, dataType); // Pass dataType to generatePopupContent
      }
  });
}

document.getElementById("slider").addEventListener("change", function() {
  // Get the selected value
  selectedValue = this.value;
  
  // Remove the existing popup if it exists
  removePopup();
  // console.log(currentCountryName);
  // Redraw the map and bar chart with the updated data based on the selected value
  make_graph(selectedValue, currentCountryName);

//   if (currentCountryName != null) {
//       // var temp3_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
//       removePopup();
//       console.log("Bhai");
//       // generatePopupContent(temp3_value, currentCountryName);
//       const popup = document.createElement("div");
//       popup.classList.add("popup-container");
  
//       var temp_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
//       const popupContent = generatePopupContent(currentCountryName, temp_value);
//       popup.innerHTML = popupContent;
  
//       const svg = d3.select("#my_dataviz");
//       const svgRect = svg.node().getBoundingClientRect();
  
//       popup.style.left = `${svgRect.left}px`;
//     //   popup.style.top = `${svgRect.top}px`;
//       popup.style.width = `${svgRect.width}px`;
//       popup.style.height = `${svgRect.height}px`;
  
//       document.body.appendChild(popup);
  
//       const closeBtn = popup.querySelector(".close-btn");
//       closeBtn.addEventListener("click", function() {
//           document.body.removeChild(popup);
//           make_graph(selectedValue, null);
//           currentCountryName=null;
//       });
//   }
});

function removePopup() {
  const existingPopup = document.querySelector(".popup-container");
  if (existingPopup) {
      document.body.removeChild(existingPopup);
  }
}


make_graph(selectedValue, null);


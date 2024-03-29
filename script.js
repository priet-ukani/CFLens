// Getting the svg element and setting the width and height
const svg = d3.select("#my_dataviz"),
width = +svg.attr("width"),
height = +svg.attr("height");

// Initializing Variables
var currentCountryName = null;  // Variable to store the current country name
var selectedValue="MaxRating";  // Variable to store the selected value from the dropdown

// declaring the projection
const path = d3.geoPath();  // Path generator
const projection = d3.geoMercator() // Mercator projection
  .translate([width / 2, height / 2]);  // Center the map in the middle of the SVG element

const data = new Map(); // Map to store the data
range=[0,4000]  // Range of values for the color scale
if(selectedValue!="MaxRating")  // If the selected value is not MaxRating, change the range
{
    range=[0,2000]
}

var colorScale = d3.scaleLinear()   // Color scale

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
  
      // Fetch data from CSV file and generate bar chart
      d3.csv("orgStats.csv").then(function(orgData) {
          // Filter data based on the country name
          const filteredData = orgData.filter(function(d) {
              var country_name_filter = d.Country;
              // Handle country name exceptions from the CSV file
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
         // If no data is available, display a message
            // popupContentContainer.innerHTML = "<h1>No Data Available</h1>";
            const barchartdiv = document.querySelector("#barChart");
            console.log(barchartdiv)
            barchartdiv.innerHTML="<h1>No Data Available</h1>";
            return `
            <h1>No Data Available</h1>`;    // Return the message if no data is available
          }
          // Plot bar chart based on the selected data type
          const margin = { top: 20, right: 20, bottom: 30, left: 40 };  // Margin for the bar chart
          const width = 400 - margin.left - margin.right;   // Width of the bar chart
          const height = 300 - margin.top - margin.bottom;  // Height of the bar chart
          const svg = d3.select("#barChart")    // Select the bar chart div
              .append("svg")    // Append an SVG element
              .attr("width", width + margin.left + margin.right+500)    // Set the width
        .attr("height", height + margin.top + margin.bottom + 500) // Set the height and append a group element to the SVG
              .append("g")
              .attr("transform", "translate(" + (margin.left + 180) + "," + (margin.top + 100) + ")");  // Translate the group element    
          
            // Declaring x axis domain and range            
              const x = d3.scaleBand()
              .domain(topOrganizations.map(d => d.Organisation))
              .range([0, width+200])
              .padding(0.1);
      
            // Declaring y axis domain and range
          const y = d3.scaleLinear()
              .domain([0, d3.max(topOrganizations, d => +d[dataType])])
              .range([height, 0]);
      
              // Declaring the tooltip
              var tooltip1 = d3.select(".popup-container")
              .append("div")
              .attr("class", "tooltip1")
              .style("opacity", 0)
            //   .html("Bhai");

            // Getting the top margin of the svg element to adjust the popout position
              const svg2 = d3.select("#page-top");
              const svgRect = svg2.node().getBoundingClientRect();
              const top_margin=svgRect.top;
              const svg3 = d3.select("#my_dataviz");
              const svgRect2 = svg3.node().getBoundingClientRect();
              const top_margin2=svgRect2.top;

                // Appending the bars to the svg element
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

                // Some debugging code
                var Info = `Organisation Name:${d.Organisation}<br/>${dataType}:${d[dataType]}`;
                console.log(Info);

                // Update tooltip content and position
                tooltip1.style("opacity", 1);
                tooltip1
                    .html(Info)
                    .style("left",  parseInt(event.pageX)-svgRect2.left+20 + "px") 
                    .style("top", parseInt(event.pageY)+top_margin-top_margin2 + "px");
                // console.log("Kanda");
            })
            .on("mousemove", function (event, d) {  
                // Move the tooltip with the mouse
              tooltip1
                  .style("left",  parseInt(event.pageX)-svgRect2.left+20 + "px") 
                  .style("top", parseInt(event.pageY)+top_margin-top_margin2 + "px");
          })
            .on("mouseout", function (event, d) {
                // Change the opacity and stroke of the tooltip
                d3.select(this)
                    .style("stroke", "transparent");
                
                // Hide the tooltip
                tooltip1.style("opacity", 0);
            });
          
            // Append x axis to the svg element and rotate the text labels
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
      
            // Append y axis to the svg element
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
  
  
  // Function to handle click event on a country
  function handleCountryClick(event, d) {   
    var countryName = d.properties.name;    // Get the country name
    currentCountryName=countryName;
    const popup = document.createElement("div");    // Create a popup container
    popup.classList.add("popup-container");   // Add a class to the popup container

    // Get the selected value
    var temp_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
    const popupContent = generatePopupContent(countryName, temp_value); // Generate popup content
    popup.innerHTML = popupContent; // Append the popup content to the popup container

    // Get the position of the SVG element top and left
    const svg = d3.select("#page-top");
    const svgRect = svg.node().getBoundingClientRect();
    const top_margin=svgRect.top;
    const svg3 = d3.select("#my_dataviz");
    const svgRect2 = svg3.node().getBoundingClientRect();
    const top_margin2=svgRect2.top;
    console.log(top_margin)
    // console.log(svgRect.left, svgRect.top, svgRect.width, svgRect.height)

    // Set the position and dimensions of the popup container
    popup.style.left = `${svgRect2.left}px`;
    popup.style.top = `${-top_margin+top_margin2}px`;
    popup.style.width = `${svgRect2.width}px`;
    popup.style.height = `${svgRect2.height}px`;

    document.body.appendChild(popup);   // Append the popup container to the body

    // Add event listener to the close button
    const closeBtn = popup.querySelector(".close-btn");
    closeBtn.addEventListener("click", function() {
        document.body.removeChild(popup);   // Remove the popup container
        make_graph(selectedValue, null);    // Redraw the map and bar chart
        currentCountryName=null;    // Reset the current country name
    });
}


// Function to draw the map
function make_graph(dataType, countryName) {
    // Load the data from the CSV file and the GeoJSON file
  Promise.all([
      d3.json("https://enjalot.github.io/wwsd/data/world/world-110m.geojson"),
      d3.csv("countryStats.csv", function(d) {
          data.set(d.Country, +parseFloat(d[dataType])); // Use the selected data type here
      })
  ]).then(function(loadData){
        // Get the GeoJSON data
      let topo = loadData[0];
      let maxExportValue = d3.max(Array.from(data.values()));

      // Create the tooltip
      var tooltip = d3.select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

      svg.selectAll("path").remove(); // Remove existing paths before redrawing

      svg.selectAll("path") // Draw the map
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
          .on("click",function(event,d){    // Add click event listener to the country
              handleCountryClick(event,d);
          })
          .on("mouseover", function (event, d) {    // Add mouseover event listener to the country
              d3.select(this)   // Change the opacity and stroke of the country
                  .style("opacity", 1)
                  .style("stroke", "black")
                  .style("stroke-width", "2px");

                // Get the value of the selected country
              var value = data.get(d.properties.name.toUpperCase()) || 0;
              var countryInfo = `Country: ${d.properties.name}<br/>${selectedValue}: ${ value.toFixed(2)}`;
              
              // Update tooltip content and position
              tooltip.transition().duration(200).style("opacity", 1);
              tooltip
                  .html(countryInfo)
                  .style("left",  parseInt(event.pageX) + 20 + "px") 
                  .style("top", parseInt(event.pageY) + 20 + "px");
          })
          .on("mousemove", function (event, d) {    // Add mousemove event listener to the country
              tooltip   // Move the tooltip with the mouse
                  .style("left",  20 + parseInt(event.pageX) + "px") 
                  .style("top", 20 + parseInt(event.pageY) + "px");
          })
          .on("mouseout", function (event, d) {   // Add mouseout event listener to the country
              d3.select(this)   // Change the opacity and stroke of the country
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

// Add event listener to the dropdown
document.getElementById("slider").addEventListener("change", function() {
  // Get the selected value
  selectedValue = this.value;
  
  // Remove the existing popup if it exists
  removePopup();
  // Redraw the map and bar chart with the updated data based on the selected value
  make_graph(selectedValue, currentCountryName);

// Some debugging code
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

// Function to remove the popup
function removePopup() {
  const existingPopup = document.querySelector(".popup-container"); // Get the existing popup container
  if (existingPopup) {
      document.body.removeChild(existingPopup); // Remove the popup container
  }
}

// Draw the map and bar chart with the initial data
make_graph(selectedValue, null);


var state = "averageProblemsSolved";

// Select the dropdown element
const dropdown = document.getElementById("slider2");

// Add an event listener to detect changes
dropdown.addEventListener("change", function () {
  // Get the selected option value
  console.log("Yes dropdown")
  const selectedOption = this.value;

  // Call a function based on the selected option
  if (selectedOption === "AverageProblemsSolved") {
    // Call a function for Average Problems Solved
    state = "averageProblemsSolved";
    drawBarchart();
  } else if (selectedOption === "AverageRatingSolved") {
    // Call a function for Average Rating Solved
    state = "averageRatingSolved";
    drawBarchart();
  }
});

  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 100, left: 100 },
    width = 650 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select("#barchart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
function drawBarchart() {
  console.log("Average Problems Solved");
  const rankColorMap = {
    Newbie: "#808080", // Rank 1: Red
    Expert: "#0000FF", // Rank 2: Orange
    "International Master": "#FF8C00", // Rank 3: Yellow
    Master: "#FF8C00", // Rank 4: Green
    "Legendary Grandmaster": "#FF0000", // Rank 5: Blue
    Grandmaster: "#FF0000", // Rank 5: Blue
    Pupil: "#008000", // Rank 5: Blue
    Specialist: "#03A89E", // Rank 5: Blue
    "Candidate Master": "#AA00AA", // Rank 5: Blue
    // Add more ranks and corresponding colors as needed
  };

//   remove all existing bars 
    svg.selectAll(".barchart_bar").remove();
    svg.selectAll(".line-group").remove();

    // also old axis should be removed 
    svg.selectAll("g").remove();



  // Create a barchart_tooltip div
  const barchart_tooltip = d3.select("#barchart_tooltip");

  // Parse the Data

  if (state == "averageProblemsSolved") {
    d3.csv("Data/averageSolved.csv").then(function (data) {
      // X axis
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d) => d.Rank))
        .padding(0.2);
      svg
        .append("g")
        .attr("transform", `translate(-10,${height + 0.4})`)
        .call(
          d3
            .axisBottom(x)
            .tickSize(0) // Hide tick lines
            .tickPadding(10) // Increase padding between ticks and labels
            .tickFormat((d) => d.split(" ").join("\n")) // Split label text by space and add newline
        )
        .selectAll("text")
        .style("text-anchor", "middle") // Center-align text
        .attr("transform", "translate(0, 34) rotate(-45)"); // Rotate labels for better readability

      // Add Y axis
      const y = d3.scaleLinear().domain([0, 1700]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));
      // Add a line group
      const lineGroup = svg.append("g").attr("class", "line-group");
      // Bars
      const bars = svg
        .selectAll("mybar")
        .data(data)
        .join("rect")
        // add a class 
        .attr("class", "barchart_bar")
        .attr("x", (d) => x(d.Rank))
        .attr("width", x.bandwidth())
        .attr("fill", (d) => rankColorMap[d.Rank])
        .attr("stroke", "black") // Add black border
        .attr("stroke-width", 0.5) // Set border width
        // no bar at the beginning thus:
        .attr("height", (d) => height - y(0)) // always equal to 0
        .attr("y", (d) => y(0))
        // Add hover effects
        .on("mousemove", function (event, d) {
          barchart_tooltip.style("opacity", 0.9);
          barchart_tooltip
            .html(
              `<div style="background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 5px; padding: 10px;">
            <h3 style="margin: 0; font-size: 16px;">Rank: <span style="color: ${
              rankColorMap[d.Rank]
            };">${d.Rank}</span></h3>
            <p style="margin: 5px 0; font-size: 14px;">Average Problems Solved: ${
              d.Value
            }</p>
        </div>`
            )
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        // Add hover effects
        .on("mouseover", function (event, d) {
          // Highlight the hovered bar
          // Dim other bars
          svg
            .selectAll("rect")
            .filter(function (bar) {
              return bar.Rank !== d.Rank;
            })
            .attr("opacity", 0.3); // Change the fill color of other bars to a very light shade

          // Show barchart_tooltip
          barchart_tooltip
            .style("opacity", 0.9)
            .html(
              `<div style="background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 5px; padding: 10px;">
        <h3 style="margin: 0; font-size: 16px;">Rank: <span style="color: ${
          rankColorMap[d.Rank]
        };">${d.Rank}</span></h3>
        <p style="margin: 5px 0; font-size: 14px;">Average Problems Solved: ${
          d.Value
        }</p>
    </div>`
            )
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");

          console.log(d.index);

          // Add the horizontal line
          const line = lineGroup
            .append("line")
            .attr("x1", 0)
            .attr("x2", x(d.Rank) + x.bandwidth() / 2)
            .attr("y1", y(d.Value))
            .attr("y2", y(d.Value))
            .style("stroke", rankColorMap[d.Rank])
            .style("stroke-width", 1)
            .style("stroke-dasharray", "5,5"); // Optional: make the line dashed
        })
        .on("mouseout", function (d) {
          // Restore original color of the hovered bar
          d3.select(this);

          // Restore original color of other bars
          svg.selectAll("rect").attr("opacity", 1); // Restore original opacity of the hovered bar

          // Hide barchart_tooltip
          barchart_tooltip.style("opacity", 0);

          lineGroup.selectAll("line").remove();
        });

      // Animation
      bars
        .transition()
        .duration(800)
        .attr("y", (d) => y(d.Value))
        .attr("height", (d) => height - y(d.Value))
        .delay((d, i) => {
          console.log(i);
          return i * 100;
        });
    });
  } else if (state == "averageRatingSolved") {



    d3.csv("Data/averageSolved_rating.csv").then(function (data) {
      // X axis
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d) => d.Rank))
        .padding(0.2);
      svg
        .append("g")
        .attr("transform", `translate(-10,${height + 0.4})`)
        .call(
          d3
            .axisBottom(x)
            .tickSize(0) // Hide tick lines
            .tickPadding(10) // Increase padding between ticks and labels
            .tickFormat((d) => d.split(" ").join("\n")) // Split label text by space and add newline
        )
        .selectAll("text")
        .style("text-anchor", "middle") // Center-align text
        .attr("transform", "translate(0, 34) rotate(-45)"); // Rotate labels for better readability

      // Add Y axis
      const y = d3.scaleLinear().domain([500, 2100]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));
      // Add a line group
      const lineGroup = svg.append("g").attr("class", "line-group");
      // Bars
      const bars = svg
        .selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", (d) => x(d.Rank))
        .attr("width", x.bandwidth())
        .attr("class", "barchart_bar")
        .attr("fill", (d) => rankColorMap[d.Rank])
        .attr("stroke", "black") // Add black border
        .attr("stroke-width", 0.5) // Set border width
        // no bar at the beginning thus:
        .attr("height", (d) => height - y(0)) // always equal to 0
        .attr("y", (d) => y(0))
        // Add hover effects
        .on("mousemove", function (event, d) {
          barchart_tooltip.style("opacity", 0.9);
          barchart_tooltip
            .html(
              `<div style="background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 5px; padding: 10px;">
            <h3 style="margin: 0; font-size: 16px;">Rank: <span style="color: ${
              rankColorMap[d.Rank]
            };">${d.Rank}</span></h3>
            <p style="margin: 5px 0; font-size: 14px;">Average Rating Solved: ${
              d.Value
            }</p>
        </div>`
            )
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        // Add hover effects
        .on("mouseover", function (event, d) {
          // Highlight the hovered bar
          // Dim other bars
          svg
            .selectAll("rect")
            .filter(function (bar) {
              return bar.Rank !== d.Rank;
            })
            .attr("opacity", 0.3); // Change the fill color of other bars to a very light shade

          // Show barchart_tooltip
          barchart_tooltip
            .style("opacity", 0.9)
            .html(
              `<div style="background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 5px; padding: 10px;">
        <h3 style="margin: 0; font-size: 16px;">Rank: <span style="color: ${
          rankColorMap[d.Rank]
        };">${d.Rank}</span></h3>
        <p style="margin: 5px 0; font-size: 14px;">Average Rating Solved: ${
          d.Value
        }</p>
    </div>`
            )
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");

          console.log(d.index);

          // Add the horizontal line
          const line = lineGroup
            .append("line")
            .attr("x1", 0)
            .attr("x2", x(d.Rank) + x.bandwidth() / 2)
            .attr("y1", y(d.Value))
            .attr("y2", y(d.Value))
            .style("stroke", rankColorMap[d.Rank])
            .style("stroke-width", 1)
            .style("stroke-dasharray", "5,5"); // Optional: make the line dashed
        })
        .on("mouseout", function (d) {
          // Restore original color of the hovered bar
          d3.select(this);

          // Restore original color of other bars
          svg.selectAll("rect").attr("opacity", 1); // Restore original opacity of the hovered bar

          // Hide barchart_tooltip
          barchart_tooltip.style("opacity", 0);

          lineGroup.selectAll("line").remove();
        });

      // Animation
      bars
        .transition()
        .duration(800)
        .attr("y", (d) => y(d.Value))
        .attr("height", (d) => height - y(d.Value))
        .delay((d, i) => {
          console.log(i);
          return i * 100;
        });
    });
  }

}

drawBarchart();

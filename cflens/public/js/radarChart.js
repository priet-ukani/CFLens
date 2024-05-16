function RadarChart(id, data, options, names, contestDuration) {
  var cfg = {
    w: 600, // Width of the circle
    h: 600, // Height of the circle
    margin: { top: 20, right: 20, bottom: 20, left: 20 }, // The margins of the SVG
    levels: 3, // How many levels or inner circles should there be drawn
    maxValue: 0, // What is the value that the biggest circle will represent
    labelFactor: 1.25, // How much farther than the radius of the outer circle should the labels be placed
    wrapWidth: 60, // The number of pixels after which a label needs to be given a new line
    opacityArea: 0.35, // The opacity of the area of the blob
    dotRadius: 4, // The size of the colored circles of each blog
    opacityCircles: 0.1, // The opacity of the circles of each blob
    strokeWidth: 2, // The width of the stroke around each blob
    roundStrokes: false, // If true the area and stroke will follow a round path (cardinal-closed)
    color: d3.scaleOrdinal(d3.schemeCategory10), // Color function
  };

  // Put all of the options into a variable called cfg
  if ("undefined" !== typeof options) {
    for (var i in options) {
      if ("undefined" !== typeof options[i]) {
        cfg[i] = options[i];
      }
    } //for i
  } //if

  // If the supplied maxValue is smaller than the actual one, replace by the max in the data
  var maxValue = Math.max(
    cfg.maxValue,
    d3.max(data, function (i) {
      return d3.max(
        i.map(function (o) {
          return o.value;
        })
      );
    })
  );

  var allAxis = data[0].map(function (i, j) {
      return i.axis;
    }), // Names of each axis
    total = allAxis.length, // The number of different axes
    radius = Math.min(cfg.w / 2, cfg.h / 2), // Radius of the outermost circle
    Format = d3.format("%"), // Percentage formatting
    angleSlice = (Math.PI * 2) / total; // The width in radians of each "slice"

  // Scale for the radius
  var rScale = d3.scaleLinear().range([0, radius]).domain([0, maxValue]);

  // Create the container SVG and g
  // Remove whatever chart with the same id/class was present before
  d3.select(id).select("svg").remove();

  // Initiate the radar chart SVG
  var out_screen_width=1000;
  if (window.screen.width < 900)
  {
    out_screen_width=window.screen.width;
  }
  var svg = d3
    .select(id)
    .append("svg")
    .attr("width", out_screen_width)
    .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
    .attr("class", "radar" + id);
  // Append a g element
  var g = svg
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (cfg.w / 2 + cfg.margin.left) +
        "," +
        (cfg.h / 2 + cfg.margin.top) +
        ")"
    );

  // Glow filter for some extra pizzazz
  // Filter for the outside glow
  var filter = g.append("defs").append("filter").attr("id", "glow"),
    feGaussianBlur = filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur"),
    feMerge = filter.append("feMerge"),
    feMergeNode_1 = feMerge.append("feMergeNode").attr("in", "coloredBlur"),
    feMergeNode_2 = feMerge.append("feMergeNode").attr("in", "SourceGraphic");

  // Draw the Circular grid
  // Wrapper for the grid & axes
  var axisGrid = g.append("g").attr("class", "axisWrapper");

  // Draw the background circles
  axisGrid
    .selectAll(".levels")
    .data(d3.range(1, cfg.levels + 1).reverse())
    .enter()
    .append("circle")
    .attr("class", "gridCircle")
    .attr("r", function (d, i) {
      return (radius / cfg.levels) * d;
    })
    .style("fill", "#CDCDCD")
    .style("stroke", "#CDCDCD")
    .style("fill-opacity", cfg.opacityCircles)
    .style("filter", "url(#glow)");

  // Text indicating at what % each level is
  axisGrid
    .selectAll(".axisLabel")
    .data(d3.range(1, cfg.levels + 1).reverse())
    .enter()
    .append("text")
    .attr("class", "axisLabel")
    .attr("x", 4)
    .attr("y", function (d) {
      return (-d * radius) / cfg.levels;
    })
    .attr("dy", "0.4em")
    .style("font-size", "10px")
    .attr("fill", "black")
    .text(function (d, i) {
      return (
        (parseFloat((maxValue * d) / cfg.levels) * 100).toFixed(2).toString() +
        "%"
      );
    });

  // Draw the axes
  // Create the straight lines radiating outward from the center
  var axis = axisGrid
    .selectAll(".axis")
    .data(allAxis)
    .enter()
    .append("g")
    .attr("class", "axis");
  // Append the lines
  axis
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", function (d, i) {
      return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("y2", function (d, i) {
      return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .attr("class", "line")
    .style("stroke", "white")
    .style("stroke-width", "2px");

  // Append the labels at each axis
  axis
    .append("text")
    .attr("class", "legendRadar")
    .style("font-size", "11px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", function (d, i) {
      return (
        rScale(maxValue * cfg.labelFactor) *
        Math.cos(angleSlice * i - Math.PI / 2)
      );
    })
    .attr("y", function (d, i) {
      return (
        rScale(maxValue * cfg.labelFactor) *
        Math.sin(angleSlice * i - Math.PI / 2)
      );
    })
    .text(function (d) {
      return d;
    })
    .call(wrap, cfg.wrapWidth);

  // Draw the radar chart blobs
  // The radial line function
  var radarLine = d3
    .lineRadial()
    .curve(d3.curveLinearClosed)
    .radius(function (d) {
      return rScale(d.value);
    })
    .angle(function (d, i) {
      return i * angleSlice;
    });

  if (cfg.roundStrokes) {
    radarLine.curve(d3.curveCardinalClosed);
  }

  // Create a wrapper for the blobs
  var blobWrapper = g
    .selectAll(".radarWrapper")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "radarWrapper");

  // Append the backgrounds
  blobWrapper
    .append("path")
    .attr("class", "radarArea")
    .attr("d", function (d, i) {
      return radarLine(d);
    })
    .style("fill", function (d, i) {
      return cfg.color(i);
    })
    .style("fill-opacity", cfg.opacityArea)
    .on("mouseover", function (d, i) {
      // Dim all blobs
      d3.selectAll(".radarArea")
        .transition()
        .duration(200)
        .style("fill-opacity", 0.1);
      // Bring back the hovered over blob
      d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
    })
    .on("mouseout", function () {
      // Bring back all blobs
      d3.selectAll(".radarArea")
        .transition()
        .duration(200)
        .style("fill-opacity", cfg.opacityArea);
    });

  // Create the outlines
  blobWrapper
    .append("path")
    .attr("class", "radarStroke")
    .attr("d", function (d, i) {
      return radarLine(d);
    })
    .style("stroke-width", cfg.strokeWidth + "px")
    .style("stroke", function (d, i) {
      return cfg.color(i);
    })
    .style("fill", "none")
    .style("filter", "url(#glow)");

  // Append the circles
  blobWrapper
    .selectAll(".radarCircle")
    .data(function (d, i) {
      return d;
    })
    .enter()
    .append("circle")
    .attr("class", "radarCircle")
    .attr("r", cfg.dotRadius)
    .attr("cx", function (d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("cy", function (d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .style("fill", function (d, i, j) {
      return cfg.color(j);
    })
    .style("fill-opacity", 0.8);

  // Append invisible circles for tooltip
  // Wrapper for the invisible circles on top
  var blobCircleWrapper = g
    .selectAll(".radarCircleWrapper")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "radarCircleWrapper");

  // Append a set of invisible circles on top for the mouseover pop-up
  blobCircleWrapper
    .selectAll(".radarInvisibleCircle")
    .data(function (d, i) {
      return d;
    })
    .enter()
    .append("circle")
    .attr("class", "radarInvisibleCircle")
    .attr("r", cfg.dotRadius * 1.5)
    .attr("cx", function (d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("cy", function (d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mouseover", function (d, i) {
      var newX = parseFloat(d3.select(this).attr("cx")) - 10;
      var newY = parseFloat(d3.select(this).attr("cy")) - 10;

      tooltip
        .attr("x", newX)
        .attr("y", newY)
        .text((parseFloat(i.value) * 100).toFixed(2).toString() + "%")
        .transition()
        .duration(200)
        .style("opacity", 1);
    })
    .on("mouseout", function () {
      tooltip.transition().duration(200).style("opacity", 0);
    });

  // Set up the small tooltip for when you hover over a circle
  var tooltip = g.append("text").attr("class", "tooltip").style("opacity", 0);

  // Helper Function
  // Taken from http://bl.ocks.org/mbostock/7555321
  // Wraps SVG text
  function wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  } //wrap
  var names_list = names.split(",");
  var durationy=130;
  var legendx=cfg.w - 18 - 10 - 60 - 18 - 5;
  var legendxtext=cfg.w - 24;
  var legendxsymbol=cfg.w - 18;
  var legendy=-10 + 2 * (4 - names_list.length);
// var temping_height=window.screen.height;
// var margin_left_temp = 100;

  if (window.screen.width < 900)
  {
    durationy=200;
    legendx=cfg.w - 18 - 10 - 18 - 5;
    legendxtext=cfg.w - 24 + 60;
    legendxsymbol=cfg.w - 18+60;
  }
  if (window.screen.width < 600)
  {
    legendx=cfg.w - 18 - 10 - 18 - 5 - 20;
    legendxtext=cfg.w - 24 + 60 - 20;
    legendxsymbol=cfg.w - 18+60 - 20;
    durationy=150;
  }
  var legendBox = g
    .append("rect")
    .attr("x", legendx) // Adjust x-coordinate for positioning
    .attr("y", -10 + 2 * (4 - names_list.length)) // Adjust y-coordinate for positioning
    .attr("width", 130) // Adjust width based on your legend size
    .attr("height", names_list.length * 25) // Adjust height based on your legend size
    .style("fill", "none") // Transparent fill
    .style("stroke", "black") // Border color
    .style("stroke-width", 1); // Border width
  var durationText = g
    .append("text")
    .attr("class", "contestDuration")
    .attr("x", cfg.w + 18 + 10)
    .attr("y", durationy)
    .style("text-anchor", "end")
    .style("font-weight", "bold")
    .text(
      "Contest Duration: " +
        (parseInt(contestDuration) / 60).toString() +
        " minutes"
    );
  var durationBox = g
    .append("rect")
    .attr("class", "textBoxBackground")
    .attr("x", cfg.w - 200 - 15 - 36) // Adjust the x-coordinate to position the rectangle properly
    .attr("y", durationy - 15) // Adjust the y-coordinate to position the rectangle properly
    .attr("width", 300) // Adjust the width to fit the text box
    .attr("height", 20) // Adjust the height to fit the text box
    .style("fill", "rgba(0, 0, 220, 0.3)"); // Blue color with opacity 0.5
  var legend2 = g
    .selectAll(".legend2")
    .data(names_list)
    .enter()
    .append("g")
    .attr("class", "legend2")
    .attr("transform", function (d, i) {
      return "translate(0," + i * 20 + ")";
    });

  // Add colored squares to legend2
  legend2
    .append("rect")
    .attr("x", legendxsymbol)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", function (d, i) {
      return cfg.color(i);
    });

  // Add text labels to legend2
  legend2
    .append("text")
    .attr("x", legendxtext)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .style("fill", "black")
    .text(function (d) {
      return d;
    });
} //RadarChart

// var margin = { top: 100, right: 100, bottom: 100, left: 100 },
//     width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
//     height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

// var color = d3.scaleOrdinal().range(["#EDC951", "#CC333F", "#00A0B0", "#00DC00","#9370DB"]);
// var screenWidth = window.screen.width;
// var screenHeight = window.screen.height;
// console.log("HOPE",screenWidth);
var temping_width=window.screen.width;
var temping_height=window.screen.height;
var margin_left_temp = 100;

if (window.screen.width < 900)
{
  temping_width=500;
  temping_height=500;
  margin_left_temp =50;
}
if (window.screen.width < 600)
{
  temping_height=400;
  temping_width=400;
  margin_left_temp = 40;
}
var radarChartOptions = {
  w: Math.min(700, temping_width) - 100 - 100,
  h: (height = Math.min(
    Math.min(700, temping_height) - 100 - 100,
    window.screen.height - 100 - 100 - 20
  )),
  margin: { top: 100, right: 100, bottom: 100, left: margin_left_temp },
  maxValue: 0.5,
  levels: 5,
  roundStrokes: true,
  color: d3
    .scaleOrdinal()
    .range(["#EDC951", "#CC333F", "#00A0B0", "#00DC00", "#9370DB"]),
};

var [data, totalDurationSeconds] = [
  [
    [
      { axis: "A", value: 0.024555555555555556 },
      { axis: "B", value: 0.04111111111111111 },
      { axis: "C", value: 0.07022222222222223 },
      { axis: "D", value: 0.0908888888888889 },
      { axis: "E", value: 0.11766666666666667 },
      { axis: "F", value: 0.1952222222222222 },
      { axis: "G", value: 0.305 },
      { axis: "H", value: 0.4191111111111111 },
    ],
    [
      { axis: "A", value: 0.09833333333333333 },
      { axis: "B", value: 0.10844444444444444 },
      { axis: "C", value: 0.1302222222222222 },
      { axis: "D", value: 0.15866666666666668 },
      { axis: "E", value: 0.4127777777777778 },
      { axis: "F", value: 0.6351111111111111 },
      { axis: "G", value: 0 },
      { axis: "H", value: 0 },
    ],
    [
      { axis: "A", value: 0.050666666666666665 },
      { axis: "B", value: 0.12022222222222222 },
      { axis: "C", value: 0.19377777777777777 },
      { axis: "D", value: 0.249 },
      { axis: "E", value: 0 },
      { axis: "F", value: 0 },
      { axis: "G", value: 0 },
      { axis: "H", value: 0 },
    ],
    [
      { axis: "A", value: 0.011 },
      { axis: "B", value: 0.03077777777777778 },
      { axis: "C", value: 0.06055555555555556 },
      { axis: "D", value: 0.082 },
      { axis: "E", value: 0.3638888888888889 },
      { axis: "F", value: 0.6713333333333333 },
      { axis: "G", value: 0 },
      { axis: "H", value: 0 },
    ],
  ],
  9000,
];
async function Plot() {
  var usernames = document.getElementById("usernames").value;
  var contestId = document.getElementById("contestId").value;
  if (usernames == "" && contestId == "") {
    usernames = "Alexzzz,prietukani,Tejas_001,3867518";
    contestId = 1873;
  } else if (usernames == "" && contestId != "") {
    alert("Please Enter Handles");
    return null;
  } else if (contestId == "" && usernames != "") {
    alert("Please Enter Contest ID");
    return null;
  } else {
    [data, totalDurationSeconds] = await fetchData(usernames, contestId);
    // console.log(JSON.stringify(data));
    // console.log(totalDurationSeconds);
  }

  function drawRadarChart(data, usernames, totalDurationSeconds) {
    RadarChart(
      ".radarChart",
      data,
      radarChartOptions,
      usernames,
      totalDurationSeconds
    );
  }

  async function fetchData(handles, contest) {
    const handleList = handles.split(",").map((handle) => handle.trim());

    try {
      const userDataPromises = handleList.map(async (user) => {
        let retryCount = 0;
        let responseData;
        while (retryCount < 3) {
          // Retry up to 3 times
          try {
            const url = `https://codeforces.com/api/contest.status?contestId=${contest}&handle=${user}&from=1`;
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(
                `Failed to fetch data for ${user}. Status code: ${response.status}`
              );
            }
            responseData = await response.json();
            break; // Break the retry loop if request is successful
          } catch (error) {
            if (error instanceof Error && error.message.includes("429")) {
              // If 429 error (Too Many Requests), wait for 30 seconds before retrying
              await new Promise((resolve) => setTimeout(resolve, 30000));
              retryCount++;
            } else {
              throw error; // Rethrow other errors
            }
          }
        }
        return responseData;
      });

      let contestData;
      let contestRetryCount = 0;
      while (contestRetryCount < 3) {
        // Retry up to 3 times for contest data
        try {
          const contestUrl = `https://codeforces.com/api/contest.standings?contestId=${contest}&from=1&count=1`;
          const contestResponse = await fetch(contestUrl);
          if (!contestResponse.ok) {
            throw new Error(
              `Failed to fetch contest data. Status code: ${contestResponse.status}`
            );
          }
          contestData = await contestResponse.json();
          break; // Break the retry loop if request is successful
        } catch (error) {
          if (error instanceof Error && error.message.includes("429")) {
            // If 429 error (Too Many Requests), wait for 30 seconds before retrying
            await new Promise((resolve) => setTimeout(resolve, 30000));
            contestRetryCount++;
          } else {
            throw error; // Rethrow other errors
          }
        }
      }
      const totalDurationSeconds = contestData.result.contest.durationSeconds;

      const userData = await Promise.all(userDataPromises);
      const data = [];

      userData.forEach((userSubmissions, index) => {
        const user = handleList[index];
        const solveTimes = {};
        userSubmissions.result.forEach((submission) => {
          const problemIndex = submission.problem.index;
          const verdict = submission.verdict;
          if (verdict === "OK") {
            solveTimes[problemIndex] = submission.relativeTimeSeconds;
            if (submission.relativeTimeSeconds == 2147483647) {
              solveTimes[problemIndex] = 0;
            }
          }
        });

        const userProblemData = [];
        for (let i = 0; i < contestData.result.problems.length; i++) {
          const problemIndex = contestData.result.problems[i].index;
          if (solveTimes[problemIndex] === undefined) {
            userProblemData.push({ axis: problemIndex, value: 0 });
          } else {
            userProblemData.push({
              axis: problemIndex,
              value: solveTimes[problemIndex] / totalDurationSeconds,
            });
          }
        }

        data.push(userProblemData);
      });

      return [data, totalDurationSeconds];
    } catch (error) {
      console.error(error);
    }
  }

  drawRadarChart(data, usernames, totalDurationSeconds);
}
document.addEventListener("DOMContentLoaded", function () {
  // This code will run when the DOM content is fully loaded
  Plot();
});

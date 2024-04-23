document.addEventListener("DOMContentLoaded", function () {
  // This code will run when the DOM content is fully loaded
  getData();
});
function getData() {
  var handle1 = document.getElementById("userId1").value.trim();
  var handle2 = document.getElementById("userId2").value.trim();
  if (handle1 == "" && handle2 == "") {
    // showing default
    handle1 = "priet";
    handle2 = "Garvit.Gupta";
    validResults = [
      {
        handle: "priet",
        data: [
          {
            contestId: 1832,
            contestName: "Educational Codeforces Round 148 (Rated for Div. 2)",
            handle: "priet",
            rank: 4720,
            ratingUpdateTimeSeconds: 1683909300,
            oldRating: 0,
            newRating: 470,
          },
          {
            contestId: 1858,
            contestName: "Codeforces Round 893 (Div. 2)",
            handle: "priet",
            rank: 12188,
            ratingUpdateTimeSeconds: 1692117300,
            oldRating: 470,
            newRating: 728,
          },
          {
            contestId: 1860,
            contestName: "Educational Codeforces Round 153 (Rated for Div. 2)",
            handle: "priet",
            rank: 7205,
            ratingUpdateTimeSeconds: 1692290100,
            oldRating: 728,
            newRating: 959,
          },
          {
            contestId: 1862,
            contestName: "Codeforces Round 894 (Div. 3)",
            handle: "priet",
            rank: 2005,
            ratingUpdateTimeSeconds: 1692895800,
            oldRating: 959,
            newRating: 1185,
          },
          {
            contestId: 1863,
            contestName: "Pinely Round 2 (Div. 1 + Div. 2)",
            handle: "priet",
            rank: 1995,
            ratingUpdateTimeSeconds: 1693416900,
            oldRating: 1185,
            newRating: 1393,
          },
          {
            contestId: 1867,
            contestName: "Codeforces Round 897 (Div. 2)",
            handle: "priet",
            rank: 1362,
            ratingUpdateTimeSeconds: 1694450100,
            oldRating: 1393,
            newRating: 1524,
          },
          {
            contestId: 1890,
            contestName: "Codeforces Round 906 (Div. 2)",
            handle: "priet",
            rank: 3005,
            ratingUpdateTimeSeconds: 1698512700,
            oldRating: 1524,
            newRating: 1493,
          },
          {
            contestId: 1931,
            contestName: "Codeforces Round 925 (Div. 3)",
            handle: "priet",
            rank: 269,
            ratingUpdateTimeSeconds: 1707843000,
            oldRating: 1493,
            newRating: 1618,
          },
          {
            contestId: 1937,
            contestName: "Codeforces Round 930 (Div. 2)",
            handle: "priet",
            rank: 1643,
            ratingUpdateTimeSeconds: 1709224500,
            oldRating: 1618,
            newRating: 1628,
          },
          {
            contestId: 1934,
            contestName: "Codeforces Round 931 (Div. 2)",
            handle: "priet",
            rank: 2071,
            ratingUpdateTimeSeconds: 1709310900,
            oldRating: 1628,
            newRating: 1628,
          },
        ],
      },
      {
        handle: "Garvit.Gupta",
        data: [
          {
            contestId: 1779,
            contestName: "Hello 2023",
            handle: "Garvit.Gupta",
            rank: 14533,
            ratingUpdateTimeSeconds: 1672765500,
            oldRating: 0,
            newRating: 374,
          },
          {
            contestId: 1777,
            contestName: "Codeforces Round 845 (Div. 2) and ByteRace 2023",
            handle: "Garvit.Gupta",
            rank: 9829,
            ratingUpdateTimeSeconds: 1674318900,
            oldRating: 374,
            newRating: 614,
          },
          {
            contestId: 1790,
            contestName: "Codeforces Round 847 (Div. 3)",
            handle: "Garvit.Gupta",
            rank: 12187,
            ratingUpdateTimeSeconds: 1674838200,
            oldRating: 614,
            newRating: 794,
          },
          {
            contestId: 1847,
            contestName: "Codeforces Round 882 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 11118,
            ratingUpdateTimeSeconds: 1688662200,
            oldRating: 794,
            newRating: 877,
          },
          {
            contestId: 1851,
            contestName: "Codeforces Round 888 (Div. 3)",
            handle: "Garvit.Gupta",
            rank: 10822,
            ratingUpdateTimeSeconds: 1690303800,
            oldRating: 877,
            newRating: 964,
          },
          {
            contestId: 1849,
            contestName: "Educational Codeforces Round 152 (Rated for Div. 2)",
            handle: "Garvit.Gupta",
            rank: 6234,
            ratingUpdateTimeSeconds: 1690475700,
            oldRating: 964,
            newRating: 1081,
          },
          {
            contestId: 1856,
            contestName:
              "Codeforces Round 890 (Div. 2) supported by Constructor Institute",
            handle: "Garvit.Gupta",
            rank: 12990,
            ratingUpdateTimeSeconds: 1691253300,
            oldRating: 1081,
            newRating: 1012,
          },
          {
            contestId: 1857,
            contestName: "Codeforces Round 891 (Div. 3)",
            handle: "Garvit.Gupta",
            rank: 10888,
            ratingUpdateTimeSeconds: 1691427000,
            oldRating: 1012,
            newRating: 1023,
          },
          {
            contestId: 1859,
            contestName: "Codeforces Round 892 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 11468,
            ratingUpdateTimeSeconds: 1691858100,
            oldRating: 1023,
            newRating: 1008,
          },
          {
            contestId: 1869,
            contestName: "Codeforces Round 896 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 7122,
            ratingUpdateTimeSeconds: 1694363700,
            oldRating: 1008,
            newRating: 997,
          },
          {
            contestId: 1878,
            contestName: "Codeforces Round 900 (Div. 3)",
            handle: "Garvit.Gupta",
            rank: 9785,
            ratingUpdateTimeSeconds: 1695747000,
            oldRating: 997,
            newRating: 1018,
          },
          {
            contestId: 1875,
            contestName: "Codeforces Round 901 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 5709,
            ratingUpdateTimeSeconds: 1696095300,
            oldRating: 1018,
            newRating: 1075,
          },
          {
            contestId: 1883,
            contestName: "Codeforces Round 905 (Div. 3)",
            handle: "Garvit.Gupta",
            rank: 8929,
            ratingUpdateTimeSeconds: 1697979900,
            oldRating: 1075,
            newRating: 1013,
          },
          {
            contestId: 1891,
            contestName: "Codeforces Round 907 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 7879,
            ratingUpdateTimeSeconds: 1698683700,
            oldRating: 1013,
            newRating: 1002,
          },
          {
            contestId: 1895,
            contestName: "Educational Codeforces Round 157 (Rated for Div. 2)",
            handle: "Garvit.Gupta",
            rank: 8899,
            ratingUpdateTimeSeconds: 1699029300,
            oldRating: 1002,
            newRating: 988,
          },
          {
            contestId: 1904,
            contestName: "Codeforces Round 914 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 3197,
            ratingUpdateTimeSeconds: 1702145100,
            oldRating: 988,
            newRating: 1085,
          },
          {
            contestId: 1917,
            contestName: "Codeforces Round 917 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 7009,
            ratingUpdateTimeSeconds: 1703435700,
            oldRating: 1085,
            newRating: 1091,
          },
          {
            contestId: 1915,
            contestName: "Codeforces Round 918 (Div. 4)",
            handle: "Garvit.Gupta",
            rank: 8662,
            ratingUpdateTimeSeconds: 1703783100,
            oldRating: 1091,
            newRating: 1091,
          },
          {
            contestId: 1919,
            contestName: "Hello 2024",
            handle: "Garvit.Gupta",
            rank: 11413,
            ratingUpdateTimeSeconds: 1704560700,
            oldRating: 1091,
            newRating: 1089,
          },
          {
            contestId: 1921,
            contestName: "Codeforces Round 920 (Div. 3)",
            handle: "Garvit.Gupta",
            rank: 9204,
            ratingUpdateTimeSeconds: 1705337400,
            oldRating: 1089,
            newRating: 1100,
          },
          {
            contestId: 1922,
            contestName: "Educational Codeforces Round 161 (Rated for Div. 2)",
            handle: "Garvit.Gupta",
            rank: 7562,
            ratingUpdateTimeSeconds: 1705595700,
            oldRating: 1100,
            newRating: 1106,
          },
          {
            contestId: 1918,
            contestName: "Codeforces Round 922 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 7993,
            ratingUpdateTimeSeconds: 1706633100,
            oldRating: 1106,
            newRating: 1133,
          },
          {
            contestId: 1926,
            contestName: "Codeforces Round 928 (Div. 4)",
            handle: "Garvit.Gupta",
            rank: 4298,
            ratingUpdateTimeSeconds: 1708361400,
            oldRating: 1133,
            newRating: 1183,
          },
          {
            contestId: 1934,
            contestName: "Codeforces Round 931 (Div. 2)",
            handle: "Garvit.Gupta",
            rank: 5820,
            ratingUpdateTimeSeconds: 1709310900,
            oldRating: 1183,
            newRating: 1205,
          },
          {
            contestId: 1950,
            contestName: "Codeforces Round 937 (Div. 4)",
            handle: "Garvit.Gupta",
            rank: 935,
            ratingUpdateTimeSeconds: 1711645200,
            oldRating: 1205,
            newRating: 1333,
          },
        ],
      },
    ];
    createChart(validResults);
    return;
  }
  if ((handle1 == "" && handle2 != "") || (handle2 === "" && handle1 != "")) {
    alert("Please enter both user handles.");
    return;
  }

  var promises = [fetchUserData(handle1), fetchUserData(handle2)];

  Promise.all(promises).then((results) => {
    var validResults = results.filter((result) => result !== null);
    if (validResults.length > 0) {
      // console.log(JSON.stringify(validResults));
      createChart(validResults);
    } else {
      alert("No valid user data found.");
    }
  });
}

async function fetchUserData(handle) {
  const apiUrl = "https://codeforces.com/api/user.rating?handle=" + handle;
  let retryCount = 0;
  let responseData;

  while (retryCount < 3) {
    // Retry up to 3 times
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data for ${handle}. Status code: ${response.status}`
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

  if (retryCount === 3) {
    console.error(
      `Failed to fetch data for ${handle} after ${retryCount} retries.`
    );
    return null;
  }

  if (responseData.status === "OK") {
    return { handle: handle, data: responseData.result };
  } else {
    alert(`User "${handle}" not found or error in fetching data.`);
    return null;
  }
}


var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

function createChart(userData) {
var input1 = d3.select("#userId1");
var input2 = d3.select("#userId2");
input1.style('width', '30%');
input2.style('width', '30%');
  var parseTime = d3.timeParse("%s");
  var margin = { top: 20, right: 30, bottom: 30, left: 50 },
    width = 0.6*screenWidth - margin.left - margin.right,
    height = 0.6*screenHeight - margin.top - margin.bottom;

  // Remove existing chart
  d3.select("#svg-chart").remove();

  var linechart_svg = d3
    .select("#charts")
    .append("svg")
    .attr("id", "svg-chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 200)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleTime().range([0, width]);

  var y = d3.scaleLinear().range([height, 0]);

  var line = d3
    .line()
    .x(function (d) {
      return x(d.time);
    })
    .y(function (d) {
      return y(d.rating);
    });

  var allData = [];
  userData.forEach(function (user) {
    var chartData = user.data.map(function (record) {
      return {
        time: parseTime(record.ratingUpdateTimeSeconds),
        rating: record.newRating,
      };
    });
    allData.push({ user: user.handle, data: chartData });
  });

  x.domain(
    d3.extent(
      allData.flatMap((d) => d.data),
      function (d) {
        return d.time;
      }
    )
  );
  y.domain([
    d3.min(
      allData.flatMap((d) => d.data),
      function (d) {
        return d.rating;
      }
    ) - 100,
    d3.max(
      allData.flatMap((d) => d.data),
      function (d) {
        return d.rating;
      }
    ) + 100,
  ]).nice();

  linechart_svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%B %Y")).tickSize(0))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("dx", "-0.8em")
    .attr("dy", "0.15em")
    .style("font-weight", "bold")
    .call(function (selection) {
      selection._groups[0][0].querySelectorAll("text").forEach(function (text) {
        text.setAttribute("transform", "rotate(-90)");
        text.style.fontWeight = "bold"; // Make x-axis labels bold
      });
    });

  linechart_svg
    .append("g")
    .call(d3.axisLeft(y))
    .selectAll("text")
    .style("font-weight", "bold"); // Make y-axis labels bold

  var colors = ["#1f77b4", "#ff7f0e"];
  // console.log(allData);
  allData.forEach(function (userData, i) {
    var user = userData.user;
    var chartData = userData.data;

    linechart_svg
      .append("path")
      .datum(chartData)
      .attr("class", "line")
      .attr("d", line)
      .style("stroke", colors[i]);

    linechart_svg
      .selectAll(".dot" + i)
      .data(chartData)
      .enter()
      .append("circle")
      .attr("class", "dot" + i)
      .attr("cx", function (d) {
        return x(d.time);
      })
      .attr("cy", function (d) {
        return y(d.rating);
      })
      .attr("r", 5)
      .style("fill", colors[i])
      .style("stroke", "black")
      .style("stroke-width", "1.5px")
      .on("mouseover", function (event, d) {
        linecharttooltip
          .style("opacity", 1)
          .html(
            "<strong>" +
              user +
              "</strong><br>" +
              "<strong>" +
              formatlinecharttooltipDate(d.time) +
              "</strong><br>" +
              "<strong>" +
              "Rating: " +
              d.rating +
              "</strong>"
          )
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 15 + "px");
      })
      .on("mouseout", function () {
        linecharttooltip.style("opacity", 0);
      });

    // Add legend
    var legend = linechart_svg
      .append("g")
      .attr("class", "legendLine")
      .attr("transform", "translate(" + (width - 100) + "," + i * 20 + ")");

    legend
      .append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", colors[i]);

    legend
      .append("text")
      .attr("class", "legendLine-text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(user);
  });

  var linecharttooltip = d3
    .select("#charts")
    .append("div")
    .attr("class", "linecharttooltip")
    .style("opacity", 0);

  function formatlinecharttooltipDate(date) {
    var format = d3.timeFormat("%d %B %Y");
    return format(date);
  }
}

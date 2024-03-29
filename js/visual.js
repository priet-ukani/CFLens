
var state = 'play';
// OPTION to keep a button to make the graph black and white 
// var colourBlind= 'colorBlind';
// Get the checkbox element
const checkbox = document.getElementById('flexSwitchCheckChecked');
var global_store_data


// event listener for change
checkbox.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (this.checked) {
        // Perform the play function
        state="play"
        console.log(state)
        playFunction();
    } else {
        // Perform the pause function
        state="pause"
        console.log(state)
        pauseFunction();
    }
});

// Function to perform when checkbox is checked (play)
function playFunction() {
    console.log('Play function called');
    // Add your play functionality here
}

// Function to perform when checkbox is unchecked (pause)
function pauseFunction() {
    console.log('Pause function called');
    // Add your pause functionality here
}


// var color_blind = 'normal';
// // Get the checkbox2 element
// const checkbox2 = document.getElementById('flexSwitchCheckChecked2');

// checkbox2.addEventListener('change', function() {
//   // Check if the checkbox2 is checked
//   if (this.checked) {
//     // Perform the color blind function
//     color_blind = "colorBlind"
//     console.log(color_blind)
//     // draw(global_store_data);
//   } else {
//     // Perform the normal function
//     color_blind = "normal"
//     console.log(color_blind)
//     // draw(global_store_data);
//   }
// });

const config = {
    /* 
     contains the basic settings for starting the visualisation
     like position , size , formatting etc. 
    */
    encoding: "UTF-8",
    max_number: 20,
    showMessage: true,
    auto_sort: false,
    timeFormat: "%Y-%m-%d",
    reverse: false,
    divide_by: "type",
    divide_color_by: "name",
    color: {
      Chinese: "#1177CC",
      Japanese: "#667788"
    },
    color_palette: [],
    changeable_color: false,
    divide_changeable_color_by_type: false,
    color_range: ["#ff7e5f", "#feb47b"],
    itemLabel: "#1: ",
    typeLabel: "Country: ",
    item_x: 250,
    interval_time: 0.4, 
    text_y: -50,
    text_x: 1000,
    offset: 350,
    display_barInfo: 0,
    use_counter: false,
    step: 1,
    format: ",.0f",
    postfix: "",
    deformat: function (val, postfix) {
      return Number(val.replace(postfix, "").replace(/\,/g, ""));
    },
    left_margin: 250,
    right_margin: 150,
    top_margin: 180,
    bottom_margin: 0,
    dateLabel_switch: true,
    dateLabel_x: null,
    dateLabel_y: null,
    allow_up: false,
    always_up: false,
    enter_from_0: true,
    big_value: true,
    use_semilogarithmic_coordinate: false,
    long: false,
    wait: 0,
    update_rate: 1,
    showLabel: true,
    labelx: -10,
    use_img: true,
    imgs: {
      item:
        "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
      name:
        "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
      img: "path/to/img"
    },
    background_color: "#FFFFFF",
    rounded_rectangle: true, 
    show_x_tick: true,
    bar_name_max: 30
  };
  
// d3.select("#inputfile").on("change", getCsv);
// function getCsv() {
//   d3.select("#inputfile").attr("hidden", true);
//   var r = new FileReader();
//   r.readAsText(this.files[0], config.encoding);
//   r.onload = function () {
//     var data = d3.csvParse(this.result);
//     try {
//       draw(data);
//     } catch (error) {
//       alert(error);
//     }
//   };

// loading data from csv file which contains scraped data.
d3.csv("data.csv").then(function(data) {
    // Call the draw function with the loaded data
    global_store_data=data
    draw(data);
}).catch(function(error) {
    // Handle error if data loading fails
    console.error("Error loading the data:", error);
});  

// the main draw function which reloads the graph and updates the values as time changes
/**
 * Draws a visualization based on the provided data.
 *
 * @param {Array} data - The data to be visualized.
 */
function draw(data) {
 // Create an empty array to store unique dates
var date = [];

// Iterate through the data and push unique dates into the date array
data.forEach(element => {
    if (date.indexOf(element["date"]) == -1) {
        date.push(element["date"]);
    }
});

// Create an empty array to store rates
let rate = [];

// Get the auto_sort value from the configuration
var auto_sort = config.auto_sort;

// If auto_sort is true, sort the dates in ascending order
if (auto_sort) {
    var time = date.sort((x, y) => new Date(x) - new Date(y));
} else {
    // Otherwise, use the unsorted dates
    var time = date;
}

// getting the default values for start from the configuration settings
var use_semilogarithmic_coordinate = config.use_semilogarithmic_coordinate;
var big_value = config.big_value;
var divide_by = config.divide_by;
var divide_color_by = config.divide_color_by;
var changeable_color = config.changeable_color;
var divide_changeable_color_by_type = config.divide_changeable_color_by_type;
var user_pallete = config.color_palette;

// Create an empty array to store unique names
var name_list = [];

// Sort the data in descending order of value
data.sort((a, b) => Number(b.value) - Number(a.value))
    // Iterate through the sorted data and push unique names into the name_list array
    .forEach(e => {
        if (name_list.indexOf(e.name) == -1) {
            name_list.push(e.name);
        }
    });

// Set a base time for animation (in milliseconds)
var baseTime = 3000;

// If a user-defined palette is provided, use it; otherwise, use the default d3.schemeCategory10
var product_palette
if(user_pallete.length!==0){
    product_palette = user_pallete
}else{
    product_palette = d3.schemeCategory10
}
// Function to get the color for a given data point
function getColor(d) {
    var r = 0.0;

    // If changeable_color is true
    if (changeable_color) {
        // Create a color range interpolator using the specified color range
        var colorRange = d3.interpolateCubehelix(
            config.color_range[0],
            config.color_range[1]
        );

        if (divide_changeable_color_by_type && d["type"] in config.color_ranges) {
            // Create a color range interpolator using the specified color range for the data point's type
            var colorRange = d3.interpolateCubehelix(
                config.color_ranges[d["type"]][0],
                config.color_ranges[d["type"]][1]
            );
        }

        // Calculate the normalized value based on the rate with the formula
        var v = Math.abs(rate[d.name] - rate["MIN_RATE"]) / (rate["MAX_RATE"] - rate["MIN_RATE"]);

        // If the value is NaN or -1, use a default color
        if (isNaN(v) || v == -1) {
            return colorRange(0.6);
        }

        // Otherwise, return the color from the interpolator based on the normalized value
        return colorRange(v);
    }

    // if (colourBlind==='normal') // {
    // Check if a color is defined for the divide_color_by value
    if (d[divide_color_by] in config.color) {
        // Return the defined color
        return config.color[d[divide_color_by]];
    } else {
        // Otherwise, return a color from the product_palette based on the divide_color_by value
        return product_palette[
            Math.floor(d[divide_color_by].charCodeAt() % product_palette.length)
        ];
    }
    // }
}
// below function for the colour for colour blind functionality
// function getColor(d) {
//     var r = 0.0;
//     if (changeable_color) {
//       var v =
//         Math.abs(rate[d.name] - rate["MIN_RATE"]) /
//         (rate["MAX_RATE"] - rate["MIN_RATE"]);
//       if (isNaN(v) || v == -1) {
//         return d3.interpolateGreys(0.6);
//       }
//       return d3.interpolateGreys(v);
//     }
  
//     // Convert the original color to grayscale
//     var grayScale = d3.interpolateGreys(0.5);
  
//     if (d[divide_color_by] in config.color) {
//       var originalColor = config.color[d[divide_color_by]];
//       var grayColor = d3.rgb(grayScale(d3.rgb(originalColor).r / 255));
//       return grayColor;
//     } else {
//       var originalColor = product_palette[
//         Math.floor(d[divide_color_by].charCodeAt() % product_palette.length)
//       ];
//       var grayColor = d3.rgb(grayScale(d3.rgb(originalColor).r / 255));
//       return grayColor;
//     }
//   }


    // getting the default values for start from the configuration settings
  var showMessage = config.showMessage;
  var always_up = config.always_up;
  var interval_time = config.interval_time;
  var typeLabel = config.typeLabel;
  var text_y = config.text_y;
  var allow_up = config.allow_up;
  var display_barInfo = config.display_barInfo;
  var use_counter = config.use_counter;
  var step = config.step;
  var long = config.long;
  var format = config.format;
  var left_margin = config.left_margin;
  var right_margin = config.right_margin;
  var top_margin = config.top_margin;
  var bottom_margin = config.bottom_margin;
  var timeFormat = config.timeFormat;
  var item_x = config.item_x;
  var max_number = config.max_number;
  var reverse = config.reverse;
  var text_x = config.text_x;
  var offset = config.offset;
  var animation = config.animation;
  var deformat = config.deformat;
  var itemLabel = config.itemLabel;
  // setting the margin
  const margin = {
    left: left_margin,
    right: right_margin,
    top: top_margin,
    bottom: bottom_margin
  };

  if (config.use_type_info) {
    var use_type_info = config.use_type_info;  
  } else if (divide_by != "name") {
    var use_type_info = true;  
  } else {
    var use_type_info = false;  
  }  
 // Get the background color from the configuration
var background_color = config.background_color;

// Set the background color of the body
d3.select("body").attr("style", "background:" + background_color);

// Get the enter_from_0 value from the configuration
var enter_from_0 = config.enter_from_0;

// Divide the interval_time by 3
interval_time /= 3;

// Initialize an empty array to store the last data
var lastData = [];

// Get the first date from the time array and convert it to a string
var currentdate = time[0].toString();

// Initialize an empty array to store the current data
var currentData = [];

// Initialize a variable to store the last name
var lastname;

// Select the SVG element
const svg = d3.select("svg");

// Get the width and height of the SVG element
const width = svg.attr("width");
const height = svg.attr("height");

// Calculate the inner width and height of the SVG element after accounting for margins
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom - 32;

// Define a function to extract the value from a data point
const xValue = d => Number(d.value);

// Define a function to extract the name from a data point
const yValue = d => d.name;

// Create a new group element within the SVG and translate it based on the margins
const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create a new group element for the x-axis and translate it to the bottom of the chart area
const xAxisG = g
    .append("g")
    .attr("transform", `translate(0, ${innerHeight})`);

// Create a new group element for the y-axis
const yAxisG = g.append("g");

// Append a text element for the x-axis label
xAxisG
    .append("text")
    .attr("class", "axis-label")
    .attr("x", innerWidth / 2)
    .attr("y", 100);

// Initialize the x-scale
var xScale = d3.scaleLinear();

// If use_semilogarithmic_coordinate is true, use a power scale with exponent 0.5
if (use_semilogarithmic_coordinate) {
    xScale = d3.scalePow().exponent(0.5);
} else {
    xScale = d3.scaleLinear();
}

// Initialize the y-scale as a band scale with padding
const yScale = d3
    .scaleBand()
    .paddingInner(0.3)
    .paddingOuter(0);

// Set the number of ticks for the x-axis
const xTicks = 10;

// Create the x-axis using the xScale and configure tick formatting and size
const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(xTicks)
    .tickPadding(20)
    .tickFormat(d => {
        if (d <= 0) {
            return "";
        }
        return d3.format(",.0f")(d);
    })
    .tickSize(-innerHeight);

// Create the y-axis using the yScale and configure tick padding and size
const yAxis = d3
    .axisLeft()
    .scale(yScale)
    .tickPadding(5)
    .tickSize(-innerWidth);

// Get the dateLabel_switch value from the configuration
var dateLabel_switch = config.dateLabel_switch;

// Get the dateLabel_x and dateLabel_y values from the configuration
var dateLabel_x = config.dateLabel_x;
var dateLabel_y = config.dateLabel_y;

// If dateLabel_x or dateLabel_y is null, set them to the innerWidth and innerHeight, respectively
if (dateLabel_x == null || dateLabel_y == null) {
    dateLabel_x = innerWidth;
    dateLabel_y = innerHeight;
}

// Set the visibility of the dateLabel based on the dateLabel_switch value
if (dateLabel_switch == false) {
    dateLabel_switch = "hidden";
} else {
    dateLabel_switch = "visible";
}

// Append a text element for the date label
  var dateLabel = g
    .insert("text")
    .data(currentdate)
    .attr("class", "dateLabel")
    .attr("style:visibility", dateLabel_switch)
    .attr("x", dateLabel_x)
    .attr("y", dateLabel_y)
    .attr("text-anchor", function () {
      return "end";
    })
    .text(currentdate);
    
  var topLabel = g
    .insert("text")
    .attr("class", "topLabel")
    .attr("x", item_x)
    .attr("y", text_y);

    // Function to sort data based on value and name
function dataSort() {
    // Check if reverse sorting is enabled
    if (reverse) {
      // Sort the data array in descending order
      currentData.sort(function (a, b) {
        // If values are equal, sort by sum of ASCII codes of name characters
        if (Number(a.value) == Number(b.value)) {
          var r1 = 0;
          var r2 = 0;
          // Calculate sum of ASCII codes for name of first element
          for (let index = 0; index < a.name.length; index++) {
            r1 = r1 + a.name.charCodeAt(index);
          }
          // Calculate sum of ASCII codes for name of second element
          for (let index = 0; index < b.name.length; index++) {
            r2 = r2 + b.name.charCodeAt(index);
          }
          // Sort by the difference in sum of ASCII codes
          return r2 - r1;
        } else {
          // If values are not equal, sort by numerical value
          return Number(a.value) - Number(b.value);
        }
      });
    } else {
      // Sort the data array in ascending order
      currentData.sort(function (a, b) {
        // If values are equal, sort by sum of ASCII codes of name characters
        if (Number(a.value) == Number(b.value)) {
          var r1 = 0;
          var r2 = 0;
          // Calculate sum of ASCII codes for name of first element
          for (let index = 0; index < a.name.length; index++) {
            r1 = r1 + a.name.charCodeAt(index);
          }
          // Calculate sum of ASCII codes for name of second element
          for (let index = 0; index < b.name.length; index++) {
            r2 = r2 + b.name.charCodeAt(index);
          }
          // Sort by the difference in sum of ASCII codes
          return r2 - r1;
        } else {
          // If values are not equal, sort by numerical value in reverse order
          return Number(b.value) - Number(a.value);
        }
      });
    }
  }
  
  // Function to get current data for a specific date
  function getCurrentData(date) {
    // Initialize variables
    rate = [];
    currentData = [];
    indexList = [];
  
    // Filter data for the specified date and non-zero values
    data.forEach(element => {
      if (element["date"] == date && parseFloat(element["value"]) != 0) {
        // Truncate long names and add ellipsis if necessary
        if (element.name.length > config.bar_name_max) {
          tail = "...";
        } else {
          tail = "";
        }
        element.name = element.name.slice(0, config.bar_name_max - 1) + tail;
        currentData.push(element);
      }
    });
  
    // Calculate rate of change for each element
    rate["MAX_RATE"] = 0;
    rate["MIN_RATE"] = 1;
    currentData.forEach(e => {
      _cName = e.name;
      lastData.forEach(el => {
        if (el.name == e.name) {
          rate[e.name] = Number(Number(e.value) - Number(el.value));
        }
      });
      if (rate[e.name] == undefined) {
        rate[e.name] = rate["MIN_RATE"];
      }
      if (rate[e.name] > rate["MAX_RATE"]) {
        rate["MAX_RATE"] = rate[e.name];
      } else if (rate[e.name] < rate["MIN_RATE"]) {
        rate["MIN_RATE"] = rate[e.name];
      }
    });
  
    // Sort the data
    dataSort();
    // Slice the data array to limit the number of elements
    currentData = currentData.slice(0, max_number);
  
    // Perform transitions
    d3.transition("2")
      .each(redraw)
      .each(change);
    // Update lastData with currentData
    lastData = currentData;
  }
  
  // Conditionally add text elements for information display
  if (showMessage) {
    var topInfo = g
      .insert("text")
      .attr("class", "growth")
      .attr("x", 0)
      .attr("y", text_y)
      .text(itemLabel);
  
    g.insert("text")
      .attr("class", "growth")
      .attr("x", text_x)
      .attr("y", text_y)
      .text(typeLabel);
  
    if (use_counter == true) {
      var days = g
        .insert("text")
        .attr("class", "days")
        .attr("x", text_x + offset)
        .attr("y", text_y);
    } else {
      if (use_type_info == true) {
        var top_type = g
          .insert("text")
          .attr("class", "days")
          .attr("x", text_x + offset)
          .attr("y", text_y);
      }
    }
  }
  
// Declare variables
var lastname; // Holds the last name processed
var counter = { value: 1 }; // Counter object to keep track of values
var avg = 0; // Average value placeholder
var enter_from_now = true; // Flag to determine if entering from current time

// Function to redraw the visualization
function redraw() {
  // Check if there is data to draw
  if (currentData.length == 0) return;

  // Adjust xScale domain based on data
  if (big_value) {
    // Adjust domain for large values
    xScale.domain([
      2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
      d3.max(currentData, xValue) + 10
    ]).range([0, innerWidth]);
  } else {
    // Adjust domain for regular values
    xScale.domain([0, d3.max(currentData, xValue) + 1]).range([0, innerWidth]);
  }

  // Update date label with transition
  if (auto_sort) {
    dateLabel.data(currentData)
      .transition()
      .duration(baseTime * interval_time)
      .ease(d3.easeLinear)
      .tween("text", function (d) {
        var self = this;
        var i = d3.interpolateDate(
          new Date(self.textContent),
          new Date(d.date)
        );
        return function (t) {
          var dateformat = d3.timeFormat(timeFormat);
          self.textContent = dateformat(i(t));
        };
      });
  } else {
    dateLabel.text(currentdate);
  }

  // Update x and y axes with transition
  xAxisG.transition().duration(baseTime * interval_time).ease(d3.easeLinear).call(xAxis);
  yAxisG.transition().duration(baseTime * interval_time).ease(d3.easeLinear).call(yAxis);

  // Remove ticks from yAxisG and xAxisG if specified
  yAxisG.selectAll(".tick").remove();
  if (!config.show_x_tick) {
    xAxisG.selectAll(".tick").remove();
  }

  // Update yScale domain and range
  yScale.domain(currentData.map(d => d.name).reverse()).range([innerHeight, 0]);

  // Update existing bars
  var bar = g.selectAll(".bar").data(currentData, function (d) { return d.name; });

  // Update top label if showMessage is true
  if (showMessage) {
    topLabel.data(currentData).text(function (d) {
      if (lastname == d.name) {
        counter.value = counter.value + step;
      } else {
        counter.value = 1;
      }
      lastname = d.name;
      if (d.name.length > 24) return d.name.slice(0, 23) + "...";
      return d.name;
    });

    // Update days counter if use_counter is true
    if (use_counter == true) {
      days.data(currentData)
        .transition()
        .duration(baseTime * interval_time)
        .ease(d3.easeLinear)
        .tween("text", function (d) {
          var self = this;
          var i = d3.interpolate(self.textContent, counter.value),
            prec = (counter.value + "").split("."),
            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;

          return function (t) {
            self.textContent = d3.format(format)(Math.round(i(t) * round) / round);
          };
        });
    } else if (use_type_info == true) {
      // Update top type info if use_type_info is true
      top_type.data(currentData).text(function (d) {
        return d["type"];
      });
    }
  }

  // Enter new bars
  var barEnter = bar.enter().insert("g", ".axis")
    .attr("class", "bar")
    .attr("transform", function (d) { return "translate(0," + yScale(yValue(d)) + ")"; });

  // Append rectangles for bars
  barEnter.append("rect")
    .attr("width", function (d) {
      if (enter_from_0) {
        return 0;
      } else {
        return xScale(currentData[currentData.length - 1].value);
      }
    })
    .attr("fill-opacity", 0)
    .attr("height", 26)
    .attr("y", 50)
    .style("fill", d => getColor(d))
    .transition("a")
    .delay(500 * interval_time)
    .duration(2490 * interval_time)
    .attr("y", 0)
    .attr("width", d => xScale(xValue(d)))
    .attr("fill-opacity", 1);

  // Add rounded corners if specified
  if (config.rounded_rectangle) {
    d3.selectAll("rect").attr("rx", 13);
  }

  // Append labels for bars if showLabel is true
  if (config.showLabel == true) {
    barEnter.append("text")
      .attr("y", 50)
      .attr("fill-opacity", 0)
      .style("fill", d => getColor(d))
      .transition("2")
      .delay(500 * interval_time)
      .duration(2490 * interval_time)
      .attr("fill-opacity", 1)
      .attr("y", 0)
      .attr("class", function (d) { return "label "; })
      .attr("x", config.labelx)
      .attr("y", 20)
      .attr("text-anchor", "end")
      .text(function (d) {
        if (long) {
          return "";
        }
        return d.name;
      });
  }
// Check if config.use_img is true
if (config.use_img) {
    // Append image pattern for each bar using defs and pattern elements
    barEnter.append("defs").append("pattern")
      .attr("id", d => d.name) // Set id of the pattern to the data name
      .attr("width", "100%")
      .attr("height", "100%")
      .append("image")
      .attr("x", "0")
      .attr("y", "0")
      .attr("width", "40")
      .attr("height", "40")
      .attr("href", d => config.imgs[d.name]); // Set image href based on config data
  
    // Append circle for each bar with image fill
    barEnter.append("circle")
      .attr("fill-opacity", 0)
      .attr("cy", 63) // Position of the circle
      .attr("fill", d =>
        // Fill with image pattern url, encoded to handle special characters
        "url(#" +
        encodeURIComponent(d.name)
          .replace("'", "%27")
          .replace("(", "%28")
          .replace(")", "%29") +
        ")"
      )
      .attr("stroke-width", "0px")
      .transition("a")
      .delay(500 * interval_time)
      .duration(2490 * interval_time)
      .attr("x", -16) // Starting x position of the circle
      .attr("cx", d => xScale(xValue(d)) - 20) // Position the circle relative to the bar
      .attr("cy", 13) // Adjust y position of the circle
      .attr("r", 40 / 2) // Set radius of the circle
      .attr("fill-opacity", 1); // Make the circle visible
  }
  
  // Append text information for each bar
  var barInfo = barEnter.append("text")
    .attr("x", function (d) {
      // Set x position of the text based on conditions
      if (long) return 10;
      if (enter_from_0) {
        return 0;
      } else {
        return xScale(currentData[currentData.length - 1].value);
      }
    })
    .attr("stroke", d => getColor(d)) // Set stroke color based on data
    .attr("class", function () {
      return "barInfo";
    })
    .attr("y", 50) // Initial y position of the text
    .attr("stroke-width", "0px")
    .attr("fill-opacity", 0) // Initially hide the text
    .transition() // Apply transition to the text
    .delay(500 * interval_time)
    .duration(2490 * interval_time)
    .text(function (d) {
      // Set text content based on conditions
      if (use_type_info) {
        return d[divide_by] + "-" + d.name;
      }
      return d.name;
    })
    .attr("x", d => {
      // Set x position of the text based on conditions
      if (long) return 10;
      return xScale(xValue(d)) - 40;
    })
    .attr("fill-opacity", function (d) {
      // Show or hide the text based on x position
      if (xScale(xValue(d)) - 40 < display_barInfo) {
        return 0;
      }
      return 1;
    })
    .attr("y", 2)
    .attr("dy", ".5em")
    .attr("text-anchor", function () {
      // Set text-anchor based on conditions
      if (long) return "start";
      return "end";
    })
    .attr("stroke-width", function (d) {
      // Set stroke-width based on conditions
      if (xScale(xValue(d)) - 40 < display_barInfo) {
        return "0px";
      }
      return "4px";
    })
    .attr("paint-order", "stroke");
  
  // If long flag is true, apply a text tween animation to barInfo
  if (long) {
    barInfo.tween("text", function (d) {
      // Interpolate text content to create a smooth transition
      var self = this;
      self.textContent = d.value;
      var i = d3.interpolate(self.textContent, Number(d.value)),
        prec = (Number(d.value) + "").split("."),
        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
      return function (t) {
        self.textContent =
          d[divide_by] +
          "-" +
          d.name +
          "  :" +
          d3.format(format)(Math.round(i(t) * round) / round);
      };
    });
  }
  // Update text elements for values if not in long mode
if (!long) {
    barEnter.append("text")
      .attr("x", function () {
        // Set x position based on conditions
        if (long) {
          return 10;
        }
        if (enter_from_0) {
          return 0;
        } else {
          return xScale(currentData[currentData.length - 1].value);
        }
      })
      .attr("y", 50) // Set initial y position
      .attr("fill-opacity", 0) // Hide text initially
      .style("fill", d => getColor(d)) // Set fill color based on data
      .transition() // Apply transition to the text
      .duration(2990 * interval_time) // Set transition duration
      .tween("text", function (d) { // Apply tween animation for smooth transition
        var self = this;
        self.textContent = d.value * 0.9; // Set initial text content
        var i = d3.interpolate(self.textContent, Number(d.value)), // Interpolate values for transition
          prec = (Number(d.value) + "").split("."), // Split value for precision calculation
          round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1; // Calculate rounding factor
        return function (t) {
          // Update text content during transition
          self.textContent =
            d3.format(format)(Math.round(i(t) * round) / round) + // Format text with specified precision
            config.postfix; // Append postfix if provided
        };
      })
      .attr("fill-opacity", 1) // Make text visible
      .attr("y", 0) // Adjust y position
      .attr("class", function (d) {
        return "value"; // Set class for styling
      })
      .attr("x", d => {
        return xScale(xValue(d)) + 10; // Set x position relative to bar
      })
      .attr("y", 22); // Adjust y position after transition
  }
  
  // Transition update for existing bars
  var barUpdate = bar.transition("2")
    .duration(2990 * interval_time) // Set transition duration
    .ease(d3.easeLinear); // Set easing function
  
  // Update rectangle elements representing bars
  barUpdate.select("rect")
    .style("fill", d => getColor(d)) // Set fill color based on data
    .attr("width", d => xScale(xValue(d))); // Update width based on data value
  
  // Update label elements if configured to show
  if (config.showLabel == true) {
    barUpdate.select(".label")
      .attr("class", function (d) {
        return "label "; // Set class for styling
      })
      .style("fill", d => getColor(d)) // Set fill color based on data
      .attr("width", d => xScale(xValue(d))); // Update width based on data value
  }
  
  // Update value text elements if not in long mode
  if (!long) {
    barUpdate.select(".value")
      .attr("class", function (d) {
        return "value"; // Set class for styling
      })
      .style("fill", d => getColor(d)) // Set fill color based on data
      .attr("width", d => xScale(xValue(d))); // Update width based on data value
  }
  
  // Update barInfo text elements
  barUpdate.select(".barInfo").attr("stroke", function (d) {
    return getColor(d); // Set stroke color based on data
  });
  
  // Update circle elements if images are used
  if (config.use_img) {
    barUpdate.select("circle")
      .attr("stroke", function (d) {
        return getColor(d); // Set stroke color based on data
      })
      .attr("cx", d => xScale(xValue(d)) - 20); // Update x position relative to bar
  }
  
  // Update barInfo text elements
  var barInfo = barUpdate.select(".barInfo")
    .text(function (d) {
      // Set text content based on conditions
      if (use_type_info) {
        return d[divide_by] + "-" + d.name;
      }
      return d.name;
    })
    .attr("x", d => {
      // Set x position based on conditions
      if (long) return 10;
      return xScale(xValue(d)) - 40;
    })
    .attr("fill-opacity", function (d) {
      // Show or hide text based on x position
      if (xScale(xValue(d)) - 40 < display_barInfo) {
        return 0;
      }
      return 1;
    })
    .attr("stroke-width", function (d) {
      // Set stroke width based on conditions
      if (xScale(xValue(d)) - 40 < display_barInfo) {
        return "0px";
      }
      return "4px";
    })
    .attr("paint-order", "stroke"); // Specify paint order for rendering stroke
// Update the text content of barInfo based on whether the chart is in long mode
if (long) {
    barInfo.tween("text", function (d) {
      var self = this;
      var str = d[divide_by] + "-" + d.name + "  :"; // Constructing prefix string for text
  
      var i = d3.interpolate(
        self.textContent.slice(str.length, 99), // Extracting current numerical value from text content
        Number(d.value) // Target value for interpolation
      ),
        prec = (Number(d.value) + "").split("."), // Splitting value for precision calculation
        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1; // Rounding factor
      return function (t) {
        // Update the text content with interpolated value
        self.textContent =
          d[divide_by] +
          "-" +
          d.name +
          "  :" +
          d3.format(format)(Math.round(i(t) * round) / round); // Format interpolated value and append to prefix
      };
    });
  } 
  // Update the value text in barUpdate if not in long mode
  else {
    barUpdate.select(".value")
      .tween("text", function (d) {
        var self = this;
  
        // Define interpolation based on presence of postfix
        if (config.postfix == "") {
          var i = d3.interpolate(self.textContent, Number(d.value));
        } else {
          var i = d3.interpolate(
            self.textContent.slice(0, -config.postfix.length), // Remove existing postfix from text content
            Number(d.value)
          );
        }
  
        var i = d3.interpolate(
          deformat(self.textContent, config.postfix), // Deformat text content by removing postfix
          Number(d.value)
        );
  
        var prec = (Number(d.value) + "").split("."), // Split value for precision calculation
          round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1; // Rounding factor
        return function (t) {
          // Update the text content with interpolated value and postfix
          self.textContent =
            d3.format(format)(Math.round(i(t) * round) / round) +
            config.postfix;
        };
      })
      .duration(2990 * interval_time) // Set duration for the transition
      .attr("x", d => xScale(xValue(d)) + 10); // Update x position
  }
  
    avg =
      (Number(currentData[0]["value"]) +
        Number(currentData[currentData.length - 1]["value"])) /
      2;

    var barExit = bar
      .exit()
      .attr("fill-opacity", 1)
      .transition()
      .duration(2500 * interval_time);
    barExit
      .attr("transform", function (d) {
        if (always_up) {
          return "translate(0," + "-100" + ")";
        }
        if (Number(d.value) > avg && allow_up) {
          return "translate(0," + "-100" + ")";
        }
        return "translate(0," + "1000" + ")";
      })
      .remove()
      .attr("fill-opacity", 0);
    barExit
      .select("rect")
      .attr("fill-opacity", 0)
      .attr("width", () => {
        if (always_up) return xScale(0);
        return xScale(currentData[currentData.length - 1]["value"]);
      });
    if (!long) {
      barExit
        .select(".value")
        .attr("fill-opacity", 0)
        .attr("x", () => {
          if (always_up) return xScale(0);
          return xScale(currentData[currentData.length - 1]["value"]);
        });
    }
    barExit
      .select(".barInfo")
      .attr("fill-opacity", 0)
      .attr("stroke-width", function (d) {
        return "0px";
      })
      .attr("x", () => {
        if (long) return 10;
        if (always_up) return xScale(0);
        return xScale(currentData[currentData.length - 1]["value"]);
      });
    barExit.select(".label").attr("fill-opacity", 0);
    if (config.use_img) {
      barExit.select("circle").attr("fill-opacity", 0);
    }
  }
/*
   Function to update the position of bars based on the current data.
   It adjusts the y-scale domain based on the current data names and reverses it.
*/
function change() {
    // Update y-scale domain to match the current data
    yScale.domain(currentData.map(d => d.name).reverse())
           .range([innerHeight, 0]);
           
    // Update the position of bars based on the chosen animation type
    if (animation == "linear") {
      // Apply a linear transition to move the bars smoothly
      g.selectAll(".bar")
        .data(currentData, function (d) {
          return d.name;
        })
        .transition("1")
        .ease(d3.easeLinear) // Apply linear easing for smooth transition
        .duration(baseTime * update_rate * interval_time) // Set the transition duration
        .attr("transform", function (d) {
          return "translate(0," + yScale(yValue(d)) + ")"; // Translate bars vertically
        });
    } else {
      // Apply a default transition for changing the bars' position
      g.selectAll(".bar")
        .data(currentData, function (d) {
          return d.name;
        })
        .transition("1")
        .duration(baseTime * update_rate * interval_time) // Set the transition duration
        .attr("transform", function (d) {
          return "translate(0," + yScale(yValue(d)) + ")"; // Translate bars vertically
        });
    }
  }
  
  var i = 0;
  var p = config.wait;
  var update_rate = config.update_rate;
  var inter = setInterval(function next() {
    if (state === "pause") return; // Don't update if paused

    while (p) {
      p -= 1;
      return;
    }
    currentdate = time[i];
    getCurrentData(time[i]);
    i++;

    if (i >= time.length) {
      window.clearInterval(inter);
    }
  }, baseTime * interval_time);
}

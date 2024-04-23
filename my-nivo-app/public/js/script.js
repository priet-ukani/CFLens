function MapAndPie() {
    // totals_save has the data for all the tags
var totals_save = [
    {
        title: "math",
        value: 2706,
        all: 28759
    },
    {
        title: "greedy",
        value: 2669,
        all: 28759
    },
    {
        title: "implement",
        value: 2606,
        all: 28759
    },
    {
        title: "dp",
        value: 2000,
        all: 28759
    },
    {
        title: "constructive",
        value: 1642,
        all: 28759
    },
    {
        title: "DS",
        value: 1632,
        all: 28759
    },
    {
        title: "brute force",
        value: 1565,
        all: 28759
    },
    {
        title: "graphs",
        value: 1024,
        all: 28759
    },
    {
        title: "sortings",
        value: 1009,
        all: 28759
    },
    {
        title: "binary search",
        value: 992,
        all: 28759
    },
    {
        title: "dfs and similar",
        value: 883,
        all: 28759
    },
    {
        title: "trees",
        value: 773,
        all: 28759
    },
    {
        title: "number theory",
        value: 695,
        all: 28759
    },
    {
        title: "strings",
        value: 691,
        all: 28759
    },
    {
        title: "pnc",
        value: 631,
        all: 28759
    },
    {
        title: "bitmasks",
        value: 530,
        all: 28759
    },
    {
        title: "two pointers",
        value: 507,
        all: 28759
    },
    {
        title: "*special",
        value: 426,
        all: 28759
    },
    {
        title: "geometry",
        value: 380,
        all: 28759
    },
    {
        title: "dsu",
        value: 337,
        all: 28759
    }
    
];
// totals has the data for the tags used for plotting pie-chart
var totals = [
    {
        title: "math",
        value: 2706,
        all: 28759
    },
    {
        title: "greedy",
        value: 2669,
        all: 28759
    },
    {
        title: "implement",
        value: 2606,
        all: 28759
    },
    {
        title: "dp",
        value: 2000,
        all: 28759
    },
    {
        title: "constructive",
        value: 1642,
        all: 28759
    },
    {
        title: "DS",
        value: 1632,
        all: 28759
    },
    {
        title: "brute force",
        value: 1565,
        all: 28759
    },
    {
        title: "graphs",
        value: 1024,
        all: 28759
    },
    {
        title: "sortings",
        value: 1009,
        all: 28759
    },
    {
        title: "binary search",
        value: 992,
        all: 28759
    },
    {
        title: "dfs and similar",
        value: 883,
        all: 28759
    },
    {
        title: "trees",
        value: 773,
        all: 28759
    },
    {
        title: "number theory",
        value: 695,
        all: 28759
    },
    {
        title: "strings",
        value: 691,
        all: 28759
    },
    {
        title: "pnc",
        value: 631,
        all: 28759
    },
    {
        title: "bitmasks",
        value: 530,
        all: 28759
    },
    {
        title: "two pointers",
        value: 507,
        all: 28759
    },
    {
        title: "*special",
        value: 426,
        all: 28759
    },
    {
        title: "geometry",
        value: 380,
        all: 28759
    },
    {
        title: "dsu",
        value: 337,
        all: 28759
    }
];
// totals_small has the data for top 10 tags by Count
var totals_small = [
    {
        title: "math",
        value: 2706,
        all: 16950
    },
    {
        title: "greedy",
        value: 2669,
        all: 16950
    },
    {
        title: "implement",
        value: 2606,
        all: 16950
    },
    {
        title: "dp",
        value: 2000,
        all: 16950
    },
    {
        title: "constructive",
        value: 1642,
        all: 16950
    },
    {
        title: "DS",
        value: 1632,
        all: 16950
    },
    {
        title: "brute force",
        value: 1565,
        all: 16950
    },
    {
        title: "graphs",
        value: 1024,
        all: 16950
    },
    {
        title: "sortings",
        value: 1009,
        all: 16950
    },
    {
        title: "binary search",
        value: 992,
        all: 16950
    }
];
var div1 = [
    {
        title: "math",
        value: 596,
        all: 6135
    },
    {
        title: "dp",
        value: 581,
        all: 6135
    },
    {
        title: "greedy",
        value: 523,
        all: 6135
    },
    {
        title: "DS",
        value: 515,
        all: 6135
    },
    {
        title: "constructive",
        value: 418,
        all: 6135
    },
    {
        title: "implement",
        value: 352,
        all: 6135
    },
    {
        title: "graphs",
        value: 308,
        all: 6135
    },
    {
        title: "brute force",
        value: 289,
        all: 6135
    },
    {
        title: "trees",
        value: 267,
        all: 6135
    },
    {
        title: "dfs and similar",
        value: 241,
        all: 6135
    },
    {
        title: "binary search",
        value: 222,
        all: 6135
    },
    {
        title: "pnc",
        value: 205,
        all: 6135
    },
    {
        title: "sortings",
        value: 187,
        all: 6135
    },
    {
        title: "number theory",
        value: 168,
        all: 6135
    },
    {
        title: "bitmasks",
        value: 134,
        all: 6135
    },
    {
        title: "strings",
        value: 128,
        all: 6135
    },
    {
        title: "geometry",
        value: 120,
        all: 6135
    },
    {
        title: "two pointers",
        value: 119,
        all: 6135
    },
    {
        title: "dsu",
        value: 100,
        all: 6135
    }
]
var div2 = [
    {
        title: "implement",
        value: 1499,
        all: 12884
    },
    {
        title: "math",
        value: 1452,
        all: 12884
    },
    {
        title: "greedy",
        value: 1444,
        all: 12884
    },
    {
        title: "dp",
        value: 963,
        all: 12884
    },
    {
        title: "brute force",
        value: 908,
        all: 12884
    },
    {
        title: "constructive",
        value: 860,
        all: 12884
    },
    {
        title: "DS",
        value: 746,
        all: 12884
    },
    {
        title: "sortings",
        value: 525,
        all: 12884
    },
    {
        title: "binary search",
        value: 493,
        all: 12884
    },
    {
        title: "graphs",
        value: 426,
        all: 12884
    },
    {
        title: "dfs and similar",
        value: 402,
        all: 12884
    },
    {
        title: "number theory",
        value: 381,
        all: 12884
    },
    {
        title: "strings",
        value: 371,
        all: 12884
    },
    {
        title: "trees",
        value: 328,
        all: 12884
    },
    {
        title: "pnc",
        value: 324,
        all: 12884
    },
    {
        title: "bitmasks",
        value: 305,
        all: 12884
    },
    {
        title: "two pointers",
        value: 261,
        all: 12884
    },
    {
        title: "dsu",
        value: 157,
        all: 12884
    }
]
var div3 = [
    {
        title: "greedy",
        value: 302,
        all: 2135
    },
    {
        title: "math",
        value: 273,
        all: 2135
    },
    {
        title: "implement",
        value: 223,
        all: 2135
    },
    {
        title: "brute force",
        value: 142,
        all: 2135
    },
    {
        title: "dp",
        value: 137,
        all: 2135
    },
    {
        title: "algorithms",
        value: 128,
        all: 2135
    },
    {
        title: "sortings",
        value: 128,
        all: 2135
    },
    {
        title: "DS",
        value: 120,
        all: 2135
    },
    {
        title: "binary search",
        value: 90,
        all: 2135
    },
    {
        title: "dfs and similar",
        value: 85,
        all: 2135
    },
    {
        title: "graphs",
        value: 75,
        all: 2135
    },
    {
        title: "strings",
        value: 74,
        all: 2135
    },
    {
        title: "two pointers",
        value: 64,
        all: 2135
    },
    {
        title: "number theory",
        value: 54,
        all: 2135
    },
    {
        title: "trees",
        value: 51,
        all: 2135
    },
    {
        title: "pnc",
        value: 32,
        all: 2135
    },
    {
        title: "shortest paths",
        value: 31,
        all: 2135
    },
    {
        title: "bitmasks",
        value: 27,
        all: 2135
    },
    {
        title: "dsu",
        value: 27,
        all: 2135
    }
]
var div4 = [
    {
        title: "implement",
        value: 78,
        all: 350
    },
    {
        title: "greedy",
        value: 44,
        all: 350
    },
    {
        title: "brute force",
        value: 27,
        all: 350
    },
    {
        title: "math",
        value: 27,
        all: 350
    },
    {
        title: "sortings",
        value: 26,
        all: 350
    },
    {
        title: "DS",
        value: 21,
        all: 350
    },
    {
        title: "dp",
        value: 18,
        all: 350
    },
    {
        title: "bitmasks",
        value: 15,
        all: 350
    },
    {
        title: "strings",
        value: 15,
        all: 350
    },
    {
        title: "binary search",
        value: 15,
        all: 350
    },
    {
        title: "dfs and similar",
        value: 14,
        all: 350
    },
    {
        title: "graphs",
        value: 9,
        all: 350
    },
    {
        title: "two pointers",
        value: 9,
        all: 350
    },
    {
        title: "Constructive",
        value: 6,
        all: 350
    },
    {
        title: "number theory",
        value: 5,
        all: 350
    },
    {
        title: "trees",
        value: 4,
        all: 350
    },
    {
        title: "geometry",
        value: 4,
        all: 350
    },
    {
        title: "dsu",
        value: 3,
        all: 350
    }
]



var temp=d3.select('#donut')    // select the div element with the id 'donut'
.append('svg')  // append an svg element
.attr('class', 'pie'); // add a class to the svg element

var pie_chart_width;
var pie_chart_height;
if (window.screen.width < 600) // if the screen width is less than 900 then set the width and height of the svg element
{
    pie_chart_height=250;
    pie_chart_width=400;
}
else
{
    pie_chart_height=400;
    pie_chart_width=650;
}

var colors_array = [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
    '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
    '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
    '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5',
    '#7b94c9', '#ff9896', '#8c6d31', '#fdae6b', '#1f77b4'
];


function add_pie() {
    // if the pie_added class is present then remove the svg element
    if (d3.select('.pie_added')) {
        d3.select('.pie_added').remove();
    }
    // div with class blockHead i present then remove the div element
    
    var width = pie_chart_width;
    var height = pie_chart_height;
    var radius = Math.min(3*width/4, 3*height/4) / 2;
    var donutWidth = 75;
    var color = d3.scaleOrdinal()   // setting the color scale
        .range(["#5A39AC", "#DD98D6", "#E7C820", "#08B2B2"]);
    
        // setting the svg element
    var svg = d3.select('#donut')
        .append('svg')
        .attr('class', 'pie_added')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2 -40) +
            ',' + (height/2) + ')');
    if (window.screen.width < 900)
    {
        svg.attr('transform', 'translate(' + (width / 2 + 10) +
            ',' + (height/2+20) + ')')
    }
    if (window.screen.width < 600)
    {
        svg.attr('transform', 'translate(' + (width / 2 -40) +
            ',' + (height/2 + 20) + ')')
    }
            // setting the arc and pie
            function midAngle(d){
                return d.startAngle + (d.endAngle - d.startAngle)/2;
            }        
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
        var outerArc = d3.arc()
        .innerRadius((radius-donutWidth) * 1.2)
        .outerRadius(radius * 1.2);
    
        // setting the pie
    var pie = d3.pie()
        .value(function (d) {
            return d.value;
        })
        .sort(null);
    
        // setting the legend
    var legendRectSize = 13;
    var legendSpacing = 7;
    
    // setting the tooltip
    var donutTip = d3.select("#donuttipDIV").append("div")
        .attr("class", "donut-tip")
        .style("opacity", 0)
        // add styling to add border and also text colour 
        .style("background-color", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")

        .style("position", "absolute");

    // getting the grouped data
    totals.sort(function (a, b) {
        return b.value - a.value;
    });
    var group_data_length = 10;
    var groupedData = totals.slice(group_data_length, totals.length);   

    // setting the path
    var path = svg.selectAll('path')
    .data(pie(groupedData))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
        return colors_array[(i+group_data_length)%colors_array.length] // Use color scale to get color based on index
    })
    .attr('stroke', '#fff') // border color
    .attr('stroke-width', 0.5) // border width

        .attr('transform', 'translate(0, 0)')
        .on('mouseover', function (event,d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '.85');
            donutTip
                .style("opacity", 1);
                let tagname= d.data.title;
                let num = ((d.value / d.data.all) * 100).toFixed(2) + '%';
                donutTip.html(tagname+"-"+d.value)
                .style("left", parseInt(event.pageX + 10) + "px")
                .style("top", parseInt(event.pageY - 15) + "px");
    
        })
        .on('mousemove', function (event,d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '.85');
            donutTip
                .style("opacity", 1);
                let tagname= d.data.title;
                let num = ((d.value / d.data.all) * 100).toFixed(2) + '%';
                donutTip.html(tagname+"-"+d.value)
                .style("left", parseInt(event.pageX + 10) + "px")
                .style("top", parseInt(event.pageY - 15) + "px");
    
        })
        .on('mouseout', function (d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '1');

            donutTip
                .style("opacity", 0);
        });
        var labels = svg.selectAll("text")
        .data(pie(groupedData))
        .enter()
        .append("text")
        .attr("transform", function(d) {
            var pos = outerArc.centroid(d);
            pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function(d) {
            return midAngle(d) < Math.PI ? "start" : "end";
        })
        .text(function(d) {
            return d.data.title + "-" + d.value; // Adjust this based on your data structure
        });
        if (window.screen.width < 600)
        {
            labels.attr("font-size", "10px");
        }
        var lines = svg.selectAll("line")
    .data(pie(groupedData))
    .enter()
    .append("line")
    .attr("x1", function (d) {
        return outerArc.centroid(d)[0];
    })
    .attr("y1", function (d) {
        return outerArc.centroid(d)[1];
    })
    .attr("x2", function (d) {
        var pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return pos[0];
    })
    .attr("y2", function (d) {
        var pos = outerArc.centroid(d);
        return pos[1];
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1);

}


function pie2() // function to draw the pie chart
{
    // console.log(totals);
    d3.select("#donut").selectAll("svg").remove(); // remove the existing svg element
    
    // Setting the dimensions of the pie chart
    var width = pie_chart_width;
    var height = pie_chart_height;
    var radius = Math.min(3*width/4, 3*height/4) / 2;
    var donutWidth = 75;
    var color = d3.scaleOrdinal()   // setting the color scale
        .range(["#5A39AC", "#DD98D6", "#E7C820", "#08B2B2"]);
    
        // setting the svg element
    var svg = d3.select('#donut')
        .append('svg')
        .attr('class', 'pie')
        .attr('width', width)
        .attr('height', height)
        .append('g');
    if (window.screen.width >= 600 && window.screen.width < 900)
    {
        svg
        .attr('transform', 'translate(' + (width / 2 + 10) +
            ',' + (height / 2) + ')');
    }
    if (window.screen.width < 600)
    {
        svg.attr('transform', 'translate(' + (width / 2 -40) +
            ',' + (height/2 + 20) + ')')
    }
    else if (window.screen.width >= 900)
    {
        svg
        .attr('transform', 'translate(' + (width / 2-20) +
            ',' + (height / 2) + ')');
    }
    
            // setting the arc and pie   
            function midAngle(d){
                return d.startAngle + (d.endAngle - d.startAngle)/2;
            }        
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
        var outerArc = d3.arc()
        .innerRadius((radius-donutWidth) * 1.2)
        .outerRadius(radius * 1.2);
        // setting the pie
    var pie = d3.pie()
        .value(function (d) {
            return d.value;
        })
        .sort(null);
    
        // setting the legend
    var legendRectSize = 13;
    var legendSpacing = 7;
    
    // setting the tooltip
    var donutTip = d3.select("#donuttipDIV").append("div")
        .attr("class", "donut-tip")
        .style("opacity", 0)
        // add styling to add border and also text colour 
        .style("background-color", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")

        .style("position", "absolute");
    
    // if length of totals is greater than 10 then grouped rest data into grouped data
    var group_data_length = 10;
    var groupedData=false;
    var total_new = totals;
    if (totals.length > group_data_length) {
        totals.sort(function (a, b) {
            return b.value - a.value;
        });
        groupedData = true;
        var groupedData = totals.slice(group_data_length, totals.length);
        total_new = totals.slice(0, group_data_length);
        var groupedTotal = 0;
        for (var i = 0; i < groupedData.length; i++) {
            groupedTotal += groupedData[i].value;
        }
        total_new.push({
            title: "Others",
            value: groupedTotal
        });
    }
  
    // setting the path
    var path = svg.selectAll('path')
    .data(pie(total_new))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
        return colors_array[i%colors_array.length] // Use color scale to get color based on index
    })
    .attr('stroke', '#fff') // border color
    .attr('stroke-width', 0.5) // border width
        .attr('transform', 'translate(0, 0)')
        .on('mouseover', function (event,d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '.85');
            donutTip
                .style("opacity", 1);
                let tagname= d.data.title;
                let num = ((d.value / d.data.all) * 100).toFixed(2) + '%';
                donutTip.html(tagname+"-"+d.value)
                .style("left", parseInt(event.pageX + 10) + "px")
                .style("top", parseInt(event.pageY - 15) + "px");
    
        })
        .on('mousemove', function (event,d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '.85');
            donutTip
                .style("opacity", 1);
                let tagname= d.data.title;
                let num = ((d.value / d.data.all) * 100).toFixed(2) + '%';
                donutTip.html(tagname+"-"+d.value)
                .style("left", parseInt(event.pageX + 10) + "px")
                .style("top", parseInt(event.pageY - 15) + "px");
    
        })
        .on('mouseout', function (d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '1');

            donutTip
                .style("opacity", 0);
        });

    // if grouped data is seleceted by user then plot another pie chart to right of the first pie chart with the grouped data 
    var othersPath = svg.selectAll('path')
    .filter(function(d) {
        return d.data.title === "Others";
    });

    var othersIndex = total_new.findIndex(function(d) {
        return d.title === "Others";
    });
    // Calculate the start and end angles for the "Others" section
    var othersStartAngle = 0;
    var othersEndAngle = 0;
    if (othersIndex !== -1) {
        // Calculate start angle
        for (var i = 0; i < othersIndex; i++) {
            othersStartAngle += pie(total_new)[i].endAngle - pie(total_new)[i].startAngle;
        }
        // Calculate end angle
        othersEndAngle = othersStartAngle + pie(total_new)[othersIndex].endAngle - pie(total_new)[othersIndex].startAngle;
    }

    var labels = svg.selectAll("text")
        .data(pie(total_new))
        .enter()
        .append("text")
        .attr("transform", function(d) {
            var pos = outerArc.centroid(d);
            pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function(d) {
            return midAngle(d) < Math.PI ? "start" : "end";
        })
        .text(function(d) {
            return d.data.title + "-" + d.value; // Adjust this based on your data structure
        });
        if (window.screen.width < 600)
        {
            labels.attr("font-size", "10px");
        }
        var lines = svg.selectAll("line")
    .data(pie(total_new))
    .enter()
    .append("line")
    .attr("x1", function (d) {
        return outerArc.centroid(d)[0];
    })
    .attr("y1", function (d) {
        return outerArc.centroid(d)[1];
    })
    .attr("x2", function (d) {
        var pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return pos[0];
    })
    .attr("y2", function (d) {
        var pos = outerArc.centroid(d);
        return pos[1];
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1);
    if (groupedData) {
othersPath.on('click', function() {
    if (d3.select('.blockHead')) {
        d3.select('.blockHead').remove();
    }
    // add style property to div with id donut
    var donutDiv = d3.select('#donut');
    var blockHead;
    if (window.screen.width>900)
    {
        donutDiv.style('display', 'flex')
        .style('flex-direction', 'row-reverse')
        .style('width',2*pie_chart_width+100+'px')
            .style('justify-content', 'space-between');
        blockHead = donutDiv.append("div")
        .attr("class", "blockHead")
        .style("width", "100px");
        blockHead.append("span")
        .attr("class", "blocktext")
        .text("Others");
        var big_donut=d3.select('#big_donut_id');
        big_donut.style('width', 2*pie_chart_width+100+'px')

    }
    else if (window.screen.width < 900)
    {
        donutDiv
        // .style('width',2*pie_chart_width+100+'px')
            .style('justify-content', 'space-between');
        blockHead = donutDiv.append("div")
        .attr("class", "blockHead")
        .style("width", "100px")
        .style("transform", "rotate(-90deg)"); // Rotate the block head
        blockHead.append("span")
            .attr("class", "blocktext")
            .text("Others");    
    }


    add_pie();
})
    }

        
};


function change_donut_property(){
    if (d3.select('.pie_added')) {
        d3.select('.pie_added').remove();
    }
    var donutDiv = d3.select('#donut');
donutDiv.style('display', null)
.style('width', pie_chart_width+'px')
    .style('justify-content', null);
    if (d3.select('.blockHead')) {
        d3.select('.blockHead').remove();
    }

var big_donut=d3.select('#big_donut_id');
big_donut.style('width', pie_chart_width+'px')
}

d3.select("button#everyone")
    .on("click", function () {
        console.log("hello");
        totals=totals_save;
        change_donut_property();
        pie2();
    })
    d3.select("button#women")
    .on("click", function () {
        console.log("hello2 ");
        change_donut_property();
        totals=totals_small;
        // if donut has added properties then remove them
       
        pie2();
    })
    d3.select("button#div1")
    .on("click", function () {
        console.log("Div1 ");
        change_donut_property();
        totals=div1;
        pie2();
    })
    d3.select("button#div2")
    .on("click", function () {
        console.log("Div2 ");
        totals=div2;
        change_donut_property();
        pie2();
    })
    d3.select("button#div3")
    .on("click", function () {
        console.log("Div3 ");
        totals=div3;
        change_donut_property();
        pie2();
    })
    d3.select("button#div4")
    .on("click", function () {
        console.log("Div4 ");
        totals=div4;
        change_donut_property();
        pie2();
    })
    
// d3.select("button#men")
//     .on("click", function () {
//         change(maleData)
//     })
pie2();


// Getting the svg element and setting the width and height
// var screenWidth = window.innerWidth;
    // var svg = document.getElementById('my_dataviz');
    var svgWidth, svgHeight;
// if (screenWidth <= 600) {
//     svgWidth = 500;
//     svgHeight = 300;
// } else if (screenWidth > 600 && screenWidth <= 900) {
//     svgWidth = 700;
//     svgHeight = 500;
// } else {
//     svgWidth = 1000;
//     svgHeight = 700;
// }

const svg = d3.select("#my_dataviz");
// var screenWidth = window.innerWidth;
var screenWidth = window.screen.width;
console.log("SCREEN",screenWidth);
    // var svg = document.getElementById('my_dataviz');
    var svgWidth, svgHeight;
    var scaleSize=100;
if (screenWidth <= 400) {
    svgWidth = 250;
    svgHeight = 300;
    scaleSize=35;
}
else if (screenWidth > 400 && screenWidth <= 600) {
    svgWidth = 400;
    svgHeight = 300;
    scaleSize=50
} else if (screenWidth > 600 && screenWidth <= 900) {
    svgWidth = 600;
    svgHeight = 500;
    scaleSize=70;
} else {
    svgWidth = 900;
    svgHeight = 700;
    // console.log(screenWidth)
    console.log("SCREEN",screenWidth);
}
svg.attr('width', svgWidth);
    svg.attr('height', svgHeight);
const 
  width = svgWidth,
  height = svgHeight;
// console.log("WIDTH",svg.attr("width"));    

// Initializing Variables
document.getElementById("slider").value = "MaxRating";
var currentCountryName = null; // Variable to store the current country name
var selectedValue = "MaxRating"; // Variable to store the selected value from the dropdown

// declaring the projection
const path = d3.geoPath(); // Path generator
const projection = d3
  .geoMercator() 
  .scale(scaleSize) // Mercator projection
  .translate([width / 2, height / 2]); // Center the map in the middle of the SVG element

const data = new Map(); // Map to store the data
var range = [0, 4000]; // Range of values for the color scale
if (selectedValue != "MaxRating") {
  // If the selected value is not MaxRating, change the range
  range = [0, 2000];
}

var colorScale = d3
  .scaleLinear() // Color scale

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
  d3.csv("Data/orgStats.csv").then(function (orgData) {
    // Filter data based on the country name
    const filteredData = orgData.filter(function (d) {
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
    filteredData.sort(function (a, b) {
      return b.Value - a.Value;
    });

    // Get the top 10 organizations
    const topOrganizations = filteredData.slice(0, 10);
    if (topOrganizations.length == 0) {
      // If no data is available, display a message
      // popupContentContainer.innerHTML = "<h1>No Data Available</h1>";
      const barchartdiv = document.querySelector("#barChart");
      console.log(barchartdiv);
      barchartdiv.innerHTML = "<h1>No Data Available</h1>";
      return `
            <h1>No Data Available</h1>`; // Return the message if no data is available
    }
    // Plot bar chart based on the selected data type
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }; // Margin for the bar chart
    var width = 400 - margin.left - margin.right; // Width of the bar chart
    var temp_width=500;
    var height = 300 - margin.top - margin.bottom; // Height of the bar chart
    var translate_width=180;
    var temp_height=500;
    var translate_top=100;
    var font_size="18px";
    var x_range=200;
    // var bar_height=
    if (screenWidth < 900)
    {
        width = 200 - margin.left - margin.right;
        temp_width=300;
        translate_width=50;
        translate_top=10;
        temp_height=300;
        font_size="12px"
    }
    if (screenWidth < 500)
    {
        width = 150 - margin.left - margin.right;
        height = 150 - margin.left - margin.right;
        temp_width=200;
        translate_width=20;
        translate_top=10;
        temp_height=200;
        font_size="8px"
        x_range=50;
    }
    const svg = d3
      .select("#barChart") // Select the bar chart div
      .append("svg") // Append an SVG element
      .attr("width", width + margin.left + margin.right + temp_width) // Set the width
      .attr("height", height + margin.top + margin.bottom + temp_height) // Set the height and append a group element to the SVG
      .append("g")
      .attr(
        "transform",
        "translate(" + (margin.left + translate_width) + "," + (margin.top + translate_top) + ")"
      ); // Translate the group element

    // Declaring x axis domain and range
    const x = d3
      .scaleBand()
      .domain(topOrganizations.map((d) => d.Organisation))
      .range([0, width + x_range])
      .padding(0.1);

    // Declaring y axis domain and range
    const y = d3
      .scaleLinear()
    //   .domain([0, d3.max(topOrganizations, (d) => +d[dataType])])
    .domain([0,4000])
      .range([height, 0]);

    // Declaring the tooltip
    var tooltip1 = d3
      .select(".popup-container")
      .append("div")
      .attr("class", "tooltip1")
      .style("opacity", 0);
    //   .html("Bhai");

    // Getting the top margin of the svg element to adjust the popout position
    const svg2 = d3.select("#page-top");
    const svgRect = svg2.node().getBoundingClientRect();
    const top_margin = svgRect.top;
    const svg3 = d3.select("#my_dataviz");
    const svgRect2 = svg3.node().getBoundingClientRect();
    const top_margin2 = svgRect2.top;

    // Appending the bars to the svg element
    svg
      .selectAll(".bar")
      .data(topOrganizations)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.Organisation))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(+d[dataType])) // Use the selected data type here
      .attr("height", (d) => height - y(+d[dataType]))
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
          .style("left", parseInt(event.pageX) - svgRect2.left + 20 + "px")
          .style(
            "top",
            parseInt(event.pageY) + top_margin - top_margin2 + "px"
          );
        // console.log("Kanda");
      })
      .on("mousemove", function (event, d) {
        // Move the tooltip with the mouse
        tooltip1
          .style("left", parseInt(event.pageX) - svgRect2.left + 20 + "px")
          .style(
            "top",
            parseInt(event.pageY) + top_margin - top_margin2 + "px"
          );
      })
      .on("mouseout", function (event, d) {
        // Change the opacity and stroke of the tooltip
        d3.select(this).style("stroke", "transparent");

        // Hide the tooltip
        tooltip1.style("opacity", 0);
      });

    // Append x axis to the svg element and rotate the text labels
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -10)
      .attr("y", 0)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("font-size", font_size);
    //   .style("font-wight", "bold")

    // Append y axis to the svg element
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .style("font-size", font_size)
      .style("font-wight", "bold");
    //   .style("font-wight", "bold")
  });

  // Add event listener to the close button after it's appended to the DOM
  popupContentContainer
    .querySelector(".close-btn")
    .addEventListener("click", function () {
      document.body.removeChild(popupContentContainer); // Remove the popup content container
    });

  return popupContent;
}

// Function to handle click event on a country
function handleCountryClick(event, d) {
  var countryName = d.properties.name; // Get the country name
  currentCountryName = countryName;
  const popup = document.createElement("div"); // Create a popup container
  popup.classList.add("popup-container"); // Add a class to the popup container

  // Get the selected value
  var temp_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
  const popupContent = generatePopupContent(countryName, temp_value); // Generate popup content
  popup.innerHTML = popupContent; // Append the popup content to the popup container

  // Get the position of the SVG element top and left
  const svg = d3.select("#page-top");
  const svgRect = svg.node().getBoundingClientRect();
  const top_margin = svgRect.top;
  const svg3 = d3.select("#my_dataviz");
  const svgRect2 = svg3.node().getBoundingClientRect();
  const top_margin2 = svgRect2.top;
  console.log(top_margin);
  // console.log(svgRect.left, svgRect.top, svgRect.width, svgRect.height)

  // Set the position and dimensions of the popup container
  popup.style.left = `${svgRect2.left}px`;
  popup.style.top = `${-top_margin + top_margin2}px`;
  popup.style.width = `${svgRect2.width}px`;
  popup.style.height = `${svgRect2.height}px`;

  document.body.appendChild(popup); // Append the popup container to the body

  // Add event listener to the close button
  const closeBtn = popup.querySelector(".close-btn");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(popup); // Remove the popup container
    make_graph(selectedValue, null); // Redraw the map and bar chart
    currentCountryName = null; // Reset the current country name
  });
}

// Function to draw the map
function make_graph(dataType, countryName) {
  // Load the data from the CSV file and the GeoJSON file
  Promise.all([
    d3.json("https://enjalot.github.io/wwsd/data/world/world-110m.geojson"),
    d3.csv("Data/countryStats.csv", function (d) {
      data.set(d.Country, +parseFloat(d[dataType])); // Use the selected data type here
    }),
  ]).then(function (loadData) {
    // Get the GeoJSON data
    let topo = loadData[0];
    console.log("hello", topo);
    let maxExportValue = d3.max(Array.from(data.values()));

    // Create the tooltip
    var tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    svg.selectAll("path").remove(); // Remove existing paths before redrawing

    svg
      .selectAll("path") // Draw the map
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
      .attr("class", function (d) {
        return "Country";
      })
      .style("opacity", 0.8)
      .on("click", function (event, d) {
        // Add click event listener to the country
        handleCountryClick(event, d);
      })
      .on("mouseover", function (event, d) {
        // Add mouseover event listener to the country
        d3.select(this) // Change the opacity and stroke of the country
          .style("opacity", 1)
          .style("stroke", "black")
          .style("stroke-width", "2px");

        // Get the value of the selected country
        var value = data.get(d.properties.name.toUpperCase()) || 0;
        var countryInfo = `Country: ${
          d.properties.name
        }<br/>${selectedValue}: ${value.toFixed(2)}`;

        // Update tooltip content and position
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip
          .html(countryInfo)
          .style("left", parseInt(event.pageX) + 20 + "px")
          .style("top", parseInt(event.pageY) + 20 + "px");
      })
      .on("mousemove", function (event, d) {
        // Add mousemove event listener to the country
        tooltip // Move the tooltip with the mouse
          .style("left", 20 + parseInt(event.pageX) + "px")
          .style("top", 20 + parseInt(event.pageY) + "px");
      })
      .on("mouseout", function (event, d) {
        // Add mouseout event listener to the country
        d3.select(this) // Change the opacity and stroke of the country
          .style("opacity", 0.8)
          .style("stroke", "transparent");

        // Hide the tooltip
        tooltip.transition().duration(500).style("opacity", 0);
      });
      make_legend(selectedValue);   
    // If a country is selected, redraw its bar chart
    if (countryName) {
      removePopup();
      // var dataType = selectedValue === "MaxRating" ? "maxRating" : "avgRating"; // Determine the dataType based on selectedValue
      // generatePopupContent(countryName, dataType); // Pass dataType to generatePopupContent
      const popup = document.createElement("div"); // Create a popup container
      popup.classList.add("popup-container"); // Add a class to the popup container

      // Get the selected value
      var temp_value =
        selectedValue === "MaxRating" ? "maxRating" : "avgRating";
      const popupContent = generatePopupContent(currentCountryName, temp_value); // Generate popup content
      popup.innerHTML = popupContent; // Append the popup content to the popup container

      // Get the position of the SVG element top and left
      const svg = d3.select("#page-top");
      const svgRect = svg.node().getBoundingClientRect();
      const top_margin = svgRect.top;
      const svg3 = d3.select("#my_dataviz");
      const svgRect2 = svg3.node().getBoundingClientRect();
      const top_margin2 = svgRect2.top;
      console.log(top_margin);
      // console.log(svgRect.left, svgRect.top, svgRect.width, svgRect.height)

      // Set the position and dimensions of the popup container
      popup.style.left = `${svgRect2.left}px`;
      popup.style.top = `${-top_margin + top_margin2}px`;
      popup.style.width = `${svgRect2.width}px`;
      popup.style.height = `${svgRect2.height}px`;

      document.body.appendChild(popup); // Append the popup container to the body

      // Add event listener to the close button
      const closeBtn = popup.querySelector(".close-btn");
      closeBtn.addEventListener("click", function () {
        document.body.removeChild(popup); // Remove the popup container
        make_graph(selectedValue, null); // Redraw the map and bar chart
        currentCountryName = null; // Reset the current country name
      });
    }
  });
}

// Add event listener to the dropdown
document.getElementById("slider").addEventListener("change", function () {
  // Get the selected value
  selectedValue = this.value;
  console.log("seect",selectedValue);
  // range = [0, 4000]; // Range of values for the color scale
  if (selectedValue == "MaxRating") {
    // If the selected value is not MaxRating, change the range
    range = [0, 4000];
  }
  else
  {
    range= [0,2600];
  }
  colorScale = d3
  .scaleLinear() // Color scale

  .domain(range) // Define the range of values
  // .range(["#ddddff", "#0000ff"]);
  .range(["#e5f5e0", "#006d2c"]);
  // Remove the existing popup if it exists
  removePopup();
//   d3.select(".legendMap").selectAll("*").remove();
  // Redraw the map and bar chart with the updated data based on the selected value
  make_graph(selectedValue, currentCountryName);
  make_legend(selectedValue);
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

function make_legend(type){
    d3.select(".legendMap").selectAll("*").remove();
    // var screenWidth = window.innerWidth;
    var legendWidth = 400;
    if (screenWidth<500)
    {
        legendWidth=200;
    }
  var legendHeight = 20;
  var legendMargin = { top: 10, right: 20, bottom: 10, left: 20 };
  
  // Append legend SVG to the container
  var legendSvg = d3.select(".legendMap")
    .append("svg")
    .attr("class", "legendMap")
    .attr("width", legendWidth + legendMargin.left + legendMargin.right)
    .attr("height", legendHeight + legendMargin.top + legendMargin.bottom+30)
    .append("g")
    .attr("transform", "translate(" + legendMargin.left + "," + legendMargin.top + ")")
    .style("font-size", "12px")
    .style("font-weight", "bold");
  
  // Create color gradient for legend
  var defs = legendSvg.append("defs");
  var linearGradient = defs.append("linearGradient")
    .attr("id", "legendGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");
  
  linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#e5f5e0");
  
  linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#006d2c");
  
  // Create legend rectangle
  legendSvg.append("rect")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#legendGradient)");
  
  // Add legend scale
  range=[0,0]
  if(type=="MaxRating"){
    range=[0,4000]
  }else{
    range=[0,2500]
  }

    var domainMax = type === "MaxRating" ? 4000 : 4000;
    var domainStep = domainMax / 4;
    var domainValues = [0, domainStep, domainStep * 2, domainStep * 3, domainStep * 4];

    var legendScale = d3.scaleLinear()
        .domain(domainValues)
        .range([0, legendWidth/4]);
  
  var legendAxis = d3.axisBottom(legendScale)
    .tickSize(5)
    .ticks(5);
  
  legendSvg.append("g")
    .attr("class", "legendAxis")
    .attr("transform", "translate(0," + legendHeight + ")")
    .call(legendAxis);
  }
}
window.addEventListener('resize', MapAndPie);
MapAndPie();
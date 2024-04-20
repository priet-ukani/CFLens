getData();  
function getData() {
    var handle1 = document.getElementById('userId1').value.trim();
    var handle2 = document.getElementById('userId2').value.trim();
    if(handle1=='' && handle2==''){
        // showing default 
        handle1 = 'priet';
        handle2 = 'Garvit.Gupta';
    }
    if ((handle1 == '' && handle2!='') || (handle2 === '' && handle1!='')) {
        alert('Please enter both user handles.');
        return;
    }

    var promises = [
        fetchUserData(handle1),
        fetchUserData(handle2)
    ];

    Promise.all(promises)
        .then(results => {
            var validResults = results.filter(result => result !== null);
            if (validResults.length > 0) {
                createChart(validResults);
            } else {
                alert('No valid user data found.');
            }
        });
}

function fetchUserData(handle) {
    var apiUrl = 'https://codeforces.com/api/user.rating?handle=' + handle;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                return { handle: handle, data: data.result };
            } else {
                alert('User "' + handle + '" not found or error in fetching data.');
                return null;
            }
        })
        .catch(error => {
            console.error('Error fetching data for ' + handle + ':', error);
            return null;
        });
}

function createChart(userData) {
var parseTime = d3.timeParse('%s');
var margin = { top: 20, right: 30, bottom: 30, left: 50 },
width = 800 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// Remove existing chart
d3.select('#svg-chart').remove();

var linechart_svg = d3.select('#charts')
.append('svg')
.attr('id', 'svg-chart')
.attr('width', width + margin.left + margin.right)
.attr('height', height + margin.top + margin.bottom+200)
.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var x = d3.scaleTime()
.range([0, width]);

var y = d3.scaleLinear()
.range([height, 0]);

var line = d3.line()
.x(function(d) { return x(d.time); })
.y(function(d) { return y(d.rating); });

var allData = [];
userData.forEach(function(user) {
var chartData = user.data.map(function(record) {
    return {
        time: parseTime(record.ratingUpdateTimeSeconds),
        rating: record.newRating
    };
});
allData.push({ user: user.handle, data: chartData });
});

x.domain(d3.extent(allData.flatMap(d => d.data), function(d) { return d.time; }));
y.domain([
d3.min(allData.flatMap(d => d.data), function(d) { return d.rating; }) - 100,
d3.max(allData.flatMap(d => d.data), function(d) { return d.rating; }) + 100
]).nice();

linechart_svg.append('g')
.attr('transform', 'translate(0,' + height + ')')
.call(d3.axisBottom(x).tickFormat(d3.timeFormat('%B %Y')).tickSize(0))
.selectAll('text')
.style('text-anchor', 'end')
.attr('transform', 'rotate(-90)')
.attr('dx', '-0.8em')
.attr('dy', '0.15em')
.style('font-weight', 'bold')
.call(function(selection) {
    selection._groups[0][0].querySelectorAll('text').forEach(function(text) {
        text.setAttribute('transform', 'rotate(-90)');
        text.style.fontWeight = 'bold'; // Make x-axis labels bold
    });
});

linechart_svg.append('g')
.call(d3.axisLeft(y))
.selectAll('text')
.style('font-weight', 'bold'); // Make y-axis labels bold

var colors = ['#1f77b4', '#ff7f0e'];
// console.log(allData);
allData.forEach(function(userData, i) {
var user = userData.user;
var chartData = userData.data;

linechart_svg.append('path')
    .datum(chartData)
    .attr('class', 'line')
    .attr('d', line)
    .style('stroke', colors[i]);

linechart_svg.selectAll('.dot'+i)
    .data(chartData)
    .enter().append('circle')
    .attr('class', 'dot'+i)
    .attr('cx', function(d) { return x(d.time); })
    .attr('cy', function(d) { return y(d.rating); })
    .attr('r', 5)
    .style('fill', colors[i])
    .style('stroke', 'black')
    .style('stroke-width', '1.5px')
    .on('mouseover', function(event, d) {
        linecharttooltip.style('opacity', 1)
            .html('<strong>' + user + '</strong><br>' +'<strong>'+formatlinecharttooltipDate(d.time) +'</strong><br>'+ '<strong>'+'Rating: ' + d.rating+'</strong>')
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 15) + 'px');
    })
    .on('mouseout', function() {
        linecharttooltip.style('opacity', 0);
    });

// Add legend
var legend = linechart_svg.append('g')
    .attr('class', 'legend')
    .attr('transform', 'translate(' + (width - 100) + ',' + (i * 20) + ')');

legend.append('rect')
    .attr('width', 18)
    .attr('height', 18)
    .style('fill', colors[i]);

legend.append('text')
    .attr('class', 'legend-text')
    .attr('x', 24)
    .attr('y', 9)
    .attr('dy', '.35em')
    .text(user);
});

var linecharttooltip = d3.select('#charts')
.append('div')
.attr('class', 'linecharttooltip')
.style('opacity', 0);

function formatlinecharttooltipDate(date) {
var format = d3.timeFormat('%d %B %Y');
return format(date);
}
}
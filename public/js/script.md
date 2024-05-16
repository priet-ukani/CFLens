# World Map and Bar Chart Visualization Readme

## Logic Flow:

1. Initialize variables and set up the SVG element and Mercator projection for the map.
2. Define a color scale based on the selected value (`MaxRating` or `avgRating`).
3. Define `generatePopupContent` function to create a popup container with a bar chart for the selected country and data type.
4. Define `handleCountryClick` function to handle click event on a country and create a popup container with the bar chart.
5. Define `make_graph` function to draw the world map and handle hover and click events on countries.
6. Add event listener to dropdown to update map and bar chart based on selected value.
7. Define `removePopup` function to remove existing popup container.
8. Call `make_graph` function initially to draw map and bar chart with default data.

## Data Flow:

1. Load data from GeoJSON file (`world-110m.geojson`) for world map and CSV file (`countryStats.csv`) for country data.
2. Load CSV data into `Map` object called `data`, with country names as keys and data values (`maxRating` or `avgRating`) as values.
3. When `make_graph` is called, use GeoJSON data to draw world map and `data` Map to set fill color of each country.
4. When country is clicked, call `handleCountryClick` function to get country name and call `generatePopupContent` function.
5. `generatePopupContent` fetches data from another CSV file (`orgStats.csv`) and filters data based on selected country name.
6. Filtered data is sorted, and top 10 organizations are selected for display in bar chart.
7. `generatePopupContent` creates new SVG element for bar chart and appends it to popup container.
8. Bar chart is drawn using filtered and sorted data, displaying organization names and their data values (`maxRating` or `avgRating`) as bar heights.
9. When dropdown value changes, `make_graph` function is called again with updated `selectedValue` and current `currentCountryName`. If country is selected, `generatePopupContent` function is called again with updated data type to refresh bar chart.

Data flows from CSV files to `data` Map and then to map and bar chart visualizations. GeoJSON data is used to draw world map, while country and organization data from CSV files are used to color countries and generate bar chart, respectively.

## Pie Chart Visualization with D3.js

This JavaScript function `pie2()` creates a pie chart visualization using the D3.js library. Below is a breakdown of the logic and data flow:

### Logic Flow:

1. **SVG Removal:** The function starts by removing any existing SVG element inside the `#donut` div element.
   
2. **Dimensions and Scales Setup:** It sets up the dimensions and scales for the pie chart, including the width, height, radius, donut width, and color scale.
   
3. **SVG Element Creation:** It creates an SVG element and appends it to the `#donut` div.
   
4. **Arc and Pie Generators:** It defines the arc and pie generators, which determine the shape and positioning of the pie slices.
   
5. **Pie Slice Appending:** It appends the pie slices (paths) to the SVG element, using the `totals` data and the pie generator.
   
6. **Mouse Events Binding:** It binds mouse events (`mouseover`, `mousemove`, and `mouseout`) to each pie slice, controlling the opacity and displaying a tooltip with the slice's title and value.
   
7. **Legend (Optional):** It includes commented-out code for creating a legend, which is not currently being used.
   
8. **Change Function (Optional):** It includes commented-out code for a `change()` function, which is not currently being used.

### Data Flow:

The data being visualized in the pie chart is assumed to be contained in the `totals` variable, which is likely defined elsewhere in the code. The `pie2()` function does not receive any data as an argument but relies on the `totals` variable being available in the same scope.

The data flow within the function is as follows:

1. **Pie Generator Initialization:** The `pie` generator is initialized with a `value` function that retrieves the `value` property from each data object in the `totals` array.
   
2. **Pie Data Generation:** The `pie(totals)` function call generates an array of pie slice data objects, which are then bound to the paths using the `data()` method.
   
3. **Color Determination:** For each path, the `fill` color is determined by passing the `title` property of the corresponding data object to the `color` scale.
   
4. **Tooltip Display:** When mouse events occur, the tooltip displays the `title` and `value` properties of the corresponding data object.

So, the `totals` data array is the source of the data being visualized, and its structure (containing `value` and `title` properties) is expected by the `pie2()` function to create the pie chart and tooltip.

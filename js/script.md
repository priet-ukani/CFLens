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

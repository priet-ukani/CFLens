import React from "react";
import { ResponsiveBump } from "@nivo/bump";

const data = [
  {
    id: "prietukani",
    data: [
      { x: 15, y: 1 },
      { x: 30, y: 8 },
      { x: 45, y: 8 },
      { x: 60, y: 3 },
      { x: 75, y: 1 },
      { x: 90, y: 1 },
      { x: 105, y: 1 },
      { x: 120, y: 2 },
    ],
  },
  {
    id: "Garvit.Gupta",
    data: [
      { x: 15, y: 5 },
      { x: 30, y: 3 },
      { x: 45, y: 6 },
      { x: 60, y: 5 },
      { x: 75, y: 4 },
      { x: 90, y: 3 },
      { x: 105, y: 2 },
      { x: 120, y: 5 },
    ],
  },
  {
    id: "Harry_03",
    data: [
      { x: 15, y: 4 },
      { x: 30, y: 4 },
      { x: 45, y: 4 },
      { x: 60, y: 6 },
      { x: 75, y: 3 },
      { x: 90, y: 4 },
      { x: 105, y: 3 },
      { x: 120, y: 8 },
    ],
  },
  {
    id: "O.M.",
    data: [
      { x: 15, y: 3 },
      { x: 30, y: 7 },
      { x: 45, y: 2 },
      { x: 60, y: 1 },
      { x: 75, y: 8 },
      { x: 90, y: 6 },
      { x: 105, y: 6 },
      { x: 120, y: 4 },
    ],
  },
  {
    id: "SMP4804",
    data: [
      { x: 15, y: 7 },
      { x: 30, y: 6 },
      { x: 45, y: 9 },
      { x: 60, y: 2 },
      { x: 75, y: 9 },
      { x: 90, y: 5 },
      { x: 105, y: 5 },
      { x: 120, y: 6 },
    ],
  },
  {
    id: "Tanishq",
    data: [
      { x: 15, y: 8 },
      { x: 30, y: 1 },
      { x: 45, y: 7 },
      { x: 60, y: 4 },
      { x: 75, y: 5 },
      { x: 90, y: 2 },
      { x: 105, y: 4 },
      { x: 120, y: 1 },
    ],
  },
  {
    id: "Neel_174",
    data: [
      { x: 15, y: 9 },
      { x: 30, y: 9 },
      { x: 45, y: 5 },
      { x: 60, y: 7 },
      { x: 75, y: 2 },
      { x: 90, y: 7 },
      { x: 105, y: 8 },
      { x: 120, y: 7 },
    ],
  },
  {
    id: "umangp23",
    data: [
      { x: 15, y: 2 },
      { x: 30, y: 2 },
      { x: 45, y: 3 },
      { x: 60, y: 9 },
      { x: 75, y: 6 },
      { x: 90, y: 8 },
      { x: 105, y: 7 },
      { x: 120, y: 3 },
    ],
  },
  {
    id: "architP",
    data: [
      { x: 15, y: 6 },
      { x: 30, y: 5 },
      { x: 45, y: 1 },
      { x: 60, y: 8 },
      { x: 75, y: 7 },
      { x: 90, y: 9 },
      { x: 105, y: 9 },
      { x: 120, y: 9 },
    ],
  },
];
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

const BumpChart = () => (
  
  <div
    style={{
      width: (screenWidth*90)/100,
      margin: "0 auto",
      height: (screenHeight*35)/100,
      backgroundColor: "transparent",
    }}
  >


    <ResponsiveBump
    data={data}
    colors={{ scheme: 'category10' }}
    lineWidth={3}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    startLabelPadding={17}
    startLabelTextColor={{ from: 'color', modifiers: [] }}
    pointSize={11}
    activePointSize={16}
    inactivePointSize={0}
    pointColor={{ from: 'serie.color', modifiers: [] }}
    pointBorderWidth={3}
    activePointBorderWidth={3}
    pointBorderColor={{ from: 'serie.color', modifiers: [] }}
    axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time(in Minutes)',
        legendPosition: 'middle',
        legendOffset: -36,
        truncateTickAt: 0
    }}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time(in Minutes)',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Rank',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0
    }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />
  </div>
);

export default BumpChart;

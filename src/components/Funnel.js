import React from "react";
import { ResponsiveFunnel } from "@nivo/funnel";

const data=[
    {
      "id": "step_sent",
      "value": 34036,
      "label": "Total Participants"
    },
    // {
    //   "id": "step_viewed",
    //   "value": 23095,
    //   "label": "Submitted One Solution"
    // },
    {
      "id": "step_clicked",
      "value": 16618,
      "label": "Solved One Problem"
    },
    {
      "id": "step_add_to_card",
      "value": 5959,
      "label": "Solved Two Problems"
    },
    {
      "id": "step_purchased",
      "value": 3002,
      "label": "Solved Three Problems"
    },
    {
      "id": "step_completed",
      "value": 1149,
      "label": "Solved Four Problems"
    },
    {
      "id": "step_completed2",
      "value": 168,
      "label": "Solved Five Problems"
    }
  ]
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var funnWidth=(screenWidth*90)/100;
  var funnHeight=(screenHeight*35)/100;
  if (screenWidth > 900) {
    funnWidth=(screenWidth*50)/100;
    funnHeight=(screenHeight*60)/100;
  }
  
const Funnel = () => (
  <div 
  style={{
    width: funnWidth,
    margin: "0 auto",
    height: funnHeight,
    backgroundColor: "transparent",
  }}
  >
    <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: 'yellow_orange_red' }}
        borderWidth={20}
        borderColor={{ from: 'color', modifiers: [] }}
        borderOpacity={0.7}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '3'
                ]
            ]
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="gentle"
    />
  </div>
);

export default Funnel;
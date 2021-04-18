import ChartBar from "./ChartBar";
import "./Chart.css";
import React from "react";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.datapoints.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={null}
          label={point.label}
          key={point.id}
        />
      ))}
    </div>
  );
};

export default Chart;

import ChartBar from "./ChartBar";
import "./Chart.css";
import React from "react";

const Chart = (props) => {
  const maximum = Math.max(...props.datapoints.map((point) => point.value));
  return (
    <div className="chart">
      {props.datapoints.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={maximum}
          label={point.label}
          key={point.id}
        />
      ))}
    </div>
  );
};

export default Chart;

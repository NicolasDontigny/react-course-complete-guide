import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const totalMaximum = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;

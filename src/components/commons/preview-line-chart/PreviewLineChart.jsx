import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

function PreviewLineChart({metadata}) {
  const chart_options = {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      forceNiceScale: true,
      min: metadata.minimumValue,
      max: metadata.maximumValue,
    },
    xaxis: {
      categories: metadata.xAxisLabels,
    },
  };

  return <Chart options={chart_options} series={metadata.seriesValue} />;
}

export default PreviewLineChart;

PreviewLineChart.propTypes = {
  /**
   * minimum value the slider can hold
   */
  minimumValue: PropTypes.number,
  /**
   * maximum value the slider can hold
   */
  maximumValue: PropTypes.number,
  /**
   * Array of objects with name and data key. Name corresponds to factor name
   * and data is a array  of values in the order of xAxixLabels
   */
  seriesValue: PropTypes.array,
  /**
   * Array of Names for x axis values
   */
  xAxisLabels: PropTypes.array,
};

PreviewLineChart.defaultProps = {
  seriesValue: [
    {
      name: "Honda",
      data: [4, 8, 9, 3, 2],
    },
    {
      name: "Yamaha",
      data: [5, 3, 10, 4, 5],
    },
    {
      name: "Kawasaki",
      data: [10, 8, 3, 7, 9],
    },
    {
      name: "Suzuki",
      data: [6, 9, 2, 8, 3],
    },
  ],
  minimumValue: 1,
  maximumValue: 10,
  xAxisLabels: [
    "Performance",
    "Scalability",
    "Price",
    "Availability",
    "Adaptability",
  ],
};

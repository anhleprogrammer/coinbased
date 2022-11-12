import { React, useState, useEffect } from "react";
import { exportedMethods } from "../utils/alchemy.js";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function CoinInfo(props) {
  const id = props.id;
  const url = exportedMethods.historicalChart(id, "usd", 7);
  const [historicalData, setHistoricalData] = useState();

  const fetchPrice = async () => {
    try {
      const data = await axios.get(url);
      setHistoricalData(data.data.prices);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPrice();
  }, []);
  const chartOptions = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    interaction: {
      intersect: false,
      mode: "nearest",
      axis: "x",
    },

    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          align: "center",
          maxTicksLimit: 0,
        },
        title: {
          color: "red",
          display: true,
          text: "Time",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => {
            return "$" + value;
          },
        },
        title: {
          color: "red",
          display: true,
          text: "Price",
        },
      },
    },
  };

  const result = [];

  return (
    <>
      <div className="flex justify-around p-4">
        <div className="w-9/12">
          {historicalData ? (
            <Line
              datasetIdKey="id"
              data={{
                labels: historicalData.map((data) => {
                  let date = new Date(data[0]);
                  if (!result.includes(date.getDate())) {
                    result.push(date.getDate());
                    if (date.getHours() === 0)
                      return date.getMonth() + 1 + "/" + date.getDate();
                  } else return "";
                }),
                datasets: [
                  {
                    data: historicalData.map((data) => {
                      return data[1];
                    }),
                    label: `Price `,
                  },
                ],
              }}
              options={chartOptions}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <p>Coin Infor here</p>
        </div>
      </div>
    </>
  );
}

export default CoinInfo;

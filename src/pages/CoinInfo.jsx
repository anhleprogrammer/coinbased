import { React, useState, useEffect } from "react";
import { exportedMethods } from "../utils/apiURL";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function CoinInfo(props) {
  const id = props.id;
  const [time, setTime] = useState(1);
  const url = exportedMethods.historicalChart(id, "usd", time);

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
  }, [time]);
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
          maxRotation: 0,
          minRotation: 0,
          align: "center",
          autoSkip: true,

          maxTicksLimit: 7,
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
  const displayTime = () => {
    let result = [];
    if (time === 1)
      result = historicalData
        ? historicalData.map((data) => {
            let date = new Date(data[0]);
            const convertTime = () => {
              let hour = date.getHours();
              let minutes = date.getMinutes();
              let time = "";
              let midday = "pm";
              if (hour > 12) {
                hour = hour - 12;
                time =
                  minutes < 10 ? hour + ":0" + minutes : hour + ":" + minutes;
              } else {
                midday = "am";
                time =
                  minutes < 10 ? hour + ":0" + minutes : hour + ":" + minutes;
              }
              return time + midday;
            };
            return convertTime();
          })
        : "";
    else
      result = historicalData
        ? historicalData.map((data) => {
            let date = new Date(data[0]);
            return date.getMonth() + 1 + "/" + date.getDate();
          })
        : "";
    return result;
  };

  return (
    <>
      <div className="flex justify-around p-4">
        <div className="w-9/12">
          {historicalData ? (
            <Line
              datasetIdKey="id"
              data={{
                labels: displayTime(),
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
          <div className="m-6 child:rounded child:w-1/6 child:border flex justify-evenly text-black">
            <button className="py-2" onClick={() => setTime(1)}>
              1 Day
            </button>
            <button className="py-2" onClick={() => setTime(7)}>
              1 Week
            </button>
            <button className="py-2" onClick={() => setTime(30)}>
              1 Month
            </button>
            <button className="py-2" onClick={() => setTime(365)}>
              1 Year
            </button>
          </div>
        </div>
        <div>
          <p>Coin Infor here</p>
        </div>
      </div>
    </>
  );
}

export default CoinInfo;

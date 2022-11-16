import { React, useState, useEffect } from "react";
import { exportedMethods } from "../utils/apiURL";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function CoinInfo(props) {
  const [coin, setCoin] = useState(null);
  const [selected, setSelected] = useState(0);
  const [time, setTime] = useState(1);
  const [historicalData, setHistoricalData] = useState();
  const id = props.id;
  const convertValue = (val) => {
    return val.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };
  const formatCash = (n) => {
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };
  const fetchPrice = async () => {
    try {
      const url = exportedMethods.historicalChart(id, "usd", time);
      const data = await axios.get(url);
      setHistoricalData(data.data.prices);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchCoinInfor = async () => {
    try {
      const url = exportedMethods.coinInfo(id);
      const data = await axios.get(url);
      setCoin(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPrice();
    fetchCoinInfor();
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
    plugins: {
      legend: {
        display: false,
      },
      chartAreaBorder: {
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
    },

    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          align: "inner",
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
          maxTicksLimit: 7,
        },
        title: {
          color: "red",
          display: true,
          text: "Price",
        },
        grid: {
          display: false,
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
  const displayButtons = () => {
    return (
      <div className="w-1/3 child:cursor-pointer flex child:w-1/4 text-black  ">
        <p
          className={`py-2 ${
            selected === 0
              ? `text-indigo-500 underline underline-offset-4 text-white`
              : ""
          }`}
          onClick={() => {
            setSelected(0);
            setTime(1);
          }}
        >
          1D
        </p>
        <p
          className={`py-2 ${
            selected === 1
              ? `text-indigo-500 underline underline-offset-4 text-white`
              : ""
          }`}
          onClick={() => {
            setSelected(1);
            setTime(7);
          }}
        >
          1W
        </p>
        <p
          className={`py-2 ${
            selected === 2
              ? `text-indigo-500 underline underline-offset-4 text-white`
              : ""
          }`}
          onClick={() => {
            setSelected(2);
            setTime(30);
          }}
        >
          1M
        </p>
        <p
          className={`py-2 ${
            selected === 3
              ? `text-indigo-500 underline underline-offset-4 text-white`
              : ""
          }`}
          onClick={() => {
            setSelected(3);
            setTime(365);
          }}
        >
          1Y
        </p>
      </div>
    );
  };
  const displayCoinInfor = () => {
    let priceChangePercentage = "price_change_percentage_24h";
    if (selected === 1) priceChangePercentage = "price_change_percentage_7d";
    else if (selected === 2)
      priceChangePercentage = "price_change_percentage_30d";
    else priceChangePercentage = "price_change_percentage_1y";
    if (coin)
      return (
        <div className="flex gap-2 pl-20 text-2xl">
          <p>${convertValue(coin.market_data.current_price.usd)}</p>
          <p
            className={
              coin.market_data[`${priceChangePercentage}`] > 0
                ? "text-green-500"
                : "text-red-500"
            }
          >
            ({coin.market_data[`${priceChangePercentage}`].toFixed(2)}%)
          </p>
        </div>
      );
  };
  console.log(coin);

  return (
    <>
      <div className="flex justify-around">
        <div className="w-8/12">
          {coin ? (
            <div className="flex items-center gap-2 p-2 pl-20 text-3xl">
              <img src={coin.image.small} />
              <p>{coin.name}</p>
              <p className="  text-gray-500">{coin.symbol.toUpperCase()}</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center justify-between">
            {displayCoinInfor()}
            {displayButtons()}
          </div>

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
        </div>
        <p>Call to action below here - Work in progress</p>
      </div>
    </>
  );
}

export default CoinInfo;

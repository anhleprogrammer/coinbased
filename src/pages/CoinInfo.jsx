import { React, useState, useEffect } from "react";
import { exportedMethods } from "../utils/apiURL";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import parse from "html-react-parser";

function CoinInfo(props) {
  const [coin, setCoin] = useState(null);
  const [selected, setSelected] = useState(0);
  const [time, setTime] = useState(1);
  const [historicalData, setHistoricalData] = useState();
  const id = props.id;
  const [hoverPrice, setHoverPrice] = useState(0);
  const [hoverPercentage, setPercentage] = useState(0);
  let previousVal = historicalData ? historicalData[0][1] : 0;
  let priceChangePercentage = "price_change_percentage_24h";

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
  const move$ = (str) => {
    str = str + "";
    if (str.includes("-")) str = str.slice(1);
    return Number(str);
  };
  useEffect(() => {
    fetchPrice();
    fetchCoinInfor();
  }, [time]);

  Chart.defaults.font.size = 14;
  Chart.defaults.backgroundColor = "red";
  Chart.defaults.borderColor = "#6366f1";
  Chart.defaults.color = "white";
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
      tooltip: {
        callbacks: {
          afterFooter: function (chart) {
            let hoverP = chart[0].formattedValue.replace(",", "");
            setHoverPrice(chart[0].formattedValue);
            setPercentage(((hoverP - previousVal) / previousVal) * 100);
          },
        },
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

        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => {
            return "$" + value;
          },
          maxTicksLimit: 5,
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
            return (
              date.toLocaleString("default", { month: "short" }) +
              " " +
              date.getDate()
            );
          })
        : "";
    return result;
  };
  const displayButtons = () => {
    return (
      <div className="w-1/3 child:cursor-pointer flex child:w-1/5">
        <p
          className={`py-2 ${
            selected === 0
              ? `text-indigo-500 underline underline-offset-4 text-white`
              : ""
          }`}
          onClick={() => {
            setSelected(0);
            setTime(1);
            setHoverPrice(convertValue(coin.market_data.current_price.usd));
            setPercentage(coin.market_data[`${priceChangePercentage}`]);
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
            setHoverPrice(convertValue(coin.market_data.current_price.usd));
            setPercentage(coin.market_data[`${priceChangePercentage}`]);
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
            setHoverPrice(convertValue(coin.market_data.current_price.usd));
            setPercentage(coin.market_data[`${priceChangePercentage}`]);
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
            setHoverPrice(convertValue(coin.market_data.current_price.usd));
            setPercentage(coin.market_data[`${priceChangePercentage}`]);
          }}
        >
          1Y
        </p>
      </div>
    );
  };
  const displayCoinPriceAndChange = () => {
    if (selected === 1) priceChangePercentage = "price_change_percentage_7d";
    else if (selected === 2)
      priceChangePercentage = "price_change_percentage_30d";
    else priceChangePercentage = "price_change_percentage_1y";
    if (coin)
      return (
        <div className="flex gap-2 pl-6 text-2xl">
          <p>
            $
            {hoverPrice !== 0
              ? hoverPrice
              : convertValue(coin.market_data.current_price.usd)}
          </p>

          <p
            className={
              coin.market_data[`${priceChangePercentage}`] > 0
                ? "text-green-500"
                : "text-red-500"
            }
          >
            (
            {hoverPercentage !== 0
              ? hoverPercentage.toFixed(2)
              : coin.market_data[`${priceChangePercentage}`].toFixed(2)}
            %)
          </p>
        </div>
      );
  };
  const displayCallToAction = () => {
    return (
      <div className="w-3/12">
        <img className="w-full" src="/cta.png" />
        <div className="w-11/12 flex flex-col gap-4 m-auto">
          <p className="text-2xl">Trade {coin && coin.name} today</p>
          <p className="text-slate-500">
            Create account with Coinbased to buy and sell {coin && coin.name} on
            the most amazing crypto exchange
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white border-2  border-indigo-500 hover:border-indigo-700  py-2 rounded-full">
            Buy {coin && coin.name}
          </button>
        </div>{" "}
      </div>
    );
  };
  const displayCoinDescription = () => {
    return (
      <div className="px-20 mb-4">
        <div className="bg-indigo-500 p-8 rounded-2xl children-p:align-center">
          <p className="text-2xl mb-4">Market Stats</p>
          <div className="grid grid-cols-4 gap-2 text-white">
            <div>
              {" "}
              <p>Total Market Cap</p>
              <p className="text-gray-200">
                ${formatCash(coin.market_data.market_cap.usd)}
              </p>
            </div>
            <div>
              {" "}
              <p>Market Cap Rank</p>
              <p className="text-gray-200">{coin.market_cap_rank}</p>
            </div>
            <div>
              <p>Total Supply</p>
              <p className="text-gray-200">
                ${formatCash(coin.market_data.total_supply)}
              </p>
            </div>
            <div>
              <p>Total Volume</p>
              <p className="text-gray-200">
                ${formatCash(coin.market_data.total_volume.usd)}
              </p>
            </div>

            <div>
              <p>Low 24h</p>
              <p className="text-gray-200">${coin.market_data.low_24h.usd}</p>
            </div>
            <div>
              <p>High 24h</p>
              <p className="text-gray-200">${coin.market_data.high_24h.usd}</p>
            </div>
            <div>
              {" "}
              <p>Circulating Supply</p>
              <p className="text-gray-200">
                ${formatCash(coin.market_data.circulating_supply)}
              </p>
            </div>

            <div>
              {" "}
              <p>Price Change 24h</p>
              <p className="text-gray-200">
                {coin.market_data.price_change_24h < 0
                  ? "-$" +
                    convertValue(move$(coin.market_data.price_change_24h))
                  : "$" + convertValue(coin.market_data.price_change_24h)}
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-indigo-500   rounded-2xl my-8">
          {" "}
          <p className="text-2xl mb-4 ">About {coin.name}</p>
          <p className="text-gray-200">{parse(coin.description.en)}</p>
        </div>
      </div>
    );
  };
  const displayCoinInforHeader = () => {
    return (
      <div className="flex items-center p-2 text-3xl gap-4">
        <img src={coin.image.small} />
        <p>{coin.name}</p>
        <p className="text-gray-400">{coin.symbol.toUpperCase()}</p>
      </div>
    );
  };
  return (
    <>
      {coin && (
        <div className="justify-around bg-gray-900 h-screen overflow-auto	 text-white ">
          <div className="flex p-8">
            <div className="w-9/12">
              <div className="flex items-center justify-between px-4">
                <div>
                  {displayCoinInforHeader()}
                  {displayCoinPriceAndChange()}
                </div>

                {displayButtons()}
              </div>
              {historicalData && (
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
              )}
            </div>
            {displayCallToAction()}
          </div>
          {displayCoinDescription()}
        </div>
      )}
    </>
  );
}

export default CoinInfo;

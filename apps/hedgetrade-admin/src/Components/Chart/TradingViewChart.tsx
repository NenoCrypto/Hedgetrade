import React, { useEffect, useRef, useState } from "react";
import { ColorType, createChart, ISeriesApi, IChartApi } from "lightweight-charts";
import { MarketDropdown } from "../Form/MarketDropdown";

// Define the props interface
interface TradingViewChartProps {
  selectedPair: string;
  setSelectedPair: React.Dispatch<React.SetStateAction<string>>;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ selectedPair, setSelectedPair }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [candlestickSeries, setCandlestickSeries] = useState<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 380,
        layout: {
          textColor: '#f2f2f2',
          background: {
            type: ColorType.Solid,
            color: '#171717',
          },
        },
        grid: {
          vertLines: {
            color: '#171717',
          },
          horzLines: {
            color: '#171717',
          },
        },
        timeScale: {
          borderColor: '#cccccc',
        },
      });

      chartRef.current = chart;

      const series = chart.addCandlestickSeries({
        upColor: '#4caf50',
        downColor: '#f44336',
        borderDownColor: '#f44336',
        borderUpColor: '#4caf50',
        wickDownColor: '#f44336',
        wickUpColor: '#4caf50',
      });

      setCandlestickSeries(series);

      // Resize chart on window resize
      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
      };
      window.addEventListener('resize', handleResize);

      // Clean up the chart on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (candlestickSeries && selectedPair) {
      // Fetch candlestick data from Binance
      fetch(`https://api.binance.com/api/v3/klines?symbol=${selectedPair}&interval=1d&limit=100`)
        .then(response => response.json())
        .then(data => {
          const formattedData = data.map((item: any) => ({
            time: item[0] / 1000, // convert to seconds
            open: parseFloat(item[1]),
            high: parseFloat(item[2]),
            low: parseFloat(item[3]),
            close: parseFloat(item[4]),
          }));

          // Set data to the chart
          candlestickSeries.setData(formattedData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [candlestickSeries, selectedPair]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* <MarketDropdown
        value={selectedPair}
        onChange={(event) => setSelectedPair(event.target.value as string)}
        onBlur={() => {}}
        name="tradingPair"
      /> */}
      <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '380px' }} />
    </div>
  );
};

export default TradingViewChart;

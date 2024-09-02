import React, { useEffect, useRef, useState } from "react";
import { ColorType, createChart, ISeriesApi, IChartApi } from "lightweight-charts";
import { DemoData } from "./data";

const TradingViewChart: React.FC = () => {
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
            color: '#303030',
          },
        },
        grid: {
          vertLines: {
            color: '#303030',
          },
          horzLines: {
            color: '#303030',
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

      // Set initial data
      series.setData(DemoData);

      // Adding markers to the series
      series.setMarkers([
        {
          time: '2023-08-02',
          position: 'aboveBar',
          color: '#ff0000',
          shape: 'arrowDown',
          text: 'Sell Signal',
        },
        {
          time: '2023-08-04',
          position: 'belowBar',
          color: '#00ff00',
          shape: 'arrowUp',
          text: 'Buy Signal',
        },
      ]);

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

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '380px' }} />
    </div>
  );
};

export default TradingViewChart;

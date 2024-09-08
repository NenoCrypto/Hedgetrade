// src/components/MarketSlider.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@material-ui/core';
import './market-slider.css';

// Define the type for market data
interface Market {
  symbol: string;
  lastPrice: string;
}

const MarketSlider: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    // Helper function to fetch data from API
    const fetchMarkets = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
        const allMarkets: Market[] = response.data;
        const usdtMarkets = allMarkets.filter(market => market.symbol.endsWith('USDT'));
        const topMarkets = usdtMarkets.slice(0, 5); // Get the top 5 USDT pairs
        // Save the fetched data and the current timestamp in local storage
        localStorage.setItem('marketData', JSON.stringify(topMarkets));
        localStorage.setItem('marketDataTimestamp', Date.now().toString());
        setMarkets(topMarkets);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    // Function to check if we need to fetch data or use cached data
    const loadMarketsFromCacheOrFetch = () => {
      const cachedMarkets = localStorage.getItem('marketData');
      const cachedTimestamp = localStorage.getItem('marketDataTimestamp');
      const fiveMinutesInMs = 5 * 60 * 1000;

      if (cachedMarkets && cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < fiveMinutesInMs) {
        // If data is cached and it's not older than 5 minutes, use it
        setMarkets(JSON.parse(cachedMarkets));
      } else {
        // Otherwise, fetch the latest data
        fetchMarkets();
      }
    };

    // Initial load
    loadMarketsFromCacheOrFetch();

    // Set up an interval to fetch the market data every 5 minutes (300000 ms)
    const interval = setInterval(() => {
      fetchMarkets();
    }, 300000); // 5 minutes

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false
    
  };

  const getIconSrc = (symbol: string) => {
    switch (symbol) {
      case 'BTCUSDT':
        return '/images/btc.png';
      case 'ETHUSDT':
        return '/images/eth.png';
      case 'LTCUSDT':
        return '/images/ltc.png';
      case 'BNBUSDT':
        return '/images/bnb.png';
      default:
        return '/images/default.png'; // Fallback icon
    }
  };

  return (
    <div className="market-slider-container">
      <Slider {...settings}>
        {markets.map((market, i) => (
          <div key={i} className="market-slider-item">
            <div className="market-slider-item-content">
              <img
                src={getIconSrc(market.symbol)} // Use the mapping function to get the icon
                alt={market.symbol}
                className="market-icon"
                width={25}
              />
              <div className="market-info">
                <Typography className="market-price">
                  ${`${parseFloat(market.lastPrice).toFixed(3)}`}
                </Typography>
                <Typography className="market-symbol">
                  {market.symbol}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MarketSlider;

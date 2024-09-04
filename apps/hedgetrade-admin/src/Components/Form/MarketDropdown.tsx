import { Select, MenuItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

interface Market {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
}

interface MarketDropdownProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ name?: string; value: unknown; }>) => void;
  onBlur: () => void;
  name: string;
}

export const MarketDropdown: React.FC<MarketDropdownProps> = ({ value, onChange, onBlur, name }) => {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    fetch('https://api.binance.com/api/v3/exchangeInfo')
      .then((response) => response.json())
      .then((data) => {
        const symbols = data.symbols.map((symbol: { symbol: string; baseAsset: string; quoteAsset: string; }) => ({
          symbol: symbol.symbol,
          baseAsset: symbol.baseAsset,
          quoteAsset: symbol.quoteAsset,
        }));
        setMarkets(symbols);
      })
      .catch((error) => console.error('Error fetching markets:', error));
  }, []);

  return (
    <Select
      variant="outlined"
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {markets.map((market) => (
        <MenuItem key={market.symbol} value={market.symbol}>
          {market.baseAsset}/{market.quoteAsset}
        </MenuItem>
      ))}
    </Select>
  );
};

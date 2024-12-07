import { Currency, currencyOptions } from "@/types/currency";
import React from "react";

interface CurrencySelectorProps {
    onCurrencyChange: (currency: Currency) => void; // Only need to notify the parent about the selected currency
  }

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onCurrencyChange }) => {
    const [selectedCurrency, setSelectedCurrency] = React.useState('USD'); // Default to USD
    
      const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = event.target.value as Currency;
        if (selectedCurrency) {
            setSelectedCurrency(selectedCurrency);
            onCurrencyChange(selectedCurrency);
        }
      };
    
      return (
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          {Object.values(Currency).map((currency) => (
            <option key={currency} value={currency}>
              {currencyOptions[currency].label} / {currencyOptions[currency].symbol}
            </option>
          ))}
        </select>
      );
}
import React, { useState } from 'react';
import { InputBox } from '../components/Index.jsx';
import useCurrencyInfo from '../src/hooks/useCurrencyInfo.jsx';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-cover bg-no-repeat bg-gray-700 rounded">
      <h1 className="text-3xl text-white font-mono p-5">Currency Converter 💵</h1>
      <div>
        <div className="max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 mb-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-500 hover:bg-amber-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
                amountDisable
              />
            </div>
            <div className='flex justify-center'>
                <button type="submit" className="bg-orange-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg">
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;

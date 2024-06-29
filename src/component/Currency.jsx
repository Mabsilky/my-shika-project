import React from 'react'

 function Currency(props) {
  const {
    currencyOptions,selectedCurrency
  } = props

  return (
    <div>
      <input type="number" className='input' />
      <select>
        {currencyOptions.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  )
}

export default Currency;

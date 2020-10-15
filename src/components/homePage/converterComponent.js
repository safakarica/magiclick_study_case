import React, {useEffect, useState} from 'react';
import axios from "axios";
import {currencyNamesInTurkish} from "../../constants/consts";

function ConverterComponent(props) {
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [currencyValue, setCurrencyValue] = useState(1);
    const [inputValue, setInputValue] = useState(1);
    useEffect(() => {
        axios.get(`https://api.ratesapi.io/api/latest?base=TRY&symbols=${selectedCurrency}`)
            .then(res => {
                setCurrencyValue(res.data.rates[selectedCurrency]);
            })
    }, [selectedCurrency]);
    return (
        <div className="converter-block">
            <p>Döviz Çevir</p>
            <div className="input-item">
                <input type="text" className="half" onChange={e => {
                    setInputValue(e.currentTarget.value)
                    console.log("selectedCurrency",selectedCurrency);
                    console.log("currencyValue",currencyValue);
                    console.log("inputValue",inputValue);
                }}
                       defaultValue={inputValue}
                       placeholder="..."/>
                <select onChange={e => setSelectedCurrency(e.currentTarget.value)} defaultValue={selectedCurrency}>
                    {
                        Object.keys(currencyNamesInTurkish).map((currency, key) =>
                            <option value={currency} key={key}>{currency}</option>
                        )
                    }
                </select>
            </div>
            <div className="icon-item">
                <i className="icon-arrows"/>
            </div>
            <div className="input-item">
                <input type="text" value={(1/currencyValue*inputValue).toFixed(6)} disabled={true}/>
                <span>TL</span>
            </div>
        </div>
    );
}

export default ConverterComponent;
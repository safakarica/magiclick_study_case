import React, {useState, useEffect} from 'react';
import axios from "axios";
import TableItemComponent from "./tableItemComponent";

function TableBlockComponent(props) {
    const [currencies, setCurrencies] = useState({})
    useEffect(() => {
        axios.get("https://api.ratesapi.io/api/latest?base=TRY&symbols=USD,EUR,JPY,GBP,DKK,NOK")
            .then(res => {
                setCurrencies(res.data.rates);
            })
    }, []);
    return (
        <div className="table-block">
            {
                Object.keys(currencies).map((currency,key)=>
                    <TableItemComponent currencyName={currency} currencyValue={(1/currencies[currency]).toFixed(4)} key={key}/>
                )
            }
        </div>
    );
}

export default TableBlockComponent;
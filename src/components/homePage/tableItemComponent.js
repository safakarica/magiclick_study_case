import React from 'react';
import {countryImages, currencyNamesInTurkish} from "../../constants/consts";

function TableItemComponent(props) {
    const {currencyValue,currencyName} = props;
    return (
        <div className="table-item">
            <div className="img-item">
                <picture>
                    <source srcSet={countryImages[currencyName].substr(0, countryImages[currencyName].lastIndexOf(".")) + ".webp"} type="image/webp"/>
                    <source srcSet={countryImages[currencyName]} type="image/png"/>
                    <img src={countryImages[currencyName]} alt={currencyName}/>
                </picture>
            </div>
            <div className="td-item">
                <span className="">{currencyName}</span>
                <span className="bottom small">{currencyNamesInTurkish[currencyName]}</span>
            </div>
            <div className="td-item t-1">
                <span className="small colored">ALIŞ</span>
                <span className="bottom">{currencyValue}</span>
            </div>
            <div className="td-item t-1">
                <span className="small colored">SATIŞ</span>
                <span className="bottom">{currencyValue}</span>
            </div>
        </div>
    );
}

export default TableItemComponent;
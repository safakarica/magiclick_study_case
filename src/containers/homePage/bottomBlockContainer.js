import React from 'react';
import ButtonItemComponent from "../../components/homePage/buttonItemComponent";

function BottomBlockContainer(props) {
    return (
        <div className="bottom-block">
            <ButtonItemComponent btnText="Detaylı Bilgi"/>
            <ButtonItemComponent btnText="Tüm Piyasalar" hasIcon={true} bordered={true}/>
        </div>
    );
}

export default BottomBlockContainer;
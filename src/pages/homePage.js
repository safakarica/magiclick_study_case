import React from 'react';
import TableListContainer from "../containers/homePage/tableListContainer";
import BottomBlockContainer from "../containers/homePage/bottomBlockContainer";

function HomePage(props) {
    return (
        <div className="table-list-root safe-area">
            <h1>Piyasalar</h1>
            <TableListContainer/>
            <BottomBlockContainer/>
        </div>

    );
}

export default HomePage;
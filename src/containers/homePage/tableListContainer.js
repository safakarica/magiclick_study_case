import React from 'react';
import TableBlockComponent from "../../components/homePage/tableBlockComponent";
import ConverterComponent from "../../components/homePage/converterComponent";

function TableListContainer(props) {
    return (
        <div className="table-list-container">
           <TableBlockComponent/>
           <ConverterComponent/>
        </div>
    );
}

export default TableListContainer;
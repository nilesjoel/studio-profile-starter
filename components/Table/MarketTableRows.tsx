import React from 'react';

interface MarketTableRowsProps {
  data: any;
}

const getField = (field: any) => {
    if (field === null) {
        return "";
    }
    if (typeof field === "string") {
        return field;
    }
    if (typeof field[0] === "object") {
        if (field[0].hasOwnProperty("name")) {
        return field[0].name;
        }
        if (field[0].hasOwnProperty("title")) {
        return field[0].title;
        }
    }
    return field;
}
const MarketTableRows: React.FC<MarketTableRowsProps> = ({ data }) => (
  <tbody>
    {data.map((row, i) => (
      <tr key={i}>
        {Object.keys(row).map((field, j) => {
            console.log(field, getField(row[field]))
            return (<td key={j}>{getField(row[field])}</td>)}
          
        )}
      </tr>
    ))}
  </tbody>
);

export default MarketTableRows;
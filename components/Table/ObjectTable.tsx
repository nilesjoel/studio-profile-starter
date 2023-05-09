import React from 'react';
import MarketTableHeader from './MarketTableHeader';
import MarketTableRows from './MarketTableRows';

interface ObjectTableProps {
  objectData: {
    studio_market_carts: any[],
    studio_market_orders: any[]
  };
}

const ObjectTable: React.FC<ObjectTableProps> = ({ objectData }) => {
  console.log({objectData})
    const headers = [
    ...Object.keys(objectData[0])
  ];
  
  return (
    <>
    <table style={{backgroundColor:"silver"}}>
      <MarketTableHeader headers={headers} />
      <MarketTableRows data={objectData} />
    </table>
    </>
  );
};

export default ObjectTable;

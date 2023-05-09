import React from 'react';

interface MarketTableHeaderProps {
  headers: string[];
}

const MarketTableHeader: React.FC<MarketTableHeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) =>  {
          return <th key={index}>{header}</th>
        }
        )}
      </tr>
    </thead>
  );
};

export default MarketTableHeader;
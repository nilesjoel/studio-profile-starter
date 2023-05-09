import React from 'react';

interface Market {
  id: number;
  studio_market_carts: {
    id: number;
    createdAt: string;
    updatedAt: string;
    status: string;
    checkout_session: string;
    total: number;
  }[];
  studio_market_orders: {
    id: number;
    createdAt: string;
    updatedAt: string;
    status: string;
    total: number;
    checkout_session: string;
  }[];
}

interface Props {
  market: Market;
}

const MarketTable: React.FC<Props> = ({ market }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cart ID</th>
          <th>Cart Status</th>
          <th>Cart Created At</th>
          <th>Cart Updated At</th>
          <th>Cart Checkout Session</th>
          <th>Cart Total</th>
          <th>Order ID</th>
          <th>Order Status</th>
          <th>Order Created At</th>
          <th>Order Updated At</th>
          <th>Order Checkout Session</th>
          <th>Order Total</th>
        </tr>
      </thead>
      <tbody>
        {market.studio_market_carts.map((cart) => (
          <tr key={cart.id}>
            <td>{market.id}</td>
            <td>{cart.id}</td>
            <td>{cart.status}</td>
            <td>{cart.createdAt}</td>
            <td>{cart.updatedAt}</td>
            <td>{cart.checkout_session}</td>
            <td>{cart.total}</td>
            <td>{market.studio_market_orders[0]?.id}</td>
            <td>{market.studio_market_orders[0]?.status}</td>
            <td>{market.studio_market_orders[0]?.createdAt}</td>
            <td>{market.studio_market_orders[0]?.updatedAt}</td>
            <td>{market.studio_market_orders[0]?.checkout_session}</td>
            <td>{market.studio_market_orders[0]?.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MarketTable;

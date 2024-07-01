import React from 'react';
import DashboardCard from './company_card';

const Body = () => {
  return (
    <div className="Tiles">
      <DashboardCard 
        imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62127/creditcard-visa.svg"
        code="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 1234"
        expiryDate="May 2017"
      />
       <DashboardCard 
        imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62127/creditcard-visa.svg"
        code="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 1234"
        expiryDate="May 2017"
      />
       <DashboardCard 
        imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62127/creditcard-visa.svg"
        code="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 1234"
        expiryDate="May 2017"
      />
       <DashboardCard 
        imageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62127/creditcard-visa.svg"
        code="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 1234"
        expiryDate="May 2017"
      />
      {/* Add more CreditCardTile components as needed */}
    </div>
  );
};

export default Body;

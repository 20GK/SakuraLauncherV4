import React from 'react';
import CardServerA from './CardServerA.jsx';

export default function HeaderApp() {

  return (
    <div className="servers">
      <CardServerA allow='t' nameServer='Vanilla 1.19.3' id='1' row='1' column='1'/>
      <CardServerA allow='t' nameServer='Vanilla 1.19.3' id='1' row='1' column='2'/>
      <CardServerA allow='t' nameServer='Vanilla 1.19.3' id='1' row='1' column='3'/>
      <CardServerA allow='t' nameServer='Vanilla 1.19.3' id='1' row='2' column='1'/>
      <CardServerA allow='t' nameServer='Vanilla 1.19.3' id='1' row='2' column='2'/>
      <CardServerA allow='t' nameServer='Vanilla 1.19.3' id='1' row='2' column='3'/>
    
    </div>
  );
};
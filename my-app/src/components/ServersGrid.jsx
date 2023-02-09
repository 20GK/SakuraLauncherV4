import React from 'react';
import CardServerA from './CardServerA.jsx';

export default function HeaderApp() {

  return (
    <div className="servers">
      <CardServerA allow='t' nameServer='Vanilla' id='1' row='1' column='1'/>
      <CardServerA allow='f' nameServer='Industrial Craft' id='2' row='1' column='2'/>
      <CardServerA allow='f' nameServer='Omnifactory' id='3' row='1' column='3'/>

      <CardServerA allow='f' nameServer='SevTech' id='6' row='2' column='1'/>
      <CardServerA allow='f' nameServer='High Industrial!' id='4' row='2' column='2'/>
      <CardServerA allow='f' nameServer='GregTech New Horizon' id='5' row='2' column='3'/>

      <CardServerA allow='f' nameServer='SkyFactory' id='7' row='3' column='1'/>
      <CardServerA allow='f' nameServer='VaultHunt 1.18' id='8' row='3' column='2'/>
      <CardServerA allow='f' nameServer='MiniGames' id='9' row='3' column='3'/>
    </div>
  );
};
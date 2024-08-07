import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp, update, updater }) {
    const {
        seconds,
    } = useTimer({ 
            expiryTimestamp,
            autoStart: true,
            onExpire: () => {updater((update === true) ? false : true);}
        })
  return (
    <div style={{textAlign: 'center'}}>      
      <div style={{fontSize: '100px'}}>
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
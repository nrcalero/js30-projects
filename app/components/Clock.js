import React from 'react';
import '../styles/clock.css';

class Clock extends React.Component {
  
  componentDidMount() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
  
    function setDate() {
      const now = new Date();
  
      const seconds = now.getSeconds();
      const mins = now.getMinutes();
      const hours = now.getHours();
  
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minsDegrees = ((mins / 60) * 360) + 90;
      const hoursDegrees = ((hours / 12) * 360) + 90;
  
      if(secondsDegrees == 90) {
        secondHand.style.transition = "none";
      } else {
        secondHand.style.transition = "";
      }
  
      if(minsDegrees == 90) {
        minuteHand.style.transition = "none";
      } else {
        minuteHand.style.transition = "";
      }
  
      if(hoursDegrees == 90) {
        hourHand.style.transition = "none";
      } else {
        hourHand.style.transition = "";
      }
  
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
  
    setInterval(setDate, 1000);
  }

  render() {
    return (
      <div className="clock-content">
        <div className="clock">
          <div className="clock-face">
            <div className="hand second-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand hour-hand"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock;
import React from "react";
import styles from "./Timer.module.css";

export class Timer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      timer: 0,
      sec: 0,
      min: 0,
      hour: 0,
    };
  }

  showTimer = () => {
    if (this.state.hour >= 10 && this.state.min >= 10 && this.state.sec >= 10) {
      return (
        <p className={styles.timer__time}>
          {this.state.hour}:{this.state.min}:{this.state.sec}
        </p>
      );
    } else if (this.state.min >= 10 && this.state.sec >= 10) {
      return (
        <p className={styles.timer__time}>
          0{this.state.hour}:{this.state.min}:{this.state.sec}
        </p>
      );
    } else if (this.state.sec >= 10) {
      return (
        <p className={styles.timer__time}>
          0{this.state.hour}:0{this.state.min}:{this.state.sec}
        </p>
      );
    } else {
      return (
        <p className={styles.timer__time}>
          0{this.state.hour}:0{this.state.min}:0{this.state.sec}
        </p>
      );
    }
  };

  startTime = () => {
    if (this.state.sec < 60)
      this.setState({
        sec: ++this.state.sec,
      });
    if (this.state.sec === 60) {
      this.setState({
        sec: 0,
        min: ++this.state.min,
      });
      if (this.state.min === 60) {
        this.setState({
          sec: 0,
          min: 0,
          hour: ++this.state.hour,
        });
      }
    }
  };

  onClickStart = () => {
    this.setState({
      timer: (this.state.timer = setInterval(this.startTime, 1000)),
    });
  };

  onClickStop = () => {
    this.setState({
      timer: clearInterval(this.state.timer),
    });
  };

  onClickReset = () => {
    this.setState({
      timer: clearInterval(this.state.timer),
      sec: 0,
      min: 0,
      hour: 0,
    });
  };

  render() {
    return (
      <div className={styles.timer}>
        {this.showTimer()}
        <div className={styles.timerButtons}>
          <button
            className={styles.timerButtons__button}
            onClick={this.onClickStart}
          >
            Start
          </button>
          <button
            className={styles.timerButtons__button}
            onClick={this.onClickStop}
          >
            Stop
          </button>
          <button
            className={styles.timerButtons__button}
            onClick={this.onClickReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

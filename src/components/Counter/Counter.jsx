import React from "react";
import styles from "./Counter.module.css";

export class Counter extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 0,
    };
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus = () => {
    this.setState({
      count: --this.state.count,
    });
  };

  onClickReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className={styles.counter}>
        <p className={styles.counter__count}>{count}</p>
        <div className={styles.counterButtons}>
          <button
            className={styles.counterButtons__buttonPlus}
            onClick={this.onClickPlus}
          >
            +
          </button>
          <button
            className={styles.counterButtons__buttonReset}
            onClick={this.onClickReset}
          >
            ↺
          </button>
          <button
            className={styles.counterButtons__buttonMinus}
            onClick={this.onClickMinus}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

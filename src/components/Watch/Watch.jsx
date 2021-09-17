import React from "react";
import styles from "./Watch.module.css";

export class Watch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    });
  }

  render() {
    let { time } = this.state;

    return (
      <div>
        <h1 className={styles.time}>{time}</h1>
      </div>
    );
  }
}

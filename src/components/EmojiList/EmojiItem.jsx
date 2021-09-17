import react from "react";
import styles from "./Emoji.module.css";

export class EmojiItem extends react.Component {
  render() {
    const data = this.props.data;
    const title = this.props.title;
    return (
      <li className={styles.emojiItem}>
        {data.map((emoji, index) => {
          if (emoji.title === title) {
            return (
              <p key={index}>
                {emoji.title} {emoji.symbol}
              </p>
            );
          }
        })}
      </li>
    );
  }
}

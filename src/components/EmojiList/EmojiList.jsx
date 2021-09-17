import React from "react";
import data from "./data.json";
import { EmojiItem } from "./EmojiItem";
import styles from "./Emoji.module.css";

export class EmojiList extends React.Component {
  render() {
    return (
      <div className={styles.emojiList}>
        <EmojiItem data={data} title={"Grinning"} />
        <EmojiItem data={data} title={"100"} />
        <EmojiItem data={data} title={"Sunglasses"} />
        <EmojiItem data={data} title={"Sunglasses"} />
        <EmojiItem data={data} title={"Sob"} />
      </div>
    );
  }
}

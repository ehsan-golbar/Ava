import styles from "./resultConverting.module.css";

interface MyComponentProps {
  text: string;
  timeOne: string;
  timeTwo: string;
  backGround: boolean;
  textBlue: boolean;
}
const TimedTextItem: React.FC<MyComponentProps> = (props) => {
  return (
    <>
      <div
        className={
          props.textBlue
            ? props.backGround
              ? styles.timedTextItemSelectedBackground
              : styles.timedTextItemSelected 
            : props.backGround
            ? styles.timedTextItemBackground
            : styles.timedTextItem
        }
      >
        <div className={styles.timedTextItemOne}>
          <p className="pStyle">{props.timeTwo}</p>
        </div>

        <div className={styles.timedTextItemTwo}>
          <p className="pStyle">{props.timeOne}</p>
        </div>
        <div className={styles.timedTextItemThree}>
          <p className="pStyle">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default TimedTextItem;

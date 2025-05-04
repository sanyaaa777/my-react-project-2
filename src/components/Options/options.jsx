import styles from "./options.module.css";
import classNames from 'classnames';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")} className={classNames(styles.btn, styles.good)}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={classNames(styles.btn, styles.neutral)}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={classNames(styles.btn, styles.bad)}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;``
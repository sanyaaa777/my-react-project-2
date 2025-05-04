import styles from './feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.feedback}>
      <h2>Feedback</h2>
      <p className={styles.feed}>Total feedback: {totalFeedback}</p>
      <p className={styles.feed}>Good: {feedback.good}</p>
      <p className={styles.feed}>Neutral: {feedback.neutral}</p>
      <p className={styles.feed}>Bad: {feedback.bad}</p>
      <p className={styles.feed}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;

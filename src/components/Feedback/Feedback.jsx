// import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total }) => {
  const positive = Math.round((good / total) * 100);

  if (total === 0) {
    return <p>Not feedback yet</p>;
  }
  return (
    <section>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
        <li></li>
      </ul>
    </section>
  );
};

export default Feedback;

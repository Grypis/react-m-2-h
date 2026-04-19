// import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total }) => {
  return (
    <section>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: 80%</li>
        <li></li>
      </ul>
    </section>
  );
};

export default Feedback;

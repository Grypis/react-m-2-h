import css from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <>
      <div>
        <button
          className={css.button}
          type="button"
          onClick={() => updateFeedback('good')}
        >
          Good
        </button>
        <button
          className={css.button}
          type="button"
          onClick={() => updateFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={css.button}
          type="button"
          onClick={() => updateFeedback('bad')}
        >
          Bad
        </button>
        <button
          className={css.button}
          type="button"
          onClick={() => updateFeedback('reset')}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Options;

import css from './Options.module.css';

const Options = () => {
  return (
    <>
      <div>
        <button className={css.button} type="button">
          Good
        </button>
        <button className={css.button} type="button">
          Neutral
        </button>
        <button className={css.button} type="button">
          Bad
        </button>
        <button className={css.button} type="button">
          Reset
        </button>
      </div>
    </>
  );
};

export default Options;

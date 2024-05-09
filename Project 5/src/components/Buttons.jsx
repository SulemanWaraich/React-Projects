import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  let buttonsName = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    "=",
    "/",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttons-container"]}>
      {buttonsName.map(function (name) {
        return (
          <button
            className={styles.button}
            onClick={() => {
              onButtonClick(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;

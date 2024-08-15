import style from "./Button.module.css";

export function Button({ children, onClick }) {
  console.log(children);
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

import style from "./App.module.css";
// import { ReactComponent as lightMode } from "./assets/icon-sun.svg";
export function Top(props) {
  return (
    <div className={style.top}>
      <p className={style.logo}>TODO</p>
      {/* <img src="./assets/icon-sun.svg" className={style.mode} /> */}
      <div
        className={style.mode}
        onClick={() => props.toggleMode()}
        style={{
          backgroundImage: props.mode
            ? "url('./assets/icon-moon.svg')"
            : "url('./assets/icon-sun.svg')",
        }}
      ></div>
    </div>
  );
}

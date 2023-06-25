import style from "./App.module.css";
import { Top } from "./tops";
import { Middle } from "./middleDiv";
// import { Bottom } from "./bottomDiv";
export function MainDiv() {
  return (
    <div className={style.mainCont}>
      <Top />
      <Middle />
      {/* <Bottom /> */}
    </div>
  );
}

import s from "./Loader.module.css";
import preloader from "../../assets/images/loading.gif";

// export const Loader = <div className={s.loader}> loader</div>;

export const Loader = () => (
  <img src={preloader} alt="#$" className={s.loader} />
);

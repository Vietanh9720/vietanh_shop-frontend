import style from "../../cssmodule/Login.module.css";
import LoginImage from "../../image/loginimage.png";
import LoginForm from "./loginForm";

const RegisterPage = () => {
  return (
 
      <div className={style.bigbox}>
        <div className={style.smallbox}>
          <div className={style.boxform}>
            <LoginForm></LoginForm>
          </div>
          <div className={style.boximage}>
            <img src={LoginImage} className={style.imagelogin}></img>
          </div>
        </div>
      </div>
 
  );
};
export default RegisterPage;

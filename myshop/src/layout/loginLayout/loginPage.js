import style from "../../cssmodule/Login.module.css";
import LoginImage from "../../image/loginimage.png";
import Apple from "../../image/apple3.jpg";
import LoginForm from "./loginForm";

const LoginPage = () => {
  return (
    <div>
      
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
      <img src={Apple} style={{width :'100%',height:'1000px'}}></img>
    </div>
  );
};
export default LoginPage;

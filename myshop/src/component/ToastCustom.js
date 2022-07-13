import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};
const ToastCustom = () => {
  return (
    <ToastContainer
      bodyClassName={() => "text-sm font-white font-med block p-3"}
      position="top-right"
      autoClose={2000}
    ></ToastContainer>
  );
};
export default ToastCustom;

import { toast } from "react-toastify";
import toastLogoError from "../../assets/image/toast/toast_logo_error.png";
import toastLogoSuccess from "../../assets/image/toast/toast_logo_success.png";
import "react-toastify/dist/ReactToastify.css";
import "./customToast.css";

export default function customToast (){
  const SuccessToast = ({message}) => (
    <div className="toast-content">
      <img src={toastLogoSuccess} alt="Success Icon" className="toast-image" />
      <div className="toast-text">
        <p>{message}</p>
      </div>
    </div>
  );

  // Error Toast Component
  const ErrorToast = ({message}) => (
    <div className="toast-content">
      <img src={toastLogoError} alt="Error Icon" className="toast-image" />
      <div className="toast-text">
        <p>{message}</p>
      </div>
    </div>
  );
  return { SuccessToast, ErrorToast };
};

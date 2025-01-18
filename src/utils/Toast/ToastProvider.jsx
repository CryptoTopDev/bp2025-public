import React, { createContext, useContext, useState, useCallback } from "react";
import * as Toast from "@radix-ui/react-toast";
import "./styles.css";
import successToast from "../../assets/image/successToast.svg";
import errorToast from "../../assets/image/errorToast.svg";
import toastShade from "../../assets/image/toastShade.svg";
const ToastContext = createContext();
export const ToastProvider = ({ children }) => {
  const [toastState, setToastState] = useState({
    open: false,
    title: "",
    description: "",
    type: "success",
  });
  const showToast = useCallback(({ title, description, type }) => {
    setToastState({ open: true, title, description, type });
    setTimeout(
      () => setToastState((prev) => ({ ...prev, open: false })),
      50000
    ); // Auto-close after 3 seconds
  }, []);
  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className={`bg-[#e3e3e3] rounded-xl w-[432px] sm:w-[380px] h-[139px] m-6 px-4 pt-4 relative`}
          open={toastState.open}
          onOpenChange={(open) => setToastState((prev) => ({ ...prev, open }))}
        >
          <div asChild className="absolute right-[-15px] top-[-15px] z-[51]">
            <button onClick={() => setToastState((prev) => ({ ...prev, open: false }))} className="relative px-2 text-white border border-white text-xl font-bold rounded-full bg-transparent outline-none before:absolute before:inset-0 before:rounded-full before:bg-inherit before:blur-sm before:z-[-1]">
              X
            </button>
          </div>
          <img
            src={toastShade}
            className="absolute left-0 top-0 w-[235px] h-[139px] z-10 rounded-l-xl rounded-r-2xl"
            alt=""
          />
          <div className="flex gap-8 items-center">
            <img
              src={toastState.type === "success" ? successToast : errorToast}
              className="w-[120px] z-50"
              alt=""
            />
            <Toast.Title className="text-[18px] w-full z-50 font-bold text-black">
              {toastState.title}
            </Toast.Title>
          </div>
          <Toast.Description className="toast-description">
            {toastState.description}
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="toast-viewport" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
};
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

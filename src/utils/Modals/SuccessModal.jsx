import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import modalShade from "../../assets/image/modelbackground.svg";
import mobileModalShade from "../../assets/image/mobileModalShade.svg";
import successLogo from "../../assets/image/successLogo.svg";

const SuccessModal = ({ isOpen, onClose, title}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Close after 3 seconds
      return () => clearTimeout(timer); // Cleanup timeout if modal is closed early
    }
  }, [isOpen, onClose]);
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] bg-transparent focus:outline-none">
        <div className="bg-[#e0e0e0] w-[622px] sm:w-[360px] sm:h-[550px] rounded-xl relative">
          <Dialog.Close
            asChild
            className="absolute right-[-15px] top-[-15px] z-[51]"
          >
            <button
              className="px-2 text-white border border-white text-xl font-bold rounded-full bg-transparent outline-none"
              onClick={onClose}
            >
              X
            </button>
          </Dialog.Close>
          <img
            src={modalShade}
            className="w-[498px] sm:hidden absolute sm:left-4 left-16 top-0"
            alt=""
          />
          <img
            src={mobileModalShade}
            className="w-[408px] absolute  sm:left-0 left-[-10000px]  top-4"
            alt=""
          />
          <div className="py-12 sm:py-32 flex flex-col gap-8 justify-center items-center">
            <img src={successLogo} className="w-[271px] z-[10]" alt="" />
            <Dialog.Title className="text-lg font-bold z-[10]">{title}</Dialog.Title>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default SuccessModal;

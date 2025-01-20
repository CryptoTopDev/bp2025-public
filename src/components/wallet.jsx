import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import "./wallet.css";

function PHWallet() {
  const wallet = useWallet();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile as width <= 768px
    };

    // Add event listener and check initially
    window.addEventListener("resize", handleResize);
    handleResize();

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <WalletModalProvider>
        <WalletMultiButton
          style={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "9999px",
            border: "1px solid #fff",
            fontSize: "14px",
          }}
          
        >
          {!wallet?.connected && (isMobile ? "Connect" : "Connect Wallet")}
        </WalletMultiButton>
      </WalletModalProvider>
    </>
  );
}

export default PHWallet;

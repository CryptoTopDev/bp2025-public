import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { IDL } from "../IDL/IDL.jsx";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { toast } from "react-toastify";
import {
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
} from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { ASSOCIATED_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { Buffer } from "buffer";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import customToast from "../components/toast/customToast.jsx";
import "../components/toast/customToast.css";
window.Buffer = window.Buffer || Buffer;
export default function usePresale() {

  const {SuccessToast, ErrorToast} = customToast()
  const { publicKey, wallet } = useWallet();
  const anchorWallet = useAnchorWallet();
  const network = clusterApiUrl("devnet");
  const connection = new Connection(network, "confirmed");
  const END_TIME_TIMESTAMP = process.env.REACT_APP_ENT_TIME_TIMESTAMP;
  const PRESALE_PROGRAM_PUBKEY_ADDRESS = process.env.REACT_APP_PRESALE_PROGRAM_PUBKEY;
  const PRESALE_AUTHORITY_ADDRESS = process.env.REACT_APP_PRESALE_AUTHORITY;
  const SOL_PRICEFEED_ID_ADDRESS = process.env.REACT_APP_SOL_PRICEFEED_ID;
  const DEPOSITE_TOKEN_AMOUNT = process.env.REACT_APP_DEPOSITE_TOKEN_AMOUNT;
  const TOKEN_PUBKEY_ADDRESS = process.env.REACT_APP_TOKEN_PUBKEY;
  const PRESALE_HARDCAP = process.env.REACT_APP_PRESALE_HARDCAP;
  const PRESALE_SOFTCAP = process.env.REACT_APP_PRESALE_SOFTCAP;
  const whitelistPrice = process.env.REACT_APP_WHITELIST_PRICE;
  const MIN_INVESTMENT = process.env.REACT_APP_MIN_INVESTMENT;
  const MAX_INVESTMENT = process.env.REACT_APP_MAX_INVESTMENT;
  const START_DATE_VALUE = process.env.REACT_APP_START_DATE;
  const TOKEN_DECIMAL = process.env.REACT_APP_TOKEN_DECIMAL;
  const PRESALE_SEED = process.env.REACT_APP_PRESALE_SEED;
  const DEFAULT_SOL_PRICE = process.env.REACT_APP_DEFAULT_SOL_PRICE;
  const normalPrice = process.env.REACT_APP_NORMAL_PRICE;
  const END_DATE_VALUE = process.env.REACT_APP_END_DATE;
  const VAULT_SEED = process.env.REACT_APP_VAULT_SEED;
  const PRESALE_ID = process.env.REACT_APP_PRESALE_ID;
  const USER_SEED = process.env.REACT_APP_USER_SEED;
  const CLAIM_DURATION = process.env.REACT_APP_CLAIM_DURATION;
  const RPC = process.env.REACT_APP_RPC;
  const GK_API_KEY = process.env.REACT_APP_GK_API_KEY;
  const PRESALE_PROGRAM_PUBKEY = new PublicKey(
    PRESALE_PROGRAM_PUBKEY_ADDRESS
  );
  const PRESALE_AUTHORITY = new PublicKey(
    PRESALE_AUTHORITY_ADDRESS
  );
  const TOKEN_PUBKEY = new PublicKey(
    TOKEN_PUBKEY_ADDRESS
  );
  const SOL_PRICEFEED_ID = new PublicKey(
    SOL_PRICEFEED_ID_ADDRESS
  );
  const START_DATE = new Date(START_DATE_VALUE);
  const END_DATE = new Date(END_DATE_VALUE);

  const [transactionPending, setTransactionPending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(END_TIME_TIMESTAMP);
  const [buyAmount, setBuyAmount] = useState(0);
  const [claimedAmount, setClaimedAmount] = useState(0);
  const [totalBuyAmount, setTotalBuyAmount] = useState(0);
  const [claimableAmount, setClaimableAmount] = useState(0);
  const [solAmount, setSolAmount] = useState(0);
  const [vaultAddress, setVaultAddress] = useState("");
  const [claimTime, setClaimTime] = useState(0);
  const [defaultPrice, setDefaultPrice] = useState(whitelistPrice);
  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, PRESALE_PROGRAM_PUBKEY, provider);
    }
  }, [connection, anchorWallet]);

  useEffect(() => {
    const getPresaleInfo = async () => {
      if (program && !transactionPending) {
        try {
          setLoading(true);
          const [presale_info, presale_bump] = findProgramAddressSync(
            [
              utf8.encode(PRESALE_SEED),
              PRESALE_AUTHORITY.toBuffer(),
              new Uint8Array([PRESALE_ID]),
            ],
            program.programId
          );
          const [vault, vault_bump] = await PublicKey.findProgramAddress(
            [Buffer.from(VAULT_SEED), presale_info.toBuffer()],
            program.programId
          );
          setVaultAddress(vault.toBase58());
          const info = await program.account.presaleInfo.fetch(presale_info);
          setSolAmount(Number(info.solAmount) / LAMPORTS_PER_SOL);
          setStartTime(info.startTime);
          setEndTime(info.endTime);
          setTotalBuyAmount(info.soldTokenAmount);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    const getUserInfo = async () => {
      if (program && publicKey && !transactionPending) {
        try {
          setLoading(true);
          const [userInfo, userBump] = findProgramAddressSync(
            [
              utf8.encode(USER_SEED),
              PRESALE_AUTHORITY.toBuffer(),
              publicKey.toBuffer(),
              new Uint8Array([PRESALE_ID]),
            ],
            program.programId
          );
          const info = await program.account.userInfo.fetch(userInfo);
          console.log(
            "----------",
            Number(info.claimTime.toString())
          );
          setClaimableAmount(
            Number(info.buyTokenAmount.toString()) / 10 ** TOKEN_DECIMAL
          );
          setBuyAmount(info.buyTokenAmount);
          setClaimedAmount(info.claimAmount);
          setClaimTime(Number(info.claimTime.toString()));
          console.log("User Info : ", Number(info.buyTokenAmount));
          console.log("User Info : ", Number(info.claimAmount));
          console.log("User Info : ", info);
        } catch (error) {
          setClaimableAmount(0);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };
    const getWhiteList = async () => {
      try {
        if (publicKey) {
          const response = await axios.post(
            "https://whitelist.kyncoin.com/wallet/getWallet",
            { walletPublicKey: publicKey.toBase58() }
          );
          if (response.data) {
            setDefaultPrice(whitelistPrice);
          } else {
            setDefaultPrice(normalPrice);
          }
        } else {
          setDefaultPrice(normalPrice);
        }
      } catch (error) {}
    };
    getPresaleInfo();
    getUserInfo();
    getWhiteList();
  }, [publicKey, transactionPending]);

  useEffect(() => {
    const connection = new Connection(
      RPC,
      "confirmed"
    );
    let provider = new anchor.AnchorProvider(
      connection,
      wallet,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PRESALE_PROGRAM_PUBKEY, provider);
    const getPresaleInfo = async () => {
      if (program && !transactionPending) {
        try {
          setLoading(true);
          const [presale_info, presale_bump] = findProgramAddressSync(
            [
              utf8.encode(PRESALE_SEED),
              PRESALE_AUTHORITY.toBuffer(),
              new Uint8Array([PRESALE_ID]),
            ],
            program.programId
          );
          const [vault, vault_bump] = await PublicKey.findProgramAddress(
            [Buffer.from(VAULT_SEED), presale_info.toBuffer()],
            program.programId
          );
          setVaultAddress(vault.toBase58());
          const info = await program.account.presaleInfo.fetch(presale_info);
          setSolAmount(Number(info.solAmount) / 10 ** 9);
          setStartTime(info.startTime);
          setEndTime(info.endTime);
          setTotalBuyAmount(info.soldTokenAmount);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getPresaleInfo();
  }, []);
  
  const createPresale = async () => {
    if (program && publicKey) {
      try {
        setTransactionPending(true);
        const [presale_info, presale_bump] = await PublicKey.findProgramAddress(
          [
            Buffer.from(PRESALE_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );
        const [vault, vault_bump] = await PublicKey.findProgramAddress(
          [Buffer.from(VAULT_SEED), presale_info.toBuffer()],
          program.programId
        );
        const tokenPrice = normalPrice * 10 ** 9;

        const softCap = new anchor.BN(LAMPORTS_PER_SOL * PRESALE_SOFTCAP); // softcap
        const hardCap = new anchor.BN(LAMPORTS_PER_SOL * PRESALE_HARDCAP); // hardcap
        const max = new anchor.BN(LAMPORTS_PER_SOL * MAX_INVESTMENT); // maxTokenAmountPerAddress
        const min = new anchor.BN(LAMPORTS_PER_SOL * MIN_INVESTMENT); // maxTokenAmountPerAddress
        const price = new anchor.BN(tokenPrice); // price per token
        const sTime = new anchor.BN(START_DATE.getTime() / 1000); // start time
        const eTime = new anchor.BN(END_DATE.getTime() / 1000); // end time

        const tx = await program.methods
          .createPresale(
            softCap,
            hardCap,
            max,
            min,
            price,
            sTime,
            eTime,
            new anchor.BN(PRESALE_ID) // presale id
          )
          .accounts({
            presaleInfo: presale_info,
            authority: PRESALE_AUTHORITY,
            vault: vault,
            systemProgram: SystemProgram.programId,
          })
          .rpc();

        toast.success(
          <SuccessToast message="Successfully created presale." />,
          { className: "custom-toast-box-error" }
        );

        return false;
      } catch (error) {
        // toast.error(error.toString());
        toast.error(
          <ErrorToast message={error.toString()} />,
          { className: "custom-toast-box-error" }
        );
        
        return false;
      } finally {
        setTransactionPending(false);
      }
    }
  };
  
  const buyToken = async (solAmount, tokenAmount) => {
    if (program && publicKey) {
      try {
        const solWalletAmount = await connection.getBalance(publicKey);
        if (Number(Number(solWalletAmount) / 10 ** 9) < solAmount) {
          toast.error(
            <ErrorToast message="You don't have enough sol!" />,
            { className: "custom-toast-box-error" }
          );
          return;
        }
        if (!solAmount || solAmount < MIN_INVESTMENT) {
          toast.error(
            <ErrorToast message="You cannot purchase less than 0.5 SOL!" />,
            { className: "custom-toast-box-error" }
          );
          return;
        }
        setTransactionPending(true);
        const [presaleInfo, presaleBump] = findProgramAddressSync(
          [
            utf8.encode(PRESALE_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );
        const [vault, vault_bump] = await PublicKey.findProgramAddress(
          [Buffer.from(VAULT_SEED), presaleInfo.toBuffer()],
          program.programId
        );
        const [userInfo, userBump] = findProgramAddressSync(
          [
            utf8.encode(USER_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            publicKey.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );

        const bitIntTokenAmount = new anchor.BN(
          tokenAmount * 10 ** TOKEN_DECIMAL
        );
        const bigIntSolAmount = new anchor.BN(solAmount * LAMPORTS_PER_SOL);
        const tx = await program.methods
          .buyToken(
            bitIntTokenAmount,
            bigIntSolAmount,
            PRESALE_ID
          )
          .accounts({
            presaleInfo,
            presaleAuthority: PRESALE_AUTHORITY,
            userInfo,
            vault: vault,
            buyer: publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            pythSolAccount: SOL_PRICEFEED_ID,
          })
          .rpc();

        
        toast.success(
          <SuccessToast message="Token purchase was successful." />,
          { className: "custom-toast-box-error" }
        );


        return false;
      } catch (error) {
        // console.log(error);
        // toast.error(error.toString());
        toast.error(
          <ErrorToast message={error.toString()} />,
          { className: "custom-toast-box-error" }
        );
        
        return false;
      } finally {
        setTransactionPending(false);
      }
    } else {
      // toast.error("Please connect wallet!");
      toast.error(
        <ErrorToast message="Please connect wallet!" />,
        { className: "custom-toast-box-error" }
      );
    }
  };
  
  const claimToken = async () => {
    const currentTime = new Date().getTime();
    const endTimestamp = END_DATE.getTime();
    // if (currentTime < endTimestamp) {
    //   toast.error("Please wait until finish presale!");
    //   return;
    // }
    const now = new Date().getTime()
    const currentTimeStamp = Number(now)/1000;
    console.log("currentTimeStamp", currentTimeStamp)
    console.log("claimTime", claimTime)
    console.log("CLAIM_DURATION", CLAIM_DURATION)
    if (Number(currentTimeStamp) < Number(claimTime + Number(CLAIM_DURATION))) {
      // toast.error(`Please wait for ${Number(claimTime + Number(CLAIM_DURATION) - currentTimeStamp).toFixed(0)}s!`);
      toast.error(
        <ErrorToast message={`Please wait for ${Number(claimTime + Number(CLAIM_DURATION) - currentTimeStamp).toFixed(0)}s!`} />,
        { className: "custom-toast-box-error" }
      );
      return;
    }

    if (program && publicKey) {
      try {
        setTransactionPending(true);
        const [presaleInfo, presaleBump] = findProgramAddressSync(
          [
            utf8.encode(PRESALE_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );
        const [userInfo, userBump] = findProgramAddressSync(
          [
            utf8.encode(USER_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            publicKey.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );

        const buyer_presale_token_associated_token_account =
          await anchor.utils.token.associatedAddress({
            mint: TOKEN_PUBKEY,
            owner: publicKey,
          });

        const presale_presale_token_associated_token_account =
          await anchor.utils.token.associatedAddress({
            mint: TOKEN_PUBKEY,
            owner: presaleInfo,
          });
        const tx = await program.methods
          .claimToken(PRESALE_ID)
          .accounts({
            presaleTokenMintAccount: TOKEN_PUBKEY,
            buyerPresaleTokenAssociatedTokenAccount:
              buyer_presale_token_associated_token_account,
            presalePresaleTokenAssociatedTokenAccount:
              presale_presale_token_associated_token_account,
            userInfo,
            presaleInfo,
            presaleAuthority: PRESALE_AUTHORITY,
            buyerAuthority: publicKey,
            buyer: publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
          })
          .rpc();

        toast.success(
          <SuccessToast message="Token claim was successful." />,
          { className: "custom-toast-box-error" }
        );

        return false;
      } catch (error) {
        toast.error(
          <ErrorToast message={error.toString()} />,
          { className: "custom-toast-box-error" }
        );
        return false;
      } finally {
        setTransactionPending(false);
      }
    }
  };
  
  const getSolPrice = async () => {
    try {
      const response = await fetch(
        "https://pro-api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
        {
          method: "GET",
          headers: {
            "x-cg-pro-api-key": GK_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const solPrice = data.solana.usd;
      if (!solPrice) {
        return Number(DEFAULT_SOL_PRICE);
      }
      return solPrice;
    } catch (error) {
      return Number(DEFAULT_SOL_PRICE);
    }
  };
  
  const withdrawSol = async () => {
    if (program && publicKey) {
      try {
        setTransactionPending(true);
        const [presale_info, presale_bump] = findProgramAddressSync(
          [
            utf8.encode(PRESALE_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programIdclear
        );
        const [vault, vault_bump] = await PublicKey.findProgramAddress(
          [Buffer.from(VAULT_SEED), presale_info.toBuffer()],
          program.programId
        );
        await program.methods
          .withdrawSol(
            PRESALE_ID 
          )
          .accounts({
            presaleInfo: presale_info,
            vault: vault,
            presaleAuthority: PRESALE_AUTHORITY,
            buyer: publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
          })
          .rpc();
        toast.success(
          <SuccessToast message="Successfully withdrawed sol." />,
          { className: "custom-toast-box-error" }
        );

        return false;
      } catch (error) {
        toast.error(
          <ErrorToast message={error.toString()} />,
          { className: "custom-toast-box-error" }
        );
        
        return false;
      } finally {
        setTransactionPending(false);
      }
    }
  };
  const depositToken = async () => {
    if (program && publicKey) {
      try {
        setTransactionPending(true);
        const [presale_info, presale_bump] = findProgramAddressSync(
          [
            utf8.encode(PRESALE_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );
        const fromAssociatedTokenAccount =
          await anchor.utils.token.associatedAddress({
            mint: TOKEN_PUBKEY,
            owner: publicKey,
          });

        const toAssociatedTokenAccount =
          await anchor.utils.token.associatedAddress({
            mint: TOKEN_PUBKEY,
            owner: presale_info,
          });
        await program.methods
          .depositToken(
            new anchor.BN(DEPOSITE_TOKEN_AMOUNT * 10 ** TOKEN_DECIMAL), // deposit amount
            PRESALE_ID // presale id
          )
          .accounts({
            mintAccount: TOKEN_PUBKEY,
            fromAssociatedTokenAccount: fromAssociatedTokenAccount,
            fromAuthority: PRESALE_AUTHORITY,
            toAssociatedTokenAccount: toAssociatedTokenAccount,
            presaleInfo: presale_info,
            payer: publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
          })
          .rpc();

        toast.success(
          <SuccessToast message="Successfully deposited token." />,
          { className: "custom-toast-box-error" }
        );

        // .rpc();
        return false;
      } catch (error) {
        toast.error(
          <ErrorToast message={error.toString()} />,
          { className: "custom-toast-box-error" }
        );
        return false;
      } finally {
        setTransactionPending(false);
      }
    }
  };
  return {
    buyToken,
    claimToken,
    getSolPrice,
    createPresale,
    depositToken,
    withdrawSol,
    startTime,
    endTime,
    buyAmount,
    claimedAmount,
    totalBuyAmount,
    transactionPending,
    claimableAmount,
    solAmount,
    vaultAddress,
    defaultPrice,
    PRESALE_AUTHORITY
  };
}

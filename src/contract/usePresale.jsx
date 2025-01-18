import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { IDL } from "../IDL/IDL.jsx";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { toast } from "react-toastify";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { ASSOCIATED_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { Buffer } from "buffer";
import { Connection, clusterApiUrl } from "@solana/web3.js";
window.Buffer = window.Buffer || Buffer;
export default function usePresale() {
  const { publicKey, wallet } = useWallet();
  const anchorWallet = useAnchorWallet();
  const network = clusterApiUrl("devnet");
  const connection = new Connection(network, "confirmed");
  const [transactionPending, setTransactionPending] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(1746480600);
  const [buyAmount, setBuyAmount] = useState(0);
  const [claimedAmount, setClaimedAmount] = useState(0);
  const [totalBuyAmount, setTotalBuyAmount] = useState(0);
  const [claimableAmount, setClaimableAmount] = useState(0);
  const [solAmount, setSolAmount] = useState(0);
  const [vaultAddress, setVaultAddress] = useState("");
  const PRESALE_PROGRAM_PUBKEY = new PublicKey(
    "8xX5wJKbT3vhuWkUMQKFfUqz3yiZDWQW7MysapmgcwvE"
  );
  const PRESALE_SEED = "BP_PRESALE_SEED";
  const VAULT_SEED = "BP_VAULT_SEED";
  const PRESALE_ID = 1;
  const PRESALE_AUTHORITY = new PublicKey(
    "HRGuUnMTgwFTZvXsQtqAtxGMm88Fvsae8LC6E3ZbXeuo"
  );
  const TOKEN_DECIMAL = 6;
  const TOKEN_PUBKEY = new PublicKey(
    "Gb3761R3YtqDgcu8R3AsEcW6FoE4vo439PjCjf1pUgK9"
  );
  const SOL_PRICEFEED_ID = new PublicKey(
    "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG"
  );
  const MIN_INVESTMENT = 0.5;
  const SOL_DECIMAL = 9;
  const END_DATE = new Date("2025-05-05T21:30:00Z");
  const USER_SEED = "BP_USER_SEED";
  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, PRESALE_PROGRAM_PUBKEY, provider);
    }
  }, [connection, anchorWallet, PRESALE_PROGRAM_PUBKEY]);

  useEffect(() => {
    const getPresaleInfo = async () => {
      console.log("program", program);
      if (program && !transactionPending) {
        try {
          // setLoading(true);
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
          console.log(presale_bump, vault_bump);
          setVaultAddress(vault.toBase58());
          const info = await program.account.presaleInfo.fetch(presale_info);
          console.log("==========info========", Number(info.soldTokenAmount));
          setSolAmount(Number(info.solAmount) / LAMPORTS_PER_SOL);
          setStartTime(info.startTime);
          setEndTime(info.endTime);
          setTotalBuyAmount(info.soldTokenAmount);
        } catch (error) {
          console.log(error);
        } finally {
          // setLoading(false);
        }
      }
    };

    const getUserInfo = async () => {
      if (program && publicKey && !transactionPending) {
        try {
          // setLoading(true);
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
          console.log(userBump);

          setClaimableAmount(
            Number(info.buyTokenAmount.toString()) / 10 ** TOKEN_DECIMAL
          );
          setBuyAmount(info.buyTokenAmount);
          setClaimedAmount(info.claimAmount);
          console.log("User Info : ", Number(info.buyTokenAmount));
          console.log("User Info : ", Number(info.claimAmount));
          console.log("User Info : ", info);
        } catch (error) {
          setClaimableAmount(0);
          console.log(error);
        } finally {
          // setLoading(false);
        }
      }
    };

    getPresaleInfo();
    getUserInfo();
  }, [publicKey, transactionPending, PRESALE_AUTHORITY, program]);
  useEffect(() => {
    const connection = new Connection(
      "https://devnet.helius-rpc.com/?api-key=46abf1b3-1a8f-4188-ba0d-440df5d307ab",
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
          // setLoading(true);
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
          console.log(presale_bump, vault_bump);
          setVaultAddress(vault.toBase58());
          const info = await program.account.presaleInfo.fetch(presale_info);
          console.log("==========info========", Number(info.soldTokenAmount));
          setSolAmount(Number(info.solAmount) / 10 ** 9);
          setStartTime(info.startTime);
          setEndTime(info.endTime);
          setTotalBuyAmount(info.soldTokenAmount);
        } catch (error) {
          console.log(error);
        } finally {
          // setLoading(false);
        }
      }
    };
    getPresaleInfo();
  }, [PRESALE_PROGRAM_PUBKEY, transactionPending,wallet]);

  const buyToken = async (solAmount, tokenAmount) => {
    console.log("solAmount", solAmount);
    if (program && publicKey) {
      try {
        // if (solAmount > MAX_INVESTMENT) {
        //   toast.error(`Buy less than ${MAX_INVESTMENT}SOL`);
        //   return false;
        // }

        const solWalletAmount = await connection.getBalance(publicKey);
        console.log("sol Amount", Number(Number(solWalletAmount) / 10 ** 9));
        if (Number(Number(solWalletAmount) / 10 ** 9) < solAmount) {
          toast.error(`You don't enough sol!`);
          return;
        }
        if (solAmount < MIN_INVESTMENT) {
          toast.error(`You cannot purchase less than 0.5 SOL!`);
          return;
        }

        console.log("solAmount", solAmount);
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
        console.log(vault_bump);
        const [userInfo, userBump] = findProgramAddressSync(
          [
            utf8.encode(USER_SEED),
            PRESALE_AUTHORITY.toBuffer(),
            publicKey.toBuffer(),
            new Uint8Array([PRESALE_ID]),
          ],
          program.programId
        );
        console.log(userBump, presaleBump);

        // Use BigInt for large number calculations
        // const tokenAmount = solAmount / tokenPriceFirstStep;

        const bitIntTokenAmount = new anchor.BN(
          tokenAmount * 10 ** TOKEN_DECIMAL
        );
        const bigIntSolAmount = new anchor.BN(solAmount * 10 ** SOL_DECIMAL);
         await program.methods
          .buyToken(
            bitIntTokenAmount,
            bigIntSolAmount, // sol amount = token amount * pricePerToken
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

        toast.success("Token purchase was successful.");

        return false;
      } catch (error) {
        console.log(error);
        toast.error(error.toString());
        return false;
      } finally {
        setTransactionPending(false);
      }
    } else {
      toast.error("Please connect wallet!");
    }
  };
  const claimToken = async () => {
    const currentTime = new Date().getTime();
    const endTimestamp = END_DATE.getTime();
    console.log();
    if (currentTime < endTimestamp) {
      toast.error("Please wait until finish presale!");
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
        console.log(presaleBump, userBump);
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
       await program.methods
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

        toast.success("Token claim was successful.");

        return false;
      } catch (error) {
        console.log(error);
        toast.error(error.toString());
        return false;
      } finally {
        setTransactionPending(false);
      }
    }
  };
  const getSolPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
      );
      const data = await response.json();
      const solPrice = data.solana.usd;
      if (!solPrice) {
        return 200;
      }
      return solPrice;
    } catch (error) {
      return 200;
      // console.error("Error fetching Solana price:", error);
    }
  };
  return {
    // createPresale,
    // depositToken,
    buyToken,
    claimToken,
    // updatePresale,
    // withdrawSol,
    getSolPrice,
    startTime,
    endTime,
    buyAmount,
    claimedAmount,
    totalBuyAmount,
    transactionPending,
    claimableAmount,
    solAmount,
    vaultAddress,
  };
}

// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelLoan } from "./types/loan/tx";
import { MsgRequestLoan } from "./types/loan/tx";
import { MsgApproveLoan } from "./types/loan/tx";
import { MsgLiquidateLoan } from "./types/loan/tx";
import { MsgRepayLoan } from "./types/loan/tx";
const types = [
    ["/cosmonaut.loan.loan.MsgCancelLoan", MsgCancelLoan],
    ["/cosmonaut.loan.loan.MsgRequestLoan", MsgRequestLoan],
    ["/cosmonaut.loan.loan.MsgApproveLoan", MsgApproveLoan],
    ["/cosmonaut.loan.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    ["/cosmonaut.loan.loan.MsgRepayLoan", MsgRepayLoan],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCancelLoan: (data) => ({ typeUrl: "/cosmonaut.loan.loan.MsgCancelLoan", value: data }),
        msgRequestLoan: (data) => ({ typeUrl: "/cosmonaut.loan.loan.MsgRequestLoan", value: data }),
        msgApproveLoan: (data) => ({ typeUrl: "/cosmonaut.loan.loan.MsgApproveLoan", value: data }),
        msgLiquidateLoan: (data) => ({ typeUrl: "/cosmonaut.loan.loan.MsgLiquidateLoan", value: data }),
        msgRepayLoan: (data) => ({ typeUrl: "/cosmonaut.loan.loan.MsgRepayLoan", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

import { JsonValue } from "type-fest";
import { Stake } from "../stake/Stake";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Blueprint = {
  aiData: JsonValue;
  buyPair: string | null;
  createdAt: Date;
  description: string | null;
  exchange: string | null;
  expiry: string | null;
  id: string;
  maxOrder: string | null;
  minOrder: string | null;
  name: string | null;
  sellPair: string | null;
  stake: string | null;
  stakeAmount: number | null;
  stakes?: Array<Stake>;
  stopLoss: string | null;
  successRate: number | null;
  takeProfit: string | null;
  tradeType: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};

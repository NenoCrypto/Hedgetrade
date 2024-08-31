import { Stake as TStake } from "../api/stake/Stake";

export const STAKE_TITLE_FIELD = "id";

export const StakeTitle = (record: TStake): string => {
  return record.id?.toString() || String(record.id);
};

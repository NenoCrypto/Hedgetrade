export type AppUserCreateInput = {
  email?: string | null;
  passwordHash?: string | null;
  rank?: number | null;
  role?: "Option1" | null;
  username?: string | null;
  walletAddress?: string | null;
};

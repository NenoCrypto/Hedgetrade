export type AppUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  passwordHash: string | null;
  rank: number | null;
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
  walletAddress: string | null;
};

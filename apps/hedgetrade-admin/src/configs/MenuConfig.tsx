import { SVGProps } from 'react';
import {
  DashboardIcon,
  WalletIcon,
  CartIcon,
  AddIcon,
  NoteBookIcon,
  StarIcon,
  LogoutIcon,
  UserIcon,
  NoteBookIconServer,
  ExchangeIcon,
  ClockIcon,
  RobotIcon,
  ProductIcon
} from "../Components/Icons";
import { IconProps } from '../Components/Icons/withIconProps';
import { CogIcon } from '../Components/Icons/CogIcon';

// Define types for the menu configuration
type SubMenuItem = {
  title: string;
  key: string;
};

type MenuItem = {
  title: string;
  icon: React.FC<IconProps>; // Using FC<IconProps> to match the HOC-wrapped icons
  submenu: SubMenuItem[];
  link:string
};

export const MenuConfig: MenuItem[] = [
  {
    title: "HedgeBoard",
    icon: DashboardIcon,
    submenu: [],
    link:'/'
  },
  {
    title: "Wallet",
    icon: WalletIcon,
    submenu: [],
    link:'/wallet'
  },
  {
    title: "Swap",
    icon: ExchangeIcon,
    submenu: [],
    link:'/buy-aca-tokens'
  },
  {
    title: "AutoTrader",
    icon: ProductIcon,
    submenu: [],
    link:'/auto-trader'
  },
  {
    title: "BluePrint Market",
    icon: DashboardIcon,
    submenu: [],
    link:'/blueprint-market'
  },
  {
    title: "Create BluePrint",
    icon: AddIcon,
    submenu: [],
    link:'/create-blueprint'
  },
  {
    title: "My BluePrints",
    icon: NoteBookIcon,
    submenu: [],
    link:'/my-blueprints'
  },
  {
    title: "Purchased BluePrints",
    icon: CartIcon,
    submenu: [],
    link:'/purchased-blueprints'
  },
  {
    title: "Account History",
    icon: ClockIcon,
    submenu: [],
    link:'/purchased-blueprints'
  },
  {
    title: "LeaderBoard",
    icon: StarIcon,
    submenu: [],
    link:'/leaderboard'
  },
  {
    title: "My Account",
    icon: UserIcon,
    submenu: [],
    link:'/my-account'
  },
  {
    title: "Hedge Guide",
    icon: NoteBookIconServer,
    submenu: [],
    link:'/how-to-guide'
  },
  {
    title: "Logout",
    icon: LogoutIcon,
    submenu: [],
    link:'/logout'
  },
];

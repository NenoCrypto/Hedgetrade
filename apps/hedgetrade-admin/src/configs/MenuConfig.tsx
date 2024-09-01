import { SVGProps } from 'react';
import {
  DashboardIcon,
  TicketIcon,
  WaterMeterIcon,
  UsageIcon,
  RoleIcon,
  UserIcon,
  AlertIcon,
  SettingsIcon,
  DocumentIcon,
  SupplierCustomerIcon,
  ProductIcon,
  PaymentIcon,
  LogsIcon
} from "../Components/Icons";
import { IconProps } from '../Components/Icons/withIconProps';

// Define types for the menu configuration
type SubMenuItem = {
  title: string;
  key: string;
};

type MenuItem = {
  title: string;
  icon: React.FC<IconProps>; // Using FC<IconProps> to match the HOC-wrapped icons
  submenu: SubMenuItem[];
};

export const MenuConfig: MenuItem[] = [
  {
    title: "HedgeBoard",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "Deposit & Withdrawal",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "Buy Tokens",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "AutoTrader",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "BluePrint Market",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "My BluePrints",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "Purchased BluePrints",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "LeaderBoard",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "My Account",
    icon: DashboardIcon,
    submenu: []
  },
  {
    title: "How To Guide",
    icon: DashboardIcon,
    submenu: []
  },
];

import React, { ReactNode } from 'react';
import { Layout as ReactAdminLayout, LayoutProps } from 'react-admin';
import { SideMenu } from './SideMenu';

interface CustomLayoutProps extends LayoutProps {
  children: ReactNode;
}

// export const AppBar = () => {
//   return(
//     <>
//     d
//     </>
//   )
// }
export const Layout: React.FC<CustomLayoutProps> = ({ children, ...props }) => (
  <ReactAdminLayout menu={SideMenu}  {...props} >
    {children}
  </ReactAdminLayout>
);

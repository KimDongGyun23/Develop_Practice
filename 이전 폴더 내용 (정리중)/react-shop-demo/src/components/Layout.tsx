import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="bg-white min-h-screen max-w-[600px] m-auto relative">
        {children}
      </div>
    </div>
  );
};

export default Layout;

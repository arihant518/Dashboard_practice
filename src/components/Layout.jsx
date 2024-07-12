import React, { useState } from 'react';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SideBar open={open} setOpen={setOpen} />
      <main style={{ margin: open ? '80px 0 0 240px' : '80px 0 0 64px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

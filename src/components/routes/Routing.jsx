import React from 'react';
import { Outlet, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Layout from '../Layout';
import Order from '../Order';
import Inventory from '../Inventory';
import Conversation from '../Conversation';
import Settings from '../Settings';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout> <Outlet /> </Layout>}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;

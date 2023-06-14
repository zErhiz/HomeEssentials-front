import React from 'react';
import fondo from '../../public/images/Logos/hoe-b.png'
import { Link as Anchor } from 'react-router-dom';
import NavigationComponent from './AdminComponents/NavigationComponent';
const AdminPanel = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Barra de al lado */}
    <NavigationComponent/>
      {/* Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default AdminPanel;
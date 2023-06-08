import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import MiddleNavBar from './MiddleNavBar';
import SearchAndLogoNavbar from './SearchAndLogoNavbar';
import CategoriesNav from './CategoriesNav';


const NavBar = () => {
  return (
    <>
      <MiddleNavBar />
      <SearchAndLogoNavbar />
      {/*   <CategoriesNav />  */}
    </>
  );
};

export default NavBar;
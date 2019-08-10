import React, { useContext } from 'react';
import LayoutContext from '../LayoutContext';
import Navbar from './Navbar';

const Component = props => {
  const {
    navigation: { collapse, toggleNavigation },
  } = useContext(LayoutContext);

  return (
    <Navbar
      collapse={collapse}
      toggleNavigation={toggleNavigation}
      {...props}
    />
  );
};

export default Component;

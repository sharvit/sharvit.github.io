import React, { useContext } from 'react';
import LayoutContext from '../../../Layout/LayoutContext';
import ProfileBackground from './ProfileBackground';

const Component = props => {
  const {
    navigation: { collapse },
  } = useContext(LayoutContext);

  return <ProfileBackground navbarCollapsed={collapse} {...props} />;
};

export default Component;

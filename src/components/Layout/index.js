import React, { useState } from 'react';

import { LayoutProvider } from './LayoutContext';
import { useSiteTitle } from './LayoutData';
import Layout from './Layout';

const Component = (props) => {
  const [collapse, setCollapse] = useState(true);
  const toggleNavigation = () => setCollapse(!collapse);

  return (
    <LayoutProvider value={{ navigation: { collapse, toggleNavigation } }}>
      <Layout {...props} siteTitle={useSiteTitle()} />
    </LayoutProvider>
  );
};

export default Component;

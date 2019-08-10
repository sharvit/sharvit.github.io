import React from 'react';

const LayoutContext = React.createContext({
  navigation: {
    collapse: true,
  },
});

export const LayoutProvider = LayoutContext.Provider;

export default LayoutContext;

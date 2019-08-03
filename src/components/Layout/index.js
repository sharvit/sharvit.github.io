import React from 'react';

import { getSiteTitle } from './LayoutData';
import Layout from './Layout';

const Component = props => <Layout {...props} siteTitle={getSiteTitle()} />;

export default Component;

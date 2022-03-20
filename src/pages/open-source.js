import React from 'react';

import { Layout, Seo } from '../components';
import { AllOpenSourceSection } from '../modules/open-source';

const OpenSourcePage = () => (
  <Layout
    breadcrumbs={[{ title: 'Open Source Projects', path: '/open-source' }]}
  >
    <Seo title="Open Source Projects" />
    <AllOpenSourceSection />
  </Layout>
);

export default OpenSourcePage;

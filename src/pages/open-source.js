import React from 'react';

import { Layout, Seo } from '../components';
import { AllOpenSourceSection } from '../modules/open-source';

export const Head = () => <Seo title="Open Source Projects" />;

const OpenSourcePage = () => (
  <Layout
    breadcrumbs={[{ title: 'Open Source Projects', path: '/open-source' }]}
  >
    <AllOpenSourceSection />
  </Layout>
);

export default OpenSourcePage;

import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AllOpenSourceSection from '../components/OpenSource/AllOpenSourceSection';

const OpenSourcePage = () => (
  <Layout
    breadcrumbs={[{ title: 'Open Source Projects', path: '/open-source' }]}
  >
    <SEO title="Open Source Projects" />
    <AllOpenSourceSection />
  </Layout>
);

export default OpenSourcePage;

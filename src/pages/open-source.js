import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AllOpenSourceSection from '../components/OpenSource/AllOpenSourceSection';

const SecondPage = () => (
  <Layout>
    <SEO title="open source" />
    <AllOpenSourceSection />
  </Layout>
);

export default SecondPage;

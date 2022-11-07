import * as React from 'react';

import { Layout, Seo } from '../components';
import { ProfileSection, useHomeCoverImage } from '../profile';
import { BlogSection } from '../blog';
import { OpenSourceSection } from '../open-source';

import * as pageStyles from './page.module.css';

export const Head = () => <Seo />;

export default function IndexPage() {
  const coverImage = useHomeCoverImage();

  return (
    <Layout
      transparent
      className={pageStyles.pageFluid}
      coverImage={
        coverImage && {
          image: coverImage,
          alt: 'Avi Sharvit',
        }
      }
    >
      <ProfileSection />
      <OpenSourceSection />
      <BlogSection />
    </Layout>
  );
}

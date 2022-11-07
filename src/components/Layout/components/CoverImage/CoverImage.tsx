import React from 'react';
import classNames from 'classnames';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as styles from './CoverImage.module.css';

// eslint-disable-next-line no-undef
export type CoverImageSharp = Queries.CoverImageSharpFragment;

export interface CoverImageProps {
  alt: string;
  image: CoverImageSharp;
  className?: string;
}

export const query = graphql`
  fragment CoverImageSharp on ImageSharp {
    gatsbyImageData(layout: FULL_WIDTH)
  }
`;

export const CoverImage = ({ alt, image, className }: CoverImageProps) => {
  return (
    <GatsbyImage
      className={classNames(styles.coverImage, className)}
      image={getImage(image) as IGatsbyImageData}
      alt={alt}
    />
  );
};

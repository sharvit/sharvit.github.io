/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import { GatsbyNode } from 'gatsby';
import type { Express } from 'express';

import {
  createBlogPostPages,
  createPdfPages,
  createPdfsFromPages,
} from './config/node';

import { createBrowser, createPdfFile } from './config/node/pdf-pages/utils';

const PDF_INPUT_PATH = './src/pdf-pages';
const PDF_OUTPUT_PATH = '/pdf';

export const createPages: GatsbyNode['createPages'] = async (args) => {
  await createBlogPostPages(args);
  createPdfPages({
    ...args,
    inputPath: PDF_INPUT_PATH,
    outputPath: PDF_OUTPUT_PATH,
  });
};

export const onPostBuild: GatsbyNode['onPostBuild'] = async (args) => {
  await createPdfsFromPages(args.getNodes(), args.actions);
};

export const onCreateDevServer: GatsbyNode['onCreateDevServer'] = async (
  args
) => {
  const app = args.app as Express;
  const browser = await createBrowser();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.get(`${PDF_OUTPUT_PATH}/:page.pdf`, async (req, res) => {
    const protocol = req.protocol;
    const host = req.get('host') || 'localhost';
    const page = req.params.page;

    const url = `${protocol}://${host}${PDF_OUTPUT_PATH}/${page}`;

    const pdfBuffer = await createPdfFile({
      browser,
      url,
    });

    res.set('Content-Type', 'application/pdf');
    res.send(pdfBuffer);
  });
};

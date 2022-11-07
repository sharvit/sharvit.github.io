import { CreatePagesArgs } from 'gatsby';

import { createPdfPageDefenitions } from './utils';

const createPdfPage = (
  component: string,
  path: string,
  createPagesArgs: CreatePagesArgs
) =>
  createPagesArgs.actions.createPage<{ pdf: boolean }>({
    component,
    path,
    context: { pdf: true },
  });

export interface CreatePdfPagesArgs extends CreatePagesArgs {
  inputPath: string;
  outputPath: string;
}

export const createPdfPages = (createPagesArgs: CreatePdfPagesArgs) => {
  const pdfPageDefenitions = createPdfPageDefenitions(
    createPagesArgs.inputPath,
    createPagesArgs.outputPath
  );

  for (const { component, path } of pdfPageDefenitions) {
    createPdfPage(component, path, createPagesArgs);
  }
};

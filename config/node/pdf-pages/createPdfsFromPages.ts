import path from "path";
import fs from "fs";
import { Actions, Node } from "gatsby";

import { createBrowser, createPdfFile } from "./utils";

export const createPdfsFromPages = async (
  gatsbyNodes: Node[],
  gatsbyActions: Actions,
) => {
  const pdfNodes = gatsbyNodes.filter(
    (node) => (node.context as { pdf: boolean })?.pdf === true,
  );

  const browser = await createBrowser();

  for (const pdfNode of pdfNodes) {
    const nodePath = pdfNode.path as string;
    const nodeName = nodePath.endsWith("/") ? nodePath.slice(0, -1) : nodePath;

    const nodeHtmlPath = path.resolve(`./public/${nodeName}/index.html`);
    const nodePdfPath = path.resolve(`./public/${nodeName}.pdf`);

    const pdfHtmlContent = fs.readFileSync(nodeHtmlPath, "utf8");

    await createPdfFile({
      browser,
      htmlContent: pdfHtmlContent,
      outputPath: nodePdfPath,
    });

    gatsbyActions.deletePage({
      path: nodePath,
      component: pdfNode.component as string,
    });
  }

  await browser.close();
};

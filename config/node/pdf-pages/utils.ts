import path from "path";
import fs from "fs";
import puppeteer, { Browser, PDFOptions } from "puppeteer";

export const createPdfPageDefenitions = (
  inputPath: string,
  outputPath: string,
) => {
  const pdfPagesFolder = path.resolve(inputPath);
  const pdfPages = fs.readdirSync(pdfPagesFolder);

  return pdfPages
    .filter((pdfPage) => pdfPage.match(/.\.[ts|tsx|js|jsx]/))
    .map((pdfPage) => ({
      component: path.resolve(inputPath, pdfPage),
      path: `${outputPath}/${pdfPage.replace(".tsx", "")}`,
    }));
};

export const createBrowser = async () => puppeteer.launch({ headless: true });

export interface ICreatePdfFileOptions {
  browser: Browser;
  url?: string;
  htmlContent?: string;
  outputPath?: string;
}
export const createPdfFile = async ({
  browser,
  url,
  htmlContent,
  outputPath,
}: ICreatePdfFileOptions) => {
  const browserPage = await browser.newPage();

  if (url) {
    await browserPage.goto(url);
  } else if (htmlContent) {
    await browserPage.setContent(htmlContent);
  } else {
    throw new Error("Either url or htmlContent must be provided");
  }

  const pdfOptions: PDFOptions = {
    format: "A4",
    printBackground: true,
    omitBackground: true,
  };

  if (outputPath) {
    pdfOptions.path = outputPath;
  }

  const pdfBuffer = await browserPage.pdf(pdfOptions);
  await browserPage.close();

  return pdfBuffer;
};

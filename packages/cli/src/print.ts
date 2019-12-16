import { promises } from "fs";
import { join } from "path";
import { launch } from "puppeteer-core";

import * as minimist from "minimist";

const { writeFile } = promises;

async function main() {
    const args = minimist(process.argv);

    const pageParam = args.page;
    const chromiumPath = args.chromium || "chromium";

    const browser = await launch({ 
        headless: true,
        executablePath: chromiumPath,
    });

    const page = await browser.newPage();

    const url = `file://${join(__dirname, `../../../index.html?page=${pageParam}`)}`;
    await page.goto(url, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({ 
        format: "A4",
        printBackground: true,
    });

    await browser.close();

    const path = join(__dirname, `../../../data/${pageParam}.pdf`);
    await writeFile(path, pdf);

    console.log(`Created file ${path}.`);
}

main();

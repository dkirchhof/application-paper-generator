# application paper generator

## Installation
1. Install dependencies:
    ```sh
    yarn
    ```

1. Build packages:
    ```sh
    yarn build
    ```

## Usage
1. Insert your personal data into `data/data.js`.  
The shape of the data is specified in `packages/template/src/types/data.ts`.

1. Place an image of you and your sign into the `data` folder. Insert the filenames into the `data.me.avatar` and `data.me.sign` fields.

1. Optionally: Review your application paper. Just open the `index.html` with `page` param set to `coverletter` or `cv` (example: `file://.../index.html?page=cv`).

1. Create pdfs by using the printing dialog of your browser or by using the cli.
    If you don't have chromium in your path variable or want to use another chromium based browser, use the `--chromium` argument to specify the path to it's executable:
    ```sh
    yarn create-pdf --page=coverletter [--chromium=path_to_chromium_based_browser]
    yarn create-pdf --page=cv [--chromium=path_to_chromium_based_browser]
    ```

1. Merge all necessary files with a tool of your choice. You can see an example with `pdfunite` (provided in the poppler package) in the `combine.sh` file.
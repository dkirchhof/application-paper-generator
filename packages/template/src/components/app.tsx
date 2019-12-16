import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { IData } from "../types/data";
import { CV } from "./cv/cv";
import { CoverLetter } from "./coverLetter/coverLetter";
import { Error } from "./error";

const Style = createGlobalStyle`

    @page {
        margin: 1.5cm 0 1.5cm 0; 
    }

    @page:first { 
        margin-top: 0cm; 
    }

    html {
        color: #3a3a3a;
        
        font-family: sans-serif;
        font-size: 10pt;
    }

    body {
        margin: 0;    
    }

    /* #app {
        width: 21.0cm;
        height: 29.7cm;

        border: 1px dashed;
    } */

    main {
        padding: 0.8cm 1.5cm;
    }

    a {
        color: inherit;
    }
`;

const getQueryParams = () => {

    const reduceQueryProp = (obj: object, q: string) => {
        const [key, value] = q.split("=");

        return { ...obj, [key]: value };
    }

    return location.search
        .slice(1)
        .split("&")
        .reduce(reduceQueryProp, {}) as { [x: string]: string };
}

const pageToComp = (page: string, data: IData) => {
    const errorRenderer = <Error message="page param is missing" />;

    if (!page) {
        return errorRenderer;
    }

    switch (page.toLowerCase()) {
        case "coverletter": return <CoverLetter me={data.me} coverLetterData={data.coverLetterData} />;
        case "cv": return <CV me={data.me} cvData={data.cvData} />;

        default: return errorRenderer;
    }
}

export const App = () => {
    const { page } = getQueryParams();
    const { data } = (window as any);

    const pageComponent = pageToComp(page, data);

    return (
        <>
            <Style />
            {pageComponent}
        </>
    );
};

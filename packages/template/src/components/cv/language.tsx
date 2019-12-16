import * as React from "react";

import { ILanguage } from "../../types/data";

interface IProps {
    language: ILanguage;
}

export const Language = (props: IProps) => (
    <li>{props.language.name}: {props.language.level}</li>    
);

import * as React from "react";

interface IProps {
    software: string;
}

export const Software = (props: IProps) => (
    <li>{props.software}</li>
);

import * as React from "react";
import styled from "styled-components";

interface IProps {
    keywords: string[];
}

const List = styled.div`
    margin: 0px -2px;
`;

const Keyword = styled.span`
    display: inline-block;
    padding: 2px 4px;
    margin: 2px;

    background-color: #dadada;
`;

export const KeywordList = (props: IProps) => (
    <List>
        {props.keywords.map((k, i) => <Keyword key={i}>{k}</Keyword>)}
    </List>
);

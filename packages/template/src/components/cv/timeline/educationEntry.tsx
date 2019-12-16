import * as React from "react";
import styled from "styled-components";

import { IEducationEntry } from "../../../types/data";
import { TimelineEntry } from "./timelineEntry";
import { KeywordList } from "./keywordList";

interface IProps {
    education: IEducationEntry;
}

const School = styled.div`
    font-size: 11pt;
`;

export const EducationEntry = (props: IProps) => (
    <TimelineEntry timelineEntry={props.education}>
        <School>{props.education.school}</School>
        <div>Abschlussnote: {props.education.grade.toLocaleString("de")}</div>
        {props.education.thesis && <div>Abschlussarbeit: {props.education.thesis}</div>}
        {props.education.subjects && <div>Abiturfächer: {props.education.subjects}</div>}
        <KeywordList keywords={props.education.keywords}/>
    </TimelineEntry>
);

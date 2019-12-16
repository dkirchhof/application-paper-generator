import * as React from "react";
import styled from "styled-components";

import { TimelineEntry } from "./timelineEntry";
import { IExperienceEntry } from "../../../types/data";
import { KeywordList } from "./keywordList";

interface IProps {
    experience: IExperienceEntry;
}

const Company = styled.div`
    font-size: 11pt;
`;

export const ExperienceEntry = (props: IProps) => (
    <TimelineEntry timelineEntry={props.experience}>
        <Company>{props.experience.company}</Company>
        {props.experience.tasks.map((t, i)=> (
            <div key={i}>
                <div>{t.name}</div>
                <KeywordList keywords={t.keywords}/>
            </div>
        ))}
    </TimelineEntry>
);

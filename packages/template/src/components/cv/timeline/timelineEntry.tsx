import * as React from "react";
import styled from "styled-components";

import { ITimelineEntry } from "../../../types/data";

interface IProps {
    timelineEntry: ITimelineEntry;
    children?: any;
}

const Container = styled.div`
    position: relative;
    padding-left: 1em;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        
        border-left: 1px solid #969595;
    }

    &:first-child {
        &&::before {
            top: 1em;
        }
    }

    &:not(:last-child) {
        padding-bottom: 2em;
    }

`;

const NameAndDate = styled.div`
    display: flex;
    
    font-size: 12pt;

    &::before {
        content: "●";
        
        position: absolute;
        left: -6px;
        top: -5px;
        
        color: #969595;

        font-size: 16pt;
    }
`;

const Name = styled.div`
    flex: 1;

    font-weight: bold;
`;

const Date = styled.div`
    color: #969595;
`;


export const TimelineEntry = (props: IProps) => (
    <Container>
        <NameAndDate>
            <Name>{props.timelineEntry.name}</Name>
            <Date>{props.timelineEntry.date}</Date>
        </NameAndDate>
        {props.children}
    </Container>
);
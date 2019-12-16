import * as React from "react";
import styled from "styled-components";

import { ICoverLetterData } from "../../types/data";

interface IProps {
    applicationJobName: string;
}

const Container = styled.header`
    padding: 1.5cm;

    color: white;
    background: #3a3a3a;
`;

const Job = styled.div`
    font-size: 1.7em;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Header = ({ applicationJobName }: IProps) => (
    <Container>
        <Job>{applicationJobName}</Job>
    </Container>
);

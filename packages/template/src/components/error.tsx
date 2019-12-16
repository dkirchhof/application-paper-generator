import * as React from "react";
import styled from "styled-components";

interface IProps {
    message: string;
}

const Container = styled.main`
    font-size: 100px;
    text-align: center;
`;

export const Error = ({ message }: IProps) => <Container>{message}</Container>;

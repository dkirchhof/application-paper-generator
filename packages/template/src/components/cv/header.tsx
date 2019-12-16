import * as React from "react";
import styled from "styled-components";

import { IMe } from "../../types/data";

const Container = styled.header`
    display: flex;
    align-items: center;

    padding: 1.5cm;

    color: white;
    background: #3a3a3a;
`;

const NameAndJob = styled.div`
    flex: 1;
    margin: 0cm 1cm;

    text-transform: uppercase;
`;

const Name = styled.div`
    margin-bottom: 0.1cm;

    font-size: 1.7em;
    font-weight: bold;
`;

const Avatar = styled.div<{ img: string; }>`
    display: inline-block;
    width: 3cm;
    height: 3cm;

    background-color: currentColor;
    background-image: url(${props => props.img});
    background-size: cover;

    border-radius: 50%;
`;

interface IProps {
    me: IMe;
}

export const Header = ({ me }: IProps) => (
    <Container>
        <Avatar img={`data/${me.avatar}`}/>
        
        <NameAndJob>
            <Name>{me.firstname} {me.lastname}</Name>
            <div>{me.job}</div>
        </NameAndJob>

        <div>
            <div>a: {me.address}, {me.city}</div>
            <div>t: {me.phoneNumber}</div>
            <div>e: {me.mail}</div>
        </div>
    </Container>
);

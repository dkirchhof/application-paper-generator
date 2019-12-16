import * as React from "react";
import styled from "styled-components";

import { H2 } from "../h2";
import { Block } from "../block";
import { HR } from "../hr";
import { IMe, ICoverLetterData } from "../../types/data";
import { Header } from "./header";

interface IProps {
    coverLetterData: ICoverLetterData;
    me: IMe;
}

const Address = styled.div`
    margin-bottom: 1em;

    line-height: 1.5em;
`;

const Job = styled(H2)`
    margin-bottom: 1em;
`;

const MultiColumns = styled.div`
    display: flex;
`;

const Greeting = styled.div`
    flex: 1;

    font-size: 11pt;
    font-weight: bold;
`;

const DateAndCity = styled.div`
    color: #969595;

    font-size: 11pt;
`;

const Salutation = styled.div`
    margin-bottom: 1em;

    font-size: 11pt;
`;

const Sign = styled.img`

`;

const Name = styled.div`
    margin-bottom: 1em;

    font-size: 12pt;
    font-weight: bold;
`;

const P = styled.p`
    text-align: justify;
`;

const Appendix = styled.div`
    position: fixed;
    bottom: 1.5cm;
`;

export const CoverLetter = ({ coverLetterData, me }: IProps) => (
    <>
        <Header applicationJobName={coverLetterData.applicationJobName}/>
        <Block as="main">
            <div>
                <Address>
                    <H2>Empfänger</H2>
                    <div>{coverLetterData.receiver.company}</div>
                    <div>{coverLetterData.receiver.department}</div>
                    <div>z.Hd. {coverLetterData.receiver.name}</div>
                    <div>{coverLetterData.receiver.address}</div>
                    <div>{coverLetterData.receiver.city}</div>
                </Address>

                <Address>
                    <H2>Absender</H2>
                    <div>{me.firstname} {me.lastname}</div>
                    <div>{me.address}</div>
                    <div>{me.city}</div>
                    <div>{me.phoneNumber}</div>
                    <div>{me.mail}</div>
                </Address>
            </div>
            <div>
                <Job>Bewerbung als {coverLetterData.applicationJobName}</Job>
                
                <MultiColumns>
                    <Greeting>{coverLetterData.greeting}</Greeting>
                    <DateAndCity>{coverLetterData.city}, {coverLetterData.date}</DateAndCity>
                </MultiColumns>

                {coverLetterData.content.map((c, i) => <P key={i} dangerouslySetInnerHTML={{ __html: c }}></P>)}

                <Salutation>{coverLetterData.salutation}</Salutation>
                <Sign src={`data/${me.sign}`}/>
                <Name>{me.firstname} {me.lastname}</Name> 

                <HR/>

                <Appendix>
                    <b>Anlagen:</b> Lebenslauf, Zeugnisse, Zertifikate
                </Appendix>
            </div>
        </Block>    
    </>
);

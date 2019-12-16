import * as React from "react";
import styled from "styled-components";
import { Block } from "../block";
import { H2 } from "../h2";
import { EducationEntry } from "./timeline/educationEntry";
import { ExperienceEntry } from "./timeline/experienceEntry";
import { HR } from "../hr";
import { Language } from "./language";
import { Software } from "./software";
import { ICVData, IMe } from "../../types/data";
import { Header } from "./header";

interface IProps {
    cvData: ICVData;
    me: IMe;
}

const MultiColumns = styled.div`
    display: flex;
`;

const Column = styled.div`
    flex: 1 0 0%;
    padding: 0 1em;

    border-left: 1px solid #969595;
    border-right: 1px solid #969595;

    &:first-child {
        padding: 0 1em 0 0;
        border: none;
    }

    &:last-child {
        padding: 0 0 0 1em;
        border: none;
    }

    > ul {
        padding-left: 19px;
    }
`;

export const CV = ({ cvData, me }: IProps) => (
    <>
        <Header me={me}/>
        <main>
            <div>
                <Block>
                    <H2>Bildungsweg</H2>
                    <div>{cvData.educations.map((e, i) => <EducationEntry key={i} education={e} />)}</div>
                </Block>

                <Block>
                    <H2>Berufliche Erfahrung</H2>
                    <div>{cvData.professionalExperiences.map((e, i) => <ExperienceEntry key={i} experience={e} />)}</div>
                </Block>

                <Block>
                    <H2>Praktische Erfahrung</H2>
                    <div>{cvData.practicalExperiences.map((e, i) => <ExperienceEntry key={i} experience={e} />)}</div>
                </Block>
            </div>

            <HR />

            <MultiColumns>
                <Column>
                    <H2>Persönliche Angaben</H2>
                    <ul>
                        <li>Geburtstag: {me.birthdate}</li>
                        <li>Geburtsort: {me.birthplace}</li>
                        <li>Staatsangehörigkeit: {me.nationality}</li>
                        <li>Familienstand: {me.familyStatus}</li>
                    </ul>
                </Column>
                <Column>
                    <H2>Sprachen</H2>
                    <ul>{cvData.languages.map((l, i) => <Language key={i} language={l} />)}</ul>
                </Column>
                <Column>
                    <H2>Software</H2>
                    <ul>{cvData.software.map((s, i) => <Software key={i} software={s} />)}</ul>
                </Column>
            </MultiColumns>
        </main>
    </>
);

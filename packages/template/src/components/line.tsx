import styled from "styled-components";

export const Line = styled.div<{ noMargin?: boolean; }>`
    display: flex;

    &:not(:last-of-type) {
        margin-bottom: ${props => props.noMargin ? 0 : .2}cm;
    }

    > div:nth-child(1) {
        flex-shrink: 0;
        width: 4cm;
    }
`;

import styled from "styled-components";

export const Block = styled.div`
    display: flex;

    > *:nth-child(1) {
        flex: 1;
    }

    > *:nth-child(2) {
        flex: 2;
        padding-bottom: 2em;
    }

    &:not(:last-child) {
        margin-bottom: 2em;
        
        > *:nth-child(2) {
            border-bottom: 1px solid #969595;
        }
    }
`;

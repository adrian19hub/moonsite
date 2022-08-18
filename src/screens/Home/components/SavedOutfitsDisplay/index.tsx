import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import React, { CSSProperties } from 'react';

interface Props {
}
const Container = styled.div<{ style?: CSSProperties }>`
`;

const CompactSavedOutfitsDisplay = (props: Props) => {
    return <Container>
        <Paper sx={{ backgroundColor: 'orange' }} />
        <Paper />
    </Container>;
};

export default CompactSavedOutfitsDisplay;

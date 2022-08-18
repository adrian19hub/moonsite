import React from 'react';
import ChooseClothingBtns from './components/ChooseClothingBtns';
import CompactSavedOutfitsDisplay from './components/SavedOutfitsDisplay';
import TotalItemsCountDisplay from './components/TotalItemsCountDisplay';
import * as Styles from './Home.styled';

interface Props {
}

const Home: React.FC = (props: Props) => {
    return <Styles.HomeContainer>
        <CompactSavedOutfitsDisplay />
        <TotalItemsCountDisplay />
        <ChooseClothingBtns />
    </Styles.HomeContainer>;
};

export default Home;

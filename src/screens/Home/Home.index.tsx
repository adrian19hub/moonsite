import React from 'react';
import ChooseClothingBtns from './components/ChooseClothingBtns/ChooseClothingBtns.index';
import CompactSavedOutfitsDisplay from './components/SavedOutfitsDisplay/CompactSavedOutfitsDisplay.index';
import TotalItemsCountDisplay from './components/TotalItemsCountDisplay/TotalItemsCountDisplay.index';
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

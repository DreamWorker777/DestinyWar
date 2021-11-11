import './Home.scss';

import TopMenu from '../components/TopMenu/TopMenu';
import NavBar from '../components/NavBar/NavBar';
import Intro from '../components/Intro/Intro';
import Characters from '../components/Characters/Characters';
import Fighter from '../components/Fighter/Fighter';
import BuyCharacter from '../components/BuyCharacter/BuyCharacter';
import RoadMap from '../components/RoadMap/RoadMap';
import FooterComponent from '../components/FooterComponent/FooterComponent';

import back from '../assets/img/bg.png';

export const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url('${back}')` }}>
            <TopMenu />
            <NavBar />
            <Intro />
            <Characters />
            <Fighter />
            <BuyCharacter />
            <RoadMap />
            <FooterComponent />
        </div>
    )
};

export default Home;
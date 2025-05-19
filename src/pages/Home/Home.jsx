import Navigation from '../../components/Navigation/Navigation';
import SectionEight from './components/SectionEight';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionSeven from './components/SectionSeven';
import SectionSix from './components/SectionSix';
import Sectionthree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './home.style.css'

const Home = () => {
    return (
        <div className='home-wrapper'>
            <Navigation/>
            <SectionOne />
            <SectionTwo/>
            <Sectionthree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
        </div>
    )

};

export default Home;
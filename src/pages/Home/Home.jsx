import Navigation from '../../components/Navigation/Navigation';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
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
        </div>
    )

};

export default Home;
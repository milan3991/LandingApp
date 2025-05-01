import Navigation from '../../components/Navigation/Navigation';
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
        </div>
    )

};

export default Home;
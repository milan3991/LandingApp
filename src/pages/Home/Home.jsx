import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import './home.style.css'

const Home = () => {
    return (
        <div className='home-wrapper'>
            <SectionOne />
            <SectionTwo/>
        </div>
    )

};

export default Home;
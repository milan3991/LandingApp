import '../home.style.css'
import sectionfive from '../../../assets/sectionfiveimg.png';
import GlobalButton from '../../../components/GlobalButton/GlobalButton';

const SectionFive = () => {
    const handleVideo = () => {
        window.open('https://www.youtube.com/watch?v=I0vQ_VLZTWg', '_blank');
    }

    return (
        <div className='sectionfive_wrapper'>
            <h1>The World's Easiest Data Warehouse</h1>
            <img src={sectionfive} alt="Section five image" />
            <div className='sectionfive_buttons'>
                <span><GlobalButton text="Any data" handleClick={handleVideo} className='global_button' /></span>
                <span><GlobalButton text="Smart Data Warehouse" handleClick={handleVideo} className='global_button' /></span>
                <span><GlobalButton text="Any Visualization Tool" handleClick={handleVideo} className='global_button' /></span>
            </div>
        </div>
    )
}

export default SectionFive;
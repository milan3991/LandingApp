import '../home.style.css'
import sectionone from '../../../assets/sectiononeimg.png';
import GlobalButton from '../../../components/GlobalButton/GlobalButton';
import godaddy from '../../../assets/godaddy.png';

const SectionOne = () => {

    const handleVideo = () => {
        window.open('https://www.youtube.com/watch?v=I0vQ_VLZTWg', '_blank'); 
    }

    return (
        <div className='sectionone_wrapper'>
            <div className='sectionone_left'>
                <img src={sectionone} alt="Section one image" />
            </div>
            <div className='sectionone_right'>
                <h1>Transform your data into analytics under 10 minutes</h1>
                <p>Streamline time and value for your data engineers, scientists, and analysts using our cloud-based data warehouse platform</p>
                <GlobalButton text="Watch 2-Min Demo Video" handleClick={handleVideo} className = 'global_button'/>
                <img src={godaddy} alt="Go daddy" />
                <p><span style={{ fontWeight: 'bold' }}>"Panoply enables non technical people to get questions answered more easily."</span>- Nissim, Director of product</p>
            </div>
        </div>
    )
}

export default SectionOne;
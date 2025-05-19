import '../home.style.css'
import GlobalButton from '../../../components/GlobalButton/GlobalButton';

const SectionSevenCard = ({ image, header, text, price, extraClass }) => {
  const handleVideo = () => {
        window.open('https://www.youtube.com/watch?v=I0vQ_VLZTWg', '_blank'); 
    }

    return (
        <div className={`section_seven_part ${extraClass}`}>
            <h3>{header}</h3>
            {image}
            <div>
                <span className='price'>{price}</span><span>/mo</span>
            </div>
            <p>{text}</p>
            <GlobalButton text="Start free trial" handleClick={handleVideo} className = 'section_seven_button'/>
        </div>
    )
};

export default SectionSevenCard;
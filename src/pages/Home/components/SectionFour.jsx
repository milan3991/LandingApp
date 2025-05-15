import '../home.style.css'
import sectionfour from '../../../assets/sectionfourimg.png';

const SectionFour = () => {

    return (
        <div className='sectionfour_wrapper'>
            <div className='sectionfour_left'>
                <h1>Big data simplified</h1>
                <p>No schema, no modeling, no configuration. Panoply utilizes machine learning and natural language processing (NLP) to learn, model and automate the standard data management activities performed by data engineers, server developers and data scientists, saving thousands of code lines and countless hours of debugging and research.</p>
            </div>
            <div className='sectionfour_right'>
                <img src={sectionfour} alt="Section four image" />
            </div>
        </div>
    )
}

export default SectionFour;
import GlobalButton from "../../../components/GlobalButton/GlobalButton";
import panoplylogo from "../../../assets/logos/panoplylogo.png"
const SectionEight = () => {
    const handleVideo = () => {
        window.open('https://www.youtube.com/watch?v=I0vQ_VLZTWg', '_blank');
    }

    return (
        <div>
            <div className="section_eight_wrapper">
                <div className="section_eight_heading">
                    <h1>From raw data to analysis in 10 Minutes</h1>
                    <h3>See how Panoply can streamline your data procesing now </h3>
                </div>
                <GlobalButton text="Watch 2-Min Demo Video" handleClick={handleVideo} className='global_button' />
            </div>
            <div className="section_eight_bottom">
                <img src={panoplylogo} alt="Panoplylogo" className='panoplylogo' />
                <span>Panoply Ltd. 2018</span>
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    )
}

export default SectionEight;
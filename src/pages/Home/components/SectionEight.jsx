import GlobalButton from "../../../components/GlobalButton/GlobalButton";

const SectionEight = () => {
    const handleVideo = () => {
        window.open('https://www.youtube.com/watch?v=I0vQ_VLZTWg', '_blank');
    }

    return (
        <div className="section_eight_wrapper">
            <div className="section_eight_heading">
            <h1>From raw data to analysis in 10 Minutes</h1>
            <h3>See how Panoply can streamline your data procesing now </h3>
            </div>
            <GlobalButton text="Watch 2-Min Demo Video" handleClick={handleVideo} className='global_button' />
        </div>
    )
}

export default SectionEight;
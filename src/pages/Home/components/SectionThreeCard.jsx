import '../home.style.css'

const Sectioncard = ({ image, header, text }) => {
    return (
        <div className='section_part'>
            {image}
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
    )
};

export default Sectioncard;
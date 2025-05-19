import '../home.style.css'

const Partner = ({ image, heading1, heading2 }) => {

    return (
        <div className='partner'>
                {image}
                <h4>{heading1}</h4>
                <h5>{heading2}</h5>
        </div>
    )
}

export default Partner;
import '../home.style.css'
import { Factual, FairFly, Invision, Kimberly, Motorsport, Snc } from '../../../assets';


const SectionTwo = () => {

    return (
        <div className='sectiontwo_wrapper'>
            <Motorsport />
            <Factual />
            <Invision/>
            <Kimberly/>
            <FairFly/>
            <Snc/>
        </div>
    )
}

export default SectionTwo;
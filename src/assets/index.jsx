import motorsport from './motorsport.png';
import factual from './factual.png';
import invision from './invision.png';
import kimberly from './kimberly.png';
import fairfly from './fairfly.png';
import snc from './snc.png';
import bi from './bi.svg';
import visualization from './visualization.svg';
import machine from './machine.svg';
import privacy from './privacy.svg';
import language from './language.svg';
import mining from './mining.svg';

const Motorsport = () => {
    return <img src={motorsport} />
}

const Factual = () => {
    return <img src={factual} />
}

const Invision = () => {
    return <img src={invision}/>
}

const Kimberly = () => {
    return <img src={kimberly}/>
}

const FairFly = () => {
    return <img src={fairfly}/>
}

const Snc = () => {
    return <img src={snc}/>
}

const Bi = () => {
    return <img src={bi} className='sectionthreeimg'/>
}

const Visualization = () => {
    return <img src={visualization} className='sectionthreeimg'/>
}

const Machine = () => {
    return <img src={machine} className='sectionthreeimg'/>
}

const Privacy = () => {
    return <img src={privacy} className='sectionthreeimg'/>
}

const Language = () => {
    return <img src={language} className='sectionthreeimg'/>
}

const Mining = () => {
    return <img src={mining} className='sectionthreeimg'/>
}



export {
    Motorsport,
    Factual,
    Invision,
    Kimberly,
    FairFly,
    Snc,
    Bi,
    Visualization,
    Machine,
    Privacy,
    Language,
    Mining

};
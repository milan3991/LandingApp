import '../home.style.css'
import { Bussines, Enterprise, Factual, FairFly, Invision, Kimberly, Motorsport, Pro, Snc, Starter } from '../../../assets';
import SectionSevenCard from './SectionSevenCard';
import blogimage from '../../../assets/sectionseven.jpg';

const SectionSeven = () => {

   

    let plans = [
        {
            id: 1,
            image: <Starter />,
            header: 'Starter',
            text: 'Lorem ipsum dolorLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
            price: '$249',
        },
        {
            id: 2,
            image: <Pro />,
            header: 'Pro',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
            price: '$499',
        },
        {
            id: 3,
            image: <Bussines />,
            header: 'Bussines',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
            price: '$749',
        },
        {
            id: 4,
            image: <Enterprise />,
            header: 'Enterprise',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
            price: 'Custom',
        },
    ];


    return (
        <div className="section_seven_wrapper">
            <div className='section_seven_heading'>
                <h1>Simple and transparent price</h1>
                <h3>All plans have a 21 day fri trial period.No credit card required</h3>
                </div>
            <div className="section_seven_cards">
                {plans.map((plan) => (
                    <SectionSevenCard
                        key={plan.id}
                        image={plan.image}
                        header={plan.header}
                        text={plan.text}
                        price={plan.price}
                        extraClass={plan.id === 3 ? 'highlight_card' : ''}
                    />
                ))}
            </div>
            <div className="section_seven_blog">
                 <img src={blogimage} alt="Section seven" className='blogimage' />
                 <div className='rightside'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate similique culpa ipsa voluptas eveniet quisquam quaerat quidem earum? Explicabo amet suscipit doloribus aliquid cumque harum rerum optio exercitationem maiores!</p>
                    <h4>Ami Foldemberg</h4>
                    <h5>Co founder & CEO</h5>
                </div>
            </div>
            <div className='section_seven_partners'>
                <Motorsport />
                <Factual />
                <Invision />
                <Kimberly />
                <FairFly />
                <Snc />
            </div>
        </div>
    )
}

export default SectionSeven;
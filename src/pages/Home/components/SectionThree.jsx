import '../home.style.css';

import { Bi, Language, Machine, Mining, Privacy, Visualization } from '../../../assets';
import Sectioncard from './SectionThreeCard';



const Sectionthree = () => {
    let insights = [
        {
            id: 1,
            image: <Bi />,
            header: 'Operational BI',
            text: 'Lorem ipsum dolorLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
        },
        {
            id: 2,
            image: <Visualization />,
            header: 'Data Visualization',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
        },
        {
            id: 3,
            image: <Machine/>,
            header: 'Machine Learning',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
        },
        {
            id: 4,
            image: <Privacy/>,
            header: 'Enhanced Privacy & Security',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
        },
        {
            id: 5,
            image: <Language/>,
            header: 'Natural Language Procesing',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
        },
        {
            id: 6,
            image: <Mining/>,
            header: 'Data Mining',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad voluptas, dolor, cupiditate obcaecati numquam tempora dolore officiis id minus aut excepturi maxime harum deserunt repellat sunt a pariatur soluta.',
        },

    ];


    return (
        <div className="section_three_wrapper">
            <div className='section_three_heading'>
            <h1>Discover our insights</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='section_three_page'>
                {insights.map((insight) => (
                    <Sectioncard
                        key={insight.id}
                        image={insight.image}
                        header={insight.header}
                        text={insight.text}
                    />
                ))}
                </div>
        </div>
    )
}

export default Sectionthree;
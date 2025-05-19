import { Amazon, Chartio, Databricks, Facebook, Facebookads, Fivetran, GoogleAnalytics, GoogleLead, Intercom, Jupyter, Looker, Mailchimp, Metabase, Mixpanel, Mongodb, Mysql, Panoply, Postgre, Redash, Rstudio, Salesforce, Stripe, Tableau, Uploaddata, Zendesk, Zeppelin } from "../../../assets";
import Partner from "./PartnerCard";
import '../home.style.css'

const SectionSix = () => {
    let partners = [
        {
            id: 1,
            image: <Amazon />,
            heading1: 'Amazon',
            heading2: 'Amazon',
        },
        {
            id: 2,
            image: <Chartio />,
            heading1: 'Chartio',
            heading2: 'Chartio',
        },
        {
            id: 3,
            image: <Databricks />,
            heading1: 'Databricks',
            heading2: 'Databricks',
        },
        {
            id: 4,
            image: <Facebook />,
            heading1: 'Facebook',
            heading2: 'Facebook',
        },
        {
            id: 5,
            image: <Facebookads />,
            heading1: 'Facebookads',
            heading2: 'Facebookads',
        },
        {
            id: 6,
            image: <Fivetran />,
            heading1: 'Fivetran',
            heading2: 'Fivetran',
        },
        {
            id: 7,
            image: <GoogleLead />,
            heading1: 'GoogleLead',
            heading2: 'GoogleLead',
        },
        {
            id: 8,
            image: <GoogleAnalytics />,
            heading1: 'GoogleAnalytics',
            heading2: 'GoogleAnalytics',
        },
        {
            id: 9,
            image: <Intercom />,
            heading1: 'Intercom',
            heading2: 'Intercom',
        },
        {
            id: 10,
            image: <Jupyter />,
            heading1: 'Jupyter',
            heading2: 'Jupyter',
        },
        {
            id: 11,
            image: <Looker />,
            heading1: 'Looker',
            heading2: 'Looker',
        },
        {
            id: 12,
            image: <Mailchimp />,
            heading1: 'Mailchimp',
            heading2: 'Mailchimp',
        },
        {
            id: 13,
            image: <Metabase />,
            heading1: 'Metabase',
            heading2: 'Metabase',
        },
        {
            id: 14,
            image: <Mixpanel />,
            heading1: 'Mixpanel',
            heading2: 'Mixpanel',
        },
        {
            id: 15,
            image: <Mongodb />,
            heading1: 'MongoDB',
            heading2: 'MongoDB',
        },
        {
            id: 16,
            image: <Mysql />,
            heading1: 'MySQL',
            heading2: 'MySQL',
        },
        {
            id: 17,
            image: <Panoply />,
            heading1: 'Panoply',
            heading2: 'Panoply',
        },
        {
            id: 18,
            image: <Postgre />,
            heading1: 'Postgre',
            heading2: 'Postgre',
        },
        {
            id: 19,
            image: <Redash />,
            heading1: 'Redash',
            heading2: 'Redash',
        },
        {
            id: 20,
            image: <Rstudio />,
            heading1: 'RStudio',
            heading2: 'RStudio',
        },
        {
            id: 21,
            image: <Salesforce />,
            heading1: 'Salesforce',
            heading2: 'Salesforce',
        },
        {
            id: 22,
            image: <Stripe />,
            heading1: 'Stripe',
            heading2: 'Stripe',
        },
        {
            id: 23,
            image: <Tableau />,
            heading1: 'Tableau',
            heading2: 'Tableau',
        },
        {
            id: 24,
            image: <Uploaddata />,
            heading1: 'UploadData',
            heading2: 'UploadData',
        },
        {
            id: 25,
            image: <Zendesk />,
            heading1: 'Zendesk',
            heading2: 'Zendesk',
        },
        {
            id: 26,
            image: <Zeppelin />,
            heading1: 'Zeppelin',
            heading2: 'Zeppelin',
        },
    ];

    const firstGroup = partners.filter(partner => partner.id <= 16);
    const secondGroup = partners.filter(partner => partner.id > 16);



    return (
        <div className="sectionsix_wrapper">
            <div className="section">
                <div className="section_data">
                    <h1>Any Data. Any Scale</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, iusto dolore provident non voluptatum quae aperiam sapiente repellendus, error, id nisi! Sed pariatur sint molestias totam assumenda eos molestiae voluptates.</p>
                </div>
                <div className="partner_page">
                    {firstGroup.map((partner) => (
                        <Partner
                            key={partner.id}
                            image={partner.image}
                            heading1={partner.heading1}
                            heading2={partner.heading2}
                        />
                    ))}
                </div>
            </div>

            <div className="section">
                <div className="section_data">
                    <h1>Connect to the tool you love</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ab incidunt id quam non neque ad eaque, ex nihil eveniet. Expedita, tempore nihil. Eius explicabo aut ducimus voluptatem nemo autem.</p>
                </div>
                <div className="partner_page">
                    {secondGroup.map((partner) => (
                        <Partner
                            key={partner.id}
                            image={partner.image}
                            heading1={partner.heading1}
                            heading2={partner.heading2}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionSix;
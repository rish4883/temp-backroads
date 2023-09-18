import { servicesContent } from '../data';
import Title from './Title';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="Our" second="services" />

      <div className="section-center services-center">
        {servicesContent.map((content) => {
          return (
            <article className="service" key={content.id}>
              <span className="service-icon">
                <i className={content.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{content.title}</h4>
                <p className="service-text">{content.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

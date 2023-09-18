import Title from './Title';
import { tours } from '../data';

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />

      <div className="section-center featured-center">
        {tours.map((content) => {
          return (
            <article class="tour-card">
              <div class="tour-img-container">
                <img src={content.img} class="tour-img" alt="" />
                <p class="tour-date">{content.date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{content.title}</h4>
                </div>
                <p>{content.text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>{' '}
                    {content.location}
                  </p>
                  <p>{content.duration} days</p>
                  <p>from ${content.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tour;

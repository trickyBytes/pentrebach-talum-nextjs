export default function Home() {
  return (
    <>
      <div className="sidebar">Sidebar</div>
      <header className="header">Header</header>
      <div className="realtors">Top 3 Realtors</div>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={'/img/sprite.svg#icon-global'}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            World's best luxury homes
          </h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={'/img/sprite.svg#icon-trophy'}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
          <p className="feature__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={'/img/sprite.svg#icon-map-pin'}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            All homes in top locations
          </h4>
          <p className="feature__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={'/img/sprite.svg#icon-key'}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={'/img/sprite.svg#icon-presentation'}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use xlinkHref={'/img/sprite.svg#icon-lock'}></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Secure payments on Nexter
          </h4>
          <p className="feature__text">
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>
      <div className="story__pictures">
        <img
          src="/img/story-1.jpeg"
          alt="Couple with new house"
          className="story__img--1"
        />
        <img
          src="/img/story-2.jpeg"
          alt="New house"
          className="story__img--2"
        />
      </div>
      <div className="story__content">
        <h3 className="heading-3  heading-2--dar mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>

      <section className="homes">
        <div className="home">
          <img
            src="/img/houses/house-1.jpeg"
            alt="House 1"
            className="home___img"
          />
          <svg className="home__like">
            <use xlinkHref={'/img/sprite.svg#icon-heart-full'}></use>
          </svg>
          <h5 className="home__name">Beautiful family house</h5>
          <div className="home__location">
            <svg className="home__like">
              <use xlinkHref={'/img/sprite.svg#icon-map-pin'}></use>
            </svg>
            <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg className="home__like">
              <use xlinkHref={'/img/sprite.svg#icon-profile-male'}></use>
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg className="home__like">
              <use xlinkHref={'/img/sprite.svg#icon-expand'}></use>
            </svg>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg className="home__like">
              <use xlinkHref={'/img/sprite.svg#icon-key'}></use>
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="cta">Contact realtor</button>
        </div>

        <div class="home">
          <img src="img/houses/house-2.jpeg" alt="House 2" class="home__img" />
          <svg class="home__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 class="home__name">Modern Glass Villa</h5>
          <div class="home__location">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Canada</p>
          </div>
          <div class="home__rooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 rooms</p>
          </div>
          <div class="home__area">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              450 m<sup>2</sup>
            </p>
          </div>
          <div class="home__price">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$2,750,000</p>
          </div>
          <button class="btn home__btn">Contact realtor</button>
        </div>

        <div class="home">
          <img src="img/houses/house-3.jpeg" alt="House 3" class="home__img" />
          <svg class="home__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 class="home__name">Cozy Country House</h5>
          <div class="home__location">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>UK</p>
          </div>
          <div class="home__rooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>4 rooms</p>
          </div>
          <div class="home__area">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              250 m<sup>2</sup>
            </p>
          </div>
          <div class="home__price">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$850,000</p>
          </div>
          <button class="btn home__btn">Contact realtor</button>
        </div>

        <div class="home">
          <img src="img/houses/house-4.jpeg" alt="House 4" class="home__img" />
          <svg class="home__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 class="home__name">Large Rustical Villa</h5>
          <div class="home__location">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Portugal</p>
          </div>
          <div class="home__rooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 rooms</p>
          </div>
          <div class="home__area">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              480 m<sup>2</sup>
            </p>
          </div>
          <div class="home__price">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,950,000</p>
          </div>
          <button class="btn home__btn">Contact realtor</button>
        </div>

        <div class="home">
          <img src="img/houses/house-5.jpeg" alt="House 5" class="home__img" />
          <svg class="home__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 class="home__name">Majestic Palace House</h5>
          <div class="home__location">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Germany</p>
          </div>
          <div class="home__rooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>18 rooms</p>
          </div>
          <div class="home__area">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              4230 m<sup>2</sup>
            </p>
          </div>
          <div class="home__price">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$9,500,000</p>
          </div>
          <button class="btn home__btn">Contact realtor</button>
        </div>

        <div class="home">
          <img src="img/houses/house-6.jpeg" alt="House 6" class="home__img" />
          <svg class="home__like">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 class="home__name">Modern Familiy Apartment</h5>
          <div class="home__location">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Italy</p>
          </div>
          <div class="home__rooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>3 rooms</p>
          </div>
          <div class="home__area">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>
              180 m<sup>2</sup>
            </p>
          </div>
          <div class="home__price">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$600,000</p>
          </div>
          <button class="btn home__btn">Contact realtor</button>
        </div>
      </section>

      <section className="gallery">Gallery</section>

      <footer className="footer">Footer</footer>
    </>
  );
}

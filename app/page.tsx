export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">Y Popty</h1>
                    <div className="hero__price-row">
                        <div className="hero__price-container">
                            <span className="hero__price">£300</span>
                            <span className="hero__currency">gbp</span>
                        </div>
                        <a href="/contact" className="hero__button">book today!</a>
                    </div>
                    <p className="hero__subtitle">Weekend, 3 nights, Friday to Monday</p>
                    <div className="hero__features">
                        <div className="hero__feature">
                            <img src="/img/66a8c4268dad82efb9a0c08e_Hero-1.png" alt="" width={50} className="hero__feature-icon" />
                            <div className="hero__feature-text">Mountain View<br />3 Bedrooms</div>
                        </div>
                        <div className="hero__feature">
                            <img src="/img/66a8c4268dad82efb9a0c0a4_Hero-2.png" alt="" width={50} className="hero__feature-icon" />
                            <div className="hero__feature-text">1 Bathroom</div>
                        </div>
                        <div className="hero__feature hero__feature--last">
                            <img src="/img/66a8c4268dad82efb9a0c09b_Hero-3.png" alt="" width={43} className="hero__feature-icon" />
                            <div className="hero__feature-text">Concierge<br />24 hours</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intro">
                {/* <div>
                    <div className="title-all-caps">Rural Relaxation on the Snowdonian Coast</div>
                    <h2>Eyri, where the sea meets mountains</h2>
                </div> */}
                <div className="item">
                    <svg className="item__icon">
                        <use xlinkHref="img/sprite.svg#icon-global"></use>
                    </svg>
                    <h4 className="heading-4">
                        Stunning Sea Views
                    </h4>
                    <p className="item__text">
                        All our guests can enjoy truly spectacular sunsets from our patios as well as from window seats and conservatories. If you’re lucky you might even spot a pod of dolphins swimming past on their way to the beautiful Mawddach Estuary.
                    </p>
                </div>
                <div className="item">
                    <svg className="item__icon">
                        <use xlinkHref="img/sprite.svg#icon-key"></use>
                    </svg>
                    <h4 className="heading-4">
                        Our Properties
                    </h4>
                    <p className="item__text">
                        All our guests can enjoy truly spectacular sunsets from our patios as well as from window seats and conservatories. If you’re lucky you might even spot a pod of dolphins swimming past on their way to the beautiful Mawddach Estuary.
                    </p>
                </div>
                <div className="item">
                    <svg className="item__icon">
                        <use xlinkHref="img/sprite.svg#icon-presentation"></use>
                    </svg>
                    <h4 className="heading-4">Activities</h4>
                    <p className="item__text">
                        Take a 10 minute stroll to the beach or an energetic game of rounders in our large games field. Many more activities such as pony trekking, stand-up-paddleboarding and mountain biking are just a short drive away.
                    </p>
                </div>
            </section>
        </>
    );
}

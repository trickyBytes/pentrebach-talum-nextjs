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
                <div className="intro__wrapper">
                    <div className="intro__heading">
                        <p className="intro__eyebrow">Rural Relaxation on the Snowdonian Coast</p>
                        <h2 className="intro__title">Eryri, where the sea meets mountains</h2>
                    </div>
                    <div className="intro__items">
                        <div className="intro__item">
                            <img src="/img/66a8c4268dad82efb9a0c0a3_Intro-2.png" width={60} alt="" />
                            <h3 className="intro__item-title">Stunning Sea Views</h3>
                            <p>All our guests can enjoy truly spectacular sunsets from our patios as well as from window seats and conservatories. If you&apos;re lucky you might even spot a pod of dolphins swimming past on their way to the beautiful Mawddach Estuary.</p>
                            <div className="intro__item-cta">
                                <a href="#amenities" className="intro__button">learn more</a>
                            </div>
                        </div>
                        <div className="intro__item">
                            <img src="/img/66a8c4268dad82efb9a0c0e7_Intro-2.png" width={60} alt="" />
                            <h3 className="intro__item-title">Our Properties</h3>
                            <p>All our guests can enjoy truly spectacular sunsets from our patios as well as from window seats and conservatories. If you&apos;re lucky you might even spot a pod of dolphins swimming past on their way to the beautiful Mawddach Estuary.</p>
                            <div className="intro__item-cta">
                                <a href="#" className="intro__button">learn more</a>
                            </div>
                        </div>
                        <div className="intro__item">
                            <img src="/img/66a8c4268dad82efb9a0c0a0_Intro-3.png" width={60} alt="" />
                            <h3 className="intro__item-title">Activities</h3>
                            <p>Take a 10 minute stroll to the beach or an energetic game of rounders in our large games field. Many more activities such as pony trekking, stand-up-paddleboarding and mountain biking are just a short drive away.</p>
                            <div className="intro__item-cta">
                                <a href="#pricing" className="intro__button">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="location">
                <div className="location__wrapper">
                    <div className="location__heading">
                        <p className="location__eyebrow">Getting There</p>
                        <h2 className="location__title">On the edge of Snowdonia</h2>
                    </div>
                    <div className="location__cards">
                        <div className="location__card">
                            <img src="/img/66a8c4268dad82efb9a0c139_Map-2.png" alt="" className="location__card-icon" />
                            <h5 className="location__card-name">Beach</h5>
                            <p className="location__card-distance">10 minute walk</p>
                        </div>
                        <div className="location__card">
                            <img src="/img/66a8c4268dad82efb9a0c144_Map-3.png" alt="" className="location__card-icon" />
                            <h5 className="location__card-name">Barmouth</h5>
                            <p className="location__card-distance">10 minute drive</p>
                        </div>
                        <div className="location__card">
                            <img src="/img/66a8c4268dad82efb9a0c147_Map-1.png" alt="" className="location__card-icon" />
                            <h5 className="location__card-name">Aberdyfi</h5>
                            <p className="location__card-distance">20 minute drive</p>
                        </div>
                        <div className="location__card">
                            <img src="/img/66a8c4268dad82efb9a0c13f_Map-4.png" alt="" className="location__card-icon" />
                            <h5 className="location__card-name">Dolgellau</h5>
                            <p className="location__card-distance">20 minute drive</p>
                        </div>
                        <div className="location__card">
                            <img src="/img/66a8c4268dad82efb9a0c141_Map-5.png" alt="" className="location__card-icon" />
                            <h5 className="location__card-name">Cadair Idris</h5>
                            <p className="location__card-distance">25 minute drive</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

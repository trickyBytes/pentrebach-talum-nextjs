export default function Home() {
    return (
        <>
            <section className="hero">
                Hero Section
            </section>

            <section className="intro">
                {/* <div>
                    <div className="title-all-caps">Rural Relaxation on the Snowdonian Coast</div>
                    <h2>Eyri, where the sea meets mountains</h2>
                </div> */}
                <div className="item">
                    <svg className="item_icon">
                        <use xlinkHref="img/sprite.svg#icon-global"></use>
                    </svg>
                    <h4 className="heading">
                        Stunning Sea Views
                    </h4>
                    <p className="item__text">
                        All our guests can enjoy truly spectacular sunsets from our patios as well as from window seats and conservatories. If you’re lucky you might even spot a pod of dolphins swimming past on their way to the beautiful Mawddach Estuary.
                    </p>
                </div>
                <div className="item">
                    <svg className="item_icon">
                        <use xlinkHref="img/sprite.svg#icon-global"></use>
                    </svg>
                    <h4 className="heading">
                        Our Properties
                    </h4>
                    <p className="item__text">
                        All our guests can enjoy truly spectacular sunsets from our patios as well as from window seats and conservatories. If you’re lucky you might even spot a pod of dolphins swimming past on their way to the beautiful Mawddach Estuary.
                    </p>
                </div>
                <div className="item">
                    <svg className="item_icon">
                        <use xlinkHref="img/sprite.svg#icon-global"></use>
                    </svg>
                    <h4 className="heading">Activities</h4>
                    <p className="item__text">
                        Take a 10 minute stroll to the beach or an energetic game of rounders in our large games field. Many more activities such as pony trekking, stand-up-paddleboarding and mountain biking are just a short drive away.
                    </p>
                </div>
            </section>
        </>
    );
}

import Banner from '../styles/Banner';

const BannerLanding = (props) => (

    <Banner id="banner" bgImage={props.bgImage} colorOverlay={props.colorOverlay}>
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                <p>{props.description}</p>
            </div>
        </div>
    </Banner>
)

export default BannerLanding

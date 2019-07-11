import Head from "next/head"

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Joe Rocha's Development Front-end Skills</title>
            <meta name="description" content="Joe Rocha's Front-end Skills." />
        </Head>

        <div>
            <BannerLanding
            title="Front-end Skills"
            description={'Tech on Tech on Tech'}
            bgImage="../static/images/php.jpg"
            colorOverlay="lightyellow"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>My Toolbox</h2>
                        </header>
                        <p></p>
                    </div>
                </section>

                <section id="two" className="spotlights">


                    <section>
                        <a className="image"><img src="https://brainhub.eu/blog/wp-content/uploads/2018/06/react-libraries-javascript-professional-should-know-featured.png" alt="React" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>React, Styled Components, Material UI and more</h3>
                                </header>
                                <p>lorem epsum ewaweawe awef waef waefwaeff we</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/03/1_bYjqZBD5lKStDrMq8Tmoxg.png" alt="Acura Newsletter" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>ES6, Babel, and webpack</h3>
                                </header>
                                <p>As I’ve continued to go down the React rabbit hole, I learned to love ES6 with a Babel transpiler and Webpack. I also take advantage of JavaScript XML (JSX) for its clear, concise code. You may find some of my recent React projects on GitHub. One of my latest projects has brought webpack to the infamous WordPress template system, scoring a <b>98 score</b> on Google Page Speed!</p>
                            </div>
                        </div>
                    </section>

                    <section>

                        <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/03/1_L4TYDiuYB5-EK8SG2RjHHQ.png" alt="UCLA Campus" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Everything else</h3>
                                </header>
                                <p>awefawefwaefwaefawefwaef</p>
                            </div>
                        </div>
                    </section>

                </section>
            </div>

        </div>
    </Layout>
)

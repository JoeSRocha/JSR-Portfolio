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
            bgImage="../static/images/js.jpg"
            colorOverlay="#000"
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
                                    <h3>React, CSS-in-JS, and State Management</h3>
                                </header>
                                <p>My current favorites, as you'll find that this site is built in React with styled components.
                                With these libraries, I'm able to rapidly build out reusable UI components in JSX and CSS-in-JS.
                                Unidirectional data flows, integrated DevTools and auto optimization is just a few reasons I enjoy React.
                                Add a state management library like MobX or Redux and now we can build a large-scale React app.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a className="image"><img src="../static/images/babel.png" alt="Acura Newsletter" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>ES6, Babel, and webpack</h3>
                                </header>
                                <p>Want a blazing fast website that is compatible with all browser types? You're going to need Babel and webpack. This will allow us to leverage the latest features as well in ES6+. I've been scoring around <b>98 score</b> on Google Page Speed thanks to these tools!</p>
                            </div>
                        </div>
                    </section>

                    <section>

                        <a className="image"><img src="../static/images/node.png" alt="UCLA Campus" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Node & Everything else</h3>
                                </header>
                                <p>Thanks to Node.js, JavaScript is no longer limited to the front-end. I've been using Node, Express and Next.JS to deliver sites like this one for the last few years.
                                    Other tools that I enjoy leveraging, include NPM, Yarn, Gulp, Grunt, CSS3, HTML5 and more.
                                </p>
                            </div>
                        </div>
                    </section>

                </section>
            </div>

        </div>
    </Layout>
)

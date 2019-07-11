import Head from "next/head"

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Joe Rocha's Development Back-end Skills</title>
            <meta name="description" content="Joe Rocha's Back-end Skills." />
        </Head>

        <div>
            <BannerLanding
            title="Back-end Skills"
            description={'Tech on Tech on Tech'}
            bgImage="../static/images/php.jpg"
            colorOverlay="#949400"
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
                        <a className="image"><img src="../static/images/php_mysql.png" alt="React" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>PHP7, Python, and MySQL</h3>
                                </header>
                                <p>When it comes to back-end development, my go-to is PHP and Python. I've used Java and .net, however majority of my career has been in PHP development.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a className="image"><img src="../static/images/WordPress_Laravel.jpg" alt="Acura Newsletter" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Frameworks</h3>
                                </header>
                                <p>I've developed in countless frameworks, however majority of my experience is in Laravel and WordPress. Other noteable back-end frameworks include Drupal, CakePHP, and Slim.</p>
                            </div>
                        </div>
                    </section>

                </section>
            </div>

        </div>
    </Layout>
)

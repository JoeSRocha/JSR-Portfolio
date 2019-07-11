import Head from "next/head"

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Joe Rocha's Development Dev Ops Skills</title>
            <meta name="description" content="Joe Rocha's Dev Ops Skills." />
        </Head>

        <div>
            <BannerLanding
            title="Dev Ops Skills"
            description={'SSR FTW'}
            bgImage="../static/images/devops.jpg"
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
                        <a className="image"><img src="../static/images/Docker_AWS.jpg" alt="Docker AWS" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>AWS and Docker</h3>
                                </header>
                                <p>AWS services are used on majority of projects I've worked on. I've used services EC2, S3 Buckets, Lambda, RDS, LightSail, Route 53, and EBS.
                                When working locally, I use Docker Containers exclusively.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a className="image"><img src="../static/images/continuos_integration.png" alt="Continuous Integration" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Continuous Integration</h3>
                                </header>
                                <p>I've leveraged Continuous Integration through Travis CI and TeamCity. This streamlines my deployments with automated builds of regression unit testing and more.</p>
                            </div>
                        </div>
                    </section>

                </section>
            </div>

        </div>
    </Layout>
)

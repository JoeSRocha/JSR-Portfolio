import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Joe Rocha's Previous Development Work</title>
            <meta name="description" content="Joe Rocha's work for Rhythm." />
         </Head>

        <div>
            <BannerLanding title="Previous Work"
            description={'Decade of Deployments'}
            colorOverlay="#015571" />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Experience</h2>
                        </header>
                        <p>I've deployed and managed applications for numerous organizations. Here's just a few.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">

                    <section>
                        <img className="image" src="../static/images/WagedWar.jpg" alt="Waged War" />
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Waged War</h3>
                                </header>
                                <p>Fantasy Sports platform, specialized for MMA. Developed with React, WordPress and WooCommerce.</p>
                                <ul className="actions">
                                    <li><Link href="https://WagedWar.com"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <Link href="#">
                        <a className="image"><img src="../static/images/Aurora.jpg" alt="ARC Records" /></a>
                        </Link>

                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Aurora Record Company</h3>
                                </header>
                                <p>Former Employer, Aurora Record Companies main site was built in AngularJS.</p>

                            </div>
                        </div>
                    </section>

                    <section>
                        <Link href="https://commonkings.com/">
                            <a className="image"><img src="../static/images/commonkings.jpg" alt="Common Kings" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Common Kings</h3>
                                </header>
                                <p>The popular Raggae Rock band from Hawaii got their start with Aurora Records, where I developed their online presence.</p>
                                <ul className="actions">
                                    <li><Link href="https://commonkings.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section>
                        <Link href="https://DiggityJr.com/">
                            <a className="image"><img src="../static/images/Diggityjr.com_.png" alt="Diggity Jr" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Diggity Junior</h3>
                                </header>
                                <p>Kids clothing line built in WooCommerce.</p>
                                <ul className="actions">
                                    <li><Link href="https://DiggityJr.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section>
                        <img className="image" src="../static/images/Exo-Flex-Screenshot.jpg" alt="Exo-Flex" />
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Exo-Flex</h3>
                                </header>
                                <p>Former E-commerce site built for Innex Inc.</p>
                            </div>
                        </div>
                    </section>




                    <section>
                        <Link href="http://vienniev.com/">
                            <a className="image"><img src="../static/images/VV-web1.jpg" alt="Diggity Jr" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Viennie V</h3>
                                </header>
                                <p>Pop Singer Viennie V site created in WordPress.</p>
                                <ul className="actions">
                                    <li><Link href="https://vienniev.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>



                </section>
            </div>

        </div>
    </Layout>
)

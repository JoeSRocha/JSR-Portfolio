import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Joe Rocha's Development Front-end Skills</title>
            <meta name="description" content="Joe Rocha's Front-end Skills." />
        </Head>

        <div>
            <BannerLanding title="Front-end Skills" description={'Tech on Tech on Tech'} />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Recently used tools</h2>
                        </header>
                        <p>• I served as a project lead in the creation of enterprise applications.<br/>
• My focus was on applications to support users of our High-Performance Computing (Supercomputing) services.<br/><br/>
<b>Accomplishments:</b> Apps I've created for the UC are now in use by 700k+ monthly users.<br/>

Languages: PHP, JavaScript, jQuery, MySQL, JSON/XML, HTML5, CSS3, Linux/Unix, REST, Git and Python.<br/><br/>

<b>Software:</b> Visual Studio Code, PHPStorm, Terminal, Sequel Pro, Red Hat, Laravel, WordPress, Drupal, Bootstrap, Sass, Gulp, AngularJS, and Adobe Photoshop.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="https://idre.ucla.edu">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/03/1_bYjqZBD5lKStDrMq8Tmoxg.png" alt="Acura Newsletter" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>ES6, Babel, and webpack</h3>
                                </header>
                                <p>As I’ve continued to go down the React rabbit hole, I learned to love ES6 with a Babel transpiler and Webpack. I also take advantage of JavaScript XML (JSX) for its clear, concise code. You may find some of my recent React projects on GitHub. One of my latest projects has brought webpack to the infamous WordPress template system, scoring a <b>98 score</b> on Google Page Speed!</p>
                                <ul className="actions">
                                    <li><Link href="https://idre.ucla.edu"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="http://privacy.ucla.edu">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/03/1_L4TYDiuYB5-EK8SG2RjHHQ.png" alt="UCLA Campus" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Campus Privacy</h3>
                                </header>
                                <ul className="actions">
                                    <li><Link href="http://privacy.ucla.edu"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="http://womenintech.ucla.edu/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2016/05/wit_ucla.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Women in Technology</h3>
                                </header>
                                <ul className="actions">
                                    <li><Link href="http://womenintech.ucla.edu/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="http://picksc.idre.ucla.edu/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2016/05/picksc_ucla.png" alt="UCLA PICKSC" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Particle-in-Cell and Kinetic Simulation</h3>
                                </header>
                                <ul className="actions">
                                    <li><Link href="http://picksc.idre.ucla.edu/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="http://cdsc.ucla.edu/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2016/05/cdsc_ucla.png" alt="Smart Stop" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Center for Dmain Specific Computing</h3>
                                </header>
                                <ul className="actions">
                                    <li><Link href="http://cdsc.ucla.edu/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <Link href="https://www.hoffman2.idre.ucla.edu/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2016/05/h2_site.jpg" alt="Smart Stop" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Center for Domain Specific Computing</h3>
                                </header>
                                <ul className="actions">
                                    <li><Link href="https://www.hoffman2.idre.ucla.edu/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </section>
            </div>

        </div>
    </Layout>
)

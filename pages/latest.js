import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Joe Rocha's Latest Development Work</title>
            <meta name="description" content="Joe Rocha's work for Rhythm." />
         </Head>

        <div>
            <BannerLanding title="Rhythm"
            description={'Work provided for clients of the Rhythm Agency.'}
            bgImage="../static/images/nsx_mock.jpg"
            colorOverlay="#015571" />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Client Work</h2>
                        </header>
                        <p>I’ve developed and managed technical, large-scale applications for our biggest clients:
Acura, Kaiser Permanente, Irvine Company, Smart Stop and more.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="https://acura.com">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2019/04/acura_dropdown.jpg" alt="Acura Newsletter" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Acura</h3>
                                </header>
                                <p>Working closely with Acura, I’ve developed and launched their new vehicles navigation on <b>Acura.com</b>, as well as their conquest pages and email newsletters. I’ve delivered assets tested to be compatible by over 40 plus platforms.</p>
                                <ul className="actions">
                                    <li><Link href="https://acura.com"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://scpmgphysiciancareers.com/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/Kaiser.jpg" alt="Kaiser Permanente" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Kaiser Permanente</h3>
                                </header>
                                <p>I've developed a fully custom WordPress theme for Kaiser Permanente. Nearly all fields and elements are fully editable through the native backend. It also includes a mobile version option for assets and content. The template has now been used to create over 40 variants of the custom layout.</p>
                                <ul className="actions">
                                    <li><Link href="https://scpmgphysiciancareers.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://www.irvinepacific.com/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/Irvine-Company.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>The Irvine Company</h3>
                                </header>
                                <p>Irvine Company had me deliver a brochure site for their ‘Irvine Pacific’ community homes. The site is blazing fast, thanks to webpack, and node. I’ve also used the Google Maps APIs, and numerous JS libraries to create the stylish look.</p>
                                <ul className="actions">
                                    <li><Link href="https://www.irvinepacific.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://zoskinhealth.com/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/Zo-Skin.jpg" alt="Zo Skin" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Zo Skin Health</h3>
                                </header>
                                <p>Reaching over $100k in net daily sales of beauty products, Zo is one of our top clients. I am the lead developer of their Drupal site. The site not only handles the e-commerce portion, but much of the accounting of payments to doctor affiliates. This required a large amount of custom development calculators to take percentages of sales per quarter, and provide varying metrics to different departments.</p>
                                <ul className="actions">
                                    <li><Link href="https://zoskinhealth.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://smartstopselfstorage.com/">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/SmartStop.jpg" alt="Smart Stop" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Smart Stop</h3>
                                </header>
                                <p>With thousands of locations across the country, Smart Stop is one of the largest self storage corporations in the U.S. This massive database is managed and updated by me continually. I’ve inherited the project running on CakePhp and MySQL, however we’ve started the redesign of their main e-commerce site with the use of a React front-end.</p>
                                <ul className="actions">
                                    <li><Link href="https://smartstopselfstorage.com/"><a className="button">VISIT</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)

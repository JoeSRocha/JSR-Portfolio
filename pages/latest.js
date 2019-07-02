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
            <BannerLanding title="Rhythm" description={'Work provided for clients of the Rhythm Agency.'} />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Client Work</h2>
                        </header>
                        <p>I’ve developed and managed large-scale applications for our biggest clients:
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
                                <p>Working closely with Acura, I’ve helped the with the launch of their top vehicles through conquest pages and email newsletters. I’ve delivered assets tested to be compatible by over 40 plus platforms.</p>
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
                                <p>Kaiser Permanente gave me a chance to create a custom WordPress theme, which is fully editable on all elements, down to a mobile version in some instances. The template has now been used on over 30 variants of the page layout.</p>
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
                                <p>Irvine Company has requested that we deliver a brochure site for their upcoming ‘Irvine Pacific’ community homes. Leveraging ASP.net CMS Umbraco, the site allows for a high-level of customization throughout. I’ve used Google Maps APIs, and numerous JS libraries to create a lightweight website that loads under a second on average.</p>
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
                                <p>Reaching over $100k in net sales daily in beauty products, Zo is one of our top clients. I am the lead developer of their Drupal site. The site not only handles the e-commerce portion, but much of the accounting of payments to doctor affiliates. This required a large amount of custom development calculators to take percentages of sales per quarter and provide varying metrics to different departments.</p>
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
                                <p>With thousands of locations across the country, Smart Stop is one of the largest self storage corporations in the U.S. This massive database is managed and updated by me continually. I’ve inherited the project, running on CakePhp and MySQL, however we’ve started the redesign of their main e-commerce site with the .Net CMS, Umbraco</p>
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

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
                        <Link href="https://adroitgraphics.com/wp-content/uploads/2018/10/acura-nsx.jpg">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/acura-nsx.jpg" alt="Acura Newsletter" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Acura</h3>
                                </header>
                                <p>Working closely with Acura, I’ve helped the with the launch of their top vehicles through conquest pages and email newsletters. I’ve delivered assets tested to be compatible by over 40 plus platforms.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/Kaiser.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Kaiser Permanente</h3>
                                </header>
                                <p>Kaiser Permanente gave me a chance to create a custom WordPress theme, which is fully editable on all elements, down to a mobile version in some instances. The template has now been used on over 30 variants of the page layout.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="https://adroitgraphics.com/wp-content/uploads/2018/10/Irvine-Company.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)

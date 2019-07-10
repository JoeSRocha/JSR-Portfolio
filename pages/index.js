import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('https://render.fineartamerica.com/images/rendered/default/print/8.000/5.625/break/images/artworkimages/medium/1/honda-acura-nsx-2016-mixed-media-paul-meijering.jpg')`}}>
                        <header className="major">
                            <h3>Rhythm</h3>
                            <p>LATEST WORK</p>
                        </header>
                        <Link href="/latest"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('https://luskinconferencecenter.ucla.edu/wp-content/uploads/2018/03/Blog_Luskin.jpg')`}}>
                        <header className="major">
                            <h3>UCLA</h3>
                            <p>DEVELOPMENT FOR THE CAMPUS</p>
                        </header>
                        <Link href="/ucla"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('https://static1.squarespace.com/static/58d20c79725e25b221549193/t/5aaa1e10652deaa430665e31/1521098260276/js.jpg')`}}>
                        <header className="major">
                            <h3>Front-end Development</h3>
                            <p>Snippets of style</p>
                        </header>
                        <Link href="/frontend"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('https://wallpapercave.com/wp/wp1958111.jpg')`}}>
                        <header className="major">
                            <h3>Back-end Development</h3>
                            <p>Mind your business logic</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('https://aptira.com/wp-content/uploads/2016/09/BunnieCloudBG1.jpg')`}}>
                        <header className="major">
                            <h3>DevOps</h3>
                            <p>SSR FTW</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('https://www.wallpaperup.com/uploads/wallpapers/2016/11/10/1037927/1690384e276351036272dae606213d40.jpg')`}}>
                        <header className="major">
                            <h3>Previous Work</h3>
                            <p>Decade of Deployments</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                {/* <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section> */}
            </div>

        </div>
    </Layout>
)

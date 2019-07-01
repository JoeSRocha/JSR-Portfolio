const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <a href="https://www.linkedin.com/in/joesrocha/" className="icon alt fa-linkedin"></a>
                        <h3><a href="https://www.linkedin.com/in/joesrocha/">LinkedIn</a></h3>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                    <a href="https://github.com/JoeSRocha"className="icon alt fa-github"></a>
                        <h3><a href="https://github.com/JoeSRocha">GitHub</a></h3>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Location</h3>
                        <span>Irvine, CA 92614</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

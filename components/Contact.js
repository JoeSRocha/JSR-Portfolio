import React from 'react';


class ControlledForm extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            contactData: {
                name: '',
                email: '',
                message: ''
            },
            submitted: false,
        };

        this.handleName   = this.handleName.bind(this);
        this.handleEmail  = this.handleEmail.bind(this);
        this.handleInput  = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                contactData: {
                    ...prevState.contactData,
                    name: value
                }
            })
        )
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                contactData: {
                    ...prevState.contactData,
                    email: value
                }
            })
        )
    }

    handleMessage(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                contactData: {
                    ...prevState.contactData,
                    message: value
                }
            })
        )
    }

    handleInput(e) {
        let name  = e.target.name;
        let value = e.target.value;
        this.setState(
          prevState => ({
            contactData: {
              ...prevState.contactData,
              [name]: value
            }
          }),
          () => console.log(this.state.contactData)
        );
      }

    handleSubmit(e) {
        e.preventDefault();
        console.log( this.state.contactData );
        fetch('/api/contact', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.contactData)
          }).then((res) => {
            res.status === 200 ? this.setState({ submitted: true }) : console.log('FAILED: ' + res.status);
          })
    }

    render() {
        return (
        <section id="contact">
            <div className="inner">
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={this.state.contactData.name} onChange={this.handleInput} />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={this.state.contactData.email} onChange={this.handleInput} />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="6" value={this.state.contactData.message} onChange={this.handleInput}></textarea>
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
    }
}

export default ControlledForm

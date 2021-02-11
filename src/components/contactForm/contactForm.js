import React, { Component} from 'react';
import './contactForm.css';

class ContactForm extends Component {
    state = {
        email: "",
        emailError: null,
        offer: '',
        offerError: null
    };

    emailChangeHandler = event => {
        const email = event.target.value;
        this.setState({
            email,
            emailError: !email
        });
    };

    offerChangeHandler = event => {
        const offer = event.target.value;
        this.setState({
            offer,
            offerError: !offer
        });
    };

    submitHandler = event => {
        event.preventDefault();

        const { email, offer } = this.state;

        if (email && offer) {
            this.setState({
                email: '',
                emailError: false,
                offer: '',
                offerError: false
            });
            this.props.onSubmit();
            return;
        }

        this.setState({
            emailError: !email,
            offerError: !offer
        });
    };

    render() {
        const { email, emailError, offer, offerError } = this.state;

        return (
            <form className='contact-form' onSubmit={this.submitHandler}>
                <div className='contact-form_field'>
                    <input
                        value={email}
                        onChange={this.emailChangeHandler}
                        placeholder='Email for contact' 
                    />
                    {emailError ? (
                        <div className='error'>Fill in the fields</div>
                    ): null}
                </div>
                <div className='contact-form_field'>
                    <textarea
                        rows='10'
                        value={offer}
                        onChange={this.offerChangeHandler}
                        placeholder='Your offer'
                    ></textarea>
                    {offerError ? (
                        <div className='error'>Fill in the fields</div>
                    ) : null}
                </div>
                <button className='button' type='submit'>
                        Send
                </button>
            </form>
        );
    }
}

export default ContactForm;
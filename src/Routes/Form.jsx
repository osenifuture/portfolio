import { Fragment, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";


const defaultForm = {
    name : "",
    email : "",
    phone : "",
    subject: "",
    message: "",
}

const Form = () => {
    const [formInput, setFormInput] = useState(defaultForm);
    const [error, setError] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const {name,  email, phone, subject, message} = formInput;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInput({...formInput, [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post(`https://getform.io/f/${process.env.REACT_APP_GETFORM_KEY}`, formInput)
            if(!response.ok) {
                throw new Error(response.message)
            }
            setError(error.message)
        } catch (error) {
            setError(error.message)
        }
        console.log(formInput)
        setFormInput(defaultForm)
        setIsLoading(false)
        setSuccessMsg('Form is successfully sumbitted!')
        setTimeout(() => {
        setSuccessMsg(false)   
        }, 3000);
    }

    return(
        <Fragment>
        <form onSubmit={handleSubmit}>
            {isLoading && (<Spinner/>)}
            <h2 data-aos="fade-down"
      >Get in touch Today!</h2>
            <div data-aos="fade-up"
     className="input-combine">
            <input type="text" name="name" value={name} placeholder="Your NAME"  onChange={handleChange} required />
            <input type="email" name="email" value={email} placeholder="Your Email"  onChange={handleChange} required />
            </div>   
            <input data-aos="zoom-in"
     type="number" name="phone" value={phone} placeholder="Your Number"  onChange={handleChange} required />
            <input data-aos="zoom-in-up"
    type="text" name="subject" value={subject} placeholder="Subject"  onChange={handleChange} required />
            <textarea data-aos="zoom-in-right"
      name="message" value={message} placeholder="Message" onChange={handleChange} required cols="30" rows="10"></textarea>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {successMsg && <p style={{color: 'green'}}>{successMsg}</p>}
            <div data-aos="zoom-in-left"
      className="button-box">
            <button type="submit">{isLoading ?  " SUMBMITTING....." : "Send Message"}</button>
            </div>
        </form>
        </Fragment>
    )

}

export default Form;
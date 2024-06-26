import { Fragment, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner"



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
            <p data-aos="fade-down"
      >Get in touch Today!</p>
                  <textarea data-aos="zoom-in"
      name="message" value={message} placeholder="Message" onChange={handleChange} required ></textarea>
            <div data-aos="fade-up"
     className="input-combine">
            <input type="text" name="name" value={name} placeholder="Enter Name"  onChange={handleChange} required />
            <input type="email" name="email" value={email} placeholder="Enter Email"  onChange={handleChange} required />
            </div>
            <div className="input-combine">
            <input data-aos="zoom-in"
     type="number" name="phone" value={phone} placeholder="Enter Number"  onChange={handleChange} required />
            <input data-aos="zoom-in-up"
    type="text" name="subject" value={subject} placeholder="Subject"  onChange={handleChange} required />
            </div>
            <div data-aos="zoom-in"
      className="button-box">
            <button type="submit" disabled={isLoading}>{isLoading ?  <Spinner/> : "Send Message"}</button>
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {successMsg && <p style={{color: 'green'}}>{successMsg}</p>}
        </form>
        </Fragment>
    )

}

export default Form;
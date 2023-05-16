import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import "./contact.css"
import yummypizza from "../../public/img/Yummy pizza.jfif"

const Contact = () => {
  return (
    <>
    <Navbar />
    <section id="head">
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write a message!</p>
    </section>
    
    <section id="info">
        <img src={yummypizza} alt="image"/>
        <div class="formContainer">
            <form>
                <input type="text" placeholder="First Name" id="firstName" className="formInput" required/>
                <input type="text" placeholder="Last Name" id="lastName" className="formInput" required/>
                <input type="email" placeholder="Email" id="email" className="formInput" required/>
                <input type="text" placeholder="Phone Number" id="phone" className="formInput"/>
                <textarea name="message" id="message" placeholder="Write a message..." className="formInput"></textarea>
                <input type="submit" value="Send Message" className="button"/>
            </form>
        </div>

    </section>
    <Footer />
    </>
  )
}

export default Contact
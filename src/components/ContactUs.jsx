import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
// import nodemailer from "nodemailer"
function ContactUs() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    let [state, setstate] = useState({
        name: "",
        email: "",
        subject: ""
    })
    function setValues(event) {
        const name = event.target.name;
        const value = event.target.value
        setstate((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        event.preventDefault();
    }
    function sendData(event) {
        const { name, email, subject } = state;
        const userData = {
            members: [
                {
                    "email_address": email,
                    status: "subscribed",
                    merge_fields: {
                        "FNAME": name,
                        "MESSAGE": subject,
                    }
                }
            ]
        }
        fetch('/3.0/lists/e521598e68', {
            method: 'POST',
            headers: {
                'Authorization': "saad:15393548ed5feb2ca3dd58925570eafb-us12",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                userData
            )
        }).then(response => console.log(response))
            .catch(error => console.error(error))
        event.preventDefault();
    }

    return (
        <>
            <div data-aos="zoom-out-up" className="about-h1">
                <h1>C<span className="span">ontact </span>us</h1>
            </div>
            <div className="contaainer">
                <form method="post">
                    <label for="fname">First Name</label>
                    <input onChange={setValues} type="text" value={state.name} id="fname" name="name" placeholder="Your name.." />
                    <label for="lname">Email</label>
                    <input onChange={setValues} type="email" value={state.email} id="email" name="email" placeholder="Your email.." />
                    <label for="subject">Subject</label>
                    <textarea onChange={setValues} id="subject" value={state.subject} name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                    <button onClick={sendData} className="btnn liink">Submit</button>
                </form>
            </div>
        </>
    )
}
export default ContactUs;
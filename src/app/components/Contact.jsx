"use client";
import { useState } from "react";
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    // state for validation
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // error state
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // handle input change
    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
            setNameError(false);
        } else if (name === "email") {
            setEmail(value);
            setEmailError(false);
        } else if (name === "message") {
            setMessage(value);
            setMessageError(false);
        }
    };

    // validation functions
    const nameValidation = () => {
        return !(name === "" || !name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/));
    };

    const emailValidation = () => {
        return !(email === "" || !email.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/));
    };

    const messageValidation = () => {
        return message.length >= 5;
    };

    // submit form
    const onSubmit = async (e) => {
        e.preventDefault();

        // Perform validation on submit
        const isNameValid = nameValidation();
        const isEmailValid = emailValidation();
        const isMessageValid = messageValidation();

        if (!isNameValid) setNameError(true);
        if (!isEmailValid) setEmailError(true);
        if (!isMessageValid) setMessageError(true);

        if (isNameValid && isEmailValid && isMessageValid) {
            const formData = new FormData(e.target);
            formData.append("access_key", "1101d744-cf60-4cbf-b87e-e3067d029143");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: json
                });

                const res = await response.json();

                if (res.success === true) {
                    setSubmitted(true);
                    setSuccessMessage(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setTimeout(() => {
                        setSuccessMessage(false);
                    }, 6000);
                } else {
                    setSubmitted(false);
                    setSuccessMessage(false);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
    };

    return (
        <div className="w-full h-full px-0 py-[100px] overflow-hidden" id="contact">
            <div className="max-w-full flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-[50px] text-center">
                    <h2 className="text-[40px] text-[#cf2525] font-bold underline">
                        Contact Me
                    </h2>
                    <p className="text-[14px] w-[320px] text-[#cf2525]">
                        Contact me if u need any help on ur project. And I will get to you ASAP!
                    </p>
                </motion.div>

                <form onSubmit={onSubmit} method="POST" className="gap-1 max-[400px]:flex max-[400px]:flex-col max-[400px]:justify-center max-[400px]:items-center max-[400px]:w-[300px]">

                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full"
                    >
                        <label htmlFor="text">
                            <FaUser className="cursor-text absolute text-[18px] right-[15px] top-[15px] text-[#cf2525]" />
                        </label>
                        <input
                            className="shadow2 mb-5 text-zinc-300 text-[20px] outline-none bg-transparent w-full py-[7px] px-[15px] pr-10 rounded-[5px] border border-[#cf2525] placeholder:text-[#cf2525]"
                            type="text" placeholder="Name" name='name'
                            id="text" autoComplete="name"
                            onChange={onChange}
                            onBlur={nameValidation}
                            value={name} maxLength="30" minLength="3"
                        />
                        {nameError && <p className="-mt-5 text-[14px] text-[#cf2525]">Please enter a valid name!</p>}
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full">
                        <label htmlFor="email">
                            <FaEnvelope className="cursor-text absolute text-[18px] right-[15px] top-[15px] text-[#cf2525]" />
                        </label>
                        <input
                            className="mb-5 text-zinc-300 text-[20px] outline-none bg-transparent w-full py-[7px] px-[15px] pr-10 rounded-[5px] border border-[#cf2525] placeholder:text-[#cf2525]"
                            type="email" placeholder="Email" name='email'
                            id="email" autoComplete="email"
                            onChange={onChange}
                            value={email} maxLength="30" minLength="3"
                        />
                        {emailError && <p className="-mt-5 text-[14px] text-[#cf2525]">Please enter a valid email!</p>}
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative">
                        <label htmlFor="message">
                            <FaMessage className="absolute text-[18px] right-[15px] bottom-8 text-[#cf2525]" />
                        </label>
                        <textarea
                            className="cursor-text shadow2 mb-[15px] text-[19px] w-[400px] h-[220px] resize-y max-h-[400px] rounded-[5px] outline-none text-zinc-300 bg-transparent p-[10px] border border-[#cf2525] placeholder:text-[#cf2525] max-md:w-[350px] max-[400px]:w-[300px]"
                            type="text" cols="40" rows="10"
                            name='message' id="message" placeholder="Message..."
                            autoComplete="off"
                            onChange={onChange}
                            onBlur={messageValidation}
                            value={message}
                        />
                        {messageError && <p className="text-[14px] -mt-4 text-[#cf2525]">Please enter a valid message!</p>}
                    </motion.div>

                    {/* Submit button */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative">
                        <label htmlFor="submit">
                            <FaPaperPlane className="cursor-pointer absolute right-[15px] top-[15px] text-[#cf2525]" />
                        </label>
                        <button className="shadow bg-transparent w-full py-[10px] px-[15px] text-[17px] rounded-[3px] cursor-pointer text-[#cf2525] border border-[#cf2525] coursor-pointer max-[400px]:w-[300px]" id="submit">
                            Send Message
                        </button>
                    </motion.div>

                </form>

                {/* Success Message */}
                {successMessage && (
                    <div className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white p-4 rounded-md text-center w-[300px]">
                        <h1 className="text-[19px] font-bold text-green-600 max-[450px]:text-[16px]">
                            Your message has been successfully received.
                        </h1>
                        <p className="text-[17px] mt-2 text-gray-700 max-[450px]:text-[15px]">
                            Thank you.
                            <span className="block">
                                I will get to you soon.
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

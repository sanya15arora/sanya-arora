import React, {useEffect, useRef, useState} from 'react'
import {contactusbg, phone} from '../assets'
import {AppText, FORM_ID} from '../constants'
import SectionHeading from '../shared/SectionHeading'
import {useForm, ValidationError} from '@formspree/react';
import {toast} from "react-toastify";


function ContactUs() {
    const [state, handleSubmit] = useForm(FORM_ID);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await handleSubmit(e);
        setIsSubmitting(false);
    };

    useEffect(() => {
        if (state.succeeded && formRef.current) {
            formRef.current.reset();
            toast.success('Thank you! Your message has been sent successfully.', {
                style: {
                    background: '#f6cc77',
                    color: '#fff',
                    fontWeight: 500,
                    borderRadius: '8px',
                }
            });
        }
    }, [state.succeeded]);


    return (
        <div id="contact" className='flex flex-col justify-center mt-10'>
            <div className='flex flex-row  justify-center '>
                <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Me}/>
                <img src={phone} className="w-[80px] ml-4 animate-bounce" alt={'phone'}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly  items-center px-10 md:px-44'>
                <img src={contactusbg} className="w-[400px] mr-10" alt={'contact Us background image'}/>
                <form onSubmit={onSubmit} ref={formRef}>
                    <div className='w-full flex flex-col gap-6 '>

                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-gray-400'>Email</label>
                            <input id="email"
                                   type="email"
                                   name="email"
                                   placeholder='yourname@gmail.com'
                                   className='border-[1.5px] px-2 border-[#f6cc7795]
              hover:border-[#f6cc77] rounded-md  focus:outline-hidden'/>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="message" className='text-gray-400'>Message</label>
                            <textarea id="message"
                                      name="message"
                                      type="text"
                                      rows={7}
                                      placeholder='Type your message here'
                                      className='border-[1.5px] px-2 hover:border-[#f6cc77] border-[#f6cc7795] rounded-md  focus:outline-hidden'/>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting || state.submitting}
                            className={`transition-all ease-in-out hover:scale-105 bg-[#f6cc77] flex flex-row items-center justify-center text-[18px] py-2 mt-5 text-white rounded-md shadow-md gap-2
                ${(isSubmitting || state.submitting) ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                            {(isSubmitting || state.submitting) ? (
                                <>
                                    <span
                                        className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                    Sending...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
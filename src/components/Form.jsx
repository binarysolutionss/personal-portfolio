import React, { useRef, useEffect } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

// Form handling from formspree.io
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {

  const [state, handleSubmit] = useForm("xqaagbqe");

  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  return (
    <>
      <div className="p-8 text-xl sm:p-10 sm:text-4xl sm:gap-12 md:p-14 md:text-3xl lg:text-lg  lg:p-10 xl:text-xl">
        <h4 className="text-3xl font-bold text-center pb-8 sm:text-5xl">
          Let's connect
        </h4>
        <div className="flex flex-col gap-8 rounded-3xl lg:flex-row">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-start">
                <MdOutlineMail className="text-3xl sm:text-6xl md:text-5xl lg:text-4xl" />
              </div>
              <div>
                <h4>Chat to me</h4>
                <p>I am available 24/7 for any help</p>
                <a
                  href="mailto:chirembastan@gmail.com"
                  className="text-sky-400"
                >
                  chirembastan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div>
                <LuGithub className="text-3xl sm:text-6xl md:text-5xl  lg:text-4xl" />
              </div>
              <div>
                <h4>Github Profile</h4>
                <p>For all my techies, view my projects in full</p>
                <a
                  href="https://github.com/binarysolutionss"
                  className="text-sky-400"
                >
                  binarysolutionss
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div>
                <CiLinkedin className="text-3xl sm:text-6xl md:text-5xl lg:text-4xl" />
              </div>
              <div>
                <h4>LinkedIn Profile</h4>
                <p>Let's connect</p>
                <a
                  href="https://www.linkedin.com/in/stanley-masimba-chiremba-1578061b7"
                  className="text-sky-400"
                >
                  binarysolutionss
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-start">
                <IoLocationOutline className=" text-3xl sm:text-6xl md:text-5xl  lg:text-4xl" />
              </div>
              <div>
                <h4>Visit me</h4>
                <p>Pop by for a free consultation</p>
                <p className="text-sky-400">
                  Budiriro 5<br></br>CABS, Harare, Zimbabwe
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div>
                <IoCallOutline className="text-3xl sm:text-6xl md:text-5xl  lg:text-4xl" />
              </div>
              <div>
                <h4>Call me</h4>
                <p>I'm just a phonecall away</p>
                <a href="tel:+263772342749" className="text-sky-400">
                  +263 772 342 749
                </a>
              </div>
            </div>
          </div>

          <div className="bg-sky-400 text-slate-900 font-bold p-4 rounded-xl flex flex-col gap-4 h-max sm:p-8 lg:p-12">
            <h4>Let's connect</h4>
            <p>
              Whether you need something done or you have got ideas and want us
              to team up, It's that easy!
            </p>
            <form
              onSubmit={handleSubmit} 
              action="https://formspree.io/f/xqaagbqe"
              method="POST"
              className="flex flex-col gap-4 font-normal"
            >
              <input type="text" id="name" name="name" placeholder="Name" className="p-4 rounded-lg bg-slate-900 text-gray-300" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input type="text" id="number" name="number" placeholder="Mobile Number" className="p-4 rounded-lg bg-slate-900 text-gray-300" />
              <ValidationError prefix="Number" field="number" errors={state.errors} />
              <input type="email" id="email" name="email" placeholder="E-mail" className="p-4 rounded-lg bg-slate-900 text-gray-300" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea
                ref={textareaRef}
                id="message"
                name="message"
                placeholder="Provide a brief description of the intended project or otherwise"
                className="p-4 rounded-lg bg-slate-900 text-gray-300"
                onInput={adjustTextareaHeight}
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />                     
              <button type="submit" disabled={state.submitting} className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                Send
              </button>
              {state.succeeded && (
                <div className="p-4 rounded-lg bg-slate-900 text-gray-300 text-center">
                  <div className='flex flex-row items-center justify-center gap-4'>
                    <FaRegCheckCircle className='text-green-500'/>
                    <span>Thanks for your submission!</span>
                  </div> 
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

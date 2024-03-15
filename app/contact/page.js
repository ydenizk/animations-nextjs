import React from "react";
import FormComponent from "./form";

async function ContactPage() {
  return (
    <div className=" flex justify-center items-center">
      <div>
        <div className="  pt-16   mx-auto text-center max-w-2xl">
          <h1 className="uppercase font-extrabold tracking-wider mb-6 text-3xl ">
   Contact
          </h1>

          <p className="font-extralight text-sm sm:text-base max-w-lg   mx-auto tracking-wide leading-6 ">
      I do not know why you may want to contact me but here is the form below
          </p>
        </div>
        <FormComponent />
        
      </div>
    </div>
  );
}

export default ContactPage;

"use client";

import React, { useRef } from "react";
//import { handleContact } from "./formAction";
//import FormBtn from "./formBtn";

const FormComponent = () => {
  //const ref = useRef(null);
  return (
    <form
      //submit sonrasu form u reset için bu şekilde kullanıdk.
      /*   ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await handleContact(formData);
      }} */
      className="flex flex-col gap-4 justify-center items-center 
          w-full max-w-xl mx-auto   rounded my-20 sm:max-w-md xs:max-w-xs  "
    >
      <div className=" w-full">
        <input
          className="w-full h-10  text-blackk dark:border-white dark:text-white
               font-extralight border-black dark:border-whitetext-lg border-b  outline-none px-2  "
          type="text"
          name="name"
          required
          placeholder="Name"
        />
      </div>
      <div className="w-full">
        <input
          required
          placeholder="Email"
          name="email"
          type="email"
          className="w-full h-10 text-lg border-b  text-blackk font-extralight dark:text-white
               border-black dark:border-white   outline-none px-2 "
        />
      </div>
      <div className="w-full">
        <textarea
          required
          placeholder="Message"
          name="message"
          type="text"
          rows="6"
          className=" w-full  border-b  text-blackk  font-extralight border-black dark:border-white dark:text-white
               outline-none px-2"
        ></textarea>
      </div>
      <button className=" w-full  border  border-black dark:border-white transition  hover:bg-gray-500 mb-4 
      uppercase py-1 px-8 tracking-wide text-xl cursor-pointer  ">

       send
     
    </button>
      {/* <FormBtn /> */}
    </form>
  );
};

export default FormComponent;

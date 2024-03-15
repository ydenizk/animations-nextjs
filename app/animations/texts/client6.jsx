import React from "react";
import styles from "./client6.module.css";


const Client6 = () => {
  const text = "What about this animation?";
  return (
    <div className="w-full text-center my-12">
      <button
        className="p-2 px-3 text-white bg-black border-2 border-black
         rounded dark:text-black dark:bg-white text-center flex space-x-1 mx-auto"
      >
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
<span>Hover </span>
      </button>
      <h2 className="text-center sm:text-5xl text-4xl font-thin text-black dark:text-white  cursor-pointer">
        {text.split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Client6;

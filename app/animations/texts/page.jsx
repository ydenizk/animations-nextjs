import React from "react";
import Client from "./client";
import Client2 from "./client2";
import Client3 from "./client3";
import Client4 from "./client4";
import Client5 from "./client5";
import Client6 from "./client6";

const DenemePage = () => {
  const svgPath = "M10,50 Q150,100 290,50 T570,50";

  return (
    <div className="w-full ">
           <Client6 />
      <Client
        text="...this is a typewriter effect example!..."
        text1="..this is  another text effect example!..."
       /*  text3="This is GSAP  text animation example!..." */
      />

      {/* Text animation */}
      {/* <Client2 text="Animate along this path" path={svgPath}  /> */}

      <Client3 text="...colorful typewriter effect is also nice ..." />

      {/* <Client4 /> */}
 

   {/*    <Client5 /> */}


    </div>
  );
};

export default DenemePage;

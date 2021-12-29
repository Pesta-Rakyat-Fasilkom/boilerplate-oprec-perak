import React from "react";
import Link from "next/link";

const ImageContainer = () => {
  return (
    <div className="h-32 w-32 md:w-40 md:h-40 cursor-pointer">
      <Link href="#">
        <div className="h-full w-full bg-game-icon-outer rounded-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-hover-game-icon-outer duration-300">
          <div className=" bg-game-icon-inner rounded-lg hover:bg-hover-game-icon-inner duration-300 m-2 h-auto w-auto">
            <div className="m-5">
              <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageContainer;

import React from "react";
import Image from "next/image";

const Doc = () => {
  const BikeDoc = [
    {
      img1: "https://cdn-icons-png.flaticon.com/512/4299/4299685.png",
      Content: "Passport-size photo (2nos)",
    },
    {
      img1: "https://cdn-icons-png.flaticon.com/512/6158/6158293.png",
      Content: "Driving License",
    },
    {
      img1: "https://cdn-icons-png.flaticon.com/512/1534/1534155.png",
      Content: "Voter ID, Aadhar card or Passport",
    },
  ];
  return (
    <>
      <div className="flex mt-6 justify-center">
        <div className="w-5/6 h-1 rounded-full bg-black inline-flex"></div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-11 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Documents Required while visiting Sikkim
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Unlike the neighboring state of West Bengal where Darjeeling is
              located, Sikkim has certain entry restrictions. In fact the whole
              of Sikkim is under restricted area regime due to its proximity to
              neighboring countries like China, Nepal and Bhutan.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {BikeDoc.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="p-4 md:w-1/3 flex flex-col text-center items-center"
                >
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg> */}
                    <Image
                      width={80}
                      height={80}
                      alt="Passport-size photo (2nos)"
                      src={icon.img1}
                    />{" "}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {icon.Content}
                    </h2>
                    {/* <p class="leading-relaxed text-base">{icon.Content}</p> */}
                    {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doc;

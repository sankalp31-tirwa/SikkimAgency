import { useEffect, useState } from "react";
import { useAuth } from "../src/contexts/AuthContext";
import { database } from "../src/utils/init-firebase";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
// function getDate(date) {

// return newDate.toISOString();
// }

const Orderhistory = () => {
  const { ReadCustomerorder, currentUser, OrderDatas } = useAuth();
  const [fireData, setFireData] = useState([]);
  const [isLoading, setisLoding] = useState(true);
  const articles = [];

  useEffect(() => {
    // getData();
  }, []);

  // const getData = async () => {
  //   const citiesRef = collection(database, "CustomerOrder");
  //   const q = query(citiesRef, where("CustomerUserID", "==", currentUser.uid));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     articles.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     });
  //   });
  //   setFireData(
  //     articles.map((datas) => {
  //       return { ...datas, id: datas.id };
  //     })
  //   );
  //   setisLoding(false);
  // console.log("hello");

  console.log(OrderDatas[0]);
  // console.log("Inside");
  // const Data = ReadCustomerorder()
  //   .then((response) => {
  //     // console.table(response[0])
  //     // console.table(response);
  //     // return response;
  //     setFireData(
  //       response.map((data) => {
  //         return { ...data, id: data.id };
  //       })
  //     );
  //     setisLoding(false);
  //   })

  //   .catch((error) => console.log(error.message));
  // };

  // const date = fireData[0];

  // newDate = date.getFullYear();
  // console.log(date);
  // console.log(fireData[0].Date);

  // console.table(fireData[0]);
  // console.log(fireData)

  // console.table(Data.value);
  // console.table(fireData);
  // if (isLoading) {
  //   return (
  //     <div>
  //       <button
  //         onClick={getData}
  //         className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  //       >
  //         Click To preview Orders
  //       </button>
  //       {/* <h1 className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
  //         >Loading...
  //       </h1> */}
  //     </div>
  //   );
  // }
  return (
    <>
      {/* <NavBar /> */}
      {/* <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        {currentUser && `the user :${currentUser.email}`}
      </h1> */}

      <>
        <section
          className="text-gray-600 body-font z-0 "
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("https://static.toiimg.com/photo/88689758/88689758.jpg?v=3")`,
          }}
        >
          {" "}
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                {currentUser && `Booking History`}
                {!currentUser && `Login To Enjoy our services`}
              </h1>
            </div>
            <div className="w-full bg-white px-10 py-10">
              <div className="-m-4">
                <div className="p-4 ">
                  <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="mt-8">
                        <div className="flex justify-between ">
                          {currentUser && (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {OrderDatas.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"> */}
                                  <div className="md:h-28 md:w-28 h-16 w-16 mr-4 rounded-md border border-gray-200">
                                    {/* {product.Time} */}
                                    <img
                                      src={product.ImageUrl}
                                      // alt={product.imageAlt}
                                      className="h-full w-full object-contain object-center"
                                    />
                                  </div>
                                  <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <div>
                                      <div className="relative z-0 w-full mb-6 group">
                                        {" "}
                                        {/* {product.name}{" "} */}
                                        <div className=" flex flex-row ">
                                          <div className=" flex flex-col ">
                                            <p className="not-italic hover:italic text-lg  text-black">
                                              {" "}
                                              Booked date
                                            </p>
                                            <h1 className="text-sm text-gray-500">
                                              {product.Date} {product.Time}
                                            </h1>
                                          </div>
                                          {/* <div className=" ml-4 flex flex-1 flex-col"> */}
                                          <div className="ml-4 flex flex-col ">
                                            {/* <p className="mt-1 text-sm text-gray-500"> */}
                                            <p className="not-italic hover:italic text-lg  text-black">
                                              OrderId:
                                            </p>
                                            <h1 className="text-sm text-gray-500">
                                              {product.orderId}
                                            </h1>
                                            {/* </p> */}
                                          </div>
                                          <div className="ml-4 flex flex-col ">
                                            {/* <p className="flex mt-1 text-sm text-gray-500"> */}
                                            {product.Drop && (
                                              <>
                                                {" "}
                                                <p className="not-italic hover:italic text-lg  text-black">
                                                  Seller Number:
                                                </p>{" "}
                                              </>
                                            )}
                                            {!product.Drop && (
                                              <>
                                                {" "}
                                                <p className="not-italic hover:italic text-lg  text-black">
                                                  Renter Number:
                                                </p>{" "}
                                              </>
                                            )}

                                            <h1 className="text-sm text-gray-500">
                                              {product.SellerNumber}
                                            </h1>
                                            {/* </p> */}
                                          </div>

                                          {/* </div> */}
                                        </div>
                                      </div>
                                      <p className=" font-medium text-gray-900 mt-1 text-sm ">
                                        {product.Cabname}
                                      </p>
                                      <p className="mt-1  text-gray-500 text-base font-medium ">
                                        ₹ {product.Price}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      {/* <p className="text-gray-500">
                                        From {product.destination} To{" "}
                                        {product.destination2}
                                      </p> */}

                                      {/* {fireDatas[0].DropLocation && <h1> hello Customers</h1>} */}

                                      {product.Drop && (
                                        <span className="mt-3 text-sm text-gray-500">
                                          From{" "}
                                          <span className="text-red-500 text-xs italic">
                                            {product.address}
                                          </span>{" "}
                                          To{" "}
                                          <span className="text-red-500 text-xs italic">
                                            {product.Drop}
                                          </span>{" "}
                                        </span>
                                      )}

                                      {/* {!fireDatas[0].DropLocation && <h1> hello Bikers</h1>} */}

                                      {!product.Drop && (
                                        <span className="mt-3 text-sm text-gray-500">
                                          From{" "}
                                          <span className="text-red-500 text-xs italic">
                                            {product.address}
                                          </span>{" "}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Orderhistory;

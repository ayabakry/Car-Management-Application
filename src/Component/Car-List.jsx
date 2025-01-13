import { useEffect, useState } from "react";
import {
  deleteCars,
  setCars,
  setSelectedCars,
  setLoading,
  setIsEditing,
} from "../Store/carSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Car_list() {
  const cars = useSelector((state) => state.cars.cars); // Access cars from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCars = useSelector((state) => state.cars.selectedCars);
  const loading = useSelector((state) => state.cars.loading);

  const handleSelect = (id) => {
    const updatedSelectedCars = selectedCars.includes(id)
      ? selectedCars.filter((carId) => carId !== id)
      : [...selectedCars, id];
    dispatch(setSelectedCars(updatedSelectedCars));
  };

  const handleDelete = () => {
    dispatch(deleteCars(selectedCars));
    dispatch(setSelectedCars([]));
  };

  const handleEdit = (car) => {
    navigate("/add-car", { state: { car } }); // Navigate with car details
  };

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);

  if (loading) return <p className="text-center">LOADING...</p>;

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="w-full max-w-md p-4 bg-white border border-1.5 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-start mb-4">
            <h5 className="md:text-2xl font-bold leading-none text-primary50 mr-2">
              All Cars
            </h5>
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(740,440)"
                d="m0 0h565l28 2 30 5 28 8 25 10 17 8 14 8 18 12 12 9 13 11 10 9 14 14 9 11 13 17 11 17 12 22 9 17 45 90h2l7-11 7-8 8-7 10-9 15-10 15-8 19-7 19-4 7-1 18-1h56l14 1 11 4 11 7 8 8 6 10 4 13v70l-3 14-5 13-7 11-9 10-8 7-12 7-14 5-11 2-22 1h-19l-20-1v2l5 2 21 13 15 10 19 14 11 10 8 7 15 15 7 8 12 15 16 24 12 22 7 15 10 26 7 26 5 27 2 21 1 58-1 196-2 18-4 21-7 24-8 21-11 21-10 13-9 9-1 2-1 74-2 20-3 12-4 9-7 12-11 13-11 8-16 8-14 4-6 1-26 1h-159l-23-1-16-4-10-4-11-7-10-8-9-11-8-13-6-17-2-16-1-126-11-9-6-4-35-1-460-2-186-1h-205l-14 10-3 3-1 122-2 21-3 12-8 16-6 9-8 9-11 8-16 8-14 4-6 1-26 1h-159l-23-1-16-4-10-4-11-7-11-9-11-14-7-14-4-12-2-16-1-81-7-8-10-12-7-10-8-17-9-25-6-21-4-23-2-25v-230l2-28 4-24 5-21 10-30 8-18 13-25 9-14 10-14 11-14 3-4h2l2-4 24-24 11-9 16-12 20-13 13-8 3-2-51-1-16-3-12-4-13-8-12-11-9-12-6-13-4-16-1-9v-56l2-13 4-9 7-11 9-8 14-7 10-2h73l19 2 21 5 21 9 14 8 12 9 10 9 7 6 9 11 4 5 2 1 1-5 50-100 12-22 11-18 9-12 10-13 12-13 19-19 14-11 14-10 19-12 25-13 23-9 23-7 17-4 29-4zm0 61-23 2-25 5-27 9-18 8-19 11-13 9-14 11-13 12-6 6v2h-2l-9 11-11 15-10 16-15 29-29 58-10 19-24 48v2h1104l-18-38-10-19-46-92-13-22-12-16-12-14-13-13-11-9-15-11-13-8-23-12-18-7-21-6-20-4-28-2zm1035 204-49 1-14 3-16 7-11 7-12 11-7 8-8 14-3 9h121l8-4 4-5 1-5v-45l-2-1zm-1516 4v48l3 6 5 4 3 1 28 1h95l-1-5-6-12-8-11-6-7-13-10-12-7-17-6-18-2zm219 126 2 5 15 24 15 22 10 14 13 18 13 16 10 13 24 28 9 10 11 12 7 7 7 8 16 16h2l2 4h2v2h2l2 5h-2l-7 8-10 10-7 8-12 12-2 3h-3l-7-8-8-8-8-7-4-5-21-21-7-8-9-10-9-11-10-11-8-10-14-18-13-17-13-18-12-17-15-23-8-13-15-25-2-3-4 1-17 10-19 12-24 15-21 13-17 12-11 9-15 14-9 9-11 14-6 8-12 19-8 15-8 19-7 21-5 21-3 25-1 22v216l2 24 4 20 8 24 6 14 8 11 7 6 14 8 9 3 8 1h154l16-11 18-13 19-14 14-10 54-39 6-4 240 1 190 1 447 2 45 1 7 4 54 39 19 14 14 10 18 13 13 9 2 1 97-2 54-2 15-2 16-8 8-6v-2l3-1 7-11 8-19 7-24 3-17 1-10v-247l-3-24-3-15-6-21-7-19-8-16-8-15-8-12-10-13-11-13-16-16-14-11-15-11-18-11-22-14-16-10-21-13-8-5-4 1-6 11-16 26-9 14-15 22-13 18-14 19-11 14-13 16-9 11-10 11-9 11-30 32-25 25-4 2-3-1-2-4-12-12-7-8-16-16 1-4 8-7 19-19v-2l3-1 7-8 15-16 7-8 1-3h2l9-11 11-13 11-14 12-15 26-36 13-20 9-14 7-12v-1zm23 626m-1 1-17 12-15 10-14 6-13 3-23 2h-133l-15-1v39l1 18 3 6 5 5 8 4h198l8-4 7-8 1-5v-87zm1046 3v35l1 51 3 6 5 5 8 4h198l8-4 7-8 1-5v-55l-18 1-57 1-60 2h-24l-16-2-16-5-11-6-17-12-11-8z"
              />
              <path
                transform="translate(677,1183)"
                d="m0 0h680l1 1v59l-2 1h-679l-1-1v-59z"
              />
              <path
                transform="translate(1654,1083)"
                d="m0 0h52l21 1 12 3 12 7 7 6 8 11 5 12 2 15v57l-1 17-4 16-8 16-8 11-10 10-14 9-14 6-14 3-10 1h-210l-1-1v-26l1-24 3-17 5-18 8-19 7-13 8-12 11-14 16-16 13-10 18-11 17-8 18-6 20-4 9-1zm56 61-75 1-16 3-20 8-16 10-15 14-10 13-6 10-8 19v1h146l10-3 8-7 3-7 1-59z"
              />
              <path
                transform="translate(333,1083)"
                d="m0 0h52l28 1 22 3 21 6 15 6 18 10 11 8 10 8 10 9 12 13 9 13 7 11 10 22 6 19 3 16 1 10 1 44-2 2h-210l-16-2-15-5-13-7-10-8-8-8-9-13-6-13-4-16-1-8v-72l3-13 6-12 11-12 14-8 11-3zm3 62v57l3 9 7 8 11 4h146l-1-5-7-16-8-13-11-13-9-8-15-10-15-7-13-4-13-2z"
              />
            </svg>
          </div>
          <div className="flow-root ">
            {cars.map((car) => (
              <ul
                key={car.id}
                role="list"
                className="divide-y divide-gray-200 "
              >
                <li className="py-3 sm:py-4 ">
                  <div className="flex items-center bg-primary50  p-2 rounded-lg">
                    <div className="flex-1 min-w-0 ms-4 inline-flex items-center">
                      <input
                        type="checkbox"
                        onChange={() => handleSelect(car.id)}
                        checked={selectedCars.includes(car.id)}
                      />
                      <p className="text-xl font-medium text-primary50 truncate text-white ml-4">
                        <span className="">{car.model}</span>
                      </p>
                    </div>
                    <div className="flex justify-center items-center text-base font-semibold text-primary50">
                      <button
                        onClick={() => handleEdit(car)}
                        className="p-1 flex items-center text-white"
                      >
                        Edit
                        <svg
                          className="ml-1.5"
                          version="1.1"
                          viewBox="0 0 2048 2048"
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            transform="translate(1612,108)"
                            d="m0 0h34l21 3 16 4 21 8 19 10 12 8 13 10 12 11 132 132 9 11 8 11 8 13 8 16 7 19 6 25 2 17v25l-2 17-4 19-7 21-9 19-10 16-9 12-10 11-1 2h-2l-2 4-92 92-6 5-6 7-6 5-7 8-67 67-6 5-6 7-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-8 7-259 259-7 8-11 11-8 7-9 9-8 7-14 11-15 10-18 10-19 9-37 15-35 14-44 17-40 15-36 13-28 10-40 13-37 11-30 7-21 3h-13l-20-3-17-5-17-8-12-8-11-9-10-10-11-15-10-19-6-18-3-18v-22l3-19 9-36 14-45 17-50 21-57 15-40 13-33 14-35 13-32 12-25 9-14 13-18 11-12 9-10 12-12 7-8h2v-2l8-7 503-503 1-2h2l2-4 17-16 157-157 8-7 13-10 14-9 17-9 22-8 22-5zm13 129-12 2-10 4-12 9-123 123 1 4 197 197h2l1 3 3 1 8-7v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2 4-4v-2l4-2v-2l4-2 4-4v-2l4-2 48-48 9-13 4-10 2-13-1-13-4-12-5-9-11-13-26-26h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4h-2l-2-4-35-35-12-9-12-5-12-2zm-249 231-8 7-421 421-2 1 2 4 12 13 3 1 2 4 158 158h2l2 4h2l2 4 8 8h2v2l8 7 4-1 7-8 231-231 2-1v-2h2v-2h2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2v-2l4-2 28-28v-2l4-2 4-4v-2l4-2 4-4v-2l4-2 3-3-1-5-201-201zm-518 527-5 10-15 37-18 44-6 16-15 38-11 29-8 21-10 29-12 37-8 31-2 9v4l20-4 29-8 40-13 44-16 84-33 37-15 41-17 9-4-2-4-191-191z"
                            fill="#fff"
                          />
                          <path
                            transform="translate(404,277)"
                            d="m0 0h331l12 3 14 7 10 9 8 9 8 16 3 13v13l-3 14-4 10-9 13-7 7-11 7-12 5-9 2-9 1h-203l-112 1-17 2-25 6-19 7-21 11-12 8-13 10-12 11-7 7-11 14-9 13-8 14-8 17-7 22-4 20-2 22v1036l2 23 5 24 8 22 8 17 10 16 12 16 13 14 8 7 10 8 10 7 15 9 20 9 15 5 23 5 14 2 12 1 92 1h891l133-1 25-2 17-3 20-6 20-8 18-10 17-12 14-12 10-10 9-11 10-14 6-10 9-19 8-24 4-19 2-18 1-315 3-16 5-12 8-11 9-9 13-8 12-4 7-1h16l13 3 14 7 13 11 9 13 5 11 2 9 1 23v259l-1 49-2 21-4 23-6 25-9 26-12 27-12 22-12 18-8 11-9 11-12 14-16 16-11 9-8 7-19 14-18 11-22 12-23 10-27 9-24 6-32 5-30 2h-1114l-24-1-26-3-25-5-25-7-26-10-25-12-19-11-16-11-13-10-13-11-15-14-8-8-7-8-10-12-12-16-12-19-13-24-11-26-8-24-6-25-4-25-2-21-1-37v-979l1-44 2-22 5-29 7-26 8-23 8-18 8-16 11-19 8-12 12-16 11-13 9-10 17-17 11-9 14-11 24-16 18-10 23-11 21-8 24-7 29-6z"
                            fill="#FEFEFE"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
            <div className="mt-4 flex justify-end items-center">
              <Link
                to="/add-car"
                className="p-2 pr-4 bg-primary50 text-white rounded hover:bg-primary50 flex items-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 33 32"
                  fill="none"
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 16L24.5 16"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 24L16.5 8"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add another Car
              </Link>
            </div>

            {selectedCars.length > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleDelete}
                  className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete Selected
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Car_list;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCar, editCar, setIsEditing } from "../Store/carSlice";

function Add_Car() {
  const [car, setCar] = useState({
    model: "",
    price: "",
    color: "",
    manufactureDate: "",
  });
  const isEditing = useSelector((state) => state.cars.isEditing);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.car) {
      setCar(location.state.car);
      dispatch(setIsEditing(true));
    } else {
      dispatch(setIsEditing(false));
    }
  }, [location.state, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.model || !car.price || !car.color || !car.manufactureDate) {
      alert("All fields are required");
      return;
    }
    if (isEditing) {
      dispatch(editCar(car));
    } else {
      dispatch(addCar({ ...car, id: Date.now() }));
    }
    navigate("/");
  };
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center  ">
      <div className="container w-full  pt-10 pr-8 ">
        <div className="flex items-center justify-start">
          <h2 className="ml-12 md:text-3xl font-bold leading-none text-primary50 mr-2">
            Add Car
          </h2>
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
        <br></br>
        <form
          className=" rounded-3xl bg-white pl-10 ml-8 pt-5 pr-10 pb-5 border border-1.5 shadow-lg w-full max-w-3xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 flex flex-wrap gap-5">
            <div className="md:w-80">
              <label
                htmlFor="model"
                className="block mb-2 font-medium text-left text-primary50 md:text-xl font-sans"
              >
                Car Model
              </label>
              <input
                name="model"
                value={car.model}
                onChange={handleChange}
                placeholder="Add Car Model"
                required
                type="text"
                id="model"
                className="block w-full p-2 border border-gray-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 text-left bg-white h-10"
              />
            </div>
            <div className="md:w-80">
              <label
                htmlFor="price"
                className="block mb-2 font-medium text-left text-primary50 md:text-xl font-sans"
              >
                Car Price
              </label>
              <input
                placeholder="Add Car Price"
                required
                type="number"
                id="price"
                name="price"
                value={car.price}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 text-left bg-white2 h-10"
              />
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-5">
            <div className="md:w-80">
              <label
                htmlFor="color"
                className="block mb-2 font-medium text-left text-primary50 md:text-xl font-sans"
              >
                Choose Color
              </label>
              <select
                id="color"
                name="color"
                value={car.color}
                onChange={handleChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="" disabled>
                  Select Color
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>
            <div className="md:w-80">
              <label
                htmlFor="date-input"
                className="block mb-2 font-medium text-left text-primary50 md:text-xl font-sans"
              >
                Manufacture Date
              </label>
              <input
                onChange={handleChange}
                value={car.manufactureDate}
                required
                type="date"
                name="manufactureDate"
                id="date-input"
                className="block w-full p-2 border border-gray-300 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 text-left bg-white2"
              />
            </div>
          </div>

          <div className="md:m-5 flex justify-center gap-5">
            <button
              type="submit"
              className="flex h-10 rounded-md bg-primary50 font-sans md:pl-1 md:pt-2 md:pr-4 pr-4 md:pl-2 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-primary50"
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
              {isEditing ? "Save Changes" : "Add Car"}
            </button>
            <Link
              to="/"
              className="flex h-10 rounded-md bg-primary50 font-sans md:pl-4 md:pt-2 md:pr-4 pr-4 pl-4 py-1.5 text-base font-semibold leading-6 text-white shadow-sm"
            >
              Show All Cars
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Add_Car;

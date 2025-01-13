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
    navigate("/thank-you");
  };
  return (
    <div className=" w-full flex justify-center items-center">
    <div className="relative flex flex-col md:flex-row justify-center items-center">
      <div className="container w-full pt-10 pr-8">
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
              d="M0 0h..."
            />
          </svg>
        </div>
        <br />
        <form
          className="rounded-3xl bg-white pl-10 ml-8 pt-5 pr-10 pb-5 border border-1.5 shadow-lg w-full max-w-3xl"
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
                className="block w-full p-2 border border-gray-300 rounded-lg text-xs focus:bg-white focus:border-blue-500 text-left bg-white h-10"
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
                className="block w-full p-2 border border-gray-300 rounded-lg text-xs   text-left  h-10"
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
                className=" border border-gray-300 text-gray400 text-sm rounded-lg block w-full p-2.5"
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
                className="block w-full p-2 border border-gray400 rounded-lg text-xs  focus:border-blue-500 text-left bg-white"
              />
            </div>
          </div>

          <div className="md:m-5 md:flex justify-center gap-5">
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
              className="mt-2 md:mt-0 flex h-10 rounded-md bg-primary50 md:w-auto w-[9rem] font-sans md:pl-4 md:pt-2 md:pr-4  pl-4 py-1.5 text-base font-semibold leading-6 text-white shadow-sm"
            >
              Show All Cars
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}
export default Add_Car;

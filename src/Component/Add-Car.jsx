import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Add_Car({ addCar, editCar, editCarData, isEditing, setIsEditing }) {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    model: "",
    price: "",
    color: "",
    manufactureDate: "",
  });

  useEffect(() => {
    if (editCarData) {
      setCar(editCarData); // Populate form with the selected car's data
    } else {
      setCar({ model: "", price: "", color: "", manufactureDate: "" }); // Clear form for adding new car
    }
  }, [editCarData]);

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
      editCar(car); // Save the changes when editing
    } else {
      addCar({ ...car, id: Date.now() }); // Add new car
    }
    setCar({ model: "", price: "", color: "", manufactureDate: "" }); // Clear the form after submission
    navigate("/cars"); // Navigate to the car list page after submission
  };
  return (
    <div className="relative flex flex-col md:flex-row justify-between ">
      <div className="container w-full md:w-[calc(100%-270px)] lg:w-[calc(100%-280px)] pt-10 pr-8 lg:pr-10 md:mr-[270px] lg:mr-[280px]">
        <h2 className="mt-10 text-left md:text-3xl font-bold leading-9 tracking-tight text-primary400 font-sans ml-10">
          Add Car
        </h2>
        <br></br>
        <form
          className="rounded-3xl mx-auto bg-white pl-10 ml-8 pt-5 pr-10 pb-5 border-[1.5px] border-white2-100"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="model"
              className="block mb-2 font-medium text-left text-black md:text-xl font-sans"
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
              className="block w-full p-2 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 text-left bg-white2 h-10"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 font-medium text-left text-black md:text-xl font-sans"
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
              className="block w-full p-2 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 text-left bg-white2 h-10"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="color"
              class="block mb-2 font-medium text-left text-black md:text-xl font-sans"
            >
              Choose Color
            </label>
            <select
              id="color"
              name="color"
              value={car.color}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
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
          <div className="mb-5">
            <div className="md:w-1/4">
              <label
                htmlFor="date-input"
                className="block mb-2 font-medium text-left text-black md:text-xl font-sans"
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
                className="block w-full p-2 rounded-lg text-xs focus:ring-blue-500 focus:border-blue-500 text-left bg-white2"
              />
            </div>
          </div>

          <div className="m-5 flex justify-end">
            <button
              type="submit"
              className="flex h-10 mr-[-20px] rounded-md bg-primary400 font-sans md:pl-1 md:pt-2 md:pr-4 pr-4 pl-4 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-primary400 "
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
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 24L16.5 8"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {isEditing ? "Save Changes" : "Add Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
    // <form
    //   className="flex flex-col gap-4 p-4 border rounded shadow-md"
    //   onSubmit={handleSubmit}
    // >
    //   <input
    //     type="text"
    //     name="model"
    //     value={car.model}
    //     onChange={handleChange}
    //     placeholder="Car Model"
    //     className="p-2 border rounded"
    //   />
    //   <input
    //     type="number"
    //     name="price"
    //     value={car.price}
    //     onChange={handleChange}
    //     placeholder="Price"
    //     className="p-2 border rounded"
    //   />
    //   <select
    //     name="color"
    //     value={car.color}
    //     onChange={handleChange}
    //     className="p-2 border rounded"
    //   >
    //     <option value="" disabled>
    //       Select Color
    //     </option>
    //     <option value="Red">Red</option>
    //     <option value="Blue">Blue</option>
    //     <option value="Green">Green</option>
    //     <option value="Black">Black</option>
    //     <option value="White">White</option>
    //   </select>
    //   <input
    //     type="date"
    //     name="manufactureDate"
    //     value={car.manufactureDate}
    //     onChange={handleChange}
    //     className="p-2 border rounded"
    //   />
    //   <button
    //     type="submit"
    //     className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //   >
    //     {isEditing ? "Save Changes" : "Add Car"}
    //   </button>
    // </form>
  );
}
export default Add_Car;

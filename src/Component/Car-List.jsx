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
    setSelectedCars([]);
  };

  const handleEdit = (car) => {
    navigate("/", { state: { car } }); // Navigate with car details
  };

  useEffect(() => {
    // Set loading to true when fetching starts
    dispatch(setLoading(true));

    // Simulate a delay (e.g., fetching data or some other operation)
    setTimeout(() => {
      // After 1 second, set loading to false
      dispatch(setLoading(false)); // Set loading to false after the "fetch"
    }, 1000);
  }, [dispatch]);

  if (loading) return <p className="text-center">LOADING...</p>;

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="md:text-2xl font-bold leading-none text-primary50">
              All Cars
            </h5>
          </div>
          <div className="flow-root">
            {cars.map((car) => (
              <ul key={car.id} role="list" className="divide-y divide-gray-200">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-xl font-medium text-primary50 truncate">
                        <span className="">{car.model}</span>
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-primary50">
                      <input
                        type="checkbox"
                        onChange={() => handleSelect(car.id)}
                        checked={selectedCars.includes(car.id)}
                      />
                      <button
                        onClick={() => handleEdit(car)}
                        className="p-1 text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
            <div className="mt-4 flex justify-end">
              <Link
                to="/"
                className="p-2 bg-primary50 text-white rounded hover:bg-primary50"
              >
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

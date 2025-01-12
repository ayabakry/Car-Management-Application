import { useEffect, useState } from "react";
import { deleteCars, editCar,setSelectedCars,setLoading } from '../Store/carSlice';
import { useDispatch, useSelector } from "react-redux";

function Car_list() {
  const cars = useSelector((state) => state.cars.cars); // Access cars from Redux
  const dispatch = useDispatch();
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
    dispatch(editCar(car)); 
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
    <div className="p-4">
      <h2 className="text-xl font-bold">Car List</h2>
      {cars.map((car) => (
        <div key={car.id} className="flex items-center justify-between p-2 border-b">
          <div>
            <input
              type="checkbox"
              onChange={() => handleSelect(car.id)}
              checked={selectedCars.includes(car.id)}
            />
            <span className="ml-2">{car.model}</span>
          </div>
          <div>
            <button
              onClick={() => handleEdit(car)}
              className="p-1 text-blue-500 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
      {selectedCars.length > 0 && (
        <button
          onClick={handleDelete}
          className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Selected
        </button>
      )}
    </div>
  );
}
export default Car_list;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Car_list({ cars, deleteCars, editCar }) {
  const [selectedCars, setSelectedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleSelect = (id) => {
    setSelectedCars((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    deleteCars(selectedCars);
    setSelectedCars([]);
  };
  const handleEdit = (car) => {
    navigate("/", { state: { car } });
  };
  if (loading) return <p className="text-center">LOADING...</p>;

  return (
    <div className="p-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="flex items-center justify-between p-2 border-b"
        >
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
              onClick={() => editCar(car)} // Trigger editCar when Edit is clicked
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

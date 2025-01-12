// import Car_list from "../Component/Car-List";

// function Car_List_Page() {
//   const cars = useSelector((state) => state.cars.cars); // Access cars from Redux
//   const dispatch = useDispatch();
//   const [selectedCars, setSelectedCars] = useState([]);

//   const handleSelect = (id) => {
//     setSelectedCars((prev) =>
//       prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
//     );
//   };

//   const handleDelete = () => {
//     dispatch(deleteCars(selectedCars)); // Dispatch the delete action
//     setSelectedCars([]);
//   };

//   const handleEdit = (car) => {
//     dispatch(editCar(car)); 
   
//   };
//   return (
//      <div className="p-4">
//       <h2 className="text-xl font-bold">Car List</h2>
//       {cars.map((car) => (
//         <div key={car.id} className="flex items-center justify-between p-2 border-b">
//           <div>
//             <input
//               type="checkbox"
//               onChange={() => handleSelect(car.id)}
//               checked={selectedCars.includes(car.id)}
//             />
//             <span className="ml-2">{car.model}</span>
//           </div>
//           <div>
//             <button
//               onClick={() => handleEdit(car)}
//               className="p-1 text-blue-500 hover:underline"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       ))}
//       {selectedCars.length > 0 && (
//         <button
//           onClick={handleDelete}
//           className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Delete Selected
//         </button>
//       )}
//     </div>
//   );
// }
// export default Car_List_Page;

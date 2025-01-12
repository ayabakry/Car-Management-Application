import Car_list from "../Component/Car-List";

function Car_List_Page() {
  //   const dispatch = useDispatch();
  //   const cars = useSelector((state) => state.cars.cars);

  //   const handleDeleteCars = (ids) => {
  //     dispatch(deleteCars(ids));
  //   };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">All Cars</h2>
      <Car_list cars={cars} deleteCars={handleDeleteCars} />
    </div>
  );
}
export default Car_List_Page;

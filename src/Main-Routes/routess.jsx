import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars, addCar, editCar, deleteCars } from "../Store/carSlice";
import Add_Car from "../Component/Add-Car";
import Car_list from "../Component/Car-List";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../Utils/localStorageUtils";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Routess() {
  // const dispatch = useDispatch();
  // const cars = useSelector((state) => state.cars.cars);

  // useEffect(() => {
  //   const storedCars = loadFromLocalStorage('cars');
  //   dispatch(setCars(storedCars));
  // }, [dispatch]);

  // useEffect(() => {
  //   saveToLocalStorage('cars', cars);
  // }, [cars]);
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">Car Management</h1>
        <Routes>
          <Route path="/" element={<Add_Car />} />
          <Route path="/cars" element={<Car_list />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routess;

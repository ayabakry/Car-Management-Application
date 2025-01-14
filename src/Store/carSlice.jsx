import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    selectedCars: [],
    isEditing: false,
    loading: false,
    car: {
      // Car being added/edited
      model: "",
      price: "",
      color: "",
      manufactureDate: "",
    },
  },
  reducers: {
    addCar: (state, action) => {
      if (Array.isArray(state.cars)) {
        state.cars.push(action.payload);
      } else {
        console.error("state.cars is not an array");
      }
    },
    editCar: (state, action) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    },
    deleteCars: (state, action) => {
      state.cars = state.cars.filter((car) => !action.payload.includes(car.id));
    },
    setCars: (state, action) => {
      state.cars = Array.isArray(action.payload) ? action.payload : [];
    },
    setSelectedCars: (state, action) => {
      state.selectedCars = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCar: (state, action) => {
      state.car = action.payload;
    },
  },
});

export const {
  addCar,
  editCar,
  deleteCars,
  setCars,
  setSelectedCars,
  setLoading,
  setCar,
  setIsEditing,
  resetCar,
} = carSlice.actions;

export default carSlice.reducer;

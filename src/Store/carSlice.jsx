import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    selectedCars: [],
    isEditing: false,
    loading: false,
    car: {
      model: "",
      price: "",
      color: "",
      manufactureDate: "",
    },
  },
  reducers: {
    addCar: (state, action) => {
      // use GPT for help because when i try to add new car can't see the attribute of it
      // Check if state.cars is an array
      if (Array.isArray(state.cars)) {
        // If it is an array, add the new car (action.payload) to the array
        state.cars.push(action.payload);
      } else {
        // If it is not an array, log an error message to the console
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

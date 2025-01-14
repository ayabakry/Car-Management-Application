import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    selectedCars: [],
    isEditing: false,
    loading: false,
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
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
      state.cars = action.payload;
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
  },
});

export const {
  addCar,
  editCar,
  deleteCars,
  setCars,
  setSelectedCars,
  setLoading,
  setIsEditing,
} = carSlice.actions;

export default carSlice.reducer;

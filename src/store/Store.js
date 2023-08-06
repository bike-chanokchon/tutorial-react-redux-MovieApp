import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './Reducer'

// ตั้งค่าให้ Store ของ application
export default configureStore({
    reducer: {
        movies: movieSlice
    }
})
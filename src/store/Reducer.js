import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movieListing',
    initialState: initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload
            console.log(current(state)) // ดูค่าที่ถูกส่งมาใน state
        }
    }
})

export const { addMovie } = movieSlice.actions
export default movieSlice.reducer
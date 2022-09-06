import { createSlice} from '@reduxjs/toolkit'
import data from './data'

export const citiesSlice = createSlice({

    name : 'cities',

    initialState : {
        cities: []
    },

    reducers : {
        fetchFromServer : (state) => {
            state.cities = data
        },
        fetchById: (state) => {}
    }
})


export const {fetchFromServer} = citiesSlice.actions

export default citiesSlice.reducer
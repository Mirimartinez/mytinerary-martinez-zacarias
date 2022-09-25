import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import citiesAPI from './citiesApi'
import itinerariesAPI from './itinerariesAPI'
import activitiesAPI from './activitiesAPI'
import userAPI from './UserAPI'
import commentsAPI from './commentsAPI'

const store = configureStore({

    reducer:{
        [userAPI.reducerPath] : userAPI.reducer,
        cities : citiesAPI,
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer,
        [commentsAPI.reducerPath] : commentsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware),
})
setupListeners(store.dispatch)
export default store
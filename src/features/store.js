import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import citiesAPI from './citiesApi'
import itinerariesAPI from './itinerariesAPI'
import activitiesAPI from './activitiesAPI'
import userAPI from './UserAPI'

const store = configureStore({

    reducer:{
        [userAPI.reducerPath] : userAPI.reducer,
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware),
})
setupListeners(store.dispatch)
export default store
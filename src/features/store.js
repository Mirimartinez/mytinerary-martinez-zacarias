import { configureStore} from '@reduxjs/toolkit'

import citiesAPI from './citiesApi'

const store = configureStore({

    reducer:{
        
        [citiesAPI.reducerPath] : citiesAPI.reducer
    },
    /* middleware: (getDefaultMiddleware) => getDefaultMiddleware({

        inmutableCkeck: false,
        seriaLizableCkeck: false,
    }) */
})

export default store
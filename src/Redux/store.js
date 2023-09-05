import { configureStore} from '@reduxjs/toolkit';
import showReducer from './features/show'
const store = configureStore({
   reducer:{
        showSlider: showReducer
   }
});

export default store
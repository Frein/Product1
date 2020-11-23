import React from 'react';
import './App.css';
import store from "./app/store";
import {Provider} from "react-redux";

export const MasterFrontContext = React.createContext({
    count: 0,
});

function Product1App({masterCount, routing}) {
    return (
        <MasterFrontContext.Provider value={masterCount}>
            <Provider store={store}>
                {routing}
            </Provider>
        </MasterFrontContext.Provider>

    );
}

export default Product1App;

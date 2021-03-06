import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children }) => (
    //children is component inside Datalayer i.e <App/>
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);




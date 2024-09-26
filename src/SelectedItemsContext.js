import React, { createContext, useState, useContext } from 'react';

const SelectedItemsContext = createContext();

export function SelectedItemsProvider({ children }) {
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
            {children}
        </SelectedItemsContext.Provider>
    );
}

export function useSelectedItems() {
    return useContext(SelectedItemsContext);
}
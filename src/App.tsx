import React from 'react';
import './App.css';
import {Table} from "./components";
import tableData from "./data/products.json";
import ErrorBoundary from './ErrorBoundary';

function App() {
    return (
        <div className="App">
            <h3>Products</h3>
            <ErrorBoundary>
                <Table
                    columns={tableData.columns}
                    rows={tableData.rows}
                />
            </ErrorBoundary>
        </div>
    );
}

export default App;

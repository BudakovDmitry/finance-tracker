'use client'

import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import {useEffect, useState} from "react";

const Dashboard = () => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:5000/expense');
                setRowData(response.data)
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        }

        fetchData();
    }, [])

    const [colDefs, setColDefs] = useState([
        { field: "name" },
        { field: "type" },
        { field: "value" },
        { field: "date" }
    ]);

    return (
        <div
            className="ag-theme-quartz"
            style={{height: 500}}
        >
            <AgGridReact
                rowData={rowData}
                // @ts-ignore
                columnDefs={colDefs}
            />
        </div>
    )
}

export default Dashboard;
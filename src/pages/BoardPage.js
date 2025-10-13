
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import {useEffect, useMemo, useState} from "react";
import api from '../utils/api';
import {Link} from "react-router-dom";

const BoardPage =  () => {
    ModuleRegistry.registerModules([AllCommunityModule]);

        // Row Data: The data to be displayed.
        const [rowData, setRowData] = useState([
            { id: 1, writer:"userId", title:"게시글입니다",  write_date:"2025-10-10"},
          
        ]);

    useEffect(() => {
       // //axio로 불러와서 setRowData로 담기
         api.get(`/board/list`).then(e=> {

             setRowData(e.data)
         })
       //  // setRowData();
    },[]);

    const TitleRenderer = ({ value, data }) => (
        <Link to={`/board/detail/${data.id}`}>{value}</Link>
    );

    const colDefs = [
        {
            headerName: 'ID',
            field: 'id'
        },
        {
            headerName: '제목',
            field: 'title',
            cellRenderer: TitleRenderer

        },
        {
            headerName: '작성자',
            field: 'writer'
        },
        {
            headerName: '작성일',
            field: 'write_date'
        }
    ]

    const defaultColDef = useMemo(() => ({
        filter: true, // Enable filtering on all columns
        flex: 1,
        isFullWidthRow:true,

    }))


    return (
        // Data Grid will fill the size of the parent container
        <div className="h-full flex flex-col">

            <div className="flex-1">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                />
            </div>
            <div className="m-2 flex justify-end">
                <Link to="/board/write"><button>글쓰기 </button></Link>
            </div>
        </div>
    )
}
export default BoardPage;

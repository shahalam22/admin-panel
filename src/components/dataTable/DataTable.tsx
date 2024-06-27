import { Link } from 'react-router-dom';
import './dataTable.scss';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { QueryClient, useMutation } from 'react-query';


type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}


const DataTable = (props:Props) => {

    const queryClient = new QueryClient();

    const mutation = useMutation({
        mutationFn: (id: number) => {
                return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
                    method: "delete",
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([props.slug]);
        }
    })

    const handleDelete = (id: number) => {
        // delete api call
        mutation.mutate(id);       
    }

    const actionColumn: GridColDef = {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <div className='action'>
                    <Link to={`/${props.slug}/${params.row.id}`}><img src="/view.svg" alt="" /></Link>
                    <div className='delete' onClick={()=>handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='dataTable'>
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar:{
                        showQuickFilter: true,
                        quickFilterProps: {
                            debounceMs: 500,
                        }
                    }
                }}  
                pageSizeOptions={[5,10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />  
        </div>
    )
}

export default DataTable;
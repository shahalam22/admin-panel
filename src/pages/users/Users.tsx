import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
// import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';
import { useQuery } from 'react-query';


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];


const fetchPosts = async () => {
  const response = await fetch("https://admin-panel-saa21.netlify.app/api/users");
  return response.json();
};

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data} = useQuery('users', fetchPosts);  

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new user</button>
      </div>
      {isLoading ? <p>Data is Loading</p> : <DataTable slug="users" columns={columns} rows={data}/>}
      {open && <Add slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Users
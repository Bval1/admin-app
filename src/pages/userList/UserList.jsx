import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Amount',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteIcon className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];
      
  return (
    <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
  )
}

import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import React from 'react';
import { QueryClient, useMutation } from 'react-query';
// import { create } from '@mui/material/styles/createTransitions';


type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props:Props) => {

    const queryClient = new QueryClient();

    const mutation = useMutation({
        mutationFn: () => {
                return fetch(`https://admin-panel-backend-c1yy.onrender.com/${props.slug}s`, {
                    method: "post",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    // body for user add testing
                    body: JSON.stringify({
                        id: 16,
                        img: "/noavatar.png",
                        lastName: "Doe",
                        firstName: "John",
                        email: "johndoe@gmail.com",
                        phone: "123456789",
                        createdAt: "01.02.2023",
                        verified: true,
                    }),
                    
                    // // body for product add testing
                    // body: JSON.stringify({
                    //     id: 11,
                    //     img: "/noavatar.png",
                    //     title: "New Product",
                    //     color: "red",
                    //     price: "100",
                    //     producer: "New Producer",
                    //     createdAt: "01.02.2023",
                    //     inStock: true,
                    // }),
                }
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`${props.slug}s`]);
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setOpen(false);
        mutation.mutate();
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>x</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns
                        .filter((item) => item.field !== 'id' && item.field !== 'img')
                            .map((item) => (
                                <div className="item">
                                    <label>{item.headerName}</label>
                                    <input type={item.type} placeholder={item.field} />
                                </div>
                            )
                        )
                    }
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add;
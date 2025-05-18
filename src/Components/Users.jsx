import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const users = useLoaderData();
    const [initialUsers, setInitialUsers] = useState(users);
    // const {name,address,photo,email} = initialUsers;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/users/${id}`,{
                    method:'DELETE'
                }).then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount){
                        const remainingUsers = initialUsers.filter(user=> user._id !== id)
                        setInitialUsers(remainingUsers)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }
    console.log(initialUsers)
    return (
        <div>

            <h2 className='text-center text-2xl font-bold my-3' >Users:{initialUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            initialUsers.map((user, index) => <tr>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.address}

                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn btn-ghost ">View</button>
                                    <button className="btn btn-ghost">Edit</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost ">Delete</button>
                                </th>
                            </tr>)
                        }





                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default Users;
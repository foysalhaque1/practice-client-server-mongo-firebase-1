import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, photo, quantity, supplier, details, chef, taste } = useLoaderData();
    const handleUpdte = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee);
        // send updated coffee to the db
        fetch(`http://localhost:2000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your coffee has been updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='text-center'>
            <div className='p-12' >
                <h1 className='text-6xl'>Update coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdte} >
                <div className='grid md:grid-cols-2 gap-6 ' >

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">name</label>
                        <input type="text" className="input" defaultValue={name} placeholder="name" name='name' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">supplier</label>
                        <input type="text" defaultValue={supplier} className="input" placeholder="supplier" name='supplier' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">quantity</label>
                        <input type="text" className="input" defaultValue={quantity} placeholder="quantity" name='quantity' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">chef</label>
                        <input type="text" className="input" defaultValue={chef} placeholder="chef" name='chef' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">taste</label>
                        <input type="text" className="input" defaultValue={taste} placeholder="taste" name='taste' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Details</label>
                        <input type="text" className="input" defaultValue={details} placeholder="details" name='details' />


                    </fieldset>

                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 mt-3">


                    <label className="label">photo</label>
                    <input type="text" className="input w-full " defaultValue={photo} placeholder="photo" name='photo' />


                </fieldset>
                <input type="submit" className='btn btn-primary w-full my-3.5' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;
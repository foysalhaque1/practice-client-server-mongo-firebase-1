import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { photo, quantity, supplier, taste, name,_id } = data
    return (
        <div>
             <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex w-full justify-around p-6">
                    <div>

                        <h2 className="">{name}</h2>
                        <p>Quantity:{quantity}</p>
                        <p>Supplier:{supplier}</p>
                        <p>Taste:{taste}</p>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default ViewDetails;
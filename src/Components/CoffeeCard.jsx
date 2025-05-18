
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    
    const { photo, quantity, supplier, taste, name,_id } = coffee
    console.log(coffee);
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/coffees/${_id}`,{
                    method:'DELETE',
                    headers:{
                        'content-type':'application/json'
                    }
                }).then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount){

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingCoffees = coffees.filter(cof=>cof._id !== _id);
                        setCoffees(remainingCoffees)
                    }
                })
            }
        });
    }
    return (
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
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-2">
                           
                            <Link to={`/details/${_id}`} ><button className="btn join-item">View Details</button></Link>
                           <Link to={`/updateCoffee/${_id}`} > <button className="btn w-full join-item">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
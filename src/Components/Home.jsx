import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const[coffees,setCoffees] = useState(initialCoffees)

    console.log(coffees)
    return (
        <div>
            <h2>Home</h2>
            <h3 className='text-2xl text-center' >Total coffee: {coffees.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'  >

                {
                    coffees.map(coffee => <CoffeeCard setCoffees={setCoffees} coffees={coffees} key={coffee.insertedId} coffee={coffee} ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;
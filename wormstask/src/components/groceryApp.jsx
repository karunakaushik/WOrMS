
import React, { useState } from 'react'

const GroceryApp = (props) => {
    const fruits = [
        {
            id: 1,
            prod: 'Orange',
            votes: 0
        },
        {
            id: 2,
            prod: 'Apples',
            votes: 0
        },
        {
            id: 3,
            prod: 'Banana',
            votes: 0
        },

    ]
    let [products, setProducts] = useState(fruits);

    const plus = (index) => {
        setProducts((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                votes: updated[index].votes + 1
            }
            // console.log("plus",updated[index].votes);
            return updated;
        });
    };

    const minus = (index) => {
        setProducts((prev) => {
            const updated = [...prev]
            if (updated[index].votes > 0) {
                updated[index] = {
                    ...updated[index],
                    votes: updated[index].votes - 1
                }
            }


            // console.log("minus", updated[index].votes);

            return updated;
        });
    };

    return (
        <ul className='container'>
            {products.map((item, index) => {
                return <li key={index} className='d-flex align-items-baseline justify-content-evenly'>{item.prod}
                    <button className='btn btn-primary' onClick={() => plus(index)}>+</button>
                    <p>{item.votes}</p>
                    <button className='btn btn-primary' onClick={() => minus(index)}>-</button>

                </li>
            })}

        </ul>
    );
}

export default GroceryApp;
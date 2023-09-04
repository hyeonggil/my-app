import React, { useState, useEffect } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev)=>!prev);
    }

    useEffect(() => {
        fetch(`data/${checked ? 'sale_':''}products.json`)
        .then((res) => res.json())
        .then(
            (data) => {
                console.log(data);
                console.log("잘 받아옴");
                setProducts(data);
            }
        );
        return () => {
            
            console.log('청소합니다')
        }
    }, [checked]);

    return (
        <div>
            <input type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor="checkbox">Show 핫세일</label>
            <ul>
                {products.map((item)=>(
                    <li key={item.id}>
                        <article>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}


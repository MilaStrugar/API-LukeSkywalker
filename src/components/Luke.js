import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = (props) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(res => {
                setCategory(res.data)
            }).
            catch(err => {
                console.log(err)
            });
    }, [props]);

    return (
        <div>
            {(props.category) === "people" ?
                <div>
                    <h1>{category.name}</h1>
                    <h3><b>Height:</b> {category.height}cm</h3>
                    <h3><b>Weight:</b> {category.mass}kg</h3>
                    <h3><b>Hair Color:</b> {category.hair_color}</h3>
                    <h3><b>Skin Color:</b> {category.skin_color}</h3>
                </div>
                :
                <div>
                    <h1>{category.name}</h1>
                    <h3><b>Climate:</b> {category.climate}</h3>
                    <h3><b>Terrain:</b> {category.terrain}</h3>
                    <h3><b>Surface Water:</b> {category.surface_water}</h3>
                    <h3><b>Population:</b> {category.population}</h3>
                </div>
            }
        </div>
    );
}

export default Category
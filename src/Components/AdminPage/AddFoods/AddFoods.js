import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddFoods.css';

const AddFoods = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [addFoodType, setAddFoodType] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const cardData = {
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: uploadImage,
            foodType: addFoodType,
        }
        // console.log(cardData)

        fetch('https://young-savannah-03336.herokuapp.com/addFoods', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(cardData)
        })
        .then(res => res.json())
        .then(result => {
            // console.log('data added successfully', result);
        })

        window.location.reload(cardData);
    };
    
    const handleUploadImage = (event) =>{
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd743345ed836835ea8ba69731659d88a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setUploadImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleFoodType = event => {
        console.log(event.target.value);
        const foodType = event.target.value;
        setAddFoodType(foodType);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Food Name</label>
                <input name="name" placeholder="Food Name" {...register("name")}  />

                <label>Upload Food Image</label>
                <input type="file" onChange={handleUploadImage} />

                <label>Food Type</label>
                <select className="form-select food-type" onChange={handleFoodType} id="specificSizeSelect">
                    <option defaultValue="Choose">Choose...</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>

                <label>Description</label>
                <input name="description" placeholder="Food Description" {...register("description")}/>

                <label>Food Price</label>
                <input name="price" placeholder="Food Price" {...register("price")} />


                <input type="submit" />
            </form>
        </div>
    );
};

export default AddFoods;
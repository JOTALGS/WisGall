import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import { useUser } from '../hooks/userHook'
import { useNavigate } from 'react-router-dom'


const Upload = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: 0,
        image: null,
    });
    let accessToken;
    const refreshToken = localStorage.getItem('user.refresh')


    const submitForm = async (event) => {
        event.preventDefault();
        //validate data

        try {
            console.log('refTok', refreshToken)
            const response = await axios.post('http://127.0.0.1:8000/api/refresh/', { 
                refresh: refreshToken,
            });

            accessToken = response.data.access;

        } catch (error) {
            console.error('refresh token fail', error);
            // Handle registration failure (e.g., show an error message)
        }

        console.log('toekn refreshd:', accessToken)
        try {
            // axios request
            console.log('formdata', formData)
            // Send a POST request to your backend API
            const response = await axios.post('http://127.0.0.1:8000/api/course/upload/cover/', {
                title: formData['title'],
                description: formData['description'],
                price: formData['price'],
                image: formData['image'],
            },
            {
                headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${accessToken}`,
                },
            },
            );
            console.log('response', response)
            navigate('/upload/lessons')

        } catch (error) {
            console.error('Upload cover failed:', error);
            // Handle registration failure (e.g., show an error message)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    return (
    <div className="container">
        <Form onSubmit={submitForm}>
            <Form.Group id="title">
                <Form.Label>Course title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    placeholder="Describe your course"
                    className="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                    value={formData.description}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group id="Price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    placeholder="Cost"
                    className="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                    value={formData.price}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group id="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    placeholder="Upload cover"
                    accept="image/*"
                    className="w-full mt-2"
                    onChange={handleImageChange}
                />
            </Form.Group>

            <Button type="submit"
                style={{ color: 'purple', backgroundColor: 'orange' }}
            >
                Organize your content Content
            </Button>

        </Form>
    </div>
);
}

export default Upload
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useUser } from '../hooks/userHook'

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const errors = [];
    const { setToken } = useUser();
    const { setUserInfo } = useUser();
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/course/getimage/');

                setImageUrl(response.data.signed_url)
                console.log('signed url successful:', response.data.signed_url);
            } catch (error) {
                console.error('img failed:', error);
                // Handle registration failure (e.g., show an error message)
            }
        };
    
        fetchData();
    }, []);


    const submitForm = async (event) => {
        event.preventDefault();
        if (formData['username'] === '') {
            errors.push('Your e-mail is missing')
        }

        if (formData['password'] === '') {
            errors.push('Your password is missing')
        }
        // Use formData.username and formData.password for authentication calls

        // axios request
        console.log('formdata', formData['username'], formData['password'],)
        try {
            // Send a POST request to your backend API
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: formData['username'],
                password: formData['password'],
            });

            setToken(response.data)

            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;
            console.log('Login successful:', response.data);
            // Handle successful registration (e.g., show a success message)
        } catch (error) {
            console.error('Login failed:', error);
            // Handle registration failure (e.g., show an error message)
        }

        try {
            // Send a POST request to your backend API
            const response = await axios.get('http://127.0.0.1:8000/api/me/');

            setUserInfo(response.data)
            console.log('Retrieve me successful:', response.data);
            navigate('/collection')
            window.location.reload()
            // Handle successful registration (e.g., show a success message)
        } catch (error) {
            console.error('retreieve me failed:', error);
            // Handle registration failure (e.g., show an error message)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

  return (
    <div className={'mainContainer'}>
        <div>
            <div>
                <h1>Log in</h1>

                <p>
                    Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
                    Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
                </p>
                <img src={imageUrl} style={{ width: 200, height: 200 }} alt='googleclout'></img>
                <p>
                    Don't have an account? ffffff to create one!
                </p>
            </div>
        </div>

        <div>
            <div className="">
                <Form onSubmit={submitForm}>
                    <Form.Group id="usernamefield">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Your e-mail address"
                            className="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group id="passqword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Your password"
                            className="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="submit"
                        style={{ color: 'purple', backgroundColor: 'green' }}
                    >
                        Log in
                    </Button>

                </Form>
            </div>
        </div>
    </div>
  )
}

export default Login
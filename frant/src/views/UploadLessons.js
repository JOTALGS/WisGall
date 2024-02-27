import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import { useUser } from '../hooks/userHook'
import { useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';


const UploadLessons = () => {
    const [accordionItems, setAccordionItems] = useState([{ id: 0 }]);
    const [nextItemId, setNextItemId] = useState(1);

    const addAccordionItem = () => {
        setAccordionItems([...accordionItems, { id: nextItemId }]);
        setNextItemId(nextItemId + 1);
    };

    const deleteAccordionItem = (id) => {
        setAccordionItems(accordionItems.filter(item => item.id !== id));
    };

    return (
    <div className="container">
        <Accordion defaultActiveKey={['0']} alwaysOpen className="mt-2 py-4 px-6">
            {accordionItems.map((item, index) => (
                <Accordion.Item key={index} eventKey={String(index)}>
                    <Accordion.Header>Lesson #{index + 1}</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit="">
                            <Form.Group id="Title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    placeholder="Lesson title"
                                    className="w-full mt-2 border border-gray-200 rounded-lg"
                                    value=""
                                    onChange=""
                                />
                            </Form.Group>
                            <Form.Group id="subtitle">
                                <Form.Label>Subtitle</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    placeholder="Lesson subtitle"
                                    className="w-full mt-2 border border-gray-200 rounded-lg"
                                    value=""
                                    onChange=""
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
                                    onChange=""
                                />
                            </Form.Group>
                            <Form.Group id="body">
                                <Form.Label>Body</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    placeholder="Lesson content"
                                    className="w-full mt-2 border border-gray-200 rounded-lg"
                                    value=""
                                    onChange=""
                                />
                            </Form.Group>
                            <Form.Group id="video">
                                <Form.Label>Video</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="video"
                                    placeholder="Upload video"
                                    accept="video/*"
                                    className="w-full mt-2"
                                    onChange="" // Use a function to handle the video file change
                                />
                            </Form.Group>

                            <Button type="submit" className='m-4'
                                style={{ color: 'purple', backgroundColor: 'orange', borderColor: 'orange' }}
                            >
                                Save Lesson
                            </Button>

                        </Form>
                        <div className="d-flex justify-content-between mb-1">
                            <div>
                            <Button
                                onClick={addAccordionItem}
                                style={{ backgroundColor: '#00a876' , borderColor: '#00a876'}}
                                className=""
                            >
                                Add Another Lesson
                            </Button>
                            </div>
                            <div>
                            <Button
                                onClick={() => deleteAccordionItem(item.id)}
                                style={{ backgroundColor: '#9e0000', borderColor: '#9e0000' }}
                                className=""
                            >
                                Delete Lesson
                            </Button>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
        <div>
        </div>

        <div>
            <Button type="submit" className='m-2'
                style={{ color: 'purple', backgroundColor: 'orange', borderColor: 'orange' }}
            >
                Organize your content Content
            </Button>
        </div>
    </div>
);
}

export default UploadLessons
import React, { useEffect, useState } from 'react';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

export default function App() {

    const [url] = useState("https://3001-amethyst-cod-emn3irjk.ws-us18.gitpod.io/contacts")

    const [edit, setEdit] = useState(false);

    const [contacts, setContacts] = useState([]);

    const [contact, setContact] = useState({
        name: '',
        phone: ''
    })

    useEffect(() => {
        getContacts(url);

    }, [])

    /* const getContacts = url => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setContacts(data);
            })
            .catch((error) => {
                console.log(error);
            })
    } */

    // async / await

    /* 
    definicion de una funcion de nombre asincrona
    async function getAsyncFunction() {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            //console.log(response);
            const data = await response.json();
            //console.log(data);

        } catch (error) {
            console.log(error);
        }
    } 
    */

    /*
    definicion de una funcion de flecha asincrona
    */
    const getContacts = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            //console.log(response);
            const data = await response.json();
            //console.log(data);
            setContacts(data);

        } catch (error) {
            console.log(error);
        }
    }

    /* const saveContact = (url, contact) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setContact({
                    name: '',
                    phone: ''
                });
                getContacts("https://3001-amethyst-cod-emn3irjk.ws-us18.gitpod.io/contacts");
            })
            .catch((error) => {
                console.log(error);
            })
    } */

    const saveContact = async (url, contact) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json();

            console.log(data);

            if (data.id > 0) {
                setContact({
                    name: '',
                    phone: ''
                });
                getContacts(url);
            }


        } catch (error) {
            console.log(error)
        }
    }

    /* const updateContact = (url, contact) => {
        fetch(`${url}/${contact.id}`, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setContact({
                    name: '',
                    phone: ''
                });
                getContacts("https://3001-amethyst-cod-emn3irjk.ws-us18.gitpod.io/contacts");
            })
            .catch((error) => {
                console.log(error);
            })
    } */

    const updateContact = async (url, contact) => {
        try {
            const response = await fetch(`${url}/${contact.id}`, {
                method: 'PUT',
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();

            console.log(data);
            setContact({
                name: '',
                phone: ''
            });
            getContacts(url);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteContact = async (url, contact) => {
        try {
            const response = await fetch(`${url}/${contact.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            getContacts(url);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        //console.log(contact);
        if (edit) {
            updateContact(url, contact);
        } else {
            saveContact(url, contact);
        }
    }

    return (
        <>
            <h1 className="m-5">Component Principal</h1>
            {
                edit ? (
                    <EditContact contact={contact} setContact={setContact} handleSubmit={handleSubmit} />
                ) : (
                    <AddContact contact={contact} setContact={setContact} handleSubmit={handleSubmit} />
                )
            }

            <h3 className="mx-5">Contact List</h3>
            <ul className="list-group m-5">
                {
                    contacts.length === 0 ?
                        (
                            <li className="list-group-item text-center border-0">
                                <div className="spinner-border text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </li>
                        ) : (
                            <>
                                {
                                    contacts.map((contact, index) => {
                                        return <li key={index} className="list-group-item d-flex justify-content-between">
                                            <a href="/#" className="text-info" onClick={(e) => {
                                                e.preventDefault();
                                                setContact(contact);
                                                setEdit(true);
                                            }}>{contact.name} / {contact.phone}</a>
                                            <span><i className="fas fa-trash" onClick={() => deleteContact(url, contact)}></i></span>
                                        </li>
                                    })
                                }
                            </>
                        )

                }
            </ul>

        </>
    )
}
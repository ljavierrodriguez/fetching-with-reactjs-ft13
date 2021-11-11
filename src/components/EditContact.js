import React from 'react';

const EditContact = ({ contact, setContact, handleSubmit }) => {
    return (
        <>
            <h3 className="mx-5">Edit Contact</h3>
            <form className="mb-5 mx-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Insert name" value={contact.name}
                        onChange={(e) => setContact({
                            ...contact,
                            name: e.target.value
                        })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="+1 1111 11 1111 11" value={contact.phone}
                        onChange={(e) => setContact({
                            ...contact,
                            phone: e.target.value
                        })} />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary gap-2">
                        Editar
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditContact;
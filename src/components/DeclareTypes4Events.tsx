import React, { useState } from 'react';

const DeclareTypes4Events = () => {
    // declaring type of onchange event handler
    const [name, setName] = useState("Asif");
    const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }


    // declaring type of onClick event handler
    const [show, setShow] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { setShow(!show) }

    // for event handling of form tag
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let userInfo ={name}
        console.log(userInfo);
    }
    return (
        <div style={{ background: "yellow", fontSize: 20, padding: 20, width: "75%", margin: "50px auto" }}>
            <h2>Recieving declaring type for  <strong>"events"</strong></h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        <input id='name' type="text" name="name" onChange={handleInputOnchange} defaultValue={name} />
                    </label>
                </div>
                <p>
                    <button onClick={handleClick}>{show ? "Hide Name" : "Show Name"}</button>
                    <strong> {show ? name : ""}</strong>
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DeclareTypes4Events;
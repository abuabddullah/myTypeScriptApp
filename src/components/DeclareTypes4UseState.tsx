import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

type CustomType = { name: string, age: number }

const DeclareTypes4UseState = () => {
    // no mentioned data type
    const [count, setCount] = useState(0);
    const handleIncrease = () => { setCount(count + 1) }
    const handleReset = () => { setCount(0) }


    // mentioned data type
    const [status, setStatus] = useState<boolean>(false)
    const handleStatus = () => { setStatus(!status) }

    // mentioned unionType data type
    const [unionTypeData, setUnionTypeData] = useState<string | number | boolean>(false)
    const handleUnionTypeData = () => { setUnionTypeData("any of number | string | boolean will be accepted caus of union type data") }
    const handleUnionTypeData2Number = () => { setUnionTypeData(1) }


    //initial value null with declaringCustomType by unionType
    const [users, setUsers] = useState<null | CustomType>(null)
    const handleUsers = () => { setUsers({ name: "asif", age: 20 }) }
    const handleInitialUsers = () => { setUsers(null) }

    return (
        <div style={{ background: "yellow", fontSize: 20, padding: 20, width: "75%", margin: "50px auto" }}>
        <h2>Recieving different datatype while declaring stateVariables by "useState" <strong>"PropsType"</strong></h2>
            <p><strong>no mentioned dataType : </strong>{count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>reset</button>


            <p><strong>mentioned dataType : </strong>{status ? "true" : "false"}</p>
            <button onClick={handleStatus}>setStatus</button>


            <p><strong>mentioned unionTypeData : </strong><span>
                {unionTypeData}
            </span></p>
            <button onClick={handleUnionTypeData}>setUnionTypeData</button>
            <button onDoubleClick={handleUnionTypeData2Number}>doubleClick2setNumber</button>


            <p><strong>null with Custom Type by unionType : </strong><span>
                {users ? users.name : "null"}
            </span></p>
            <button onClick={handleUsers}>setUsers</button>
            <button onClick={handleInitialUsers}>setUsers2initial</button>
        </div>
    );
};

export default DeclareTypes4UseState;









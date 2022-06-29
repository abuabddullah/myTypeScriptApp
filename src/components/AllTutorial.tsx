import React from 'react';
import DeclareTypes4Events from './DeclareTypes4Events';
import DeclareTypes4Props from './DeclareTypes4Props';
import DeclareTypes4UseState from './DeclareTypes4UseState';

const AllTutorial = () => {
    return (
        <div>
            <DeclareTypes4Props
                stringProps="Asif"
                numberProps={10}
                booleanProps={true}
                objectProps={{ name: "Asif", age: 20 }}
                arrayOfStringProps={["Asif", "Khan", "Jahan"]}
                arrayOfNumberProps={[10, 20, 30]}
                arrayOfBooleanProps={[true, false, true]}
                arrayOfObjectProps={[{ name: "Asif", age: 20 }, { name: "Khan", age: 30 }]}
                // arrayOfObjectProps={arrOfObj}
                unionTypePropsByVAlue={"error"}
                unionTypePropsByDataType={"false"}
                optionalTypeProps={"dataType checking is _[optional]_ so any kinds of dataType will be accepted"}
                implicitTypeProps={"dataType checking is _[banned]_ so any kinds of dataType will be accepted"}
                styleProps={{ background: "yellow", fontSize: 20, padding: 20, width: "75%", margin: "50px auto" }}
            >
                <button>childrenProps</button>
            </DeclareTypes4Props>

            <DeclareTypes4UseState />

            <DeclareTypes4Events />
        </div>
    );
};

export default AllTutorial;
import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

type PropsType = {
    stringProps: string;
    numberProps: number;
    booleanProps: boolean;
    objectProps: { name: string; age: number; };
    arrayOfStringProps: string[];
    arrayOfNumberProps: number[];
    arrayOfBooleanProps: boolean[];
    arrayOfObjectProps: {
        name: string;
        age: number;
    }[];
    unionTypePropsByVAlue: "success" | "error" | "loading";
    unionTypePropsByDataType: string | number | boolean;
    optionalTypeProps?: string;
    implicitTypeProps: any;
    styleProps: React.CSSProperties;
    children: React.ReactNode;
}

const DeclareTypes4Props = ({ stringProps, numberProps, booleanProps, objectProps, arrayOfStringProps, arrayOfNumberProps, arrayOfBooleanProps, arrayOfObjectProps, unionTypePropsByVAlue, unionTypePropsByDataType,optionalTypeProps,implicitTypeProps, styleProps, children }: PropsType) => {
    return (
        <div>
            <h2>Recieving different data type,children,CSSStyles as props by Defining <strong>"PropsType"</strong></h2>

            <div style={styleProps}>
                <i>examples of props</i>
                <p><strong>stringProps : </strong>{stringProps}</p>
                <p><strong>numberProps : </strong>{numberProps}</p>
                <p><strong>booleanProps : </strong>{booleanProps ? "true" : "false"}</p>
                <p><strong>stringProps : </strong>{stringProps}</p>
                <p><strong>objectProps : </strong>{objectProps.name} | {objectProps.age}</p>

                <small><u><i>array related props</i></u></small>

                <p><strong>arrayOfStringProps : </strong>{arrayOfStringProps.join(", ")}</p>
                <p><strong>arrayOfNumberProps : </strong>{arrayOfNumberProps.join(", ")}</p>
                <p><strong>arrayOfBooleanProps : </strong>{arrayOfBooleanProps.join(", ")}</p>
                <p><strong>arrayOfObjectProps : </strong>{arrayOfObjectProps.map(item => `${item.name} | ${item.age}`).join(", ")}</p>

                <small><u><i>array related props</i></u></small>

                <p><strong>unionTypePropsByVAlue : </strong>
                    {unionTypePropsByVAlue === "success" && "data fetched successfully"}
                    {unionTypePropsByVAlue === "error" && "ERROR: data fetched failed"}
                    {unionTypePropsByVAlue === "loading" && "Loading . . ."}
                </p>
                <p><strong>unionTypePropsByDataType : </strong>
                    {typeof(unionTypePropsByDataType) === "string" && "unionTypePropsByDataType a string"}
                    {typeof(unionTypePropsByDataType) === "number" && "unionTypePropsByDataType a number"}
                    {typeof(unionTypePropsByDataType) === "boolean" && "unionTypePropsByDataType a boolean"}
                </p>

                <small><u><i>Restricting strickness of type checking</i></u></small>
                <p><strong>optionalTypeProps? : </strong><code style={{color:"red"}}>{optionalTypeProps}</code></p>
                <p><strong>implicitTypeProps : </strong><code style={{color:"red"}}>{implicitTypeProps}</code></p>

                <small><u><i>children related props</i></u></small>

                <p>{children}</p>
            </div>
        </div>
    );
};

export default DeclareTypes4Props;
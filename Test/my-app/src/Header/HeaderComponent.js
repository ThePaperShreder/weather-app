import React from "react";
import NavComponent from "./NavComponent";
import FormComponent from "./FormComponent";

export default function HeaderComponent(props) {
    return (
        <>
            <NavComponent/>
            <FormComponent {...props}/>
        </>
    )
}
import React from "react";
import NavComponent from "./NavComponent";
import FormComponent from "./FormComponent";

//Funktsionalnii companent 
//vse kompanenti nazivautsa s zaglavnoi bukvi, chtobi ne outat JSX s html
//Companenti v reacte tzhe samoe chto i funktsii v JS
//component prinimaet argumenti kotorii nazivajutsa properties
//vse prperties kotorii peredani kompanentu, hranjatsa v peremenoi 'props'
//u komponenta mogut bit properties po umolchaniju
//properties nelzja izmenit v componente
//properties peredautsa v komponent html atibuti 


export default function HeaderComponent(props) {
    // ... - spreading v JS. 
    //spreading smotrit vse znachenij v objektee i peredaet ih kazhdii po otdelnosti
    //props = {name: 'AK', surname 'KK'} spreading peredast ih v component
    // <FormComponent name="AK" surname="KK"
    return (
        <>
            <NavComponent/>
            <FormComponent {...props}/>
        </>
    )
}
//properties po umolchaniju, peredautsa kak objekt
//harakteristiki po umolchaniju ispolzujutsa tolko v tom sluchae esli pri ispolzovani componenta nebili peredani props cherz atributi

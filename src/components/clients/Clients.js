import React from 'react';
import Landing from "@/landing/Landing"
import {clients} from "@/data/clients";

function Clients(props) {
    return (
        <div className="clients">
            {clients.map((d, i) => <img src={d.image} alt={d.alt}/>)}
        </div>
    );
}

export default Clients;
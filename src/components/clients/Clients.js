import React from 'react';
import Landing from "@/landing/Landing"
import {clients} from "@/data/clients";

function Clients(props) {
    return (
            <section className="clients">
                {clients.map((d, i) => <img src={d.image} alt={d.alt}/>)}
            </section>
    );
}

export default Clients;
import React from 'react';
import {Container} from "@mantine/core";
import {Landing} from "../components/landing/Landing";
import {Services} from "../components/pages/services/Services";

function Index() {
    return (
        <Container fluid px={0} py={0}>
            <Landing/>
            <Services title={"Integrate effortlessly with any technology stack"}
                      text={"Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."}/>
        </Container>
    );
}

export default Index;

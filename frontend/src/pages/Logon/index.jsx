import React, { useState } from "react";

import Footer from "../../components/Footer";
import Authentication from "../../components/Authentication";
import Forgot from "../../components/Forgot";
import Registration from "../../components/Registration";
import { Container, Title } from "./styles";

const Logon = () => {
    const [page, setPage] = useState("auth");

    let forms = (() => {
        if (page === "auth") {
            return <Authentication setPage={setPage} />;
        } else if (page === "reset") {
            return <Forgot setPage={setPage} />;
        } else {
            return <Registration setPage={setPage} />;
        }
    })();

    return (
        <>
            <Container>
                <Title>
                    <h2>The Greatest App</h2>
                    <div>for</div>
                    <h1>LOTTERY</h1>
                </Title>
                {forms}
            </Container>
            <Footer />
        </>
    );
};

export default Logon;

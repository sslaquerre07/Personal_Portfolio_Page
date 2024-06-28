import React, { useContext } from "react";
import { CertificateContext } from "./Certifications";

function Certificate(){
    const certificate = useContext(CertificateContext);
    return(
        <div className="certificate">
            <h1>{certificate.title}</h1>
            <p>Distributor: {certificate.source}</p>
            <a href={certificate.link}><button class="certificate-button">View Certificate</button></a>
        </div>
    );
}

export default Certificate
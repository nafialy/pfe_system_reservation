import { useEffect, useState } from "react";
import axios from "axios";

function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/services")
            .then((response) => {

                setServices(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);

    return (

        <div className="services-page">

            <h1>Nos Services</h1>

            <div className="services-grid">

                {services.map((service) => (

                    <div className="service-card" key={service.id_service}>

                        <h2>{service.nom_service}</h2>

                        <p>{service.description}</p>

                        <h3>{service.prix} DH</h3>

                        <p>Durée : {service.duree} minutes</p>

                        <button>Réserver</button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Services;
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home">

            <section className="hero">

                <h1>Bienvenue sur notre plateforme de réservation</h1>

                <p>
                    Réservez vos services en ligne facilement, rapidement
                    et en toute sécurité.
                </p>
                <Link to="/services">

                 <button className="btn-reserver">

                    Réserver maintenant

                 </button>

                 </Link>



            </section>

            <section className="advantages">

                <h2>Pourquoi choisir notre plateforme ?</h2>

                <div className="cards">

                    <div className="card">
                        <h3>⚡ Réservation rapide</h3>
                        <p>
                            Réservez votre service en quelques clics seulement.
                        </p>
                    </div>

                    <div className="card">
                        <h3>📅 Disponibilité en temps réel</h3>
                        <p>
                            Consultez instantanément les créneaux disponibles.
                        </p>
                    </div>

                    <div className="card">
                        <h3>📧 Confirmation immédiate</h3>
                        <p>
                            Recevez une confirmation directement après votre réservation.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;
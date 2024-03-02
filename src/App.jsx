import "./App.css";
import { Header } from "./components/Header";
import { MyCard } from "./components/MyCard";
import { Footer } from "./components/Footer";

function App() {
  const backgroundStyle = {
    position: "absolute",
    top: "0",
    zIndex: "-1",
    height: "100vh",
    width: "100vw",
    background:
      "radial-gradient(ellipse at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0)), radial-gradient(ellipse at 50% -20%, #fff 40%, #3366ee 100%)",
    backgroundColor: "#1F2937", // Puedes cambiar el color de fondo si lo deseas
  };
  return (
    <>
      <div style={backgroundStyle}></div>
      <div className="container">
        <div className="row">
          <Header title="Adopta un perrito" />
          <div className="col-md-3">
            <MyCard
              title="Cachimba"
              description="El origen de este perro, razonablemente grande, poderoso y elegante, está en Apolda, Turingia (Alemania hacia 1850 y 1870."
              img="https://images.pexels.com/photos/975413/pexels-photo-975413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              bg="danger"
              tag="Dobermán"
            />
          </div>

          <div className="col-md-3">
            <MyCard
              title="Jim"
              description="El jack russell terrier es una raza de perro originaria del Reino Unido que es conocida, sobre todo, por su carácter: son animales activos, cariñosos y traviesos."
              img="https://images.pexels.com/photos/1750542/pexels-photo-1750542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              bg="warning"
              tag="Jack Russell"
            />
          </div>

          <div className="col-md-3">
            <MyCard
              title="Lucho Esteban Mario"
              description="Originario de los Alpes suizos y del norte de Italia su nombre proviene de su criador original, el monje Bernard de Menthon, un italiano que crió por primera vez a los perros de rescate en 1660."
              img="https://images.pexels.com/photos/6721024/pexels-photo-6721024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              bg="success"
              tag="San Bernardo"
            />
          </div>

          <div className="col-md-3">
            <MyCard
              title="Fitipaldi"
              description="Este perro es considerado el perro nacional de Inglaterra y la mascota oficial de muchas universidades estadounidenses"
              img="https://images.pexels.com/photos/12251710/pexels-photo-12251710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              bg="info"
              tag="El Bulldog Inglés"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

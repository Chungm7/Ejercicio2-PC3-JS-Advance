import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenido al Sistema de Gestión Académica</h1>
        <p className="subtitle">
          Sistema completo para administrar alumnos y cursos
        </p>

        <div className="cards-container">
          <div className="info-card">
            <h3>📚 Axios</h3>
            <p>
              Gestiona alumnos usando Axios, una de las bibliotecas HTTP más
              populares de JavaScript. Permite realizar peticiones HTTP de
              forma sencilla y eficiente.
            </p>
          </div>

          <div className="info-card">
            <h3>🚀 Alova</h3>
            <p>
              Gestiona alumnos usando Alova, una biblioteca moderna de
              peticiones HTTP que ofrece una API ligera y potente para
              interactuar con servicios REST.
            </p>
          </div>
        </div>

        <div className="features">
          <h2>Características</h2>
          <ul>
            <li>✅ Visualización de alumnos en tablas interactivas</li>
            <li>✅ Registro de nuevos alumnos con validación</li>
            <li>✅ Relación con cursos disponibles</li>
            <li>✅ Uso de hooks: useState y useEffect</li>
            <li>✅ Dos implementaciones: Axios y Alova</li>
          </ul>
        </div>

        <div className="instructions">
          <h3>Instrucciones de uso:</h3>
          <ol>
            <li>Inicia el servidor JSON con: <code>npm run server</code></li>
            <li>Navega por el menú superior para acceder a las diferentes secciones</li>
            <li>Compara las implementaciones con Axios y Alova</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;

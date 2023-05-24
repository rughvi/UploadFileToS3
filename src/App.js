import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import createRoutes from './routing/routes';

const routes = createRoutes();

function App() {
  return (
    <div className="App">
      <div className="container">
      {/* <nav>
        <ul>
          <Link to="/" className="list">
            Home
          </Link>
        </ul>
      </nav>      */}

      {routes}
    </div>
    </div>
  );
}

export default App;

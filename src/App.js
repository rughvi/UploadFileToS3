import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import createRoutes from './routing/routes';

const routes = createRoutes();

function App() {
  return (
    <div className="App">
      

      {routes}
    </div>
  );
}

export default App;

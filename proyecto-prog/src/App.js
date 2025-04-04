import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from './screens/Home/Home';
import VerTodas from "./screens/VerTodas/VerTodas";
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";
import Busqueda from "./screens/Busqueda/Busqueda";
import NotFound from "./screens/NotFound/NotFound";
import Loader from "./screens/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import '../public/css/styles.css';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact={true} path={'/'} component={Home} />
      <Route path={'/vertodas'} component={VerTodas} />
      <Route path={'/detalle/:id'} component={Detalle} />
      <Route path={'/favoritos'} component={Favoritos} />
      <Route path={'/busqueda'} component={Busqueda} />
      <Route path={'/loader'} component={Loader} />
      <Route path={''} component={NotFound} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;

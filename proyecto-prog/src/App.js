import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from './screens/Home/Home';
import VerPopulares from "./screens/VerPopulares/VerPopulares";
import VerCartelera from "./screens/VerCartelera/VerCartelera";
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";
import Resultados from "./screens/Resultados/Resultados";
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
      <Route path={'/verpopulares'} component={VerPopulares} />
      <Route path={'/vercartelera'} component={VerCartelera} />
      <Route path={'/detalle/:id'} component={Detalle} />
      <Route path={'/favoritos'} component={Favoritos} />
      <Route path={'/resultados/:busqueda'} component={Resultados} />
      <Route path={'/loader'} component={Loader} />
      <Route path={''} component={NotFound} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;

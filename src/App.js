import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import About from './components/About';
import MovieDetails from './components/MovieDetails';
/*
* API_KEY : api_key=870967436c1517d581daf3b245495790
* Popular Movie API: https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<api_key>>
* Search API : https://api.themoviedb.org/3/search/company?query=<<QUERY>>&api_key=<<api_key>>&page=1
* Find By ID: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
* Image - https://image.tmdb.org/t/p/w1280
*/ 
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Movies />
        </Route>
        <Route  path='/home'>
          <Movies />
        </Route>
        <Route  path='/about'>
          <About />
        </Route>
        <Route  path='/movie/:id'>
          <MovieDetails />
        </Route>
        <Route  path='*'>
          <h2 className='text-center text-danger'>404 Page Not Found.</h2>
        </Route>
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;

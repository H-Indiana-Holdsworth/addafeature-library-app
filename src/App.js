import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>

      <BrowserRouter>
        <header>
          <NavLink to="/books" data-testid="book-link">
            To Catalog
          </NavLink>
        </header>

        <Switch>
          <Route exact path="/books" component={BookList} />

          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

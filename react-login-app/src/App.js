import React from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import ProductDisplayPage from './ProductDisplayPage';

function App(){
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/products" components={ProductDisplayPage}/>
          <Route path="/" components={LoginPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
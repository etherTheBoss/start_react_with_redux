import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} /> */}
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

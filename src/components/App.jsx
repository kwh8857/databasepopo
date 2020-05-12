import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './Signup'
import After from './After'
import './css/index.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path ='/' exact component={Signup}></Route>
                <Route path ='/after' exact component ={After}></Route>
            </Switch>
        </Router>
       
    )
}

export default App

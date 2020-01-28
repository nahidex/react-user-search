import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Home from '../pages/Home';
import Routes from '../routes/Routes';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class Main extends Component {

    render() {
        return (            
            <main>
                <Breadcrumb />  
                <Router>
                    <Switch>
                        { Routes.map((route) => {
                            return <Route  key='{route.path}' path={route.path} component={route.component}></Route>
                        })}
                        
                    </Switch>
                </Router>
            </main>
        )
    }
}

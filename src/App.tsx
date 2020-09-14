import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Exams from './pages/exams';
import Exam from './pages/exam';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Exams />
                </Route>
                <Route path="/exam/:id">
                    <Exam />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

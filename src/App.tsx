import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExamsProvider from './context/ExamsContext';
import Exams from './containers/Exams';
import Exam from './containers/Exam';

function App() {
    return (
        <Router>
            <ExamsProvider>
                <Switch>
                    <Route exact path="/">
                        <Exams />
                    </Route>
                    <Route path="/exam/:id">
                        <Exam />
                    </Route>
                </Switch>
            </ExamsProvider>
        </Router>
    );
}

export default App;

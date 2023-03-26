import type { Component } from 'solid-js';
import { Header } from './components/Header';
import { Experience } from './components/Experience';

const App: Component = () => {
    return (
        <div class=''>
            <Header />
            <Experience />
        </div>
    );
};

export default App;

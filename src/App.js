import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from './components/router';
import { Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
<div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="Portafolio Andrea Magallanes" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer clasName='menu' title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routes/>
        </Content>
    </Layout>
</div>
</BrowserRouter>
  );
}

export default App;

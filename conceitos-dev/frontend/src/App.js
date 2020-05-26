import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
// import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  // const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      // console.log(response);
      setProjects(response.data);
    });
  }, []);

  // function handleAddProject() {
  async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    // api.post('projects', {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Diego Fernandes"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    /*
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
    */

    // <img src={backgroundImage} />

    // Adicionado id e title em project
   <>
     <Header title="Projects" />


     <ul>
       {projects.map(project => <li key={project.id}>{project.title}</li>)}
     </ul>

     <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
   </>
  );
}

export default App;
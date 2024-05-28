import React, {useState, useEffect} from 'react';
import BaseLayoutHome from '../../components/templates/Home/BaseLayoutHome';
import BaseTabs from '../../components/molecules/Tabs';

//simulación de base de datos
//import data from '../../data/projectEmpty.json';
// import data from '../../data/oneProject.json';
// import data from '../../data/projects.json';


const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects();
    }, [])

  return (
    <BaseLayoutHome>
      <BaseTabs projects={projects}/>
    </BaseLayoutHome>
  )
}

export default Home
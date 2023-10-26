import Project from './Project';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

import React from 'react'

const Projects = () => {
  return (
    <section className='py-20 align-element' id="projects">
        <SectionTitle text='Web Projects'/>
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {projects.map((project)=> {
                return <Project key={project.id} {...project}/>
            })}
        </div>
      
    </section>
  )
}

export default Projects

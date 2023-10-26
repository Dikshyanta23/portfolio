import React from 'react'
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id="about">
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} alt="about picture" className='w-full h-64' />
            <article>
                <SectionTitle text='About Me'/>
                <p className='text-slate-600 mt-8 leading-loose'>Hello, I am software developer specialized in in web application development. I am interested in using computers to make people's life easier and more productive. I am currently fascinated with the use of mathematics and computers to generate smart machines (Machine Learning, Data Science and Artificial Intelligence) <br /><br /> My hobbies include music, TV Shows and literature.</p>
            </article>
        </div>
      
    </section>
  )
}

export default About

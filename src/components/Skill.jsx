import React from 'react'

const Skill = ({icon, title, text}) => {
  return (
    <article className="bg-white p-8 rounded-lg">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
}

export default Skill

import { useState } from 'react';
import { sections } from '../../data/profile.js';
import { projects } from '../../data/projects.js';
import { researchAreas } from '../../data/research.js';
import Section from '../Section/Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

const areaTitles = Object.fromEntries(researchAreas.map((a) => [a.id, a.title]));

export default function Projects() {
  const [area, setArea] = useState('all');
  const visible = area === 'all' ? projects : projects.filter((p) => p.areaId === area);
  const filters = [{ id: 'all', title: 'All' }, ...researchAreas];

  return (
    <Section id="projects" meta={sections.projects}>
      <div className="projects__filters" role="group" aria-label="Filter projects by research area">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className="projects__filter"
            aria-pressed={area === f.id}
            onClick={() => setArea(f.id)}
          >
            {f.title}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
      </p>

      {visible.length > 0 ? (
        <ul className="projects__grid">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} areaTitle={areaTitles[project.areaId]} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="projects__empty">No projects in this area yet.</p>
      )}
    </Section>
  );
}

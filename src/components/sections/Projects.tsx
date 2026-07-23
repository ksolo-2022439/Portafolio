import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { projects } from '../../data/projects';
import { getAssetUrl } from '../../utils/helpers';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="proyectos" className="py-24 bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Proyectos"
            subtitle="Una selección de los proyectos que he desarrollado"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.1}>
              <Card
                className="group cursor-pointer h-full flex flex-col justify-between"
                onClick={() => navigate(`/proyecto/${project.slug}`)}
              >
                {/* Cover Image */}
                <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <img
                    src={getAssetUrl(project.coverImage)}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="success">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="info">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {project.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle size={12} />
                        {project.status}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate(`/proyecto/${project.slug}`)}
                      className="flex items-center gap-1 text-sky-600 text-sm font-medium hover:gap-2 transition-all duration-200 cursor-pointer"
                      aria-label={`Ver proyecto ${project.name}`}
                      type="button"
                    >
                      Ver proyecto
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

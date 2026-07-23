import {
  Users,
  MessageSquare,
  Zap,
  Puzzle,
  Brain,
  LayoutGrid,
  Shield,
} from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { softSkills } from '../../data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={24} />,
  MessageSquare: <MessageSquare size={24} />,
  Zap: <Zap size={24} />,
  Puzzle: <Puzzle size={24} />,
  Brain: <Brain size={24} />,
  LayoutGrid: <LayoutGrid size={24} />,
  Shield: <Shield size={24} />,
};

export default function SoftSkills() {
  return (
    <section className="py-24 bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Habilidades blandas"
            subtitle="Competencias personales que complementan mi perfil técnico"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.05}>
              <Card className="text-center" padding="md">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mx-auto mb-3 text-sky-500">
                  {iconMap[skill.icon]}
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {skill.name}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

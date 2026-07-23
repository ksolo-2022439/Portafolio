import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { skillCategories } from '../../data/skills';

const chartColors = ['#38bdf8', '#60a5fa', '#7dd3fc', '#93c5fd'];

interface TooltipPayloadItem {
  value: number;
  name: string;
  payload: { category: string; level: number };
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm">
        <p className="font-medium text-gray-900">{payload[0].payload.category}</p>
        <p className="text-sky-600">Nivel: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Skills() {
  const chartData = skillCategories.map((cat) => ({
    category: cat.category,
    level: cat.level,
  }));

  return (
    <section id="habilidades" className="py-24 bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Habilidades"
            subtitle="Tecnologías y herramientas con las que trabajo"
          />
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.category} delay={i * 0.1}>
              <Card hover={false} padding="lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-sky-50 transition-colors duration-200 group"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-sky-700 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Chart */}
        <AnimatedSection delay={0.3}>
          <Card hover={false} padding="lg" className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-8 text-center">
              Nivel por categoría
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData} barCategoryGap="25%">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis
                  dataKey="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 13 }}
                />
                <YAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  width={35}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(56, 189, 248, 0.05)' }} />
                <Bar dataKey="level" radius={[8, 8, 0, 0]} maxBarSize={60}>
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

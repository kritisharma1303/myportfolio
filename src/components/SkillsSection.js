import React, { useState } from 'react';
import { Brain, Code, Cloud, ChevronDown, ChevronUp, PenTool } from 'lucide-react';

export default function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState('data-science');

  const categories = [
    {
      id: 'backend',
      title: 'Backend',
      icon: Code,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Authentication (SSO/SAML)', level: 85 },
        { name: 'Messaging Systems', level: 80 },
        { name: 'SQL-backed Applications', level: 85 },
        { name: 'Microservices', level: 80 },
      ]
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 90 },
        { name: 'C++', level: 90},
        { name: 'JavaScript', level: 60 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      id: 'data-science',
      title: 'AI',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Natural Language Processing', level: 75 },
        { name: 'Neural Networks', level: 80 }
      ]
    },
    {
      id: 'front-end',
      title: 'Front End',
      icon: PenTool,
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'React JS', level: 85 }
      ]
    },
    
    {
      id: 'computing',
      title: 'Computing',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 75 }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(categoryId);
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">Skills</h1>
          <p className="text-xl text-gray-400">My technical & other skills</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Categories */}
          <div className="space-y-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <div
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className="bg-gray-800 rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-indigo-400" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-indigo-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-indigo-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Skills Detail */}
          <div className="bg-gray-800 rounded-2xl p-8">
            {expandedCategory ? (
              <div className="space-y-8">
                {categories.find(c => c.id === expandedCategory)?.skills.length > 0 ? (
                  categories.find(c => c.id === expandedCategory).skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-3">
                        <span className="text-xl font-semibold text-white">{skill.name}</span>
                        <span className="text-xl font-semibold text-white">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p className="text-lg">No skills data available for this category</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p className="text-lg">Select a category to view skills</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
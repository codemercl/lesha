import React from 'react';
import { instructors } from './static/instructors';
import InstructorCard from './elements/InstructorCard';
import SectionTitle from '../elements/SectionTitle';

const InstructorsSection: React.FC = () => (
  <section
    id="instructors"
    data-bg="white"
    className="py-8 md:py-16 px-4 md:px-0 bg-white relative overflow-visible"
  >
    <SectionTitle as="h2" className="text-center">Наші інструктори</SectionTitle>
    <div className="relative mt-6 md:mt-8">
      {/* Красный фон начинается строго под фото */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 relative z-10">
        {instructors.map((instructor) => (
          <div className="w-full max-w-lg sm:max-w-sm md:max-w-md" key={instructor.id}>
            <InstructorCard instructor={instructor} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorsSection; 
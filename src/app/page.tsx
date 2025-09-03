import CarsSection from '@/components/CarsSection';
import InstructorsSection from '@/components/InstructorsSection';
import ServicesSection from '@/components/ServicesSection';
import ScrollVisualSection from '../components/ScrollVisualSection';
import CoursesSection from '@/components/CoursesSection';
import ProductivitySection from '@/components/ProductivitySection';
import DocumentSubmissionSection from '@/components/DocumentSubmissionSection/DocumentSubmissionSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      {/* Main content with proper semantic structure */}
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section */}
        <section itemScope itemType="https://schema.org/Organization">
          <ProductivitySection />
        </section>

        {/* Courses */}
        <section itemScope itemType="https://schema.org/Course" aria-label="Наші курси">
          <CoursesSection />
        </section>

        {/* Services */}
        <section itemScope itemType="https://schema.org/Service" aria-label="Додаткові послуги">
          <ServicesSection />
        </section>

        {/* Instructors */}
        <section itemScope itemType="https://schema.org/Person" aria-label="Наші інструктори">
          <InstructorsSection />
        </section>

        {/* Cars */}
        <section itemScope itemType="https://schema.org/Product" aria-label="Автопарк">
          <CarsSection />
        </section>

        {/* Document submission */}
        <section aria-label="Подача документів">
          <DocumentSubmissionSection />
        </section>

        {/* Process steps */}
        <section itemScope itemType="https://schema.org/HowTo" aria-label="Як отримати водійське">
          <ScrollVisualSection />
        </section>

        {/* Testimonials */}
        <section itemScope itemType="https://schema.org/Review" aria-label="Відгуки клієнтів">
          <TestimonialsSection />
        </section>
      </main>
    </>
  );
}

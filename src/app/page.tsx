import CarsSection from '@/components/CarsSection';
import InstructorsSection from '@/components/InstructorsSection';
import ServicesSection from '@/components/ServicesSection';
import ScrollVisualSection from '../components/ScrollVisualSection';
import CoursesSection from '@/components/CoursesSection';
import ProductivitySection from '@/components/ProductivitySection';
import DocumentSubmissionSection from '@/components/DocumentSubmissionSection/DocumentSubmissionSection';

export default function Home() {

  return (
    <main>
      <ProductivitySection />
      <ServicesSection />
      <CoursesSection />
      <CarsSection />
      <DocumentSubmissionSection />
      <InstructorsSection />
      <ScrollVisualSection />
    </main>
  );
}

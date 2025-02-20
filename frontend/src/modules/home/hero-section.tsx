import { Tech } from "@/modules/home/tech";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Welcome to Docq.ai</h1>
        <p className="text-lg text-white">The best platform for your documents</p>
        <Tech />
      </div>
    </section>
  );
}
export default HeroSection;
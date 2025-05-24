import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Путешествуйте с <span className="text-yellow-400">MET1x1</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Откройте мир незабываемых приключений! Более 500 направлений по
            всему миру
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              <Icon name="Search" size={20} />
              Найти тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-800"
            >
              <Icon name="Play" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

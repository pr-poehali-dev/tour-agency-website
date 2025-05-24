import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Plane" size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">MET1x1</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#destinations"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Направления
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

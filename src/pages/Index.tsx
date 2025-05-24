import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { destinations } from "@/data/destinations";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />

      {/* Destinations Section */}
      <section id="destinations" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные направления
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Откройте для себя самые красивые места планеты с нашими турами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {destination.price}
                    </span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      name: "Мальдивы",
      price: "от 120,000 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Райские острова с кристально чистой водой",
    },
    {
      id: 2,
      name: "Турция",
      price: "от 45,000 ₽",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
      description: "Античная культура и современный комфорт",
    },
    {
      id: 3,
      name: "ОАЭ",
      price: "от 65,000 ₽",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      description: "Роскошь и восточное гостеприимство",
    },
    {
      id: 4,
      name: "Египет",
      price: "от 35,000 ₽",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?w=400&h=300&fit=crop",
      description: "Древние пирамиды и Красное море",
    },
  ];

  const services = [
    {
      icon: "Plane",
      title: "Авиаперелеты",
      description: "Лучшие предложения от авиакомпаний",
    },
    {
      icon: "Building",
      title: "Отели",
      description: "Бронирование отелей любой категории",
    },
    {
      icon: "MapPin",
      title: "Экскурсии",
      description: "Индивидуальные и групповые туры",
    },
    {
      icon: "Shield",
      title: "Страхование",
      description: "Полная защита вашего путешествия",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр туристических услуг для вашего идеального отдыха
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные направления
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите свое идеальное место для отдыха из нашего каталога
              проверенных направлений
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{destination.name}</CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают <span className="text-blue-600">MET1x1</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы создаем незабываемые путешествия уже более 10 лет. Наша
                команда профессионалов поможет вам найти идеальный тур, учитывая
                все ваши пожелания и бюджет.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">
                    Более 500 проверенных направлений
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">24/7 поддержка клиентов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">
                    Лучшие цены и специальные предложения
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={24}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">
                    Полное страхование поездок
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
                alt="Команда MET1x1"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы к новым приключениям?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Свяжитесь с нами сегодня и получите персональное предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <Icon name="Phone" size={20} />
              +7 (495) 123-45-67
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-800"
            >
              <Icon name="Mail" size={20} />
              info@met1x1.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Plane" size={28} className="text-blue-400" />
                <h3 className="text-xl font-bold">MET1x1</h3>
              </div>
              <p className="text-gray-400">
                Ваш надежный партнер в мире путешествий
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Европа</li>
                <li>Азия</li>
                <li>Америка</li>
                <li>Африка</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Авиабилеты</li>
                <li>Отели</li>
                <li>Экскурсии</li>
                <li>Страхование</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@met1x1.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MET1x1. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

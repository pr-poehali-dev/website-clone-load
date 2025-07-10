import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Техосмотр грузовых автомобилей",
      description: "Полный технический осмотр всех систем грузового транспорта",
      icon: "Truck",
      price: "от 2 500 ₽",
    },
    {
      title: "Диагностика двигателя",
      description: "Компьютерная диагностика и проверка работы двигателя",
      icon: "Settings",
      price: "от 1 500 ₽",
    },
    {
      title: "Проверка тормозной системы",
      description: "Диагностика и тестирование тормозов и ABS",
      icon: "Shield",
      price: "от 1 200 ₽",
    },
    {
      title: "Проверка электрики",
      description: "Диагностика электрооборудования и освещения",
      icon: "Zap",
      price: "от 800 ₽",
    },
  ];

  const priceList = [
    { category: "Легковые автомобили", price: "1 200 ₽" },
    { category: "Грузовики до 3,5 т", price: "2 500 ₽" },
    { category: "Грузовики 3,5-12 т", price: "3 500 ₽" },
    { category: "Грузовики свыше 12 т", price: "4 500 ₽" },
    { category: "Автобусы", price: "3 000 ₽" },
    { category: "Прицепы", price: "1 800 ₽" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Truck" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ТехОсмотр+</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#prices"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#legal"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Документы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Лицензированный центр техосмотра
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Профессиональный техосмотр
            <span className="block text-blue-600">грузового транспорта</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Быстрый и качественный техосмотр всех видов грузовых автомобилей.
            Современное оборудование, опытные специалисты, честные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на техосмотр
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Узнать цену
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600">
              Полный спектр услуг по техническому осмотру
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon
                    name={service.icon}
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цены на техосмотр
            </h2>
            <p className="text-lg text-gray-600">
              Прозрачные и честные цены без скрытых доплат
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Стоимость техосмотра
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {priceList.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">{item.category}</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {item.price}
                      </span>
                    </div>
                    {index < priceList.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Info"
                    size={20}
                    className="text-blue-600 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-blue-800 font-medium">
                      Дополнительная информация
                    </p>
                    <p className="text-sm text-blue-700">
                      Цены указаны за стандартный техосмотр. Повторный осмотр
                      после устранения неисправностей - 50% от стоимости.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Правовая информация
            </h2>
            <p className="text-lg text-gray-600">
              Все необходимые документы и лицензии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="FileText"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">
                  Федеральный закон "О техническом осмотре транспортных средств
                  и о внесении изменений в отдельные законодательные акты
                  Российской Федерации"
                </CardTitle>
                <CardDescription>от 01.07.2011 N 170-ФЗ</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("/docs/license.pdf", "_blank")}
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Shield"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">
                  Сертификат соответствия
                </CardTitle>
                <CardDescription>
                  РОСС RU.АЯ46.К00678 от 20.02.2024
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("/docs/certificate.pdf", "_blank")}
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Building"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">
                  Свидетельство о регистрации
                </CardTitle>
                <CardDescription>
                  ОГРН 1127746123456 от 10.03.2024
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    window.open("/docs/registration.pdf", "_blank")
                  }
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Реквизиты организации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Наименование:
                      </h4>
                      <p className="text-gray-700">ООО "ТехОсмотр+"</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Юридический адрес:
                      </h4>
                      <p className="text-gray-700">
                        123456, г. Москва, ул. Промышленная, д. 15
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        ОГРН:
                      </h4>
                      <p className="text-gray-700">1127746123456</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        ИНН/КПП:
                      </h4>
                      <p className="text-gray-700">7701234567/770101001</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Банк:
                      </h4>
                      <p className="text-gray-700">
                        ПАО "Сбербанк России"
                        <br />
                        БИК: 044525225
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Р/с:</h4>
                      <p className="text-gray-700">40702810123456789012</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Icon name="CheckCircle" size={24} className="text-blue-600" />
              <div className="text-left">
                <p className="text-sm font-medium text-blue-900">
                  Все документы актуальны
                </p>
                <p className="text-sm text-blue-700">
                  Проверено Росстандартом и ГИБДД
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-gray-300">
              Работаем каждый день с 8:00 до 20:00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                size={48}
                className="text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">
                г. Москва, ул. Промышленная, 15
                <br />
                (рядом с МКАД)
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                size={48}
                className="text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">
                <a
                  href="tel:+74951234567"
                  className="hover:text-blue-400 transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Clock"
                size={48}
                className="text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Время работы</h3>
              <p className="text-gray-300">
                Пн-Вс: 8:00 - 20:00
                <br />
                Без выходных
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на техосмотр
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Icon name="Truck" size={24} className="text-blue-400" />
            <span className="text-xl font-bold">ТехОсмотр+</span>
          </div>
          <p className="text-gray-400">
            © 2024 ТехОсмотр+. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

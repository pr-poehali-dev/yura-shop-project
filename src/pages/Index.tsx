import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Круглая корзина с ручками",
      price: "2 990 ₽",
      image: "/img/2368ca82-1821-4962-8e91-7d23394f3091.jpg",
      description: "Идеальна для хранения мелочей",
    },
    {
      id: 2,
      name: "Корзина для белья",
      price: "4 500 ₽",
      image: "/img/7df02aa9-0026-4109-88e7-f0f15d25f2b6.jpg",
      description: "Высокая и вместительная",
    },
    {
      id: 3,
      name: "Набор корзин",
      price: "8 990 ₽",
      image: "/img/56444d87-183d-40a9-bc19-2bfa8a4acc53.jpg",
      description: "Комплект из 3 корзин разных размеров",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Навигация */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="ShoppingBasket" size={24} className="text-[#C9A96E]" />
            <span className="text-xl font-bold text-black">Корзинки</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#C9A96E] transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#C9A96E] transition-colors"
            >
              О нас
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-[#C9A96E] transition-colors"
            >
              Товары
            </a>
            <a
              href="#delivery"
              className="text-gray-700 hover:text-[#C9A96E] transition-colors"
            >
              Доставка
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-[#C9A96E] transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button
            variant="outline"
            className="border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white"
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина
          </Button>
        </div>
      </nav>

      {/* Героическая секция */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-serif">
            Плетёные корзинки
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем уют в вашем доме с помощью качественных изделий ручной
            работы
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white"
            >
              О нас
            </Button>
          </div>
        </div>
      </section>

      {/* Товары */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 font-serif">
              Популярные товары
            </h2>
            <p className="text-gray-600 text-lg">
              Выбирайте из нашей коллекции качественных корзинок
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-black">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#C9A96E]">
                      {product.price}
                    </span>
                    <Button className="bg-black text-white hover:bg-gray-800">
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6 font-serif">
                О нас
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Мы создаём плетёные корзинки ручной работы уже более 15 лет.
                Каждое изделие изготавливается с любовью и вниманием к деталям
                из экологически чистых материалов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">
                    100% натуральные материалы
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">Ручная работа мастеров</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">
                    Долговечность и качество
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/56444d87-183d-40a9-bc19-2bfa8a4acc53.jpg"
                alt="Наши корзинки"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] text-white p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Доставка и оплата */}
      <section id="delivery" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-16 text-center font-serif">
            Доставка и оплата
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Icon
                  name="Truck"
                  size={40}
                  className="text-[#C9A96E] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">
                  Быстрая доставка
                </h3>
                <p className="text-gray-600">
                  По Москве — 1-2 дня, по России — 3-7 дней
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Icon
                  name="CreditCard"
                  size={40}
                  className="text-[#C9A96E] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">
                  Удобная оплата
                </h3>
                <p className="text-gray-600">Карта, наличные, переводом</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Icon
                  name="Shield"
                  size={40}
                  className="text-[#C9A96E] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">
                  Гарантия качества
                </h3>
                <p className="text-gray-600">Возврат в течение 14 дней</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Icon
                  name="Package"
                  size={40}
                  className="text-[#C9A96E] mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">Упаковка</h3>
                <p className="text-gray-600">Бережная упаковка для доставки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-16 text-center font-serif">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">info@korzinki.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">
                    г. Москва, ул. Мастеров, д. 15
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-[#C9A96E]" />
                  <span className="text-gray-700">
                    Пн-Пт: 9:00-18:00, Сб-Вс: 10:00-16:00
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Напишите нам
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A96E]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A96E]"
                />
                <textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A96E]"
                ></textarea>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="ShoppingBasket" size={24} className="text-[#C9A96E]" />
            <span className="text-xl font-bold">Корзинки</span>
          </div>
          <p className="text-gray-400 mb-6">
            Создаем уют в вашем доме с 2009 года
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#C9A96E] transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#C9A96E] transition-colors"
            >
              <Icon name="Facebook" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#C9A96E] transition-colors"
            >
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Корзинки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

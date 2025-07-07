import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const products: Product[] = [
    {
      id: 1,
      name: "Премиум наушники",
      price: 12999,
      description: "Высококачественные беспроводные наушники с шумоподавлением",
      image: "/img/c16225a0-54b8-4d9a-bc53-1bd4aadc8729.jpg",
      category: "electronics",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Смартфон Pro",
      price: 79999,
      description:
        "Флагманский смартфон с отличной камерой и производительностью",
      image: "/img/1960d73a-9ed8-4d4d-9efb-397201782098.jpg",
      category: "electronics",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Кожаная куртка",
      price: 25999,
      description: "Стильная кожаная куртка из натуральной кожи",
      image: "/img/2115cad2-3b9e-4894-bff8-156b06c8f5c5.jpg",
      category: "clothing",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Спортивные кроссовки",
      price: 8999,
      description: "Удобные кроссовки для бега и повседневной носки",
      image: "/placeholder.svg",
      category: "shoes",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Рюкзак для путешествий",
      price: 4999,
      description: "Вместительный рюкзак для поездок и походов",
      image: "/placeholder.svg",
      category: "accessories",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Умные часы",
      price: 19999,
      description: "Современные смарт-часы с мониторингом здоровья",
      image: "/placeholder.svg",
      category: "electronics",
      rating: 4.4,
    },
  ];

  const categories = [
    { id: "all", name: "Все товары" },
    { id: "electronics", name: "Электроника" },
    { id: "clothing", name: "Одежда" },
    { id: "shoes", name: "Обувь" },
    { id: "accessories", name: "Аксессуары" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} добавлен в корзину`,
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ShoppingBag" className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">TechShop</h1>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                  Корзина
                  {getCartItemsCount() > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center">
                      {getCartItemsCount()}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина ({getCartItemsCount()})</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      Корзина пуста
                    </p>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-16 w-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">
                              {item.product.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {formatPrice(item.product.price)}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                )
                              }
                            >
                              <Icon name="Minus" className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                )
                              }
                            >
                              <Icon name="Plus" className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex justify-between items-center font-semibold text-lg">
                          <span>Итого:</span>
                          <span>{formatPrice(getTotalPrice())}</span>
                        </div>
                        <Button className="w-full" size="lg">
                          <Icon name="CreditCard" className="h-5 w-5 mr-2" />
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Добро пожаловать в TechShop
            </h2>
            <p className="text-xl mb-6">
              Лучшие товары по выгодным ценам с быстрой доставкой
            </p>
            <Button size="lg" variant="secondary">
              <Icon name="ArrowRight" className="h-5 w-5 mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Категории</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-white">
                    <Icon name="Star" className="h-3 w-3 mr-1" />
                    {product.rating}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {formatPrice(product.price)}
                  </span>
                  <Button onClick={() => addToCart(product)}>
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                    корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-500">Попробуйте изменить критерии поиска</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ShoppingBag" className="h-6 w-6" />
                <h3 className="text-xl font-bold">TechShop</h3>
              </div>
              <p className="text-gray-400">
                Ваш надежный партнер в мире технологий
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Новости
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@techshop.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechShop. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                <Icon name="Facebook" className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat text-gray-900">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600">
            Работаем круглосуточно по всей территории России
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Единый номер</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">
                8-800-TAXI-RF
              </p>
              <p className="text-sm text-gray-600">
                Звонки по России бесплатны
              </p>
              <Button variant="outline" className="mt-4 w-full">
                <Icon name="Phone" size={16} />
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-orange-500"
                />
              </div>
              <h3 className="font-semibold mb-2">Telegram бот</h3>
              <p className="text-lg font-medium text-gray-700 mb-2">
                @TaxiRussiaBot
              </p>
              <p className="text-sm text-gray-600">
                Быстрый заказ через мессенджер
              </p>
              <Button variant="outline" className="mt-4 w-full">
                <Icon name="Send" size={16} />
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={32} className="text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Мобильное приложение</h3>
              <p className="text-lg font-medium text-gray-700 mb-2">
                Такси Россия
              </p>
              <p className="text-sm text-gray-600">
                Скачайте для iOS и Android
              </p>
              <Button variant="outline" className="mt-4 w-full">
                <Icon name="Download" size={16} />
                Скачать
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6 inline-block">
            <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
              <Icon name="Clock" size={20} className="text-orange-500" />
              Режим работы
            </h3>
            <p className="text-gray-600">Круглосуточно, без выходных</p>
            <p className="text-sm text-gray-500 mt-1">
              Среднее время подачи: 3-7 минут
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

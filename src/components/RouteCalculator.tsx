import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const RouteCalculator = () => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [fare, setFare] = useState<number | null>(null);

  const calculateFare = () => {
    if (!fromAddress || !toAddress) return;

    // Простая симуляция расчета стоимости
    const baseFare = 150;
    const distance = Math.random() * 50 + 5; // 5-55 км
    const calculatedFare = Math.round(baseFare + distance * 25);
    setFare(calculatedFare);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat text-gray-900">
            Рассчитать стоимость поездки
          </h2>
          <p className="text-gray-600">
            Узнайте примерную стоимость поездки между любыми точками России
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Route" size={24} className="text-orange-500" />
              Калькулятор маршрута
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Откуда
              </label>
              <div className="relative">
                <Icon
                  name="MapPin"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Введите адрес отправления"
                  value={fromAddress}
                  onChange={(e) => setFromAddress(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Куда</label>
              <div className="relative">
                <Icon
                  name="MapPin"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Введите адрес назначения"
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button
              onClick={calculateFare}
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={!fromAddress || !toAddress}
            >
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Button>

            {fare && (
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">
                    Примерная стоимость
                  </p>
                  <p className="text-3xl font-bold text-orange-600">{fare} ₽</p>
                  <p className="text-xs text-gray-500 mt-2">
                    * Финальная стоимость может отличаться в зависимости от
                    времени суток и загруженности дорог
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RouteCalculator;

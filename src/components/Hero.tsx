import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import RussiaMap from "@/components/RussiaMap";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon name="Car" size={64} className="mx-auto mb-4 text-white" />
          <h1 className="text-5xl font-bold mb-4 font-montserrat">
            Такси по всей России
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Надежные поездки от Калининграда до Владивостока. Быстро, безопасно,
            доступно в любой точке страны.
          </p>
        </div>

        {/* Интерактивная карта России */}
        <RussiaMap />

        <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8">
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Icon name="MapPin" size={20} />
            <span>85 регионов</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Icon name="Clock" size={20} />
            <span>24/7</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Icon name="Shield" size={20} />
            <span>Безопасно</span>
          </div>
        </div>

        <Button
          size="lg"
          variant="secondary"
          className="text-orange-600 hover:text-orange-700"
        >
          Заказать такси
          <Icon name="ArrowRight" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;

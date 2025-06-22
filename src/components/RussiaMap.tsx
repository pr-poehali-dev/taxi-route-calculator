import { useState } from "react";

const RussiaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    { name: "Москва", x: 45, y: 35, coverage: true },
    { name: "Санкт-Петербург", x: 42, y: 20, coverage: true },
    { name: "Новосибирск", x: 70, y: 40, coverage: true },
    { name: "Екатеринбург", x: 55, y: 35, coverage: true },
    { name: "Казань", x: 50, y: 30, coverage: true },
    { name: "Нижний Новгород", x: 48, y: 32, coverage: true },
    { name: "Челябинск", x: 56, y: 40, coverage: true },
    { name: "Омск", x: 68, y: 40, coverage: true },
    { name: "Ростов-на-Дону", x: 46, y: 50, coverage: true },
    { name: "Уфа", x: 53, y: 38, coverage: true },
    { name: "Красноярск", x: 80, y: 38, coverage: true },
    { name: "Воронеж", x: 46, y: 45, coverage: true },
    { name: "Пермь", x: 53, y: 32, coverage: true },
    { name: "Волгоград", x: 48, y: 48, coverage: true },
    { name: "Краснодар", x: 45, y: 52, coverage: true },
    { name: "Саратов", x: 50, y: 45, coverage: true },
    { name: "Тюмень", x: 62, y: 35, coverage: true },
    { name: "Тольятти", x: 51, y: 42, coverage: true },
    { name: "Ижевск", x: 52, y: 32, coverage: true },
    { name: "Барнаул", x: 72, y: 45, coverage: true },
    { name: "Ульяновск", x: 50, y: 40, coverage: true },
    { name: "Иркутск", x: 85, y: 45, coverage: true },
    { name: "Хабаровск", x: 95, y: 48, coverage: true },
    { name: "Владивосток", x: 97, y: 52, coverage: true },
    { name: "Ярославль", x: 46, y: 28, coverage: true },
    { name: "Махачкала", x: 50, y: 58, coverage: true },
    { name: "Томск", x: 73, y: 38, coverage: true },
    { name: "Оренбург", x: 53, y: 45, coverage: true },
    { name: "Кемерово", x: 74, y: 42, coverage: true },
    { name: "Новокузнецк", x: 75, y: 45, coverage: true },
    { name: "Рязань", x: 47, y: 40, coverage: true },
    { name: "Астрахань", x: 52, y: 52, coverage: true },
    { name: "Пенза", x: 49, y: 42, coverage: true },
    { name: "Липецк", x: 47, y: 43, coverage: true },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-white mb-2">
          Наше покрытие по России
        </h3>
        <p className="text-white/80 text-sm">
          Нажмите на точку, чтобы узнать о доступности в регионе
        </p>
      </div>

      <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl overflow-hidden">
        {/* Контур России (упрощенный) */}
        <svg
          viewBox="0 0 100 60"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M15,25 Q20,15 35,18 Q45,12 55,15 Q65,10 75,12 Q85,8 95,15 Q98,25 95,35 Q90,45 85,50 Q75,55 65,52 Q55,58 45,55 Q35,58 25,52 Q15,48 12,35 Q10,30 15,25"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Города */}
        {regions.map((region, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${region.x}%`, top: `${region.y}%` }}
            onMouseEnter={() => setHoveredRegion(region.name)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                region.coverage
                  ? "bg-orange-400 shadow-lg shadow-orange-400/50 group-hover:scale-150"
                  : "bg-gray-400"
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
            </div>

            {hoveredRegion === region.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap z-10">
                {region.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
          <span className="text-white/90">Доступно</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <span className="text-white/90">Скоро</span>
        </div>
      </div>
    </div>
  );
};

export default RussiaMap;

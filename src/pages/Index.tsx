export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ИСТОРИЯ РОССИИ
          </a>
          <div className="flex space-x-8">
            <a href="#periods" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Периоды
            </a>
            <a href="#events" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              События
            </a>
            <a href="#figures" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Личности
            </a>
            <a href="#sources" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Источники
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ИСТО
              <br />
              РИЯ
            </h1>
            <p className="text-2xl font-bold tracking-widest uppercase text-red-600 mb-4">
              РОССИЙСКОЙ ИМПЕРИИ
            </p>
            <p className="text-xl max-w-xl">
              Тысячелетие событий. Великие победы и трагедии. Путь от Киевской Руси до современной России — в цифрах, фактах и именах.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <span className="text-white text-9xl font-bold tracking-tighter">RU</span>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers Strip */}
      <section className="py-12 px-4 md:px-8 border-t border-b border-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-6xl font-bold tracking-tighter">1 162</p>
              <p className="text-sm uppercase tracking-widest mt-2 text-neutral-500">лет истории</p>
            </div>
            <div>
              <p className="text-6xl font-bold tracking-tighter text-red-600">862</p>
              <p className="text-sm uppercase tracking-widest mt-2 text-neutral-500">год основания</p>
            </div>
            <div>
              <p className="text-6xl font-bold tracking-tighter">17</p>
              <p className="text-sm uppercase tracking-widest mt-2 text-neutral-500">млн км²</p>
            </div>
            <div>
              <p className="text-6xl font-bold tracking-tighter text-red-600">147</p>
              <p className="text-sm uppercase tracking-widest mt-2 text-neutral-500">млн человек</p>
            </div>
          </div>
        </div>
      </section>

      {/* Periods Section */}
      <section id="periods" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ПЕРИОДЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Period 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black group-hover:text-white text-6xl font-bold transition-colors">IX–XII</span>
                  <span className="text-neutral-500 group-hover:text-white/80 text-sm uppercase tracking-widest mt-2 transition-colors">век</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Киевская Русь</h3>
              <p className="text-neutral-400">Первое государство восточных славян. Крещение Руси в 988 году. Расцвет при Ярославе Мудром.</p>
            </div>

            {/* Period 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black group-hover:text-white text-6xl font-bold transition-colors">XIII–XV</span>
                  <span className="text-neutral-500 group-hover:text-white/80 text-sm uppercase tracking-widest mt-2 transition-colors">век</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Монгольское иго</h3>
              <p className="text-neutral-400">Нашествие Батыя 1237–1241 гг. Объединение земель вокруг Москвы. Куликовская битва 1380 года.</p>
            </div>

            {/* Period 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black group-hover:text-white text-6xl font-bold transition-colors">XVIII</span>
                  <span className="text-neutral-500 group-hover:text-white/80 text-sm uppercase tracking-widest mt-2 transition-colors">век</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Российская Империя</h3>
              <p className="text-neutral-400">Реформы Петра I. Выход к морям. Просвещённый абсолютизм Екатерины II. Европеизация страны.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">СОБЫТИЯ</h2>
              <div className="aspect-[4/5] bg-black relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-red-600"></div>
                <div className="text-center z-10">
                  <p className="text-white text-7xl font-bold">1812</p>
                  <p className="text-red-600 text-sm uppercase tracking-widest mt-2">Война с Наполеоном</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Ключевые события российской истории формировали не только страну, но и весь мировой порядок. Каждое из них — поворотный момент, изменивший ход цивилизации.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">988 год</p>
                  <h3 className="text-xl font-bold mb-1">Крещение Руси</h3>
                  <p className="text-neutral-600">Принятие православия при князе Владимире. Определило культурный облик России на тысячелетие вперёд.</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">1380 год</p>
                  <h3 className="text-xl font-bold mb-1">Куликовская битва</h3>
                  <p className="text-neutral-600">Победа Дмитрия Донского над Мамаем. Начало освобождения от монгольского ига.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">1812 год</p>
                  <h3 className="text-xl font-bold mb-1">Отечественная война</h3>
                  <p className="text-neutral-600">Разгром армии Наполеона. Россия стала главной силой Европы XIX века.</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">1941–1945 годы</p>
                  <h3 className="text-xl font-bold mb-1">Великая Отечественная война</h3>
                  <p className="text-neutral-600">Победа над нацистской Германией. Более 27 миллионов погибших советских граждан.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figures Section */}
      <section id="figures" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ЛИЧНОСТИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-white/30 p-6">
              <p className="text-5xl font-bold mb-4">01</p>
              <h3 className="text-xl font-bold mb-2">Пётр I</h3>
              <p className="text-white/80 text-sm">Основал Российскую Империю, прорубил «окно в Европу», провёл коренную модернизацию страны.</p>
            </div>
            <div className="border border-white/30 p-6">
              <p className="text-5xl font-bold mb-4">02</p>
              <h3 className="text-xl font-bold mb-2">Екатерина II</h3>
              <p className="text-white/80 text-sm">Эпоха просвещённого абсолютизма. Расширила территорию России, покровительствовала наукам и искусствам.</p>
            </div>
            <div className="border border-white/30 p-6">
              <p className="text-5xl font-bold mb-4">03</p>
              <h3 className="text-xl font-bold mb-2">Александр Невский</h3>
              <p className="text-white/80 text-sm">Победил шведов на Неве и тевтонских рыцарей на льду Чудского озера. Защитил Русь с запада.</p>
            </div>
            <div className="border border-white/30 p-6">
              <p className="text-5xl font-bold mb-4">04</p>
              <h3 className="text-xl font-bold mb-2">Михаил Ломоносов</h3>
              <p className="text-white/80 text-sm">Учёный-энциклопедист. Основал Московский университет. Заложил основы российской науки и образования.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ИСТОЧНИКИ</h2>
              <p className="text-xl text-neutral-400 mb-8">Материалы, использованные при подготовке презентации.</p>
              <div className="space-y-4">
                <div className="border-b border-neutral-800 pb-4">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Учебник</p>
                  <p>История России. 9 класс. Арсентьев Н.М., Данилов А.А.</p>
                </div>
                <div className="border-b border-neutral-800 pb-4">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Энциклопедия</p>
                  <p>Большая Российская Энциклопедия (БРЭ)</p>
                </div>
                <div className="border-b border-neutral-800 pb-4">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Интернет</p>
                  <p>histrf.ru — Российское историческое общество</p>
                </div>
              </div>
            </div>
            <div className="md:pt-24">
              <div className="bg-neutral-900 p-8 border border-neutral-800">
                <h3 className="text-2xl font-bold mb-6 tracking-tighter">О РАБОТЕ</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-2">Предмет</h4>
                    <ul className="space-y-2 text-neutral-300">
                      <li>История России</li>
                      <li>Урок-презентация</li>
                      <li>2026 год</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-2">Темы</h4>
                    <ul className="space-y-2 text-neutral-300">
                      <li>Киевская Русь</li>
                      <li>Российская Империя</li>
                      <li>Ключевые события</li>
                      <li>Выдающиеся личности</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold tracking-tighter text-xl">ИСТОРИЯ РОССИИ</p>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0">Урок истории · 2026</p>
        </div>
      </footer>
    </main>
  );
}

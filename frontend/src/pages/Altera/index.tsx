// lab-pcu-02.jpg
import { useModal } from "../../contexts";
import { Text, Title, Block } from "../../shared";
import { useLocation } from "preact-iso";
import { memo } from "preact/compat";

// @not-real-page
function Altera() {

    const modal = useModal();
    const location = useLocation();

    modal.openModal({
        title: "Официальный центр обучения фирмы Intel",
        content: [
          <img className="photo" src="/images/lab-pcu-02.jpg" style={{ display: "block", margin: "10px auto" }} />,
          <Text>
            Фирма Intel - мировой лидер в производстве микросхем программируемой логики (ПЛИС). Все большее число специалистов используют продукцию фирмы в своих разработках. Повышение квалификации кадров в области ПЛИС - основная задача Центра, имеющего большой опыт в переподготовке специалистов ведущих предприятий России и стран СНГ.
          </Text>,
          <Text>
            Специалисты Центра имеют многолетний опыт работы с программируемой логикой фирмы Intel. Центр был создан в 1997 году совместно МГТУ им. Н.Э. Баумана и Корпорацией "Точка Опоры" на базе кафедры ИУ-3. В 1998 году Центр прошел сертификацию.
          </Text>,
          <Title
            level={3}
            children="Курсы"
            />,
          <Text>
            <b>Базовый курс Технология проектирования программируемых логических интегральных схем фирмы Intel</b>
          </Text>,
          <Text>
            — Предназначен для специалистов, начинающих работать с продукцией фирмы Intel.<br/>
            — 40 часов интенсивных занятий в лаборатории университета.<br/>
            — Рассматриваются САПР Quartus II и семейства MAX, MAXII, Cyclone и Stratix.<br/>
            — Изучается полный цикл проектирования ПЛИС от ввода проекта до работающего устройства с использованием фирменного оборудования.<br/>
            — Бесплатно выдаётся литература, DVD с документацией и САПР, а также другие материалы.
          </Text>,
          <Text>
            <b>Специализированный курс Проектирование систем на кристалле на базе ПЛИС фирмы Intel</b>
          </Text>,
          <Text>
            — Предназначен для специалистов, имеющих опыт работы в области программируемой логики.<br/>
            — 32 часа интенсивных занятий в лаборатории университета.<br/>
            — Рассматривается проектирование программного и аппаратного обеспечения систем на кристалле на основе процессорного ядра NiosII.
          </Text>,
          <Title
          level={3}
          children="Контакты"
          />,
          <div className="contact-information">
          <div className="right" style={{ width: "100%" }}>
            <div className="row">
              <Block>
                <div>
                  <Title
                    level={4}
                    children="МГТУ им. Н.Э. Баумана"
                  />
                  <span className="link-more"><b>Телефон:</b><span>+7 (499) 263-62-86</span></span>
                  <span className="link-more"><b>Факс:</b><span>+7 (499) 263-65-37</span></span>
                  <span className="link-more"><b>E-mail:</b><span>pldcenter@bmstu.ru</span></span>
                </div>
              </Block>
              <Block>
                <div>
                  <Title
                    level={4}
                    children={`Корпорация "Точка Опоры"`}
                  />
                  <span className="link-more"><b>Телефон:</b><span>+7 (495) 956-39-42/43</span></span>
                  <span className="link-more"><b>Факс:</b><span>+7 (495) 956-39-42</span></span>
                  <span className="link-more"><b>E-mail:</b><span>altera@fulcrum.ru</span></span>
                </div>
              </Block>
            </div>
          </div>
        </div>,
        <Title
          level={3}
          children="Программы курсов"
        />,
        <Title
          level={4}
          children={`Технология проектирования ПЛИС фирмы "Intel"`}
        />,
        <Title
          level={4}
          children={`Темы лекций`}
        />,
        <ol>
          <li>
            Введение в технологию проектирования с применением ПЛИС.
            <br/>
          </li>
          <li>
            ПЛИС Корпорации "Intel".
            <br/>
            2.1. Общий обзор.
            <br/>
            2.2. Архитектура и особенности применения ПЛИС семейств: MAX3000, MAXII, Cyclone II, Cyclone III.
            <br/>
            2.3. Загрузка конфигурации ПЛИС семейств Cyclone и Stratix.
            <br/>
          </li>
          <li>
            Интегрированный пакет проектирования ПЛИС Quartus II.
            <br/>
            3.1. Архитектура и основные возможности.
            <br/>
            3.2. Ввод проекта. Графический редактор, текстовый редактор.
            <br/>
            3.3. Компиляция проекта. Настройка и режимы компиляции.
            <br/>
            3.4. Отладка проекта. Средство моделирования. Временное и функциональное моделирование. Анализ временных параметров и производительности.
            <br/>
            3.5. Разводка проекта. Анализ результатов компиляции.
            <br/>
            3.6. Создание выходных файлов для программирования. Процесс программирования и загрузки конфигурации.
            <br/>
          </li>
        </ol>,
        <Title
          level={4}
          children="Темы практических занятий"
        />,
        <Text>
          <b>Часть I. Изучение пакета проектирования Quartus II</b>
        </Text>,
        <ol>
          <li>
            Введение. Знакомство с интегрированной системой проектирования Quartus II
            <br/>
            1.1. Ввод проекта (графический редактор, текстовый редактор);
            <br/>
            1.2. Компиляция и моделирование проекта;
            <br/>
            1.3. Анализ результатов компиляции;
            <br/>
          </li>
          <li>
            Язык описания аппаратного состава Verilog.
            <br/>
            2.1. Язык Verilog; 
            <br/>
            2.2. Приемы проектирования на языках описания аппаратного состава;
            <br/>
          </li>
          <li>
            Архитектурные особенности ПЛИС семейств Cyclone. Приемы проектирования схем.
            <br/>
            3.1. Разработка конечного автомата;
            <br/>
            3.2. Изучение настроек компилятора;
            <br/>
            3.3. Оптимизация проекта по аппаратным затратам и быстродействию;
            <br/>
            3.4. Изучение редактора разводки.
            <br/>
          </li>
        </ol>,
        <Text>
          Часть II. Технология проектирования ПЛИС на основе статической памяти. Проект цифрового синтезатора
        </Text>,
        <ol>
          <li>
            Накопитель фазы. Просмотровая таблица синусоидального сигнала.
            <br/>
          </li>
          <li>
            Сигма-дельта модулятор 1-го порядка.
            <br/>
          </li>
          <li>
            Разработка цифрового синтезатора. Моделирование, анализ, загрузка конфигурации, полнонатурное моделирование схемы в комплекте разработчика.
            <br/>
          </li>
        </ol>,
        <Text>
          <b>Объем курса - 40 часов (10 занятий по четыре часа)</b>
        </Text>,
        <Text>
          <b>Занятия в группах по 7-8 человек</b>
        </Text>,
        <Text>
          <b>Программа курса может корректироваться по согласованию с учебной группой</b>
        </Text>,
        <Title
          level={3}
          children="Проектирование систем на кристалле на базе ПЛИС фирмы Intel"
        />,
        <Text>
          NiosII - это микропроцессорное ядро, специально предназначенное для реализации в микросхемах программируемой логики. Сочетание "процессор + программируемая логика" в одном кристалле дает разработчикам беспрецедентные возможности в системной интеграции, обеспечивая легкость построения системы, мощные средства отладки и снижение сроков разработки.
        </Text>,
        <Text>
          NiosII является конфигурируемым процессорным RISC ядром общего назначения фон-неймановской архитектуры разрядностью 32 бита и может быть интегрирован в ПЛИС фирмы Intel, относящиеся к семействам на базе статической памяти (Cyclone, CyloneII, Stratix, StratixII). В отличие от обычных микропроцессоров и микроконтроллеров, поставляющихся с фиксированным набором периферийных устройств и объемом памяти, система на основе NiosII настраивается на этапе проектирования под конкретную задачу.
        </Text>,
        <img className="photo" src="/images/plataII.jpg" />,
        <Text>
          Вместе с ядром NiosII поставляется ряд функциональных модулей стандартных периферийных устройств: параллельный ввод-вывод, универсальный асинхронный приемопередатчик (UART), последовательный интерфейс SPI, таймер и другие. Также пользователь может создавать нужную ему периферию на ресурсах ПЛИС и подключать ее к процессорной шине. В комплект средств разработки входит интегрированная среда разработки, включающая в себя средства разработки и настройки проекта, компилятор и полноценный отладчик. Поддерживается как программная эмуляция, так и отладка в системе. 
        </Text>,
        <Text>
          В отличие от специализированных интегральных схем (ASIC) проектирование микропроцессорных систем на ПЛИС не требует существенных капиталовложений и длительных сроков изготовления. Кроме того, вся система может быть легко изменена в любой момент, в то время как даже небольшая ошибка в проекте ASIC приведет к необходимости повторного прохождения всего цикла проектирования. Наличие полноценного C компилятора облегчает портирование микроконтроллерных проектов на ПЛИС.
        </Text>,
        <Text>
          Как известно, решения на основе процессоров обладают высокой гибкостью и способностью выполнять сложные алгоритмы, не обладая при этом впечатляющей производительностью аппаратных решений. Теперь эта дилемма может быть легко решена с помощью NiosII.
        </Text>,
        <Text>
          Каждое рабочее место оснащено отладочной платой Intel NIOSII Development Kit, Stratix Edition.
        </Text>,
        <Title
          level={3}
          children="Темы занятий"
        />,
        <ol>
          <li>
            Введение в технологию проектирования систем на кристалле на ПЛИС фирмы Intel.
            <br/>
          </li>
          <li>
            Создание систем на кристалле в пакете Quartus II.
            <br/>
          </li>
          <li>
            Разработка программного обеспечения систем на кристалле в пакете Nios II IDE.
            <br/>
          </li>
          <li>
            Разработка и интеграция аппаратных пользовательских модулей в состав системы на кристалле.
            <br/>
          </li>
          <li>
            Моделирование систем на кристалле в пакете ModelSim.
            <br/>
          </li>
          <li>
            Отладка систем на кристалле в аппаратуре для микросхем семейства Stratix.
            <br/>
          </li>
        </ol>,
        <Text>
          <b>Объем курса - 32 часа (8 занятий по четыре часа)</b>
        </Text>,
        <Text>
          <b>Занятия в группах по 5-6 человек</b>
        </Text>,
        <Text>
          <b>Программа курса может корректироваться по согласованию с учебной группой</b>
        </Text>,
        ]
    });

    location.route("/activity");

    return null;

};

export default memo(Altera);

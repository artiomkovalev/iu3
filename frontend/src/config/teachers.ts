import {ITeacher} from "../types/teachers";

const items: ITeacher[] = [
  {
    avatarUrl: "images/alfimtsev.webp",
    name: "Алфимцев Александр Николаевич",
    description: [
      {
        tag: "text",
        content: "заведующий кафедрой, доктор технических наук"
      },
      {
        tag: "text",
        content: "Области научных интересов: машинное обучение; интеллектуальные интерфейсы; компьютерное зрение."
      },
      {
        tag: "text",
        content: "Email: alfim@bmstu.ru"
      },
      {
        tag: "link",
        content: {
          title: "Web",
          link: "https://www.researchgate.net/profile/Alexander-Alfimtsev"
        }
      }
    ]
  },
  {
    avatarUrl: "images/tihomirova.webp",
    name: "Тихомирова Елизавета Алексеевна",
    description: [
      {
        tag: "text",
        content: "зам.зав. кафедрой по учебно-методической работе. доцент"
      },
      {
        tag: "text",
        content: "Области научных интересов: инфокоммуникационные системы и сети, компьютерная лингвистика"
      },
      {
        tag: "text",
        content: "Email: elizarti@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Локтев Даниил Алексеевич",
    description: [
      {
        tag: "text",
        content: "зам. зав. кафедрой по научной работе. профессор, доктор технических наук"
      },
      {
        tag: "text",
        content: "Компьютерное зрение, распознавание объектов, системы видеомониторинга и распознавания ситуаций, методы определения пространственных характеристик объектов, информационная безопасность"
      },
      {
        tag: "text",
        content: "Телефон: 8 (499) 263-62-86"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Алимкина Марина Леонидовна",
    description: [
      {
        tag: "text",
        content: "заведующий лабораторией"
      },
      {
        tag: "text",
        content: "Email: alimkina.marina@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/adienko.webp",
    name: "Адиенко Наталья Владимировна",
    description: [
      {
        tag: "text",
        content: "ведущий инженер"
      },
      {
        tag: "text",
        content: "Email: press3@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/amursky.webp",
    name: "Амурский Владислав Брониславович",
    description: [
      {
        tag: "text",
        content: "доцент, кандидат технических наук"
      },
      {
        tag: "text",
        content: "Член международной академии информатизации. Автор более 50 научных работ (из них 4 монографии). Области научных интересов: многоканальные системы телеизмерений, информационно-измерительные системы, цифровая обработка сигналов, радиоэлектроника, биоэлектроника, компьютерное моделирование физических процессов."
      },
      {
        tag: "text",
        content: "Email: amurvb@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Бабкин Павел Сергеевич",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      },
      {
        tag: "text",
        content: "Аналоговая электроника, цифровая электроника, программируемые логические интегральные схемы, сигнальные процессоры, микроконтроллеры, тепловизоры, статистический анализ и исследование случайных процессов, радарные системы для ADAS."
      },
      {
        tag: "link",
        content: {
          title: "Web",
          link: "https://ru.linkedin.com/pub/pavel-babkin/107/66/197"
        }
      }
    ]
  },
  {
    avatarUrl: "images/baskakov.webp",
    name: "Баскаков Сергей Сергеевич",
    description: [
      {
        tag: "text",
        content: "доцент, кандидат технических наук"
      },
      {
        tag: "text",
        content: "Область научных интересов: беспроводные технологии, беспроводные сенсорные сети, mesh-сети передачи данных, маршрутизация пакетов, сетевые протоколы, распределенные алгоритмы."
      },
      {
        tag: "link",
        content: {
          title: "Web",
          link: "https://www.researchgate.net/profile/Sergey-Baskakov-2"
        }
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Большаков Владислав Эдуардович",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/borovik.webp",
    name: "Боровик Ирина Геннадьевна",
    description: [
      {
        tag: "text",
        content: "доцент, doctor of philosophy"
      },
      {
        tag: "text",
        content: "Разработка систем распознавания с применением алгоритмов обработки статистической информации и нейронных сетей."
      },
      {
        tag: "text",
        content: "Телефон: +7 (499) 263-62-85"
      },
      {
        tag: "text",
        content: "Email: big@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Варфоломеев Александр Алексеевич",
    description: [
      {
        tag: "text",
        content: "доцент, кандидат технических наук"
      },
      {
        tag: "text",
        content: "Отечественные и зарубежные системы обеспечения информационной безопасности и особенности их использования для различных приложений; современные криптографические примитивы и протоколы с открытым ключом и способы их эффективной реализации."
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Величко Никита Алексеевич",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Видьманов Дмитрий Александрович",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      },
      {
        tag: "text",
        content: "Мобильный пользовательский интерфейс, Человеко-машинные интерфейсы, Машинное обучение, Наука о данных, Нейронные сети, Инжиниринг компьютерных сетей, Корпоративные информационные системы, Мультисервисные мобильные приложения и системы, Объектно-ориентированное программирование"
      },
      {
        tag: "text",
        content: "Телефон: 8 (499) 263-62-86"
      },
      {
        tag: "link",
        content: {
          title: "Web",
          link: "https://scholar.google.com/citations?hl=ru&user=kLMKK_UAAAAJ"
        }
      }
    ]
  },
  {
    avatarUrl: "images/vykhovanets.webp",
    name: "Выхованец Валерий Святославович",
    description: [
      {
        tag: "text",
        content: "профессор, доктор технических наук"
      },
      {
        tag: "text",
        content: "Многозначная логика, дискретная обработка данных, цифровая обработка сигналов, теория и технологии программирования, представление и обработка знаний, экспертные системы."
      },
      {
        tag: "text",
        content: "Телефон: +7 (499) 263-62-86"
      },
      {
        tag: "link",
        content: {
          title: "Web",
          link: "http://valery.vykhovanets.ru"
        }
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Германчук Александр Игоревич",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Гончар Константин Валерьевич",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Гребенюк Елена Алексеевна",
    description: [
      {
        tag: "text",
        content: "профессор, доктор технических наук"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Данич Дмитрий Валерьевич",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/devyatkov.webp",
    name: "Девятков Владимир Валентинович",
    description: [
      {
        tag: "text",
        content: "профессор, доктор технических наук"
      },
      {
        tag: "text",
        content: "Действительный член Международной академии информатизации. Лауреат Премии правительства Российской Федерации в области образования 2009 года. Научно-исследовательские интересы. лежат в области теории и практики искусственного интеллекта, мультиагентных систем, логических исчислений, распознавания образов, теории конечных автоматов, логического управления, синтеза и анализа дискретных устройств и систем. Автор более 120 научных работ (из них 3 монографии)."
      },
      {
        tag: "text",
        content: "Телефон: +7 (499) 263-62-86"
      }
    ]
  },
  {
    avatarUrl: "images/kadyrbaeva.webp",
    name: "Кадырбаева Анастасия Рустемовна",
    description: [
      {
        tag: "text",
        content: "ассистент"
      },
      {
        tag: "text",
        content: "Email: kadyra@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/konovalov.webp",
    name: "Коновалов Александр Васильевич",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Левиев Дмитрий Олегович",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Лычков Игорь Игоревич",
    description: [
      {
        tag: "text",
        content: "Распознавание образов; компьютерное зрение; аппаратная реализация алгоритмов обработки сигналов на программируемых логических интегральных схемах."
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Меркелов Михаил Валерьевич",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Моргунов Егор Феликсович",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Морозов Кирилл Андреевич",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Наривная Анна Вячеславовна",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/nedashkovsky.webp",
    name: "Недашковский Вячеслав Михайлович",
    description: [
      {
        tag: "text",
        content: "доцент, кандидат технических наук"
      },
      {
        tag: "text",
        content: "Области научных интересов: методы интеграции корпоративных приложений; объектно-ориентированная разработка корпоративных информационных систем."
      },
      {
        tag: "text",
        content: "Телефон: +7 (499) 263-62-86"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Оганов Владимир Игоревич",
    description: [
      {
        tag: "text",
        content: "доцент"
      },
      {
        tag: "text",
        content: "Аналоговая электроника, цифровая электроника, программируемые логические интегральные схемы, сигнальные процессоры, цифровая обработка сигналов, радиоэлектроника, беспроводные технологии."
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Попов Владислав Сергеевич",
    description: [
      {
        tag: "text",
        content: "старший преподаватель"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Родионов Илия Дмитриевич",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Сакулин Сергей Александрович",
    description: [
      {
        tag: "text",
        content: "доцент, кандидат технических наук"
      },
      {
        tag: "text",
        content: "Распознавание образов и обработка изображений; нечёткие экспертные системы; визуализация операторов агрегирования; системы поиска информации."
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Семенцов Станислав Григорьевич",
    description: [
      {
        tag: "text",
        content: "профессор, доктор технических наук"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Сидякин Иван Михайлович",
    description: [
      {
        tag: "text",
        content: "Разработка программного обеспечения; архитектура операционных систем; системное программирование; системы сбора и обработки телеметрической информации; устройства интернета вещей; встраиваемые Linux системы; приложения для мобильных устройств."
      },
      {
        tag: "text",
        content: "Email: ivan.sidyakin@bmstu.ru"
      }
    ]
  },
  {
    avatarUrl: "images/teacher.webp",
    name: "Страхов Михаил Дмитриевич",
    description: [
      {
        tag: "text",
        content: "ассистент"
      }
    ]
  },
  {
    avatarUrl: "images/fedorov.webp",
    name: "Федоров Сергей Владимирович",
    description: [
      {
        tag: "text",
        content: "доцент"
      },
      {
        tag: "text",
        content: "Проектирование цифровых устройств на программируемых логических интегральных схемах (ПЛИС); параллельные спецвычислители на ПЛИС; цифровая обработка сигналов; операционные системы реального времени; встроенные системы на микроконтроллерах и цифровых сигнальных процессорах."
      },
      {
        tag: "text",
        content: "Email: svf@bmstu.ru"
      },
      {
        tag: "link",
        content: {
          title: "VK",
          link: "https://vk.com/s_v_fedorov"
        }
      }
    ]
  }
];

export default items;

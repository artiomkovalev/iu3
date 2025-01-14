import {Badge, Text, Title} from "../shared";

export const mainBachelor = [
  <div style={{ display: "flex", gap: "auto" }}>
    <Title
      level={2}
      children="Бакалавр"
    />
    <div className="badge-outer" style={{ marginLeft: "auto" }}>
      <Badge degree="b1" children="Б1" />
    </div>
  </div>,
  <Title
    level={3}
    children="Основное высшее образование"
  />,
  <Text
    children={`Кафедра готовит бакалавров по специальности "Информационные системы и технологии". Область профессиональной деятельности бакалавров включает: исследование, разработку, внедрение и сопровождение информационных технологий и систем. Продолжительность обучения составляет 4 года.`}
  />,
  <Text
    children={`Программа направлена на подготовку широкопрофильных специалистов и охватывает различные сферы:`}
  />,
  <Text
    children={`— разработка программного обеспечения;`}
  />,
  <Text
    children={`— модернизация и обслуживание корпоративных информационных систем предприятий и их программное, техническое и организационное обеспечение;`}
  />,
  <Text
    children={`— разработка и сопровождение информационных технологий в различных областях и видах производственной и коммерческой деятельности;`}
  />,
  <Text
    children={`— создание и сопровождение интернет-пространства различных предприятий и учреждений.`}
  />,
  <span className="link-more"><b>Учебный план:</b><a onClick={() => location.href = "/plans/iu3_spb.pdf"} href="/activity" children="iu3_spb.pdf" /></span>,
  <span className="link-more"><b>Преподаватели:</b><a href="/staff" children="iu3.bmstu.ru/staff" /></span>,
  <span><b>Проходные баллы прошлых лет:</b><a href="https://bmstu.ru/bachelor/majors/informacionnye-sistemy-i-tehnologii-090302" children="bmstu.ru/bachelor/majors/informacionnye-sistemy-i-tehnologii-090302" /></span>,
  <span>Подробнее о правилах приёма и документах для подачи заявления: <a href="https://bmstu.ru/bachelor" children="bmstu.ru/bachelor" /></span>
];

export const secondBachelor = [
  <div style={{ display: "flex", gap: "auto" }}>
    <Title
      level={2}
      children="Бакалавр"
    />
    <div className="badge-outer" style={{ marginLeft: "auto" }}>
      <Badge degree="b2" children="Б2" />
    </div>
  </div>,
  <Title
    level={3}
    children="Второе высшее образование"
  />,
  <Text
    children={`Кафедра проводит подготовку бакалавров по программе разработанной для слушателей, имеющих высшее образование. В учебный план включены дисциплины, дополняющие первое высшее образование слушателей до уровня бакалавра техники и технологии по специальности «Информационые системы и технологии» в соответствии с государственным образовательным стандартом.`}
  />,
  <span className="link-more"><b>Подробнее:</b><a href="/second" children="iu3.bmstu.ru/second" /></span>
];

export const intelCenter = [
  <Title
    level={2}
    children="Учебный центр Intel"
  />,
  <Text
    children={`Intel - мировой лидер в производстве микросхем программируемой логики (ПЛИС). Повышение квалификации кадров в области разработки систем на кристалле, это основная задача Центра, имеющего большой опыт в переподготовке специалистов ведущих предприятий России и стран СНГ.`}
  />,
  <span className="link-more"><b>Подробнее:</b><a href="/altera" children="iu3.bmstu.ru/altera" /></span>
];

export const ciscoCenter = [
  <Title
    level={2}
    children="Учебная академия Cisco"
  />,
  <Text
    children={`Телекоммуникационные технологии — одно из наиболее важных направлений обучения на кафедре. В учебные программы интегрированы материалы курсов сетевой академии Cisco. Занятия проводятся на современном сетевом оборудовании.`}
  />,
  <span className="link-more"><b>Подробнее:</b><a href="/cisco" children="iu3.bmstu.ru/cisco" /></span>
];

export const magistracy = [
  <div style={{ display: "flex" }}>
    <Title
      level={2}
      children="Магистр"
    />
    <div className="badge-outer" style={{ marginLeft: "auto" }}>
      <Badge degree="m" children="М" />
    </div>
  </div>,
  <Title
    level={3}
    children="Основное высшее образование"
  />,
  <Text
    children={`Обучение в магистратуре занимает 2 года.`}
  />,
  <Text
    children={`Окончившие обучение получают диплом гос.образца по специальности «Информационные системы и технологии» (09.04.02), по программе «Технологии разработки цифровых платформ» и по программе «Технологии разработки компьютерных игр».`}
  />,
  <Text
    children={`Программа GameDev сосредоточена на получение студентами навыков в программировании и инженерии, непосредственно завязанных на игровой индустрии. Помимо этого студенты будут изучать самые интересные и прикладные отрасли индустрии, в которых нужен структурный и инженерный склад ума. К моменту окончания магистратуры будет апробирована вся сфера разработки компьютерных игр, с акцентом на технические и программные навыки.`}
  />,
  <Text
    children={`Новый учебный план включает в себя дисциплины, позволяющие магистрам освоить 55 новейших технологий программирования и получить необходимые компетенции для широкого применения в профессиональной деятельности:`}
  />,
  <Text
    children={`— разработка, сопровождение и развертывание кода,`}
  />,
  <Text
    children={`— инжиниринг компьютерных сетей и облачных сервисов,`}
  />,
  <Text
    children={`— юзабилити тестирование и оценка опыта пользователя,`}
  />,
  <Text
    children={`— глубокое машинное обучение и компьютерное зрение,`}
  />,
  <Text
    children={`— дизайн и реализация инновационных цифровых проектов.`}
  />,
  <Text
    children={`Выпускники кафедры ИУ-3 востребованы в ведущих российских и международных IT-компаниях по разработке программного обеспечения, а также инновационных стартапах в сфере создания интеллектуальных информационных систем. Среди компаний, где работают наши выпускники Организация развития видеоигровой индустрии, Mensa VR, Indie GO, Games Lab, Штрих-М, ВК, Яндекс, 1С, СберТех, Газпром, РПКБ, Крок.`}
  />,
  <span className="link-more"><b>Учебный план:</b><a onClick={() => location.href = "/plans/iu3_spmd.pdf"} href="/activity" children="iu3_spmd.pdf" /></span>,
  <span className="link-more"><b>Учебный план GameDev:</b><a onClick={() => location.href = "/plans/iu3_spmg.pdf"} href="/activity" children="iu3_spmg.pdf" /></span>,
  <span className="link-more"><b>Преподаватели:</b><a href="/staff" children="iu3.bmstu.ru/staff" /></span>,
  <span>Подробнее о правилах приёма и документах для подачи заявления: <a href="https://bmstu.ru/magistracy" children="bmstu.ru/magistracy" /></span>
];

export const magistracyRequirements = [
  <Title
    level={3}
    children="Условия поступления"
  />,
  <span className="link-more"><b>Вступительный экзамен:</b><span>cпециальность</span></span>,
  <span><b>Минимальный балл по вступительным испытаниям: </b><span>27</span></span>,
  <span className="link-more"><b>Количество бюджетных мест:</b><span>24</span></span>,
  <span className="link-more"><b>Количество платных мест:</b><span>16</span></span>
];

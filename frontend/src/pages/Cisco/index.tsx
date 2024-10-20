import { useLocation } from "preact-iso";
import { useModal } from "../../contexts";
import { Text, Title } from "../../shared";
import { memo } from "preact/compat";

function Cisco() {

    const modal = useModal();
    const location = useLocation();

    modal.openModal({
        title: "Сетевая академия Cisco",
        content: [
            <img className="photo" src="/images/lab-tcom-03.png" />,
            <Text>
                На кафедре с 2001 года действует сетевая академя Cisco. Материалы курсов академии интегрированы в учебный процесс кафедры и используются в курсах посвященных сетевым технологиям. Оборудование Cisco применяеся для проведения лабораторны работ, а также в курсовом и дипломном поектировании. Студенты кафедры имеют возможность самостоятельно работать с интерактивными учебными материалами сетевой академии, получить сертификат об окончании сетевой академии и подготовиться к сдаче экзаменов для получения сертификатов компании Cisco.
            </Text>,
            <Title
                level={2}
                children="Содержание курсов сетевой академии"
            />,
            <Title
                level={3}
                children="CCNA Routing And Switching"
            />,
            <br/>,
            <b>Введение в сети</b>,
            <ul>
                <li>Исследование сети</li>
                <li>Конфигурирование сетевой операционной системы</li>
                <li>Сетевые протоколы и средства связи</li>
                <li>Сетевой доступ</li>
                <li>Технология Ethernet</li>
                <li>Сетевой уровень</li>
                <li>IP-адресация</li>
                <li>Разделение IP-сетей на подсети</li>
                <li>Транспортный уровень</li>
                <li>Прикладной уровень</li>
                <li>Современная сеть</li>
            </ul>,
            <br/>,
            <b>Маршрутизация и коммутация</b>,
            <ul>
                <li>Введение в коммутацию сетей</li>
                <li>Основные принципы коммутации и конфигурации</li>
                <li>Виртуальные локальные сети (VLANs)</li>
                <li>Основы маршрутизации</li>
                <li>Маршрутизация в виртуальных локальных сетях</li>
                <li>Статическая маршрутизация</li>
                <li>Динамическая маршрутизация</li>
                <li>OSPF для одной зоны</li>
                <li>Списки контроля доступа</li>
                <li>Протокол динамической настройки узла (DHCP)</li>
                <li>Преобразование сетевых адресов IPv4</li>
            </ul>,
            <br/>,
            <b>Масштабирование сетей</b>,
            <ul>
                <li>Введение в масштабирование сетей</li>
                <li>Избыточность в локальных сетях</li>
                <li>Агрегация канала</li>
                <li>Беспроводные локальные сети</li>
                <li>Настройка и устранение неполадок в OSPF для одной зоны</li>
                <li>OSPF для нескольких зон</li>
                <li>Протокол EIGRP</li>
                <li>Углублённая настройка и отладка протокола EIGRP</li>
                <li>Образы операционной системы IOS и правила лицензирования</li>
            </ul>,
            <br/>,
            <b>Соединение сетей</b>,
            <ul>
                <li>Иерархический дизайн сети</li>
                <li>Подключение к глобальным сетям</li>
                <li>Подключения точка-точка</li>
                <li>Протокол Frame Relay</li>
                <li>Углублённая настройка преобразования сетевых адресов</li>
                <li>Решения для широкополосного доступа</li>
                <li>Обеспечение безопасности соединений</li>
                <li>Наблюдение за сетью</li>
                <li>Поиск неисправностей в сети</li>
            </ul>
        ]
    });

    location.route("/activity");

    return null;

};

export default memo(Cisco);
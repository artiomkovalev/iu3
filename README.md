# ИУ3 (Обновлённый сайт кафедры)

<details>
  <summary>Демонстрация функционала (Desktop)</summary>
  <img src="github_img/main_page.png" alt="Главная страница"/>
  <img src="github_img/main_with_modal.png" alt="Модальное окно с списоком предметов"/>
  <img src="github_img/main_with_modal_2.png" alt="Модальное окно с деталями о предмете"/>
  <img src="github_img/degrees.png" alt="Поступающим"/>
  <img src="github_img/staff.png" alt="Преподаватели"/>
  <img src="github_img/labs.png" alt="Лаборатории"/>
  <img src="github_img/history.png" alt="История кафедры"/>
  <img src="github_img/media.png" alt="СМИ о нас"/>
  <img src="github_img/ai.png" alt="Нейроквест"/>
  <img src="github_img/contacts.png" alt="Контакты"/>
</details>

<details>
  <summary>Демонстрация функционала (Mobile)</summary>
  <img src="github_img/mobile_main_page.png" alt="Главная страница"/>
  <img src="github_img/mobile_degrees.png" alt="Поступающим"/>
  <img src="github_img/mobile_staff.png" alt="Преподаватели"/>
  <img src="github_img/mobile_labs.png" alt="Лаборатории"/>
  <img src="github_img/mobile_history.png" alt="История кафедры"/>
  <img src="github_img/mobile_media.png" alt="СМИ о нас"/>
  <img src="github_img/mobile_ai.png" alt="Нейроквест"/>
  <img src="github_img/mobile_contacts.png" alt="Контакты"/>
</details>

## О проекте
Проект представляет собой обновлённую версию сайта кафедры ИУ3, разработанную в августе 2024 года. Цель проекта — обновить интерфейс и улучшить функционал текущего сайта кафедры, упростить его поддержку, лучше знакомить абитуриентов с кафедрой, её образовательными направлениями и используемыми технологиями.

## Как запустить
```bash
node src/index.js
http://localhost:8080/
```

## Основные изменения
* Единый стиль оформления: все цвета, заголовки, блоки и другие элементы сайта не различаются от страницы к странице. Это облегчает добавление новых разделов и поддержание существующих.
* Обновлённый стек технологий: для клиентской части используется Preact (облегчённая версия React), для серверной части — Express.js, в качестве базы данных — SQLite 3.
* Улучшенная адаптивность: исправлены проблемы с отображением некоторых страниц в мобильной версии.
* Улучшенная навигация: к примеру, на главной странице добавлены карточки технологий с условными обозначениями, показывающими, на каких формах обучения изучаются те или иные технологии, что упрощает понимание стека изучаемых технологий для абитуриентов.

## Что ещё предстоит реализовать
* Личный кабинет администратора сайта.

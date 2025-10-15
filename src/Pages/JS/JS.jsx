import React from "react";
import styles from './JS.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accordion from '../../Components/Accordion/Accordion'
import Accent from "../../Components/AccentSection/Accent";
import StudyProcess from "../../Components/StudyProcess/StudyProcess";
import Teachers from "../../Components/Teachers/Teachers";

const JS_Data = [
  {
    id: 1,
    title: "Модуль 1",
    theme_title: "Темы:",
    text: "Знакомство с языком JavaScript. Разбираемся, как он работает, где применяется и почему является основой для современного фронтенда. Учимся писать первые скрипты и понимать структуру кода.",
    bullit1: "Что такое JavaScript и зачем он нужен",
    bullit2: "Подключение JS к HTML-документу",
    bullit3: "Переменные и типы данных",
    bullit4: "Операторы и выражения",
    bullit5: "Работа с консолью",
    bullit6: "Условия: if, else, switch",
    bullit7: "Циклы for, while, do...while",
    bullit8: "Функции: объявление и вызов",
    bullit9: "+1 практическая работа: калькулятор на JS",
  },
  {
    id: 2,
    title: "Модуль 2",
    theme_title: "Темы:",
    text: "Переходим от синтаксиса к более сложным концепциям. Изучаем области видимости, работу с объектами, массивами и функциями более глубоко.",
    bullit1: "Области видимости и замыкания",
    bullit2: "Типы данных: объекты и массивы",
    bullit3: "Методы массивов (map, filter, reduce и др.)",
    bullit4: "Передача данных по ссылке и по значению",
    bullit5: "Функции высшего порядка",
    bullit6: "Контекст this и call/apply/bind",
    bullit7: "Стрелочные функции",
    bullit8: "Деструктуризация и spread/rest операторы",
    bullit9: "+1 практическая работа: работа с массивами и объектами",
  },
  {
    id: 3,
    title: "Модуль 3",
    theme_title: "Темы:",
    text: "Изучаем, как JavaScript работает с браузером. Разбираем DOM, события, манипуляции с элементами и взаимодействие с пользователем.",
    bullit1: "DOM и BOM: структура и возможности",
    bullit2: "Поиск элементов в DOM (querySelector, getElementById)",
    bullit3: "Манипуляция элементами: создание, изменение, удаление",
    bullit4: "Обработка событий (click, input, submit)",
    bullit5: "Делегирование событий",
    bullit6: "Работа с формами",
    bullit7: "Событийная модель браузера",
    bullit8: "Практика: To-Do List с DOM-манипуляцией",
    bullit9: "+1 мини-проект: интерактивный список задач",
  },
  {
    id: 4,
    title: "Модуль 4",
    theme_title: "Темы:",
    text: "Осваиваем асинхронное программирование и современные возможности языка. Учимся работать с API, промисами и fetch-запросами.",
    bullit1: "Асинхронность и однопоточность JS",
    bullit2: "Промисы и цепочки then/catch",
    bullit3: "Async / Await — современный подход",
    bullit4: "Работа с fetch и API",
    bullit5: "JSON: парсинг и сериализация данных",
    bullit6: "Ошибка и отладка кода (try...catch)",
    bullit7: "setTimeout и setInterval",
    bullit8: "Практика: получение данных с публичного API",
    bullit9: "+мини-проект: погодное приложение",
  },
  {
    id: 5,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "Чтобы стать успешным разработчиком, важно не только писать код, но и уметь решать проблемы, работать в команде и грамотно коммуницировать.",
    bullit1: "Как учиться эффективно: подходы и методики",
    bullit2: "Работа в команде и коммуникация с коллегами",
    bullit3: "Решение задач и критическое мышление",
    bullit4: "Time management и дисциплина",
    bullit5: "Чтение документации и самостоятельное обучение",
    bullit6: "Работа с фидбеком и ревью кода",
    bullit7: "",
    bullit8: "Карьера Junior-разработчика: чего ожидать",
    bullit9: "+мини-дискуссия: как пройти первое собеседование",
  },
  {
    id: 6,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Закрепляем практические навыки. Осваиваем современные стандарты ES6+, основы тестирования и инструментов сборки.",
    bullit1: "ES6+ фичи: let, const, шаблонные строки, классы",
    bullit2: "Работа с модулями (import/export)",
    bullit3: "ООП в JavaScript: классы, наследование",
    bullit4: "Работа с LocalStorage и SessionStorage",
    bullit5: "",
    bullit6: "Инструменты разработчика в браузере",
    bullit7: "NPM и работа с пакетами",
    bullit8: "",
    bullit9: "",
  },
];

const JS_Style =
{
  border: "1px solid #F5B762",
  leftBg: '#F5B762',
  expandedIcon: '#F5B762',
  borderIcon: '#F5B762',
  arrow: '#F5B762',
}

const JS = () => {
  return <div className={styles['javascript']}>
    <HeroDetails />
    <Container className={styles['javascript__container']}>
      <Accordion data={JS_Data} colors={JS_Style} />
      <StudyProcess />
      <Accent />
      <Teachers />
    </Container>
  </div>;
};

export default JS;

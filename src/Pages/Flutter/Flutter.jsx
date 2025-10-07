import React from "react";
import styles from './Flutter.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";
import Accordion from '../../Components/Accordion/Accordion'

const FlutterData = [
  {
  id: 1,
  title: "Модуль 1",
  theme_title: "Темы:",
  text: "Начинаем путь Flutter-разработчика с настройки среды, инструментов и изучения языка программирования Dart. Осваиваем синтаксис, переменные, коллекции и основы объектно-ориентированного подхода.",
  bullit1: "Настройка операционной системы (Windows, Linux, Mac)",
  bullit2: "Среды разработки: Android Studio, VS Code, IntelliJ IDEA",
  bullit3: "Инструменты: Git, Postman, Swagger, Terminal",
  bullit4: "Установка и введение в Dart",
  bullit5: "Типы данных, переменные, константы",
  bullit6: "Условия и циклы (if, else, for, while)",
  bullit7: "Функции и анонимные функции",
  bullit8: "Объектно-ориентированное программирование (классы, наследование, интерфейсы)",
  bullit9: "+1 практическая работа"
  },
  {
  id: 2,
  title: "Модуль 2",
  theme_title: "Темы:",
  text: "Осваиваем продвинутые возможности Dart и делаем первые шаги в Flutter. Учимся создавать архитектуру приложения, понимать структуру проекта и работать с основными виджетами.",
  bullit1: "Конструкторы, ключевые слова this и static",
  bullit2: "Абстрактные и интерфейсные классы",
  bullit3: "Асинхронное программирование (async/await, Future, Stream)",
  bullit4: "Коллекции и обобщения в Dart",
  bullit5: "Установка Flutter SDK",
  bullit6: "Архитектура Flutter-приложения",
  bullit7: "Первое приложение Flutter",
  bullit8: "Практика: мини-проект на Dart и Flutter",
  bullit9: "+1 практическая работа"
  },
  {
  id: 3,
  title: "Модуль 3",
  theme_title: "Темы:",
  text: "Изучаем Flutter в действии: создаём интерфейсы, используем виджеты, навигацию и запросы к API. Учимся строить архитектуру приложений и управлять состоянием.",
  bullit1: "Stateful и Stateless виджеты",
  bullit2: "Layouts: Container, Row, Column, Stack, Scaffold",
  bullit3: "Элементы интерфейса: Text, TextField, Buttons, Images, Cards",
  bullit4: "Навигация: Routes, Bottom Navigation, TabBar",
  bullit5: "State Management и Bloc Architecture",
  bullit6: "ListView, GridView и работа с данными",
  bullit7: "HTTP-запросы: Get, Post, Put, Delete (Dio, Retrofit)",
  bullit8: "Создание Flutter-приложения с backend на Java",
  bullit9: "+1 практическая работа"
  },
  {
    id: 4,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "Развиваем навыки, необходимые современному разработчику: эффективное взаимодействие в команде, планирование работы, презентация проектов и развитие мышления.",
    bullit1: "Тайм-менеджмент и планирование задач",
    bullit2: "Работа в команде и коммуникация с заказчиком",
    bullit3: "Аналитическое и критическое мышление",
    bullit4: "Понимание бизнес-задач продукта",
    bullit5: "Принятие решений и ответственность в проекте",
    bullit6: "Презентация и защита итогового проекта",
    bullit7: "Карьерные стратегии Flutter-разработчика",
    bullit8: "Подготовка к собеседованию и портфолио",
    bullit9: "+1 soft skills workshop"
  },
  {
    id: 5,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Формируем профессиональные технические компетенции Flutter-разработчика. Учимся создавать архитектуру приложений, применять шаблоны проектирования и оптимизировать код.",
    bullit1: "Построение архитектуры Flutter-приложений",
    bullit2: "Работа с Bloc и потоками данных",
    bullit3: "Обработка ошибок и исключений",
    bullit4: "Оптимизация производительности UI",
    bullit5: "Интеграция API и работа с backend",
    bullit6: "Локализация и перевод приложений (Flutter Translation)",
    bullit7: "Использование Dio, Retrofit и JSON",
    bullit8: "Разработка и тестирование итогового проекта",
    bullit9: "+1 итоговый проект"
   
  },
];

const FlutterStyle = 
{
  border: "1px solid #7CE529",
  leftBg: '#7CE529',
  expandedIcon: '#7CE529',
  borderIcon: '#7CE529',
  arrow: '#7CE529',
}

const Flutter = () => {
  return <div className={styles['flutter']}>
    <HeroDetails />
    <Accent />
    <Container className={styles['flutter__container']}>
      <div className={styles.gap}>sections</div>
       <Accordion data={FlutterData} colors={FlutterStyle}/>
    </Container>
  </div>;
};

export default Flutter;

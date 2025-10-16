import React from "react";
import styles from "./Java.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accordion from "../../Components/Accordion/Accordion";
import Accent from "../../Components/AccentSection/Accent";
import StudyProcess from "../../Components/StudyProcess/StudyProcess";
import Teachers from "../../Components/Teachers/Teachers";

const JavaData = [
  {
    id: 1,
    theme_title: "Темы:",
    title: "Модуль 1",
    text: "Изучаем основы Java, настраиваем окружение и осваиваем первые шаги в языке. Понимаем, как работает JVM, компиляция и структура программы.",
    bullit1: "История и назначение языка Java",
    bullit2: "JVM, JRE, JDK — архитектура и различия",
    bullit3: "Установка JDK и IntelliJ IDEA",
    bullit4: "Создание и запуск первых программ",
    bullit5: "Лексемы, комментарии, ключевые слова",
    bullit6: "Структура кода и процесс компиляции",
    bullit7: "Работа с простыми задачами на вывод данных",
    bullit8: "+1 практическая работа по настройке и запуску Java-программы"

  },
  {
    id: 2,
    title: "Модуль 2",
    theme_title: "Темы:",
    text: "Погружаемся в основы логики программирования на Java: изучаем типизацию, операторы, массивы и циклы. Учимся управлять потоком выполнения кода.",
    bullit1: "Типы данных и переменные",
    bullit2: "Преобразование и приведение типов",
    bullit3: "Управляющие операторы: if, switch",
    bullit4: "Циклы: for, while, do-while, enhanced for",
    bullit5: "Арифметические и логические операции",
    bullit6: "Приоритет операций и использование скобок",
    bullit7: "Массивы — одномерные и многомерные",
    bullit8: "+1 практическая работа с циклами и массивами"
  },
  {
    id: 3,
    title: "Модуль 3",
    theme_title: "Темы:",
    text: "Переходим к объектно-ориентированному программированию: учимся создавать классы, объекты, конструкторы и наследовать поведение.",
    bullit1: "Классы и объекты в Java",
    bullit2: "Конструкторы и перегрузка методов",
    bullit3: "Ключевые слова this, static, final",
    bullit4: "Наследование и переопределение методов",
    bullit5: "Абстрактные классы и интерфейсы",
    bullit6: "Передача параметров и работа с видимостью",
    bullit7: "Внутренние и вложенные классы",
    bullit8: "+1 проект по созданию системы классов"
  },
  {
    id: 4,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "Развиваем профессиональные навыки: работа в команде, документирование кода, планирование задач и самостоятельное обучение.",
    bullit1: "Работа с Git и системой контроля версий",
    bullit2: "Поддержка чистого и понятного кода",
    bullit3: "Декомпозиция задач и планирование времени",
    bullit4: "Поиск и исправление ошибок (debug)",
    bullit5: "Работа с документацией и самообучение",
    bullit6: "Эффективная коммуникация в команде",
    bullit7: "Построение мини-проекта с совместной работой",
    bullit8: "+1 практическая работа по командному взаимодействию",
  },
  {
    id: 5,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Осваиваем продвинутые возможности Java. Учимся работать с исключениями, файлами, коллекциями, потоками данных и функциональным программированием.",
    bullit1: "Обработка исключений (try, catch, finally, throw, throws)",
    bullit2: "Работа с файлами и потоками ввода/вывода",
    bullit3: "Обобщения (Generics)",
    bullit4: "Лямбда-выражения и функциональные интерфейсы",
    bullit5: "Collections Framework",
    bullit6: "Stream API",
    bullit7: "Создание и использование собственных исключений",
    bullit8: "+1 проект с использованием коллекций и потоков",
  },
];

const JavaStyle =
{
  border: "1px solid #2CA2FF",
  leftBg: '#2CA2FF',
  expandedIcon: '#2CA2FF',
  borderIcon: '#2CA2FF',
  arrow: '#2CA2FF',
}

const Java = () => {
  return (
    <div style={styles["java"]}>
      <HeroDetails />
      <Container className={styles["java__container"]}>
        <Accordion data={JavaData} colors={JavaStyle} />
        <StudyProcess />
        <Accent />
        <Teachers />
      </Container>
    </div>
  );
};

export default Java;

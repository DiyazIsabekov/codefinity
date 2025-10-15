import React from "react";
import styles from './DA.module.scss';
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";
import Accordion from "../../Components/Accordion/Accordion";
import StudyProcess from "../../Components/StudyProcess/StudyProcess";
import Teachers from "../../Components/Teachers/Teachers";

const DA_Data = [
  {
    id: 1,
    title: "Модуль 1",
    theme_title: "Темы:",
    text: "Изучаем основы баз данных и SQL — главного языка работы с данными. Учимся создавать таблицы, делать выборки, объединять данные и анализировать их с помощью SQL-запросов.",
    bullit1: "Базы данных и принципы их работы",
    bullit2: "Типы баз данных и структура таблиц",
    bullit3: "Введение в язык SQL",
    bullit4: "Выборка данных: SELECT, WHERE, ORDER BY, GROUP BY",
    bullit5: "Агрегатные функции и подзапросы",
    bullit6: "Соединение таблиц (JOIN)",
    bullit7: "Оконные функции и оптимизация запросов",
    bullit8: "Создание и изменение данных (INSERT, UPDATE, DELETE)",
    bullit9: "+1 практическая работа",
  },
  {
    id: 2,
    title: "Модуль 2",
    theme_title: "Темы:",
    text: "Осваиваем Power BI — один из самых популярных инструментов визуальной аналитики. Учимся загружать, очищать и визуализировать данные, а также создавать дашборды и отчёты.",
    bullit1: "Обзор Power BI и его компоненты",
    bullit2: "Загрузка и объединение данных (CSV, Excel, базы данных)",
    bullit3: "Очистка и трансформация данных",
    bullit4: "Создание визуализаций и дашбордов",
    bullit5: "Работа с фильтрами и срезами",
    bullit6: "Язык формул DAX и вычисляемые поля",
    bullit7: "Создание интерактивных отчётов",
    bullit8: "Публикация и совместная работа в Power BI Service",
    bullit9: "+1 практическая работа",
  },
  {
    id: 3,
    title: "Модуль 3",
    theme_title: "Темы:",
    text: "Осваиваем Tableau и Python для продвинутой аналитики и визуализации данных. Учимся подключать источники, строить графики и анализировать данные с помощью библиотек Pandas, NumPy и Matplotlib.",
    bullit1: "Обзор Tableau и подключение данных",
    bullit2: "Создание графиков и интерактивных панелей",
    bullit3: "Очистка и подготовка данных",
    bullit4: "Основы Python и синтаксис языка",
    bullit5: "Работа с данными в Pandas и NumPy",
    bullit6: "Визуализация в Matplotlib и Seaborn",
    bullit7: "Автоматизация аналитических задач",
    bullit8: "Практика анализа данных с Tableau и Python",
    bullit9: "+1 практическая работа"
  },
  {
    id: 4,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "Развиваем личные и профессиональные навыки, необходимые современному аналитикам. Учимся эффективно общаться с командой, презентовать результаты и управлять временем.",
    bullit1: "Критическое и аналитическое мышление",
    bullit2: "Навыки коммуникации и сторителлинг в аналитике",
    bullit3: "Визуальная подача данных и дизайн отчетов",
    bullit4: "Работа с обратной связью и заинтересованными сторонами",
    bullit5: "Управление временем и приоритетами",
    bullit6: "Эффективная командная работа",
    bullit7: "Принятие решений на основе данных",
    bullit8: "Подготовка к собеседованию аналитика",
    bullit9: "+1 soft skills workshop"
  },
  {
    id: 5,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Закрепляем ключевые технические компетенции дата-аналитика. Учимся работать с реальными бизнес-кейсами, строить отчёты и находить закономерности в данных.",
    bullit1: "Интеграция данных из разных источников",
    bullit2: "Оптимизация SQL-запросов и отчётов",
    bullit3: "Создание интерактивных визуализаций",
    bullit4: "Работа с большими объёмами данных",
    bullit5: "Применение DAX и Python для аналитики",
    bullit6: "Анализ бизнес-показателей (KPI, ROI, LTV)",
    bullit7: "Подготовка аналитического отчёта",
    bullit8: "Презентация результатов на практике",
    bullit9: "+1 итоговой проект"
  },
];

const DA_Style =
{
  border: "1px solid #273DA4",
  leftBg: '#273DA4',
  expandedIcon: '#273DA4',
  borderIcon: '#273DA4',
  arrow: '#273DA4',
}

const DA = () => {
  return (
    <div className={styles['data-analytics']}>
      <HeroDetails />
      <Container className={styles['data-analytics__container']}>
        <Accordion data={DA_Data} colors={DA_Style} />
        <StudyProcess />
        <Accent />
        <Teachers />
      </Container>
    </div>
  );
};

export default DA;

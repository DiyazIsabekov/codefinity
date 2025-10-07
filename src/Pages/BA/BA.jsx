import React from "react";
import styles from "./BA.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";
import Accordion from "../../Components/Accordion/Accordion";

const BA_data = [
  {
    id: 1,
    title: "Модуль 1",
    theme_title: "Темы:",
    text: "Почему IT-компании не выжить без бизнес-аналитика? Разбираемся, какую роль он выполняет и как именно сохраняет бизнесу деньги. Знакомимся с профессиями в IT, рассматриваем жизненный цикл разработки программного обеспечения",
    bullit1: "Введение в курс",
    bullit2: "Основы бизнес-анализа",
    bullit3: "Ключевые понятия бизнес-анализа",
    bullit4: "Управление заинтересованными сторонами",
    bullit5: "Требования. Атрибуты качества требований",
    bullit6: "Жизненный цикл разработки программ (SDLC)",
    bullit7: "Аспект бизнес-анализа в разработке",
    bullit8: "Планирование и мониторинг бизнес-анализа",
    bullit9: "+1 практическая работа",
  },
  {
    id: 2,
    title: "Модуль 2",
    theme_title: "Темы:",
    text: "Изучаем, как выявлять, анализировать и документировать требования. Рассматриваем основные техники сбора информации, модели и диаграммы для описания бизнес-процессов.",
    bullit1: "Методы сбора требований",
    bullit2: "Интервью, воркшопы, наблюдение, анкетирование",
    bullit3: "Анализ требований и устранение конфликтов",
    bullit4: "Бизнес-процессы: AS-IS и TO-BE модели",
    bullit5: "Диаграммы UML и BPMN",
    bullit6: "Трассировка требований",
    bullit7: "Документирование требований (SRS)",
    bullit8: "Коммуникация с заинтересованными сторонами",
    bullit9: "+1 практическая работа по моделированию процессов",
  },
  {
    id: 3,
    title: "Модуль 3",
    theme_title: "Темы:",
    text: "Переходим от теории к практике: разбираем, как бизнес-аналитик работает в команде, как использовать инструменты и артефакты, необходимые в реальных проектах.",
    bullit1: "Agile и Scrum с точки зрения аналитика",
    bullit2: "User Stories и Acceptance Criteria",
    bullit3: "Продуктовый backlog и приоритизация задач",
    bullit4: "Инструменты аналитика: Jira, Confluence, Miro",
    bullit5: "Работа с данными: основы SQL и визуализация",
    bullit6: "Презентация результатов заказчику",
    bullit7: "Оценка и управление изменениями требований",
    bullit8: "Контроль качества и тестирование требований",
    bullit9: "+1 групповая проектная работа",
  },
  {
    id: 4,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "Бизнес-аналитик не только анализирует данные, но и постоянно взаимодействует с людьми. Этот модуль посвящён развитию коммуникационных и аналитических навыков.",
    bullit1: "Эффективная коммуникация с заказчиком и командой",
    bullit2: "Критическое и системное мышление",
    bullit3: "Управление конфликтами",
    bullit4: "Публичные выступления и презентации",
    bullit5: "Time management и приоритизация задач",
    bullit6: "Эмпатия и эмоциональный интеллект",
    bullit7: "Работа в команде и лидерство",
    bullit8: "Постановка целей и обратная связь",
    bullit9: "+мини-тренинг с ролевыми сценариями",
  },
  {
    id: 5,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Изучаем ключевые профессиональные инструменты бизнес-аналитика, необходимые для работы в IT-командах.",
    bullit1: "UML-диаграммы (Use Case, Activity, Sequence)",
    bullit2: "BPMN-моделирование процессов",
    bullit3: "Работа с SQL-запросами",
    bullit4: "Работа с Confluence и Jira",
    bullit5: "Прототипирование интерфейсов (Figma, Balsamiq)",
    bullit6: "Основы аналитики данных и метрик",
    bullit7: "Интеграция бизнес-анализа с QA и Dev-командой",
    bullit8: "Практикум по составлению бизнес-документации",
    bullit9: "+финальный проект с презентацией",
  },
];

const BA_Style = 
{
  border: "1px solid #E44A59",
  leftBg: "linear-gradient(90deg, #000000 0%, #820512 100%)",
  expandedIcon: '#E44A59',
  borderIcon: '#E44A59',
  arrow: '#E44A59',
}

const BA = () => {
  return (
    <div className={styles["business-analyst"]}>
      <HeroDetails />
      <Accent />
      <Container className={styles['business-analyst__container']}>
        <div className={styles.gap}>sections</div>
        <Accordion data={BA_data} colors={BA_Style}/>
      </Container>
    </div>
  );
};
export default BA;

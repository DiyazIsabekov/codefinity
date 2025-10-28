import React from "react";
import styles from "./DevOps.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accent from "../../Components/AccentSection/Accent";
import Accordion from "../../Components/Accordion/Accordion";
import StudyProcess from "../../Components/StudyProcess/StudyProcess";
import Teachers from "../../Components/Teachers/Teachers";

const devopsData = [
  {
    id: 1,
    title: "Модуль 1",
    theme_title: "Темы:",
    text: "Что такое DevOps и почему без него современные IT-компании не могут эффективно работать. Разбираемся, как DevOps объединяет разработку и эксплуатацию, ускоряет выпуск продукта и повышает его стабильность.",
    bullit1: "Введение в DevOps",
    bullit2: "История и философия DevOps",
    bullit3: "Культура взаимодействия Dev и Ops команд",
    bullit4: "Жизненный цикл разработки и поставки ПО",
    bullit5: "Методологии Agile, Scrum, Kanban и их связь с DevOps",
    bullit6: "Основные принципы CI/CD",
    bullit7: "Инструменты DevOps: Jenkins, Docker, Kubernetes (обзор)",
    bullit8: "Практика: настройка первого CI/CD пайплайна",
    bullit9: "+1 практическая работа",
  },
  {
    id: 2,
    title: "Модуль 2",
    theme_title: "Темы:",
    text: "Погружаемся в автоматизацию инфраструктуры и контейнеризацию. Учимся создавать стабильные среды и управлять ими с помощью современных инструментов.",
    bullit1: "Инфраструктура как код (IaC): концепция и преимущества",
    bullit2: "Ansible, Terraform и их использование в DevOps",
    bullit3: "Основы контейнеризации с Docker",
    bullit4: "Создание и управление Docker-образами и контейнерами",
    bullit5: "Docker Compose: автоматизация окружений",
    bullit6: "Практика: развертывание тестовой среды через Docker и Terraform",
    bullit7: "CI/CD пайплайн для контейнеризированных приложений",
    bullit8: "GitHub Actions / Jenkins в работе DevOps-инженера",
    bullit9: "+1 практическая работа по Docker",
  },
  {
    id: 3,
    title: "Модуль 3",
    theme_title: "Темы:",
    text: "Осваиваем инструменты для мониторинга, логирования и оркестрации. Разбираемся, как обеспечивать стабильную работу систем и реагировать на инциденты.",
    bullit1: "Kubernetes: архитектура и базовые компоненты",
    bullit2: "Развертывание приложений в Kubernetes",
    bullit3: "Мониторинг и алертинг (Prometheus, Grafana)",
    bullit4: "Централизованное логирование (ELK Stack)",
    bullit5: "Практика: деплой приложения в кластер Kubernetes",
    bullit6: "CI/CD с Kubernetes и Helm",
    bullit7: "Обеспечение отказоустойчивости и масштабирования",
    bullit8: "Инцидент-менеджмент и реагирование на сбои",
    bullit9: "+групповой проект по настройке мониторинга",
  },
  {
    id: 4,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "DevOps — это не только про технологии, но и про культуру, взаимодействие и мышление. Учимся быть эффективной частью команды.",
    bullit1: "Культура DevOps: ответственность, доверие и прозрачность",
    bullit2: "Коммуникация между Dev, QA и Ops командами",
    bullit3: "Решение конфликтов и командная работа",
    bullit4: "Тайм-менеджмент и приоритизация задач",
    bullit5: "Критическое мышление и принятие решений",
    bullit6: "Работа под давлением и стрессоустойчивость",
    bullit7: "Навыки презентации и донесения идей",
    bullit8: "Саморазвитие и постоянное обучение в IT",
    bullit9: "+мини-тренинг по коммуникации",
  },
  {
    id: 5,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Изучаем ключевые инструменты и технологии DevOps, используемые в реальных проектах для автоматизации и поддержки инфраструктуры.",
    bullit1: "Linux: основы администрирования и bash-скрипты",
    bullit2: "Git и управление версиями кода",
    bullit3: "CI/CD с Jenkins и GitHub Actions",
    bullit4: "Docker и Kubernetes (продвинутая работа)",
    bullit5: "Terraform и Ansible для автоматизации инфраструктуры",
    bullit6: "Мониторинг с Prometheus и визуализация с Grafana",
    bullit7: "Cloud-провайдеры: AWS, Azure, GCP (основы)",
    bullit8: "Security в DevOps: best practices и DevSecOps подход",
    bullit9: "+финальный проект: деплой приложения в облако",
  },
];

const devopsStyle =
{
  border: "1px solid #2CA2FF",
  leftBg: '#2CA2FF',
  expandedIcon: '#2CA2FF',
  borderIcon: '#2CA2FF',
  arrow: '#2CA2FF',
}

const DevOps = () => {
  return (
    <div className={styles['dev-ops']}>
      <HeroDetails />
      <Container className={styles['dev-ops__container']}>
        <Accordion data={devopsData} colors={devopsStyle} />
        {/* <StudyProcess /> */}
        <Accent />
        <Teachers />
      </Container>
    </div>
  )
};

export default DevOps;

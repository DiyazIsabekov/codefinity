import React from "react";
import styles from "./Java.module.scss";
import HeroDetails from "../../Components/HeroDetails/HeroDetails";
import Container from "../../Components/Container/Container";
import Accordion from "../../Components/Accordion/Accordion";

const JavaData = [
  {
    id: 1,
    title: "Модуль 1",
    theme_title: "Темы:",
    text: "Почему IT-компании не выжить без Dev-ops инженера? Разбираемся, какую роль он выполняет и как именно сохраняет бизнесу деньги. Знакомимся с профессиями в IT, рассматриваем жизненный цикл разработки программного обеспечения",
    bullit1: "Введение в курс",
    bullit2: "Основы девопса",
    bullit3: "Ключевые понятия девопса",
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
    text: "We all are flying on our meat spacecrafts through the time and the space of the infinity universe",
    bullit1: "eniki",
    bullit2: "beniki",
    bullit3: "yeli",
    bullit4: "vareniki",
    bullit5: "",
    bullit6: "",
    bullit7: "",
    bullit8: "",
    bullit9: "",
  },
  {
    id: 3,
    title: "Модуль 3",
    theme_title: "Темы:",
    text: "And we all will definetily die",
    bullit1: "от топота",
    bullit2: "копыт",
    bullit3: "пыль по полю",
    bullit4: "летит",
    bullit5: "",
    bullit6: "",
    bullit7: "",
    bullit8: "",
    bullit9: "",
  },
  {
    id: 4,
    title: "Soft skills",
    theme_title: "Темы:",
    text: "So let's celebrate our life now",
    bullit1: "лавировали",
    bullit2: "лавировали",
    bullit3: "да не вылавировали",
    bullit4: "",
    bullit5: "",
    bullit6: "",
    bullit7: "",
    bullit8: "",
    bullit9: "",
  },
  {
    id: 5,
    title: "Hard skills",
    theme_title: "Темы:",
    text: "Amen",
    bullit1: "мороз",
    bullit2: "и солнце",
    bullit3: "день чудесный",
    bullit4: "в лесу",
    bullit5: "раздавался",
    bullit6: "топор",
    bullit7: "дровосека",
    bullit8: "им дровосек",
    bullit9: "отгонял",
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
        <div className={styles.gap}>sections</div>
        <Accordion data={JavaData} colors={JavaStyle}/>
      </Container>
    </div>
  );
};

export default Java;

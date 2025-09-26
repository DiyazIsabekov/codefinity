import React, {useState} from 'react';
import s from './Accordion.module.scss'
import arr_up from '../../assets/images/acc_but_up.png'
import arr_down from '../../assets/images/acc_but_down.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
// import Grid  from '@mui/material';


const coursesData = [
{ 
  id: 1,
  title: 'Модуль 1',
  theme_title: 'Темы:',
  text: 'Почему IT-компании не выжить без бизнес-аналитика? Разбираемся, какую роль он выполняет и как именно сохраняет бизнесу деньги. Знакомимся с профессиями в IT, рассматриваем жизненный цикл разработки программного обеспечения',
  bullit1: 'Введение в курс',
},
{
  id: 2,
  title: 'Модуль 2',
  theme_title: 'Темы:',
  text: "We all are flying on our meat spacecrafts through the time and the space of the infinity universe",
},
{ 
  id: 3,
  title: 'Модуль 3',
  theme_title: 'Темы:',
  text: "And we all will definetily die",
},
{ 
  id: 4,
  title: 'Soft skills',
  theme_title: 'Темы:',
  text: "So let's celebrate our life now",
},
{ 
  id: 5,
  title: 'Hard skills',
  theme_title: 'Темы:',
  text: "Amen",
},

]


export default function ControlledAccordions() {
  const [expandedId, setExpandedId] = React.useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    setExpandedId(isExpanded ? id : false);
  };

  return (
    <div>
        {coursesData.map((el, i) => (
              
      <Accordion 
           className='accordion' 
           key={i}
           expanded={expandedId === el.id} 
           onChange={handleChange(el.id)}
           square={false}
           disableGutters 
           TransitionProps={{
           timeout: { enter: 500, exit: 400 },
           easing: {
           enter: 'ease-out',
           exit: 'ease-in',
           },
           }}
           sx={{
            border: '1px solid #E44A59',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: 'none',
            '&:before': { display: 'none' },
            marginBottom: '20px',
            '&.MuiPaper-root': {
            borderRadius: '16px',
            },
            
           }}
      >
        <AccordionSummary 
            
            expandIcon={
            expandedId === el.id ? (
            <img 
            src= {arr_down} alt="expand" style={{ width: 50, height: 44, margin: 20 }} 
          />
          ) : (
            <img
              src={arr_up} alt="collapse" style={{ width: 50, height: 44, margin: 20 }}
            />
          )
          }
          sx={{
           "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "none", 
            },
            padding: 0, 
            margin: 0, 
            minHeight: 'unset', 
            '& .MuiAccordionSummary-content': {
             margin: 0,
             minHeight: 'unset',
          },
          '& .MuiAccordion-heading': {
          margin: 0,
          padding: 0,
          },
          }}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
      <Box className={s.main_module}>
          <Box className={s.module_left}>
          <Typography sx={{ margin: 0, padding: 0 }} className={s.left_title}>
            {el.title}
          </Typography>
        </Box>
        <Box className={s.module_right}>
          <Typography sx={{ margin: 0, padding: 0 }} className={s.right_title}>
            {el.theme_title}
          </Typography>
        </Box>
      </Box>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            padding: 0, 
            margin: 0,  
            '& .MuiAccordionDetails-content': {
             margin: 0,
          }
          }}
        >
          <Box className={s.main_module}>
          <Box className={s.module_left}>
          <Typography className={s.left_text}>
            {el.text}
          </Typography>
          </Box>
          <Box className={s.module_right}>
          <Typography className={s.right_text}>
            {/* <div>
            <p>Введение в курс</p>
            <p>Основы бизнес-анализа</p>
            </div>
            <p>Ключевые понятия бизнес-анализа</p>
            <p>Управление заинтересованными сторонами</p>
            <p>Требования. Атрибуты качества требований</p>
            <p>Жизненный цикл разработки программ (SDLC)</p>
            <p>Аспект бизнес-анализа в разработке</p>
            <p>Планирование и мониторинг бизнес-анализа</p>
            <p>+1 практическая работа</p> */}
          </Typography>
          </Box>
          </Box>
        </AccordionDetails>
        
      </Accordion>
      ))}
    </div>
  );
}


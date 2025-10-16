import React, { useState } from 'react';
import s from './Accordion.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import Title from '../Title/Title';


export default function ControlledAccordions({ data, colors }) {
  const [expandedId, setExpandedId] = useState(false);
  const maxWidthMobileL = useMediaQuery({ maxWidth: 768 });

  const handleChange = (id) => (event, isExpanded) => {
    setExpandedId(isExpanded ? id : false);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "linear" },
    },
  };

  return (
    <motion.div
      className={s.accordion}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <Title title={maxWidthMobileL ? 'Наши Курсы' : 'Программа курса'} text={'Что вы узнаете ?'} />
      {data.map((el, i) => (
        <motion.div key={i} variants={itemVariants}>
          <Accordion
            className="accordion"
            key={i}
            expanded={expandedId === el.id}
            onChange={handleChange(el.id)}
            square={false}
            disableGutters
            TransitionProps={{
              timeout: { enter: 500, exit: 400 },
              easing: {
                enter: "ease-out",
                exit: "ease-in",
              },
            }}
            sx={{
              border: colors.border,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'none',
              '&:before':
                { display: 'none' },
              '&.MuiPaper-root':
                { borderRadius: '16px', },
              // marginBottom: expandedId === el.id ? '30px' : '15px',
            }}
          >
            <AccordionSummary
              expandIcon={
                <IconButton
                  sx={{
                    width: 60,
                    height: 44,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <svg
                    style={{
                      transform: expandedId === el.id ? 'rotate(0deg)' : 'rotate(180deg)',
                      transition: 'transform 0.5s ease, fill 0.5s ease',
                    }}
                    width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50"
                      height="44"
                      rx="13"
                      fill={expandedId === el.id ? colors.expandedIcon : 'white'}
                      stroke={
                        window.innerWidth < 992
                          ? 'white'
                          : expandedId === el.id ?
                            'transparent'
                            : colors.borderIcon}
                    />
                    <path d="M33 29L24.5 15L16 29L24.5 29L33 29Z"
                      fill={expandedId === el.id ? 'white' : colors.arrow}
                    />
                  </svg>
                </IconButton>
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
                "& .MuiAccordionSummary-expandIconWrapper": {
                  position: "absolute",
                  right: "16px",
                  top: "16px",
                  margin: 0,
                },
              }}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >

              <Box className={s.main_module}>
                <Box
                  className={s.module_left}
                  sx={{
                    background: colors.leftBg,
                  }}
                >
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
                "& .MuiAccordionDetails-content": {
                  margin: 0,
                },
              }}
            >
              <Box className={s.main_module}>
                <Box
                  className={s.module_left}
                  sx={{
                    background: colors.leftBg,
                  }}
                >
                  <Typography className={s.left_text}>{el.text}</Typography>
                </Box>
                <Box className={s.module_right}>
                  <Typography className={s.right_text}>
                    <div className={s.bullits_wrapper}>
                      {[
                        el.bullit1,
                        el.bullit2,
                        el.bullit3,
                        el.bullit4,
                        el.bullit5,
                        el.bullit6,
                        el.bullit7,
                        el.bullit8,
                        el.bullit9,
                      ]
                        .filter((el) => el && el.trim() !== "")
                        .map((el, i) => (
                          <span key={i}>{el}</span>
                        ))}
                    </div>
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </motion.div>
  );
}

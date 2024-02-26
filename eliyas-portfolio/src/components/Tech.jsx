import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[150px] w-full card-gradient  p-[1px] rounded-[20px] shadow-card">
      <div
     
        className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-26 h-26 object-contain" />
        <h3 className="text-taupe text-[16px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {technologies.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </>
  );
};

export default SectionWrapper(Tech, '');
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { eliyas} from '../assets';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const Icon = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-4 md:mr-6 lg:mr-8" />
);

const Hero = () => {
  return (
    <>
    
      <section className="overflow-hidden relative flex sm:flex-row flex-col w-full h-screen mx-auto bg-gradient-to-r from-gray-900 to-gray-400">
        <div
          className={`absolute inset-0 sm:top-[200px] top-[170px] lg:top-[150px] xl:top-[250px]  max-w-7xl mx-auto flex flex-row items-start justify-between `}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-white sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-t from-transparent to-gray-800 sm:hidden" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1
              className={`${styles.heroHeadText} text-white font-poppins uppercase fadeInAnimation bounceAnimation`}
            >
              Hey, I'm{' '}
              <span
                className="sm:text-[50px] 
                        text-white text-[50px] font-mova
                        uppercase blackAndWhiteText"
              >
                Eliyas
              </span>
              <span role="img" aria-label="coder" style={{ fontSize: '58px', marginLeft: '10px' }}>
                👨‍💻
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white`}>
              Front End Developer
            </p>
            <div className="flex mt-4 md:mt-6 lg:mt-8">
              <a href="https://github.com/eliyasson" target="_blank" rel="noopener noreferrer">
                <Icon src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/eliyas-kassaye/" target="_blank" rel="noopener noreferrer">
                <Icon src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/eliiyas_t/" target="_blank" rel="noopener noreferrer">
                <Icon src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </motion.div>

          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div>
          <img
            className="absolute bottom-0  ml-[50vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 
            sm:h-[70vh] md:h-[80vh] xl:h-[80vh] object-cover max-h-[90vh]"
            src={eliyas}
            alt="eliyas"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;

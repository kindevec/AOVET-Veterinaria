import { motion } from 'motion/react';

const SeparadorGrieta = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center my-8 opacity-40">
      <motion.svg 
        width="200" 
        height="20" 
        viewBox="0 0 200 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ strokeDashoffset: 200 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.path 
          d="M0 10 L40 18 L80 2 L120 16 L160 6 L200 10" 
          stroke="var(--color-aovet-primary)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          strokeDasharray="200"
        />
      </motion.svg>
    </div>
  );
};

export default SeparadorGrieta;

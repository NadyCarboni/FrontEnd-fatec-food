import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="loader flex align-itens-center justify-content-center">
      <motion.div
        className="dot "
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity }}
      />
      <motion.div
        className="dot mx-1"
        animate={{ y: [-10, 0, -10] }}
        transition={{ repeat: Infinity }}
      />
      <motion.div
        className="dot"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity }}
      />
    </div>
  );
}

import { motion } from "framer-motion";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

import React from "react";

function Home() {
  return (
    <motion.div>
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;

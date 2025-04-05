import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  // Ref for tracking visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Ensures animation happens only once

  // State for each statistic
  const [customers, setCustomers] = useState(0);
  const [hoursSpent, setHoursSpent] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Function to animate numbers
      const animateValue = (setValue, target, duration) => {
        let start = 0;
        let stepTime = Math.abs(Math.floor(duration / target));
        let timer = setInterval(() => {
          start += 1;
          setValue(start);
          if (start >= target) clearInterval(timer);
        }, stepTime);
      };

      animateValue(setCustomers, 30, 1000);
      animateValue(setHoursSpent, 100, 1200);
      animateValue(setRating, 4.9, 800);
    }
  }, [isInView]); // Runs only when `isInView` changes

  return (
    <div ref={ref} className="w-full bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center lg:justify-between gap-6">
        {/* Customers */}
        <div className="flex flex-col items-center w-1/3 sm:w-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {customers.toLocaleString()}+
          </motion.h2>
          <p className="text-gray-400 text-sm lg:text-base mt-2">
            Total Customers
          </p>
        </div>

        {/* Hours Spent */}
        <div className="flex flex-col items-center w-1/3 sm:w-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            {hoursSpent.toLocaleString()}+
          </motion.h2>
          <p className="text-gray-400 text-sm lg:text-base mt-2">Hours Spent</p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center w-1/3 sm:w-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.4 }}
          >
            {rating.toFixed(1)}/5
          </motion.h2>
          <p className="text-gray-400 text-sm lg:text-base mt-2">
            Average Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

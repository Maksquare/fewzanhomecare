import Pretitle from "./Pretitle";
import { delay, motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import FaqItem from "./FaqItem";

const faqItemsData = [
  {
    title: "What services does homecare cover?",
    description:
      "Homecare includes daily assistance, medication reminders, nursing care, and specialized support based on individual needs.",
  },
  {
    title: "How do I choose the right caregiver?",
    description:
      "We match caregivers based on experience, skills, and personality to fit your loved one’s specific needs.",
  },
  {
    title: "Is homecare available 24/7?",
    description:
      "Yes, we offer round-the-clock care for clients who need continuous support at home.",
  },
  {
    title: "How is care monitored?",
    description:
      "Our team regularly reviews care plans and conducts check-ins to ensure quality and safety.",
  },
  {
    title: "Can homecare support medical needs?",
    description:
      "Absolutely. Our trained nurses provide medical monitoring, medication administration, and assistance with medical equipment.",
  },
  {
    title: "How much does homecare cost?",
    description:
      "Costs vary based on care level, hours, and specific services. We provide clear, transparent quotes before starting.",
  },
];
const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};
// animation variants for FAQ items
const faqItemsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    Y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, //Staggerd Animation
  }),
};
const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* texts */}
        <motion.div
          variants={fadeIn("up", 0.2)} // Direction usually lowercase "up"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We’re Here for You</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From care plans to daily support, we’ve answered the most common
            questions to help you and your loved ones make informed decisions
            about home healthcare.
          </p>
        </motion.div>
        {/* Faq Items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((faq, index) => {
            return (
              <motion.li
                variants={faqItemsVariants} // Direction usually lowercase "up"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index}
                key={index}
              >
                <FaqItem title={faq.title} description={faq.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;

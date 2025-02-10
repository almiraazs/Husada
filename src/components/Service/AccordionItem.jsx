import { useState, useImperativeHandle, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = forwardRef(({ title, content }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleAccordion() {
      setIsOpen((prevState) => !prevState);
    },
    closeAccordion() {
      setIsOpen(false);
    },
  }));

  return (
    <div className="overflow-hidden rounded-lg border border-blue-300 shadow-md">
      {/* Tombol Accordion */}
      <button
        className="flex w-full items-center justify-between bg-gray-100 px-4 py-4 text-left font-medium hover:bg-gray-200 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <Icon
          icon={isOpen ? "bx:chevron-up" : "bx:chevron-down"}
          className="text-lg transition-transform duration-300"
        />
      </button>

      {/* Konten Accordion dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white px-6 py-3 text-gray-900"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;

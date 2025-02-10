import { useState, useImperativeHandle, forwardRef } from "react";
import { Icon } from "@iconify/react";

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
    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-md">
      <button
        className="flex w-full items-center justify-between bg-slate-100 px-4 py-4 text-left font-medium hover:bg-slate-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <Icon icon={isOpen ? "bx:chevron-up" : "bx:chevron-down"} className={`float-right`} />
      </button>
      <div
        className={`transition-max-height bg-white px-6 text-gray-900 duration-500 ease-out ${isOpen ? "max-h-fit py-3" : "max-h-0 overflow-hidden"}`}
      >
        <div className={`transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
          {content}
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
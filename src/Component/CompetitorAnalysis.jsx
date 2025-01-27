import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { accordionData } from "../data";

const CompetitorAnalysis = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          Marketing Strategies Guide
        </h1>
      </header>
      <div className="bg-white shadow-md rounded-lg">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openAccordion === index}
            toggleAccordion={() => toggleAccordion(index)}
            videos={item.videos}
            pdfs={item.pdfs}
          />
        ))}
      </div>
    </div>
  );
};

export default CompetitorAnalysis;

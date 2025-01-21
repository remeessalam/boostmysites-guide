import {
  FaChevronDown,
  FaChevronUp,
  FaFileAlt,
  FaPlayCircle,
} from "react-icons/fa";
// eslint-disable-next-line
const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleAccordion}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4">
          <p className="mb-4">{content}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaPlayCircle className="text-blue-500 mr-2" />
              <span>Video</span>
            </div>
            <div className="flex items-center">
              <FaFileAlt className="text-red-500 mr-2" />
              <span>PDF</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccordionItem;

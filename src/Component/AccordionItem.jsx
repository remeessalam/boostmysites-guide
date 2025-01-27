import {
  FaChevronDown,
  FaChevronUp,
  FaFileAlt,
  FaPlayCircle,
} from "react-icons/fa";
import ReactPlayer from "react-player";

// eslint-disable-next-line
const AccordionItem = ({
  title,
  content,
  isOpen,
  toggleAccordion,
  videos,
  pdfs,
}) => {
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
          <div className="mb-4">
            <h3 className="font-bold mb-2">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos?.map((video, index) => (
                <div key={index} className="rounded overflow-hidden shadow">
                  <ReactPlayer
                    url={video}
                    controls={true}
                    width="100%"
                    height="200px"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">PDFs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pdfs?.map((pdf, index) => (
                <a
                  key={index}
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border rounded p-2 shadow hover:bg-gray-100"
                >
                  <FaFileAlt className="text-red-500 mr-2" />
                  <span>PDF {index + 1}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccordionItem;

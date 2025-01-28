import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFileAlt,
  FaPlayCircle,
  FaVolumeUp,
} from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
/* eslint-disable */
const AccordionItem = ({ title, content, videos, pdfs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg|youtube\.com|vimeo\.com)/i);
  };

  const isAudio = (url) => {
    return url.match(/\.(m4a|mp3|wav|ogg)/i);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md mb-4 overflow-hidden transition-all duration-300">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200"
        onClick={toggleAccordion}
      >
        <span className="font-semibold text-lg text-gray-800">{title}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="mb-6 text-gray-700">{content}</p>

          {videos && videos.length > 0 && (
            <div className="mb-6">
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                Media Files
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((file, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-200"
                  >
                    {activeMedia === index ? (
                      <div className="relative aspect-video">
                        <ReactPlayer
                          url={file}
                          controls={true}
                          width="100%"
                          height="100%"
                          playing={true}
                          config={{
                            youtube: {
                              playerVars: { modestbranding: 1, controls: 1 },
                            },
                            file: {
                              forceAudio: isAudio(file),
                              attributes: {
                                controlsList: "nodownload",
                              },
                            },
                          }}
                          onEnded={() => setActiveMedia(null)}
                        />
                      </div>
                    ) : (
                      <div
                        className="relative aspect-video bg-gray-200 flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveMedia(index)}
                      >
                        {isVideo(file) ? (
                          <>
                            <FaPlayCircle className="text-5xl text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10" />
                          </>
                        ) : (
                          <>
                            <FaVolumeUp className="text-5xl text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10" />
                          </>
                        )}
                      </div>
                    )}
                    <div className="p-2 bg-white">
                      <span className="text-sm font-medium text-gray-700">
                        {isVideo(file)
                          ? `Video ${index + 1}`
                          : `Audio ${index + 1}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {pdfs && pdfs.length > 0 && (
            <div>
              <h3 className="font-bold text-xl mb-4 text-gray-800">PDFs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pdfs.map((pdf, index) => (
                  <a
                    key={index}
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center border rounded-lg p-4 shadow-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-full h-32 mb-2 bg-gray-200 rounded flex items-center justify-center">
                      <FaFileAlt className="text-4xl text-red-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      PDF {index + 1}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

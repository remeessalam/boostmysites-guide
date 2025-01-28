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
    <div className="border border-gray-200 rounded-lg shadow-md mb-4 overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
        onClick={toggleAccordion}
      >
        <span className="font-semibold text-lg">{title}</span>
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
              <h3 className="font-bold text-xl mb-4">Media Files</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((file, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md bg-gray-100"
                  >
                    {activeMedia === index ? (
                      <ReactPlayer
                        url={file}
                        controls={true}
                        width="100%"
                        height={isVideo(file) ? "200px" : "154px"}
                        config={{
                          youtube: {
                            playerVars: { modestbranding: 1 },
                          },
                          file: {
                            forceAudio: isAudio(file),
                          },
                        }}
                      />
                    ) : (
                      <div
                        className="relative h-48 bg-gray-200 flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveMedia(index)}
                      >
                        {isVideo(file) ? (
                          <>
                            <FaPlayCircle className="text-5xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                            <img
                              src={`https://img.youtube.com/vi/${
                                file.split("v=")[1]
                              }/0.jpg`}
                              alt={`Video ${index + 1} thumbnail`}
                              className="absolute inset-0 w-full h-full object-cover opacity-50"
                            />
                          </>
                        ) : (
                          <FaVolumeUp className="text-5xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                        )}
                      </div>
                    )}
                    <div className="p-2">
                      <span className="text-sm font-medium">
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
              <h3 className="font-bold text-xl mb-4">PDFs</h3>
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
                    <span className="text-sm font-medium">PDF {index + 1}</span>
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

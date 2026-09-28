"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ProjectModal";

const RecentProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-2 font-mono">
          Featured Work
        </span>
        <h1 className="heading text-white">
          A small selection of{" "}
          <span className="text-[#13D6E9] drop-shadow-[0_0_25px_rgba(19,214,233,0.4)]">
            recent projects
          </span>
        </h1>
        <p className="text-white-200 text-xs sm:text-sm md:text-base text-center mt-3 max-w-xl mx-auto font-sans px-4">
          Click on any project to explore the interactive Behance-style case study, video walkthrough, and visual gallery.
        </p>
      </div>

      {/* Full-width 2-column Grid matching the other sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full relative z-10">
        {projects.map((item, index) => (
          <div
            className="w-full lg:min-h-[35rem] h-[28rem] flex items-center justify-center cursor-pointer"
            key={item.id}
            onClick={() => handleOpenModal(index)}
          >
            <PinContainer
              title="Click to view Case Study"
              className="w-[85vw] sm:w-[500px] md:w-[540px] lg:w-[480px] xl:w-[540px] 2xl:w-[570px] max-w-full"
            >
              {/* Image Banner */}
              <div className="relative flex items-center justify-center w-[85vw] sm:w-[500px] md:w-[540px] lg:w-[480px] xl:w-[540px] 2xl:w-[570px] max-w-full overflow-hidden h-[20vh] sm:h-[24vh] lg:h-[28vh] mb-6 rounded-2xl group">
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-contain max-h-[92%] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Behance Case Study pill badge */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#13D6E9]/40 text-[10px] font-mono font-bold text-[#72F8F1] shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#13D6E9] animate-pulse" />
                  <span>Case Study</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white font-sans hover:text-[#13D6E9] transition-colors">
                {item.title}
              </h2>

              {/* Description */}
              <p
                className="lg:text-sm text-xs line-clamp-2 leading-relaxed font-sans mt-2"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des}
              </p>

              {/* Tech stack icons & CTA */}
              <div className="flex items-center justify-between mt-6 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, iconIdx) => (
                    <div
                      key={iconIdx}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center shadow-md"
                      style={{
                        transform: `translateX(-${5 * iconIdx + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="tech icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center group/btn cursor-pointer">
                  <p className="flex lg:text-sm md:text-xs text-xs text-[#13D6E9] font-semibold transition-colors">
                    View Case Study
                  </p>
                  <FaLocationArrow className="ms-2 text-[#13D6E9] text-xs transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Behance-Style Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={projects}
        currentIndex={selectedProjectIndex}
        onSelectProject={(index) => setSelectedProjectIndex(index)}
      />
    </section>
  );
};

export default RecentProjects;

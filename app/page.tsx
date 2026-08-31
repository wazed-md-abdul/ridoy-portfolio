"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import PersonalView from "@/components/personal/PersonalView";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Professional");

  return (
    <main className="relative bg-background text-foreground flex justify-center items-center flex-col overflow-x-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Professional" ? (
          <>
            <Education />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Approach />
            <Footer />
          </>
        ) : (
          <PersonalView />
        )}
      </div>
    </main>
  );
};

export default Home;

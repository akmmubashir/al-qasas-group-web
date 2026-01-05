"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SubHeading from "@/app/components/subHeading";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Al-Qasas",
    position: "Chief Executive Officer",
    image: "/assets/images/team-1.jpg",
    bio: "Visionary leader with over 15 years of experience in engineering and construction management.",
  },
  {
    id: 2,
    name: "Mohammed Hassan",
    position: "Operations Director",
    image: "/assets/images/team-2.jpg",
    bio: "Expert in streamlining operations and ensuring project delivery excellence.",
  },
  {
    id: 3,
    name: "Fatima Al-Mansouri",
    position: "Engineering Manager",
    image: "/assets/images/team-3.jpg",
    bio: "Leading technical innovation with extensive expertise in industrial engineering.",
  },
  {
    id: 4,
    name: "Khalid Ibrahim",
    position: "Quality Assurance Director",
    image: "/assets/images/team-4.jpg",
    bio: "Ensuring highest standards of quality and compliance across all projects.",
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      // Team cards animation
      const cards = teamRef.current?.querySelectorAll(".team-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <SubHeading title="Our Leadership" />
            <Heading title1="Meet Our" title2="Expert Team" />
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals driving excellence and innovation in every
              project
            </p>
          </div>
        </div>

        <div
          ref={teamRef}
          className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card group relative overflow-hidden"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 group-hover:border-cyan-300 transition-all duration-500 hover:shadow-2xl">
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                  <Image
                    // src={member.image}
                    src="/assets/common/profile.png"
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Bio overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-[16px] max-xl:text-[16px] max-lg:text-[14px] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 text-[16px] max-xl:text-[16px] max-lg:text-[14px] font-medium">
                    {member.position}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

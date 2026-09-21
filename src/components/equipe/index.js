"use client";

import { oswald, robotoMono } from "@/utils/fonts";
import AnimatedContent from "@/components/animation/animatedContent";
import MemberCard from "./memberCard";

export default function EquipeSection({ departments, team }) {
    return (
        <div className="w-full flex flex-col gap-24">
            {departments.map((dept, deptIndex) => {
                const members = team.filter((m) => m.department === dept.key);

                if (members.length === 0) return null;

                const isGreen = deptIndex % 2 === 0;

                return (
                    <div key={dept.key}>
                        <div className="flex items-center gap-4 mb-10">
                            <span className={`text-lg ${robotoMono.className} ${isGreen ? "text-accentGreen" : "text-[#2C19FF]"}`}>
                                <span className="opacity-70">#</span> {String(deptIndex + 1).padStart(2, "0")}
                            </span>

                            <h3 className={`glitch-hover text-white text-2xl sm:text-3xl font-medium uppercase tracking-wider ${oswald.className}`}>
                                {dept.label}
                            </h3>

                            <div className="flex-1 h-px bg-[#F8F8F8]/10" />
                        </div>

                        <AnimatedContent
                            distance={50}
                            direction="vertical"
                            reverse={false}
                            duration={1.2}
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.01}
                            threshold={0.1}
                            delay={0.05}
                        >
                            <div className="grid grid-cols-2 sm8:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-6">
                                {members.map((member, i) => (
                                    <MemberCard
                                        key={`${dept.key}-${i}`}
                                        name={member.name}
                                        departmentLabel={dept.label}
                                        photo={member.photo}
                                        accent={isGreen ? "green" : "blue"}
                                    />
                                ))}
                            </div>
                        </AnimatedContent>
                    </div>
                );
            })}
        </div>
    );
}

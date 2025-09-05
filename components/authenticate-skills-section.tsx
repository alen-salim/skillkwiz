import Image from "next/image";
import { useEffect, useState } from "react";

export default function AuthenticateSkillsSection() {
  const [leftTop, setLeftTop] = useState(true);
  const [rightTop, setRightTop] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTop((prev) => !prev);
      setRightTop((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Flip */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] perspective">
            <div
              className={`absolute w-[80%] h-[80%] left-[-25%] top-0 transition-transform duration-700 transform-style-preserve-3d ${
                leftTop ? "rotate-y-0" : "rotate-y-180"
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src="/images/homepage/skills_1.png"
                  alt="Professional working at night"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <Image
                  src="/images/homepage/skills_2.png"
                  alt="Professional in tech environment"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Center text */}
          <div className="w-full md:w-1/3 text-center my-8 md:my-0 z-20">
            <h2 className="text-3xl font-bold text-[#00418d] mb-4">
              Authenticate Skills,
              <br />
              Simplify Hiring
            </h2>
            <p className="text-gray-700">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
          </div>

          {/* Right Flip */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] perspective">
            <div
              className={`absolute w-[80%] h-[80%] right-[-25%] top-0 transition-transform duration-700 transform-style-preserve-3d ${
                rightTop ? "rotate-y-0" : "rotate-y-180"
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src="/images/homepage/skills_3.png"
                  alt="Professional at workstation"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <Image
                  src="/images/homepage/skills_4.png"
                  alt="Business professional looking at digital interface"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

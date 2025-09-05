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
          {/* Left shuffle */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            {/* Image 1 */}
            <div
              className={`absolute top-0 left-[-30%] w-[80%] h-[80%] transition-all duration-1000 ease-in-out ${
                leftTop
                  ? "z-20 translate-x-0 translate-y-0 opacity-100"
                  : "z-10 translate-x-6 opacity-70"
              }`}
            >
              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Image 2 */}
            <div
              className={`absolute top-2 left-[-28%] w-[80%] h-[80%] transition-all duration-1000 ease-in-out ${
                leftTop
                  ? "z-10 -translate-x-6 opacity-70"
                  : "z-20 translate-x-0 translate-y-0 opacity-100"
              }`}
            >
              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
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

          {/* Right shuffle */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            {/* Image 3 */}
            <div
              className={`absolute top-0 right-[-30%] w-[80%] h-[80%] transition-all duration-1000 ease-in-out ${
                rightTop
                  ? "z-20 translate-x-0 translate-y-0 opacity-100"
                  : "z-10 -translate-x-6 opacity-70"
              }`}
            >
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Image 4 */}
            <div
              className={`absolute top-2 right-[-28%] w-[80%] h-[80%] transition-all duration-1000 ease-in-out ${
                rightTop
                  ? "z-10 translate-x-6 opacity-70"
                  : "z-20 translate-x-0 translate-y-0 opacity-100"
              }`}
            >
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
    </section>
  );
}

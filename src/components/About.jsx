import code from "../images/code.jpg";


export default function About() {
    return (
        <section id="about" className="bg-white text-[#2d2e32] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        I’m a passionate frontend developer with a strong foundation in building modern,
                        responsive, and accessible web applications. I enjoy translating designs into clean,
                        performant code and bringing ideas to life in the browser.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        With experience in tools like <strong>React</strong>, <strong>Next.js</strong>, and
                        <strong> TailwindCSS</strong>, I strive to build user-friendly interfaces that
                        prioritize both aesthetics and functionality.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
                        <ul className="flex flex-wrap gap-3 text-sm text-white bg-[#2d2e32] px-4 py-3 rounded-md">
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">Store Developement</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">Mongo DB</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">Postgress</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">JavaScript</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">React</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">TailwindCSS</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">Next.js</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">Git</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">Mobile Responsiveness</li>
                            <li className="bg-[#facc15] text-[#2d2e32] px-3 py-1 rounded-md">State Management</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img
                        src={code}
                        alt="Frontend Developer illustration or profile"
                        className="w-64 h-64 object-cover rounded-full shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

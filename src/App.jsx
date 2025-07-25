import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Import } from "lucide-react";
import profile from "./assets/laveti.jpg";
import ninjachatImg from "./assets/ninjachat1.png";
import skillIcon from "./assets/skills.png";
import csu from "./assets/csu.png";
import gvpcew from "./assets/gvpcew.jpg";
import botupImg from "./assets/botup.png";
import ninjacaptureImg from "./assets/ninjacapture.png";


const skills = [
  "Python", "Node.js", "Vue.js", "AWS", "Docker", "MongoDB",
  "TypeScript", "MySQL", "HTML", "CSS", 'WordPress', "Git", "Agile Methodologies"
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-bold text-purple-400">Sowmya Laveti</span>
          <ul className="flex space-x-6 text-sm text-gray-300">
            <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
            <li><a href="#education" className="hover:text-purple-400 transition">Education</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[radial-gradient(ellipse_at_top,_#151c2c,_#0b0f1c)] relative overflow-hidden">
        {/* Glowing Background Effects */}
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 top-[-5rem] left-[-5rem] animate-pulse" />
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-2xl opacity-20 bottom-[-4rem] right-[-4rem] animate-ping" />

        {/* Floating Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 border-t-4 border-l-4 border-purple-500 rotate-45 animate-bounce" />
          <div className="absolute top-32 right-12 w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          <div className="absolute bottom-10 left-24 w-10 h-0.5 bg-purple-400 animate-bounce" />
          <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-purple-300 animate-ping" />
        </div>

        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Sowmya"
          className="w-50 h-60 rounded-full z-10 mb-6 border-4 border-purple-500 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Heading and Subtext */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Hi, I'm Sowmya Laveti
        </motion.h1>

        <motion.p
          className="text-lg text-gray-400 mt-4 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Frontend Developer | Passionate about building intuitive UIs
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 z-10 mt-6">
  <motion.a
    href="#contact"
    className="inline-block px-6 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-white transition"
    whileHover={{ scale: 1.05 }}
  >
    Contact Me
  </motion.a>

  <motion.a
    href="/portfolio1/Sowmya_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-white transition"
    whileHover={{ scale: 1.05 }}
  >
    View Resume
  </motion.a>
</div>
      </section>
    </div>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-black">
        <h2 className="text-3xl font-semibold text-purple-400 text-center mb-10">Skills</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto">
          <img src={skillIcon} alt="Skills Icon" className="w-80 h-80 rounded-lg shadow-lg object-cover" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-xl text-sm text-white font-semibold shadow-lg hover:scale-110 transition transform hover:shadow-purple-500/40 flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-center">
        <h2 className="text-3xl font-semibold text-purple-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md border border-white/10 hover:shadow-purple-500/30 transition" whileHover={{ scale: 1.05 }}>
            <img src={ninjachatImg} alt="NinjaChat" className="rounded mb-4 shadow" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">NinjaChat</h3>
            <p className="text-gray-300 text-sm">
              Real-time chat app using Vue.js, Node.js, Vuex, and Ably. Includes notifications, flow builder, and agent monitoring.
            </p>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md border border-white/10 hover:shadow-indigo-500/30 transition" whileHover={{ scale: 1.05 }}>
            <img src={ninjacaptureImg} alt="NinjaCapture" className="rounded mb-4 shadow" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">NinjaCapture</h3>
            <p className="text-gray-300 text-sm">
              Screenshot and screen recording tool with webcam, annotation, and privacy controls.
            </p>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-md border border-white/10 hover:shadow-blue-500/30 transition" whileHover={{ scale: 1.05 }}>
            <img src={botupImg} alt="BotUp" className="rounded mb-4 shadow" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">BotUp</h3>
            <p className="text-gray-300 text-sm">
              AI chatbot builder with CRM export, live handoff, and scheduling across multi-platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-center">
      <h2 className="text-3xl font-semibold text-purple-400 mb-10">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md border border-white/10 hover:shadow-purple-500/30 transition gap-6"
          whileHover={{ scale: 1.03 }}
        >
          <img src={csu} alt="Education" className="w-24 h-24 object-contain" />
          <div className="text-left">
            <h3 className="text-xl font-bold text-purple-300">Cleveland State University</h3>
            <p className="text-gray-300 text-sm mt-1">Master of Science in Computer Science and Engineering</p>
            <p className="text-gray-400 text-xs mt-1">GPA: 3.5/4.0</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md border border-white/10 hover:shadow-indigo-500/30 transition gap-6"
          whileHover={{ scale: 1.03 }}
        >
          <img src={gvpcew} alt="Education" className="w-24 h-24 object-contain" />
          <div className="text-left">
            <h3 className="text-xl font-bold text-purple-300">Gayatri Vidya Parishad College of Engineering for Women (JNTU Kakinada)</h3>
            <p className="text-gray-300 text-sm mt-1">Bachelor of Technology in Computer Science and Engineering</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="px-6 pt-10 pb-20 bg-black text-center">
        <h2 className="text-3xl font-semibold text-purple-400 mb-8">Contact</h2>
       
        <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-md border border-white/10">
        <p className="text-gray-400 mb-6 italic">
  🚀 Let's turn pixels into purpose — whether you're building, brainstorming, or just browsing, my inbox is always open!
</p>
        <motion.p className="flex items-center justify-center gap-3 text-gray-300 mb-4" whileHover={{ scale: 1.05 }}>
          <Mail className="w-5 h-5 text-purple-400" />
          <a href="mailto:sowmyalaveti4229@gmail.com" className="hover:underline">sowmyalaveti4229@gmail.com</a>
        </motion.p>
        <motion.p className="flex items-center justify-center gap-3 text-gray-300 mb-4" whileHover={{ scale: 1.05 }}>
          <Linkedin className="w-5 h-5 text-purple-400" />
          <a href="https://www.linkedin.com/in/sowmya-laveti-779a61153/" target="_blank" className="hover:underline">LinkedIn</a>
        </motion.p>
        <motion.p className="flex items-center justify-center gap-3 text-gray-300" whileHover={{ scale: 1.05 }}>
          <Phone className="w-5 h-5 text-purple-400" />
          <span>2162552607</span>
        </motion.p>
      </div>
    </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-black">
        <p>&copy; 2025 Sowmya Laveti. All rights reserved.</p>
      </footer>
    </div>
  );
}

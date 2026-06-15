import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-cyan-400 uppercase font-semibold tracking-wider">
          Get In Touch
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          Contact<span className="text-cyan-400">.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-[#0d1540] rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>

            <p className="text-gray-300 leading-8 mb-8">
              If you would like to learn more about my work or anything else,
              please feel free to contact me.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl">📧</span>
                <span>moeurkkimsour@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl">
                  <Send size={18} />
                </span>
                Telegram :
                <a
                  href="https://t.me/moeurkkimsour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 underline text-blue-300"
                >
                  @moeurkkimsour
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl">📱</span>
                <span>+855 16 43 91 44</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-xl">📍</span>
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

          {/* Contact Form 02 */}
          <div className="bg-[#0d1540] rounded-3xl p-8 border border-cyan-500/20">
          <h2 className="text-xl font-bold">Other Platforms Contact</h2><br />
          <div className="space-y-5">
              <div className="flex items-center gap-4">
                    <span className="text-cyan-400 text-xl">💼</span>
                    <span>LinkIn Account :
                        <a 
                            href="www.linkedin.com/in/moeurk-kimsour-4553803bb" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1 text-blue-300 underline"
                        >
                            linkedin.com/in/moeurk-kimsour
                        </a> 
                    </span>
              </div>

              <div className="flex items-center gap-4">
                    <span className="text-cyan-400 text-xl">🐙</span>
                    <span>Github 
                        <a 
                            href="https://github.com/Chandae24" 
                            target="_blank" 
                            className="text-blue-300 underline"
                        >
                            github.com/Chandae24
                        </a> 
                    </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio } from "lucide-react";
import Navbar from "../layout/Navbar";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const animateBackground = async () => {
      while (true) {
        await controls.start({
          backgroundColor: ["rgba(79, 70, 229, 0.8)", "rgba(147, 51, 234, 0.8)", "rgba(37, 99, 235, 0.8)"],
          transition: { duration: 5, repeat: Infinity, repeatType: "mirror" },
        });
      }
    };

    animateBackground();
  }, [controls]);

  return (
    <motion.div
      className="h-screen overflow-hidden rounded-3xl m-2 md:m-5 relative"
     
      animate={controls}
    >
      <Navbar />
      <div className="container relative pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Connecting You to World-Class Healthcare,{" "}
              <span className="text-white">Anytime, Anywhere</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Seamless Telehealth Solutions Across 30 Countries
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={toggleModal} size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary/10 absolute -right-20 -top-20 blur-3xl" />
            <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border p-8">
              <img
                src="/images/med.jpg"
                alt="Telehealth Consultation"
                className="w-full rounded-lg mb-6"
              />
              <div className="flex items-center gap-4 text-sm">
                <Radio className="text-primary animate-pulse" />
                <span>Connecting Patients with Specialists Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Get Started Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleModal} />
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Get Started</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
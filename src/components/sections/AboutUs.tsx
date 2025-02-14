import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Lightbulb } from "lucide-react";

const aboutSections = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting patients with specialists across 30 countries, ensuring healthcare access worldwide."
  },
  {
    icon: Heart,
    title: "Patient-Centric Care",
    description: "Dedicated to enhancing patient experiences with personalized and compassionate telehealth solutions."
  },
  {
    icon: Lightbulb,
    title: "Innovation in Telehealth",
    description: "Leveraging advanced technology for remote monitoring, mental health support, and seamless EHR integration."
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            About HealthBridge Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Transforming healthcare delivery through innovative telehealth technology. 
            Our mission is to enhance healthcare accessibility and quality worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-muted/10 rounded-xl shadow-md"
            >
              <section.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
              <p className="text-muted-foreground">{section.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}

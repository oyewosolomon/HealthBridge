import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} HealthBridge Solutions. All Rights Reserved.
          </p>
          <nav className="mt-4 space-x-4">
            <a href="#about" className="text-muted-foreground hover:text-primary">About Us</a>
            <a href="#services" className="text-muted-foreground hover:text-primary">Services</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}

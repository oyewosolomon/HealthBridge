import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, BarChart3, Brain, Zap, Globe, Clock, ShieldCheck, Users } from "lucide-react";

const primaryFeatures = [
  {
    icon: Boxes,
    title: "Remote Monitoring",
    description: "Track chronic conditions with real-time health data, improving patient outcomes and reducing hospital visits."
  },
  {
    icon: BarChart3,
    title: "Mental Health Support",
    description: "Access licensed therapists and mental health specialists anytime, anywhere through secure video consultations."
  },
  {
    icon: Brain,
    title: "Specialist Access",
    description: "Connect with specialists across 30 countries for expert medical advice and consultations without travel barriers."
  },
  {
    icon: Zap,
    title: "EHR Integration",
    description: "Seamlessly integrates with electronic health records for efficient care management and continuity of treatment."
  }
];

const secondaryFeatures = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting 100,000+ consultations monthly across 30 countries with multilingual interface and specialists."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock access to healthcare professionals for urgent consultations and peace of mind."
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security and privacy protocols ensuring all patient data remains protected and confidential."
  },
  {
    icon: Users,
    title: "Family Accounts",
    description: "Manage healthcare for the entire family with unified accounts and comprehensive health histories."
  }
];

export default function Features() {
  return (
    <>
      {/* Hero Stats Section */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="border rounded-xl p-8">
          <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">HealthBridge Solutions</div>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-4">
              Transforming Healthcare Access Through Advanced Telehealth Technology
            </h1>
            <div className="flex justify-end">
              <button className="flex items-center text-indigo-500 border border-indigo-500 rounded-md px-4 py-2">
                Schedule Demo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column with stats cards */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-indigo-600">100k+</div>
                    <div className="text-gray-500 text-sm">Monthly Consultations</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Healthcare Access</h3>
                <p className="text-gray-600 text-sm">
                  Facilitating over 100,000 consultations monthly, connecting patients to care worldwide.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-indigo-600">30</div>
                    <div className="text-gray-500 text-sm">Countries Served</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">International Specialist Network</h3>
                <p className="text-gray-600 text-sm">
                  Access to specialist physicians across 30 countries, breaking down geographical barriers.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-indigo-600">1M+</div>
                    <div className="text-gray-500 text-sm">Patients Served</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Patient Care</h3>
                <p className="text-gray-600 text-sm">
                  Trusted by over a million patients for chronic condition management and specialist care.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-indigo-600">98%</div>
                    <div className="text-gray-500 text-sm">Patient Satisfaction</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Exceptional Care Quality</h3>
                <p className="text-gray-600 text-sm">
                  Maintaining a 98% patient satisfaction rate through accessible, high-quality care.
                </p>
              </div>
            </div>

            {/* Right column with platform image */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden h-full bg-gradient-to-br from-indigo-50 to-indigo-700 flex items-center justify-center">
                <div className="p-6 text-center">
                  <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-md">
                    <Brain className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">HealthBridge Platform</h3>
                  <p className="text-gray-600 text-sm">
                    Connecting patients with specialists through innovative telehealth technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <section id="core-features" className="py-24 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Telehealth Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connecting patients with specialists worldwide, enhancing healthcare access and efficiency with over 100,000 monthly consultations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Remote Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Boxes className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Remote Monitoring</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Track chronic conditions with real-time health data, improving patient outcomes and reducing hospital visits.
                </p>
                <div className="bg-indigo-50 text-gray-600 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Continuous vital sign monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Early intervention alerts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Patient-reported outcome tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Mental Health Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <BarChart3 className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Mental Health Support</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Access licensed therapists and mental health specialists anytime, anywhere through secure video consultations.
                </p>
                <div className="bg-indigo-50 text-gray-600 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>On-demand therapy sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Specialized anxiety and depression care</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Crisis intervention resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Specialist Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Brain className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Specialist Access</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Connect with specialists across 30 countries for expert medical advice and consultations without travel barriers.
                </p>
                <div className="bg-indigo-50 text-gray-600 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Global network of medical specialists</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Multilingual consultation options</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Second opinion services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* EHR Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Zap className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">EHR Integration</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Seamlessly integrates with electronic health records for efficient care management and continuity of treatment.
                </p>
                <div className="bg-indigo-50 text-gray-600 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Secure data exchange protocols</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive medical history access</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Interoperability with major EHR systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section id="additional-features" className="py-24 bg-indigo-600 text-white rounded-3xl m-2 md:m-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Elevating Healthcare Delivery
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Advanced features designed to provide accessible, secure, and continuous care across borders and time zones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
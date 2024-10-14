"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Meteors } from "../custom_components/ui/meteors";
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const ConsultingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Meteors number={20} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-orbitron">
          1:1 AI Coaching & Consulting
        </h1>
        <p className="text-xl mb-12">
          Unlock your potential with personalized AI guidance and expert insights.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden"
        >
          <h2 className="text-2xl font-bold mb-4 font-orbitron">What You'll Get</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Personalized AI strategy development</li>
            <li>Expert guidance on implementing AI in your business</li>
            <li>Insights into cutting-edge AI technologies</li>
            <li>Tailored advice for your specific industry and challenges</li>
          </ul>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Book a Session
          </Button>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-blue-500 rounded-full opacity-50 blur-xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden"
        >
          <h2 className="text-2xl font-bold mb-4 font-orbitron">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Schedule your 1:1 session</li>
            <li>Complete a pre-session questionnaire</li>
            <li>Join the video call with your AI expert</li>
            <li>Receive a personalized action plan</li>
            <li>Follow-up support and resources</li>
          </ol>
          <div className="flex items-center justify-center">
            <Calendar className="mr-2" />
            <span>60-minute sessions</span>
          </div>
          <div className="absolute top-0 left-0 -mt-4 -ml-4 h-16 w-16 bg-purple-500 rounded-full opacity-50 blur-xl"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 font-orbitron">Ready to Transform Your AI Journey?</h2>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Schedule Your Consultation
        </Button>
      </motion.div>
    </div>
  );
};

export default ConsultingPage;
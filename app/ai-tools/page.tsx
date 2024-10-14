"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Add this import statement
import { Meteors } from "../custom_components/ui/meteors";

const AIToolsPage: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen  text-white relative overflow-hidden">
      <Meteors number={20} />
      
      {/* Header Section */}
      <motion.section 
        className="text-center py-20 px-5 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4 font-orbitron">AI Tools and Resources</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Explore cutting-edge GPT-powered tools, automation scripts, and integration guides to propel your projects into the future.
        </p>
      </motion.section>

      {/* GPT Tools Section */}
      <motion.section 
        className="w-full max-w-6xl mx-auto mb-20 px-5"
        style={{ y: y1 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-orbitron">GPT-Powered Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">AI Content Generator</CardTitle>
              <CardDescription>Generate content using GPT-4 AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Generate blog posts, product descriptions, or marketing content using GPT-4 AI. Just input your topic or keywords, and let AI do the rest.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/ai-tools/content-generator">Try It Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">AI Chatbot Builder</CardTitle>
              <CardDescription>Build your own GPT-powered chatbot</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Build your own customer support chatbot using GPT. Choose a template, customize the responses, and integrate it into your site.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/ai-tools/chatbot-builder">Build a Chatbot</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.section>

      {/* Automation Scripts Section */}
      <motion.section 
        className="w-full max-w-6xl mx-auto mb-20 px-5"
        style={{ y: y2 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-orbitron">Automation Scripts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Python Automation Scripts</CardTitle>
              <CardDescription>Pre-built Python scripts for task automation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Access pre-built Python scripts for automating repetitive tasks like email handling, data scraping, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary">
                <Link href="/ai-tools/python-scripts">Explore Python Scripts</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">JavaScript Automation Scripts</CardTitle>
              <CardDescription>Ready-to-use JavaScript scripts for web automation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Automate tasks in your web apps with our ready-to-use JavaScript scripts for handling forms, data, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary">
                <Link href="/ai-tools/javascript-scripts">Explore JavaScript Scripts</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.section>

      {/* API Integration Guide Section */}
      <motion.section 
        className="w-full max-w-6xl mx-auto mb-20 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 font-orbitron">OpenAI API Access Guide</h2>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Integrate GPT into Your Application</CardTitle>
            <CardDescription>Step-by-step guide for OpenAI API integration</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-400">
              Follow our step-by-step guide to integrate OpenAI's GPT API into your application. Automate workflows and enhance your projects with the power of AI.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="default">
              <Link href="/ai-tools/api-guide">Access the Guide</Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.section>
    </div>
  );
};

export default AIToolsPage;
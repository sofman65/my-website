"use client"
import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Hand } from 'lucide-react';

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid max-w-2xl mx-auto grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Stay updated with the latest insights in AI, entrepreneurship, and wealth generation strategies.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row max-w-md gap-y-4 sm:gap-x-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Subscribe
              </Button>
            </form>
          </div>
          <dl className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Get access to our weekly articles covering the latest trends in AI and entrepreneurship.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Hand className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We respect your inbox. You'll only receive valuable content, no spam.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div 
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" 
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        ></div>
      </div>
    </section>
  );
};

export default Newsletter;

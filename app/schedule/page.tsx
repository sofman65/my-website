"use client"

import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Meteors } from "../custom_components/ui/meteors";
import { motion } from "framer-motion";


const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen text-white py-[15rem] px-4  sm:px-6 lg:px-8 relative overflow-hidden">
      <Meteors number={20} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center font-orbitron">Schedule Your AI Consultation</h1>
        
        <Card className="bg-gray-300 ">
          <CardHeader>
            <CardTitle className="text-2xl font-orbitron">Select Your Preferred Date and Time</CardTitle>
            <CardDescription>Choose a date and time slot for your 1:1 AI coaching session</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="date" className="mb-2 block">Select Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="time" className="mb-2 block">Select Time</Label>
              <Select onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedDate && selectedTime && (
                <p className="mt-4 text-green-400">
                  You selected: {selectedDate.toDateString()} at {selectedTime}
                </p>
              )}
              
              <div className="mt-6">
                <Label htmlFor="name" className="mb-2 block">Your Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              
              <div className="mt-4">
                <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              
              <div className="mt-4">
                <Label htmlFor="topic" className="mb-2 block">Consultation Topic</Label>
                <Textarea id="topic" placeholder="Briefly describe what you'd like to discuss" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Book Consultation
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      
      <div className="mt-12 text-center">
        <p className="text-lg">
          Need to reschedule or have questions? <br />
          Contact us at <a href="business.spaceslam@gmail.com" className="text-blue-400 hover:underline">business.spaceslam@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
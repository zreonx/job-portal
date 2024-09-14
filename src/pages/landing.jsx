import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

// Carousel
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import companies from "../data/companies.json";
import faqs from "../data/faq.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-8 sm:gap-16 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='text-4xl flex font-semibold flex-col items-center justify-center tracking-tight sm:text-6xl lg:text-6xl'>
          Find Your Dream Job{" "}
          <div className='flex items-center flex-col md:flex-row'>
            <span>and get &nbsp;</span>
            <span className='text-8xl sm:text-9xl tracking-wider font-bold gradient-title uppercase'>
              Hired
            </span>
          </div>
        </h1>
        <p className='text-gray-300 mt-3 sm:mt-4 text-sm italic sm:text-xl tracking-wide'>
          "Explore thousands of job listings or find the perfect candidate"
        </p>
      </section>
      <div className='flex gap-4 justify-center items-center'>
        {/* Buttons */}
        <Link
          className={buttonVariants({ variant: "outline", size: "xl" })}
          to='/jobs'
        >
          Find Jobs
        </Link>
        <Link
          className={buttonVariants({ variant: "default", size: "xl" })}
          to='/jobs'
        >
          Post Job
        </Link>
      </div>

      {/* carousel */}
      <div className='carousel-container relative'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className='w-full py-10'
        >
          <CarouselContent className='flex gap-5 sm:gap-20 items-center'>
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                <img
                  src={path}
                  alt={name}
                  className='h-9 sm:h-14 object-contain'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Left Fade */}
        <div className='absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent dark:from-black to-transparent pointer-events-none'></div>

        {/* Right Fade */}
        <div className='absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent dark:from-black to-transparent pointer-events-none'></div>
      </div>

      {/* Banner */}
      <img src='/banner.jpeg' alt='banner' className='w-full' />
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications and more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications and find the best candidates</p>
          </CardContent>
        </Card>
      </section>

      {/* Accordion */}

      <div>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default LandingPage;

import React from 'react';
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <WidgetAboutDoctor
        aboutText="Board-certified family physician with 10+ years of experience in telehealth and preventive care."
        education={[
        {
                "college": "Harvard Medical School",
                "activity": "MD"
        },
        {
                "college": "Johns Hopkins University",
                "activity": "Residency"
        }
]}
        hospitals={[
        "Massachusetts General Hospital",
        "Johns Hopkins Hospital"
]}
        certificates={[
        "Board Certified Family Medicine",
        "Telemedicine Certification"
]}
        languages={[
        "English",
        "Spanish",
        "French"
]}
        className=""
      />
      <WidgetProfile
        doctorName="Dr. Nathan Gelfand"
        specialty="Family Medicine"
        patients="2,500+"
        experience="10+ years"
        rating="4.9"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
        className=""
      />
      <WidgetServicesAndConditions
        specializedServices={[
        {
                "name": "Mental Health",
                "icon": "🏥"
        }
]}
        conditions={[
        "Anxiety"
]}
        className=""
      />
      <WidgetTestimonialCarousel
        testimonials={[
        {
                "author": "Sarah J.",
                "age": 35,
                "condition": "Diabetes Management",
                "rating": 5,
                "quote": "Dr. Smith is amazing! Very thorough and caring."
        }
]}
        overallRating={4.9}
        totalReviews={127}
        recommendedRate={98}
        className=""
      />
    </main>
  );
}
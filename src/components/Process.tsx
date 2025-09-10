import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  UserPlus,
  Search,
  MessageSquare,
  CheckCircle,
  Receipt
} from 'lucide-react';
import { mockData } from '@/mock';

const iconComponents = {
  UserPlus,
  Search,
  MessageSquare,
  CheckCircle,
  Receipt
};

const Process = () => {
  return (
    <section id="process" className="py-20 bg-brand-gainsboro/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with Swift Trucking is simple. Our streamlined process
            gets you moving fast and earning more.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-brand-silver"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {mockData.process.map((step, index) => {
              const IconComponent = iconComponents[step.icon];
              return (
                <div key={step.id} className="relative">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.id}</span>
                  </div>

                  <Card className="bg-white border-brand-gainsboro hover:border-brand-primary transition-all duration-300 hover:shadow-lg text-center">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <IconComponent className="w-6 h-6 text-brand-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-brand-primary">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  {/* Arrow for mobile */}
                  {index < mockData.process.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <div className="w-6 h-6 border-r-2 border-b-2 border-brand-silver transform rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful owner-operators who trust Swift Trucking
            to maximize their revenue and minimize their headaches.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-4 rounded-lg btn-hover inline-flex items-center"
          >
            Start Your Free Trial
            <UserPlus className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
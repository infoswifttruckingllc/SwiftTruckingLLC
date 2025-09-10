import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = `New Quote Request from ${data.firstName} ${data.lastName}`;
    const body = `
      First Name: ${data.firstName}
      Last Name: ${data.lastName}
      Company Name: ${data.company}
      Email Address: ${data.email}
      Phone Number: ${data.phone}
      MC Number: ${data.mcNumber}
      DOT Number: ${data.dotNumber}
      Equipment Type: ${data.equipmentType}
      Message: ${data.message}
    `;

    window.location.href = `mailto:info@swifttruckingllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Redirecting to your email client...",
      description: "Please complete sending the message in your email application.",
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-section-gradient">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our dispatch team today and start maximizing your trucking revenue.
            Get personalized service and profitable loads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-card p-8">
            <h3 className="text-2xl font-heading font-semibold text-card-foreground mb-6">
              Get a Quote Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  className="mt-1"
                  placeholder="ABC Trucking LLC"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1"
                    placeholder="(330) 203-1165"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mcNumber">MC Number (Optional)</Label>
                  <Input
                    id="mcNumber"
                    name="mcNumber"
                    className="mt-1"
                    placeholder="MC-123456"
                  />
                </div>
                <div>
                  <Label htmlFor="dotNumber">DOT Number (Optional)</Label>
                  <Input
                    id="dotNumber"
                    name="dotNumber"
                    className="mt-1"
                    placeholder="12345678"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="equipmentType">Equipment Type</Label>
                <select
                  id="equipmentType"
                  name="equipmentType"
                  className="mt-1 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="">Select Equipment Type</option>
                  <option value="dry-van">Dry Van</option>
                  <option value="reefer">Reefer</option>
                  <option value="flatbed">Flatbed</option>
                  <option value="stepdeck">Stepdeck/Conestoga</option>
                  <option value="box-truck">Box Truck</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  className="mt-1"
                  placeholder="Tell us about your trucking operation and dispatch needs..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                size="lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="service-card text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">24/7 Dispatch Support</p>
                <a href="tel:+13302031165" className="text-primary font-medium hover:text-primary-dark">
                  (330) 203-1165
                </a>
              </div>

              <div className="service-card text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">Quick Response</p>
                <a href="mailto:info@swifttruckingllc.com" className="text-primary font-medium hover:text-primary-dark">
                  Info@swifttruckingllc.com
                </a>
              </div>

              <div className="service-card text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  1001 S MAIN ST #704, KALISPELL, MT 59901
                </p>
              </div>

              <div className="service-card text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  24/7 Dispatch<br />
                  Office: Mon-Fri 8AM-6PM CST
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4">Emergency Dispatch</h3>
              <p className="mb-4">
                Need immediate assistance with a load or emergency situation?
                Our 24/7 emergency dispatch line is always available.
              </p>
              <a
                href="tel:+13302031165"
                className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency: (330) 203-1165
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
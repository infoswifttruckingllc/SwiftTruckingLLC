import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { mockData } from '@/mock';

export const Careers = () => {
    const jobs = mockData.jobs;

    return (
        <div className="bg-background">
            <section className="bg-primary/5 py-20 sm:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary tracking-tight">
                        Join Our Team
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We are always looking for talented individuals to join Swift Trucking LLC. Explore our open positions and find your next career opportunity.
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-heading text-foreground mb-12 text-center">
                        Open Positions
                    </h2>
                    {jobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {jobs.map((job) => (
                                <Card key={job.id} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-heading">{job.title}</CardTitle>
                                        <CardDescription className="text-primary font-semibold">{job.department}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="space-y-4 text-muted-foreground">
                                            <div className="flex items-center">
                                                <MapPin className="h-5 w-5 mr-3" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Briefcase className="h-5 w-5 mr-3" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-5 w-5 mr-3" />
                                                <span>Posted on {job.postedDate}</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-foreground/80">{job.description}</p>
                                    </CardContent>
                                    <div className="p-6 pt-0">
                                        <a
                                            href={`mailto:info@swifttruckingllc.com?subject=Application for ${job.title}`}
                                            className="inline-block w-full"
                                        >
                                            <Button className="w-full">Apply Now</Button>
                                        </a>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-muted-foreground">No open positions at the moment. Please check back later.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
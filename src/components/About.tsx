import React from 'react';
import { FileHeart, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300 relative overflow-hidden">

            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#232021] dark:text-white css-animate-slide">
                        Behind the{' '}
                        <span className="block text-primary italic font-serif tracking-normal lowercase text-5xl md:text-7xl mt-[-0.2em] relative z-10">engine</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Story */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-[#232021]/80 dark:text-white/80 css-animate-slide">
                            <p className="text-xl md:text-2xl font-serif italic text-[#232021] dark:text-white leading-relaxed mb-8 border-l-4 border-primary pl-6">
                                "I believe technology shouldn't just automate tasks—it should amplify human creativity and create memorable experiences."
                            </p>

                            <div className="space-y-6 text-lg">
                                <p>
                                    My journey didn't start with code. It started with a camera and a desire to tell stories. As a student videographer and content creator, I learned the importance of audience engagement, narrative structure, and visual pacing. I realized early on that the best products are fundamentally stories we interact with.
                                </p>
                                <p>
                                    As I delved deeper into the digital world, I discovered the power of automation and artificial intelligence. The transition from capturing moments to building intelligent systems felt natural to me. Both require an eye for detail, an understanding of the user journey, and a touch of creativity.
                                </p>
                                <p>
                                    Today, I build AI agents, design modern architectures, and craft digital experiences that feel both intuitive and premium. I thrive on the intersection of design (UI/UX) and intelligent backend engineering.
                                </p>
                            </div>
                        </div>

                        {/* Micro-Credentials / Details */}
                        <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-[#232021]/10 dark:border-white/10 css-animate-slide">
                            <div className="flex items-center gap-3 text-[#232021]/70 dark:text-white/70">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>Germany</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#232021]/70 dark:text-white/70">
                                <GraduationCap className="w-5 h-5 text-primary" />
                                <span>Continuous Learner</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#232021]/70 dark:text-white/70">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <span>AI Enthusiast</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#232021]/70 dark:text-white/70">
                                <FileHeart className="w-5 h-5 text-primary" />
                                <span>Creative Problem Solver</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image Placeholder */}
                    <div className="lg:col-span-5 relative css-animate-slide" style={{ "--index": "1", "--count": "2" } as any}>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#232021]/5 dark:bg-white/5 border border-[#232021]/10 dark:border-white/10 group">
                            <img src="/Gemini_Generated_Image_bxfurobxfurobxfu.png" alt="Alejandro Gómez Cano at work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(circle_at_center,var(--color-primary)_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 dark:opacity-40 z-[-1]"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

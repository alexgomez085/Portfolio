import React from 'react';

export default function AIAutomation() {
    return (
        <section id="ai-automation" className="py-24 px-6 md:px-12 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#232021] dark:text-white css-animate-slide">
                        AI Automation
                        <span className="block text-primary italic font-serif tracking-normal lowercase text-5xl md:text-7xl mt-[-0.2em] relative z-10">for marketing</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mt-6 css-animate-slide">
                        Production-ready workflows built with n8n, Supabase, and Claude. Every project shipped, measured, and running in production.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-[#F6F6F6] dark:bg-[#232021] group hover:border-primary transition-all duration-300 css-animate-card" style={{ "--index": "1", "--count": "2" } as React.CSSProperties}>
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10">
                            <img src="/diagrams/content-script-generator.svg" alt="Content Script Generator architecture diagram" className="w-full h-full object-contain p-4" />
                        </div>
                        
                        <div className="mt-6 space-y-4">
                            <h3 className="text-2xl font-bold text-[#232021] dark:text-white">Content Script Generator</h3>
                            
                            <div>
                                <span className="uppercase tracking-widest text-xs text-primary font-bold block mb-1">PROBLEM</span>
                                <p className="text-[#232021]/80 dark:text-white/80">
                                    A content team was spending 6+ hours a week on ideation and first drafts before a single camera rolled.
                                </p>
                            </div>
                            
                            <div>
                                <span className="uppercase tracking-widest text-xs text-primary font-bold block mb-2">STACK</span>
                                <div>
                                    {["n8n", "Supabase", "Claude API", "Webhook"].map((tech) => (
                                        <span key={tech} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 mr-2 mb-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <span className="uppercase tracking-widest text-xs text-primary font-bold block mb-1">RESULT</span>
                                <p className="text-[#232021]/80 dark:text-white/80">
                                    Brand-aligned first-draft scripts generated in under 2 minutes at ~$0.02 per output. Creator reviews and refines instead of starting from scratch.
                                </p>
                            </div>
                        </div>

                        <div className="text-xs italic text-gray-500 dark:text-gray-600 pt-4 mt-6 border-t border-black/5 dark:border-white/5">
                            Client details confidential — architecture available on request.
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-[#F6F6F6] dark:bg-[#232021] group hover:border-primary transition-all duration-300 css-animate-card" style={{ "--index": "2", "--count": "2" } as React.CSSProperties}>
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10">
                            <img src="/diagrams/b-roll-workflow.svg" alt="B-Roll Creation Workflow architecture diagram" className="w-full h-full object-contain p-4" />
                        </div>
                        
                        <div className="mt-6 space-y-4">
                            <h3 className="text-2xl font-bold text-[#232021] dark:text-white">B-Roll Creation Workflow</h3>
                            
                            <div>
                                <span className="uppercase tracking-widest text-xs text-primary font-bold block mb-1">PROBLEM</span>
                                <p className="text-[#232021]/80 dark:text-white/80">
                                    Manual prompt writing and asset management was killing turnaround time on video production.
                                </p>
                            </div>
                            
                            <div>
                                <span className="uppercase tracking-widest text-xs text-primary font-bold block mb-2">STACK</span>
                                <div>
                                    {["Telegram", "n8n", "Claude API", "Image Gen", "Video Gen", "Supabase"].map((tech) => (
                                        <span key={tech} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 mr-2 mb-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <span className="uppercase tracking-widest text-xs text-primary font-bold block mb-1">RESULT</span>
                                <p className="text-[#232021]/80 dark:text-white/80">
                                    Brief-to-B-Roll in a single Telegram message. Human-in-the-loop approval before any generation, final assets delivered straight to Drive.
                                </p>
                            </div>
                        </div>

                        <div className="text-xs italic text-gray-500 dark:text-gray-600 pt-4 mt-6 border-t border-black/5 dark:border-white/5">
                            Client details confidential — architecture available on request.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

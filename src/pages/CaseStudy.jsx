import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Layers, MousePointer2, PenTool } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const CaseStudy = () => {
    const { id } = useParams();
    const project = PROJECTS.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center px-4">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    // Content helper
    const getContent = () => {
        if (project.caseStudy) {
            return project.caseStudy;
        }

        // This would typically come from the project data, but we'll generate it generically based on the plan
        return [
            {
                heading: "Project Overview",
                body: `The ${project.title} project was initiated to solve key challenges in the ${project.category} space. We aimed to create a solution that not only met user needs but also established a distinct visual identity.`
            },
            {
                heading: "Strategy & UX Research",
                body: "Our process began with deep market research and user interviews. We discovered that clarity and trust were paramount. Thus, we focused on a clean, accessible interface with reassuring visual cues."
            },
            {
                heading: "Design Execution",
                body: "Using industry-standard tools like Figma and Adobe Creative Suite, we crafted a design system that scales. The color palette was chosen to evoke reliability, while the typography ensures readability across all devices."
            },
            {
                heading: "Final Outcome",
                body: "The final deliverable was a comprehensive design package including high-fidelity prototypes and a style guide. Early user testing indicates a significant improvement in user engagement and satisfaction."
            }
        ];
    };

    const content = getContent();

    return (
        <div className="py-24 px-6 relative z-10 pt-32 max-w-4xl mx-auto">
            <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 mb-8 flex items-center gap-2 font-medium transition-colors"
            >
                <ArrowLeft size={20} /> Back to Portfolio
            </Link>

            <div className="space-y-4 mb-12">
                <h1 className="text-5xl md:text-6xl font-bold font-header tracking-tighter text-black">{project.title}</h1>
                <p className="text-xl text-blue-600 font-medium">{project.category} Case Study</p>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Main Image */}
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src={project.imageUrl}
                    alt={`Main visual for ${project.title}`}
                    className="w-full object-cover aspect-[4/3]"
                />
            </div>

            {/* Deliverables Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-blue-600 mb-3"><Layers size={20} /></div>
                    <h4 className="font-bold text-black">Design System</h4>
                    <p className="text-sm text-gray-500">Components & Guidelines</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-blue-600 mb-3"><MousePointer2 size={20} /></div>
                    <h4 className="font-bold text-black">Prototyping</h4>
                    <p className="text-sm text-gray-500">High-fidelity Interactions</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-blue-600 mb-3"><PenTool size={20} /></div>
                    <h4 className="font-bold text-black">Visuals</h4>
                    <p className="text-sm text-gray-500">Assets & Icons</p>
                </div>
            </div>

            {/* Content Sections */}
            {Array.isArray(content) ? (
                // Legacy Array Format (Logo Projects)
                content.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-3xl font-bold mb-4 border-l-4 border-blue-600 pl-4 text-black">{section.heading}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{section.body}</p>
                    </div>
                ))
            ) : (
                // New Object Format (UI/UX Projects)
                <div className="space-y-16">
                    {/* Overview */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4 text-black">Project Overview</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">{content.overview}</p>

                            <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Objective</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">{content.objective}</p>
                        </div>
                        <div className="space-y-6 bg-zinc-50 p-8 rounded-2xl border border-zinc-100 h-fit">
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-500 mb-2">My Role</h4>
                                <p className="font-medium text-black">{content.role}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-500 mb-2">Tools Used</h4>
                                <p className="font-medium text-black">{content.tools}</p>
                            </div>
                            {project.figmaLink && (
                                <a
                                    href={project.figmaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors"
                                >
                                    View Figma Prototype
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Process */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-black">Design Process</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {content.process.split('→').map((step, i) => (
                                <div key={i} className="bg-white border border-zinc-200 p-6 rounded-xl text-center shadow-sm">
                                    <div className="text-4xl mb-2 opacity-10 font-bold">0{i + 1}</div>
                                    <div className="font-bold text-sm md:text-base">{step.trim()}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Outcome */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-black">Final Outcome</h3>
                        <p className="text-lg text-gray-700 leading-relaxed bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            {content.outcome}
                        </p>
                    </div>
                </div>
            )}

            <div className="text-center mt-20">
                <Link
                    to="/"
                    className="inline-flex px-8 py-4 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-colors items-center gap-2 text-black"
                >
                    <ArrowLeft size={18} /> Back to Portfolio
                </Link>
            </div>
        </div>
    );
};

export default CaseStudy;

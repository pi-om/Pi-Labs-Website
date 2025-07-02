import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const faqData = [
	{
		question: "What is pi-sense used for?",
		answer: "pi-sense helps investigators and agencies convert raw surveillance footage into forensic intelligence using AI. It automates detection, tracking, tampering analysis, and report generation.",
	},
	{
		question: "Can pi-sense detect tampering in CCTV videos?",
		answer: "Yes, pi-sense identifies gaps in timestamps, sudden scene changes, blackouts, and metadata mismatches to highlight possible tampering.",
	},
	{
		question: "Is the output from pi-sense court-admissible?",
		answer: "Yes. The system is designed to generate forensic-grade reports that preserve the chain of custody and are admissible in court.",
	},
	{
		question: "Can pi-sense search for a specific person in multiple videos?",
		answer: "Absolutely. Just upload a photo, and pi-sense will scan across video feeds to detect and track the person using advanced face embeddings.",
	},
	{
		question: "What kind of devices/videos can pi-sense analyze?",
		answer: "pi-sense supports video from CCTVs, bodycams, dashcams, smartphones, and even social media sources.",
	},
	{
		question: "Does pi-sense work in real-time?",
		answer: "Yes. pi-sense supports both real-time and post-event analysis depending on deployment requirements.",
	},
];

const whyCritical = [
	"Unmanageable volume of video evidence",
	"Manual analysis is slow and prone to errors",
	"Delayed Justice Due to Video Backlogs",
	"Tampered Videos Threaten Evidence Integrity",
	"Lack of Real-Time Intelligence Weakens Response",
	"Scalability Demands Technology, Not Manpower",
	"High Pendency Rate",
];

const rapidRise = [
	{ value: "2+ Petabytes", label: "of video generated daily by surveillance sources" },
	{ value: "1 Billion+", label: "CCTV cameras active globally and growing" },
	{ value: "~19.5 Billion", label: "camera devices (mobile, dashcams, bodycams) and growing" },
	{ value: "0.33", label: "forensic experts per 100,000 people in India" },
	{ value: "6–8 hours", label: "to analyze just 1 hour of video" },
	{ value: "90%", label: "of video evidence goes unanalysed" },
];

const features = [
	{ title: "Tampering & Authenticity Detection", desc: "Automatically identifies signs of tampering such as missing frames, blackouts, sudden scene changes, or timeline inconsistencies in CCTV footage." },
	{ title: "Timestamp & Metadata Analysis", desc: "Detects gaps in CCTV timestamps and mismatches between Exif metadata and video parameters to ensure authenticity." },
	{ title: "Face Recognition & Search", desc: "Search for a person in hours of video using a single photo, with high-accuracy facial embeddings for identity matching and tracking." },
	{ title: "Object & Activity Detection", desc: "Detects and tracks objects like weapons, vehicles, or people; flags suspicious movement patterns or activities in real time." },
	{ title: "License Plate Recognition", desc: "Automatically detects and extracts license plate numbers from vehicles using OCR, even in low-light or fast-motion scenarios." },
	{ title: "Natural Language Search Interface", desc: "Interact with the system via a ChatGPT-style interface — simply ask questions or give commands in plain language to find what you need." },
	{ title: "Intelligent Event Summarization", desc: "Summarizes long videos by extracting key frames and events, drastically reducing the time needed to review footage." },
	{ title: "Forensic-Ready Reporting", desc: "Generates standardized, court-admissible reports with timestamps, object markers, and tampering evidence clearly documented." },
];

const whoUses = [
	{
		title: "Forensic Labs & Cybercrime Cells",
		points: [
			"Analyze hours of CCTV footage",
			"Detect tampering in video files",
			"Generate court-admissible forensic reports",
			"Automate search for faces or objects",
		],
	},
	{
		title: "Defence & Intelligence Agencies",
		points: [
			"Monitor sensitive zones",
			"Track suspicious individuals or vehicles",
			"Detect manipulation",
		],
	},
	{
		title: "Law Enforcement Agencies",
		points: [
			"Track suspects",
			"Review footage to reconstruct crime scenes",
			"Detect missing footage or scene tampering",
			"Identify faces or number plates",
		],
	},
];

const whySense = [
	{ title: "Finish days of work in minutes", desc: "Reduces pendency in video-related cases." },
	{ title: "Detailed forensic reports and insights", desc: "Built for high volume, high speed, and high trust." },
	{ title: "Available for on-premise as well as from cloud", desc: "Flexible deployment for any organization." },
];

export default function PiSense() {
	const [open, setOpen] = useState<number | null>(null);
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/#products");
	};

	return (
		<>
			<Navbar />
			<div className="max-w-4xl mx-auto px-4 pt-6 mt-20 relative z-50">
				<button
					onClick={handleBack}
					className="flex items-center text-blue-600 hover:underline mb-4 pointer-events-auto"
					data-testid="back-button"
				>
					<svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
					Back
				</button>
			</div>
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-[#1a2236] to-[#232b43] text-white pt-20 pb-12 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<div className="flex justify-center items-center gap-2 mb-2">
						<img src="/Layer 2.svg" alt="pi labs" className="w-8 h-8" />
						<h1 className="text-4xl md:text-5xl font-bold">Sense</h1>
					</div>
					<div className="text-xl md:text-2xl text-[#ff4d4f] font-semibold mb-2">Transforming Video into Actionable Intelligence</div>
					<div className="text-lg md:text-xl mb-6">AI-Powered Video Analytics and Forensics Solution</div>
					<a href="#try" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow mb-8">Try pi-sense <ChevronRight className="inline ml-2 w-5 h-5" /></a>
				</div>
			</section>
			{/* Intro Paragraph */}
			<section className="bg-white py-8 px-4">
				<div className="max-w-2xl mx-auto text-center text-gray-800 text-lg mb-2">
					pi-sense is an advanced AI++ video analytics and forensics solution that converts hours of raw footage into forensic-grade insights in minutes. Designed for forensic labs, law enforcement, and intelligence agencies, pi-sense empowers investigators to detect, analyze, and act faster and smarter.
				</div>
			</section>
			{/* Why Video Analytics is Critical */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Why AI-Powered Video Analytics is Critical</h2>
					<div className="text-gray-600 mb-8">Manual review is slow, expensive, and prone to human error. Traditional methods can no longer keep up with the demand for timely and reliable insights.</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{whyCritical.map((item, i) => (
							<div key={item} className="bg-white rounded-xl shadow border border-gray-100 flex items-center gap-3 px-5 py-4">
								<CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
								<span className="text-gray-900 font-medium">{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* The Video Evidence Challenge */}
			<section className="bg-[#a52828] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">The Video Evidence Challenge: By the Numbers</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{rapidRise.map((stat, i) => (
							<div key={stat.value} className="bg-[#b93a3a] rounded-xl p-6 flex flex-col items-center justify-center min-h-[120px]">
								<div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.value}</div>
								<div className="text-white text-base font-medium text-center">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Features */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-8">pi-sense Features</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{features.map((f, i) => (
							<div key={f.title} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-blue-900 mb-1">{f.title}</div>
								<div className="text-gray-700 text-sm">{f.desc}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Who Uses */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-8">Who uses pi-sense?</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{whoUses.map((group) => (
							<div key={group.title} className="bg-white border border-gray-100 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-gray-900 mb-2">{group.title}</div>
								<ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
									{group.points.map((pt) => (
										<li key={pt}>{pt}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Why pi-sense */}
			<section className="bg-[#223a7a] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why pi-sense?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{whySense.map((item) => (
							<div key={item.title} className="bg-[#223a7a] border border-blue-400 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-white mb-1">{item.title}</div>
								<div className="text-blue-100 text-sm">{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Try pi-sense */}
			<section id="try" className="bg-white py-12 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Try pi-sense</h2>
					<div className="text-gray-700 mb-6">Ready to accelerate your investigations with AI-powered video forensics? Get started with pi-sense today.</div>
					<a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow">Request Demo</a>
				</div>
			</section>
			{/* FAQ */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
					<div className="space-y-4 text-left">
						{faqData.map((item, i) => (
							<div key={item.question} className="bg-white border border-gray-200 rounded-xl">
								<button
									className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-gray-900 focus:outline-none"
									onClick={() => setOpen(open === i ? null : i)}
									aria-expanded={open === i}
								>
									{item.question}
									{open === i ? (
										<ChevronUp className="w-5 h-5 text-blue-600" />
									) : (
										<ChevronDown className="w-5 h-5 text-blue-600" />
									)}
								</button>
								{open === i && (
									<div className="px-6 pb-5 text-gray-700 text-base border-t border-gray-100">
										{item.answer}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

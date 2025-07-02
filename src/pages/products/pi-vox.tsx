import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const faqData = [
	{
		question: "What is pi-vox?",
		answer: "pi-vox is an AI-powered speech intelligence tool that converts audio into text, separates speakers, transliterates scripts, and translates content in multiple Indian languages.",
	},
	{
		question: "Who should use pi-vox?",
		answer: "pi-vox is ideal for digital forensic labs, police departments, national security agencies, and intelligence analysts who deal with multilingual voice recordings.",
	},
	{
		question: "Can pi-vox process regional languages?",
		answer: "Yes, pi-vox supports Hindi, Punjabi, Bengali, Kashmiri, and Malayalam, with ongoing additions.",
	},
	{
		question: "How does speaker diarization help?",
		answer: "It identifies different speakers in an audio file, which is critical in analyzing conversations, assigning responsibility, and generating accurate reports.",
	},
	{
		question: "What file formats are supported?",
		answer: "Common audio formats such as MP3, WAV, and AAC are supported.",
	},
	{
		question: "Does pi-vox offer real-time processing?",
		answer: "pi-vox offers asynchronous processing for efficiency, but low-latency configurations are available for near real-time use.",
	},
	{
		question: "Can the outputs be used in court/legal reports?",
		answer: "Yes, all outputs are legally formatted with proper timestamps, speaker tags, and metadata for admissibility in court.",
	},
];

const whyCritical = [
	"Exponential Audio Data",
	"Multilingual Complexity",
	"Voice as Evidence",
	"Time-Critical Cases",
	"Speaker Attribution",
	"Interoperable Intelligence",
	"Translation Gaps",
];

const rapidRise = [
	{ value: "60%", label: "of law enforcement audio is in the local languages." },
	{ value: "70%", label: "of intelligence analysts say voice data review delays investigations." },
	{ value: "15%", label: "of recorded audio is manually reviewed." },
];

const features = [
	{ title: "Accurate Speech-to-Text", desc: "Breaks long-form audio into structured, searchable text across multiple languages with precise timestamps with special support for Indian languages." },
	{ title: "Speaker Diarization", desc: "Automatically detects and separates multiple speakers—know who said what and when." },
	{ title: "Intelligent Transliteration", desc: "Converts native script into Roman script while retaining phonetic accuracy—ideal for investigators unfamiliar with local languages." },
	{ title: "Seamless Translation", desc: "Translates audio content into Hindi and English, preserving tone and context for better comprehension." },
	{ title: "Unified Output Pipeline", desc: "All outputs—transcription, translation, and transliteration—are delivered via a single, easy-to-integrate API." },
	{ title: "Report Generator", desc: "Auto-generates downloadable PDFs of processed files for legal documentation and case archiving." },
];

const whoUses = [
	{
		title: "Forensic Labs",
		points: [
			"Extracts and transcribes voice evidence from seized devices during cybercrime or digital forensic investigations.",
		],
	},
	{
		title: "Law Enforcement Agencies",
		points: [
			"Analyzes multilingual call recordings, interrogation audio, and surveillance files to identify suspects and build evidence.",
		],
	},
	{
		title: "National Security & Defence",
		points: [
			"Deciphers intercepted communications in regional languages for threat identification and counter-terrorism operations.",
		],
	},
	{
		title: "Intelligence Analysts",
		points: [
			"Dissects long-form surveillance audio and speaker behavior to detect patterns, aliases, and insider threats.",
		],
	},
	{
		title: "Legal and Compliance Teams",
		points: [
			"Generates admissible transcripts and reports of recorded conversations for courtroom submission and legal review.",
		],
	},
];

const whyVox = [
	{ title: "Multi-lingual support", desc: "Handles Hindi, Bengali, Malayalam, Kashmiri, Punjabi, and more." },
	{ title: "Optimized for Noisy Audio", desc: "Performs well in real-world, low-quality recordings." },
	{ title: "Quick Turnaround", desc: "Process and analyze hours of audio in minutes." },
	{ title: "Integrated Insights", desc: "Everything from one interface—no tool switching." },
	{ title: "Scalable and Secure", desc: "Works across multiple clients with strict security protocols." },
];

export default function PiVox() {
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
						<h1 className="text-4xl md:text-5xl font-bold">Vox</h1>
					</div>
					<div className="text-xl md:text-2xl text-[#ff4d4f] font-semibold mb-2">From Voice to Verifiable Intelligence</div>
					<div className="text-lg md:text-xl mb-6">AI-powered Speech Intelligence Solution</div>
					<a href="#try" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow mb-8">Try pi-vox <ChevronRight className="inline ml-2 w-5 h-5" /></a>
				</div>
			</section>
			{/* Intro Paragraph */}
			<section className="bg-white py-8 px-4">
				<div className="max-w-2xl mx-auto text-center text-gray-800 text-lg mb-2">
					pi-vox is an advanced AI-powered speech intelligence solution by pi-labs, designed to transcribe, diarize, transliterate, and translate multilingual audio into actionable intelligence. Built for digital forensics, law enforcement, and national security applications, pi-vox bridges the gap between raw voice data and critical decision-making.
				</div>
			</section>
			{/* Why Speech Intelligence Matters Now More Than Ever? */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Why Speech Intelligence Matters Now More Than Ever?</h2>
					<div className="text-gray-600 mb-8">Exponential Audio Data: Investigators face hours of multilingual call recordings, intercepted communications, and audio files—manual review is no longer feasible.</div>
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
			{/* The Voice Data Explosion */}
			<section className="bg-[#a52828] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">The Voice Data Explosion: Growing, Unstructured & Underused</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">pi-vox Features</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">Who uses pi-vox?</h2>
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
			{/* Why pi-vox */}
			<section className="bg-[#223a7a] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why pi-vox?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{whyVox.map((item) => (
							<div key={item.title} className="bg-[#223a7a] border border-blue-400 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-white mb-1">{item.title}</div>
								<div className="text-blue-100 text-sm">{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Try pi-vox */}
			<section id="try" className="bg-white py-12 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Try pi-vox</h2>
					<div className="text-gray-700 mb-6">Ready to turn voice into actionable intelligence? Get started with pi-vox today.</div>
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

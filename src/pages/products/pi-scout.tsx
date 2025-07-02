import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const faqData = [
	{
		question: "What is pi-scout used for?",
		answer: "pi-scout is used to unify, analyze, and extract actionable intelligence from large volumes of structured and unstructured data for crime investigation, forensic analysis, and national security operations.",
	},
	{
		question: "Can pi-scout process data from CCTV, mobile, and cloud?",
		answer: "Yes. pi-scout supports multi-source ingestion including CCTV footage, drone data, mobile devices, and cloud storage.",
	},
	{
		question: "How does pi-scout help law enforcement agencies?",
		answer: "pi-scout automates data correlation, face/object recognition, and event linking—helping investigators reduce case resolution times and uncover hidden insights.",
	},
	{
		question: "Is pi-scout scalable for large investigations or national deployments?",
		answer: "Absolutely. Its modular and distributed architecture ensures seamless scaling across jurisdictions and operations.",
	},
	{
		question: "Does pi-scout maintain a chain of custody for digital evidence?",
		answer: "Yes. pi-scout provides a tamper-proof, audit-ready digital chain of custody for all ingested and analyzed data.",
	},
	{
		question: "How secure is the pi-scout platform?",
		answer: "pi-scout is built on secure, encrypted infrastructure with access control, user auditing, and compliance-ready frameworks.",
	},
];

const whyCritical = [
	"Data Overload structured and unstructured data",
	"Siloed Intelligence across formats and sources slows down investigations.",
	"Manual Effort leads to Delayed Outcomes",
	"Lack of inter-agency data sharing",
	"Investigations span devices, geographies, and timeframes",
	"Human Limitations.",
];

const rapidRise = [
	{ value: "70%", label: "of an investigator’s time is spent just organizing and connecting evidence" },
	{ value: "85%", label: "of agencies lack integrated tools to co-analyze videos, geolocation, and device intel" },
	{ value: "250GB+", label: "data generated per homicide case—most remains untouched" },
	{ value: "90%", label: "of digital evidence is never reviewed due to manual limitations" },
];

const features = [
	{ title: "Multi-Source Data Ingestion", desc: "Seamlessly integrates data from CCTV, mobile phones, drones, cloud drives, and more." },
	{ title: "AI-Powered Face & Object Recognition", desc: "Instantly detects and tags suspects, vehicles, weapons, and suspicious activity." },
	{ title: "Correlated Timeline Builder", desc: "Automatically connects people, places, and events for a visual investigation flow." },
	{ title: "Geo-Mapping with Heat Zones", desc: "Tracks suspect movement and activity clusters across locations in real time." },
	{ title: "Smart Evidence Linker", desc: "Detects and connects related evidence across cases—no more blind investigations." },
	{ title: "Digital Chain of Custody", desc: "Secure, audit-trail-backed evidence handling to ensure integrity and admissibility." },
	{ title: "Visual Case Dashboard", desc: "Customizable dashboards for analysts and officers with interactive case elements." },
];

const whoUses = [
	{
		title: "Law Enforcement Agencies",
		points: [
			"To expedite investigations and find leads faster",
		],
	},
	{
		title: "Forensic Labs",
		points: [
			"For deep data correlation, case building, and secure custody",
		],
	},
	{
		title: "Defence & National Security",
		points: [
			"For surveillance, intel fusion, and threat detection",
		],
	},
];

const whyScout = [
	{ title: "Unified Platform", desc: "One interface for investigating all data types and sources." },
	{ title: "AI-Driven Efficiency", desc: "Reduce effort, boost accuracy." },
	{ title: "Operational Readiness", desc: "Designed for field and command center use." },
	{ title: "Inter-Agency Collaboration", desc: "Break silos, enable secure data sharing." },
	{ title: "Future-Proof & Scalable", desc: "Adapts to mission needs and evolving threats." },
	{ title: "Compliance-Ready", desc: "Built to meet legal and audit standards." },
];

export default function PiScout() {
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
						<h1 className="text-4xl md:text-5xl font-bold">Scout</h1>
					</div>
					<div className="text-xl md:text-2xl text-[#ff4d4f] font-semibold mb-2">Unifying Data, Amplifying Insights, Enabling Action</div>
					<div className="text-lg md:text-xl mb-6">AI-powered Big Data Fusion and Analytics Platform</div>
					<a href="#try" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow mb-8">Try pi-scout <ChevronRight className="inline ml-2 w-5 h-5" /></a>
				</div>
			</section>
			{/* Intro Paragraph */}
			<section className="bg-white py-8 px-4">
				<div className="max-w-2xl mx-auto text-center text-gray-800 text-lg mb-2">
					pi-scout by pi-labs is an AI-powered investigation and analytics engine built for high-stakes environments like law enforcement, forensic labs, and national security. It fuses fragmented structured and unstructured data into a unified, actionable intelligence layer — accelerating decisions when every second counts.
				</div>
			</section>
			{/* Why Big Data Fusion & Analytics is Critical */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Why AI-Powered Big Data Fusion & Analytics is Critical</h2>
					<div className="text-gray-600 mb-8">Data Overload structured and unstructured data. Siloed Intelligence across formats and sources slows down investigations. Manual Effort leads to Delayed Outcomes. Lack of inter-agency data sharing. Investigations span devices, geographies, and timeframes. Human Limitations.</div>
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
			{/* When Data Overwhelms, Justice is Delayed */}
			<section className="bg-[#a52828] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">When Data Overwhelms, Justice is Delayed</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">pi-scout Features</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">Who uses pi-scout?</h2>
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
			{/* Why pi-scout */}
			<section className="bg-[#223a7a] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why pi-scout?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{whyScout.map((item) => (
							<div key={item.title} className="bg-[#223a7a] border border-blue-400 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-white mb-1">{item.title}</div>
								<div className="text-blue-100 text-sm">{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Try pi-scout */}
			<section id="try" className="bg-white py-12 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Try pi-scout</h2>
					<div className="text-gray-700 mb-6">Ready to unify your data and accelerate investigations? Get started with pi-scout today.</div>
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

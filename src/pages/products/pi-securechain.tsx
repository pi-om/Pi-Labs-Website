import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const faqData = [
	{
		question: "What is pi-securechain?",
		answer: "pi-securechain is an AI-powered, blockchain-based case and evidence management solution by pi-labs, designed to ensure integrity, transparency, and efficiency across investigations.",
	},
	{
		question: "How does pi-securechain ensure evidence is tamper-proof?",
		answer: "It uses blockchain-backed cryptographic hashing and immutable logs to maintain a secure and traceable chain of custody.",
	},
	{
		question: "Can pi-securechain integrate with existing forensic tools?",
		answer: "Yes, pi-securechain supports modular API integration with major forensic and investigative tools.",
	},
	{
		question: "Who can benefit from using pi-securechain?",
		answer: "Forensic labs, law enforcement agencies, financial investigation units, and legal bodies handling digital evidence.",
	},
	{
		question: "Is evidence stored securely in pi-securechain?",
		answer: "Absolutely. All evidence is protected with end-to-end encryption and role-based access control (RBAC).",
	},
	{
		question: "How does pi-securechain help in court proceedings?",
		answer: "It generates court-admissible reports with automated chain of custody documentation to simplify legal submissions.",
	},
	{
		question: "Can pi-securechain be used across multiple jurisdictions or departments?",
		answer: "Yes. It’s built for scalable, multi-agency collaboration with audit trails and secure access permissions.",
	},
];

const whyCritical = [
	"Evidence Overload, Process Gaps, and Integrity Risks",
	"Evidence Tampering Threat is Real",
	"Fragmented Investigation Workflows",
	"Lack of Accountability and Traceability",
	"Manual Errors and Delays are Costly",
	"Third party collaboration is difficult",
];

const features = [
	{ title: "Tamper-Proof Evidence Integrity", desc: "Blockchain-backed logging and SHA-256 hashing ensure every piece of evidence is traceable and immutable from capture to court." },
	{ title: "Military-Grade Secure Storage", desc: "End-to-end encryption and strict role-based access controls prevent and safeguard sensitive data." },
	{ title: "Smart Case & Evidence Linking", desc: "Automatically associate evidence with specific cases using metadata, timestamps, and integrated investigator notes for seamless workflow." },
	{ title: "Automated Chain of Custody", desc: "Every action — from upload to analysis to courtroom presentation — is auto-recorded on a blockchain ledger with timestamped logs." },
	{ title: "Real-Time Dashboards & Custom KPIs", desc: "Investigators and supervisors can monitor progress, identify bottlenecks, and make decisions." },
	{ title: "Third-Party System Integrations", desc: "Pre-built connectors with banks, telecom providers, e-commerce platforms, and more for faster retrieval of critical external data." },
	{ title: "Scalable Architecture", desc: "Built to scale effortlessly from a few dozen cases to millions of evidence files—across jurisdictions, departments, and agencies." },
	{ title: "AI-Enhanced Investigation Tools", desc: "Accelerate analysis with smart search, auto-tagging, and intelligent recommendations that reduce manual review time." },
	{ title: "Full Auditability & Activity Logs", desc: "Immutable activity logs and system-wide transparency ensure every action is tracked, accountable, and open for audit." },
];

const whoUses = [
	{
		title: "Forensic Science Laboratories",
		points: [
			"Centralize and secure evidence from diverse sources",
			"Gain full visibility across all forensic assets and reduce manual overhead",
			"Maintain court-admissible integrity",
		],
	},
	{
		title: "Law Enforcement & Crime Investigation Units",
		points: [
			"Handle complex investigations involving multiple officers, agencies, and data types",
			"Ensures safe and end-to-end chain of custody",
			"Enables real-time collaboration",
			"Manages operational secrecy while maintaining transparent, regulator-ready logs",
		],
	},
	{
		title: "Financial Crime & Fraud Investigation Agencies",
		points: [
			"Track digital footprints across banks, telecoms, and online platforms",
			"Secure integration and automated reporting",
			"Detect, document, and prosecute financial crimes",
		],
	},
];

const whySecurechain = [
	{ title: "Enhanced Evidence Integrity", desc: "Tamper-evident logs, blockchain tracking, and encryption to ensure trusted evidence." },
	{ title: "Faster Case Resolution", desc: "AI automation and intuitive dashboards speed up investigation workflows." },
	{ title: "Improved Collaboration", desc: "Seamless cross-agency access and updates in real-time." },
	{ title: "Legal Defensibility", desc: "Court-ready logs and chain of custody reports that meet judicial standards." },
	{ title: "Scalability for Complex Investigations", desc: "Handle millions of records, across jurisdictions, without losing control." },
	{ title: "Full Transparency & Audit Trails", desc: "Immutable activity logs and supervisor dashboards improve trust and governance." },
];

export default function PiSecurechain() {
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
						<h1 className="text-4xl md:text-5xl font-bold">Securechain</h1>
					</div>
					<div className="text-xl md:text-2xl text-[#ff4d4f] font-semibold mb-2">Intelligence Meets Integrity: Built for Precision, Powered by Trust</div>
					<div className="text-lg md:text-xl mb-6">AI-powered blockchain-based intelligent investigation engine</div>
					<a href="#try" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow mb-8">Try pi-securechain <ChevronRight className="inline ml-2 w-5 h-5" /></a>
				</div>
			</section>
			{/* Intro Paragraph */}
			<section className="bg-white py-8 px-4">
				<div className="max-w-2xl mx-auto text-center text-gray-800 text-lg mb-2">
					pi-securechain is a secure, AI-powered blockchain solution for modern case and evidence management. Designed for investigators, forensic teams, and legal agencies, it ensures tamper-proof evidence handling, smart workflows, and streamlined investigations — all in one unified platform.
				</div>
			</section>
			{/* Why AI-powered blockchain-based intelligent investigation engine is critical */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Why AI-powered blockchain-based intelligent investigation engine is critical?</h2>
					<div className="text-gray-600 mb-8">With terabytes of evidence data coming from multiple sources traditional systems are overwhelmed</div>
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
			{/* Features */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-8">pi-securechain Features</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">Who uses pi-securechain?</h2>
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
			{/* Why pi-securechain */}
			<section className="bg-[#223a7a] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why pi-securechain?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{whySecurechain.map((item) => (
							<div key={item.title} className="bg-[#223a7a] border border-blue-400 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-white mb-1">{item.title}</div>
								<div className="text-blue-100 text-sm">{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Try pi-securechain */}
			<section id="try" className="bg-white py-12 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Try pi-securechain</h2>
					<div className="text-gray-700 mb-6">Ready to secure your digital evidence with blockchain-powered integrity? Get started with pi-securechain today.</div>
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

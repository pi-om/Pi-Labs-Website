import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const faqData = [
	{
		question: "What is pi-authentify and how does it detect deepfakes?",
		answer:
			"pi-authentify is a deepfake detection solution developed by pi-labs to identify AI-generated and AI-manipulated video, audio, and image content. Using AI++ enabled forensic technology, it separates synthetic content from real media with high precision, helping businesses and governments verify reality and protect digital trust.",
	},
	{
		question: "Why is deepfake detection important for enterprises and governments?",
		answer:
			"Deepfakes are being used in recruitment scams, financial fraud, misinformation campaigns, and even national security threats. Detecting and preventing deepfakes helps protect organizations from reputational harm, identity theft, and data breaches while ensuring the authenticity of digital communications.",
	},
	{
		question: "How does pi-authentify integrate with existing enterprise systems?",
		answer:
			"pi-authentify offers flexible API integrations and multiple deployment options—including cloud and on-premise—to seamlessly fit into existing security frameworks, workflows, or identity verification systems. This makes it easy to scale and customize for organizations of all sizes.",
	},
	{
		question: "What types of content can pi-authentify analyze for deepfakes?",
		answer:
			"pi-authentify supports detection of synthetic videos, deepfake audios, voice clones, and AI-manipulated images. It can identify subtle manipulations across multiple formats and languages, providing comprehensive protection for digital assets.",
	},
	{
		question: "Is pi-authentify suitable for real-time deepfake detection?",
		answer:
			"Yes. pi-authentify’s low-latency processing capabilities allow it to analyze content in real time—making it ideal for applications like live video interviews, video-KYC, or fraud prevention in fast-paced digital environments.",
	},
	{
		question: "Which industries benefit the most from pi-authentify’s deepfake detection?",
		answer:
			"Industries such as law enforcement, national security, banking and finance, media & entertainment, and customer support/BPOs benefit significantly from deepfake detection. pi-authentify helps safeguard these sectors from fraud, misinformation, and compliance risks.",
	},
	{
		question: "How accurate is pi-authentify’s detection engine?",
		answer:
			"pi-authentify is trained on millions of datasets to ensure forensic-grade accuracy. Its AI inference engine continuously evolves to counter emerging deepfake threats, delivering explainable insights and tamper-proof evidence with every scan.",
	},
];

const whyCritical = [
	"Safeguard Legal Evidence",
	"Protect National Security",
	"Stop Identity Frauds",
	"Combat Fake News",
	"Prevent Digital Exploitation – CSAM/CSEM",
	"Strengthen Cybercrime Response",
	"Preserve Public Trust",
];

const rapidRise = [
	{ value: "300%", label: "Rise in India's deepfakes in Q4 2024" },
	{ value: "1200%", label: "Rise in deepfake cases reported between 2021 and 2024" },
	{ value: "1 out of 2", label: "Cyberfraud reported involved AI manipulations" },
	{ value: "4X", label: "Web AI-CSAM crimes since 2023" },
	{ value: "31X", label: "Rise in Deepfake KYC bypass since 2023" },
	{ value: "INR 11K Crore", label: "Financial fraud losses in H1 2024" },
];

const features = [
	{ title: "Multi-Modal Deepfake Detection", desc: "Detects manipulation in audio, video, and images using advanced, patented AI algorithms." },
	{ title: "Deep File Forensics", desc: "Pinpoints and highlights tampered segments for deeper forensic validation." },
	{ title: "Explainable AI Insights", desc: "Offers transparency and rationale behind every detection, ensuring user trust." },
	{ title: "Flexible Deployment Options", desc: "Supports on-premise infrastructure or scalable cloud-based deployment." },
	{ title: "Real-Time Detection", desc: "Optimized for high-speed analysis of live streams, video calls, and media uploads." },
	{ title: "Court-ready Reports", desc: "Generate in-depth, court-admissible forensic documentation post-analysis." },
	{ title: "API and SDK Integration", desc: "Seamlessly integrates into existing platforms and digital ecosystems." },
	{ title: "User-Friendly UI", desc: "Intuitive dashboards designed for quick onboarding and efficient use by all stakeholders." },
];

const whoUses = [
	{
		title: "Forensic Labs & Cybercrime Agencies",
		points: [
			"Impersonation & Identity Theft",
			"Non-Consensual Explicit Content",
			"Financial Fraud & Scams",
			"Political Disinformation",
			"Legal Disputes & Evidence Tampering",
			"Celebrity & Brand Impersonation",
			"Cyberbullying & Online Harassment",
		],
	},
	{
		title: "Defence & Intelligence Agencies",
		points: [
			"Countering Disinformation & PsyOps",
			"Protecting National Security",
			"Defense Against Deepfake-Assisted Cyber Operations",
			"Intelligence Gathering & Source Verification",
			"Media Forensics in Military Investigations",
			"Election Security & Information Warfare",
			"Training & Simulation Awareness",
			"Insider Threat & Counterintelligence",
		],
	},
	{
		title: "BFSI & Other Enterprises",
		points: [
			"Preventing Financial Fraud",
			"Verifying Customer Identity (KYC)",
			"Securing Video-Based Services",
			"Protecting Internal Communications",
			"Regulatory Compliance & Risk Management",
			"Claims Verification in Insurance",
			"Brand & Reputation Protection",
		],
	},
];

const whyAuth = [
	{ title: "AI-Trained on Extensive Datasets", desc: "Proprietary models developed with millions of data points for industry-leading detection accuracy." },
	{ title: "Forensic-Grade Reporting", desc: "Transparent evidence documentation with explainable AI." },
	{ title: "Seamless Integration", desc: "Flexible architecture that integrates efficiently into existing security and workflow systems." },
	{ title: "Low Latency Processing", desc: "Real-time analysis capabilities for time-sensitive verification requirements." },
	{ title: "Comprehensive Format Support", desc: "Advanced detection capabilities across video, audio, image, and text content in multiple languages." },
	{ title: "Continuous Model Evolution", desc: "Regular updates to detection algorithms to counter emerging deepfake technologies and techniques." },
];

export default function PiAuthentify() {
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
						<h1 className="text-4xl md:text-5xl font-bold">Authentify</h1>
					</div>
					<div className="text-xl md:text-2xl text-[#ff4d4f] font-semibold mb-2">Exposing the dark side of AI</div>
					<div className="text-lg md:text-xl mb-6">Detecting Deepfake Video, Audio & Images</div>
					<a href="#try" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow mb-8">Try Authentify <ChevronRight className="inline ml-2 w-5 h-5" /></a>
				</div>
			</section>
			{/* Intro Paragraph */}
			<section className="bg-white py-8 px-4">
				<div className="max-w-2xl mx-auto text-center text-gray-800 text-lg mb-2">
					pi-authentify is an advanced deepfake detection engine designed to protect digital identities and ensure content authenticity. Using forensic-grade AI, it detects manipulated videos, images, and audio with unparalleled accuracy, empowering law enforcement agencies, governments and enterprises to prevent fraud, secure face authentication, and combat misinformation.
				</div>
				<div className="max-w-2xl mx-auto text-center font-semibold text-gray-900">
					pi-authentify ensures seeing is believing in an AI-First world
				</div>
			</section>
			{/* Why Deepfake Detection is Critical */}
			<section className="bg-white py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Why Deepfake Detection is Critical</h2>
					<div className="text-gray-600 mb-8">As deepfake technology becomes more accessible, its misuse poses unprecedented challenges across national security, law enforcement, enterprise integrity, and digital trust.</div>
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
			{/* The Rapid Rise of Deepfake */}
			<section className="bg-[#a52828] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">The Rapid Rise of Deepfake: Truth Under Attack</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">pi-authentify Features</h2>
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
					<h2 className="text-2xl md:text-3xl font-bold mb-8">Who uses pi-authentify?</h2>
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
			{/* Why Authentify */}
			<section className="bg-[#223a7a] py-12 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Authentify?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{whyAuth.map((item) => (
							<div key={item.title} className="bg-[#223a7a] border border-blue-400 rounded-xl p-6 text-left flex flex-col h-full">
								<div className="font-semibold text-white mb-1">{item.title}</div>
								<div className="text-blue-100 text-sm">{item.desc}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Try Authentify */}
			<section id="try" className="bg-white py-12 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">Try Authentify</h2>
					<div className="text-gray-700 mb-6">Ready to protect your organization from deepfake threats? Get started with pi-authentify today.</div>
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

import {
	AudioWaveform,
	BoomBox,
	ChevronRight,
	Disc3,
	Music2,
	Headphones,
	BarChart2,
	Heart,
	Zap,
} from "lucide-react";
import React from "react";

const LandingPage = () => {
	return (
		<div className="h-screen w-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-x-hidden overflow-y-scroll">
			<Navbar />
			<Hero />
			<Features />
			<Working />
			<CTA />
			<Footer />
		</div>
	);
};

const Navbar = () => {
	return (
		<div className="h-max w-10/12 bg-white/5 backdrop-blur-3xl border-b border-white/20 sticky top-0 px-24 py-4 mx-auto flex items-center justify-between rounded-b-full z-10 drop-shadow-2xl">
			<div className="flex items-center justify-center gap-2">
				<AudioWaveform size={36} />
				<h3 className="text-4xl text-white font-bold">Moodify</h3>
			</div>

			<div className="items-center">
				<ul className="flex items-center justify-center gap-8">
					<a href="#features">
						<li className="text-white/60 hover:text-white hover:bg-white/15 px-4 py-2 rounded-3xl cursor-pointer transition-all duration-300">
							Features
						</li>
					</a>
					<a href="#how-it-works">
						<li className="text-white/60 hover:text-white hover:bg-white/15 px-4 py-2 rounded-3xl cursor-pointer transition-all duration-300">
							How It Works
						</li>
					</a>
					<a href="#get-started">
						<li className="text-purple-500 bg-purple-500/20 border-purple-500/40 border hover:text-white hover:bg-purple-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-transparent px-4 py-2 rounded-3xl cursor-pointer transition-all duration-300">
							Get Started
						</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<main className="h-96 w-[95%] bg-gradient-to-bl from-gray-900 via-purple-800 to-gray-900 px-24 my-12 mx-auto rounded-3xl flex flex-col items-center justify-center drop-shadow-2xl">
			<h1 className="text-5xl md:text-7xl text-center font-bold leading-tight mb-6">
				Your Music, <br />
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-500">
					Synced to Your Soul
				</span>
			</h1>

			<p className="max-w-2xl text-xl md:text-2xl text-gray-300 mb-8">
				Sync with your mood, discover your perfect soundtrack.
			</p>

			<p className="h-max w-max text-xl text-purple-500 bg-purple-500/20 border-purple-500/40 border hover:text-white hover:bg-purple-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-transparent px-4 py-2 rounded-3xl cursor-pointer transition-all duration-300 flex items-center gap-2">
				Start Listening
				<ChevronRight className="w-5 h-5" />
			</p>
		</main>
	);
};

const Features = () => {
	const featureItems = [
		{
			icon: Headphones,
			title: "Mood Detection",
			description:
				"AI-powered mood analysis uses advanced algorithms to interpret emotional states through voice tones, speech patterns, and behavioral cues. By detecting subtle changes in pitch, pace, and expression, it gauges mood in real-time, offering valuable insights into well-being and engagement. This technology enhances personalized experiences, making interactions more responsive and empathetic across various applications.",
		},
		{
			icon: Music2,
			title: "Personalized Playlists",
			description: "Curated music based on your mood",
		},
		{
			icon: Heart,
			title: "Emotion Tracking",
			description:
				"Monitor your moods over time to personalize music recommendations that align with your emotional state. By tracking mood patterns, the player adjusts playlists to uplift, soothe, or match your feelings, crafting an immersive and responsive listening experience that grows with your journey, offering the right music at the right moment.",
		},
		{
			icon: Zap,
			title: "Instant Mood Shifts",
			description: "Change your mood quickly with tailored tracks",
		},
	];

	return (
		<section
			id="features"
			className="w-[95%] bg-[radial-gradient(circle,rgba(17,24,39,0.3)_0%,rgba(168,85,247,0.15)_70%)] backdrop-blur-3xl border-t border-b border-white/20 px-24 py-16 my-12 mx-auto rounded-3xl drop-shadow-2xl"
		>
			<h2 className="text-4xl font-bold mb-12 text-center text-white">
				Features
			</h2>
			<div className="grid grid-cols-4 grid-rows-2 gap-4">
				{featureItems.map((item, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={`bg-black/20 p-6 rounded-3xl transition-all duration-300 hover:bg-purple-500/20 
                        ${index % 2 === 0 && index !== featureItems.length - 1 ? "col-span-2 row-span-2" : "col-span-2 row-span-1"}`}
					>
						<div className="h-full w-full flex items-center justify-start gap-4">
							<div className="bg-purple-500/20 p-3 rounded-full w-max">
								<item.icon className="w-6 h-6 text-purple-500" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2 text-white">
									{item.title}
								</h3>
								<p className="text-gray-300">{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const Working = () => {
	const steps = [
		{
			icon: BoomBox,
			title: "Connect",
			description: "Link your favorite music streaming services",
		},
		{
			icon: BarChart2,
			title: "Analyze",
			description: "Our AI detects your current mood",
		},
		{
			icon: Disc3,
			title: "Curate",
			description: "We create a personalized playlist",
		},
		{
			icon: Music2,
			title: "Enjoy",
			description: "Listen to music that matches your emotions",
		},
	];

	return (
		<section
			id="how-it-works"
			className="w-[95%] bg-gradient-to-tl from-gray-900 via-purple-800 to-gray-900 px-24 py-16 my-12 mx-auto rounded-3xl drop-shadow-2xl"
		>
			<h2 className="text-4xl font-bold mb-12 text-center text-white">
				How It Works
			</h2>
			<div className="flex flex-wrap justify-center gap-x-20">
				{steps.map((step, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="flex flex-col items-center text-center max-w-xs"
					>
						<div className="bg-white/10 p-4 rounded-full mb-4">
							<step.icon className="w-10 h-10 text-purple-300" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-white">
							{step.title}
						</h3>
						<p className="text-gray-300">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

const CTA = () => {
	return (
		<section
			id="get-started"
			className="w-[95%] bg-[radial-gradient(circle,rgba(168,85,247,0.3)_0%,rgba(17,24,39,0.01)_70%)] backdrop-blur-3xl border-t border-b border-white/20 px-24 py-16 my-12 mx-auto rounded-3xl drop-shadow-2xl text-center"
		>
			<h2 className="text-4xl font-bold mb-6 text-white">
				Ready to Moodify Your Music?
			</h2>
			<p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
				Join thousands of users who have transformed their listening experience.
				Get personalized playlists that match your every mood.
			</p>
			<button
				type="button"
				className="h-max w-max text-xl text-purple-500 bg-purple-500/20 border-purple-500/40 border hover:text-white hover:bg-purple-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-transparent px-6 py-3 rounded-3xl cursor-pointer transition-all duration-300 flex items-center gap-2 mx-auto"
			>
				Get Started for Free
				<ChevronRight className="w-5 h-5" />
			</button>
		</section>
	);
};

const Footer = () => {
	return (
		<footer className="h-max w-[95%] bg-white/5 backdrop-blur-3xl border-t border-white/20 px-24 py-8 mx-auto rounded-t-3xl">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="flex items-center justify-center gap-2 mb-4 md:mb-0">
					<AudioWaveform size={24} />
					<h3 className="text-2xl text-white font-bold">Moodify</h3>
				</div>
				<div className="flex space-x-6">
					<a
						// biome-ignore lint/a11y/useValidAnchor: <explanation>
						href="#"
						className="text-gray-400 hover:text-purple-500 transition-colors"
					>
						Privacy Policy
					</a>
					<a
						// biome-ignore lint/a11y/useValidAnchor: <explanation>
						href="#"
						className="text-gray-400 hover:text-purple-500 transition-colors"
					>
						Terms of Service
					</a>
					<a
						// biome-ignore lint/a11y/useValidAnchor: <explanation>
						href="#"
						className="text-gray-400 hover:text-purple-500 transition-colors"
					>
						Contact Us
					</a>
				</div>
			</div>
			<div className="mt-8 text-center text-gray-400">
				&copy; 2024 Moodify. All rights reserved.
			</div>
		</footer>
	);
};

export default LandingPage;

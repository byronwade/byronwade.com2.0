import { Calendar } from "react-feather";

export default function Settings() {
	return (
		<>
			<div className="mb-4">
				<h1 className="mb-sm text-xl font-semibold">Beta features</h1>
				<p className="text-[#fafafa]">New features that are available as part of our limited beta program.</p>
			</div>
			<div className="mb-4 overflow-hidden rounded-lg border border-white/20">
				<div className="mx-auto max-w-2xl px-6 py-16 text-center">
					<div className="text-blue m-auto mb-3 inline-block">
						<Calendar width={64} height={64} />
					</div>
					<h2 className="text-primary mb-1 text-lg font-semibold">Beta features</h2>
					<div className="mb-3 text-[#fafafa]">There are no features currently in the beta program.</div>
				</div>
			</div>
		</>
	);
}

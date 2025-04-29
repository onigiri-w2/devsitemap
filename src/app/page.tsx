import Header from "@/components/Header";
import SiteCard from "@/components/SiteCard";
import { siteData } from "./data";

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-5 max-w-5xl">
			<Header />

			<div className="mt-6 mb-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{siteData.map((site) => (
						<SiteCard
							key={site.href}
							title={site.title}
							tags={site.tags}
							href={site.href}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

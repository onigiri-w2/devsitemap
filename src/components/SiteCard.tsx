import type { SiteCardProps } from "@/types";
import React from "react";

export default function SiteCard({ title, tags, href }: SiteCardProps) {
	return (
		<div className="outline-none">
			<a
				className="block h-full min-h-32 cursor-pointer rounded-md border focus:outline-none focus:ring focus:ring-[#353535] border-border bg-bg-surface hover:border-border-hover hover:bg-bg-surface-hover p-3 shadow-none transition-colors"
				href={href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="flex h-full flex-col gap-1">
					<div className="flex items-center justify-between gap-0.5">
						<div className="text-text-primary flex items-center gap-1 text-base">
							<div className="text-wrap" style={{ overflowWrap: "anywhere" }}>
								<span className="font-medium">{title}</span>
							</div>
						</div>
						<div className="flex items-center gap-3" />
					</div>

					<div className="mt-2 flex flex-wrap gap-2">
						{tags.slice(0, 3).map((tag) => (
							<span
								key={tag}
								className="bg-bg-secondary text-text-secondary px-2 py-0.5 rounded-md text-xs font-medium"
							>
								#{tag}
							</span>
						))}
						{tags.length > 3 && (
							<span className="text-text-secondary text-xs flex items-center">
								+{tags.length - 3}
							</span>
						)}
					</div>

					{/* 矢印を削除 */}
					<div className="mt-auto flex items-center justify-between">
						<div className="flex items-center gap-1" />
					</div>
				</div>
			</a>
		</div>
	);
}

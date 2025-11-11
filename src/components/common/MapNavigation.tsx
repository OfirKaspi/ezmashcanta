"use client"

import { CONFIG } from "@/config/config"
import { redirectToPlatform } from "@/utils/redirectToPlatform"
import Image from "next/image"

const MapNavigation = () => {
	const { lat, lng } = CONFIG

	const buttons = [
		{
			_id: "1",
			link: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
			image: {
				src: "waze.svg",
				alt: "Waze"
			},
			label: "נווט עם Waze"
		}, {
			_id: "2",
			link: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
			image: {
				src: "google-maps.svg",
				alt: "Google Maps"
			},
			label: "נווט עם Google Maps"
		}
	]

	return (
		<div className="flex gap-3 mt-2">
			{buttons.map((button) => (
				<button
					key={button._id}
					onClick={() => redirectToPlatform(button.link)}
					className="relative w-12 h-12 min-w-[48px] min-h-[48px] rounded-lg border-2 border-border bg-background hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all flex items-center justify-center group"
					aria-label={button.label}
				>
					<Image
						src={`/maps/${button.image.src}`}
						alt={button.image.alt}
						width={24}
						height={24}
						className="object-contain group-hover:scale-110 transition-transform"
					/>
				</button>
			))}
		</div>
	)
}

export default MapNavigation

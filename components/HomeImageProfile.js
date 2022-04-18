import React from "react";

// __NEXT JS HOOKS__
import { useRouter } from "next/router";

// __NEXT JS COMPONENTS__
import Image from "next/image";

// _MUI COMPONENTS__
import {
	Box,
	Grid,
	Paper,
	Typography,
} from "@mui/material";

const HomeImageProfile = ({ option }) => {
	const router = useRouter();

	const content = [
		{
			imageMobile:
				"/images/mobile/image-deep-earth.jpg",
			imageDesktop:
				"/images/desktop/image-deep-earth.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "DEEP EARTH",
			focus: "center",
		},
		{
			imageMobile:
				"/images/mobile/image-night-arcade.jpg",
			imageDesktop:
				"/images/desktop/image-night-arcade.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "NIGHT ARCADE",
			focus: "center",
		},
		{
			imageMobile:
				"/images/mobile/image-soccer-team.jpg",
			imageDesktop:
				"/images/desktop/image-soccer-team.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "SOCCER TEAM VR",
			focus: "center",
		},
		{
			imageMobile: "/images/mobile/image-grid.jpg",
			imageDesktop: "/images/desktop/image-grid.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "FROM UP ABOVE VR",
			focus: "center",
		},
		{
			imageMobile:
				"/images/mobile/image-from-above.jpg",
			imageDesktop:
				"/images/desktop/image-from-above.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "POCKET BOREALIS",
			focus: "center",
		},
		{
			imageMobile:
				"/images/mobile/image-pocket-borealis.jpg",
			imageDesktop:
				"/images/desktop/image-pocket-borealis.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "DEEP EARTH",
			focus: "center",
		},
		{
			imageMobile:
				"/images/mobile/image-curiosity.jpg",
			imageDesktop:
				"/images/desktop/image-curiosity.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "THE CURIOSITY",
			focus: "center",
		},
		{
			imageMobile: "/images/mobile/image-fisheye.jpg",
			imageDesktop:
				"/images/desktop/image-fisheye.jpg",
			imageMobileWidth: "654",
			imageDesktopWidth: "256",
			text: "MAKE IT FISHEYE",
			focus: "center",
		},
	];

	return (
		<>
			<Grid
				item
				phone={12}
				tabletsm={6}
				tabletxl={4}
				laptop={3}
				desktop={3}
				sx={{
					p: { phone: 1 },
				}}
			>
				<Box
					className="IMAGE_CONTAINER"
					sx={{
						position: "relative",
						width: { phone: "100%" },
						height: {
							phone: "25rem",
							tablet: "80vw",
							tabletsm: "26rem",
							tabletxl: "50vw",
							laptop: "35vw",
							desktop: "25.7rem",
							desktopxl: "29rem",
						},
					}}
				>
					<Image
						src={content[option].imageDesktop}
						alt=""
						layout="fill"
						objectFit="contain"
						objectPosition={
							content[option].focus
						}
					/>
				</Box>
			</Grid>
		</>
	);
};

export default HomeImageProfile;

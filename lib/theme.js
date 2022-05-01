import { createTheme } from "@mui/material/styles";
import { fontSize } from "@mui/system";

let theme = createTheme({
	breakpoints: {
		values: {
			phone: 0,
			phonexl: 350,
			tablet: 400,
			tabletsm: 520,
			tabletxl: 600,
			tabletxll: 700,
			laptop: 850,
			desktop: 1100,
			desktopxl: 1300,
		},
	},

	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: "h1",
					h2: "h2",
					h3: "h3",
					h4: "h4",
					h5: "h5",
					h6: "h6",
					subtitle1: "span",
					subtitle2: "span",
					body1: "p",
					body2: "p",
					body3: "p",
				},
			},
		},
	},
});

theme.typography.h1 = {
	fontSize: "1.8rem",
	fontWeight: "300",
	[theme.breakpoints.up("tablet")]: {
		fontSize: "2.3rem",
	},
	[theme.breakpoints.up("tabletxl")]: {
		fontSize: "2.5rem",
	},
	[theme.breakpoints.up("laptop")]: {
		fontSize: "3rem",
	},
	[theme.breakpoints.up("desktop")]: {
		fontSize: "3.1rem",
	},
};

theme.typography.h2 = {
	fontWeight: 300,
	fontSize: "1.5rem",
	[theme.breakpoints.up("tabletxl")]: {
		fontSize: "1.5rem",
	},

	[theme.breakpoints.up("laptop")]: {
		fontSize: "2rem",
	},

	[theme.breakpoints.up("desktop")]: {
		fontSize: "2.3rem",
	},
};

theme.typography.h3 = {
	fontSize: "1rem",
	fontWeight: 300,

	[theme.breakpoints.up("tablet")]: {
		fontSize: "1.8rem",
	},
};

theme.typography.h4 = {
	fontSize: "1.5rem",
	fontWeight: 300,

	[theme.breakpoints.up("tablet")]: {
		fontSize: "1.9rem",
	},
	[theme.breakpoints.up("tabletsm")]: {
		fontSize: "1.6rem",
	},
	[theme.breakpoints.up("tabletxl")]: {
		fontSize: "1.5rem",
	},

	[theme.breakpoints.up("laptop")]: {
		fontSize: "1.3rem",
	},

	[theme.breakpoints.up("desktop")]: {
		fontSize: "1.5rem",
	},

	[theme.breakpoints.up("desktopxl")]: {
		fontSize: "1.8rem",
	},
};

theme.typography.body1 = {
	fontSize: ".6rem",
	[theme.breakpoints.up("laptop")]: {
		fontSize: ".8rem",
	},

	[theme.breakpoints.up("desktop")]: {
		fontSize: ".9rem",
	},
};


theme.typography.subtitle1 = {
	fontSize: "1.5rem",
	fontWeight: "500",
}

theme.typography.subtitle2 = {
	fontSize: ".87rem",

	[theme.breakpoints.up("laptop")]: {
		fontSize: ".85rem",
		mx: 3
	},
}
export default theme;

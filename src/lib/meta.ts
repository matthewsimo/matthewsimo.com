import type { Metadata } from "next";

export const generateMeta = (meta: Metadata): Metadata => {

  const defaultMeta: Metadata = {
    openGraph: {
      siteName: "Matthew Simo",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      site: "@matthewsimo",
    },


		// <link rel="me" href="https://mastodon.social/@matthewsimo" />

		// <meta property="og:site_name" content="Matthew Simo" />
		// <meta property="og:locale" content="en_US" />
		// <meta property="og:type" content="website" />
		// <meta name="twitter:site" content="@matthewsimo" />

  title: "Matthew Simo",
  description: "The website of Matthew Simo, a Software Engineer & UX Designer based in Texas",
}

return {...defaultMeta, ...meta}
}

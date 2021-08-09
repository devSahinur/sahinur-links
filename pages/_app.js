import SEO from "@bradgarropy/next-seo";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} />
        <SEO
        title="Connect with Sahinur"
        description="An app with all my social links"
        keywords={["Connect", "links", "PWA"]}
        icon="/sahinur-islam.jpg"
        facebook={{
          image:
            "https://i.ibb.co/BTh9gJ5/sahinur-dev.jpg",
          url: "https://sahinur.netlify.app/",
          type: "website",
        }}
        twitter={{
          image:
            "https://i.ibb.co/BTh9gJ5/sahinur-dev.jpg",
          site: "https://sahinur.netlify.app/",
          card: "summary",
        }}
      />
        </>
}

export default MyApp

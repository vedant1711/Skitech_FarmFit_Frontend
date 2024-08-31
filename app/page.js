import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/Hero"
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2"
import Section3 from "@/components/sections/Section3"
import Section4 from "@/components/sections/Section4"
import WeatherDashboard from "@/components/sections/WeatherSection"
export default async function Home() {
    return (
        <>
            <Layout footerStyle={1} noHeaderBg>
                <Hero />
                <Section1 />
                <WeatherDashboard />
                <Section3 />
                <Section4 />
            </Layout>
        </>
    )
}

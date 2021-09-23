
import Navigation from "views/navigation";
import Landing from "views/landing";
import About from "views/about";
import Sponsors from "views/sponsors";
import FrequentlyAskedQuestions from "views/faq";

export default function HomePage() {
    return (
        <div>
            <Navigation/>
            <div style={{ height: '200vh', marginTop: 74 }}>
                <Landing/>
                <About/>
                <Sponsors/>
                <FrequentlyAskedQuestions/>
            </div>
            <div>[ FOOTER ]</div>
        </div>
    )
}
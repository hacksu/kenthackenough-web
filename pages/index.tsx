
import Landing from "views/landing";
import About from "views/about";
import Sponsors from "views/sponsors";
import FrequentlyAskedQuestions from "views/faq";

export default function HomePage() {
    return (
        <div>
            <Landing/>
            <About/>
            <Sponsors/>
            <FrequentlyAskedQuestions/>
        </div>
    )
}
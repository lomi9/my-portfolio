import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";


export default function Home () {


    return (
        <div>
            <header className='home__navbar'>
                <Navbar/>
            </header>
            <section className="home__banner" id="home">
                <Banner/>
            </section>
            <div className="home__content" id="content">
                <section className='home__presentation'  id="presentation">
                    <p>Présentation</p>
                </section>
                <section className='home__projects'  id="projects">
                <p>Projects</p>
                </section>
                <section className='home__tools' id="tools">
                    <p>Tools</p>
                </section>
                <section className='home__contact' id="contact">
                    <p>contact</p>
                </section>
                <div className='home__footer'>
                <p>Footer</p>
                </div>
            </div>
        </div>

    );
};
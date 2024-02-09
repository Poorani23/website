import Calculator from "./calcuator";
import Contact from "./contact";

function Home(){
    return(
        <>
           <header>
        <h1>PORTFOLIO</h1>
    </header>

    <nav >
        <a href="home.js"   class="page-link">Home</a>
        <a href="calculator.js"   class="page-link">Calculator</a>
        <a href="contact.js"   class="page-link">Contact Us</a>
    </nav>

    <section>
        <h2>Welcome to Poorani's Home Page</h2>
        <p class="intro">Hello, I'm Poorani. A passionate individual driven by a love for technology, art, and the intersection of both worlds. In the ever-evolving landscape of innovation, I find my greatest joy in unraveling the complexities and turning them into something beautiful and meaningful.</p>
        <p class="interests">When I'm not navigating the digital realm, I dive into the intricacies of coding, weaving lines of logic into interactive experiences. My canvas extends beyond the screen—I find solace in crafting digital art that mirrors the vibrant hues of my imagination, and I'm always eager to explore the immersive possibilities of augmented reality.</p>
        <p class="journey">My journey is a tapestry woven with threads of curiosity and exploration. Each project, whether it's a piece of code or a digital artwork, tells a story of discovery. Join me on this exciting journey as I share the insights, challenges, and triumphs that shape my creative endeavors.</p>
        <p class="community">Beyond personal exploration, I believe in the power of community. Technology and art have the potential to unite like-minded individuals, and I am passionate about creating a supportive space where ideas flourish. Let's build a community that thrives on collaboration, inspiration, and a shared love for the limitless possibilities of creativity.</p>
        <p class="inspiration">I draw inspiration from the ever-changing world around me. Nature, science, and the human experience all contribute to the rich tapestry of my creations. Through my work, I aspire to capture the essence of these influences and offer a glimpse into the beauty that surrounds us.</p>
        <p class="learning">Learning is at the core of my endeavors. Whether it's mastering a new programming language, experimenting with a different artistic style, or delving into the intricacies of emerging technologies, I believe that the pursuit of knowledge is a lifelong adventure. Let's learn and grow together.</p>
        <p class="impact">Beyond personal growth, I am driven by a desire to make a positive impact. Technology and art have the power to shape perceptions, evoke emotions, and spark change. Through my creations, I aim to contribute to a more inclusive, imaginative, and compassionate world.</p>
        <p class="reflection">Reflection is a crucial part of my creative process. Each project is an opportunity to reflect on the journey, celebrate achievements, and learn from challenges. I invite you to join me in these moments of introspection, where we can collectively appreciate the beauty of the creative process.</p>
        <p class="connection">I believe in the transformative power of connection. As you explore my website, I hope you find not just a portfolio of work but a connection—a shared enthusiasm for the vast possibilities that technology and art present. Thank you for being a part of this journey.</p>
     </section>
     <Calculator/>
     <Contact/>
        </>
    );
}
export default Home;
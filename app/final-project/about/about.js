import Link from "next/link"

export default function About() {
  return (
    <main className="flex flex-col items-center h-screen justify-center font-serif">
      <div className="font-bold text-gray-500 m-4 text-3xl">
        <p>Get To Know More</p>
      </div>
      <div className="font-bold text-black m-4 text-4xl">
        <p>About Me</p>
      </div>
      <div className="flex justify-center font-serif">
        <div className="w-1/3 m-10 ">
          <img src={"/about-pic.png"} alt="Profile picture" />
        </div>
        
        <div className="flex flex-col items-center w-1/2 m-10 mt-20">
          <div>
            <p className="font-bold text-gray-500 m-5 text-3xl">Education Background</p>
            <p className="font-bold text-black m-5 text-3xl">Software Developement</p>
            <p className="bg-gray-400 text-white flex justify-center p-3 m-5 rounded-full hover:bg-blue-500 text-3x2">
              <Link href="https://www.sait.ca">At SAIT</Link>
            </p>
          </div>
          <div className="m-10 text-xl">
            <p>As an innovative software developer at SAIT College, 
              I have a proven track record of designing and implementing comprehensive flowcharts, layouts, and documentation, 
              which facilitate the efficient identification and resolution of technical issues. 
              My proficiency spans multiple programming languages, including Python, C#, Java, HTML, CSS, and JavaScript, 
              allowing me to achieve exceptional results across various projects.
              I excel in creating robust and scalable solutions that meet user needs and business goals. 
              My dedication to continuous learning drives me to stay updated with the latest industry trends and technologies.
               I thrive in collaborative environments, where I can both learn from my peers 
               and contribute my knowledge and experiences to the team.
                My passion for coding and problem-solving is reflected in my ability to deliver high-quality software solutions
                 that exceed expectations. </p>
          </div>
        </div>
      </div>
    </main>
  );
}

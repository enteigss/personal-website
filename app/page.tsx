"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, ExternalLink, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 mx-auto relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src="/professional-pfp-cropped.jpg" 
              alt="Jordan Green" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">Jordan Green</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Product-minded developer exploring the possibilities of technology and AI.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" aria-label="GitHub" asChild>
              <a href="https://github.com/enteigss" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" aria-label="LinkedIn" asChild>
              <a href="www.linkedin.com/in/jordan-green-892337234" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" aria-label="Email" asChild>
              <a href="mailto:jordanandersongreen@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" aria-label="Blog" asChild>
              <a href="https://my-blog-4.ghost.io/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <Button
              className="animate-bounce"
              variant="ghost"
              size="sm"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Scroll Down
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Technical background. Product & software development experience. Never-ending curiousity.
              </p>
              <p className="text-gray-600 mb-4">
                I love using my skills and passions to explore cool ideas and solve interesting problems. From
                integrating a custom Eren Jaeger AI agent into a virtual sandbox to trying to figure out how to make 
                it easier for people in the Bay Area to find community, I find myself being captivated by a wide variety
                of areas. 
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me hanging out with friends, reading a murder mystery, or having a conversation
                about the future of AI (among other things). 
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Machine Learning</Badge>
                  <Badge>Sci-kit Learn</Badge>
                  <Badge>Hugging Face</Badge>
                  <Badge>PyTorch</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>Git</Badge>
                  <Badge>SQL</Badge>
                  <Badge>Cursor</Badge>
                  <Badge>API Integration</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Product Development</Badge>
                  <Badge>User Research</Badge>
                  <Badge>Rapid Prototyping</Badge>
                  <Badge>Market Analysis</Badge>
                  <Badge>Data-driven Decision Making</Badge>
                  <Badge>MVP Development</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="GitHub repository" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Live project" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.caseStudy && (
                    <div className="mb-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.caseStudy}>
                          Case Study
                        </a>
                      </Button>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm currently looking for opportunities to work on projects that challenge me and help me grow. Feel free to reach out to me if you'd like to chat!
          </p>
          <Button className="mb-8" asChild>
            <a href="mailto:jordanandersongreen@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/enteigss" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jordan-green-892337234/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:jordanandersongreen@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Jordan Green. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Sample project data
const projects = [
  {
    title: "Vibe",
    description: "Building an app to make it easier for college students to connect with other students and meet their people.",
    technologies: ["Rapid Prototyping", "Flutter", "Product Development", "Product Strategy"],
    github: "",
    link: "",
    caseStudy: "/vibe-case-study",
  },
  {
    title: "Bay Area Discord Discovery",
    description: "A simple web app for finding discord servers in the Bay Area (vibe coded in a day), and my journey building it (longer than a day).",
    technologies: ["Product Development", "User Research", "Rapid Prototyping"],
    github: "https://github.com/enteigss/discord-gallery-grids",
    link: "https://bay-discovery.com/",
    caseStudy: "/case-study",
  },
  {
    title: "AI QuickBooks Assistant",
    description: "An AI powered web application that allows users to use natural language to access their QuickBooks data.",
    technologies: ["Flask", "OpenAI API", "LangChain"],
    github: "https://github.com/enteigss/quickbooks",
    link: "https://enigmatic-falls-03075-43083390e422.herokuapp.com/",
  },
  {
    title: "Airbnb Price Predictor",
    description: "A fine-tuned machine learning model that predicts the price of an Airbnb listing based on its features.",
    technologies: ["XGBoost", "Pytorch", "Scikit-learn"],
    github: "https://github.com/enteigss/airbnb-price-prediction",
    link: null,
  },
  {
    title: "High Performance Server/Evaluation",
    description: "I built a multi-threaded server capable of storing and processing images. I also extracted and analyzed and visualized data from the server using Python",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/enteigss/mm1-server-and-eval",
    link: null,
  },
  {
    title: "Game Odds Calculator",
    description: "Building on an existing application, I refined the probability calculations to make it more accurate using Markov Models.",
    technologies: ["JavaScript", "Markov Models"],
    github: "https://github.com/enteigss/TFT-Rolling-Odds-Calculator",
    link: null,
  },
  {
    title: "AT Protocol Jetstream Analytics Dashboard",
    description: "I built a analytics dashboard for users to view the amount of traffic on the AT Protocol.",
    technologies: ["ETL Pipeline", "Data Visualization"],
    github: "https://github.com/enteigss/jetstream-analytics-dashboard",
    link: null,
  },
  {
    title: "Liar's Dice Strategy",
    description: "Using the techniques presented in Marc Lanctot and Todd W. Neller's paper on Counterfactual Regret, I built a model that calculated the game theoretical optimal strategy for Liar's Dice",
    technologies: ["Java", "Counterfactual Regret", "Reinforcement Learning"],
    github: "https://github.com/enteigss/dudo",
    link: null,
  },
]

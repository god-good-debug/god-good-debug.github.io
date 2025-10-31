import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, FileText, Award, Trophy } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Smart Plant Pot System",
    description:
      "Innovation and Entrepreneurship Competition project. Designed a smart plant pot that monitors and automatically adjusts the growing environment for potted plants",
    image: "/smart-plant-pot.jpg",
    tags: ["IoT", "BME280 Sensor", "PID Algorithm", "Mobile App"],
    year: "2023",
    category: "Internet of Things",
  },
  {
    id: 2,
    title: "Taobao User Data Processing",
    description:
      "Processed 100 million Taobao user behavior records using Hive. Analyzed data from four dimensions: user habits, product preferences, behavior conversion, and user segmentation",
    image: "/data-analysis-dashboard.jpg",
    tags: ["Hadoop", "Hive", "Big Data", "RFM Model"],
    year: "2024",
    category: "Big Data Analytics",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with complete shopping cart and payment features",
    image: "/modern-ecommerce-interface.png",
    tags: ["React", "Next.js", "Stripe"],
    year: "2024",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A clean and elegant blog platform with Markdown editing support",
    image: "/minimalist-blog-platform-interface.jpg",
    tags: ["Next.js", "MDX", "CMS"],
    year: "2023",
    category: "Web Development",
  },
]

const skills = [
  "Java",
  "C Language",
  "Python",
  "Vue3",
  "MyBatis",
  "Spring",
  "MySQL",
  "Data Structures",
  "Hadoop",
  "YARN",
  "Hive",
  "IDEA",
  "VSCode",
  "Git",
]

const awards = [
  {
    title: "Hunan Province Innovation and Entrepreneurship Project",
    level: "Excellent",
    year: "2023",
    icon: "trophy",
    image: "/award-innovation.jpg",
  },
  {
    title: "Hunan Province Programming Contest",
    level: "Second Prize",
    year: "2023",
    icon: "award",
    image: "/award-programming.jpg",
  },
  {
    title: "Enterprise Scholarship",
    level: "Second Prize",
    year: "2023",
    icon: "award",
    image: "/award-scholarship-enterprise.jpg",
  },
  {
    title: "University Scholarship",
    level: "Second Prize",
    year: "2023",
    icon: "award",
    image: "/award-scholarship.jpg",
  },
  {
    title: "Hunan Province College Badminton Competition",
    level: "6th Place (Team)",
    year: "2021",
    icon: "trophy",
    image: "/award-badminton.jpg",
  },
  {
    title: "Active Club Member",
    level: "Honorary Title",
    year: "2021",
    icon: "award",
    image: "/award-active-member.jpg",
  },
  {
    title: "University Scholarship",
    level: "Second Prize",
    year: "2021",
    icon: "award",
    image: "/award-scholarship-2021.jpg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">SI QIN</h1>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Avatar and Bio */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            {/* Avatar Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-border flex items-center justify-center">
                <img
                  src="/professional-avatar.png"
                  alt="Profile Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Bio and Contact */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hello, I'm SI QIN</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a passionate full-stack developer focused on creating elegant, efficient, and user-friendly digital
                products. I believe technology should serve people by improving user experience through well-designed
                interfaces and powerful features.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/god-good-debug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="/cv.docx"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Resume / CV
                </a>
                <a
                  href="mailto:qsi01665@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  qsi01665@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Career Objectives and Research Interests */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Career Objectives</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am committed to becoming a well-rounded technical expert, proficient in both frontend and backend
                development, while understanding user needs and transforming them into excellent products. I hope to
                work in innovative companies and participate in building products that impact millions of users.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Research Interests</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am interested in the practical applications of artificial intelligence and machine learning in web
                applications, especially how to use AI technology to enhance user experience and product intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Honors and Awards</h3>
            <p className="text-muted-foreground mb-6">Recognition received in academic studies and competitions</p>
            <div className="h-px bg-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
                  <img
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    {award.icon === "trophy" ? (
                      <Trophy className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    ) : (
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground leading-tight mb-1">{award.title}</h4>
                      <p className="text-sm text-muted-foreground">{award.level}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">{award.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-2">Project Experience</h3>
          <p className="text-muted-foreground mb-6">
            Below are the projects I have participated in and completed. Click to view details, tech stack, and project
            links.
          </p>
          <div className="h-px bg-border"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <Card className="group overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 SI QIN. All rights reserved</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/god-good-debug"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:qsi01665@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

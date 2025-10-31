import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

const projectsData = {
  "1": {
    id: 1,
    title: "Smart Plant Pot System",
    description:
      "Innovation and Entrepreneurship Competition project. Designed a smart plant pot that monitors and automatically adjusts the growing environment for potted plants",
    fullDescription:
      "As the project leader, I led the team to design a smart plant pot that enables intelligent cultivation of potted plants, real-time monitoring of plant environment data, and automatic adjustments. Users can download a mobile app or access the web interface to monitor the plant environment in real-time and make manual adjustments. To solve the environmental data collection problem, we used the BME280 sensor (temperature, humidity, and atmospheric pressure). We controlled lighting and water pumps through relays to adjust light intensity and humidity. We collaborated with the School of Agriculture to obtain plant growth parameters and experimental data from their labs. Combined with practical conditions, we determined the most suitable environment for plant growth in urban settings, completing intelligent environment recommendations. To provide the most suitable environment for plant growth, we used PID control algorithms to predict optimal growth conditions.",
    image: "/smart-plant-pot.jpg",
    images: ["/smart-plant-pot.jpg", "/smart-plant-pot.jpg", "/smart-plant-pot.jpg"],
    tags: ["IoT", "BME280 Sensor", "PID Algorithm", "Mobile App"],
    year: "2023",
    client: "Innovation and Entrepreneurship Competition",
    role: "Project Leader",
    duration: "6 months",
    technologies: [
      { name: "BME280 Sensor", description: "Three-in-one sensor for temperature, humidity, and pressure" },
      { name: "PID Control Algorithm", description: "Predicts optimal conditions for plant growth" },
      { name: "Mobile App Development", description: "Supports real-time monitoring on mobile and web" },
      { name: "Relay Control", description: "Controls lighting and water pumps for environment adjustment" },
    ],
    features: [
      "Real-time monitoring of plant environment data",
      "Automatic adjustment of light intensity and humidity",
      "Remote control via mobile app and web interface",
      "Intelligent environment recommendation system",
      "Collaboration with School of Agriculture for professional data",
      "PID algorithm optimization for growth environment",
    ],
    challenges:
      "Due to insufficient market research in the early stages, our smart plant pot only made minor innovations on existing products, so we did not achieve significant results. Nevertheless, we learned many new technologies and experienced the power of teamwork.",
    liveUrl: "",
    githubUrl: "",
  },
  "2": {
    id: 2,
    title: "Taobao User Data Processing",
    description:
      "Processed 100 million Taobao user behavior records using Hive. Analyzed data from four dimensions: user habits, product preferences, behavior conversion, and user segmentation",
    fullDescription:
      "Processed Taobao user behavior data (100 million records), including user ID, product ID, behavior type (click, purchase, add to cart, favorite), and timestamps. Used Hive to clean raw data and analyzed from four dimensions: user consumption habits, product preferences, behavior conversion, and user segmentation. Used Hive to clean invalid data outside the time range, with valid data accounting for 98.77%. Used ORC table storage, improving query efficiency by nearly 10%.",
    image: "/data-analysis-dashboard.jpg",
    images: ["/data-analysis-dashboard.jpg", "/data-analysis-dashboard.jpg", "/data-analysis-dashboard.jpg"],
    tags: ["Hadoop", "Hive", "Big Data", "RFM Model"],
    year: "2024",
    client: "Course Project",
    role: "Data Analyst",
    duration: "3 months",
    technologies: [
      { name: "Hadoop", description: "Built high-availability big data cluster based on YARN" },
      { name: "Hive", description: "Data cleaning and processing" },
      { name: "ORC Table Storage", description: "Optimized query efficiency by 10%" },
      { name: "RFM Model", description: "User segmentation analysis" },
    ],
    features: [
      "Processed 100 million user behavior records",
      "Data cleaning efficiency reached 98.77%",
      "User behavior analysis: PV, UV, conversion rate, etc.",
      "Product analysis: Top 10 popular products and categories",
      "Conversion analysis: Click-to-purchase conversion path",
      "User segmentation: Divided into 4 categories based on RFM model",
    ],
    challenges:
      "User behavior analysis showed: PV (clicks) 98,914,533, UV (users) 987,984, direct purchases after clicking 69,580, users who clicked and added to cart/favorites 854,067, users who clicked, added to cart/favorites, and purchased 597,693, users who clicked, added to cart/favorites but did not purchase 256,374, lost users 60,433, bounce rate 6.12%, add-to-cart rate 86.79%, overall conversion rate 67.81%. Product analysis identified Top 10 popular products and categories. Conversion analysis showed click-to-purchase conversion rate of only 2.26%, but add-to-cart/favorite-to-purchase conversion rate reached 24.03%. User segmentation based on RFM model divided users into 4 categories, with high-value users accounting for 0.04%, enabling differentiated marketing strategies for different tiers.",
    liveUrl: "",
    githubUrl: "",
  },
  "3": {
    id: 3,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with complete shopping cart and payment features",
    fullDescription:
      "This is a fully functional e-commerce platform built with the latest web technology stack. The platform provides a smooth shopping experience, including product browsing, search, shopping cart management, order processing, and secure online payment. The project focuses on performance optimization and user experience, implementing a hybrid solution of server-side rendering and static generation to ensure fast page loading.",
    image: "/modern-ecommerce-interface.png",
    images: ["/modern-ecommerce-interface.png", "/modern-ecommerce-interface.png", "/modern-ecommerce-interface.png"],
    tags: ["React", "Next.js", "Stripe", "TypeScript", "Tailwind CSS"],
    year: "2024",
    client: "Personal Project",
    role: "Full Stack Developer",
    duration: "3 months",
    technologies: [
      { name: "Next.js 14", description: "Built high-performance app using App Router" },
      { name: "Stripe", description: "Integrated secure payment processing system" },
      { name: "PostgreSQL", description: "Reliable data storage solution" },
      { name: "Tailwind CSS", description: "Rapidly built responsive interface" },
    ],
    features: [
      "Responsive design, perfectly adapted to all devices",
      "Real-time inventory management and order tracking",
      "Secure payment gateway integration",
      "User accounts and order history",
      "SEO optimization and performance optimization",
      "Admin backend management system",
    ],
    challenges:
      "The biggest challenge was handling high-concurrency order requests and ensuring payment security. By implementing Redis caching and optimizing database queries, we successfully reduced page response time by 60%.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  "6": {
    id: 6,
    title: "Blog Platform",
    description: "A clean and elegant blog platform with Markdown editing support",
    fullDescription:
      "A blog platform focused on writing experience, providing content creators with a clean and elegant creative environment. The platform supports Markdown editing, code highlighting, image uploads, and other features, allowing creators to focus on content itself.",
    image: "/minimalist-blog-platform-interface.jpg",
    images: [
      "/minimalist-blog-platform-interface.jpg",
      "/minimalist-blog-platform-interface.jpg",
      "/minimalist-blog-platform-interface.jpg",
    ],
    tags: ["Next.js", "MDX", "CMS", "Prisma", "PostgreSQL"],
    year: "2023",
    client: "Personal Project",
    role: "Full Stack Developer",
    duration: "3 months",
    technologies: [
      { name: "Next.js", description: "Static generation of blog pages" },
      { name: "MDX", description: "Enhanced Markdown functionality" },
      { name: "Prisma", description: "Type-safe ORM" },
      { name: "PostgreSQL", description: "Reliable data storage" },
    ],
    features: [
      "Markdown editor",
      "Code syntax highlighting",
      "Article categories and tags",
      "Comment system",
      "RSS subscription",
      "SEO optimization",
    ],
    challenges:
      "Achieving fast page loading and good SEO was key. Through static generation and incremental static regeneration, we achieved optimal performance.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "6" }]
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectsData[id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full aspect-[21/9] bg-muted overflow-hidden">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-muted-foreground">{project.year}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{project.client}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{project.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-border">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Role</h3>
              <p className="text-foreground">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Duration</h3>
              <p className="text-foreground">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Project Type</h3>
              <p className="text-foreground">{project.client}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.technologies.map((tech) => (
                <div key={tech.name} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="font-semibold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Images */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Challenges and Solutions</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>

          {/* Navigation */}
          <div className="pt-16 border-t border-border">
            <Link href="/">
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

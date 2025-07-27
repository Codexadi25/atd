import React, { useState } from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Zap, Shield, Users, Award, Icon, WavesIcon, SwatchBookIcon, ServerCogIcon } from 'lucide-react';
import '../styles/TechStack.css';
import { AngularJsIcon, AWSIcon, DockerIcon, FlutterIcon, GithubActionIcon, KotlinIcon, JenkinsIcon, KubernetesIcon, MongoDBIcon, NodeJsIcon, PostgreSQLIcon, PythonIcon, ReactJsIcon, ReduxIcon, TypeScriptIcon, VueIcon, NextJsIcon, MCPServerIcon, CloudFlareIcon, FirebaseIcon, GCloudIcon, TailwindIcon,ExpressIcon } from '../assets/icons/iconsPcak'

function TechStack(){
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techStacks = {
    frontend: {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "blue-indigo",
      technologies: [
        { name: "React.js", logo: ReactJsIcon, description: "Modern UI library for dynamic web applications" },
        { name: "Next.js", logo: NextJsIcon , description: "Full-stack React framework with SSR" },
        { name: "TypeScript", logo: TypeScriptIcon, description: "Type-safe JavaScript for robust development" },
        { name: "Tailwind CSS", logo: TailwindIcon, description: "Utility-first CSS framework" },
        { name: "Vue.js", logo: VueIcon, description: "Progressive JavaScript framework" },
        { name: "Angular", logo: AngularJsIcon, description: "Enterprise web application platform" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "emerald-teal",
      technologies: [
        { name: "Node.js", logo: NodeJsIcon, description: "JavaScript runtime for scalable server applications" },
        { name: "Python", logo: PythonIcon, description: "AI/ML and web development powerhouse" },
        { name: "Cloudflare CDN", logo: CloudFlareIcon, description: "Enhance website security, improve performance, and ensure reliability" },
        { name: "PostgreSQL", logo: PostgreSQLIcon, description: "Advanced relational database system" },
        { name: "MongoDB", logo: MongoDBIcon, description: "Flexible NoSQL document database" },
        { name: "Express", logo: ExpressIcon, description: "Custom Backend APIs" }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "purple-pink",
      technologies: [
        { name: "React Native", logo: ReactJsIcon, description: "Cross-platform mobile apps with native performance" },
        { name: "Flutter", logo: FlutterIcon, description: "Google's UI toolkit for beautiful mobile apps" },
      //   { name: "Swift", logo: SwatchBookIcon, description: "Native iOS development language" },
        { name: "Kotlin", logo: KotlinIcon, description: "Modern Android development language" },
      //   { name: "PWA", logo: "⚡", description: "Progressive Web Applications" },
      //   { name: "Ionic", logo: "I", description: "Hybrid mobile app framework" }
      ]
    },
    devops: {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "orange-red",
      technologies: [
         { name: "Docker", logo: DockerIcon, description: "Containerization for consistent deployments" },
         { name: "AWS", logo: AWSIcon, description: "Amazon Web Services cloud platform" },
         { name:"Google Cloud", logo: GCloudIcon, description: "Google Cloud Platform Support" },
         { name: "Jenkins", logo: JenkinsIcon, description: "Continuous integration and deployment" },
         { name: "Kubernetes", logo: KubernetesIcon, description: "Container orchestration at scale" },
        { name: "MCP Servers", logo: MCPServerIcon, description: "Infrastructure as code automation" },
        { name:"Firebase", logo: FirebaseIcon, description: "Multiple Google's Firebase Services" },
        { name: "GitHub Actions", logo: GithubActionIcon, description: "CI/CD automation workflows" },
      ]
    }
  };

  const stats = [
    { icon: <Zap className="w-8 h-8" />, value: "100%", label: "Work Assurence", color: "yellow-orange" },
    { icon: <Shield className="w-8 h-8" />, value: "99.9%", label: "Uptime Guarantee", color: "green-emerald" },
    { icon: <Users className="w-8 h-8" />, value: "98%", label: "Happy Clients", color: "blue-indigo" },
    { icon: <Award className="w-8 h-8" />, value: "24/7", label: "Support Available", color: "purple-pink" }
  ];

  const categories = Object.keys(techStacks);

  return (
    <div className="techstackContainer">
      <div className="techstackWrapper">
        <div className="techstackHeader">
          <div className="headerContent">
            <div className="headerIcon">
              <Code className="w-8 h-8" />
            </div>
            <div className="headerText">
              <h1 className="mainTitle">Our Tech Stack</h1>
              <p className="brandSubtitle">Aditya Tech & Devoops</p>
            </div>
          </div>
          <p className="headerDescription">
            Cutting-edge technologies powering AI-driven digital solutions for startups and enterprises.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="category-nav">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn ${activeCategory === category ? 'active' : ''} ${techStacks[category].color}`}
            >
              <div className="category-btn-content">
                {techStacks[category].icon}
                <span>{techStacks[category].title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-grid-container">
          <div className="tech-grid-header">
            <div className={`tech-grid-icon ${techStacks[activeCategory].color}`}>
              {techStacks[activeCategory].icon}
            </div>
            <h2 className="tech-grid-title">
              {techStacks[activeCategory].title}
            </h2>
          </div>
          
          <div className="tech-grid">
            {techStacks[activeCategory].technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="tech-card-content">
                  <div className="tech-logo">
                     <img src={tech.logo} alt='logo-img' style={{height:'64px'}}/>
                  </div>
                  <div className="tech-info">
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
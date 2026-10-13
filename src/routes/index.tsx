import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowDown, BarChart3, Camera, ChartNoAxesCombined, Code2, BriefcaseBusiness, CalendarDays, Film, GraduationCap, MapPin, Github, Linkedin, Mail, Menu, X, Gamepad2, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { contactLinks, projects, type PortfolioProject } from "@/lib/portfolio";
import heroImage from "@/assets/campus-hero.jpg";
import campusImage from "@/assets/campus-stories.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Anmol Soni — Business, Data & Creative Perspectives" },
    { name: "description", content: "Meet Anmol Soni, a first-year BBA student at JECRC University exploring business analytics, data visualization, and photography." },
    { property: "og:title", content: "Anmol Soni — Business, Data & Creative Perspectives" },
    { property: "og:description", content: "A personal portfolio at the intersection of data-driven insights and creative storytelling." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const skills = [
  { name: "Data Analytics", icon: BarChart3 },
  { name: "Data Visualization", icon: ChartNoAxesCombined },
  { name: "Python", note: "Beginner", icon: Code2 },
  { name: "Business Strategy", icon: BriefcaseBusiness },
  { name: "Event Organizing", icon: CalendarDays },
  { name: "Photography", icon: Camera },
  { name: "Video Editing", icon: Film },
];

const contactIcons = { Email: Mail, LinkedIn: Linkedin, GitHub: Github } as const;

const pendingContactLinks = contactLinks.filter(link => link.placeholder);
const pendingNames = pendingContactLinks.map(link => link.name).join(" and ");

function DataPreview() {
  return <div className="data-preview" aria-label="Illustrative business analytics dashboard">
    <div className="dashboard-window">
      <div className="dashboard-top"><span className="flex items-center gap-2"><ChartNoAxesCombined size={15} /> BUSINESS OVERVIEW</span><span>Sample data · 2026</span></div>
      <div className="dashboard-metrics"><div><span>Total revenue</span><strong>₹ 2,48,500</strong><small>↗ 18.4% this period</small></div><div><span>Orders</span><strong>1,284</strong><small>↗ 12.8% this period</small></div><div><span>Growth</span><strong>24.6%</strong><small>↗ 4.2% this period</small></div></div>
      <div className="dashboard-chart"><div className="flex justify-between"><span>Revenue performance</span><span className="text-muted-foreground">Monthly</span></div><div className="chart-bars" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <div key={i} className={`chart-bar bar-${i}`} />)}</div><div className="chart-axis"><span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span></div></div>
    </div>
    <span className="preview-caption">FROM NUMBERS TO NARRATIVES.</span>
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const navItems = ["About", "Skills", "Projects", "Contact"];

  return <div className="portfolio">
    <header className="site-header">
      <div className="page-width flex h-20 items-center justify-between">
        <a href="#home" className="brand" aria-label="Anmol Soni home"><span className="brand-mark">as<span>.</span></span><span>Anmol Soni<span className="text-primary">.</span></span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>)}</nav>
        <Button asChild variant="outline" className="hidden h-10 rounded-full border-foreground/20 px-5 md:inline-flex"><a href="#contact">Let’s connect <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={16} /></a>)}</nav>}
    </header>

    <main>
      <section id="home" className="hero">
        <img src={heroImage} width={1920} height={1024} alt="An architectural view of a sunlit campus, an illustrative image" className="hero-image" />
        <div className="hero-shade" />
        <div className="page-width hero-content">
          <div className="eyebrow"><span className="status-dot" /> STUDENT. ANALYST. STORYTELLER.</div>
          <h1>Anmol Soni<span>.</span></h1>
          <h2>First-year BBA student exploring<br /><strong>business analytics, data visualization, and photography.</strong></h2>
          <p>Hi, I’m Anmol — passionate about blending data-driven insights with creative storytelling.</p>

          <div className="hero-actions"><Button asChild size="lg" className="h-12 px-6"><a href="#projects">View Projects <ArrowUpRight /></a></Button><Button asChild variant="outline" size="lg" className="h-12 border-foreground/25 bg-background/40 px-6"><a href="#contact">Contact Me <ArrowRight /></a></Button></div>
          <div className="hero-location"><MapPin size={14} /> Jaipur, India <span className="location-divider" /> BBA @ JECRC University</div>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Explore about Anmol"><ArrowDown size={19} /></a>
        <span className="hero-image-label">A NEW PERSPECTIVE, EVERY DAY.</span>
      </section>

      <div className="interest-band"><div className="page-width interest-inner"><span className="interest-label">AT THE INTERSECTION OF</span><span><BarChart3 /> Business Analytics</span><span className="band-dot">✳</span><span><ChartNoAxesCombined /> Data Visualization</span><span className="band-dot">✳</span><span><Camera /> Photography</span></div></div>

      <section id="about" className="page-width section-space about-section">
        <div className="section-label"><span>01 / ABOUT ME</span><span className="section-line" /></div>
        <div className="about-grid"><div><h2 className="section-title">Business by education.<br /><span className="text-muted-foreground">Creative by instinct.</span></h2><p className="section-copy mt-6">I’m at the beginning of my journey, exploring how business, data, and creativity can work together. From finding a story in a spreadsheet to capturing one through my camera, I’m driven by curiosity.</p><p className="section-copy mt-4">My goal? To bring fresh thinking and data-driven decisions to my family business — helping it innovate, grow, and reach new possibilities.</p><div className="about-interests"><span><Camera /> Candid photography</span><span><Film /> Video editing</span><span><CalendarDays /> Events</span><span><Gamepad2 /> Valorant</span><span><Bike /> Motorcycle rides</span></div></div>
        <div className="education"><h3><GraduationCap size={20} /> THE LEARNING JOURNEY</h3><div className="education-item"><div className="education-marker" /><span className="education-tag">CURRENT · FIRST YEAR</span><h4>Bachelor of Business Administration</h4><p>Data Analytics & Data Visualization (Samatrix)</p><span className="education-school">Jaipur School of Business<br />JECRC University</span></div><div className="education-item"><div className="education-marker muted-marker" /><span className="education-tag">FOUNDATION</span><div className="flex flex-wrap items-center justify-between gap-3"><h4>12th Grade · Commerce</h4><span className="grade">86.7<span>%</span></span></div><p>CBSE Board</p><span className="education-school">Rainbow School, Jhotwara</span></div></div></div>
      </section>

      <section id="skills" className="skills-section"><div className="page-width section-space"><div className="section-label"><span>02 / MY TOOLKIT</span><span className="section-line" /></div><div className="section-heading"><h2 className="section-title">A little analytical. A little creative.</h2><p className="section-copy">Skills I’m building, one project at a time.</p></div><div className="skills-grid">{skills.map(({ name, note, icon: Icon }) => <div className="skill" key={name}><Icon size={22} strokeWidth={1.5} /><span>{name}</span>{note && <small>{note}</small>}</div>)}</div></div></section>

      <section id="projects" className="page-width section-space"><div className="section-label"><span>03 / SELECTED PROJECTS</span><span className="section-line" /></div><div className="section-heading"><h2 className="section-title">Ideas turned into explorations.</h2><span className="project-note">PROJECT CONCEPTS / 01—02</span></div><div className="projects-grid">{projects.map((project, index) => <article className="project" key={project.id}><Button variant="ghost" className="project-image-button" onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.title}`}>{project.id === "campus" ? <><img src={campusImage} width={1280} height={832} alt="Illustrative campus photo of students walking through a courtyard" loading="lazy" /><span className="photo-caption"><Camera size={15} /> CAMPUS, THROUGH A DIFFERENT LENS.</span></> : <DataPreview />}<span className="project-open"><ArrowUpRight size={22} /></span></Button><div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div><h3><Button variant="link" className="project-title" onClick={() => setSelectedProject(project)}>{project.title}<ArrowUpRight /></Button></h3><p className="section-copy">{project.description}</p><div className="project-tools">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div><p className="sample-disclaimer">Project concepts and illustrative imagery; original work and results to follow.</p></section>

      <section id="contact" className="contact-section"><div className="page-width contact-inner"><div><div className="section-label"><span>04 / LET’S CONNECT</span></div><h2>Good things start<br />with a <span>conversation.</span><ArrowUpRight className="contact-arrow" /></h2><p>Have an idea, a project, or just want to say hello?<br />I’d love to hear from you.</p></div><div className="contact-links">{contactLinks.map(({ name, href, handle, detail }) => { const Icon = contactIcons[name]; const external = href.startsWith("http"); return <Button key={name} asChild variant="ghost" className="contact-link"><a href={href} title={handle} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}><Icon size={21} /><span>{name}<small>{detail}</small></span><ArrowUpRight /></a></Button>; })}{pendingContactLinks.length > 0 && <p className="contact-note">{pendingNames} {pendingContactLinks.length === 1 ? "link above is" : "links above are"} still {pendingContactLinks.length === 1 ? "a placeholder" : "placeholders"}; the real {pendingContactLinks.length === 1 ? "one" : "ones"} will appear here.</p>}</div></div></section>
    </main>
    <footer className="page-width footer"><a href="#home" className="footer-brand">Anmol Soni<span>.</span></a><p>© {new Date().getFullYear()} Anmol Soni. Made with curiosity.</p><a href="#home" className="back-top">Back to top <ArrowUpRight size={15} /></a></footer>

    <Dialog open={selectedProject !== null} onOpenChange={open => { if (!open) setSelectedProject(null); }}><DialogContent className="max-h-[85dvh] overflow-y-auto rounded-lg"><span className="eyebrow text-primary">PROJECT CONCEPT</span><DialogTitle className="text-2xl leading-snug">{selectedProject?.title}</DialogTitle><DialogDescription className="leading-relaxed">{selectedProject?.description}</DialogDescription><p className="text-sm leading-relaxed text-muted-foreground">{selectedProject?.detail}</p><div className="project-tools">{selectedProject?.tools.map(tool => <span key={tool}>{tool}</span>)}</div></DialogContent></Dialog>
  </div>;
}

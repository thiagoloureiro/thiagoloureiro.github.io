import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ArticlesSection from './components/ArticlesSection'
import GitHubContribution from './components/GitHubContribution'
import WebMcpTools from './components/WebMcpTools'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script
        src="https://umami.alerthawk.net/umami"
        data-website-id="15dcfdb5-2ec9-491a-a92c-d8d47f853689"
      />
      <WebMcpTools />
      <div className="relative min-h-screen">
        <Header />
        <main>
          <Hero />
          <ProjectsSection />
          <ArticlesSection />
          <SkillsSection />
          <GitHubContribution />
        </main>
        <Footer />
      </div>
    </>
  )
}

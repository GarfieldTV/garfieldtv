export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative hairline-t">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="block h-5 w-[3px] bg-bmw-blue" />
          <span className="tech-label">
            © {year} · GarfieldTV · All rights reserved
          </span>
        </div>
        <div className="flex items-center gap-6 tech-label-dim">
          <a href="#top" className="hover:text-bmw-blue transition-colors">
            ↑ Back to top
          </a>
          <span>Built with ❤️ by @garfieldtv</span>
        </div>
      </div>
    </footer>
  )
}

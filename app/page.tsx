export default function Home() {
  return (
    <>
      {/* Navigation (Floating Pill) */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto bg-brand-black/80 backdrop-blur-md border border-brand-border rounded-pill px-6 py-3 flex items-center justify-between w-full max-w-[1080px] transition-all duration-300">
          <div className="flex items-center gap-2">
            <i className="ph ph-hexagon font-display text-2xl text-brand-white"></i>
            <span className="font-display font-medium text-lg tracking-wide">FLUX</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-gray">
            <a href="#features" className="hover:text-brand-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-2">Features</a>
            <a href="#workflow" className="hover:text-brand-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-2">How it Works</a>
            <a href="#analytics" className="hover:text-brand-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-2">Analytics</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-medium hover:text-brand-gray transition-colors focus:outline-none">Log in</a>
            <a href="#" className="bg-brand-white text-brand-black px-5 py-2.5 rounded-pill text-[14px] font-medium hover:bg-brand-blue hover:text-brand-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-black">
              Start Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-32 pb-20 text-center overflow-hidden">
        {/* Background Grid Element */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] -z-10"></div>

        <div className="max-w-[1080px] mx-auto flex flex-col items-center">
          <div className="border border-brand-border rounded-pill px-4 py-1.5 mb-8 flex items-center gap-2 bg-brand-charcoal/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-brand-gray">The Context Engine</span>
          </div>

          <h1 className="font-display text-display-xl font-medium mb-6 text-brand-white">
            Write once. <br />
            <span className="font-serif italic font-normal text-brand-gray">Resonate</span> everywhere.
          </h1>

          <p className="text-lg md:text-[18px] text-brand-gray max-w-2xl leading-relaxed mb-10">
            Stop wasting time manually rewriting and tracking. Transform a single idea into native, culturally-adapted posts for X, Threads, and Facebook in one click.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#" className="w-full sm:w-auto bg-brand-white text-brand-black px-8 py-4 rounded-pill text-[16px] font-medium hover:bg-brand-blue hover:text-brand-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-black">
              Deploy Your First Post
            </a>
            <a href="#features" className="w-full sm:w-auto bg-transparent border border-brand-border text-brand-white px-8 py-4 rounded-pill text-[16px] font-medium hover:bg-brand-charcoal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-black">
              Explore Architecture
            </a>
          </div>
        </div>
      </section>

      {/* Marquee / Platform Support */}
      <div className="border-y border-brand-border bg-brand-charcoal/30 overflow-hidden py-6">
        <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-brand-gray uppercase tracking-widest">Architected for native contexts</p>
          <div className="flex items-center gap-12 text-brand-white opacity-50">
            <div className="flex items-center gap-2"><i className="ph ph-x-logo text-2xl"></i><span className="font-display font-medium">X (Twitter)</span></div>
            <div className="flex items-center gap-2"><i className="ph ph-threads-logo text-2xl"></i><span className="font-display font-medium">Threads</span></div>
            <div className="flex items-center gap-2"><i className="ph ph-facebook-logo text-2xl"></i><span className="font-display font-medium">Facebook</span></div>
          </div>
        </div>
      </div>

      {/* The Problem & Solution (Bento Grid) */}
      <section id="features" className="py-24 md:py-40 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-h2 font-medium mb-4">Dumb pipelines are dead.<br />Enter the <span className="text-brand-blue">Social Translator</span>.</h2>
            <p className="text-brand-gray text-lg max-w-xl">Traditional scheduling tools just blast the same rigid text everywhere. We built an AI that understands platform culture.</p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-sm auto-rows-[280px]">
            {/* Card 1: Context is King (Spans 8 cols) */}
            <div className="bento-card md:col-span-8 bg-brand-charcoal border border-brand-border rounded-2xl p-8 relative overflow-hidden group hover:border-brand-gray transition-colors duration-300 flex flex-col justify-end">
              <div className="absolute top-8 right-8 text-brand-border group-hover:text-brand-blue transition-colors duration-300">
                <i className="ph ph-translate text-4xl"></i>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-medium mb-2">Contextual Adaptation Engine</h3>
                <p className="text-brand-gray text-base max-w-md">X demands sharp, analytical precision. Threads craves casual, everyday banter. Input your core thought once, and watch our engine rewrite it to fit the exact demographic of each platform.</p>
              </div>
            </div>

            {/* Card 2: One-Click Publish (Spans 4 cols) */}
            <div className="bento-card md:col-span-4 bg-brand-charcoal border border-brand-border rounded-2xl p-8 relative overflow-hidden group hover:border-brand-gray transition-colors duration-300 flex flex-col justify-end">
              <div className="absolute top-8 right-8 text-brand-border group-hover:text-brand-blue transition-colors duration-300">
                <i className="ph ph-paper-plane-tilt text-4xl"></i>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-medium mb-2">Zero Friction</h3>
                <p className="text-brand-gray text-base">Review the AI-generated variants. Approve. Publish everywhere instantly.</p>
              </div>
            </div>

            {/* Card 3: Unified Analytics (Spans 12 cols, distinct layout) */}
            <div id="analytics" className="bento-card md:col-span-12 bg-brand-charcoal border border-brand-border rounded-2xl p-8 relative overflow-hidden group hover:border-brand-gray transition-colors duration-300 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,rgba(0,153,255,0.05),transparent_50%)]"></div>

              <div className="relative z-10 max-w-lg">
                <div className="border border-brand-border rounded-pill px-3 py-1 text-xs uppercase tracking-wider text-brand-white inline-block mb-4 bg-brand-black">End Tab-Hopping</div>
                <h3 className="font-display text-3xl font-medium mb-3">Unified Telemetry</h3>
                <p className="text-brand-gray text-base">Stop switching between 3 different apps to check likes, retweets, and comments. We pull all engagement metrics into a single, beautifully structured dashboard.</p>
              </div>

              {/* Abstract UI Mockup inside card */}
              <div className="relative z-10 w-full md:w-[400px] h-[160px] bg-brand-black border border-brand-border rounded-xl p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-brand-gray border-b border-brand-border pb-2">
                  <span>Post Performance</span>
                  <span>Live</span>
                </div>
                <div className="flex items-end gap-2 h-full pt-2">
                  <div className="w-1/3 bg-brand-charcoal rounded-t-md h-[40%] relative group-hover:h-[60%] transition-all duration-500 delay-75"><span className="absolute -top-6 text-xs w-full text-center hidden group-hover:block"><i className="ph-fill ph-threads-logo"></i></span></div>
                  <div className="w-1/3 bg-brand-blue rounded-t-md h-[70%] relative group-hover:h-[90%] transition-all duration-500 delay-150"><span className="absolute -top-6 text-xs w-full text-center hidden group-hover:block"><i className="ph-fill ph-x-logo"></i></span></div>
                  <div className="w-1/3 bg-brand-charcoal rounded-t-md h-[30%] relative group-hover:h-[50%] transition-all duration-500 delay-200"><span className="absolute -top-6 text-xs w-full text-center hidden group-hover:block"><i className="ph-fill ph-facebook-logo"></i></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Linear Flow) */}
      <section id="workflow" className="py-24 md:py-40 px-6 bg-brand-black border-y border-brand-border">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-display text-h2 font-medium mb-4">The Pipeline.</h2>
            <p className="text-brand-gray text-lg">A minimal upfront configuration for maximum cross-platform yield.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-sm relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-brand-border z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-charcoal border border-brand-border flex items-center justify-center font-display text-xl mb-6 shadow-[0_0_0_8px_#0F0F0F]">1</div>
              <h4 className="font-display text-xl font-medium mb-2">The Raw Input</h4>
              <p className="text-brand-gray text-sm px-4">Draft your core idea, article, or shower thought in a distraction-free editor.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-charcoal border border-brand-border flex items-center justify-center font-display text-xl mb-6 shadow-[0_0_0_8px_#0F0F0F]">2</div>
              <h4 className="font-display text-xl font-medium mb-2">AI Processing</h4>
              <p className="text-brand-gray text-sm px-4">Flux analyzes the text and spins up variants tailored to each platform&apos;s culture.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-charcoal border border-brand-border flex items-center justify-center font-display text-xl mb-6 shadow-[0_0_0_8px_#0F0F0F]">3</div>
              <h4 className="font-display text-xl font-medium mb-2">Approval &amp; Sync</h4>
              <p className="text-brand-gray text-sm px-4">Review the outputs. Edit if needed. Hit one button to distribute everywhere.</p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-blue text-brand-white flex items-center justify-center font-display text-xl mb-6 shadow-[0_0_0_8px_#0F0F0F]"><i className="ph ph-chart-line-up"></i></div>
              <h4 className="font-display text-xl font-medium mb-2">Data Harvest</h4>
              <p className="text-brand-gray text-sm px-4">Watch unified performance metrics roll in automatically to your central dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-[800px] mx-auto bg-brand-charcoal border border-brand-border rounded-[32px] p-12 md:p-20 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,153,255,0.15),transparent_70%)] pointer-events-none"></div>

          <h2 className="font-display text-h1 font-medium mb-6 relative z-10">Stop managing platforms.<br />Start <span className="font-serif italic text-brand-gray">creating</span>.</h2>
          <p className="text-brand-gray text-lg mb-10 relative z-10 max-w-md mx-auto">Join the elite creators who have automated their distribution layer and regained their focus.</p>

          <a href="#" className="inline-block relative z-10 bg-brand-white text-brand-black px-10 py-5 rounded-pill text-[16px] font-medium hover:bg-brand-blue hover:text-brand-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue/30">
            Start your 14-day free trial
          </a>
          <p className="mt-6 text-xs text-brand-gray uppercase tracking-widest relative z-10">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border pt-16 pb-8 px-6 bg-brand-black">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <i className="ph ph-hexagon font-display text-3xl text-brand-white"></i>
            <span className="font-display font-medium text-xl tracking-wide">FLUX</span>
          </div>

          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-4">
              <p className="text-brand-white font-medium mb-2">Product</p>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Features</a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Integrations</a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Pricing</a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-brand-white font-medium mb-2">Resources</p>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Manifesto</a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Changelog</a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Support</a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-brand-white font-medium mb-2">Legal</p>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Privacy</a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">Terms</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-border/50 text-xs text-brand-gray">
          <p>&copy; 2026 Flux Utility Corp. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-white transition-colors"><i className="ph ph-x-logo text-lg"></i></a>
            <a href="#" className="hover:text-brand-white transition-colors"><i className="ph ph-github-logo text-lg"></i></a>
          </div>
        </div>
      </footer>
    </>
  )
}

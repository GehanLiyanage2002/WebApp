import { Cloud, Server, Database, Shield, Globe, Cpu, ChevronRight, Play } from 'lucide-react';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden bg-[#0b0c10]">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
        <header className="max-w-5xl w-full text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-bg border border-glass-border mb-6 animate-pulse-slow">
            <Cloud className="w-5 h-5 text-tertiary" />
            <span className="text-sm font-medium tracking-wide text-blue-200">Welcome to the Cloud Era</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-white via-blue-200 to-primary text-transparent bg-clip-text drop-shadow-sm">
            What is Microsoft Azure?
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Empower your organization with endless possibilities. Azure is a comprehensive set of cloud services that developers and IT professionals use to build, deploy, and manage applications through our global network of datacenters.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 group cursor-pointer">
              Start Free Trial <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-glass-bg hover:bg-white/10 border border-glass-border text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </header>

        <main className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Server className="w-7 h-7 text-tertiary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Compute Power</h3>
            <p className="text-gray-400 leading-relaxed">
              Provision Windows and Linux virtual machines, containers, and serverless functions in seconds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-7 h-7 text-tertiary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Scalable Storage</h3>
            <p className="text-gray-400 leading-relaxed">
              Highly secure, globally distributed data stores. No matter your data type, Azure has a solution.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-tertiary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Enterprise Security</h3>
            <p className="text-gray-400 leading-relaxed">
              Backed by a team of experts, and proactive compliance trusted by enterprises, governments, and startups.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 text-tertiary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Global Reach</h3>
            <p className="text-gray-400 leading-relaxed">
              More global regions than any other cloud provider, offering the scale you need to bring your apps closer to users.
            </p>
          </div>

          {/* Card 5 */}
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 cursor-pointer group lg:col-span-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7 text-tertiary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">AI & Machine Learning</h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Create the next generation of applications using artificial intelligence capabilities for any developer and any scenario.
              From Azure OpenAI to Cognitive Services, build intelligent solutions that see, hear, speak, and analyze.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

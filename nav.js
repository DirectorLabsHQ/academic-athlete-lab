document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
    <nav class="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md border-b border-neutral-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="index.html" class="text-xl font-black tracking-tighter uppercase italic text-white hover:text-purple-500 transition">
            AA<span class="text-purple-500">Lab</span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a href="index.html" class="nav-link text-white hover:text-purple-400 transition">HOME</a>
            
            <!-- Tools Dropdown -->
            <div class="relative group">
              <button class="nav-link text-white group-hover:text-purple-400 transition flex items-center gap-1 uppercase tracking-wider">
                TOOLS
                <svg class="w-3 h-3 fill-current opacity-70" viewBox="0 0 12 12"><path d="M6 8.586L10.293 4.293l1.414 1.414L6 11.414l-5.707-5.707L1.707 4.293z"/></svg>
              </button>
              <div class="absolute right-0 mt-3 w-72 bg-[#111] border border-neutral-800 rounded-xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right max-h-[70vh] overflow-y-auto">
                <div class="grid grid-cols-1">
                  <a href="1rm-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">1RM Strength</a>
                  <a href="ffmi-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">FFMI Lab</a>
                  <a href="smi-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">SMI Lab</a>
                  <a href="grip-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Grip Strength</a>
                  <a href="vo2-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">VO2 Max</a>
                  <a href="watts-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Watts/kg</a>
                  <a href="max-hr.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Max HR</a>
                  <a href="bio-age.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Biological Age</a>
                  <a href="functional-age.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Functional Age</a>
                  <a href="insulin-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Insulin Lab</a>
                  <a href="metabolic-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Metabolic Lab</a>
                  <a href="protein-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Protein Lab</a>
                  <a href="hydration-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Hydration Lab</a>
                  <a href="mobility-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Mobility Lab</a>
                  <a href="recovery-lab.html" class="block px-5 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition">Recovery Lab</a>
                </div>
              </div>
            </div>

            <a href="recommendations.html" class="nav-link text-white hover:text-purple-400 transition uppercase tracking-wider">GEAR & RECS</a>
            <a href="athlete-lab.html" class="nav-link text-purple-400 hover:text-purple-300 transition uppercase tracking-wider font-bold">STREAK LAB</a>
          </div>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu (hidden by default) -->
      <div id="mobile-menu" class="hidden md:hidden bg-black border-t border-neutral-800 py-6 px-6">
        <div class="flex flex-col space-y-4 text-center">
          <a href="index.html" class="nav-link text-white text-lg">HOME</a>
          <div class="border-t border-neutral-800 pt-4">
            <p class="text-neutral-500 text-xs uppercase tracking-widest mb-3">Tools</p>
            <div class="grid grid-cols-2 gap-3">
              <a href="1rm-lab.html" class="text-neutral-300 hover:text-white transition">1RM</a>
              <!-- Add all other tool links here similarly, abbreviated if needed -->
              <a href="recommendations.html" class="col-span-2 text-white font-medium mt-4">Gear & Recs →</a>
              <a href="athlete-lab.html" class="col-span-2 text-purple-400 font-bold">Streak Lab →</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Simple mobile toggle
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});

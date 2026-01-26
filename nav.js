document.addEventListener('DOMContentLoaded', function () {
    const navHTML = `
<nav id="main-nav" class="bg-black py-4 px-6 sticky top-0 border-b border-neutral-900 w-full" style="z-index:999999;">
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center gap-8">
      <a href="index.html" class="text-white font-black italic tracking-tighter uppercase text-xl">
        ACADEMIC<span class="text-neutral-500">ATHLETE</span>
      </a>

      <div class="flex gap-8 items-center font-mono text-[10px]">
        <a href="index.html" class="text-white border-b border-white pb-1 uppercase font-bold">Lab Home</a>

        <!-- TOOLS -->
        <div id="tools-wrapper" class="relative">
          <button id="tools-button" class="text-neutral-500 hover:text-white flex items-center gap-1 uppercase font-bold py-2 bg-transparent border-none cursor-pointer">
            Tools
            <svg id="tools-arrow" class="w-3 h-3 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
            </svg>
          </button>

          <!-- HOVER BRIDGE (CRITICAL) -->
          <div class="absolute left-0 top-full h-4 w-full"></div>

          <!-- DROPDOWN -->
          <div id="tools-menu-dropdown" class="absolute left-0 top-full w-72 hidden">
            <div class="bg-[#111] border border-[#222] rounded-xl shadow-2xl p-4">
              <div class="grid gap-4">
                <div>
                  <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Power & Sarcopenia</p>
                  <a href="1rm-lab.html" class="block text-white hover:text-yellow-400 text-sm">1RM Strength</a>
                  <a href="ffmi-lab.html" class="block text-white hover:text-yellow-400 text-sm">FFMI Lab</a>
                  <a href="smi-lab.html" class="block text-white hover:text-yellow-400 text-sm">SMI Lab</a>
                </div>

                <div>
                  <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Engine & Power</p>
                  <a href="vo2-lab.html" class="block text-white hover:text-yellow-400 text-sm">VO2 Max</a>
                  <a href="watts-lab.html" class="block text-white hover:text-yellow-400 text-sm">Watts/kg</a>
                  <a href="max-hr.html" class="block text-white hover:text-yellow-400 text-sm">Max HR</a>
                  <a href="grip-lab.html" class="block text-white hover:text-yellow-400 text-sm">Grip Strength</a>
                </div>

                <div>
                  <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Cellular & Functional</p>
                  <a href="bio-age.html" class="block text-white hover:text-yellow-400 text-sm">Biological Age</a>
                  <a href="functional-age.html" class="block text-white hover:text-yellow-400 text-sm">Functional Age</a>
                </div>

                <div>
                  <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Metabolic & Recovery</p>
                  <a href="insulin-lab.html" class="block text-white hover:text-yellow-400 text-sm">Insulin Lab</a>
                  <a href="metabolic-lab.html" class="block text-white hover:text-yellow-400 text-sm">Metabolic</a>
                  <a href="protein-lab.html" class="block text-white hover:text-yellow-400 text-sm">Protein Lab</a>
                  <a href="hydration-lab.html" class="block text-white hover:text-yellow-400 text-sm">Hydration</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="recommendations.html" class="text-neutral-500 hover:text-white uppercase font-bold">Gear & Recs</a>
        <a href="athlete-lab.html" class="text-purple-500 italic font-bold uppercase">The Streak Lab</a>
      </div>
    </div>
  </div>
</nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const wrapper = document.getElementById('tools-wrapper');
    const menu = document.getElementById('tools-menu-dropdown');
    const arrow = document.getElementById('tools-arrow');

    wrapper.addEventListener('mouseenter', () => {
        menu.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
    });

    wrapper.addEventListener('mouseleave', () => {
        menu.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
    });
});

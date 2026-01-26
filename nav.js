document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
<nav id="main-nav" class="bg-black py-4 px-6 sticky top-0 border-b border-neutral-900 w-full" style="z-index: 999999 !important; position: sticky !important; top: 0;">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="index.html" class="text-white font-black italic tracking-tighter mr-4 uppercase text-xl">ACADEMIC<span class="text-neutral-500">ATHLETE</span></a>
            <div class="flex gap-6 md:gap-8 items-center font-mono text-[10px]">
                <a href="index.html" class="text-white border-b border-white pb-1 uppercase font-bold tracking-widest">Lab Home</a>
                
                <div class="relative" id="tools-wrapper" style="padding-bottom: 15px; margin-bottom: -15px;">
                    <button id="tools-button" class="text-neutral-500 hover:text-white flex items-center gap-1 uppercase font-bold tracking-widest transition-colors duration-200 py-2 cursor-pointer border-none bg-transparent">
                        Tools
                        <svg id="tools-arrow" class="w-3 h-3 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" style="pointer-events: none;">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                    
                    <div class="absolute left-0 top-full w-72" id="tools-menu-dropdown" style="display: none; z-index: 1000000; padding-top: 10px;">
                        <div class="bg-[#111] border border-[#222] rounded-xl shadow-2xl overflow-hidden p-4">
                             <div class="grid gap-4">
                                <div>
                                    <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Power & Sarcopenia</p>
                                    <a href="1rm-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">1RM Strength</a>
                                    <a href="ffmi-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">FFMI Lab</a>
                                    <a href="smi-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">SMI Lab</a>
                                </div>
                                <div>
                                    <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Engine & Power</p>
                                    <a href="vo2-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">VO2 Max</a>
                                    <a href="watts-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Watts/kg</a>
                                    <a href="max-hr.html" class="block text-white hover:text-yellow-400 text-sm py-1">Max HR</a>
                                    <a href="grip-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Grip Strength</a>
                                </div>
                                <div>
                                    <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Cellular & Functional</p>
                                    <a href="bio-age.html" class="block text-white hover:text-yellow-400 text-sm py-1">Biological Age</a>
                                    <a href="functional-age.html" class="block text-white hover:text-yellow-400 text-sm py-1">Functional Age</a>
                                </div>
                                <div>
                                    <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1">Metabolic & Recovery</p>
                                    <a href="insulin-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Insulin Lab</a>
                                    <a href="metabolic-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Metabolic</a>
                                    <a href="protein-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Protein Lab</a>
                                    <a href="hydration-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Hydration</a>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                
                <a href="recommendations.html" class="text-neutral-500 hover:text-white uppercase font-bold tracking-widest">Gear & Recs</a>
                <a href="athlete-lab.html" class="text-purple-500 border-l border-neutral-800 pl-6 italic font-bold uppercase tracking-widest">The Streak Lab</a>
            </div>
        </div>
    </div>
</nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const wrapper = document.getElementById('tools-wrapper');
    const menu = document.getElementById('tools-menu-dropdown');
    const arrow = document.getElementById('tools-arrow');

    if (wrapper && menu && arrow) {
        // Use 'mouseenter' and 'mouseleave' on the WRAPPER, not the button.
        // This keeps the menu open while the mouse is in the padding area.
        wrapper.addEventListener('mouseenter', function() {
            menu.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        });

        wrapper.addEventListener('mouseleave', function() {
            menu.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
<style>
    /* CSS Dropdown Logic - No JS Required */
    #tools-wrapper:hover #tools-menu {
        display: block !important;
        opacity: 1 !important;
        pointer-events: auto !important;
    }
    #tools-wrapper:hover #tools-arrow {
        transform: rotate(180deg);
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
</style>

<nav id="main-nav" class="bg-black py-4 px-6 fixed top-0 left-0 w-full border-b border-neutral-900 shadow-2xl" style="z-index: 999999;">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="index.html" class="text-white font-black italic tracking-tighter mr-4 uppercase text-xl">ACADEMIC<span class="text-neutral-500">ATHLETE</span></a>
            <div class="flex gap-6 md:gap-8 items-center font-mono text-[10px]">
                <a href="index.html" class="text-white border-b border-white pb-1 uppercase font-bold tracking-widest">Lab Home</a>
                
                <div class="relative" id="tools-wrapper" style="padding-bottom: 25px; margin-bottom: -25px;">
                    <button class="text-neutral-500 hover:text-white flex items-center gap-1 uppercase font-bold tracking-widest transition-colors duration-200 py-2 cursor-pointer bg-transparent border-none">
                        Tools
                        <svg id="tools-arrow" class="w-3 h-3 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                    
                    <div id="tools-menu" class="absolute left-0 top-full w-72 bg-[#111] border border-[#222] rounded-xl shadow-2xl overflow-hidden hidden" style="margin-top: 10px;">
                        <div class="max-h-[80vh] overflow-y-auto no-scrollbar grid gap-4 p-5">
                            <div>
                                <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1 border-b border-neutral-800 pb-1">Power & Sarcopenia</p>
                                <a href="1rm-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">1RM Strength</a>
                                <a href="ffmi-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">FFMI Lab</a>
                                <a href="smi-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">SMI Lab</a>
                            </div>
                            <div>
                                <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1 border-b border-neutral-800 pb-1">Engine & Power</p>
                                <a href="vo2-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">VO2 Max</a>
                                <a href="watts-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Watts/kg</a>
                                <a href="max-hr.html" class="block text-white hover:text-yellow-400 text-sm py-1">Max HR</a>
                                <a href="grip-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Grip Strength</a>
                            </div>
                            <div>
                                <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1 border-b border-neutral-800 pb-1">Cellular & Functional</p>
                                <a href="bio-age.html" class="block text-white hover:text-yellow-400 text-sm py-1">Biological Age</a>
                                <a href="functional-age.html" class="block text-white hover:text-yellow-400 text-sm py-1">Functional Age</a>
                            </div>
                            <div>
                                <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1 border-b border-neutral-800 pb-1">Metabolic & Recovery</p>
                                <a href="insulin-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Insulin Lab</a>
                                <a href="metabolic-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Metabolic</a>
                                <a href="protein-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Protein Lab</a>
                                <a href="hydration-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Hydration</a>
                            </div>
                            <div>
                                <p class="text-neutral-600 text-[9px] uppercase font-bold mb-1 border-b border-neutral-800 pb-1">Structural Integrity</p>
                                <a href="mobility-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Mobility Lab</a>
                                <a href="recovery-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1">Recovery Lab</a>
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
});

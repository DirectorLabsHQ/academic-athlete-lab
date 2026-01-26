document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
<nav class="bg-black py-4 px-6 sticky top-0 z-[100] backdrop-blur-md bg-black/90 border-b border-neutral-900">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="index.html" class="text-white font-black italic tracking-tighter mr-4 uppercase text-xl">ACADEMIC<span class="text-neutral-500">ATHLETE</span></a>
            
            <div class="flex gap-6 md:gap-8 items-center font-mono text-[10px]">
                <a href="index.html" class="nav-link text-white border-b border-white pb-1">Lab Home</a>
                
                <div class="relative group h-full flex items-center">
                    <button class="nav-link text-neutral-500 group-hover:text-white flex items-center gap-1 focus:outline-none py-2">
                        Tools
                        <svg class="w-3 h-3 fill-current transition-transform group-hover:rotate-180" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                    
                    <div class="absolute left-0 top-full pt-2 w-72 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                        <div class="bg-[#111] border border-[#222] rounded-xl shadow-2xl overflow-hidden">
                            <div class="max-h-[70vh] overflow-y-auto no-scrollbar">
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Power & Sarcopenia Defense</p>
                                    <a href="1rm-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">1RM Strength</a>
                                    <a href="ffmi-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">FFMI Lab</a>
                                    <a href="smi-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">SMI Lab</a>
                                </div>
                                
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Engine & Power Output</p>
                                    <a href="vo2-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">VO2 Max</a>
                                    <a href="watts-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Watts/kg</a>
                                    <a href="max-hr.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Max HR</a>
                                    <a href="grip-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Grip Strength</a>
                                </div>
                                
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Cellular & Functional Age</p>
                                    <a href="bio-age.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Biological Age</a>
                                    <a href="functional-age.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Functional Age</a>
                                </div>
                                
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Metabolic & Recovery</p>
                                    <a href="insulin-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Insulin Lab</a>
                                    <a href="metabolic-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Metabolic</a>
                                    <a href="protein-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Protein Lab</a>
                                    <a href="hydration-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Hydration</a>
                                </div>
                                
                                <div class="px-4 py-3">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Structural Integrity</p>
                                    <a href="mobility-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Mobility Lab</a>
                                    <a href="recovery-lab.html" class="block text-white hover:text-safety-yellow text-sm py-1.5 transition-colors">Recovery Lab</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a href="recommendations.html" class="nav-link text-neutral-500 hover:text-white">Gear & Recs</a>
                <a href="athlete-lab.html" class="nav-link text-purple-500 border-l border-neutral-800 pl-6 italic font-bold">The Streak Lab</a>
            </div>
        </div>
    </div>
</nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
});

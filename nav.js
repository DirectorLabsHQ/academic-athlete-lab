document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
<nav class="bg-black py-4 px-6 sticky top-0 z-[100] backdrop-blur-md bg-black/90 border-b border-neutral-900 overflow-x-auto no-scrollbar">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="index.html" class="text-white font-black italic tracking-tighter mr-4 uppercase text-xl">ACADEMIC<span class="text-neutral-500">ATHLETE</span></a>
            
            <div class="flex gap-6 md:gap-8 whitespace-nowrap items-center font-mono text-[10px]">
                <a href="index.html" class="nav-link text-white border-b border-white pb-1">Lab Home</a>
                
                <div class="relative group">
                    <button class="nav-link text-neutral-500 hover:text-white flex items-center gap-1 focus:outline-none">
                        Tools
                        <svg class="w-3 h-3 fill-current transition-transform group-hover:rotate-180" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                    
                    <div class="absolute left-0 mt-3 w-72 bg-[#111] border border-[#222] rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 overflow-hidden z-50">
                        <div class="max-h-[70vh] overflow-y-auto no-scrollbar">
                            <!-- All the dropdown categories here – copy from the previous nav code -->
                            <!-- Power & Sarcopenia Defense --> 
                            <div class="px-4 py-3 border-b border-neutral-800"> ... </div>
                            <!-- Engine & Power Output --> 
                            <div class="px-4 py-3 border-b border-neutral-800"> ... </div>
                            <!-- etc. for all 5 categories -->
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

    // Insert at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});

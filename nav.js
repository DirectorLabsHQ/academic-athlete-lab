document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
<style>
    /* Desktop Hover Logic */
    @media (min-width: 768px) {
        #tools-group:hover #tools-menu {
            display: block !important;
        }
        #tools-group:hover #tools-arrow {
            transform: rotate(180deg);
        }
    }
    
    /* Ensure the bridge works */
    #tools-group {
        position: relative;
        padding-bottom: 20px; /* Invisible bridge */
        margin-bottom: -20px;
    }

    #tools-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 18rem;
        padding-top: 10px;
        z-index: 99999;
    }
</style>

<nav id="main-nav" class="bg-black py-4 px-6 sticky top-0 backdrop-blur-md bg-black/90 border-b border-neutral-900" style="z-index: 9999 !important; overflow: visible !important;">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="index.html" class="text-white font-black italic tracking-tighter mr-4 uppercase text-xl">ACADEMIC<span class="text-neutral-500">ATHLETE</span></a>
            
            <div class="flex gap-6 md:gap-8 whitespace-nowrap items-center font-mono text-[10px]">
                <a href="index.html" class="nav-link text-white border-b border-white pb-1">Lab Home</a>
                
                <div id="tools-group">
                    <button id="tools-button" class="nav-link text-neutral-500 hover:text-white flex items-center gap-1 focus:outline-none cursor-pointer">
                        Tools
                        <svg id="tools-arrow" class="w-3 h-3 fill-current transition-transform duration-200" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                    
                    <div id="tools-menu">
                        <div class="bg-[#111] border border-[#222] rounded-xl shadow-2xl overflow-hidden">
                            <div class="max-h-[70vh] overflow-y-auto no-scrollbar">
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Power & Sarcopenia Defense</p>
                                    <a href="1rm-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">1RM Strength</a>
                                    <a href="ffmi-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">FFMI Lab</a>
                                    <a href="smi-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">SMI Lab</a>
                                </div>
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Engine & Power Output</p>
                                    <a href="vo2-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">VO2 Max</a>
                                    <a href="watts-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Watts/kg</a>
                                    <a href="max-hr.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Max HR</a>
                                    <a href="grip-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Grip Strength</a>
                                </div>
                                <div class="px-4 py-3 border-b border-neutral-800">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Cellular & Functional Age</p>
                                    <a href="bio-age.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Biological Age</a>
                                    <a href="functional-age.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Functional Age</a>
                                </div>
                                <div class="px-4 py-3">
                                    <p class="text-neutral-600 text-[9px] uppercase tracking-wider mb-2 font-bold">Structural Integrity</p>
                                    <a href="mobility-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Mobility Lab</a>
                                    <a href="recovery-lab.html" class="block text-white hover:text-yellow-400 text-sm py-1.5 transition-colors">Recovery Lab</a>
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

    // Mobile Toggle (since hover doesn't exist on touch)
    const button = document.getElementById('tools-button');
    const menu = document.getElementById('tools-menu');
    
    if (window.innerWidth < 768) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }
});

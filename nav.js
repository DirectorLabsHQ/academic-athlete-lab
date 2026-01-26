document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
<nav class="bg-black py-4 px-6 sticky top-0 z-[100] backdrop-blur-md bg-black/90 border-b border-neutral-900 overflow-x-auto no-scrollbar">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="index.html" class="text-white font-black italic tracking-tighter mr-4 uppercase text-xl">ACADEMIC<span class="text-neutral-500">ATHLETE</span></a>
            <div class="flex gap-6 md:gap-8 whitespace-nowrap items-center font-mono text-[10px]">
                <a href="index.html" class="nav-link text-white border-b border-white pb-1">Lab Home</a>
                <a href="1rm-lab.html" class="nav-link text-neutral-500 hover:text-white transition-colors">1RM</a>
                <a href="ffmi-lab.html" class="nav-link text-neutral-500 hover:text-white">FFMI</a>
                <a href="smi-lab.html" class="nav-link text-neutral-500 hover:text-white">SMI</a>
                <a href="grip-lab.html" class="nav-link text-neutral-500 hover:text-white">Grip</a>
                <a href="vo2-lab.html" class="nav-link text-neutral-500 hover:text-white">VO2 Max</a>
                <a href="watts-lab.html" class="nav-link text-neutral-500 hover:text-white">Watts/kg</a>
                <a href="max-hr.html" class="nav-link text-neutral-500 hover:text-white">Max HR</a>
                <a href="bio-age.html" class="nav-link text-neutral-500 hover:text-white">Bio-Age</a>
                <a href="functional-age.html" class="nav-link text-neutral-500 hover:text-white">Func-Age</a>
                <a href="insulin-lab.html" class="nav-link text-neutral-500 hover:text-white">Insulin</a>
                <a href="metabolic-lab.html" class="nav-link text-neutral-500 hover:text-white">Metabolic</a>
                <a href="protein-lab.html" class="nav-link text-neutral-500 hover:text-white">Protein</a>
                <a href="hydration-lab.html" class="nav-link text-neutral-500 hover:text-white">Hydration</a>
                <a href="mobility-lab.html" class="nav-link text-neutral-500 hover:text-white">Mobility</a>
                <a href="recovery-lab.html" class="nav-link text-neutral-500 hover:text-white">Recovery</a>
                <a href="recommendations.html" class="nav-link text-neutral-500 hover:text-white">Gear & Recs</a>
                <a href="athlete-lab.html" class="nav-link text-purple-500 border-l border-neutral-800 pl-6 italic font-bold">The Streak Lab</a>
            </div>
        </div>
    </div>
</nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
});

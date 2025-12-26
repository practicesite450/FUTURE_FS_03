document.addEventListener("DOMContentLoaded", function () {
    // --- 1. HEADER CODE ---
    const headerHTML = `
    <nav class="flex justify-between items-center px-12 py-5 bg-white shadow-sm sticky top-0 z-[100]">
        <div class="flex items-center space-x-2">
            <img src="images/logo.png" class="h-10" alt="Logo">
        </div>
        <ul class="flex space-x-10 font-semibold text-gray-700">
            <li class="nav-item"><a href="index.html" class="hover:text-orange-500 transition">Home</a></li>
            <li class="nav-item"><a href="products.html" class="hover:text-orange-500 transition">Products</a></li>
            <li class="nav-item"><a href="about.html" class="hover:text-orange-500 transition">About</a></li>
            <li class="nav-item"><a href="sustainability.html" class="hover:text-orange-500 transition">Sustainability</a></li>
            <li class="nav-item"><a href="contact.html" class="hover:text-orange-500 transition">Contact</a></li>
        </ul>
       <a href="contact.html">
        <button style="background-color: #ff7e39;" class="text-white px-7 py-2.5 rounded-full font-bold shadow-md hover:scale-105 transition">
            Contact Us
        </button>
    </a>
    </nav>`;

    // --- 2. FOOTER CODE (With Inline Background Fix) ---
    const footerHTML = `
    <footer style="background-color: #00495e; color: white;" class="relative pt-24 pb-12 px-16 mt-20">
        <svg style="position: absolute; top: -60px; left: 0; width: 100%; height: 60px; fill: #00495e;" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224V320H0Z"></path>
        </svg>
        
        <div class="grid lg:grid-cols-2 gap-20 mb-20 pt-10">
            <div>
                <img src="images/logo.png" class="h-14 brightness-0 invert mb-6" alt="Logo">
                <p class="max-w-md text-gray-300 leading-relaxed font-medium">Nourishing families globally with quality nutrition since 1868. <br><span class="text-white font-bold">Good Food, Good Life.</span></p>
            </div>
            <div>
                <h3 class="text-3xl font-extrabold mb-3 text-white">Stay Updated</h3>
                <p class="text-gray-300 mb-8">Subscribe to receive the latest news, products, and offers from Nestlé.</p>
                <div class="flex bg-white/10 p-2 rounded-full max-w-md border border-white/20">
                    <input type="email" placeholder="Enter your email" class="bg-transparent border-none outline-none flex-1 px-5 text-sm text-white placeholder-gray-400">
                    <button style="background-color: #ff7e39;" class="px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition text-white">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10 border-t border-white/10">
            <div class="space-y-3">
                <h5 class="font-bold text-lg mb-4 text-white">Products</h5>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Dairy & Nutrition</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Coffee & Beverages</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Baby Care</p>
            </div>
            <div class="space-y-3">
                <h5 class="font-bold text-lg mb-4 text-white">Company</h5>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">About Us</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Sustainability</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Careers</p>
            </div>
            <div class="space-y-3">
                <h5 class="font-bold text-lg mb-4 text-white">Resources</h5>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Nutrition Guide</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Recipes</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Research</p>
            </div>
            <div class="space-y-3">
                <h5 class="font-bold text-lg mb-4 text-white">Support</h5>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Contact</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">FAQ</p>
                <p class="text-gray-400 text-sm hover:text-white cursor-pointer">Customer Service</p>
            </div>
        </div>
    </footer>`;

    document.getElementById("header-placeholder").innerHTML = headerHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    // Active Link Highlighter
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add("text-orange-500", "border-b-2", "border-orange-500");
        }
    });
});
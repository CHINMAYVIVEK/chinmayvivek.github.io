async function loadTimeline() {
  const response = await fetch("timeline.json");
  const data = await response.json();

  const container = document.getElementById("timeline-container");

  data.forEach((item, index) => {
    const sideClass = index % 2 === 0 ? "mr-auto md:w-3/5" : "ml-auto md:w-3/5";
    const animationFrom =
      index % 2 === 0 ? "translate-x-[-50px]" : "translate-x-[50px]";
    const defaultColor = item.color || "indigo";

    const card = document.createElement("div");
    card.className = `relative opacity-0 transform ${animationFrom} transition-all duration-700 ease-out`;

    card.innerHTML = `
        <!-- Dot -->
        <div class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-${defaultColor}-600 rounded-full border-4 border-white shadow-xl z-10"
             style="top: -2px;">
        </div>
    
        <!-- Timeline Line (skip for last card) -->
        ${
          index !== data.length - 1
            ? `<div class="absolute left-1/2 w-1 bg-${defaultColor}-300 top-8 bottom-[-100%] -translate-x-1/2 z-0"></div>`
            : ""
        }

        <!-- Card -->
        <div class="${sideClass} bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-4 border-${defaultColor}-600 relative">
            
            <div class="relative p-6">
                <!-- Year Circle -->
                <div class="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-${defaultColor}-600 rounded-full hidden sm:flex items-center justify-center transform rotate-12">
                    <span class="text-white font-bold text-lg transform -rotate-12">${item.year}</span>
                </div>

                    <!-- Role -->
                    <h3 class="text-2xl font-semibold text-${defaultColor}-600 mb-2">${item.role}</h3>

                    <!-- Company -->
                    <p class="text-xl text-gray-600 flex items-center mb-4">
                        <svg class="h-5 w-5 mr-2 text-${defaultColor}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        ${item.company}
                    </p>

                    <!-- Period -->
                    <div class="flex items-center text-gray-600 mb-2">
                        <svg class="h-5 w-5 mr-2 text-${defaultColor}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>${item.period}</span>
                    </div>

                    <!-- Location -->
                    <div class="flex items-center text-gray-600 mb-4">
                        <svg class="h-5 w-5 mr-2 text-${defaultColor}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>${item.location}</span>
                    </div>

                    <!-- Responsibilities -->
                    <ul class="space-y-4 text-gray-700 mb-4">
                        ${item.points
                          .map(
                            (point) => `
                            <li class="flex items-start">
                                <svg class="h-5 w-5 mr-2 text-${defaultColor}-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>${point}</span>
                            </li>
                        `,
                          )
                          .join("")}
                    </ul>

                    <!-- Skills -->
                    <div class="flex flex-wrap gap-2">
                        ${item.skills
                          .map(
                            (skill) => `
                            <span class="px-3 py-1 bg-${defaultColor}-100 text-${defaultColor}-600 rounded-full text-sm hover:bg-${defaultColor}-200 transition-colors">
                                ${skill}
                            </span>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;

    container.appendChild(card);
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.remove("translate-x-[-50px]");
          entry.target.classList.remove("translate-x-[50px]");
          entry.target.classList.add("opacity-100", "translate-x-0");
        }
      });
    },
    { threshold: 0.2 },
  );

  document
    .querySelectorAll("#timeline-container > div")
    .forEach((card) => observer.observe(card));
}

loadTimeline();

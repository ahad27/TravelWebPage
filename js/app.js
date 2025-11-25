/**
 * Travel Website - Main JavaScript
 * Handles search, filter, and interactive features
 */

// Destination data with correct information
const destinations = [
    {
        id: "goa",
        name: "Goa Beach",
        price: 1000,
        category: "beach",
        country: "India",
        rating: 5,
        image: "./Images/wp3218381.jpg",
        title: "Colva Beach, Goa, India",
        address: "Colva Beach, Goa, India",
        description:
            "Located on the banks of Colva Beach, completely drunk over the glories of Goa, Beleza By The Beach Resort Goa is a perfect example of luxury with the comfort of nature.",
        package: "$1000 (1 day and 1 night)",
    },
    {
        id: "maldives",
        name: "Maldives",
        price: 3000,
        category: "beach",
        country: "Maldives",
        rating: 4,
        image: "https://wallpapercave.com/wp/3FUEZxE.jpg",
        title: "Paradise Island Resort",
        address: "Paradise Island Resort & Spa Lankanfinolhu North, Maldives",
        description:
            "Airy, upscale rooms set on the beach or over the lagoon, plus water sports, a spa & relaxed dining.",
        package: "$3000 (1 day and 1 night)",
    },
    {
        id: "kerala",
        name: "Kerala",
        price: 1000,
        category: "nature",
        country: "India",
        rating: 4,
        image: "https://wallpapercave.com/wp/wp2783237.jpg",
        title: "Kerala, India",
        address: "Dam on the Periyar River, Idukki, Kerala, India",
        description:
            "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.",
        package: "$1000 (1 day and 1 night)",
    },
    {
        id: "taj",
        name: "Taj Mahal",
        price: 500,
        category: "monument",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp5835288.jpg",
        title: "Taj Mahal",
        address: "Agra, Uttar Pradesh, India",
        description:
            "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.",
        package: "$500 (1 day and 1 night)",
    },
    {
        id: "paris",
        name: "Paris",
        price: 5000,
        category: "city",
        country: "France",
        rating: 5,
        image: "https://wallpapercave.com/wp/8isL5w7.jpg",
        title: "Paris",
        address: "Paris, France",
        description:
            "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
        package: "$5000 (1 day and 1 night)",
    },
    {
        id: "london",
        name: "London",
        price: 7000,
        category: "city",
        country: "United Kingdom",
        rating: 4,
        image: "https://wallpapercave.com/wp/SdQoS4D.jpg",
        title: "London",
        address: "London, United Kingdom",
        description:
            "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
        package: "$7000 (1 day and 1 night)",
    },
    {
        id: "switzerland",
        name: "Switzerland",
        price: 10000,
        category: "nature",
        country: "Switzerland",
        rating: 5,
        image: "https://wallpapercave.com/wp/Pt9XRvT.jpg",
        title: "Jungfrau, Switzerland",
        address: "Jungfrau, Switzerland",
        description:
            "The Jungfrau, at 4,158 meters is one of the main summits of the Bernese Alps, located between the northern canton of Bern and the southern canton of Valais, halfway between Interlaken and Fiesch.",
        package: "$10000 (1 day and 1 night)",
    },
    {
        id: "ladakh",
        name: "Ladakh",
        price: 3000,
        category: "nature",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp4527557.jpg",
        title: "Ladakh, India",
        address: "Ladakh, Jammu and Kashmir, India",
        description:
            "Ladakh is a region in northern India known for its remote mountain beauty and Buddhist culture. The region is home to dramatic landscapes, ancient monasteries, and unique wildlife.",
        package: "$3000 (1 day and 1 night)",
    },
    {
        id: "golden",
        name: "Golden Temple",
        price: 500,
        category: "monument",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp1937540.jpg",
        title: "Golden Temple",
        address: "Amritsar, Punjab, India",
        description:
            "The Golden Temple, also known as Harmandir Sahib, is a Gikh gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.",
        package: "$500 (1 day and 1 night)",
    },
    {
        id: "india",
        name: "India Gate",
        price: 1000,
        category: "monument",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp1891562.jpg",
        title: "India Gate",
        address: "New Delhi, India",
        description:
            "The India Gate is a war memorial located in New Delhi, India. It was designed by Sir Edwin Lutyens and stands as a memorial to 70,000 soldiers of the British Indian Army who died in World War I.",
        package: "$1000 (1 day and 1 night)",
    },
    {
        id: "red",
        name: "Red Fort",
        price: 500,
        category: "monument",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp4109816.jpg",
        title: "Red Fort",
        address: "Old Delhi, India",
        description:
            "The Red Fort is a historic fort in the city of Delhi that served as the main residence of the Mughal Emperors. It was constructed in 1639 by the fifth Mughal Emperor Shah Jahan.",
        package: "$500 (1 day and 1 night)",
    },
    {
        id: "agra",
        name: "Agra Fort",
        price: 500,
        category: "monument",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp2675419.jpg",
        title: "Agra Fort",
        address: "Agra, Uttar Pradesh, India",
        description:
            "Agra Fort is a historical fort in the city of Agra in India. It was the main residence of the emperors of the Mughal Dynasty until 1638, when the capital was shifted from Agra to Delhi.",
        package: "$500 (1 day and 1 night)",
    },
    {
        id: "kolkata",
        name: "Kolkata",
        price: 2000,
        category: "city",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp4631452.jpg",
        title: "Kolkata",
        address: "Kolkata, West Bengal, India",
        description:
            "Kolkata is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it's known for its grand colonial architecture, art galleries and cultural festivals.",
        package: "$2000 (1 day and 1 night)",
    },
    {
        id: "statue",
        name: "Statue of Unity",
        price: 500,
        category: "monument",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp6587224.jpg",
        title: "Statue of Unity",
        address: "Kevadia, Gujarat, India",
        description:
            "The Statue of Unity is the world's tallest statue at 182 metres (597 ft). It depicts Indian statesman and independence activist Sardar Vallabhbhai Patel, who was the first Deputy Prime Minister and Home Minister of independent India.",
        package: "$500 (1 day and 1 night)",
    },
    {
        id: "lakshadweep",
        name: "Lakshadweep",
        price: 2000,
        category: "beach",
        country: "India",
        rating: 5,
        image: "https://wallpapercave.com/wp/wp9215244.jpg",
        title: "Lakshadweep",
        address: "Lakshadweep Islands, India",
        description:
            "Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India. Known for its pristine beaches, crystal-clear waters, and vibrant marine life.",
        package: "$2000 (1 day and 1 night)",
    },
];

// State management
let currentFilter = "all";
let searchQuery = "";

// DOM Elements
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const destinationsContainer = document.getElementById("destinationsGrid");

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    renderDestinations(destinations);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterDestinations();
    });

    // Filter buttons
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            filterDestinations();
        });
    });
}

// Filter destinations based on search and category
function filterDestinations() {
    let filtered = destinations;

    // Apply category filter
    if (currentFilter !== "all") {
        filtered = filtered.filter((dest) => dest.category === currentFilter);
    }

    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(
            (dest) =>
                dest.name.toLowerCase().includes(searchQuery) ||
                dest.country.toLowerCase().includes(searchQuery) ||
                dest.description.toLowerCase().includes(searchQuery)
        );
    }

    renderDestinations(filtered);
}

// Render destinations to the DOM
function renderDestinations(destinationsToRender) {
    if (destinationsToRender.length === 0) {
        destinationsContainer.innerHTML = `
            <div class="no-results col-12">
                <h3>No destinations found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    destinationsContainer.innerHTML = destinationsToRender
        .map(
            (dest) => `
        <div class="destination-card" data-bs-toggle="modal" data-bs-target="#modal-${
            dest.id
        }">
            <figure>
                <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                    <span class="price-badge">${
                        dest.package.split(" ")[0]
                    }</span>
                    <figcaption>
                        <h3>${dest.name}</h3>
                        <div class="rating">
                            ${generateStars(dest.rating)}
                        </div>
                    </figcaption>
                </figure>
            </div>
    `
        )
        .join("");
}

// Generate star rating HTML
function generateStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// Handle booking confirmation
function handleBooking() {
    alert("Thank You for selecting this. Happy Journey!");
}

// Show welcome modal on first visit
function showWelcomeModal() {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (!hasVisited) {
        // Show welcome modal
        const welcomeModal = new bootstrap.Modal(
            document.getElementById("welcomeModal")
        );
        welcomeModal.show();

        // Mark as visited
        localStorage.setItem("hasVisitedBefore", "true");
    }
}

// Initialize welcome modal on page load
document.addEventListener("DOMContentLoaded", function () {
    // Small delay to ensure smooth page load
    setTimeout(showWelcomeModal, 500);
});

// Expose to global scope for onclick handlers
window.handleBooking = handleBooking;

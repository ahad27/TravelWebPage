# 🌍 World Tour - Travel Destination Website

A modern, responsive travel website showcasing amazing destinations around the world. Browse through beautiful locations, filter by category, and explore detailed information about each destination.

![Travel Website](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)

## ✨ Features

### 🎯 Core Features

-   **Welcome Modal** - Beautiful landing modal that greets first-time visitors
-   **15 Curated Destinations** - Explore beaches, monuments, cities, and natural wonders
-   **Smart Search** - Real-time search across destination names, countries, and descriptions
-   **Category Filters** - Filter by Beaches, Monuments, Cities, or Nature
-   **Responsive Design** - Perfect experience on desktop, tablet, and mobile devices
-   **Interactive Modals** - Detailed information for each destination with beautiful imagery
-   **Modern UI/UX** - Smooth animations, hover effects, and gradient backgrounds
-   **Smart Persistence** - Welcome modal shows only on first visit (uses localStorage)

### 🚀 Technical Features

-   **Modular Architecture** - Separated HTML, CSS, and JavaScript files
-   **Clean Code** - Well-commented and organized codebase
-   **Performance Optimized** - Lazy loading images, efficient DOM manipulation
-   **Accessibility** - ARIA labels, semantic HTML, keyboard navigation support
-   **Bootstrap 5** - Latest version with modern components
-   **Vanilla JavaScript** - No heavy frameworks, fast and lightweight

## 📁 Project Structure

```
TravelWebPage/
├── index-new.html          # Main HTML file (improved version)
├── index.html              # Original HTML file (legacy)
├── css/
│   └── styles.css          # All custom styles and animations
├── js/
│   ├── app.js              # Main JavaScript logic
│   └── modals-data.html    # Additional modal templates
└── Images/
    └── wp3218381.jpg       # Local image assets
```

## 🎨 Destinations

### 🏖️ Beaches

-   **Goa Beach** - Colva Beach, India ($1000)
-   **Maldives** - Paradise Island Resort ($3000)
-   **Lakshadweep** - Tropical archipelago, India ($2000)

### 🏛️ Monuments

-   **Taj Mahal** - Agra, India ($500)
-   **Golden Temple** - Amritsar, India ($500)
-   **India Gate** - New Delhi, India ($1000)
-   **Red Fort** - Old Delhi, India ($500)
-   **Agra Fort** - Agra, India ($500)
-   **Statue of Unity** - Gujarat, India ($500)

### 🏙️ Cities

-   **Paris** - France ($5000)
-   **London** - United Kingdom ($7000)
-   **Kolkata** - West Bengal, India ($2000)

### 🏔️ Nature

-   **Kerala** - Malabar Coast, India ($1000)
-   **Switzerland** - Jungfrau, Swiss Alps ($10000)
-   **Ladakh** - Himalayan region, India ($3000)

## 🚀 Getting Started

### Prerequisites

-   A modern web browser (Chrome, Firefox, Safari, Edge)
-   No server required - runs entirely in the browser!

### Installation

1. **Clone or Download** the repository

    ```bash
    git clone <repository-url>
    cd TravelWebPage
    ```

2. **Open in Browser**

    - Simply open `index-new.html` in your web browser
    - Or use a local server for best experience:

    ```bash
    # Using Python
    python -m http.server 8000

    # Using Node.js
    npx serve
    ```

3. **Start Exploring!**
    - Browse destinations
    - Use search to find specific locations
    - Filter by category
    - Click on cards to view detailed information

## 💻 Usage

### Search Functionality

Type in the search box to filter destinations by:

-   Destination name
-   Country
-   Description keywords

### Category Filters

Click on category buttons to filter:

-   **All Destinations** - Show everything
-   **🏖️ Beaches** - Coastal paradises
-   **🏛️ Monuments** - Historical landmarks
-   **🏙️ Cities** - Urban destinations
-   **🏔️ Nature** - Natural wonders

### Booking

1. Click on any destination card
2. View detailed information in the modal
3. Check "I agree to visit" to confirm
4. Receive booking confirmation

## 🎨 Customization

### Adding New Destinations

Edit `js/app.js` and add to the `destinations` array:

```javascript
{
    id: 'unique-id',
    name: 'Destination Name',
    price: 1000,
    category: 'beach', // beach, monument, city, nature
    country: 'Country Name',
    rating: 5,
    image: 'image-url.jpg',
    title: 'Full Title',
    address: 'Full Address',
    description: 'Detailed description...',
    package: '$1000 (1 day and 1 night)'
}
```

Then add a corresponding modal in `index-new.html`.

### Styling

Modify `css/styles.css` to customize:

-   Colors (CSS variables in `:root`)
-   Fonts and typography
-   Animations and transitions
-   Layout and spacing

## 🔧 Browser Support

-   ✅ Chrome (latest)
-   ✅ Firefox (latest)
-   ✅ Safari (latest)
-   ✅ Edge (latest)
-   ✅ Mobile browsers

## 📝 Changelog

### Version 2.0 (Current - Improved)

-   ✅ Fixed all incorrect modal data
-   ✅ Separated CSS and JavaScript into external files
-   ✅ Added search and filter functionality
-   ✅ Modernized UI with gradients and animations
-   ✅ Improved responsive design
-   ✅ Added accessibility features
-   ✅ Upgraded to Bootstrap 5 (single version)
-   ✅ Fixed HTML syntax issues (className → class)
-   ✅ Added lazy loading for images
-   ✅ Improved code organization and comments

### Version 1.0 (Original)

-   Basic destination showcase
-   Bootstrap 4 modals
-   Inline styles and scripts

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created with ❤️ for travel enthusiasts worldwide

## 🙏 Acknowledgments

-   Images from [Wallpaper Cave](https://wallpapercave.com/)
-   Icons and ratings from various sources
-   Bootstrap team for the amazing framework
-   All the beautiful destinations that inspire wanderlust

---

**Happy Traveling! ✈️🌍**

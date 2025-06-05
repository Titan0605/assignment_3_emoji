# Interactive Emoji with Eye Tracking

This project demonstrates the creation of an interactive emoji face that follows the user's mouse cursor movement through eye tracking technology. The implementation combines HTML, CSS, and JavaScript to create an engaging web-based application suitable for educational purposes.

## Project Overview

The Interactive Emoji project showcases fundamental web development concepts including DOM manipulation, event handling, mathematical calculations, and responsive design. The emoji's eyes dynamically track cursor movement across the screen, providing an interactive user experience that demonstrates practical applications of coordinate geometry and trigonometry in web development.

## Technical Features

- **Real-time eye tracking**: Pupils follow mouse cursor movement with smooth transitions
- **Responsive design**: Adapts to various screen sizes and devices
- **Mathematical implementation**: Uses trigonometric functions for accurate pupil positioning
- **Cross-browser compatibility**: Works on modern web browsers
- **Clean user interface**: Minimalist design focused on functionality

## Educational Value

This project demonstrates several important programming concepts:
- Event-driven programming with JavaScript
- Coordinate system mathematics
- CSS animations and transformations
- Responsive web design principles
- DOM manipulation techniques

## Project Structure

```
assignment_3_emoji/
├── index.html          # Main HTML structure
├── face-styles.css     # Styling and responsive design
├── eyes-tracking.js    # Eye tracking logic implementation
└── README.md          # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup for emoji structure
- **CSS3**: Visual styling, gradients, and responsive design
- **JavaScript**: Event handling and mathematical calculations for eye tracking

## Implementation Details

### Mathematical Foundation

The eye tracking functionality is based on several mathematical principles:

1. **Distance calculation**: Uses the Pythagorean theorem to calculate the distance between mouse position and eye center
2. **Angle determination**: Employs `Math.atan2()` function to determine the angle of mouse position relative to eye center
3. **Trigonometric positioning**: Uses `Math.cos()` and `Math.sin()` functions to calculate pupil coordinates
4. **Boundary constraints**: Limits pupil movement within the eye boundaries

### CSS Design Approach

The visual design incorporates modern CSS techniques:
- Flexbox layout for precise element positioning
- CSS gradients for visual appeal
- Media queries for responsive behavior
- Transform properties for smooth animations

## How to Test the Project

### Method 1: Direct Browser Opening

1. **Download the project files**:
   - Save all files (`index.html`, `face-styles.css`, `eyes-tracking.js`) in the same directory

2. **Open in web browser**:
   - Double-click on `index.html` file
   - Alternatively, drag the file into your browser window

3. **Test functionality**:
   - Move your mouse cursor around the screen
   - Observe how the emoji's pupils follow the cursor movement
   - Move the cursor outside the browser window to see pupils return to center position

## Browser Compatibility

This project has been tested and works correctly on:
- Google Chrome (version 90+)
- Mozilla Firefox (version 88+)
- Safari (version 14+)
- Microsoft Edge (version 90+)

## Code Analysis

### JavaScript Implementation

The core functionality relies on several key JavaScript concepts:

**Event Listeners**: The application uses `mousemove` and `mouseleave` events to track cursor position and reset pupil position respectively.

**DOM Manipulation**: The script queries DOM elements using `querySelectorAll()` and modifies their CSS properties dynamically.

**Mathematical Calculations**: The pupil positioning algorithm implements coordinate geometry principles to maintain realistic eye movement within anatomical constraints.

### CSS Responsive Design

The stylesheet incorporates responsive design principles:
- Viewport-based units (`vw`, `vh`) for scalable sizing
- Media queries for mobile device optimization
- Flexible box model for consistent layouts across devices

## Conclusion

The Interactive Emoji project successfully demonstrates the integration of web technologies to create an engaging user experience. Through the implementation of mathematical algorithms and responsive design principles, this project serves as an effective educational tool for understanding modern web development practices and their real-world applications.

---

**Project developed for educational purposes - Multiplatform Mobile Development Course**

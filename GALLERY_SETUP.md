# Gallery Image Setup

## Overview
The gallery component has been updated to display actual images instead of placeholder SVGs. The gallery now shows a 3x3 grid (9 items) initially with a "View More" button to load additional items.

## Features
- **3x3 Grid Display**: Shows 9 items initially in a responsive grid
- **View More Button**: Loads additional items when clicked
- **Filter Support**: Works with all existing category filters
- **Responsive Design**: Optimized for mobile and desktop
- **Image Fallbacks**: Shows placeholder icons if images fail to load

## Image Location
Place your gallery images in the following directory:
```
public/images/gallery/
```

## Required Images
The gallery expects the following images (you can generate sample ones using the provided tool):

1. `ecommerce-dashboard.jpg` - E-Commerce Dashboard project
2. `database-architecture.jpg` - Database Architecture project  
3. `task-management.jpg` - Task Management System project
4. `inventory-management.jpg` - Inventory Management project
5. `mobile-app.jpg` - Mobile App Development project
6. `api-integration.jpg` - API Integration project

## Image Specifications
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 400x300 pixels (minimum)
- **Aspect ratio**: 4:3 or 16:9 works well
- **File size**: Keep under 500KB for optimal loading

## Generating Sample Images
1. Open `create-sample-images.html` in your browser
2. Click the buttons to generate sample images for each project
3. Download the generated images
4. Place them in `public/images/gallery/` with the correct filenames

## Adding New Gallery Items
To add new items to the gallery:

1. Add your image to `public/images/gallery/`
2. Update the `galleryItems` array in `src/components/Gallery.vue`:

```javascript
{
  id: 7,
  title: "Your Project Title",
  description: "Your project description",
  category: "web", // or "OJT Photos" or "database"
  image: "/images/gallery/your-image.jpg",
  date: "2024",
  technologies: ["Vue.js", "Node.js", "MongoDB"]
}
```

3. If adding a new category, update the `filters` array:

```javascript
const filters = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'OJT Photos' },
  { id: 'database', name: 'Databases' },
  { id: 'your-category', name: 'Your Category' }
]
```

## Pagination Configuration
The gallery uses pagination with the following settings:
- **Items per page**: 9 (3x3 grid)
- **View More**: Loads additional items incrementally
- **Filter reset**: Automatically resets to page 1 when filter changes

To modify the number of items shown initially:
```javascript
const itemsPerPage = ref(9) // Change this value
```

## Fallback Behavior
If an image fails to load, the component will automatically fall back to displaying a placeholder SVG icon.

## Testing
After adding images:
1. Run your development server
2. Navigate to the gallery section
3. Verify that only 9 items are shown initially
4. Click "View More" to load additional items
5. Test the filter functionality
6. Verify that pagination resets when changing filters

## Troubleshooting
- **Images not loading**: Check that the file paths are correct and images exist in the specified directory
- **Poor image quality**: Ensure images are high resolution (at least 400x300 pixels)
- **Slow loading**: Optimize image file sizes and consider using WebP format
- **Layout issues**: Images should maintain a consistent aspect ratio for best results
- **View More not working**: Ensure you have more than 9 items in your gallery 
# Text Toolbox - Project Formula & Architecture

## Project Overview
A lightweight, ad-free web application providing text manipulation tools, hosted on GitHub Pages.

## Project Goals
- Provide useful text manipulation utilities without advertisements
- Simple, clean, and fast user interface
- Mobile-responsive design
- Client-side processing (privacy-focused)
- Easy deployment via GitHub Pages

## File Structure
```
text_toolbox/
├── formula/
│   └── formula_cline.md    # This file - detailed plan and architecture
├── cline.md                 # Project documentation for Cline
├── index.html              # Main page with tool menu
├── line-breaks.html        # Line breaks tool page
├── lowercase.html          # Lowercase converter page
├── uppercase.html          # Uppercase converter page
├── styles.css              # Shared styles
├── script.js               # Shared JavaScript utilities
└── README.md               # Project README
```

## Features & Tools

### 1. Navigation Menu
- Present on all pages
- Links to all tools
- Clean, modern design
- Mobile-responsive hamburger menu (optional)

### 2. Line Breaks Tool (line-breaks.html)
**Purpose:** Add line breaks after sentences in a script or text block

**Functionality:**
- Input textarea for pasting script
- Detects sentence endings (. ! ?)
- Adds line breaks after each sentence
- Output display area
- Copy to clipboard button

**Implementation:**
- Regex pattern to identify sentence endings
- Preserve existing formatting where appropriate
- Handle edge cases (abbreviations, decimals)

### 3. Lowercase Converter (lowercase.html)
**Purpose:** Convert text to lowercase

**Functionality:**
- Input textarea
- Convert all characters to lowercase
- Display result
- Copy to clipboard button

**Implementation:**
- JavaScript `.toLowerCase()` method
- Simple and fast

### 4. Uppercase Converter (uppercase.html)
**Purpose:** Convert text to uppercase

**Functionality:**
- Input textarea
- Convert all characters to uppercase
- Display result
- Copy to clipboard button

**Implementation:**
- JavaScript `.toUpperCase()` method
- Simple and fast

## Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, flexbox/grid
- **Vanilla JavaScript** - No dependencies

### Hosting
- **GitHub Pages** - Free static site hosting
- Repository: text_toolbox

## Design Principles

### UI/UX
1. **Simplicity First** - Clean, uncluttered interface
2. **No Ads** - Core principle of the project
3. **Fast Loading** - Minimal assets, no external dependencies
4. **Responsive** - Works on mobile and desktop
5. **Accessibility** - Proper semantic HTML, keyboard navigation

### Color Scheme (Suggested)
- Primary: #2c3e50 (Dark blue-gray)
- Secondary: #3498db (Bright blue)
- Background: #ecf0f1 (Light gray)
- Text: #2c3e50 (Dark)
- Accent: #e74c3c (Red for CTAs)

### Typography
- Sans-serif font family (system fonts for speed)
- Clear hierarchy with heading sizes
- Readable body text (16px minimum)

## Code Architecture

### styles.css
```css
- CSS Reset/Normalize
- Navigation styles
- Shared component styles (buttons, textareas)
- Utility classes
- Responsive breakpoints
```

### script.js
```javascript
- copyToClipboard() utility function
- Common DOM manipulation helpers
- Reusable across all pages
```

### Page-specific scripts
- Inline or separate files for each tool's logic
- Keep it simple and maintainable

## Development Workflow

1. Create all HTML structure files
2. Develop shared CSS styling
3. Implement JavaScript utilities
4. Build individual tool functionality
5. Test on different browsers/devices
6. Deploy to GitHub Pages

## GitHub Pages Deployment

### Setup
1. Repository already exists: text_toolbox
2. Enable GitHub Pages in repository settings
3. Source: main branch, root directory
4. Custom domain (optional)

### URL Structure
- Main: `https://[username].github.io/text_toolbox/`
- Tools accessible via: `https://[username].github.io/text_toolbox/[tool-name].html`

## Testing Checklist
- [ ] All navigation links work
- [ ] Line breaks tool correctly identifies sentences
- [ ] Lowercase converter works on all character types
- [ ] Uppercase converter works on all character types
- [ ] Copy to clipboard works in all browsers
- [ ] Responsive design works on mobile
- [ ] Responsive design works on tablet
- [ ] Responsive design works on desktop
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader compatible
- [ ] Fast loading times (< 1 second)
- [ ] Works in Chrome, Firefox, Safari, Edge

## Future Enhancements (Optional)
- Dark mode toggle
- Text statistics (word count, character count)
- Remove duplicate lines tool
- Sort lines alphabetically tool
- Find and replace tool
- Markdown to HTML converter
- JSON formatter
- URL encoder/decoder
- Base64 encoder/decoder

## Maintenance
- Keep dependencies minimal (currently zero)
- Regular testing across browsers
- Update documentation as features are added
- Monitor GitHub Pages for any issues

## Success Metrics
- Fast load times
- Zero ads
- Positive user feedback
- Regular usage
- Clean, maintainable code

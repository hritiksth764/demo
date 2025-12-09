# Custom Fonts Directory

## How to Add Your Font Files

1. **Add your font files here** (e.g., `.woff2`, `.woff`, `.ttf`, `.otf`)
   - Recommended formats: `.woff2` (best compression) and `.woff` (fallback)
   - Example file names:
     - `YourFont-Regular.woff2`
     - `YourFont-Bold.woff2`
     - `YourFont-Italic.woff2`

2. **Define @font-face in `src/index.css`**
   ```css
   @font-face {
     font-family: 'YourFontName';
     src: url('./assets/fonts/YourFont-Regular.woff2') format('woff2'),
          url('./assets/fonts/YourFont-Regular.woff') format('woff');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```

3. **Add to Tailwind config** (`tailwind.config.js`)
   ```js
   fontFamily: {
     'custom': ['YourFontName', 'sans-serif'],
   }
   ```

4. **Use in components**
   ```jsx
   <div className="font-custom">Your text</div>
   ```

## Font Format Priority
- `.woff2` - Best compression, modern browsers
- `.woff` - Good compression, wider support
- `.ttf` - Larger file size, universal support
- `.otf` - OpenType format

## Font Display Options
- `swap` - Shows fallback font immediately, swaps when custom font loads (recommended)
- `block` - Hides text until font loads (can cause FOIT)
- `fallback` - Short block period, then fallback
- `optional` - Uses fallback if font not ready quickly


# Pinterest Clone (React + Vite)

Frontend-only clone. All content lives in `src/data/` (pins, users, boards, navigation, categories); components import and `.map()` over it.

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
- Add or edit pins in `src/data/pins.js`. Saved and created pins are kept in the browser's localStorage.
- Sample images load from picsum.photos (needs internet).

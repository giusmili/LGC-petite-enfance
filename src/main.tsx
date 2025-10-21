
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Register PWA Service Worker via vite-plugin-pwa helper
if (import.meta.env.PROD) {
  // Using dynamic import to avoid bundling in dev
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({ immediate: true });
  }).catch(() => {
    // no-op if plugin not available
  });
}
  

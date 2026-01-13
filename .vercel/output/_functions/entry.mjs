import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_MvhFMfDW.mjs';
import { manifest } from './manifest_8iXXrDui.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blogs/aimara-artificio-alliance.astro.mjs');
const _page4 = () => import('./pages/blogs/aimara-cenia-llm-alliance.astro.mjs');
const _page5 = () => import('./pages/blogs/origenaimara.astro.mjs');
const _page6 = () => import('./pages/blogs/simbig24.astro.mjs');
const _page7 = () => import('./pages/blogs/techsuyo2023.astro.mjs');
const _page8 = () => import('./pages/blogs.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/eventos/aimara2025.astro.mjs');
const _page11 = () => import('./pages/eventos/nlp.astro.mjs');
const _page12 = () => import('./pages/eventos.astro.mjs');
const _page13 = () => import('./pages/galeria.astro.mjs');
const _page14 = () => import('./pages/miembros.astro.mjs');
const _page15 = () => import('./pages/privacy.astro.mjs');
const _page16 = () => import('./pages/projects/proyecto-aimara-translate.astro.mjs');
const _page17 = () => import('./pages/proyectos.astro.mjs');
const _page18 = () => import('./pages/publications.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/contact.js", _page2],
    ["src/pages/blogs/aimara-artificio-alliance.astro", _page3],
    ["src/pages/blogs/aimara-cenia-llm-alliance.astro", _page4],
    ["src/pages/blogs/origenaimara.astro", _page5],
    ["src/pages/blogs/simbig24.astro", _page6],
    ["src/pages/blogs/techsuyo2023.astro", _page7],
    ["src/pages/blogs.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/eventos/aimara2025.astro", _page10],
    ["src/pages/eventos/nlp.astro", _page11],
    ["src/pages/eventos.astro", _page12],
    ["src/pages/galeria.astro", _page13],
    ["src/pages/miembros.astro", _page14],
    ["src/pages/privacy.astro", _page15],
    ["src/pages/projects/proyecto-aimara-translate.astro", _page16],
    ["src/pages/proyectos.astro", _page17],
    ["src/pages/publications.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "104ab6ab-460c-47aa-a236-834b181ceb69",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

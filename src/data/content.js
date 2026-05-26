// =============================================================
//  CONTENU "DONNÉES" — dossiers de projets + CV
//  Les images sont chargées automatiquement depuis
//  src/assets/photos/<section>/<dossier>/  via import.meta.glob.
//  → Pour AJOUTER / RETIRER une photo : dépose / supprime le
//    fichier dans le bon dossier, rien d'autre à modifier.
//  → L'ordre suit le nom de fichier (préfixe 01-, 02-, ...).
// =============================================================

// Charge un dossier d'images, trié par nom de fichier
function load(glob) {
  return Object.keys(glob).sort().map((k) => glob[k]);
}

// ---- WORK (6 projets) ----
const wPoseurs   = load(import.meta.glob('../assets/photos/work/1-les-poseurs/*.jpg', { eager: true, query: '?url', import: 'default' }));
// ---- COUVERTURES (Miniatures de premier plan) ----
import cover01 from '../assets/photos/covers/01.jpg';
import cover02 from '../assets/photos/covers/02.jpg';
import cover03 from '../assets/photos/covers/03.jpg';
import cover04 from '../assets/photos/covers/04.jpg';
import cover05 from '../assets/photos/covers/05.jpg';
import cover06 from '../assets/photos/covers/06.jpg';
const wInterieur = load(import.meta.glob('../assets/photos/work/2-interieur/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wTissage   = load(import.meta.glob('../assets/photos/work/3-tissage/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wWool      = load(import.meta.glob('../assets/photos/work/4-wool-production/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wFleur     = load(import.meta.glob('../assets/photos/work/5-fleur-en-strass/*.jpg', { eager: true, query: '?url', import: 'default' }));
const wReflect   = load(import.meta.glob('../assets/photos/work/6-reflect-pattern/*.jpg', { eager: true, query: '?url', import: 'default' }));

// ---- BOOK (3 dossiers) ----
const bAnnees  = load(import.meta.glob('../assets/photos/book/1-1983-2024/*.jpg', { eager: true, query: '?url', import: 'default' }));
const b002     = load(import.meta.glob('../assets/photos/book/2-002/*.jpg', { eager: true, query: '?url', import: 'default' }));
const bArchive = load(import.meta.glob('../assets/photos/book/3-archives/*.jpg', { eager: true, query: '?url', import: 'default' }));

// ---- PRINT (placeholders issus de "Intérieur" — à confirmer / remplacer) ----
const pDos    = load(import.meta.glob('../assets/photos/print/1-interieur-dos/*.jpg', { eager: true, query: '?url', import: 'default' }));
const pFace   = load(import.meta.glob('../assets/photos/print/2-interieur-face/*.jpg', { eager: true, query: '?url', import: 'default' }));
const pTallud = load(import.meta.glob('../assets/photos/print/3-le-tallud/*.jpg', { eager: true, query: '?url', import: 'default' }));

// ---- ABOUT (portrait) ----
export const aboutPortrait =
  load(import.meta.glob('../assets/photos/about/*.jpg', { eager: true, query: '?url', import: 'default' }))[0] || null;

// ---- Pages PDF (portfolio + CV) affichées en images ----
export const pdfPages = {
  portfolio: load(import.meta.glob('../assets/pdf/portfolio/*.jpg', { eager: true, query: '?url', import: 'default' })),
  cv:        load(import.meta.glob('../assets/pdf/cv/*.jpg',        { eager: true, query: '?url', import: 'default' })),
};

// ---- "Dernières œuvres" affichées sur la page d'accueil ----
// (3 visuels au choix — modifie les images ou titres ici)
// ---- "Dernières œuvres" affichées sur la page d'accueil ----
export const recentWorks = [
  { img: cover01, title: 'Les poseurs',     year: '2024' },
  { img: cover02, title: 'Intérieur',       year: '2024' },
  { img: cover05, title: 'Fleur en Strass', year: '2025' },
];

// Textes "info" génériques (à personnaliser par projet)
const infoTodo = {
  fr: 'Texte de présentation du projet.\nContexte\u2026',
  en: 'Project description.\nContext\u2026',
};
const infoTirage = {
  fr: 'Tirage unique\nArgentique tiré chez Glory Lab sur papier Fujifilm DPII Glossy',
  en: 'Single print\nFilm print made at Glory Lab on Fujifilm DPII Glossy paper',
};

export const sections = {
  // ── PROJECTS (anciennement "work") ──
  // Astuce : pour afficher l'année sous une vignette (comme sur l'accueil),
  // renseigne le champ year. Laisse-le vide ('') si tu ne veux rien afficher.
  projects: [
    { slug: 'les-poseurs',     title: 'Les poseurs',     year: '2024', photos: wPoseurs,   cover: cover01, info: infoTodo },
    { slug: 'interieur',       title: 'Intérieur',       year: '2024', photos: wInterieur, cover: cover02, info: infoTodo },
    { slug: 'tissage',         title: 'Tissage',         year: '',     photos: wTissage,   cover: cover03, info: infoTodo },
    { slug: 'wool-production', title: 'Wool production', year: '',     photos: wWool,      cover: cover06, info: infoTodo },
    { slug: 'fleur-en-strass', title: 'Fleur en Strass', year: '2025', photos: wFleur,     cover: cover05, info: infoTodo },
    { slug: 'reflect-pattern', title: 'Reflect Pattern', year: '',     photos: wReflect,   cover: cover04, info: infoTodo },
  ],

  print: [
    { slug: 'interieur-dos',  title: 'Intérieur dos',  photos: pDos,    cover: pDos[0],    info: infoTirage, orderable: true },
    { slug: 'interieur-face', title: 'Intérieur face', photos: pFace,   cover: pFace[0],   info: infoTirage, orderable: true },
    { slug: 'le-tallud',      title: 'Le Tallud',      photos: pTallud, cover: pTallud[0], info: infoTirage, orderable: true },
  ],

  book: [
    { slug: '1983-2024', title: '1983-2024', photos: bAnnees,  cover: bAnnees[1] ?? bAnnees[0], info: infoTodo, orderable: true },
    { slug: '002',       title: '002',       photos: b002,     cover: b002[0],                  info: infoTodo, orderable: true },
    { slug: 'archives',  title: 'Archives',  photos: bArchive, cover: bArchive[0],              info: infoTodo, orderable: true },
  ],
};

// --- CV transcrit depuis le nouveau PDF ---
// Chaque entrée = { year, lead, detail }
//   year   → l'année (affichée en gras)
//   lead   → l'intitulé principal (affiché en gras : rôle, école, lieu, projet…)
//   detail → le complément (affiché en gris clair : mention, institution, ville…)
export const cv = {
  bourses: [
    { year: '2026', lead: 'Homo Faber Fellowship — Fondation Michelangelo', detail: "Avec l'atelier Mérigot Sanzay, Venise — Paris." },
  ],
  expos: [
    { year: '2024', lead: 'Eurofabrique', detail: 'Restitution à Cluj-Napoca et à la Gaité Lyrique, Paris.' },
    { year: '2023', lead: 'Lignes de Vie', detail: 'cur. Mayfly Gallery, Bastille Design Center, Paris.' },
    { year: '2022', lead: 'Désert Samples', detail: 'Galerie Octave Cowbell, Metz.' },
  ],
  freelance: [
    { year: '2026', lead: 'Tisserande — Diane Collongues', detail: 'Atelier Mérigot Sanzay, Paris.' },
    { year: '2026', lead: 'Tisserande — Marie Hazard', detail: 'Project Ad Hoc, Paris.' },
    { year: '2024-2025', lead: 'Chargée de communication — Carel Paris', detail: 'Paris.' },
    { year: '2023', lead: 'Assistante éditoriale — Revue Revive', detail: 'Studio Anémone Image, artistes Amir Tikriti et Célia Cotelle, Paris.' },
    { year: '2022', lead: 'Tirage argentique — Studio Pauléon', detail: 'La Rochelle.' },
  ],
  workshop: [
    { year: '2025', lead: 'Technique modélisme — Patrice Dutartre et Catarina Knoch-mulot', detail: 'Paris.' },
    { year: '2023', lead: 'Vidéo — Lou Fauroux', detail: 'Mulhouse.' },
    { year: '2022', lead: 'Désert Samples — Marie Quéau', detail: 'Mulhouse.' },
  ],
  formations: [
    { year: '2026', lead: 'Mastère Spécialisé Management de la Mode et du Luxe', detail: 'Avec mention — Institut Français de la Mode, Paris.' },
    { year: '2024', lead: 'DNSEP option Design Textile', detail: 'Avec mention — Haute École des Arts du Rhin, Mulhouse.' },
    { year: '2022', lead: 'DNA option Design Textile', detail: 'Avec les félicitations du jury — Haute École des Arts du Rhin, Mulhouse.' },
    { year: '2020', lead: 'CPGE Arts et Design', detail: 'Avec mention, Toulouse.' },
  ],
  evenements: [
    { year: '2024', lead: 'Performance Fleur en Strass', detail: "Vernissage de l'exposition Ministère de l'impression à la Filature Scène Nationale, Mulhouse." },
    { year: '2023', lead: 'Performance Fleur en Strass', detail: 'Série de 3 soirées de performances au Doc (19ème), Paris.' },
    { year: '2023', lead: 'VJ pour le Festival Elektric Park', detail: 'Chatou.' },
  ],
};

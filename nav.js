// nav.js

// Define all pages
const pages = [
  {file:"index.html", title:"Home"},
  {file:"2401CountableUncountable.html", title:"Unit 2401: Countable / Uncountable"},
  {file:"2402ContainersQuantifiers.html", title:"Unit 2402: Containers"},
  {file:"2403Thereisare.html", title:"Unit 2403: There is / There are"},
  {file:"2601FewAfew.html", title:"Unit 2601: Few / A few"},
  {file:"2602ThisThese.html", title:"Unit 2602: This / These"},
  {file:"26003cancouldmay.html", title:"Unit 26003: Can / Could / May"},
  {file:"2701prepositions_of_place_english.html", title:"Unit 2701: Prepositions"},
  {file:"2702imperative.html", title:"Unit 2702: Imperative"},
  {file:"2901TooEnough.html", title:"Unit 2901: Too / Enough"},
  {file:"2902OrderAdjectives.html", title:"Unit 2902: Order Adjectives"},
  {file:"3001ComparativeForms.html", title:"Unit 3001: Comparative"},
  {file:"3002Linkers.html", title:"Unit 3002: Linkers"},
  {file:"1ex.html", title:"Exercise for Module 1"},
  {file:"2ex.html", title:"Exercise for Module 2"}
];

// Detect current page
const current = location.pathname.split("/").pop();
let index = pages.findIndex(p => p.file === current);
if (index === -1) { index = 0; }

const currentPage = pages[index];
const nextPage = pages[index + 1];
const prevPage = pages[index - 1];

// 🔝 TOP NAV with prev/current/next
let topnav = `
<div class="topnav">
  ${prevPage ? `<a href="${prevPage.file}">← ${prevPage.title}</a>` : ""}
  | <a href="${pages[0].file}">Home</a> |
  <b>${currentPage.title}</b> |
  ${nextPage ? `<a href="${nextPage.file}">${nextPage.title} →</a>` : ""}
</div>
`;

// 🔻 BOTTOM NAV (all except current + next)
let bottomLinks = pages.filter((p, i) => i !== index && i !== index + 1);

let bottomnav = `
<div class="bottomnav">
  ${bottomLinks.map(p => `<a href="${p.file}">${p.title}</a>`).join(" | ")}
</div>
`;

// Render into placeholders
document.addEventListener("DOMContentLoaded", function(){
  if (document.getElementById("topnav")) {
    document.getElementById("topnav").innerHTML = topnav;
  }
  if (document.getElementById("bottomnav")) {
    document.getElementById("bottomnav").innerHTML = bottomnav;
  }
});

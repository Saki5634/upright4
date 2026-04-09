// nav.js

// Define all pages
const pages = [
{file:"3002thesuperlative.html", title:"Unit 3002: The Superlative"},
{file:"3003comparisons.html", title:"Unit 3003: Comparisons"},
{file:"3301PastSimple.html", title:"Unit 3301: Past Simple"},
{file:"3301present_simple_vs_present_contin.html", title:"Unit 3301: Present Simple vs Continuous"},
{file:"3302waswere.html", title:"Unit 3302: Was / Were"},
{file:"3303regularpast_simple.html", title:"Unit 3303: Regular Past Simple"},
{file:"3401PastSimpleIr.html", title:"Unit 3401: Irregular Past Simple"},
{file:"3801PastSimpleWh.html", title:"Unit 3801: Past Simple Wh-Questions"},
{file:"3901PresentPerfect.html", title:"Unit 3901: Present Perfect"},
{file:"4001PresentPerfectPastSimple.html", title:"Unit 4001: Present Perfect vs Past Simple"},
{file:"4201Modals.html", title:"Unit 4201: Modals"},
{file:"4501BegoingtoWilWont.html", title:"Unit 4501: Be going to / Will / Won’t"},
{file:"4502WilWont.html", title:"Unit 4502: Will / Won’t"},
{file:"GrandEx.html", title:"Grand Exercise"},
{file:"module3.html", title:"Module 3"},
{file:"module4.html", title:"Module 4"},
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
let bottomLinks = pages.filter((p, i) => i !== index);

// 🔻 BOTTOM NAV (all except current)
let bottomLinks = pages.filter((p, i) => i !== index);

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

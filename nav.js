// nav.js

// Define all pages
const pages = [
    {file:"index.html", title:"Home"},
  {"file":"1ex.html","title":"Exercise Module 1"},
  {"file":"2401CountableUncountable.html","title":"Countable/Uncountable nouns"},
  {"file":"2402ContainersQuantifiers.html","title":"Containers & quantifiers"},
  {"file":"2403Thereisare.html","title":"There is/There are (a/an - some/any)"},
  {"file":"26003cancouldmay.html","title":"Can / Could / May"},
  {"file":"2601FewAfew.html","title":"Few / A few / Little / A little"},
  {"file":"2602ThisThese.html","title":"This / These / That / Those"},
  {"file":"2701prepositions_of_place_english.html","title":"Prepositions of place"},
  {"file":"2702imperative.html","title":"The imperative"},
  {"file":"2901TooEnough.html","title":"Too / Enough"},
  {"file":"2902OrderAdjectives.html","title":"Order of adjectives"},
  {"file":"2ex.html","title":"Exercise Module 2"},
  {"file":"3001ComparativeForms.html","title":"Comparative forms"},
  {"file":"3002Linkers.html","title":"Linkers (but, however, although, etc.)"},
  {"file":"3002thesuperlative.html","title":"The superlative"},
  {"file":"3003comparisons.html","title":"Comparisons"},
  {"file":"3301PastSimple.html","title":"Past Simple"},
  {"file":"3301present_simple_vs_present_contin.html","title":"Present simple vs Present continuous"},
  {"file":"3302waswere.html","title":"Was / Were (Past simple of to be)"},
  {"file":"3303regularpast_simple.html","title":"Past simple (regular verbs)"},
  {"file":"3401PastSimpleIr.html","title":"Past simple (irregular verbs)"},
  {"file":"3801PastSimpleWh.html","title":"Past simple (wh-questions)"},
  {"file":"3901PresentPerfect.html","title":"Present perfect (form and uses)"},
  {"file":"3ex.html","title":"Exercise Module 3"},
  {"file":"4001PresentPerfectPastSimple.html","title":"Present perfect vs Past simple"},
  {"file":"4201Modals.html","title":"Modals (have to, don't have to, must, mustn't, should, shouldn't, can, can't)"},
  {"file":"4501BegoingtoWilWont.html","title":"Be going to (future plans and predictions)"},
  {"file":"4502WilWont.html","title":"Will / Won't (future simple)"},
  {"file":"4ex.html","title":"Exercise Module 4"},
  {"file":"5ex.html","title":"Exercise Module 5"},
  {"file":"6ex.html","title":"Exercise Module 6"},
  {"file":"GrandEx.html","title":"Module 1-4 Quiz"}
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

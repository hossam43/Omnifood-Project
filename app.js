import { ob } from "./intersectionObserver.js";

///////////////////////////////////////////////////////////
// // Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

//Click: btn-mobile-nav

//Add: nav-open

//ON: .header

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////
// Stick navigation

const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
/////////////////////////////////////////

// The Reveal effect
// the order mater
const allSections = document.querySelectorAll(".section");
const allSteps = document.querySelectorAll(".step");
const oneElement = document.querySelector(".testimonials-container");
const allNodes = [allSections, allSteps, oneElement];
const optionsList = [
  {
    root: null,
    threshold: 0.15,
  },
  {
    root: null,
    threshold: 0.2,
  },
  {
    root: null,
    threshold: 0.2,
  },
];
ob(allNodes, "element--hidden", optionsList);

// Implement smooth scrolling

// 1- commen parents
// 2- child element that will orginate the effect

const delegationClick = (parent, children) => {
  document.querySelector(parent).addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    // Matching
    if (e.target.classList.contains(children)) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
};

delegationClick(".main-nav", "main-nav-link");

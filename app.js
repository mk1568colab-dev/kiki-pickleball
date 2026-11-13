"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const tour = [
  {
    label: "Read & review",
    title: ["Read the market.", "Review your firm."],
    description: "Start with the market conditions and the business your team carries into this round.",
    actions: [
      "Read the demand outlook, segment mix, material costs, supply risk, quality sensitivity, and technology conditions.",
      "Review your own results, inventory, incoming materials, backlog, capacity, cash, and debt.",
      "Compare published competitor prices and products. Agree on what needs to change in your plan."
    ],
    question: "Your team can explain what changed and which constraint matters most.",
    note: "Round 1: use the pre-game records and starting team state instead of previous-round results.",
    screen: "Public Market Report / Market Outlook",
    image: "market.png",
    alt: "Practice classroom market report with a demand forecast range and an English market summary"
  },
  {
    label: "Plan products",
    title: ["Choose the portfolio.", "Set a demand plan."],
    description: "Decide how each paddle competes, then make a provisional plan for current and future products.",
    actions: [
      "Choose active paddles, customer segments, and prices. Decide whether older products should stay, retire, or be replaced.",
      "Enter each paddle's Demand Forecast, planned production, and target finished-goods inventory.",
      "Review development investment, testing, and launch gates. For a launched paddle, enter its price, forecast, and production."
    ],
    question: "Every active paddle has a clear role and a plan you can explain.",
    note: "Your forecast is an estimate, not guaranteed demand or sales. Revisit this plan if operations or cash cannot support it.",
    screen: "Team Decisions / Product Profile",
    image: "products.png",
    alt: "Demo product profile with price, forecast, production, and quality controls"
  },
  {
    label: "Plan operations",
    title: ["Make the plan", "operationally feasible."],
    description: "Connect product-level production to shared materials, capacity, quality, and future supply.",
    actions: [
      "Compare required raw materials with carryover stock and arrivals available for this round's production.",
      "Align production, overtime, expansion timing, QC spending, and backlog tolerance. Review capacity and cost previews.",
      "Place future material orders. Set Economy, Standard, and Reliable shares to total 100%; compare costs and arrival ranges."
    ],
    question: "Your production plan fits available resources, and future orders match your replenishment needs.",
    note: "A new raw-material order supports future production. It cannot fix a material shortage in the current round.",
    screen: "Team Decisions / Firm Controls & Supplier Quotes",
    image: "operations.png",
    alt: "Practice classroom firm controls, supplier shares, arrival ranges, material costs, and ordering fees"
  },
  {
    label: "Check & submit",
    title: ["Check the whole plan.", "Save one team decision."],
    description: "Bring the separate decisions together before committing the team's plan in the game.",
    actions: [
      "Review projected costs and cash, including materials, production, quality, capacity, development, borrowing, and interest.",
      "Resolve input errors, discuss warnings, and revise unsupported product or operations choices. Agree on the final plan.",
      "Have one designated teammate save during the submission window and verify that the decision was recorded."
    ],
    question: "The team agrees on the tradeoffs and has confirmed its saved decision.",
    note: "The instructor must run the round before results are available. Passing the checks does not guarantee profitability.",
    screen: "Team Decisions / Pre-Submit Check",
    image: "checklist.png",
    alt: "Kiki's four-part pre-submit checklist for market forecast, production capacity, materials supply, and service, quality, and cash"
  },
  {
    label: "Review & adapt",
    title: ["Explain the outcome.", "Adapt for next round."],
    description: "After the instructor runs the round, use the results to explain what worked and what did not.",
    actions: [
      "Compare forecasts with actual demand and sales. Identify shortfalls in materials, capacity, quality, or product fit.",
      "Review profit, service, inventory, cash, debt, and product performance together, not just the ranking.",
      "Record one decision to keep, one to change, and the evidence behind each. Return to Step 1 when the next market report opens."
    ],
    question: "Your next-round adjustment is tied to a specific result, not just a guess.",
    note: "Repeat Steps 1-5 each round. Carry forward what you learned, but reconsider it when the market changes.",
    screen: "Finance Detail / Round Review",
    image: "finance.png",
    alt: "Practice classroom finance screen with revenue, profit, cash, cost breakdown, and a cash bridge"
  }
];

const phases = [
  {
    label: "SUGGESTED PREWORK / ONE WEEK",
    title: "Let students arrive ready to decide.",
    intro: "Introduce the market and let teams explore the decision pages before the first competitive session.",
    items: ["Review the game overview and student quick start.", "Complete a low-stakes practice round.", "Assign demand, operations, and finance responsibilities."],
    note: "A short reflection or participation credit can support preparation."
  },
  {
    label: "FIRST CLASS / GUIDED PLAY",
    title: "Make the first round a shared experience.",
    intro: "Read the market together, have teams explain one coordinated plan, then run the round and discuss the outcomes.",
    items: ["Confirm everyone can access the correct classroom and team.", "Connect product choices to materials, capacity, quality, and cash.", "Use short decision windows and pause for focused debriefs."],
    note: "With preparation, the SCM315 approach can target 6-10 rounds in the first session. Adjust the pace to class length and student readiness."
  },
  {
    label: "FOLLOWING SESSIONS / AN EXTENDED COMPETITION",
    title: "Change the market. Revisit the plan.",
    intro: "Carry the competition across classes so students experience the accumulated consequences of sourcing, inventory, capacity, and development decisions.",
    items: ["Run roughly 2-4 additional rounds per class as the schedule permits.", "Introduce demand growth, supply pressure, technology shifts, or stronger price competition.", "Ask teams to support their revised strategy with evidence from previous rounds."],
    note: "An extended course sequence can target 15-20 total rounds. This is a teaching approach, not a required game length."
  }
];

const resources = {
  student: {
    title: "Every-round decision guide",
    intro: "Follow Steps 1-5, then repeat with the next market report. Revisit earlier choices whenever capacity, materials, or cash cannot support the plan. Between Steps 4 and 5, the instructor closes submissions and runs the round. Use your instructor's current manual for detailed controls, rules, and deadlines.",
    sections: tour.map((step, index) => ({
      title: `${index + 1}. ${step.label}`,
      items: [...step.actions, `Ready to move on when: ${step.question}`, step.note]
    }))
  },
  instructor: {
    title: "First-session outline",
    intro: "An adaptable teaching sequence based on the SCM315 classroom approach. Confirm the current game settings and materials before using it with a new class.",
    sections: [
      {title: "Before the session", items: ["Choose the learning objectives and assessment criteria. Set expectations for participation, team evidence, and individual contributions.", "Arrange a separate classroom, test instructor and student access, and confirm the initial market and team setup.", "Give students preparation time and a low-stakes practice opportunity. Groups of three can divide demand, operations, and finance responsibilities while sharing decisions."]},
      {title: "Open with an operating problem", items: ["Ask why a strong product or attractive price might still fail when materials arrive late or production capacity is insufficient.", "Introduce the pickleball paddle setting and connect forecasting, sourcing, inventory, quality, capacity, product development, and cash."]},
      {title: "Run a coached round", items: ["Publish the market outlook, explain the decision deadline, and open submissions.", "Have teams agree on a plan, review warnings, and confirm their saved decisions.", "Close submissions, review the instructor checks, run the round, and use the results to lead a short debrief."]},
      {title: "Build the competition", items: ["Set the pace to student readiness. Prepared classes may work through several rounds in a session; pause whenever the operating implications need discussion.", "Over later sessions, change market conditions and ask teams to explain how their plans respond.", "Evaluate decisions using operational and financial evidence, not only the amount of profit."]}
    ]
  },
  debrief: {
    title: "Debrief prompts",
    intro: "Ask teams to connect a decision, a mechanism, and an observed result. A strong explanation should distinguish what the team controlled from the market conditions it faced.",
    sections: [
      {title: "Forecasting and service", items: ["How did forecast demand differ from actual demand and sales? Was a low sales result a demand problem or a supply problem?", "Where did stockouts, backlog, or excess stock appear? What would you change in the next plan?"]},
      {title: "Sourcing and inventory", items: ["What did your supplier mix save in purchase cost, and what did it expose you to in delivery timing or reliability?", "Did orders arrive when production needed them? How did inventory protect service or tie up cash?"]},
      {title: "Capacity and quality", items: ["Was output constrained by materials, capacity, or quality losses? Which constraint mattered most?", "Was overtime or expansion justified? What evidence would change that decision?"]},
      {title: "Portfolio and development", items: ["What did you expect a new paddle to achieve, and what resources did its development and launch require?", "Did you renew an aging portfolio at the right time, or divert cash from a more urgent operating need?"]},
      {title: "Profitability and cash", items: ["Did profit, service, and cash stability move together? Where did they conflict?", "Which strategy worked in this market, and which change in conditions might make it less effective?", "Name one decision you would keep, one you would change, and the result that supports each choice."]}
    ]
  }
};

let currentTour = 0;
let currentResource = null;
let lastDialogTrigger = null;

function activateTab(buttons, selected, panel) {
  buttons.forEach((button, index) => {
    button.setAttribute("aria-selected", String(index === selected));
    button.tabIndex = index === selected ? 0 : -1;
  });
  panel.setAttribute("aria-labelledby", buttons[selected].id);
}

function chooseTour(index) {
  currentTour = index;
  const item = tour[index];
  activateTab($$("[data-tour]"), index, $("#tour-panel"));
  $("#tour-title").replaceChildren(document.createTextNode(item.title[0]), document.createElement("br"), document.createTextNode(" " + item.title[1]));
  $("#tour-description").textContent = item.description;
  $("#step-eyebrow").textContent = `STEP ${index + 1} / ${item.label.toUpperCase()}`;
  $("#tour-actions").replaceChildren(...item.actions.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  $("#tour-question").textContent = item.question;
  $("#tour-note").textContent = item.note;
  $("#screen-name").textContent = item.screen;
  $("#tour-image").src = `assets/${item.image}`;
  $("#tour-image").alt = item.alt;
  $("#image-open").setAttribute("aria-label", `Enlarge ${item.screen} screenshot`);
  $("#launch-example").hidden = index !== 1;
  $("#step-position").textContent = `Step ${index + 1} of ${tour.length}`;
  $("#step-previous").disabled = index === 0;
  $("#step-next").hidden = index === tour.length - 1;
  $("#step-repeat").hidden = index !== tour.length - 1;
  if (index < tour.length - 1) $("#step-next-label").textContent = `Next: ${tour[index + 1].label}`;
}

function choosePhase(index) {
  const phase = phases[index];
  activateTab($$("[data-phase]"), index, $("#phase-panel"));
  for (const field of ["label", "title", "intro", "note"]) $("#phase-" + field).textContent = phase[field];
  $("#phase-list").replaceChildren(...phase.items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  }));
}

function wireTabs(selector, handler) {
  const buttons = $$(selector);
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => handler(index));
    button.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = buttons.length - 1;
      else return;
      event.preventDefault();
      handler(next);
      buttons[next].focus();
    });
  });
}

function openDialog(dialog, trigger) {
  lastDialogTrigger = trigger;
  document.body.classList.add("modal-open");
  dialog.showModal();
  dialog.querySelector("[data-close]").focus();
}

function openImage(event) {
  const item = tour[currentTour];
  $("#image-dialog-title").textContent = item.screen;
  $("#full-image").src = `assets/${item.image}`;
  $("#full-image").alt = item.alt;
  openDialog($("#image-dialog"), event.currentTarget);
  $(".full-image").scrollTo(0, 0);
}

function openResource(key, trigger) {
  currentResource = resources[key];
  $("#resource-title").textContent = currentResource.title;
  const content = $("#resource-content");
  content.replaceChildren();
  const intro = document.createElement("p");
  intro.textContent = currentResource.intro;
  content.append(intro);
  currentResource.sections.forEach((section) => {
    const heading = document.createElement("h3");
    heading.textContent = section.title;
    const list = document.createElement("ul");
    section.items.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      list.append(li);
    });
    content.append(heading, list);
  });
  openDialog($("#resource-dialog"), trigger);
  $(".resource-body").scrollTo(0, 0);
}

function downloadText(filename, text) {
  const url = URL.createObjectURL(new Blob([text], {type: "text/plain;charset=utf-8"}));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function resourceText(resource) {
  return ["KIKI PICKLEBALL | INTRODUCTORY TEACHING GUIDE", resource.title, "", resource.intro, "", ...resource.sections.flatMap((section) => [section.title, ...section.items.map((item) => "- " + item), ""]), "Introductory notes only. Confirm current classroom instructions with the instructor."].join("\r\n");
}

function classroomEstimate() {
  const students = $("#student-count").valueAsNumber;
  const size = Number($("#team-size").value);
  const valid = Number.isInteger(students) && students >= 1 && students <= 300;
  $("#planner-error").hidden = valid;
  $("#student-count").setAttribute("aria-invalid", String(!valid));
  $("#download-plan").disabled = !valid;
  $("#team-count").textContent = valid ? Math.ceil(students / size) : "--";
  const remainder = students % size;
  $("#team-detail").textContent = valid
    ? `${students} student${students === 1 ? "" : "s"}, up to ${size} per team${remainder ? `; one team of ${remainder}` : ""}`
    : "Enter a valid class size";
  return valid ? {students, size, teams: Math.ceil(students / size)} : null;
}

wireTabs("[data-tour]", chooseTour);
wireTabs("[data-phase]", choosePhase);
$("#step-previous").addEventListener("click", () => chooseTour(Math.max(0, currentTour - 1)));
$("#step-next").addEventListener("click", () => {
  chooseTour(Math.min(tour.length - 1, currentTour + 1));
  if (currentTour === tour.length - 1) $("#step-repeat").focus({preventScroll: true});
});
$("#step-repeat").addEventListener("click", () => {
  chooseTour(0);
  $("#step-next").focus({preventScroll: true});
});
$("#launch-example").addEventListener("click", (event) => {
  $("#image-dialog-title").textContent = "New-product example / Slots C and D";
  $("#full-image").src = "assets/launch.png";
  $("#full-image").alt = "Local launch demonstration with new paddles in slots C and D and editable price, forecast, and production controls";
  openDialog($("#image-dialog"), event.currentTarget);
  $(".full-image").scrollTo(0, 0);
});
$("#zoom-screen").addEventListener("click", openImage);
$("#image-open").addEventListener("click", openImage);
$$("[data-resource]").forEach((button) => button.addEventListener("click", () => openResource(button.dataset.resource, button)));
$$("[data-close]").forEach((button) => button.addEventListener("click", () => $("#" + button.dataset.close).close()));
$$("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    lastDialogTrigger?.focus({preventScroll: true});
  });
});
$("#download-resource").addEventListener("click", () => {
  if (currentResource) downloadText(`Kiki_${currentResource.title.toLowerCase().replaceAll(" ", "_")}.txt`, resourceText(currentResource));
});
$("#student-count").addEventListener("input", classroomEstimate);
$("#team-size").addEventListener("change", classroomEstimate);
$("#download-plan").addEventListener("click", () => {
  const estimate = classroomEstimate();
  if (!estimate) return;
  const header = ["CLASSROOM PLANNING ESTIMATE", `${estimate.students} students | Up to ${estimate.size} students per team | ${estimate.teams} teams`, "Redistribute team sizes as needed. This is not a hosting-capacity estimate.", "No classroom or accounts have been created. Arrange access separately.", "", ""];
  downloadText("Kiki_classroom_teaching_outline.txt", header.join("\r\n") + resourceText(resources.instructor));
});

const menuButton = $(".menu-toggle");
function closeMenu() {
  $("#nav").classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") !== "true";
  $("#nav").classList.toggle("open", expanded);
  menuButton.setAttribute("aria-expanded", String(expanded));
  menuButton.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
});
$$("#nav a").forEach((anchor) => anchor.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
chooseTour(currentTour);
classroomEstimate();
window.lucide.createIcons();

"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const tour = [
  {
    title: ["The same market.", "Different decisions."],
    description: "Every team reads the same public market outlook. Demand ranges and market conditions set the context; students decide how to respond.",
    question: "What should change in your operating plan when the market changes?",
    screen: "Public Market Report / Market Outlook",
    image: "market.png",
    alt: "Practice classroom market report with a demand forecast range and an English market summary"
  },
  {
    title: ["A portfolio.", "One coordinated plan."],
    description: "Set price, demand forecast, production, and quality spending for each paddle. Every product shares the same materials, capacity, and cash.",
    question: "Can your operations deliver the strategy your team has chosen?",
    screen: "Team Decisions / Product Profile",
    image: "products.png",
    alt: "Demo product profile with price, forecast, production, and quality controls"
  },
  {
    title: ["Today's operations.", "Tomorrow's portfolio."],
    description: "Invest in development and testing, check launch readiness, and introduce a new paddle. Once it enters the portfolio, teams set its price, forecast, and production.",
    question: "When is a new product worth the investment, and can you support its launch?",
    screen: "Team Decisions / Newly Launched Paddles",
    image: "launch.png",
    alt: "Local launch demonstration with new paddles in slots C and D and editable price, forecast, and production controls"
  },
  {
    title: ["Four checks.", "One team decision."],
    description: "Review demand, production capacity, materials, and service, quality, and cash before saving. The checklist draws attention to tradeoffs without choosing the plan for students.",
    question: "Have your forecasts, supply decisions, and cash commitments been coordinated?",
    screen: "Team Decisions / Pre-Submit Check",
    image: "checklist.png",
    alt: "Kiki's four-part pre-submit checklist for market forecast, production capacity, materials supply, and service, quality, and cash"
  },
  {
    title: ["See the outcome.", "Explain the tradeoff."],
    description: "Review revenue, operating costs, cash, and financing alongside the round's operational results. Teams explain what happened and revise the next plan.",
    question: "Did the business improve, or did a good-looking sales result hide an operating problem?",
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
    title: "Student quick start",
    intro: "A short orientation for a first practice round. Use your instructor's current manual for detailed controls, rules, and deadlines.",
    sections: [
      {title: "1. Read the public market report", items: ["Check the demand outlook, segment mix, material costs, supply conditions, quality sensitivity, and technology conditions.", "Discuss what has changed since the previous round. A market outlook is not a promise that your firm will sell a particular quantity."]},
      {title: "2. Build one coordinated plan", items: ["For each active paddle, agree on price, demand forecast, production, and quality spending.", "Check shared capacity and material availability. An order placed now may arrive in a future round rather than support current production.", "Consider inventory, backlog, borrowing, and the cash needed to support the plan."]},
      {title: "3. Manage future products", items: ["Review development funding, testing, and launch readiness before requesting a launch.", "When a new paddle appears in an active product slot, enter and check its selling and production decisions before saving."]},
      {title: "4. Review and save", items: ["Discuss the pre-submit checks as a team, resolve input errors, and understand any remaining warnings.", "Save during the instructor's submission window and confirm that the decision was recorded. Assign one person to make the final save after the team agrees."]},
      {title: "5. Learn from the results", items: ["After the instructor runs the round, compare your forecast with demand and sales. Explain any production or service shortfall.", "Review costs, profit, cash, debt, inventory, and product performance before choosing your next action."]}
    ]
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

let currentTour = 1;
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
  $("#tour-question").textContent = item.question;
  $("#screen-name").textContent = item.screen;
  $("#tour-image").src = `assets/${item.image}`;
  $("#tour-image").alt = item.alt;
  $("#image-open").setAttribute("aria-label", `Enlarge ${item.screen} screenshot`);
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

import { useState } from "react";

const sections = [
  {
    title: "Section 1: Core Frontend Concepts",
    questions: [
      {
        q: "What is the difference between HTML, CSS, and JavaScript?",
        a: `These three technologies form the foundation of every web page, each serving a distinct role.

HTML (HyperText Markup Language) defines the structure and meaning of content. It uses elements like <h1>, <p>, and <div> to describe what content is — a heading, a paragraph, a button.

CSS (Cascading Style Sheets) controls the visual presentation — layout, colour, typography, spacing, and animations. It decouples design from content.

JavaScript adds interactivity and behaviour. It can manipulate the DOM, respond to user events, fetch data from APIs, and dynamically update the page without a full reload.`,
        bullets: null,
      },
      {
        q: "What is the DOM (Document Object Model)?",
        a: `The DOM is a programming interface provided by the browser that represents an HTML document as a tree of nodes. When a browser loads an HTML page, it parses the markup and constructs this tree in memory.

Each element, attribute, and piece of text becomes a node in the tree. JavaScript can traverse, create, modify, or delete these nodes at runtime — which is what makes web pages dynamic.

Frameworks like React introduce a Virtual DOM — a lightweight JavaScript copy of the real DOM. React diffs the virtual tree and applies only the minimal set of real DOM changes, making updates far more efficient.`,
        bullets: null,
      },
      {
        q: "What is the difference between == and === in JavaScript?",
        a: `== (loose equality) performs type coercion before comparing, producing surprising results like 0 == false → true or "5" == 5 → true.

=== (strict equality) checks both value and type with no coercion. "5" === 5 → false.

Best practice: always use === in production code. It is explicit, predictable, and avoids subtle bugs caused by implicit type conversion.`,
        bullets: null,
      },
    ],
  },
  {
    title: "Section 2: React & Hooks",
    questions: [
      {
        q: "What is React and why is it popular?",
        a: "React is an open-source JavaScript library created by Meta for building user interfaces. It is component-based — UIs are composed of small, reusable pieces that each manage their own state and rendering logic.",
        bullets: [
          "Component reusability reduces code duplication",
          "Virtual DOM makes UI updates fast and predictable",
          "Unidirectional data flow makes state easy to debug",
          "Massive ecosystem: React Router, Redux, React Query, etc.",
          "Backed by Meta with widespread industry adoption",
        ],
      },
      {
        q: "Explain useState and useEffect hooks with examples.",
        a: `useState lets a functional component hold and update local state. It returns a pair: the current value and a setter function.
→ const [count, setCount] = useState(0);

useEffect runs a side-effect after the component renders. It takes a callback and an optional dependency array.
→ No array: runs after every render
→ Empty []: runs once on mount only
→ With [dep]: runs when dep changes
→ Return a cleanup function to cancel timers or subscriptions.`,
        bullets: null,
      },
      {
        q: "What is the difference between props and state?",
        a: null,
        table: {
          headers: ["Aspect", "Props", "State"],
          rows: [
            ["Owner", "Set by the parent", "Owned by the component"],
            ["Mutability", "Read-only", "Updated via setter"],
            ["Purpose", "Pass data down", "Track internal data"],
            ["Re-render", "Yes, when parent re-renders", "Yes, when setter is called"],
            ["Analogy", "Function parameters", "Local variables with memory"],
          ],
        },
      },
    ],
  },
  {
    title: "Section 3: CSS & Layout",
    questions: [
      {
        q: "What is the CSS Box Model?",
        a: `Every HTML element is a rectangular box with four nested areas:

Content → Padding → Border → Margin (innermost to outermost).

box-sizing: content-box (default) — width applies to content only; padding and border are added on top.
box-sizing: border-box — width includes padding and border. Applied globally with * { box-sizing: border-box }.`,
        bullets: null,
      },
      {
        q: "Flexbox vs CSS Grid — when to use each?",
        a: null,
        table: {
          headers: ["Feature", "Flexbox", "CSS Grid"],
          rows: [
            ["Dimensions", "One-dimensional", "Two-dimensional"],
            ["Best for", "Nav bars, button groups", "Page layouts, dashboards"],
            ["Alignment", "Along one axis", "Across both axes"],
            ["Content-driven", "Yes", "No — structure first"],
          ],
        },
      },
      {
        q: "What is responsive design and how do media queries work?",
        a: "Responsive design makes a single codebase adapt to different screen sizes without separate codebases.",
        bullets: [
          "Mobile-first — style small screens first, add complexity at larger breakpoints",
          "Fluid layouts — use percentages and fr units instead of fixed px",
          "Flexible images — max-width: 100% prevents overflow",
          "Media query: @media (max-width: 768px) { .sidebar { display: none; } }",
          "Tailwind provides sm:, md:, lg: breakpoint prefixes out of the box",
        ],
      },
    ],
  },
  {
    title: "Section 4: Performance & Best Practices",
    questions: [
      {
        q: "What is the difference between var, let, and const?",
        a: null,
        table: {
          headers: ["Feature", "var", "let", "const"],
          rows: [
            ["Scope", "Function", "Block", "Block"],
            ["Hoisting", "Yes (undefined)", "Yes (TDZ)", "Yes (TDZ)"],
            ["Re-assign", "Yes", "Yes", "No"],
            ["Use today", "Avoid", "Mutable values", "Default choice"],
          ],
        },
      },
      {
        q: "What are common performance optimisation techniques?",
        a: "Performance must be considered from architecture choices down to individual component re-renders.",
        bullets: [
          "Code splitting — load only the code needed for the current route",
          "Lazy loading — defer images and components until they enter the viewport",
          "Minification and tree-shaking — remove dead code from production bundles",
          "Debounce/throttle — limit expensive scroll and input handlers",
          "React.memo, useMemo, useCallback — prevent unnecessary re-renders",
          "CSS transforms for animation — avoids layout reflow",
        ],
      },
      {
        q: "What is accessibility (a11y) and why does it matter?",
        a: "Accessibility is the practice of building interfaces usable by everyone, including people with disabilities. It matters morally, legally (WCAG compliance), and commercially.",
        bullets: [
          "Semantic HTML — use <button>, <nav>, <main> for structure",
          "ARIA attributes — add role and aria-label when semantic HTML is insufficient",
          "Keyboard navigation — every interactive element must be keyboard operable",
          "Colour contrast — minimum 4.5:1 ratio for normal text (WCAG AA)",
          "Focus management — visible focus indicators and logical tab order",
          "Alt text — all meaningful images need descriptive alt attributes",
        ],
      },
    ],
  },
  {
    title: "Section 5: Ecosystem & Tooling",
    questions: [
      {
        q: "What is the difference between a library and a framework?",
        a: `A library is a collection of functions you call on your own terms. You control the application flow. React is a library — it handles rendering, but routing and state are left to you.

A framework provides a complete structure and calls your code at defined points (Inversion of Control). Angular is a framework — routing, forms, HTTP, and DI are all included.

The key distinction: with a library, you call it. With a framework, it calls you.`,
        bullets: null,
      },
      {
        q: "What is version control and why is Git important?",
        a: "Version control records changes over time so you can revert mistakes, compare versions, and collaborate safely.",
        bullets: [
          "Every change is tracked — revert a breaking change in seconds",
          "Branching — isolate work in progress from stable code",
          "Pull Requests — code review before merges catches bugs early",
          "CI/CD integration — GitHub Actions runs tests and deploys on push",
          "Collaboration — multiple developers work without overwriting each other",
        ],
      },
      {
        q: "What is the difference between SSR, SSG, and CSR?",
        a: null,
        table: {
          headers: ["Feature", "CSR", "SSR", "SSG"],
          rows: [
            ["Rendered", "In browser", "On server", "At build time"],
            ["Initial load", "Slow", "Fast", "Fastest"],
            ["SEO", "Challenging", "Excellent", "Excellent"],
            ["Best for", "Dashboards", "E-commerce", "Blogs, docs"],
            ["Example", "Vite + React", "Next.js dynamic", "Next.js static"],
          ],
        },
      },
    ],
  },
];

const printStyles = `
  @media print {
    .no-print { display: none !important; }
    .print-open { display: block !important; }
    body { background: white !important; }
    .card-body { display: block !important; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
`;

function TableComp({ headers, rows }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-900 text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 text-gray-700 border-t border-gray-100">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuestionCard({ number, q, a, bullets, table }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="no-print w-full flex items-start gap-3 px-5 py-4 bg-blue-50 hover:bg-blue-100 transition text-left"
      >
        <span className="text-blue-600 font-bold text-sm mt-0.5 flex-shrink-0">Q{number}</span>
        <span className="font-medium text-blue-900 text-sm flex-1">{q}</span>
        <span className="text-blue-400 text-lg flex-shrink-0">{open ? "▲" : "▼"}</span>
      </button>

      {/* Always visible question for print */}
      <div className="hidden print-open px-5 py-3 bg-blue-50">
        <span className="text-blue-600 font-bold text-sm">Q{number}  </span>
        <span className="font-medium text-blue-900 text-sm">{q}</span>
      </div>

      {open && (
        <div className="card-body px-5 py-4 bg-white">
          {a && (
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{a}</p>
          )}
          {bullets && (
            <ul className="mt-3 space-y-1.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {table && <TableComp headers={table.headers} rows={table.rows} />}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleDownload = () => {
    // Expand all cards before printing
    window.print();
  };

  const displayed = activeSection === null
    ? sections
    : sections.filter((_, i) => i === activeSection);

  let qCounter = 0;

  return (
    <>
      <style>{printStyles}</style>

      <div className="min-h-screen bg-gray-50">

        {/* Header */}
        <div className="bg-blue-900 text-white px-6 py-8 text-center">
          <h1 className="text-2xl font-semibold">Frontend Development</h1>
          <p className="text-blue-300 text-sm mt-1">Theoretical Questions & Answers</p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="no-print mt-4 inline-flex items-center gap-2 bg-white text-blue-900 text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
            </svg>
            Download as PDF
          </button>
        </div>

        {/* Section Filter */}
        <div className="no-print flex flex-wrap gap-2 justify-center px-4 py-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setActiveSection(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              activeSection === null
                ? "bg-blue-800 text-white border-blue-800"
                : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
            }`}
          >
            All Sections
          </button>
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                activeSection === i
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
              }`}
            >
              Section {i + 1}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
          {displayed.map((section) => {
            const globalIndex = sections.indexOf(section);
            return (
              <div key={globalIndex}>
                <h2 className="text-lg font-semibold text-blue-900 border-b-2 border-blue-200 pb-2 mb-5">
                  {section.title}
                </h2>
                {section.questions.map((item) => {
                  qCounter++;
                  return (
                    <QuestionCard
                      key={qCounter}
                      number={qCounter}
                      q={item.q}
                      a={item.a}
                      bullets={item.bullets}
                      table={item.table}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
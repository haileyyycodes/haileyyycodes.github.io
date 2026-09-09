import { Link } from 'react-router-dom';
import './AIWorkflowPage.css';

// NOTE: the /grill-me skill referenced below doesn't have a public page
// yet. It's rendered as a `.skill-ref` token for now — pass an `href` to
// turn one into a link (see /tech-tutor, /repo-rundown, /tactile-ux).

function SkillRef({ name, href }) {
  if (href) {
    return (
      <a
        className="skill-ref skill-ref-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    );
  }
  return <code className="skill-ref">{name}</code>;
}

function AIWorkflowPage() {
  return (
    <section className="ai-workflow">
      <div className="ai-workflow-inner">
        <Link to="/#top" className="back-link">
          ← back home
        </Link>

        <p className="section-label">// AI WORKFLOW</p>
        <h1 className="ai-workflow-title">
          Thoughts on AI &amp; My Personal Workflow
        </h1>

        <div className="tui-card">
          <div className="tui-card-header">
            <span className="tui-card-dot" />
            <span className="tui-card-filename">ai-workflow.md</span>
          </div>

          <div className="tui-card-body">
            <div className="card-block">
              <h3 className="block-label"># my workflow</h3>
              <ol className="aw-list">
                <li>
                  <strong>Start with a solid idea.</strong>
                </li>
                <li>
                  Turn my idea into a clear set of requirements. Typically
                  written by hand with clear goals and intentions.
                </li>
                <li>
                  Using <SkillRef name="/grill-me" />, I like to flesh out
                  blind spots in my original idea and start to transition the
                  idea into “AI production mode.”
                </li>
                <li>
                  Depending on the size of the PRD, I will either implement
                  from there — or break the PRD into phased development. The
                  phases are generally decided by how big of a chunk I feel
                  comfortable reviewing at any given stage. For established
                  projects, I like to keep the chunks small and well tested
                  against existing functionality. For spinning up new
                  projects, I find the phases can be bigger, especially in the
                  beginning.
                </li>
                <li>
                  <strong>Usage &amp; refinement.</strong> For projects in
                  production environments, I rely on feedback from users and
                  stakeholders to define next steps or improvements. Not
                  always though — sometimes the improvements come from real
                  pain points I observe from using the software myself, in
                  which case I start from the beginning of my workflow. For my
                  personal projects, I tend to build internal tooling for
                  myself, and with my usage I usually write down or take a
                  mental note of friction and pain points while using it and
                  do quick “tweaking” sessions to dial in the user experience
                  to my personal taste.
                </li>
              </ol>
            </div>

            <div className="card-block">
              <h3 className="block-label">
                # how does that factor into my workflow?
              </h3>
              <ol className="aw-list">
                <li>I use it as a development agent.</li>
                <li>
                  I use it as a learning tool. I created a{' '}
                  <SkillRef
                    name="/tech-tutor"
                    href="https://github.com/haileyyycodes/ai-skills/tree/main/tech-tutor"
                  />{' '}
                  skill that I use for learning new tech stacks and brushing up
                  on ones I already know.
                </li>
                <li>
                  I use it to get up to speed for new projects I’m thrown
                  into, namely using my{' '}
                  <SkillRef
                    name="/repo-rundown"
                    href="https://github.com/haileyyycodes/ai-skills/tree/main/repo-rundown"
                  />{' '}
                  skill to understand a new repo, the lay of the land, the
                  pain points, and the tech stack.
                </li>
                <li>
                  I use it to get a product or project’s UX and UI to a
                  standard place. What does that mean? I use the{' '}
                  <SkillRef
                    name="/tactile-ux"
                    href="https://github.com/haileyyycodes/ai-skills/tree/main/tactile-ux"
                  />{' '}
                  skill I created to quickly verify and implement UX/UI
                  standards defined in the skill. The skill can also be used
                  during development as a marker for how to build things.
                </li>
                <li>
                  Grammar &amp; spelling: have you ever met an engineer who
                  wasn’t dyslexic?
                </li>
              </ol>
            </div>

            <div className="card-block">
              <h3 className="block-label"># what I don’t use AI for</h3>
              <ol className="aw-list">
                <li>
                  Writing my thoughts and ideas.
                  <ul className="aw-sublist">
                    <li>
                      Every product or feature idea that I start with has to
                      come directly from my brain. I describe the feature or
                      idea in great detail in a written format, even going so
                      far as to describe UX behavior or UI attributes. The
                      clearer I am about the starting place in my own brain,
                      the better I am at directing and orchestrating AI agents
                      to implement the idea. An aside: AI makes fewer mistakes
                      with well-described UX and UI.
                    </li>
                  </ul>
                </li>
                <li>
                  Making visual art.
                  <ul className="aw-sublist">
                    <li>
                      Not relevant to engineering, I just find AI art tacky
                      and uninspiring (sorry, not sorry).
                    </li>
                  </ul>
                </li>
                <li>
                  Constructing texts and emails to loved ones or colleagues.
                  <ul className="aw-sublist">
                    <li>
                      Life is far too short and far too long to delegate what
                      fundamentally makes us human.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIWorkflowPage;

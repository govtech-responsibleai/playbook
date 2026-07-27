# PrinciplesGrid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the markdown table of 6 RAI principles on the About Responsible AI page with a visual card grid with inline SVG icons.

**Architecture:** Create a self-contained `PrinciplesGrid` React component with inline SVG icons (no icon library) and a CSS module for layout. Rename the page to `.mdx` so it can import the component, then replace the markdown table with `<PrinciplesGrid />`.

**Tech Stack:** React 18, TypeScript, CSS Modules, Docusaurus 3, MDX

## Global Constraints

- No new npm dependencies — inline SVG paths only (same pattern as `FeedbackWidget`)
- SVG icons: 24×24 viewBox, `stroke="currentColor"`, `strokeWidth={2}`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `fill="none"`
- CSS uses Docusaurus CSS variables only (`--ifm-*`) — no hardcoded colours
- Cards are informational only — not clickable links
- Build must pass: `cd website && npm run build`

---

### Task 1: Create PrinciplesGrid component and CSS module

**Files:**
- Create: `website/src/components/PrinciplesGrid/index.tsx`
- Create: `website/src/components/PrinciplesGrid/PrinciplesGrid.module.css`

**Interfaces:**
- Produces: `export default function PrinciplesGrid(): React.ReactElement` — no props

- [ ] **Step 1: Create the CSS module**

Create `website/src/components/PrinciplesGrid/PrinciplesGrid.module.css`:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.card {
  background: var(--ifm-card-background-color, var(--ifm-background-color));
  border: 2px solid var(--ifm-color-emphasis-200);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}

.icon {
  display: block;
  margin: 0 auto 0.75rem;
  color: var(--ifm-color-primary);
}

.card h3 {
  font-size: 1rem;
  margin: 0 0 0.5rem;
  color: var(--ifm-color-primary);
  font-weight: 600;
}

.card p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--ifm-color-emphasis-700);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Create the component**

Create `website/src/components/PrinciplesGrid/index.tsx`:

```tsx
import React from 'react';
import styles from './PrinciplesGrid.module.css';

const PRINCIPLES = [
  {
    name: 'Safety',
    description: 'AI systems should be (i) protected against adversarial threats and misuse for harmful activities and (ii) aligned to the public good.',
    icon: (
      <svg className={styles.icon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: 'Robustness',
    description: 'AI systems should perform up to task even when subjected to challenging requirements or circumstances.',
    icon: (
      <svg className={styles.icon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: 'Fairness',
    description: 'AI systems should strive to be fair and equitable to all, regardless of gender, race, religion, or other attributes.',
    icon: (
      <svg className={styles.icon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <line x1="12" x2="12" y1="3" y2="21" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    name: 'Explainability',
    description: 'AI systems should provide clear and reliable explanations for their automated decisions to key stakeholders.',
    icon: (
      <svg className={styles.icon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    name: 'Privacy',
    description: 'AI systems should handle personal data carefully and protect against potential data leakages.',
    icon: (
      <svg className={styles.icon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    name: 'Transparency',
    description: 'AI systems should document key development and deployment choices and be clear about how the AI system should be used.',
    icon: (
      <svg className={styles.icon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function PrinciplesGrid(): React.ReactElement {
  return (
    <div className={styles.grid}>
      {PRINCIPLES.map(({ name, description, icon }) => (
        <div key={name} className={styles.card}>
          {icon}
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run from `website/`:
```bash
npm run typecheck
```
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add website/src/components/PrinciplesGrid/
git commit -m "feat: add PrinciplesGrid component with inline SVG icons"
```

---

### Task 2: Update the page to use PrinciplesGrid

**Files:**
- Create: `website/docs/start-here/about-responsible-ai.mdx` (new file with MDX content)
- Delete: `website/docs/start-here/about-responsible-ai.md`

**Interfaces:**
- Consumes: `PrinciplesGrid` default export from Task 1

- [ ] **Step 1: Create the .mdx file**

Create `website/docs/start-here/about-responsible-ai.mdx` with the full content below. This is a complete replacement — copy everything from the original `.md` file, then apply two changes: add the import after frontmatter, and replace the markdown table with `<PrinciplesGrid />`.

```mdx
---
sidebar_label: "[ALL] About Responsible AI"
sidebar_position: 2
---

import PrinciplesGrid from '@site/src/components/PrinciplesGrid';

# About Responsible AI

Broadly, Responsible AI ("RAI") focuses on how to develop, evaluate, deploy, and monitor AI systems in a safe, trustworthy, and ethical manner. From how data is collected to how humans interact with AI systems, RAI will help to guide these decisions toward beneficial and equitable outcomes. In the public sector context, RAI will help align AI systems to achieve the public good.

At GovTech's AI Practice, we break down RAI into 6 key principles that AI systems should strive towards.

<PrinciplesGrid />

## Why is RAI important?

![Examples of how LLM systems can fail in the real world](/images/rai-case-studies.png)

Responsible AI is crucial to prevent unintended consequences and biases in automated systems. For instance, a Chevrolet dealership implemented a ChatGPT-powered chatbot to assist customers. However, users exploited the chatbot's lack of safeguards, prompting it to agree to absurd deals, such as selling a 2024 Chevy Tahoe for $1. Similarly, a Bloomberg investigation revealed that OpenAI's GPT-4 model exhibited racial biases when ranking resumes. The LLM favoured names associated with Asian women and ranked those linked to Black men lowest for certain job roles.

In another example, Air Canada's LLM chatbot provided a customer with incorrect information regarding bereavement fares, which led to the customer's claim being denied by Air Canada on the basis that the chatbot's information was non-binding. A Canadian tribunal ruled against the airline, emphasising that companies are accountable for the information their AI systems disseminate, regardless of disclaimers.

These incidents highlight the need for AI system developers to consider how their AI models could fail, test their models and applications rigorously, and implement measures to reduce the likelihood of such failures. This is at the heart of what we do in the Responsible AI space.

## Where can issues arise?

Issues of safety, bias, robustness, and other RAI areas can exist at each stage of the application life cycle. Below we go through each stage and explain how some of these issues may emerge.

![The AI life cycle consists of the data, model, and application](/images/ai_cycle.png)
*The AI life cycle consists of the data, model, and application.*

### Data

As the old adage goes, "garbage in, garbage out". If unsafe or biased data is used for training, the model outputs are likely to be unsafe and biased as well. For example, a 2019 study revealed that a widely used healthcare algorithm exhibited racial bias by underestimating the health needs of black patients compared to equally ill white patients. The algorithm used healthcare costs as a proxy for health needs, leading to black patients, who typically incur lower healthcare costs due to systemic disparities, being assigned lower risk scores. Consequently, black patients were less likely to be referred for advanced care management programs.

In the Generative AI space, LLMs are typically pre-trained on massive amounts of text or image data from the Internet, which contain harmful, toxic and biased texts. Since LLMs autoregressively generate the next most probable token, the output depends on the joint distribution of tokens learned during training. If unsafe token sequences are learned, they will naturally be reproduced by the model, as ChatGPT did in its early days. For image generation models, there have been several studies finding that generated outputs of engineers, scientists, or lawyers disproportionately portray men over women, reflecting the unequal gender representation of those occupations in the training data.

### Model

In discriminative AI settings, the choice of modelling parameters can greatly impact their fairness. One key consideration is whether to include sensitive variables (i.e. variables about protected attributes like race or gender) in the model. On one hand, including these variables may result in bias against specific groups, such as ageist and sexist bias in online recruitment software. However, algorithmic bias has also been shown to persist even in models that deliberately exclude sensitive variables from the model, such as with recidivism prediction (i.e. COMPAS) or with delivery services (i.e. Amazon Prime).

In the generative AI space, significant research has been dedicated to aligning models with human preferences and desirable values. Given paired text data and their rankings, LLMs undergo a second stage of reinforcement learning to learn to output preferred (i.e., safer) responses.

Another significant research direction entails analysing harmfulness and toxicity in LLM neurons and layers. Having found the weights or activations that are most responsible for toxicity, it is then possible to edit the models to reduce the incidence of harmful outputs. This is typically known as a white box approach to tackling model harmfulness.

### Application

Finally, when an AI model is embedded into a software application, the way users interact with the application may also result in significant risks. For example, users may intentionally probe the application to exfiltrate sensitive data or elicit harmful outputs at scale. To address this risk, input and output guardrails have emerged as viable defences. Guardrails are typically known as black-box defences as they do not require access to the models and can be easily deployed in the application layer.

## Our Approach

At present, our approach to deploying AI models safely involves testing, mitigation and model understanding.

![Functional focus areas for Responsible AI](/images/approach_focus.png)
*Functional focus areas for Responsible AI.*

### Testing

Testing generally involves a process similar to this:

:::note[Steps in Testing]

1. Establish safety categories of interest and requisite metrics
2. Collect and analyse testing data to generate safety metrics
    1. Static or dynamic
    2. General or domain-specific
    3. Synthetic or real (e.g. from production)
3. Continually expand and curate more testing data

:::

While testing can technically be conducted at any point of the application life cycle, third party testing is typically done at the application level.

Refer to the section on [evaluating AI systems](../evaluating-ai-systems/index.md) for details.

### Mitigation

After testing is completed, mitigation measures can then be adopted, where applicable and appropriate. A common mitigation measure is finetuning or alignment, in which AI models are trained to output human-preferred responses, or aligned to human values, requiring access to model weights. On the other hand, mitigations at the application level in the form of guardrails are more general and can be widely applied to different contexts.

Refer to the section on [improving AI systems](../improving-ai-systems/index.md) for details.

### Model Understanding

Lastly, model understanding, whether by understanding the internal mechanisms (i.e., mechanistic interpretability) or outputs (i.e., explainability), is important in increasing transparency of and trust in AI.
```

- [ ] **Step 2: Delete the old .md file**

```bash
git rm website/docs/start-here/about-responsible-ai.md
```

- [ ] **Step 3: Verify the build passes**

Run from `website/`:
```bash
npm run build
```
Expected: build completes with no errors. Check for any MDX parse errors in the output.

- [ ] **Step 4: Visually verify in dev server**

Run from `website/`:
```bash
npm run start
```
Open `http://localhost:3000` and navigate to the About Responsible AI page. Verify:
- 6 cards render in a 3-column grid
- Each card shows an icon, principle name, and description
- Icons use the dark-teal brand colour
- Grid collapses to 2 columns at tablet width and 1 column on mobile
- Dark mode renders cleanly (toggle with Docusaurus colour mode button)
- No console errors

- [ ] **Step 5: Commit**

```bash
git add website/docs/start-here/about-responsible-ai.mdx
git commit -m "feat: replace principles table with PrinciplesGrid on about page"
```

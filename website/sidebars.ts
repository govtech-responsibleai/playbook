import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        {type: 'doc', id: 'start-here/getting-started', label: 'Getting started'},
        {type: 'doc', id: 'start-here/about-responsible-ai', label: 'About Responsible AI'},
      ],
    },
    {
      type: 'category',
      label: 'Evaluating AI Systems',
      collapsed: true,
      items: [
        {type: 'doc', id: 'evaluating-ai-systems/index', label: 'Overview'},
        {type: 'doc', id: 'evaluating-ai-systems/methods', label: 'Evaluation methods'},
        {type: 'doc', id: 'evaluating-ai-systems/functional', label: 'Functional evals'},
        {
          type: 'category',
          label: 'Evals for RAI principles',
          collapsed: true,
          link: {type: 'doc', id: 'evaluating-ai-systems/rai-principles'},
          items: [
            {type: 'doc', id: 'evaluating-ai-systems/safety', label: '[T] Safety evals'},
            {type: 'doc', id: 'evaluating-ai-systems/robustness', label: 'Robustness evals'},
            {type: 'doc', id: 'evaluating-ai-systems/fairness', label: 'Fairness evals'},
            {type: 'doc', id: 'evaluating-ai-systems/privacy', label: 'Privacy evals'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Improving AI Systems',
      collapsed: true,
      items: [
        {type: 'doc', id: 'improving-ai-systems/index', label: 'Overview'},
        {
          type: 'category',
          label: 'Guardrails',
          collapsed: true,
          items: [
            {type: 'doc', id: 'improving-ai-systems/guardrails/what-are-guardrails', label: 'What are guardrails?'},
            {type: 'doc', id: 'improving-ai-systems/guardrails/guardrail-architecture', label: 'Guardrail architecture'},
            {type: 'doc', id: 'improving-ai-systems/guardrails/choosing-a-guardrail', label: 'Choosing a guardrail'},
            {type: 'doc', id: 'improving-ai-systems/guardrails/production-integration', label: 'Production integration'},
            {type: 'doc', id: 'improving-ai-systems/guardrails/monitoring-incident-response', label: 'Monitoring and incident response'},
          ],
        },
        {type: 'doc', id: 'improving-ai-systems/finetuning', label: 'Finetuning'},
        {
          type: 'category',
          label: 'Improving RAI principles',
          collapsed: true,
          link: {type: 'doc', id: 'improving-ai-systems/improving-rai-principles'},
          items: [
            {type: 'doc', id: 'improving-ai-systems/safety-improvements', label: 'Safety improvements'},
            {type: 'doc', id: 'improving-ai-systems/robustness-improvements', label: 'Robustness improvements'},
            {type: 'doc', id: 'improving-ai-systems/fairness-improvements', label: 'Fairness improvements'},
            {type: 'doc', id: 'improving-ai-systems/privacy-improvements', label: 'Privacy improvements'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools & Resources',
      collapsed: true,
      items: [
        {type: 'doc', id: 'tools/index', label: 'Overview'},
        {
          type: 'category',
          label: 'WOG Products',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/litmus', label: 'Litmus'},
            {type: 'doc', id: 'tools/sentinel', label: 'Sentinel'},
          ],
        },
        {
          type: 'category',
          label: 'Benchmarks',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/rabakbench', label: 'RabakBench'},
            {type: 'doc', id: 'tools/minorbench', label: 'MinorBench'},
            {type: 'doc', id: 'tools/responsible-ai-benchmark', label: 'Responsible AI Benchmark'},
          ],
        },
        {
          type: 'category',
          label: 'Guardrails',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/lionguard', label: 'LionGuard'},
            {type: 'doc', id: 'tools/off-topic-guardrail', label: 'Off-Topic guardrail'},
          ],
        },
        {
          type: 'category',
          label: 'Frameworks',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/wog-safety-testing', label: '[T] WOG Safety Testing Framework'},
            {type: 'doc', id: 'tools/agentic-risk-capability-framework', label: 'Agentic Risk & Capability Framework'},
            {type: 'doc', id: 'tools/knowornot', label: 'KnowOrNot'},
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/kaleidoscope', label: 'Kaleidoscope'},
            {type: 'doc', id: 'tools/metaevaluator', label: 'MetaEvaluator'},
          ],
        },
        {type: 'doc', id: 'resources', label: 'External resources'},
        {type: 'doc', id: 'tools/glossary', label: 'Glossary'},
      ],
    },
  ],
};

export default sidebars;

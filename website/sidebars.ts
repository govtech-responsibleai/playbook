import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        {type: 'doc', id: 'start-here/getting-started', label: '[ALL] Getting started'},
        {type: 'doc', id: 'start-here/about-responsible-ai', label: '[ALL] About Responsible AI'},
      ],
    },
    {
      type: 'category',
      label: 'Evaluating AI Systems',
      collapsed: true,
      items: [
        {type: 'doc', id: 'evaluating-ai-systems/index', label: '[JY] Overview'},
        {type: 'doc', id: 'evaluating-ai-systems/methods', label: 'Evaluation methods'},
        {type: 'doc', id: 'evaluating-ai-systems/functional', label: 'Functional evals'},
        {
          type: 'category',
          label: 'Evals for RAI principles',
          collapsed: true,
          items: [
            {type: 'doc', id: 'evaluating-ai-systems/safety', label: '[T] Safety evals'},
            {type: 'doc', id: 'evaluating-ai-systems/robustness', label: 'Robustness evals'},
            {type: 'doc', id: 'evaluating-ai-systems/fairness', label: '[S] Fairness evals'},
            {type: 'doc', id: 'evaluating-ai-systems/privacy', label: '[JY] Privacy evals'},
            {type: 'doc', id: 'evaluating-ai-systems/agentic-evals', label: '[S] Agentic evals'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Improving AI Systems',
      collapsed: true,
      items: [
        {type: 'doc', id: 'improving-ai-systems/index', label: '[S] Overview'},
        {
          type: 'category',
          label: 'Guardrails',
          collapsed: true,
          items: [
            {type: 'doc', id: 'improving-ai-systems/guardrail-architecture', label: '[JY] Guardrail architecture'},
            {type: 'doc', id: 'improving-ai-systems/threshold-tuning', label: '[JY] Threshold tuning'},
            {type: 'doc', id: 'improving-ai-systems/measuring-impact', label: '[JY] Measuring impact'},
            {type: 'doc', id: 'improving-ai-systems/building-your-own-guardrail', label: '[JY] Building your own guardrail'},
            {type: 'doc', id: 'improving-ai-systems/production-integration', label: '[JY] Production integration'},
            {type: 'doc', id: 'improving-ai-systems/monitoring-incident-response', label: '[JY] Monitoring and incident response'},
          ],
        },
        {type: 'doc', id: 'improving-ai-systems/finetuning', label: '[S] Finetuning'},
        {
          type: 'category',
          label: 'Improving RAI principles',
          collapsed: true,
          items: [
            {type: 'doc', id: 'improving-ai-systems/safety-improvements', label: '[JY] Safety improvements'},
            {type: 'doc', id: 'improving-ai-systems/robustness-improvements', label: 'Robustness improvements'},
            {type: 'doc', id: 'improving-ai-systems/fairness-improvements', label: '[S] Fairness improvements'},
            {type: 'doc', id: 'improving-ai-systems/privacy-improvements', label: '[JY] Privacy improvements'},
            {type: 'doc', id: 'improving-ai-systems/agentic-improvements', label: '[S] Agentic improvements'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools & Resources',
      collapsed: true,
      items: [
        {type: 'doc', id: 'tools/index', label: '[S] Overview'},
        {
          type: 'category',
          label: 'WOG Products',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/litmus', label: '[S] Litmus'},
            {type: 'doc', id: 'tools/sentinel', label: '[S] Sentinel'},
          ],
        },
        {
          type: 'category',
          label: 'Benchmarks',
          collapsed: true,
          items: [
            {type: 'doc', id: 'tools/rabakbench', label: 'RabakBench'},
            {type: 'doc', id: 'tools/minorbench', label: '[S] MinorBench'},
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
            {type: 'doc', id: 'tools/agentic-risk-capability-framework', label: '[S] Agentic Risk & Capability Framework'},
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
        {type: 'doc', id: 'resources', label: '[S] External resources'},
        {type: 'doc', id: 'tools/glossary', label: '[S] Glossary'},
      ],
    },
  ],
};

export default sidebars;

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'start-here/getting-started',
        'start-here/why-this-playbook',
        'start-here/about-responsible-ai',
      ],
    },
    {
      type: 'category',
      label: 'Evaluating AI Systems',
      collapsed: true,
      items: [
        'evaluating-ai-systems/index',
        {type: 'doc', id: 'evaluating-ai-systems/methods', label: 'Evaluation methods'},
        {
          type: 'category',
          label: 'Evals for RAI principles',
          collapsed: true,
          items: [
            {type: 'doc', id: 'evaluating-ai-systems/functional', label: 'Functional evals'},
            {type: 'doc', id: 'evaluating-ai-systems/safety', label: 'Safety evals'},
            {type: 'doc', id: 'evaluating-ai-systems/robustness', label: 'Robustness evals'},
            {type: 'doc', id: 'evaluating-ai-systems/fairness', label: 'Fairness evals'},
            {type: 'doc', id: 'evaluating-ai-systems/privacy', label: 'Privacy evals'},
            {type: 'doc', id: 'evaluating-ai-systems/agentic-evals', label: 'Agentic evals'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Improving AI Systems',
      collapsed: true,
      items: [
        'improving-ai-systems/index',
        {
          type: 'category',
          label: 'Guardrails',
          collapsed: true,
          items: [
            'improving-ai-systems/guardrail-architecture',
            'improving-ai-systems/threshold-tuning',
            'improving-ai-systems/measuring-impact',
            'improving-ai-systems/building-your-own-guardrail',
            'improving-ai-systems/production-integration',
            'improving-ai-systems/monitoring-incident-response',
          ],
        },
        'improving-ai-systems/finetuning',
        {
          type: 'category',
          label: 'Improving RAI principles',
          collapsed: true,
          items: [
            'improving-ai-systems/safety-improvements',
            'improving-ai-systems/robustness-improvements',
            'improving-ai-systems/fairness-improvements',
            'improving-ai-systems/privacy-improvements',
            'improving-ai-systems/agentic-improvements',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools & Resources',
      collapsed: true,
      items: [
        'tools/index',
        {
          type: 'category',
          label: 'WOG Products',
          collapsed: true,
          items: [
            'tools/litmus',
            'tools/sentinel',
          ],
        },
        {
          type: 'category',
          label: 'Benchmarks',
          collapsed: true,
          items: [
            'tools/rabakbench',
            'tools/minorbench',
            'tools/responsible-ai-benchmark',
          ],
        },
        {
          type: 'category',
          label: 'Guardrails',
          collapsed: true,
          items: [
            'tools/lionguard',
          ],
        },
        {
          type: 'category',
          label: 'Frameworks',
          collapsed: true,
          items: [
            'tools/wog-safety-testing',
            'tools/agentic-risk-capability-framework',
          ],
        },
        'resources',
        'tools/glossary',
      ],
    },
  ],
};

export default sidebars;

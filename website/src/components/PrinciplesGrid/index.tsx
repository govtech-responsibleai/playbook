import React from 'react';
import { Shield, Zap, Scale, Lightbulb, Lock, Eye } from 'lucide-react';
import styles from './PrinciplesGrid.module.css';

const PRINCIPLES = [
  {
    name: 'Safety',
    description: 'AI systems should be (i) protected against adversarial threats and misuse for harmful activities and (ii) aligned to the public good.',
    Icon: Shield,
  },
  {
    name: 'Robustness',
    description: 'AI systems should perform up to task even when subjected to challenging requirements or circumstances.',
    Icon: Zap,
  },
  {
    name: 'Fairness',
    description: 'AI systems should strive to be fair and equitable to all, regardless of gender, race, religion, or other attributes.',
    Icon: Scale,
  },
  {
    name: 'Explainability',
    description: 'AI systems should provide clear and reliable explanations for their automated decisions to key stakeholders.',
    Icon: Lightbulb,
  },
  {
    name: 'Privacy',
    description: 'AI systems should handle personal data carefully and protect against potential data leakages.',
    Icon: Lock,
  },
  {
    name: 'Transparency',
    description: 'AI systems should document key development and deployment choices and be clear about how the AI system should be used.',
    Icon: Eye,
  },
];

export default function PrinciplesGrid(): React.ReactElement {
  return (
    <div className={styles.grid}>
      {PRINCIPLES.map(({ name, description, Icon }) => (
        <div key={name} className={styles.card}>
          <Icon className={styles.icon} aria-hidden="true" />
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

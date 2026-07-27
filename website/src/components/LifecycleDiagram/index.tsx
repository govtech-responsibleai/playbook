import React from 'react';
import { Target, ScanSearch, ShieldCheck, Gavel, Play, ArrowRight } from 'lucide-react';
import styles from './LifecycleDiagram.module.css';

const STEPS = [
  { label: 'Define', icon: Target, active: true },
  { label: 'Evaluate', icon: ScanSearch, active: true },
  { label: 'Mitigate', icon: ShieldCheck, active: true },
  { label: 'Govern', icon: Gavel, active: false },
  { label: 'Apply', icon: Play, active: false },
];

export default function LifecycleDiagram(): React.ReactElement {
  return (
    <div className={styles.container}>
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
          <React.Fragment key={step.label}>
            <div
              className={`${styles.pill} ${step.active ? styles.active : styles.inactive}`}
              title={step.active ? undefined : 'Coming soon'}
            >
              <Icon size={24} aria-hidden="true" />
              <span>{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <ArrowRight className={styles.arrow} size={20} aria-hidden="true" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

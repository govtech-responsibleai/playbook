import React, {useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const TYPED_WORDS = [
  'safety',
  'robustness',
  'fairness',
  'explainability',
  'privacy',
  'transparency',
];

function TypedText(): React.ReactElement {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const el = ref.current;
      if (!el) return;

      const word = TYPED_WORDS[wordIndex];

      if (!isErasing) {
        el.textContent = word.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === word.length) {
          isErasing = true;
          timeout = setTimeout(tick, 1200);
          return;
        }
        timeout = setTimeout(tick, 90);
      } else {
        el.textContent = word.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isErasing = false;
          wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
          timeout = setTimeout(tick, 500);
          return;
        }
        timeout = setTimeout(tick, 60);
      }
    }

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className={styles.typedWrapper}>
      <span className={styles.typedAreas} ref={ref} />
      <span className={styles.typedCaret} aria-hidden="true">|</span>
    </span>
  );
}

const STARTING_POINTS = [
  {
    icon: '🚀',
    question: 'Getting ready to launch?',
    description: 'Check what\'s required before going live with an AI product.',
    href: '/start-here/minimum-bar-before-launch/',
  },
  {
    icon: '🗺️',
    question: 'Mapping your risks?',
    description: 'Understand risk categories and build a risk profile for your application.',
    href: '/understanding-risks/',
  },
  {
    icon: '🧪',
    question: 'Planning evaluations?',
    description: 'Design evaluation frameworks for safety, robustness, fairness, and privacy.',
    href: '/evaluating-ai-systems/',
  },
  {
    icon: '🛡️',
    question: 'Adding guardrails?',
    description: 'Implement mitigations and controls for production AI systems.',
    href: '/mitigations-controls/',
  },
];

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const heroBgUrl = useBaseUrl('/images/responsibleai.png');

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline} noFooter={false}>
      <main>
        <section
          className={styles.hero}
          style={{backgroundImage: `url(${heroBgUrl})`}}
        >
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            <h1>
              <span className={styles.responsibleAi}>Responsible AI</span>{' '}
              <span className={styles.playbookTitle}>Playbook</span>
            </h1>
            <p className={styles.playbookTagline}>
              Guidance for <TypedText /> in AI systems
            </p>
            <Link className={styles.ctaButton} to="/start-here/choose-your-path/">
              Choose your path →
            </Link>
          </div>
        </section>

        <section className={styles.keyAreasSection}>
          <h2>Where would you like to start?</h2>
          <div className={styles.keyAreasGrid}>
            {STARTING_POINTS.map(({icon, question, description, href}) => (
              <Link key={question} to={href} className={styles.keyAreaCard}>
                <span className={styles.keyAreaIcon} aria-hidden="true">{icon}</span>
                <h3>{question}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

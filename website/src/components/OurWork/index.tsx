import React from 'react';
import styles from './OurWork.module.css';
import rawData from './data.json';

// ─── Types ─────────────────────────────────────────────────────────────────

interface Link {
  key: string;
  url: string;
}

interface Item {
  type: string;
  icon?: string;
  title: string;
  summary?: string;
  subtitle?: string;
  rai?: string;
  tags?: string[];
  pinned?: boolean;
  links?: Link[];
}

// ─── Icon mappings ──────────────────────────────────────────────────────────

const MATERIAL_EMOJI: Record<string, string> = {
  ':material-shield-check:': '🛡️',
  ':material-flask-outline:': '🧪',
  ':material-lightbulb-on-outline:': '💡',
  ':material-account-child-outline:': '👤',
  ':material-chart-bar:': '📊',
  ':material-brain:': '🧠',
  ':material-eye-outline:': '👁️',
  ':material-database-outline:': '🗄️',
  ':material-robot-outline:': '🤖',
  ':material-security:': '🔒',
  ':material-file-document-outline:': '📄',
  ':material-star-outline:': '⭐',
};

function resolveIcon(code: string | undefined): string {
  if (!code) return '📌';
  return MATERIAL_EMOJI[code] ?? '📌';
}

// ─── Link button components ─────────────────────────────────────────────────

function MediumIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function HuggingFaceIcon(): React.ReactElement {
  return <span aria-hidden style={{fontSize: 14}}>🤗</span>;
}

function GitHubIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function PaperIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
    </svg>
  );
}

const LINK_CONFIG: Record<string, {label: string; Icon: () => React.ReactElement}> = {
  medium:       {label: 'Medium',      Icon: MediumIcon},
  huggingface:  {label: 'Hugging Face', Icon: HuggingFaceIcon},
  github:       {label: 'GitHub',      Icon: GitHubIcon},
  paper:        {label: 'Paper',       Icon: PaperIcon},
  docs:         {label: 'Docs',        Icon: PaperIcon},
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function TagBadge({label}: {label: string}): React.ReactElement {
  return <span className={styles.tag}>{label}</span>;
}

function LinkButton({link}: {link: Link}): React.ReactElement | null {
  const cfg = LINK_CONFIG[link.key.toLowerCase()];
  if (!cfg) return null;
  const {label, Icon} = cfg;
  return (
    <a
      href={link.url}
      className={styles.linkButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <Icon />
      <span>{label}</span>
    </a>
  );
}

function ItemCard({item}: {item: Item}): React.ReactElement {
  const emoji = resolveIcon(item.icon);
  const allTags = [
    ...(item.rai ? [item.rai] : []),
    ...(item.tags ?? []),
  ];

  return (
    <article className={`${styles.card} ${item.pinned ? styles.pinned : ''}`}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon} aria-hidden>{emoji}</span>
        <div className={styles.cardTitleBlock}>
          <h3 className={styles.cardTitle}>
            {item.title}
            {item.pinned && (
              <span className={styles.pinBadge} title="Featured">📌</span>
            )}
          </h3>
          {item.subtitle && (
            <p className={styles.cardSubtitle}>{item.subtitle}</p>
          )}
        </div>
      </div>

      {item.summary && <p className={styles.cardSummary}>{item.summary}</p>}

      {allTags.length > 0 && (
        <div className={styles.tagRow}>
          {allTags.map(tag => <TagBadge key={tag} label={tag} />)}
        </div>
      )}

      {(item.links ?? []).length > 0 && (
        <div className={styles.linkRow}>
          {(item.links ?? []).map(link => (
            <LinkButton key={`${link.key}-${link.url}`} link={link} />
          ))}
        </div>
      )}
    </article>
  );
}

// ─── Section groups ──────────────────────────────────────────────────────────

const SECTIONS: {key: string; label: string}[] = [
  {key: 'project',     label: 'Projects'},
  {key: 'engagement',  label: 'Engagements'},
  {key: 'thoughtpiece',label: 'Thoughtpieces'},
];

// ─── Main component ──────────────────────────────────────────────────────────

export default function OurWork(): React.ReactElement {
  const data = rawData as Item[];

  return (
    <div className={styles.root}>
      {SECTIONS.map(({key, label}) => {
        const items = data
          .filter(item => (item.type ?? '').toLowerCase() === key)
          .sort((a, b) => Number(b.pinned ?? false) - Number(a.pinned ?? false));

        if (items.length === 0) return null;

        return (
          <section key={key} className={styles.section}>
            <h2 className={styles.sectionTitle}>{label}</h2>
            <div className={styles.grid}>
              {items.map(item => (
                <ItemCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

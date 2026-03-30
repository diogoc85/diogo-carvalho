# Design System — Diogo Carvalho Portfolio

## Tipografia

| Token | Fonte | Uso |
|---|---|---|
| `--font-display` | Sora | Títulos, nome, headings principais |
| `--font-code` | Fira Code | Blocos de descrição em estilo código |

```css
--font-display: 'Sora', sans-serif;
--font-code: 'Fira Code', monospace;
```

---

## Paleta de Cores

### Cores de Superfície

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#1A1A1A` | Background global da página |
| `--color-surface` | `#262626` | Card principal, containers elevados |

### Tipografia

| Token | Valor | Uso |
|---|---|---|
| `--color-text-primary` | `#FFFFFF` | Textos principais, títulos, labels |
| `--color-text-secondary` | `rgba(255, 255, 255, 0.50)` | Textos de suporte, metadados, legendas |

### Acento

| Token | Valor | Uso |
|---|---|---|
| `--color-accent` | `#FFAF2A` | Título de cargo (UX/UI Designer), ícones sociais, destaques interativos, divisores |

---

## Tokens CSS Completos

```css
:root {
  /* ─── Superfícies ─── */
  --color-bg:              #1A1A1A;
  --color-surface:         #262626;

  /* ─── Tipografia ─── */
  --color-text-primary:    #FFFFFF;
  --color-text-secondary:  rgba(255, 255, 255, 0.50);

  /* ─── Acento ─── */
  --color-accent:          #00AD4A;

  /* ─── Tipografia ─── */
  --font-display:          'Sora', sans-serif;
  --font-code:             'Fira Code', monospace;

  /* ─── Forma ─── */
  --radius-card:           24px;
}
```

---

## Uso Semântico

### Superfícies

```css
body {
  background-color: var(--color-bg);
}

.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-card);
}
```

### Textos

```css
h1, h2, h3, p, span {
  font-family: var(--font-display);
  color: var(--color-text-primary);
}

.label,
.meta,
.caption {
  color: var(--color-text-secondary);
}

.role-title,
.highlight {
  color: var(--color-accent);
  font-family: var(--font-display);
}
```

### Código / Bio

```css
.code-block {
  font-family: var(--font-code);
  color: var(--color-text-primary);
}
```

### Acento Interativo

```css
.icon,
.nav-link:hover,
.divider {
  color: var(--color-accent);
}

.divider {
  border-color: var(--color-accent);
}
```

---

## Escala de Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-card` | `24px` | Cards, containers principais |

---

## Referência Visual Rápida

```
Background   #1A1A1A  ████████
Card         #262626  ████████
Text         #FFFFFF  ████████
Text 50%     #FFFFFF80████████
Accent       #FFAF2A  ████████
```

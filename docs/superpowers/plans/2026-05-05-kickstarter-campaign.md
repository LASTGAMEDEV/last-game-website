# Last Acre Kickstarter Campaign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a working Kickstarter email signup to the Last Game website and execute the pre-launch campaign plan to reach 300+ backers for the $6,000 funding goal.

**Architecture:** Phase 1 is code — upgrade the existing `DownloadCta` section into a proper email capture form backed by a Next.js API route that adds subscribers to a Resend audience list. Phase 2 is action items — writing the Kickstarter campaign page and executing the pre-launch marketing plan week by week.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Resend (email/contacts), Jest + React Testing Library (tests), Tailwind CSS v4

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `package.json` | Modify | Add `resend`, `jest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jest-environment-jsdom` |
| `jest.config.ts` | Create | Jest config using `next/jest` |
| `jest.setup.ts` | Create | Import `@testing-library/jest-dom` |
| `lib/subscribe.ts` | Create | Email validation + Resend contact creation logic |
| `app/api/subscribe/route.ts` | Create | Thin POST handler wrapping `lib/subscribe.ts` |
| `components/sections/DownloadCta.tsx` | Modify | Replace mailto button with email form |
| `__tests__/lib/subscribe.test.ts` | Create | Unit tests for subscribe logic |
| `__tests__/components/DownloadCta.test.tsx` | Create | Component tests for email form |
| `.env.local` | Create | `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` |
| `.env.example` | Create | Template showing required env vars (no real values) |

---

## Phase 1: Email Signup Feature

---

### Task 1: Install packages and configure Jest

**Files:**
- Modify: `package.json`
- Create: `jest.config.ts`
- Create: `jest.setup.ts`

- [ ] **Step 1: Install dependencies**

```bash
cd "C:/Users/SanGi/.antigravity/FArM TYCOON/LAST-ACRE-CORP"
npm install resend
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
```

Expected: packages added to `node_modules`, `package.json` updated.

- [ ] **Step 2: Add test script to package.json**

Open `package.json` and add `"test": "jest"` to the scripts block:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

- [ ] **Step 3: Create jest.config.ts**

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default createJestConfig(config)
```

- [ ] **Step 4: Create jest.setup.ts**

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Verify Jest runs**

```bash
npx jest --passWithNoTests
```

Expected: `Test Suites: 0 skipped, 0 total` — no errors.

- [ ] **Step 6: Commit**

```bash
git add package.json jest.config.ts jest.setup.ts package-lock.json
git commit -m "chore: add jest and testing library"
```

---

### Task 2: Set up Resend account and environment variables

**Files:**
- Create: `.env.local`
- Create: `.env.example`

- [ ] **Step 1: Create a Resend account**

Go to https://resend.com and sign up with your email. Free tier supports up to 3,000 emails/month and 1 audience.

- [ ] **Step 2: Get your API key**

In the Resend dashboard: API Keys → Create API Key → name it "Last Acre Kickstarter" → Full Access → copy the key.

- [ ] **Step 3: Create a Resend Audience**

In the Resend dashboard: Audiences → Create Audience → name it "Last Acre Kickstarter Signups" → copy the Audience ID (looks like `78261eea-...`).

- [ ] **Step 4: Create .env.local**

```
RESEND_API_KEY=re_your_actual_key_here
RESEND_AUDIENCE_ID=your_actual_audience_id_here
```

Replace the placeholder values with the real ones from the Resend dashboard.

- [ ] **Step 5: Create .env.example**

```
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
```

- [ ] **Step 6: Make sure .env.local is gitignored**

```bash
grep ".env.local" .gitignore
```

Expected: `.env.local` appears in `.gitignore`. If not, add it:

```bash
echo ".env.local" >> .gitignore
```

- [ ] **Step 7: Commit**

```bash
git add .env.example .gitignore
git commit -m "chore: add env example for Resend config"
```

---

### Task 3: Subscribe logic and tests

**Files:**
- Create: `lib/subscribe.ts`
- Create: `__tests__/lib/subscribe.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `__tests__/lib/subscribe.test.ts`:

```typescript
import { validateEmail, buildContactPayload } from '@/lib/subscribe'

describe('validateEmail', () => {
  it('returns true for a valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true)
  })

  it('returns false for an empty string', () => {
    expect(validateEmail('')).toBe(false)
  })

  it('returns false for a string without @', () => {
    expect(validateEmail('notanemail')).toBe(false)
  })

  it('returns false for a string without domain', () => {
    expect(validateEmail('user@')).toBe(false)
  })
})

describe('buildContactPayload', () => {
  it('returns the correct payload shape', () => {
    const payload = buildContactPayload('user@example.com', 'aud_123')
    expect(payload).toEqual({
      email: 'user@example.com',
      audienceId: 'aud_123',
      unsubscribed: false,
    })
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npx jest __tests__/lib/subscribe.test.ts --no-coverage
```

Expected: FAIL — `Cannot find module '@/lib/subscribe'`

- [ ] **Step 3: Create lib/subscribe.ts**

```typescript
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function buildContactPayload(email: string, audienceId: string) {
  return {
    email,
    audienceId,
    unsubscribed: false,
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx jest __tests__/lib/subscribe.test.ts --no-coverage
```

Expected: PASS — 5 tests passing.

- [ ] **Step 5: Commit**

```bash
git add lib/subscribe.ts __tests__/lib/subscribe.test.ts
git commit -m "feat: add email validation and contact payload helpers"
```

---

### Task 4: API route

**Files:**
- Create: `app/api/subscribe/route.ts`

- [ ] **Step 1: Create app/api/subscribe/route.ts**

```typescript
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEmail, buildContactPayload } from '@/lib/subscribe'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = typeof body.email === 'string' ? body.email.trim() : ''

  if (!validateEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID
  if (!audienceId) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const { error } = await resend.contacts.create(
    buildContactPayload(email, audienceId)
  )

  if (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
```

- [ ] **Step 2: Smoke test the route manually**

Start the dev server:

```bash
npm run dev
```

In a separate terminal:

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Expected: `{"success":true}` — and the contact appears in your Resend Audience dashboard.

Also test invalid input:

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"notanemail"}'
```

Expected: `{"error":"Invalid email"}` with status 400.

- [ ] **Step 3: Commit**

```bash
git add app/api/subscribe/route.ts
git commit -m "feat: add /api/subscribe route with Resend contact creation"
```

---

### Task 5: Upgrade DownloadCta component

**Files:**
- Modify: `components/sections/DownloadCta.tsx`
- Create: `__tests__/components/DownloadCta.test.tsx`

- [ ] **Step 1: Write the failing component tests**

Create `__tests__/components/DownloadCta.test.tsx`:

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DownloadCta from '@/components/sections/DownloadCta'

global.fetch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

it('renders the email input and submit button', () => {
  render(<DownloadCta />)
  expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /notify me/i })).toBeInTheDocument()
})

it('shows success message after successful submission', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  })

  render(<DownloadCta />)
  await userEvent.type(screen.getByPlaceholderText('your@email.com'), 'user@example.com')
  await userEvent.click(screen.getByRole('button', { name: /notify me/i }))

  await waitFor(() => {
    expect(screen.getByText(/you're in/i)).toBeInTheDocument()
  })
})

it('shows error message after failed submission', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    json: async () => ({ error: 'Failed' }),
  })

  render(<DownloadCta />)
  await userEvent.type(screen.getByPlaceholderText('your@email.com'), 'user@example.com')
  await userEvent.click(screen.getByRole('button', { name: /notify me/i }))

  await waitFor(() => {
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})

it('POSTs to /api/subscribe with the entered email', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  })

  render(<DownloadCta />)
  await userEvent.type(screen.getByPlaceholderText('your@email.com'), 'user@example.com')
  await userEvent.click(screen.getByRole('button', { name: /notify me/i }))

  expect(global.fetch).toHaveBeenCalledWith('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'user@example.com' }),
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npx jest __tests__/components/DownloadCta.test.tsx --no-coverage
```

Expected: FAIL — form elements not found (current component has no email input).

- [ ] **Step 3: Replace DownloadCta.tsx**

```typescript
'use client'

import { useState } from 'react'

export default function DownloadCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kickstarter" className="bg-accent py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-black text-bg leading-tight mb-4">
          Coming to Kickstarter.
        </h2>
        <p className="text-bg/60 text-lg md:text-xl mb-12">
          Last Acre is launching on Kickstarter. Leave your email and we'll notify you the moment it's live.
        </p>

        {status === 'success' ? (
          <p className="text-bg font-semibold text-lg">
            You're in. We'll notify you at launch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded bg-bg/10 border border-bg/20 text-bg placeholder:text-bg/40 focus:outline-none focus:border-bg/50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded bg-bg text-accent font-semibold hover:bg-bg/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Saving...' : 'Notify Me'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-bg/60 text-sm mt-4">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx jest __tests__/components/DownloadCta.test.tsx --no-coverage
```

Expected: PASS — 4 tests passing.

- [ ] **Step 5: Run all tests**

```bash
npx jest --no-coverage
```

Expected: all tests pass.

- [ ] **Step 6: Verify visually in the browser**

```bash
npm run dev
```

Open http://localhost:3000 and scroll to the "Coming to Kickstarter" section. Enter a test email and submit. Check the Resend Audience dashboard — the contact should appear within seconds.

- [ ] **Step 7: Commit**

```bash
git add components/sections/DownloadCta.tsx __tests__/components/DownloadCta.test.tsx
git commit -m "feat: upgrade DownloadCta to Kickstarter email signup with Resend"
```

---

## Phase 2: Campaign Execution

These are action items, not code. Work through them week by week.

---

### Task 6: Write Kickstarter campaign page

The campaign page lives on Kickstarter's platform. Use the spec at `docs/superpowers/specs/2026-05-05-kickstarter-campaign-design.md` as your source of truth for structure, copy tone, budget numbers, and reward tiers.

- [ ] **Step 1: Create a Kickstarter account** at kickstarter.com if you don't have one

- [ ] **Step 2: Start a new project** — Category: Video Games → Mobile Games

- [ ] **Step 3: Write the campaign title**

```
Last Acre — Help one developer finish the farming sim he built from scratch
```

- [ ] **Step 4: Write the campaign blurb (shown in search results, 135 chars max)**

```
A solo-built farming tycoon with a neighbours mechanic unlike any other sim. Fund the equipment to finish it.
```

- [ ] **Step 5: Upload campaign header image**

Use a key art screenshot or composite from the game. Must be 1024×576px minimum. Match the Last Game website aesthetic — dark, atmospheric.

- [ ] **Step 6: Write the campaign body** using the section structure from the spec:
  - The Hook (headline + game description, lead with neighbours mechanic)
  - What Your Pledge Funds (budget table)
  - The Roadmap (3 steps: base game → multiplayer → 3D)
  - Reward Tiers (already set up via the tiers below)
  - About the Developer (personal, direct, human)

- [ ] **Step 7: Set up reward tiers in Kickstarter**

| Tier | Price | Limit | Description |
|---|---|---|---|
| Seedling | $5 | None | Full digital copy of Last Acre + name in credits + social shoutout |
| Farmer | $10 | None | Full digital copy + early access at launch (before public release) + credits + monthly dev update |
| Neighbour | $20 | 100 | Full digital copy + early beta access + your name as an in-game neighbour character + credits + monthly dev update |

Note: cap Neighbour at 100 — scarcity increases conversion and keeps the in-game names manageable.

- [ ] **Step 8: Set funding goal to $6,000**

- [ ] **Step 9: Set campaign duration to 30 days**

- [ ] **Step 10: Fill in the Risks and Challenges section**

Be honest: "I'm a solo developer. The main risk is timeline — adding equipment could speed development significantly, but I can't guarantee exact delivery dates. I'll ship monthly dev updates to all backers so you always know where things stand."

- [ ] **Step 11: Preview the campaign** — read every section out loud. Fix anything that sounds like marketing copy rather than a person talking.

---

### Task 7: Week 1 — Foundation

- [ ] **Step 1: Email signup is live on Last Game website** (Phase 1 complete)

- [ ] **Step 2: Share the website with everyone in your personal network** — text, DM, WhatsApp. Don't ask for money yet. Just "hey, I've been building this game, check it out."

- [ ] **Step 3: Make a list of everyone you'll DM on launch day** — aim for 30+ names. Save it somewhere.

- [ ] **Step 4: Join and lurk in target communities** (don't post yet, get a feel for the tone):
  - r/indiegaming
  - r/AndroidGaming
  - r/iosgaming
  - r/farming (or farming sim subreddits)
  - 2–3 indie game Discord servers

- [ ] **Step 5: Take 3–5 high-quality gameplay screenshots** specifically for community posts and the Kickstarter page — show the neighbours mechanic, the economy screen, the animal breeding.

---

### Task 8: Week 2 — Community and Creator Outreach

- [ ] **Step 1: Post a devlog in r/indiegaming**

Title format: `I've been building a farming tycoon solo for [X months] — here's what the neighbours mechanic looks like`

Include 2–3 screenshots. End with: "Working on a Kickstarter to fund the equipment I need to finish it — happy to answer any questions."

- [ ] **Step 2: Post similarly in r/AndroidGaming and r/iosgaming**

Vary the title slightly. Don't cross-post the exact same text — each community has a different vibe.

- [ ] **Step 3: Post in any farming/sim Discord servers you joined in Week 1**

Same approach — share the game genuinely, mention the Kickstarter is coming.

- [ ] **Step 4: Identify 10 small gaming creators** (TikTok or YouTube, 1k–50k subs) who cover:
  - Indie mobile games
  - Farming sims (Stardew, Hay Day, etc.)
  - Indie game devlogs

- [ ] **Step 5: Send pitch emails/DMs to all 10**

Keep it short. Template:

```
Hey [Name],

I've been building a farming tycoon called Last Acre solo for [X months]. 
It has a neighbours mechanic where other players compete for your land — 
nothing else like it in the farming sim space.

I'm launching a Kickstarter in 2 weeks to fund the equipment to finish it. 
Happy to give you early access in exchange for coverage around launch day.

Screenshots: [link to website]

Let me know if you're interested.
[Your name]
```

- [ ] **Step 6: Finalize all Kickstarter campaign page copy** — have it ready to submit for review.

---

### Task 9: Week 3 — Final Prep

- [ ] **Step 1: Follow up with any creators who haven't responded** (one follow-up only)

- [ ] **Step 2: Continue community engagement** — reply to comments from Week 2 posts, post a follow-up if the first got traction

- [ ] **Step 3: Submit Kickstarter campaign for review** — Kickstarter reviews campaigns before approval, takes 1–3 days

- [ ] **Step 4: Prepare launch day post templates** for each community you're active in (write them now, post them on launch day)

- [ ] **Step 5: Confirm launch date with any creators who responded** — coordinate their coverage to go live on launch day or within 48 hours

---

### Task 10: Launch Day and Campaign

- [ ] **Step 1: Go live on Kickstarter**

- [ ] **Step 2: Send personal DMs to everyone on your list from Week 1** — individual messages, not a mass blast. "Hey, my Kickstarter just went live — [link]. Even a $5 pledge helps a lot."

- [ ] **Step 3: Post to all communities simultaneously**

Title format: `My solo farming tycoon is live on Kickstarter — Last Acre`

- [ ] **Step 4: Post the Kickstarter link on the Last Game website** — update the DownloadCta or add a banner linking to the live campaign

- [ ] **During campaign: post a backer update every 7 days** — progress, what you're working on, what the money will fund first

- [ ] **At 50% funded: post a milestone update** in all communities — momentum posts convert well

- [ ] **48 hours before close: post a final push** — "48 hours left" posts consistently spike backing

---

## Self-Review Notes

- All Kickstarter copy tone references the spec: human, direct, not marketing-speak
- Neighbour tier capped at 100 — not in the spec but added here to create scarcity and keep in-game names manageable; adjust if you disagree
- `jest.config.ts` uses `setupFilesAfterEnv` — correct key is `setupFilesAfterEnv` which is the Next.js jest alias for `setupFilesAfterEnv` — double-check against your Next.js version docs if setup errors occur
- No stretch goals, no physical tiers, no paid ads — all per spec

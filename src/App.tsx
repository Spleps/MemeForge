import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type LaunchPack = {
  name: string
  ticker: string
  oneLiner: string
  lore: string
  voice: string
  posts: string[]
  score: number
}

const starterPack: LaunchPack = {
  name: 'Moon Hamster',
  ticker: '$HAMMY',
  oneLiner: 'A tiny hamster with absolutely no exit strategy.',
  lore: 'Born in a forgotten group chat, trained by the charts, powered by snacks. Moon Hamster does not promise utility — only an unreasonable amount of community energy.',
  voice: 'Chaotic, self-aware, wholesome menace',
  posts: [
    'the hamster has left the wheel. it is now operating the wheel. $HAMMY',
    'no roadmap. just snacks, vibes, and a suspiciously bullish hamster.',
    'send this to the friend who needs one more meme before making a terrible decision.',
  ],
  score: 87,
}

function App() {
  const [idea, setIdea] = useState('')
  const [audience, setAudience] = useState('internet degenerates')
  const [pack, setPack] = useState<LaunchPack>(starterPack)
  const [copied, setCopied] = useState(false)

  function generatePack(event: FormEvent) {
    event.preventDefault()
    const seed = idea.trim() || 'a very online frog'
    const cleanSeed = seed.replace(/[^\p{L}\p{N}\s]/gu, '').trim()
    const words = cleanSeed.split(/\s+/).filter(Boolean)
    const name = words
      .slice(0, 3)
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ') || 'Mystery Frog'
    const ticker = `$${(words.join('').slice(0, 5) || 'FROG').toUpperCase()}`

    setPack({
      name,
      ticker,
      oneLiner: `The unofficial mascot of ${audience || 'the internet'}, powered by memes and questionable confidence.`,
      lore: `${name} appeared when the timeline needed a new obsession. It has no corporate origin story, no serious promises, and one mission: turn ${seed.toLowerCase()} into a community-sized inside joke.`,
      voice: 'Self-aware, fast, absurdly confident',
      posts: [
        `${name.toLowerCase()} is not early. you are simply emotionally prepared. ${ticker}`,
        `breaking: ${name.toLowerCase()} has entered the chat. please remain calm and post memes.`,
        `for the ${audience || 'timeline'}: one meme, one mission, zero boring announcements.`,
      ],
      score: Math.min(98, 72 + name.length + words.length * 3),
    })
    setCopied(false)
  }

  async function copyPack() {
    const text = [
      `${pack.name} (${pack.ticker})`,
      pack.oneLiner,
      '',
      pack.lore,
      '',
      ...pack.posts,
    ].join('\n')
    await navigator.clipboard?.writeText(text)
    setCopied(true)
  }

  return (
    <main className="shell">
      <nav className="nav">
        <a className="brand" href="/">
          <span className="brand-mark">✦</span> MemeForge
        </a>
        <span className="nav-note">launch ideas, not promises</span>
        <a className="github-link" href="https://github.com" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>

      <section className="hero">
        <div className="eyebrow">MEMECOIN LAUNCH STUDIO / 001</div>
        <h1>Turn one weird idea<br /><em>into a whole universe.</em></h1>
        <p className="hero-copy">
          Build a launch-ready identity, lore and content pack for your next meme.
          No wallet required. No financial promises. Just good internet energy.
        </p>
      </section>

      <section className="workspace">
        <form className="prompt-card" onSubmit={generatePack}>
          <div className="card-label"><span>01</span> Give us the spark</div>
          <label htmlFor="idea">What is the meme about?</label>
          <textarea
            id="idea"
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            placeholder="e.g. a sleep-deprived frog who trades snacks"
            rows={4}
          />
          <label htmlFor="audience">Who is it for?</label>
          <input
            id="audience"
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            placeholder="e.g. night owls, gamers, crypto twitter"
          />
          <button className="generate-button" type="submit">
            Forge my launch pack <span>→</span>
          </button>
          <p className="disclaimer">Demo mode · generated locally in your browser</p>
        </form>

        <article className="result-card">
          <div className="result-top">
            <div className="card-label"><span>02</span> Your launch pack</div>
            <button className="copy-button" type="button" onClick={copyPack}>
              {copied ? 'Copied ✓' : 'Copy pack'}
            </button>
          </div>
          <div className="coin-heading">
            <div className="coin-avatar">🐹</div>
            <div>
              <div className="coin-name">{pack.name}</div>
              <div className="coin-ticker">{pack.ticker} · community meme asset</div>
            </div>
            <div className="potential"><strong>{pack.score}</strong><span>meme<br />potential</span></div>
          </div>
          <div className="quote">“{pack.oneLiner}”</div>
          <div className="result-section">
            <div className="section-label">THE LORE</div>
            <p>{pack.lore}</p>
          </div>
          <div className="result-section">
            <div className="section-label">VOICE</div>
            <span className="tag">{pack.voice}</span>
          </div>
          <div className="result-section">
            <div className="section-label">FIRST POSTS</div>
            <div className="post-list">
              {pack.posts.map((post) => <p key={post}>{post}</p>)}
            </div>
          </div>
        </article>
      </section>

      <footer>
        <span>Built for builders of internet folklore.</span>
        <span>100% open-source · 0% financial advice</span>
      </footer>
    </main>
  )
}

export default App

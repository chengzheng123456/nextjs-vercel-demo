import { useState, useEffect } from 'react'

export default function Home() {
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    setTime(new Date().toLocaleString('zh-CN'))
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('API unavailable'))
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a2e 0%, #1a1a4e 50%, #0d0d3a 100%)',
      color: '#e0e0ff',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
        GitHub + Vercel MCP
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#8888cc', marginBottom: '2rem' }}>
        Build - Commit - Deploy
      </p>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '1rem',
        padding: '2rem',
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{message}</p>
        <p style={{ color: '#6666aa', fontSize: '0.875rem' }}>
          Server time: {time}
        </p>
      </div>

      <p style={{ marginTop: '3rem', color: '#555588', fontSize: '0.75rem' }}>
        Powered by Codex + Vercel
      </p>
    </div>
  )
}

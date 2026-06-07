export default function handler(req, res) {
  res.status(200).json({
    message: 'Hello from Vercel!',
    timestamp: new Date().toISOString(),
    env: process.env.VERCEL ? 'Vercel' : 'Local',
  })
}

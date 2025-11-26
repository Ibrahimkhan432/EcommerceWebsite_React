import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const fieldStyle = {
  display: 'block',
  width: '100%',
  padding: '10px 12px',
  marginTop: '6px',
  borderRadius: 6,
  border: '1px solid #d1d5db',
  fontSize: 14,
  outline: 'none',
 
}

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [showPass, setShowPass] = useState(false)
  const [success, setSuccess] = useState('')
  const [pwdStrength, setPwdStrength] = useState(0)

  useEffect(() => {
    const p = form.password || ''
    let score = 0
    if (p.length >= 8) score += 1
    if (/[A-Z]/.test(p)) score += 1
    if (/[0-9]/.test(p)) score += 1
    if (/[^A-Za-z0-9]/.test(p)) score += 1
    setPwdStrength(score)
  }, [form.password])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 8) e.password = 'Password must be at least 8 characters'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // Simulate signup: store user in localStorage (demo only)
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.push({ name: form.name.trim(), email: form.email.trim(), createdAt: Date.now() })
      localStorage.setItem('users', JSON.stringify(users))
      setSuccess('Account created successfully! Redirecting...')
      setTimeout(() => navigate('/'), 1200)
    } catch (err) {
      setErrors({ submit: 'Unable to create account. Try again.' })
    }
  }

  const strengthColor = () => {
    switch (pwdStrength) {
      case 0:
        return '#e5e7eb'
      case 1:
        return '#f97316'
      case 2:
        return '#f59e0b'
      case 3:
        return '#60a5fa'
      case 4:
        return '#10b981'
      default:
        return '#e5e7eb'
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, boxSizing: 'border-box', marginLeft: '450px' }}>
      <div style={{ maxWidth: 520,  width: '100%', background: '#fff', padding: 28, borderRadius: 12, boxShadow: '0 6px 18px rgba(15,23,42,0.08)' }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Create your account</h2>
        <p style={{ marginTop: 6, marginBottom: 18, color: '#6b7280' }}>Join us — fast signup with simple validation.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label style={{ fontSize: 13, color: '#374151' }}>Full name</label>
          <input name="name" value={form.name} onChange={handleChange} style={fieldStyle} placeholder="Jane Doe" />
          {errors.name && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.name}</div>}

          <label style={{ fontSize: 13, color: '#374151', marginTop: 12 }}>Email</label>
          <input name="email" value={form.email} onChange={handleChange} style={fieldStyle} placeholder="you@example.com" />
          {errors.email && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.email}</div>}

          <div style={{ marginTop: 12 }}>
            <label style={{ fontSize: 13, color: '#374151' }}>Password</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input name="password" type={showPass ? 'text' : 'password'} value={form.password} onChange={handleChange} style={{ ...fieldStyle, marginTop: 6, flex: 1 }} placeholder="At least 8 characters" />
              <button type="button" onClick={() => setShowPass((s) => !s)} style={{ padding: '10px 12px', marginTop: 6, borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>{showPass ? 'Hide' : 'Show'}</button>
            </div>
            {errors.password && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.password}</div>}

            <div style={{ marginTop: 8 }}>
              <div style={{ height: 8, background: '#f3f4f6', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ width: `${(pwdStrength / 4) * 100}%`, height: '100%', background: strengthColor(), transition: 'width .25s ease' }} />
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', marginTop: 6 }}>{['Very weak', 'Weak', 'Okay', 'Good', 'Strong'][pwdStrength]}</div>
            </div>
          </div>

          <label style={{ fontSize: 13, color: '#374151', marginTop: 12 }}>Confirm password</label>
          <input name="confirm" type={showPass ? 'text' : 'password'} value={form.confirm} onChange={handleChange} style={fieldStyle} placeholder="Re-type your password" />
          {errors.confirm && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.confirm}</div>}

          {errors.submit && <div style={{ color: '#dc2626', marginTop: 10 }}>{errors.submit}</div>}

          <button type="submit" style={{ marginTop: 16, width: '100%', padding: '12px 14px', background: '#111827', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 600, cursor: 'pointer' }}>Create account</button>

          {success && <div style={{ marginTop: 12, color: '#065f46', fontWeight: 600 }}>{success}</div>}
        </form>

        <div style={{ marginTop: 16, fontSize: 13, color: '#6b7280' }}>
          Already have an account? <a href="/" style={{ color: '#111827', fontWeight: 600 }}>Sign in</a>
        </div>
      </div>
    </div>
  )
}

export default Signup
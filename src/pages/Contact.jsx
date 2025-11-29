import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

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
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Please enter a message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // For demo: save to localStorage 'contacts'
    try {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
      contacts.push({ ...form, createdAt: Date.now() })
      localStorage.setItem('contacts', JSON.stringify(contacts))
      setSuccess('Message sent — we will reply within 24 hours.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setErrors({ submit: 'Unable to send message. Try again.' })
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-bold">Contact us</h1>
        <p className="mt-2 text-sm text-gray-600">Questions, feedback, or partnership inquiries — we&apos;d love to hear from you.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded-md p-2" />
            {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded-md p-2" />
            {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} className="mt-1 block w-full border border-gray-200 rounded-md p-2" />
            {errors.subject && <div className="text-sm text-red-600 mt-1">{errors.subject}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="mt-1 block w-full border border-gray-200 rounded-md p-2" />
            {errors.message && <div className="text-sm text-red-600 mt-1">{errors.message}</div>}
          </div>

          {errors.submit && <div className="text-sm text-red-600">{errors.submit}</div>}

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send message</button>
            <button type="button" onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setErrors({}); setSuccess('') }} className="px-4 py-2 border rounded-md">Reset</button>
            {success && <div className="text-sm text-green-600 ml-auto">{success}</div>}
          </div>
        </form>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-medium">Email</h3>
            <a href="mailto:support@example.com" className="text-indigo-600">support@example.com</a>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-medium">Phone</h3>
            <div className="text-gray-700">+1 (555) 123-4567</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact

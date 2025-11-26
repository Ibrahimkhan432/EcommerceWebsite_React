import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
  { to: '/orders', label: 'Orders' },
  { to: '/signup', label: 'Signup' },
]

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`bg-white border-r border-gray-200 h-screen transition-all sticky top-10 z-0 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src="https://simicart.com/wp-content/uploads/eCommerce-logo.jpg" alt="logo" className={`rounded-md ${collapsed ? 'w-8 h-8' : 'w-10 h-10'}`} />
            {!collapsed && <h1 className="text-lg font-semibold text-gray-800">Ecommerce</h1>}
          </div>

          <button
            aria-label="Toggle sidebar"
            onClick={() => setCollapsed((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6L16 12L8 18V6Z" fill="#374151" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-auto px-2 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={String(item.to)}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  <span className="shrink-0 text-gray-400">{item.label.charAt(0)}</span>
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 px-1">
            {!collapsed && <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-2">Categories</h3>}
            <div className="flex flex-col gap-2">
              {['Clothing', 'Electronics', 'Home', 'Sports'].map((c) => (
                <a key={String(c)} href="#" className={`text-sm px-3 py-2 rounded-md ${collapsed ? 'text-gray-500 text-center' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {!collapsed ? c : c.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="px-4 py-3 border-t border-gray-100">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <img src="https://i.pravatar.cc/40" alt="user" className="rounded-full w-8 h-8" />
            {!collapsed && (
              <div>
                <div className="text-sm font-medium text-gray-800">Jane Doe</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            )}
            <button className={`ml-auto ${collapsed ? '' : ''} text-sm text-indigo-600`}>Logout</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
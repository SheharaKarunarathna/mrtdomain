'use client'

import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: (user: User) => void
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [isSignUp, setIsSignUp] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')
  // const [signUpSuccess, setSignUpSuccess] = useState(false)
  // const [signUpEmail, setSignUpEmail] = useState('')

  // // Sign-up specific fields
  // const [fullName, setFullName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [org, setOrg] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // Check if user is already logged in when the page loads
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setUser(session.user)
      }
    }
    getUser()

    // Listen for changes (like logging in or out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        onLoginSuccess(session.user)
        onClose()
        // Remove the trailing # from the URL after OAuth redirect
        if (window.location.hash === '' || window.location.hash === '#') {
          window.history.replaceState(null, '', window.location.pathname + window.location.search)
        }
      }
    })

    return () => subscription.unsubscribe()
  }, [onLoginSuccess, onClose])

  // Reset loading state when page regains visibility (e.g. user navigates back from OAuth)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setLoadingProvider(null)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Email/Password Login or Sign Up (commented out due to Supabase verification issues)
  /*
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setError('Passwords do not match!')
          setLoading(false)
          return
        }
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              phone: phone,
              organization: org,
            }
          }
        })
        if (error) throw error
        setSignUpEmail(email)
        // Clear all fields
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setFullName('')
        setPhone('')
        setOrg('')
        setSignUpSuccess(true)
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  */

  // 1. The Login Function
  const handleLogin = async (provider: 'google' | 'facebook' | 'github') => {
    setLoadingProvider(provider)
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        // Redirect back to this page
        redirectTo: `${window.location.origin}/`
      }
    })
  }

  // 2. The Logout Function
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-600 mb-6">Sign in to manage your .mrt.lk domains</p>

          <div className="flex flex-col gap-3">
            {/* Google Sign In */}
            <button
              onClick={() => handleLogin('google')}
              disabled={loadingProvider !== null}
              className="w-full bg-red-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 active:shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingProvider === 'google' ? (
                <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              )}
              {loadingProvider === 'google' ? 'Redirecting...' : 'Sign in with Google'}
            </button>

            {/* GitHub Sign In */}
            <button
              onClick={() => handleLogin('github')}
              disabled={loadingProvider !== null}
              className="w-full bg-[#24292F] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 active:shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingProvider === 'github' ? (
                <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
              {loadingProvider === 'github' ? 'Redirecting...' : 'Sign in with GitHub'}
            </button>
          </div>

          {/* Email/password and sign-up commented out due to Supabase verification issues */}
        </div>
      </div>
    </div>
  )
}
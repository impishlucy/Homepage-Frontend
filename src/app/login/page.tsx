"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [authUrl, setAuthUrl] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const hostname = typeof window !== "undefined" ? window.location.hostname : ""
  const apiBaseUrl = `https://api.${hostname}`

  async function verifyToken(token: string): Promise<boolean> {
    try {
      const res = await fetch(`${apiBaseUrl}/admin/test`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
      return res.status === 200
    } catch {
      return false
    }
  }

  async function fetchAuthUrl() {
    try {
      const res = await fetch(`${apiBaseUrl}/data/login`)
      if (!res.ok) throw new Error("Failed to fetch auth URL")
      const data = await res.json()
      setAuthUrl(data.url)
    } catch {
      setError("Failed to load login page. Is the API online?")
    } finally {
      setIsLoading(false)
    }
  }

  async function exchangeCodeForToken(authCode: string) {
    try {
      const res = await fetch(`${apiBaseUrl}/admin/login?code=${authCode}`)

      if (!res.ok) {
        if (res.status === 403) {
          setError("Access Denied: You are not the authorized admin.")
        } else {
          setError("Login failed")
        }
        window.history.replaceState({}, document.title, "/login")
        setIsLoading(false)
        return
      }

      const data = await res.json()
      localStorage.setItem("admin_jwt", data.accessToken)
      window.history.replaceState({}, document.title, "/login")
      router.replace("/dashboard")
    } catch {
      setError("An error occurred during Discord authentication.")
      window.history.replaceState({}, document.title, "/login")
      setIsLoading(false)
    }
  }

  async function handleAuthFlow() {
    const existingToken = localStorage.getItem("admin_jwt")
    if (existingToken) {
      const isValid = await verifyToken(existingToken)
      if (isValid) {
        router.replace("/dashboard")
        return
      }
      localStorage.removeItem("admin_jwt")
    }

    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")

    if (code) {
      await exchangeCodeForToken(code)
      return
    }

    await fetchAuthUrl()
  }

  useEffect(() => {
    void Promise.resolve()
      .then(() => handleAuthFlow())
      .catch(() => {})
  }, [])

  if (isLoading) {
    return <></>
  }

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-card/50 p-8 text-center backdrop-blur">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Admin Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in with Discord to access the dashboard.
          </p>
        </div>

        {error && (
          <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {!error && authUrl && (
          <a
            href={authUrl}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
              aria-hidden="true"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Login with Discord
          </a>
        )}
      </div>
    </div>
  )
}

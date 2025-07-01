"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError("")
  }

  const validateForm = () => {
    if (!formData.email) {
      setError("Email harus diisi")
      return false
    }
    if (!formData.email.includes("@")) {
      setError("Format email tidak valid")
      return false
    }
    if (!formData.password) {
      setError("Password harus diisi")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    setError("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // Simulasikan sukses login
      router.push("/dashboard")
    } catch {
      setError("Login gagal. Coba lagi nanti.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Login to Sea Catering</h1>
          <p className="text-gray-600">Selamat datang kembali!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-6 space-y-6">
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>}

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                className="pl-10 w-full px-4 py-2 border rounded"
                placeholder="nama@example.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="pl-10 pr-10 w-full px-4 py-2 border rounded"
                placeholder="Masukkan password"
                value={formData.password}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Masuk..." : "Masuk"}
          </button>

          <p className="text-sm text-center text-gray-500">
            Belum punya akun? <Link href="/register" className="underline">Daftar</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

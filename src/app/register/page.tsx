"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, Brain } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError("")
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Nama lengkap harus diisi")
      return false
    }
    if (formData.fullName.trim().length < 2) {
      setError("Nama lengkap minimal 2 karakter")
      return false
    }
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
    if (formData.password.length < 8) {
      setError("Password minimal 8 karakter")
      return false
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      setError("Password harus mengandung huruf besar, huruf kecil, dan angka")
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Konfirmasi password tidak cocok")
      return false
    }
    if (!acceptTerms) {
      setError("Anda harus menyetujui syarat dan ketentuan")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSuccess("Akun berhasil dibuat! Silakan cek email Anda untuk verifikasi.")
      setTimeout(() => router.push("/login"), 2000)
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z\d]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Sea Catering</h1>
          <p className="text-gray-600">Buat akun baru untuk memulai perjalanan Anda</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-6 space-y-6">
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 px-4 py-2 rounded">{success}</div>}

          <div>
            <label htmlFor="fullName" className="block font-medium mb-1">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input id="fullName" name="fullName" type="text" className="pl-10 w-full px-4 py-2 border rounded" placeholder="Masukkan nama lengkap" value={formData.fullName} onChange={handleInputChange} disabled={isLoading} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input id="email" name="email" type="email" className="pl-10 w-full px-4 py-2 border rounded" placeholder="nama@example.com" value={formData.email} onChange={handleInputChange} disabled={isLoading} />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input id="password" name="password" type={showPassword ? "text" : "password"} className="pl-10 pr-10 w-full px-4 py-2 border rounded" placeholder="Minimal 8 karakter" value={formData.password} onChange={handleInputChange} disabled={isLoading} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 text-gray-500">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.password && (
              <div className="w-full h-2 mt-2 rounded-full bg-gray-200 overflow-hidden">
                <div className={`h-full transition-all duration-300 ${strengthColors[passwordStrength - 1]}`} style={{ width: `${(passwordStrength / 5) * 100}%` }}></div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-medium mb-1">Konfirmasi Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} className="pl-10 pr-10 w-full px-4 py-2 border rounded" placeholder="Ulangi password" value={formData.confirmPassword} onChange={handleInputChange} disabled={isLoading} />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-2 text-gray-500">
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} disabled={isLoading} />
            <label htmlFor="terms" className="text-sm">Saya menyetujui <span className="underline">syarat & ketentuan</span></label>
          </div>

          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" disabled={isLoading}>
            {isLoading ? "Mendaftar..." : "Daftar Akun"}
          </button>

          <p className="text-sm text-center text-gray-500">
            Sudah punya akun? <Link href="/login" className="underline">Masuk</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
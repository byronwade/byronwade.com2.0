"use client"
import React, { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("bg-[#111]")

  const toggleMode = () => {
    setMode(mode === "bg-[#111]" ? "bg-[#f1f1f1]" : "bg-[#111]")
  }

  return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>
}

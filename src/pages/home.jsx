import { useState } from "react"
import { Navbar } from "../components/navbar"
import { HomeContent } from "../components/homeContent"

export function Home() {
    return (
        <>
        <Navbar />
        <HomeContent />
        </>
    )
}
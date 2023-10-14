"use client"
import { useState } from "react";
import { CandidatesByPositionProps } from "@/app/props/candidates-by-position";

export default function Candidates() {
    const [candidate, setCandidate] = useState<CandidatesByPositionProps | {}>({});

    return (
        <>
            <div>Candidates</div>
        </>
    )
}
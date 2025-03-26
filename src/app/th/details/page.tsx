"use client"
import { Suspense } from "react";
import ThDetails from "./detail";
export default function DetailPage(){
    return(
    <Suspense fallback={<div>Loading...</div>}>
        <ThDetails />
    </Suspense>
    );
}
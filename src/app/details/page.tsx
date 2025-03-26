"use client"
import { Suspense } from "react";
import Details from "./detail";
export default function DetailPage(){
    return(
    <Suspense fallback={<div>Loading...</div>}>
        <Details />
    </Suspense>
    );
}
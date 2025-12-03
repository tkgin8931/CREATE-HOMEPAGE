"use client";

import React from "react";
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MaintenanceView() {
    const { t } = useLanguage();

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {t.techPage.maintenance.title}
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mb-12 leading-relaxed">
                {t.techPage.maintenance.description}
            </p>

            <Link href="/">
                <Button className="gap-2 bg-white text-black hover:bg-gray-200 border-none">
                    <ArrowLeft className="w-4 h-4" />
                    {t.techPage.maintenance.backToTop}
                </Button>
            </Link>
        </div>
    );
}

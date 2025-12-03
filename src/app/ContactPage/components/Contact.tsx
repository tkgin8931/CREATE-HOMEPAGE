"use client";

import React from "react";
import { Send, ExternalLink } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8 text-white">
        <h2 className="text-xl font-bold tracking-tight">{t.contactPage.form.title}</h2>
      </div>

      <div className="bg-zinc-950 border border-white/10 p-8 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-8 py-12">
          <p className="text-white text-lg text-center">
            {t.contactPage.form.googleFormDescription}
          </p>
          <a
            href="https://docs.google.com/forms/" // TODO: Replace with actual Google Form URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors text-sm tracking-widest flex items-center gap-2"
          >
            {t.contactPage.form.googleFormButton}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
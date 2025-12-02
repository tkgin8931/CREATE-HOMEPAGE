"use client";

import React from "react";
import { Send } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8 text-white">
        <h2 className="text-xl font-bold tracking-tight">{t.contactPage.form.title}</h2>
      </div>

      <div className="bg-zinc-950 border border-white/10 p-8 rounded-lg">
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">{t.contactPage.form.name}</label>
              <input
                type="text"
                className="w-full bg-black border-b border-white/20 focus:border-white transition-colors py-2 text-white outline-none rounded-none placeholder:text-gray-700"
                placeholder={t.contactPage.form.namePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">{t.contactPage.form.email}</label>
              <input
                type="email"
                className="w-full bg-black border-b border-white/20 focus:border-white transition-colors py-2 text-white outline-none rounded-none placeholder:text-gray-700"
                placeholder={t.contactPage.form.emailPlaceholder}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">{t.contactPage.form.subject}</label>
            <input
              type="text"
              className="w-full bg-black border-b border-white/20 focus:border-white transition-colors py-2 text-white outline-none rounded-none placeholder:text-gray-700"
              placeholder={t.contactPage.form.subjectPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">{t.contactPage.form.message}</label>
            <textarea
              rows={6}
              className="w-full bg-black border-b border-white/20 focus:border-white transition-colors py-2 text-white outline-none rounded-none resize-none placeholder:text-gray-700"
              placeholder={t.contactPage.form.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors text-sm tracking-widest"
          >
            {t.contactPage.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
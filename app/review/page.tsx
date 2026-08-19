"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ShieldCheck, ExternalLink, HeartHandshake, PhoneCall, CheckCircle, ChevronLeft } from "lucide-react";

export default function ReviewPage() {
  const [rating, setRating] = useState<number | null>(5);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleRatingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="bg-[#121215] border-2 border-yellow-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center mx-auto">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Thank You For Choosing Apex Electrical UK
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              As a local family business, your feedback helps other Guildford & Surrey homeowners find certified, safe electrical services.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleRatingSubmit} className="space-y-6 text-left">
              <div>
                <label className="block text-xs font-black text-zinc-300 mb-3 uppercase tracking-wider text-center">
                  How would you rate your electrical service today?
                </label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1.5 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating && star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-zinc-700 fill-zinc-800"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-zinc-300 mb-1.5 uppercase">
                  Your Comments (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the job (e.g. prompt arrival, clean work area, clear advice)..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>

              {rating && rating >= 4 ? (
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-lg shadow-yellow-400/20 transition-all cursor-pointer"
                  >
                    <span>Post Direct To Google Reviews</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-zinc-400 text-center">
                    Takes only 15 seconds. Redirects directly to our Google Business profile.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-black py-3.5 px-6 rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    Submit Feedback to Senior Engineer
                  </button>
                </div>
              )}
            </form>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white">Feedback Received!</h3>
                  <p className="text-[11px] text-zinc-300 mt-0.5">
                    Thank you for helping us maintain 5-star electrical standards across Surrey.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJN1t_t_n_dkgR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black font-black py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-yellow-400/20"
                >
                  <span>Open Google Review Window</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/"
                  className="flex items-center justify-center gap-1 text-xs text-zinc-400 hover:text-white pt-2"
                >
                  <ChevronLeft className="w-4 h-4" /> Return to Homepage
                </Link>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" /> NICEIC Verified #609412
            </span>
            <a href="tel:+441234567890" className="hover:text-yellow-400 transition-colors">
              Dispatch: 01234 567890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

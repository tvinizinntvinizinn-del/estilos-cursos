"use client";

import { useEffect, useLayoutEffect } from "react";

/** useLayoutEffect no navegador, useEffect no servidor (evita aviso no SSR). */
export const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

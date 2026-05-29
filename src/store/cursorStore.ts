'use client';

import { create } from 'zustand';

interface CursorState {
  hover: boolean;
  click: boolean;
  setHover: (hover: boolean) => void;
  setClick: (click: boolean) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  hover: false,
  click: false,
  setHover: (hover) => set({ hover }),
  setClick: (click) => set({ click })
}));


'use client';

import { useEffect, useState } from 'react';

export default function useScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

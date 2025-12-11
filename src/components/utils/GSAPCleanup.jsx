'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GSAPCleanup Component
 * Ensures all GSAP animations and ScrollTriggers are killed before navigation
 * to prevent "removeChild" errors during route transitions
 */
const GSAPCleanup = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Aggressive cleanup function
    const cleanup = () => {
      try {
        // Kill all ScrollTrigger instances FIRST
        const triggers = ScrollTrigger.getAll();
        triggers.forEach(trigger => {
          try {
            trigger.kill(true);
          } catch (e) {
            console.warn('Error killing ScrollTrigger:', e);
          }
        });

        // Disable normalize scroll
        try {
          ScrollTrigger.normalizeScroll(false);
        } catch (e) {
          console.warn('Error disabling normalizeScroll:', e);
        }

        // Kill all GSAP tweens
        try {
          gsap.killTweensOf('*');
        } catch (e) {
          console.warn('Error killing tweens:', e);
        }

        // Clear all GSAP timelines
        try {
          gsap.globalTimeline.clear();
        } catch (e) {
          console.warn('Error clearing global timeline:', e);
        }

        // Clear any pinned elements and pin spacers
        try {
          const pinnedElements = document.querySelectorAll('.pin-spacer, [data-pin-spacer]');
          pinnedElements.forEach(el => {
            if (el && el.parentNode) {
              gsap.set(el, { clearProps: 'all' });
            }
          });
        } catch (e) {
          console.warn('Error clearing pinned elements:', e);
        }
      } catch (e) {
        console.warn('Error in cleanup:', e);
      }
    };

    // Intercept link clicks BEFORE navigation
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href) {
        const targetUrl = new URL(target.href);
        const currentUrl = new URL(window.location.href);

        // Check if it's an internal navigation to a different page
        const isInternal = targetUrl.origin === currentUrl.origin;
        const isDifferentPage = targetUrl.pathname !== currentUrl.pathname;

        if (isInternal && isDifferentPage) {
          // Cleanup IMMEDIATELY on click, before navigation
          cleanup();
        }
      }
    };

    // Use capture phase to intercept clicks early
    document.addEventListener('click', handleLinkClick, { capture: true });

    // Also cleanup when pathname changes
    cleanup();

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true });
    };
  }, [pathname]);

  return null;
};

export default GSAPCleanup;

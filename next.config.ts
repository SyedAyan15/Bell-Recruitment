import type { NextConfig } from "next";

// Current external jobs board, used until the planned /jobs/ pages are written.
const JOBS_BOARD = "https://www.careers-page.com/bellrecruitment";

const nextConfig: NextConfig = {
  // Keep the original site's trailing-slash URLs (/about-us/, /services/ ...).
  trailingSlash: true,
  async redirects() {
    return [
      // The Services page moved from /employer/ to /services/ (content document URL).
      { source: "/employer/", destination: "/services/", permanent: true },
      // Planned pages from the content document that are not written yet. Temporary
      // redirects, so they can be replaced by real pages without browsers caching them.
      // Remove each entry when its page is added under app/jobs/.
      { source: "/jobs/", destination: JOBS_BOARD, permanent: false },
      { source: "/jobs/sales-roles-northern-ireland/", destination: JOBS_BOARD, permanent: false },
    ];
  },
};

export default nextConfig;

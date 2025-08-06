/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 배포를 위한 설정 (필요시)
  // output: 'export',
  // basePath: '/connie',
  
  images: {
    domains: ['your-supabase-project.supabase.co'],
  },
}

module.exports = nextConfig
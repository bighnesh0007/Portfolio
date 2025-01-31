import Image from 'next/image'

export default function CustomIllustration() {
  return (
    <div className="w-64 h-64 mx-auto mb-8 relative group">
      {/* Outer glow container - removed animate-spin-slow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Inner border - removed animate-spin-slow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
        {/* Image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
          <Image 
            src="/pi2.jpg"
            alt="Custom illustration"
            fill
            className="object-cover rounded-full hover:scale-110 transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
}
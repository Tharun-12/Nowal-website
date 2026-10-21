import React, { useState } from 'react';
import { Leaf, Flower2 } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#183D32] to-[#0F2821] flex flex-col items-center justify-center text-[#E8E0D2] p-6 text-center select-none ${className}`}
        aria-label={alt || 'Sanctuary image'}
      >
        <Flower2 className="w-8 h-8 text-[#8A9B7A] mb-2 animate-pulse" />
        <span className="font-serif-display text-sm tracking-wide text-[#F8F6EF]">
          {fallbackTitle || 'Vana Veda Nature Retreat'}
        </span>
        <span className="text-xs text-[#8A9B7A] mt-1 tracking-wider uppercase">Sacred Forest Sanctuary</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E8E0D2]/40 ${className}`}>
      <img
        src={src}
        alt={alt || 'Vana Veda Sanctuary'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8E0D2]/50 animate-pulse flex items-center justify-center">
          <Leaf className="w-6 h-6 text-[#8A9B7A]/60" />
        </div>
      )}
    </div>
  );
};

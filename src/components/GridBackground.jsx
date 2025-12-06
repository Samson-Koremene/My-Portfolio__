import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)'
        }}
      />
      
      {/* Animated grid overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite',
          maskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, black 20%, transparent 80%)'
        }}
      />

      {/* Perspective grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 49px,
                rgba(59, 130, 246, 0.3) 49px,
                rgba(59, 130, 246, 0.3) 50px
              )
            `,
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom',
            height: '200%',
            top: '-50%'
          }}
        />
      </div>

      {/* Glowing grid intersections */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default GridBackground;

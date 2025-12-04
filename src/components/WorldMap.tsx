import { useState } from 'react';

interface WorldMapProps {
  selectedRegion: string | null;
  onRegionSelect: (region: string | null) => void;
}

export default function WorldMap({ selectedRegion, onRegionSelect }: WorldMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    {
      name: 'North America',
      path: 'M150,80 L180,70 L220,75 L250,85 L270,100 L280,120 L270,140 L250,150 L230,155 L200,160 L170,158 L150,150 L140,130 L135,110 L140,90 Z',
      center: { x: 200, y: 120 }
    },
    {
      name: 'South America',
      path: 'M230,180 L245,185 L255,200 L260,220 L258,250 L250,280 L235,300 L220,310 L205,312 L195,308 L190,290 L188,270 L192,250 L200,230 L210,210 L220,195 L228,185 Z',
      center: { x: 225, y: 250 }
    },
    {
      name: 'Europe',
      path: 'M450,90 L480,85 L510,90 L530,100 L540,115 L535,130 L520,140 L500,145 L480,143 L465,138 L455,125 L448,110 L450,95 Z',
      center: { x: 490, y: 115 }
    },
    {
      name: 'Africa',
      path: 'M460,150 L485,155 L510,165 L525,180 L535,200 L538,225 L535,250 L525,275 L510,295 L490,310 L470,318 L450,315 L435,305 L425,285 L420,260 L422,235 L430,210 L440,185 L450,165 Z',
      center: { x: 480, y: 240 }
    },
    {
      name: 'Asia',
      path: 'M550,85 L600,80 L650,85 L700,95 L740,110 L770,130 L785,150 L790,170 L785,190 L770,205 L745,215 L710,220 L675,218 L640,210 L610,195 L585,175 L565,155 L550,130 L545,105 Z',
      center: { x: 670, y: 150 }
    },
    {
      name: 'Oceania',
      path: 'M720,270 L750,275 L775,285 L790,300 L795,318 L788,335 L770,345 L745,348 L720,345 L700,335 L690,320 L688,300 L695,285 Z',
      center: { x: 740, y: 310 }
    }
  ];

  const getRegionColor = (regionName: string) => {
    if (selectedRegion === regionName) {
      return '#3b82f6'; // blue-600
    }
    if (hoveredRegion === regionName) {
      return '#60a5fa'; // blue-400
    }
    return '#94a3b8'; // slate-400
  };

  const handleRegionClick = (regionName: string) => {
    if (selectedRegion === regionName) {
      onRegionSelect(null);
    } else {
      onRegionSelect(regionName);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-gray-200">
      <h3 className="text-center mb-6 text-gray-700">Click on a Region to Filter Guides</h3>
      
      <div className="relative w-full" style={{ paddingBottom: '50%' }}>
        <svg
          viewBox="0 0 900 400"
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        >
          {/* Ocean background */}
          <rect x="0" y="0" width="900" height="400" fill="#e0f2fe" opacity="0.5" />
          
          {/* Grid lines for visual appeal */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="900" height="400" fill="url(#grid)" />
          
          {/* Regions */}
          {regions.map((region) => (
            <g key={region.name}>
              <path
                d={region.path}
                fill={getRegionColor(region.name)}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:opacity-90"
                style={{
                  transform: hoveredRegion === region.name ? 'scale(1.02)' : 'scale(1)',
                  transformOrigin: `${region.center.x}px ${region.center.y}px`,
                }}
                onClick={() => handleRegionClick(region.name)}
                onMouseEnter={() => setHoveredRegion(region.name)}
                onMouseLeave={() => setHoveredRegion(null)}
              />
              
              {/* Region labels */}
              <text
                x={region.center.x}
                y={region.center.y}
                textAnchor="middle"
                fill="white"
                className="pointer-events-none select-none font-semibold"
                fontSize="14"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                {region.name}
              </text>
              
              {/* Pulse animation for selected region */}
              {selectedRegion === region.name && (
                <circle
                  cx={region.center.x}
                  cy={region.center.y}
                  r="8"
                  fill="#3b82f6"
                  className="animate-ping"
                  opacity="0.6"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-slate-400 rounded"></div>
          <span className="text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400 rounded"></div>
          <span className="text-gray-600">Hover</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded"></div>
          <span className="text-gray-600">Selected</span>
        </div>
      </div>

      {/* Selected region display */}
      {selectedRegion && (
        <div className="mt-4 text-center animate-fade-in">
          <p className="text-gray-700">
            Showing guides in <span className="font-bold text-blue-600">{selectedRegion}</span>
          </p>
          <button
            onClick={() => onRegionSelect(null)}
            className="text-sm text-gray-500 hover:text-gray-700 underline mt-1"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}

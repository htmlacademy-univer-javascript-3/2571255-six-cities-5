import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {defaultCustomIcon, currentCustomIcon} from '../../constants/customIcons.ts';
import {useMap} from './use-map.ts';
import {useRef, useEffect} from 'react';
import {Nullable} from 'vitest';
import {Location} from '../../models/location.ts';


type MapProps = {
  city: Location;
  selectedPoint: Nullable<Location>;
  points: Location[];
  className?: string;
}

export function Map({city, selectedPoint, points, className}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((loc) => {
        leaflet.marker({
          lat: loc.point.latitude,
          lng: loc.point.longitude
        },
        {
          icon: loc.name === selectedPoint?.name
            ? currentCustomIcon
            : defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{height: '100%'}} ref={mapRef} className={className}></div>;
}

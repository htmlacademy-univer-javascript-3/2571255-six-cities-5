import React, {useEffect, useRef, useState} from 'react';
import leaflet from 'leaflet';
import {Location} from '../../models/location.ts';

export function useMap(mapRef: React.RefObject<null>, location: Location) {
  const [map, setMap] = useState<leaflet.Map>();
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.point.latitude,
          lng: location.point.longitude,
        },
        zoom: location.point.zoom,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
        .addTo(instance);
      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Location {
  place_id: string;
  name: string;
  address: string;
  website?: string;
  phone?: string;
  hours?: google.maps.places.PlaceOpeningHours;
  photos?: google.maps.places.PlacePhoto[];
  distance?: google.maps.Distance;
  duration?: google.maps.Duration;
  index: number;
}

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [service, setService] = useState<google.maps.places.PlacesService | null>(null);
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [currentTravelMode, setCurrentTravelMode] = useState<google.maps.TravelMode>(google.maps.TravelMode.DRIVING);
  const [locationData, setLocationData] = useState<Location[]>([]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const defaultLocation = new google.maps.LatLng(40.7128, -74.0060); // New York City
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: defaultLocation,
          zoom: 13,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
          zoomControl: true,
          styles: [
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                { "color": "#e9e9e9" },
                { "lightness": 17 }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                { "color": "#f5f5f5" },
                { "lightness": 20 }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#ffffff" },
                { "lightness": 17 }
              ]
            }
          ]
        });

        setMap(mapInstance);
        setService(new google.maps.places.PlacesService(mapInstance));
        setDirectionsService(new google.maps.DirectionsService());
        const rendererInstance = new google.maps.DirectionsRenderer({
          map: mapInstance,
          panel: document.getElementById("directions-panel") || undefined,
          suppressMarkers: true
        });
        setDirectionsRenderer(rendererInstance);
        setInfoWindow(new google.maps.InfoWindow());

        // Initialize search box
        const searchInput = document.getElementById("location-search") as HTMLInputElement;
        const searchBox = new google.maps.places.Autocomplete(searchInput, {
          types: ['address']
        });

        searchBox.addListener("place_changed", () => {
          const place = searchBox.getPlace();
          if (!place.geometry || !place.geometry.location) {
            window.alert("No details available for: " + place.name);
            return;
          }

          setUserLocation(place.geometry.location);
          mapInstance.setCenter(place.geometry.location);
          placeUserMarker(place.geometry.location);
          searchNearbyPlaces(place.geometry.location);
        });

        // Set up event listeners
        document.getElementById("drive-mode")?.addEventListener("click", () => setTravelMode(google.maps.TravelMode.DRIVING));
        document.getElementById("walk-mode")?.addEventListener("click", () => setTravelMode(google.maps.TravelMode.WALKING));
        document.getElementById("transit-mode")?.addEventListener("click", () => setTravelMode(google.maps.TravelMode.TRANSIT));
        document.getElementById("current-location")?.addEventListener("click", getCurrentLocation);
        document.getElementById("search-button")?.addEventListener("click", () => {
          const searchInput = document.getElementById("location-search") as HTMLInputElement;
          if (searchInput.value) {
            geocodeAddress(searchInput.value);
          }
        });

        // Get current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const location = new google.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
              );
              setUserLocation(location);
              mapInstance.setCenter(location);
              placeUserMarker(location);
              searchNearbyPlaces(location);
            },
            () => {
              handleLocationError(true, mapInstance.getCenter()!);
            }
          );
        } else {
          handleLocationError(false, mapInstance.getCenter()!);
        }
      }
    });
  // Intentionally run once when map is ready; deps would re-run setup on every render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLocationError = (browserHasGeolocation: boolean, pos: google.maps.LatLng) => {
    if (infoWindow && map) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }
  };

  const geocodeAddress = (address: string) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const location = results[0].geometry.location;
        setUserLocation(location);
        map?.setCenter(location);
        placeUserMarker(location);
        searchNearbyPlaces(location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  const placeUserMarker = (location: google.maps.LatLng) => {
    clearMarkers();
    
    if (map) {
      const userMarker = new google.maps.Marker({
        position: location,
        map,
        animation: google.maps.Animation.DROP,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4285F4",
          fillOpacity: 1,
          strokeColor: "#FFFFFF",
          strokeWeight: 2
        },
        title: "Your Location"
      });
      
      setMarkers([userMarker]);
      
      userMarker.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent("<strong>Your Location</strong>");
          infoWindow.open(map, userMarker);
        }
      });
    }
  };

  const searchNearbyPlaces = (location: google.maps.LatLng) => {
    if (service) {
      service.nearbySearch(
        {
          location,
          radius: 5000,
          type: "point_of_interest"
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const places = results.slice(0, 10);
            places.forEach((place, i) => {
              createMarker(place, i);
              getPlaceDetails(place.place_id!, i);
            });
            calculateDistances(location, places);
          }
        }
      );
    }
  };

  const createMarker = (place: google.maps.places.PlaceResult, index: number) => {
    if (map && place.geometry?.location) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
        label: {
          text: (index + 1).toString(),
          color: "white"
        },
        title: place.name
      });
      
      setMarkers(prev => [...prev, marker]);
      
      marker.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent(`
            <div>
              <strong>${place.name}</strong>
              <p>${place.vicinity || ""}</p>
              <p>Rating: ${place.rating ? `${place.rating}⭐ (${place.user_ratings_total} reviews)` : "No ratings"}</p>
              <button id="directions-btn" style="padding: 5px 10px; background: #4285F4; color: white; border: none; border-radius: 3px; cursor: pointer;">Get Directions</button>
            </div>
          `);
          infoWindow.open(map, marker);
          
          google.maps.event.addListenerOnce(infoWindow, "domready", () => {
            document.getElementById("directions-btn")?.addEventListener("click", () => {
              const loc = locationData.find(loc => loc.place_id === place.place_id);
              if (loc) {
                selectLocation(loc);
              }
            });
          });
        }
      });
    }
  };

  const getPlaceDetails = (placeId: string, index: number) => {
    if (service) {
      service.getDetails(
        {
          placeId,
          fields: ["name", "formatted_address", "place_id", "website", "formatted_phone_number", "opening_hours", "photos"]
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            setLocationData(prev => [
              ...prev,
              {
                index,
                place_id: place.place_id!,
                name: place.name!,
                address: place.formatted_address!,
                website: place.website,
                phone: place.formatted_phone_number,
                hours: place.opening_hours,
                photos: place.photos
              }
            ]);
          }
        }
      );
    }
  };

  const calculateDistances = (origin: google.maps.LatLng, destinations: google.maps.places.PlaceResult[]) => {
    const service = new google.maps.DistanceMatrixService();
    const destinationLocations = destinations.map(place => place.geometry!.location).filter((loc): loc is google.maps.LatLng => loc !== null && loc !== undefined);
    
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: destinationLocations,
        travelMode: currentTravelMode,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      },
      (response, status) => {
        if (status === "OK" && response) {
          const results = response.rows[0].elements;
          
          setLocationData(prev => {
            const updated = [...prev];
            for (let i = 0; i < results.length; i++) {
              if (results[i].status === "OK" && updated[i]) {
                updated[i].distance = results[i].distance;
                updated[i].duration = results[i].duration;
              }
            }
            return updated.sort((a, b) => {
              if (a.distance && b.distance) {
                return a.distance.value - b.distance.value;
              }
              return 0;
            });
          });
          
          displayLocationList();
        }
      }
    );
  };

  const displayLocationList = () => {
    const container = document.getElementById("locations-container");
    if (container && locationData.length > 0) {
      container.innerHTML = "";
      
      locationData.forEach((location) => {
        const locationElement = document.createElement("div");
        locationElement.className = "location-item";
        locationElement.dataset.placeId = location.place_id;
        
        locationElement.innerHTML = `
          <div class="location-name">${location.name}</div>
          <div class="location-address">${location.address || "Address not available"}</div>
          ${location.distance ? `
            <div class="location-distance">
              ${location.distance.text} away • ${location.duration?.text}
            </div>
          ` : ''}
        `;
        
        locationElement.addEventListener("click", () => {
          selectLocation(location);
          
          document.querySelectorAll(".location-item").forEach(item => {
            item.classList.remove("selected");
          });
          
          locationElement.classList.add("selected");
        });
        
        container.appendChild(locationElement);
      });
    }
  };

  const selectLocation = (location: Location) => {
    setSelectedLocation(location);
    
    const detailsContainer = document.getElementById("selected-location");
    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <h3>${location.name}</h3>
        <p><strong>Address:</strong> ${location.address || "Not available"}</p>
        <p><strong>Phone:</strong> ${location.phone || "Not available"}</p>
        ${location.website ? `<p><strong>Website:</strong> <a href="${location.website}" target="_blank">${location.website}</a></p>` : ""}
        ${location.hours ? `
          <p><strong>Hours:</strong></p>
          <ul>
            ${location.hours.weekday_text?.map(day => `<li>${day}</li>`).join("") || ""}
          </ul>
        ` : ""}
      `;
    }
    
    if (userLocation && markers[location.index + 1]) {
      getDirections(userLocation, markers[location.index + 1].getPosition()!);
    }
  };

  const getDirections = (origin: google.maps.LatLng, destination: google.maps.LatLng) => {
    if (directionsService && directionsRenderer) {
      directionsService.route(
        {
          origin,
          destination,
          travelMode: currentTravelMode,
          provideRouteAlternatives: true
        },
        (response, status) => {
          if (status === "OK" && response) {
            directionsRenderer.setDirections(response);
            
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(origin);
            bounds.extend(destination);
            map?.fitBounds(bounds);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
  };

  const setTravelMode = (mode: google.maps.TravelMode) => {
    setCurrentTravelMode(mode);
    
    document.querySelectorAll(".mode-button").forEach(button => {
      button.classList.remove("active");
    });
    
    let buttonId: string | undefined;
    switch (mode) {
      case google.maps.TravelMode.DRIVING:
        buttonId = "drive-mode";
        break;
      case google.maps.TravelMode.WALKING:
        buttonId = "walk-mode";
        break;
      case google.maps.TravelMode.TRANSIT:
        buttonId = "transit-mode";
        break;
    }
    
    if (buttonId) {
      document.getElementById(buttonId)?.classList.add("active");
    }
    
    if (selectedLocation && userLocation && markers[selectedLocation.index + 1]) {
      getDirections(userLocation, markers[selectedLocation.index + 1].getPosition()!);
    }
    
    if (userLocation && locationData.length > 0) {
      const destinations = locationData.map((_, i) => markers[i + 1].getPosition()!);
      calculateDistances(userLocation, destinations.map(pos => ({ geometry: { location: pos } })));
    }
  };

  const clearMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      const locationButton = document.getElementById("current-location");
      if (locationButton) {
        locationButton.textContent = "📍 Locating...";
      }
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          
          setUserLocation(location);
          map?.setCenter(location);
          map?.setZoom(15);
          
          placeUserMarker(location);
          
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              const searchInput = document.getElementById("location-search") as HTMLInputElement;
              if (searchInput) {
                searchInput.value = results[0].formatted_address;
              }
            }
          });
          
          searchNearbyPlaces(location);
          
          if (locationButton) {
            locationButton.textContent = "📍 Location Found!";
            setTimeout(() => {
              locationButton.textContent = "📍 My Location";
            }, 2000);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          if (locationButton) {
            locationButton.textContent = "📍 Location Error";
            setTimeout(() => {
              locationButton.textContent = "📍 My Location";
            }, 2000);
          }
          if (map) {
            handleLocationError(true, map.getCenter()!);
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      if (map) {
        handleLocationError(false, map.getCenter()!);
      }
    }
  };

  return (
    <div id="map" ref={mapRef} className="h-[600px] w-full bg-gray-100"></div>
  );
} 
import "@arcgis/map-components/components/arcgis-map"


const GeodeMap = () => {

  // On map load, initialization functions
  function handleViewReady(e) {
    const view = e.target
    
    // Unbounded, the ArcGIS Map allows the user to pan beyond the usable portion of the map into a void of nothing-ness
    // Setting these zoom/pan boundaries prevents this, as well as unlimited horizontal panning
    const panLimits = {
      type: "extent",
      xmin: -180,
      ymin: -70,
      xmax:  180,
      ymax:   67,
    };

    view.constraints = {
      minZoom: 2,
      geometry: panLimits
    };

    console.log(
      "Map constraints set"
    )
  }
    
  return (
    <arcgis-map 
      tabindex="-1" 
      api-key={import.meta.env.VITE_ARCGIS_API_KEY}
      basemap="dark-gray"
      onarcgisViewReadyChange={handleViewReady}
    />
  )
}

export default GeodeMap
import "@arcgis/map-components/components/arcgis-map"

function App() {

  function handleViewReady(evt) {
    const view = evt.target

    console.log(
      "VIEW UPDATED"
    )

    const panLimits = {
      type: "extent",
      xmin: -180,
      ymin: -70,
      xmax:  180,
      ymax:   67,
      // spatialReference: 4326      // WGS-84; SDK will auto-project to WebMercator
    };

    view.constraints = {
      minZoom: 2,
      geometry: panLimits
    };
  }

  return (
      <arcgis-map 
        api-key={import.meta.env.VITE_ARCGIS_API_KEY}
        basemap="dark-gray"
        onarcgisViewReadyChange={handleViewReady}
      />
  )
}

export default App

import React from "react";
import ImageStar from './imageStar/ImageStar'

function MainPage() {
  function NavBar() {
    function ButtonNavigation() {
      return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <p><a href="/">Info</a></p>
          <p><a href="/">Gelleries</a></p>
        </div>
      )
    }

    return (
      <div className="nev-bar">
        <h1 style={{ font: 'Monospace' }}>Hugo Segato</h1>
        <ButtonNavigation />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '90vh' }}>
      <div className="conteneur-page">
        <NavBar />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px'}}>
          <div style={{ width: '80%', overflow: 'hidden'}}>
            <ImageStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

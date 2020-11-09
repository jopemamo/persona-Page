import React from 'react';

const Sound = ({ sound, audio, audioLink, handleSound }) => {
  return (
    <>
      {sound ?
        <section className="section__sound">
          <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604580007/persona%20page/volume_1_u4ri1u.png" alt="soundOn" />
          <audio control autoPlay loop volume={0.1}>
            <source src={audioLink} type="audio/mpeg" />
            <source src={audio} type="audio/mpeg" />
      Your browser does not support the audio tag.
      </audio>
        </ section>
        :
        <section className="section__sound">
          <p onClick={handleSound} className="section__sound__p muted">Press for Sound!</p>
          <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604584806/persona%20page/mute-button_vtvguw.png" alt="soundOff" />
        </section >
      }
    </>
  )
}
export default Sound;
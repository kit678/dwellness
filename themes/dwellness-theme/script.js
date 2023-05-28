// The image URLs will be retrieved from a server or database in a real-world scenario.
// This is a mocked list of image URLs for demonstration purposes.
const images = [
  'https://media.gettyimages.com/id/1320353092/vector/health-and-wellness-thin-line-icons-editable-stroke.jpg?s=612x612&w=0&k=20&c=ocXTvyp3CiDEcn-ro9HZVQ9vFbtzp5-Zk0JBkWjimi8=',
  'https://media.gettyimages.com/id/1306374807/photo/fit-woman-drinking-a-green-detox-smoothie-at-the-gym.jpg?s=612x612&w=0&k=20&c=dbPFnCHAdTkDgqhrByQa80nMXa29mvS8X-MGGfZfZw8=',
  'https://media.gettyimages.com/id/1362556647/vector/mental-wellness-thin-line-icons-editable-stroke.jpg?s=612x612&w=0&k=20&c=U2JxLWcHo2yb3cs9cy07xFRxBHESO9-Q_tkyCglby_w=',
  'https://media.gettyimages.com/id/1332693985/photo/workers-doing-stretching-exercises-in-a-business-meeting-at-the-office.jpg?s=612x612&w=0&k=20&c=oQPalR_gxk_gYPYctw-bs70gOeAGJ6meMZqFskZ9z3Y=',
  'https://media.gettyimages.com/id/1313442604/vector/mindfulness-watercolor-creative-abstract-background.jpg?s=612x612&w=0&k=20&c=wCOB7PyTMVXYfabK3TJXtP6cSK36S7Zu5CoZlBO2hJ0=',
  'https://media.gettyimages.com/id/1037007848/photo/close-up-of-jogging.jpg?s=612x612&w=0&k=20&c=r1wPOx0de4zZnC6-oSVdhkfYAMB1rU8MgRTPdSpkJiY=',
  'https://media.gettyimages.com/id/1347685599/photo/young-asian-man-with-eyes-closed-enjoying-music-over-headphones-while-relaxing-on-the-sofa-at.jpg?s=612x612&w=0&k=20&c=ZPn9Mf60xbcKe0Y2njLC_6V3_pck2S28FiKoZosqKJs=',
  'https://media.gettyimages.com/id/1319807824/vector/health-and-wellness-thin-line-icons-editable-stroke.jpg?s=612x612&w=0&k=20&c=DPIUWW4xI3pSdhWaGRPnD_cDDyOiia5_le2c3De4RP8=',
  'https://media.gettyimages.com/id/1191202222/photo/young-woman-embracing-rainforest-standing-in-sunbeams-illuminating-the-trees.jpg?s=612x612&w=0&k=20&c=GL_8EbEBfj5hQeupEzSY9Tg5BCZN2MWnTA8KBfyjD0M=',
  'https://media.gettyimages.com/id/1280587810/photo/healthy-eating-exercising-weight-and-blood-pressure-control.jpg?s=612x612&w=0&k=20&c=iCQnBHXhRf6HIzPGMUMwjnBDtIZDuE5UzrPG6AeKMZE=',
  'https://media.gettyimages.com/id/175590369/photo/pebble-on-beach.jpg?s=612x612&w=0&k=20&c=HUghk-nzB8lRi_Ctv0wqPGpAdxjON_byXpHVRLGFNW8=',
  'https://media.gettyimages.com/id/1140067219/photo/relaxed-mother-and-daughter-exercising-yoga-in-the-morning-at-home.jpg?s=612x612&w=0&k=20&c=dTrA_UmwADCPpNfM0EwpeuTv1y5OjgRJkGGLmqcH7fM=',
  'https://media.gettyimages.com/id/1293388093/photo/two-men-exercising.jpg?s=612x612&w=0&k=20&c=Dgqqf5mrFnhqEcMelLHvs36iNZaMNe4ZRiJFWQtCfCg=',
  'https://media.gettyimages.com/id/1353607852/vector/mindfulness-meditation.jpg?s=612x612&w=0&k=20&c=daMblmhBRuhk7vUVN1oEbw30mDXhnWNYrS-7UOFJsMk=',];/*
  'https://media.gettyimages.com/id/1216484250/photo/staying-positive.jpg?s=612x612&w=0&k=20&c=Lg02IhQOpZ12aAAmXw4fEXYDD5XLYTO8_NV_uGgsUnE=',
  'https://media.gettyimages.com/id/1138147384/vector/fitness-and-workout-line-icons-editable-stroke-pixel-perfect-for-mobile-and-web-contains.jpg?s=612x612&w=0&k=20&c=dJbQ5ZIAtbaYL-IwH6ABlaohj4Y9Wz7HPsPuL3IM2io=',
  'https://media.gettyimages.com/id/1267497795/photo/young-woman-in-spiritual-pose-holding-the-light.jpg?s=612x612&w=0&k=20&c=7HiquJMEZQV22fvhm0PIm61GIzdjcGNEUGDmQ9W0ekY=',
  'https://media.gettyimages.com/id/151812309/photo/woman-with-head-back-and-arms-outstretched.jpg?s=612x612&w=0&k=20&c=N2RXSusrBuFYekaRj0nnJwMcOaWLW46E8mieju_yIe4=',
  'https://media.gettyimages.com/id/1185007236/photo/businesswoman-relaxing-outdoor.jpg?s=612x612&w=0&k=20&c=Wr_AGQYzyk-oaYxBeukk8mtaI2VGYv69OCK5-DDQ7qg=',
  'https://media.gettyimages.com/id/651953563/photo/young-woman-with-eyes-closed-smiling-on-a-beach.jpg?s=612x612&w=0&k=20&c=1Lq4epyN2NdNsGlsi__S69MxHnhBsiqkthngMezA-eU=',
  'https://media.gettyimages.com/id/1267221530/vector/healthy-lifestyle-line-icon-design.jpg?s=612x612&w=0&k=20&c=xNu4-1MW5CYyaiyoVa0svekDts8qU4DOBFu8G6x3f_g=',
  'https://media.gettyimages.com/id/1065043970/photo/young-woman-sitting-on-edge-looks-out-at-view.jpg?s=612x612&w=0&k=20&c=zXlF6EJwCHDAtEJ_kh8zs6PqliCKZA75F93ffAkJURY=',
  'https://media.gettyimages.com/id/1392675723/photo/beautiful-multiracial-woman-doing-breathing-exercise-at-home.jpg?s=612x612&w=0&k=20&c=g2peYjWPvVmJujvhEeWcOAzXSMltqAnxd6I4DYYEg7A=',
  'https://media.gettyimages.com/id/1340887606/vector/healthy-life-related-design-with-line-icons-simple-outline-symbol-icons.jpg?s=612x612&w=0&k=20&c=tWwAb-guBIZgS2r9StSwC9yUkH0fG2S7wUFkQ8J6G2Q=',
  'https://media.gettyimages.com/id/693469150/photo/meditating-at-the-office.jpg?s=612x612&w=0&k=20&c=8Wg1OOVsyUhUJ4kH5djgkP-86nxNglp56SbAPo2deb8=',
  'https://media.gettyimages.com/id/1039533792/photo/close-up-of-meditation-in-park-at-sunrise.jpg?s=612x612&w=0&k=20&c=h9zGDWjasY2BHeaXspZzzZU6vkqpYaBRvceyWCfEte8=',
  'https://media.gettyimages.com/id/1254783770/photo/mature-woman-meditating-in-backyard.jpg?s=612x612&w=0&k=20&c=pXTgdChDHAFngxq17Hy2xFvo7vQ2te3CI-Naoi8G680=',
  'https://media.gettyimages.com/id/1174472274/photo/connection-with-nature.jpg?s=612x612&w=0&k=20&c=3rs2O5359vifIzQWlFwXHyEWQSt7XzPVBWUiUKuwV_o=',
  'https://media.gettyimages.com/id/1238998139/photo/relaxed-young-asian-woman-with-eyes-closed-sitting-on-her-bed-enjoying-music-over-headphones.jpg?s=612x612&w=0&k=20&c=ZdYlQkJNZoSQpiQj_w59YZPXpV2JiZmCkpVsspcyMmU=',
  'https://media.gettyimages.com/id/1250989037/photo/young-asian-woman-drinking-green-smoothie-after-yoga.jpg?s=612x612&w=0&k=20&c=ThMqHEzmHOIvRdKn4zJP5T1kNtfpMO0jPUF6PofP8ok=',
  'https://media.gettyimages.com/id/1353592088/vector/health-benefits-of-mindfulness-creative-icons.jpg?s=612x612&w=0&k=20&c=hRcLXsKCXuvd8lDdWHhATWAufLNw5S3YGJD_e58IEHU=',
  'https://media.gettyimages.com/id/1337405825/photo/shot-of-a-young-woman-relaxing-on-the-sofa-at-home.jpg?s=612x612&w=0&k=20&c=Mdi023IowRY992DiWvxREaDc8YdcsMcC9sP3QOU7aMo=',
  'https://media.gettyimages.com/id/1262697540/photo/young-african-american-woman-is-relaxing-on-the-rooftop.jpg?s=612x612&w=0&k=20&c=ihWGRGY-7Q5xrIb6dsP5j2yXqHZSAIouw-UU-McTPZg=',
  'https://media.gettyimages.com/id/1150732846/photo/speaking-to-the-doctor.jpg?s=612x612&w=0&k=20&c=h2Ej_QArK7J3Ynq2LBDkVoZUPECJxLQ94DEtXUf4l7Q=',
  'https://media.gettyimages.com/id/1162184637/photo/making-healthy-meal.jpg?s=612x612&w=0&k=20&c=KhcEZILYoO3TzLBCSB_W5RmVhFLTGQ9l9HEGwvZ7Law=',
  'https://media.gettyimages.com/id/889045800/photo/fitness-class-stretching.jpg?s=612x612&w=0&k=20&c=uraBRpqOCuF4GQUDXz4FoNXQJ3dhBtPWl9lQQiukecY=',
  'https://media.gettyimages.com/id/637492768/photo/feelings-for-my-soul.jpg?s=612x612&w=0&k=20&c=rrfjGgJnPxuyTRExGZsZf1ZtVdJFTGnkunYW41F3uy0=',
  'https://media.gettyimages.com/id/1326559101/vector/emoticons-wellbeing-and-mindfulness.jpg?s=612x612&w=0&k=20&c=511So4BxYUgea_1AxTF_uF3RFvVClr5UX01FLSQDcAk=',
  'https://media.gettyimages.com/id/1202729719/photo/young-woman-sitting-in-the-lotus-pose-outside-on-her-patio.jpg?s=612x612&w=0&k=20&c=ZzQDqNjDTIMKya-qZhUAjLimWD-zCqFIvKPLJC5wqpk=',
  'https://media.gettyimages.com/id/944300692/photo/cheerful-young-athlete-outdoors-by-the-river.jpg?s=612x612&w=0&k=20&c=9Cxf4INOF558cWhE1LAOmXM1RMaUBw8zp8YVIcSkN8M=',
  'https://media.gettyimages.com/id/1191744336/photo/young-man-runs-on-mountain-ridge-at-sunrise.jpg?s=612x612&w=0&k=20&c=UMOnFHtEPaux1qF7WrUKj1T8SQP3M_Ng7ns_rimR4to=',
  'https://media.gettyimages.com/id/1355274416/photo/full-length-shot-of-an-attractive-young-woman-sitting-on-a-mat-and-meditating-at-home.jpg?s=612x612&w=0&k=20&c=sLNY9OoJDSbVP-31bCG0ksGvUxmfgTTyA4ZeJRK1bxc=',
  'https://media.gettyimages.com/id/1167841965/photo/active-senior-woman-making-a-heart-with-her-hands.jpg?s=612x612&w=0&k=20&c=c1M4DaBMOIzHgQoz4FBtW8uxH6ZDwHHc8HGoaN0teso=',
  'https://media.gettyimages.com/id/1346818217/photo/medium-wide-shot-low-angle-view-of-woman-relaxing-after-finishing-yoga-class-in-studio.jpg?s=612x612&w=0&k=20&c=B82X9xzKOB4ZzSy3IHTCXOIoe5W35zdZdktJnzVZUTk=',
  'https://media.gettyimages.com/id/1296872714/photo/middle-eastern-woman-with-hijab-and-glasses-working-on-laptop-in-start-up-office.jpg?s=612x612&w=0&k=20&c=CzXtgz47zNniQqnTw0FbDV8WQ0s990MCen0z1OLmVEo=',
  'https://media.gettyimages.com/id/1225617377/vector/fitness-thin-line-icons-editable-stroke.jpg?s=612x612&w=0&k=20&c=l0tI1Wb54NbJ5ULzySe0M8hGlXacVtpQt28dICrE-l0=',
  'https://media.gettyimages.com/id/1173619383/photo/a-young-woman-taking-a-break-from-technology.jpg?s=612x612&w=0&k=20&c=uJkxkv9FnnfoqCKrE1h09yWsJ-dtwkD9ucHblg7lLzk=',
  'https://media.gettyimages.com/id/804802532/photo/hawaiian-woman-doing-yoga-pose-inside-in-morning.jpg?s=612x612&w=0&k=20&c=vPwFYLMm9rIAmp0Io8frtsB4Sl7hxGI938ro1K1YUa8=',
  'https://media.gettyimages.com/id/1421420537/photo/peace-relax-and-happy-mindset-of-a-woman-from-indonesia-taking-a-mind-and-meditation-home.jpg?s=612x612&w=0&k=20&c=g4RMOEvA61eWXXc2hYclZoN2h-tz00le2NhDu865T5M=',
  'https://media.gettyimages.com/id/694405254/vector/healthy-lifestyle-and-eating-icons-big-series.jpg?s=612x612&w=0&k=20&c=opIWYtjdNfKRhG5onF37rixcVudNXtH0-jX-sphLzH4=',
  'https://media.gettyimages.com/id/1368912260/photo/winning-team.jpg?s=612x612&w=0&k=20&c=In6MFarwqB28MFTCgV6SbtNdD8VDv_2QZtB6ayzrTjI=',
  'https://media.gettyimages.com/id/889752442/vector/lotus-blossoms.jpg?s=612x612&w=0&k=20&c=hklTKbYGF1c0JzUUUT7N2qvIy0zmPtAmnTGrK9zQiwM=',
  'https://media.gettyimages.com/id/940636920/photo/fit-woman-holding-a-yoga-mat-at-the-beach.jpg?s=612x612&w=0&k=20&c=RL3gBGHDTyaL6IF8degZVasZyC_R0HaazgeDur4x9ko=',
  'https://media.gettyimages.com/id/1196856105/vector/healthy-lifestyle-thin-line-icons-editable-stroke.jpg?s=612x612&w=0&k=20&c=50VoTFCJO_aXYySjrjdEGPG_usrFmOPvVgazyyiYeUM=',
  'https://media.gettyimages.com/id/1184702124/vector/depression-and-anxiety-thin-line-icons-editable-stroke.jpg?s=612x612&w=0&k=20&c=Xwun1Dof_yDWMQfDKDnY6-7uWHuJZoh3bSVkBBAqBuA=',
  'https://media.gettyimages.com/id/1097324074/photo/lets-get-to-those-goals.jpg?s=612x612&w=0&k=20&c=A0UqevwD7rPo58u4Vo2G7lHbao3tRercHYpXc8lj38k=',
  'https://media.gettyimages.com/id/1304188797/photo/group-of-people-with-arms-raised-in-yoga-position.jpg?s=612x612&w=0&k=20&c=-3qwMFGGdNHidJXmGEVa8narfVTUPxcL_ZSvbod7xLw=',
  'https://media.gettyimages.com/id/1299754707/photo/detail-of-hand-touching-water-surface-of-lake-at-sunset.jpg?s=612x612&w=0&k=20&c=B54icLAeISWnP9bxML32wX8UTCfPrGBNHISwCywCCGE=',
  'https://media.gettyimages.com/id/1302662364/photo/woman-in-lotus-position-while-working-out-in-living-room-of-home.jpg?s=612x612&w=0&k=20&c=WFbus5VF4CmNMlJvD8Hh5-PiMz8jh8SZbNXGVxFy6UY=',
  'https://media.gettyimages.com/id/1257057803/photo/young-lady-embracing-hope-and-freedom.jpg?s=612x612&w=0&k=20&c=1zdAVGa8zFzXJMAmZtlDz0oPCWZMABUVZt-c7skpPvI=',
];*/


const grid = document.getElementById('grid');

images.forEach((url) => {
  const img = document.createElement('img');
  img.onload = () => {
    const item = document.createElement('div');
    item.className = 'item';
    item.appendChild(img);
    grid.appendChild(item);
  };
  img.src = url;
});

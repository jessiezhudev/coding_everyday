### how Medium does progressive image loading
https://jmperezperez.com/medium-image-progressive-loading-placeholder/

1. render a div where the image will be displayed -> padding-bottom set to a percentage, prevent recalculate and reflow   
intrinsic placeholders http://daverupert.com/2015/12/intrinsic-placeholders-with-picture/

2. load a tiny version of the image -> small JPEG thumbnail

3. once the image is loaded, it is drawn in a <canvas>

#### data URIs
inline small thumbnails using data URIs is possible instead of making a request for small thumbnails

#### Blur Effects
using css filter effects, easily tweak how much blur you want.

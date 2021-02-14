# color-scales-js
A utility mimicking Microsoft Excel's Color Scales conditional formatting, which returns the color of a value in a linear gradient between two color endpoints with defined min and max values

### Demo: https://codepen.io/dalisc/pen/zYoNQge

## Usage

### Install from NPM

```
npm i color-scales
```

Alternatively, import from Skypack, a free CDN for Javascript/TypeScript packages:

```ts
import ColorScales from "https://cdn.skypack.dev/color-scales";
```

### Important Classes

#### ColorScale Class

The `ColorScale` has the following properties:

`min`: The minimum value of the range.
`max`: The maximum value of the range.
`minColor`: The minimum color corresponding to the minimum value.
`maxColor`: The maximum color corresponding to the maximum value.

Its constructor is `ColorScale(min, max, minColor, maxColor)`;

The `ColorScale` class has the following functions:

`getColor`: Param: number. Returns an instance `Color` corresponding to the numerical value supplied, calculated based on the class properties above.

#### Color Class

The `Color` class is an unexported class. It has the following properties:

`r`: An integer representing the intensity of the red hue. Ranges from 0 to 255.
`g`: An integer representing the intensity of the green hue. Ranges from 0 to 255.
`b`: An integer representing the intensity of the blue hue. Ranges from 0 to 255.

The `Color` class has the following functions:

`toHexString`: Returns the equivalent hex string representation. The string will be in lower case. Example: "#7f7f7f"
`toRGBString`: Returns the equivalent RGB string representation. The string will be in lower case. Example: "rgb(127,127,127)"

### Example Usage

#### Constructor

The following import and constructor creates a `ColorScale` object.

``` ts
const ColorScales = require("color-scales");
// Alternatively, import from Skypack, a free CDN for Javascript/TypeScript packages:
// import ColorScales from "https://cdn.skypack.dev/color-scales";

let colorScale = new ColorScales(min, max, minColor, maxColor);
 ```

where `min`, `max`, `minColor`, are `maxColor` are replaced by their intended value;

Example:

```ts
const ColorScales = require("color-scales");

let colorScale = new ColorScales(0, 100, "#ffffff", "#000000"); // white to black from 0 to 100
```

#### Get Color Object

Example:

```ts
const ColorScales = require("color-scales");

let colorScale = new ColorScales(0, 100, "#ffffff", "#000000"); // red to green from 0 to 100
let colorObj = colorScale.get(50); // returns new Color(127, 127, 127)
```

#### Get Hex String

Example:
```ts
const ColorScales = require("color-scales");

let colorScale = new ColorScales(0, 100, "#ffffff", "#000000"); // red to green from 0 to 100
let hexStr = colorScale.get(50).toHexString(); // returns "#7f7f7f"
```

#### Get RGB String

Example:
```ts
const ColorScales = require("color-scales");

let colorScale = new ColorScales(0, 100, "#ffffff", "#000000"); // red to green from 0 to 100
let rgbStr = colorScale.get(50).toRGBString(); // returns "rgb(127,127,127)"
```

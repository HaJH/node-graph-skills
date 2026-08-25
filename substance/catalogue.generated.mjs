// GENERATED FILE -- do not edit by hand.
//
//   node substance/tools/generate-catalogue.mjs
//
// Read out of Adobe Substance 3D Designer 15.1.0.
// ATOMIC comes from the API via tools/dump-catalog.py; LIBRARY from the shipped .sbs packages.
// Pin types are Substance Type Codes: color, gray, either. An output typed "value" is a
// number, not an image, and cannot take an image wire.
//
// 29 atomic definitions, 501 library nodes.
// 310 more graph ids are declared only by packages that hide them -- retired or internal,
// never offered by the Library. One is declared by more than one visible package and
// left out until something disambiguates it: clamp.

export const ATOMIC = {
 "bitmap": {
  "id": "sbs::compositing::bitmap",
  "label": "Bitmap",
  "inputs": [],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "bitmapresourcepath",
    "type": "string",
    "default": "SDValueString(string())"
   },
   {
    "id": "resizemethod",
    "type": "sbs::compositing::resizemethod",
    "default": "SDValueEnum(\"sbs::compositing::resizemethod\",0)"
   }
  ]
 },
 "blend": {
  "id": "sbs::compositing::blend",
  "label": "Blend",
  "inputs": [
   {
    "id": "source",
    "primary": false,
    "variadic": false
   },
   {
    "id": "destination",
    "primary": true,
    "variadic": false
   },
   {
    "id": "opacity",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "opacitymult",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   },
   {
    "id": "blendingmode",
    "type": "sbs::compositing::blendingmode",
    "default": "SDValueEnum(\"sbs::compositing::blendingmode\",0)"
   },
   {
    "id": "colorblending",
    "type": "sbs::compositing::colorblending",
    "default": "SDValueEnum(\"sbs::compositing::colorblending\",0)"
   },
   {
    "id": "maskrectangle",
    "type": "float4",
    "default": "SDValueFloat4(float4(0,1,0,1))"
   }
  ]
 },
 "blur": {
  "id": "sbs::compositing::blur",
  "label": "Blur",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(10))"
   }
  ]
 },
 "curve": {
  "id": "sbs::compositing::curve",
  "label": "Curve",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "exposecurve",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "addressingrepeat",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "curveluminance",
    "type": "SDTypeArray<sbs::compositing::curve_key>",
    "default": null
   },
   {
    "id": "curvered",
    "type": "SDTypeArray<sbs::compositing::curve_key>",
    "default": null
   },
   {
    "id": "curvegreen",
    "type": "SDTypeArray<sbs::compositing::curve_key>",
    "default": null
   },
   {
    "id": "curveblue",
    "type": "SDTypeArray<sbs::compositing::curve_key>",
    "default": null
   },
   {
    "id": "curvealpha",
    "type": "SDTypeArray<sbs::compositing::curve_key>",
    "default": null
   }
  ]
 },
 "directionalwarp": {
  "id": "sbs::compositing::directionalwarp",
  "label": "Directional warp",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   },
   {
    "id": "inputintensity",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(10))"
   },
   {
    "id": "warpangle",
    "type": "float",
    "default": "SDValueFloat(float(0))"
   },
   {
    "id": "warpfilter",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "intensityoffset",
    "type": "float",
    "default": "SDValueFloat(float(0))"
   }
  ]
 },
 "dirmotionblur": {
  "id": "sbs::compositing::dirmotionblur",
  "label": "Directional blur",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(10))"
   },
   {
    "id": "mblurangle",
    "type": "float",
    "default": "SDValueFloat(float(0))"
   }
  ]
 },
 "distance": {
  "id": "sbs::compositing::distance",
  "label": "Distance",
  "inputs": [
   {
    "id": "mask",
    "primary": true,
    "variadic": false
   },
   {
    "id": "source",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "distance",
    "type": "float",
    "default": "SDValueFloat(float(10))"
   },
   {
    "id": "combinedistance",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "distancemode",
    "type": "sbs::compositing::distancemode",
    "default": "SDValueInt(int(0))"
   }
  ]
 },
 "dyngradient": {
  "id": "sbs::compositing::dyngradient",
  "label": "Gradient (Dynamic)",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   },
   {
    "id": "input2",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "addressingrepeat",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "uvselector",
    "type": "sbs::compositing::uvselector",
    "default": "SDValueEnum(\"sbs::compositing::uvselector\",0)"
   },
   {
    "id": "coordinate",
    "type": "float",
    "default": "SDValueFloat(float(0))"
   }
  ]
 },
 "emboss": {
  "id": "sbs::compositing::emboss",
  "label": "Emboss",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   },
   {
    "id": "inputgradient",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(5))"
   },
   {
    "id": "lightangle",
    "type": "float",
    "default": "SDValueFloat(float(0))"
   },
   {
    "id": "highlightcolor",
    "type": "ColorRGBA",
    "default": "SDValueFloat4(float4(1,1,1,1))"
   },
   {
    "id": "shadowcolor",
    "type": "ColorRGBA",
    "default": "SDValueFloat4(float4(0,0,0,0))"
   }
  ]
 },
 "fxmaps": {
  "id": "sbs::compositing::fxmaps",
  "label": "FX-Map",
  "inputs": [
   {
    "id": "background",
    "primary": true,
    "variadic": false
   },
   {
    "id": "inputpattern",
    "primary": false,
    "variadic": true
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "renderroi",
    "type": "float4",
    "default": "SDValueFloat4(float4(0,1,0,1))"
   },
   {
    "id": "tilingroi",
    "type": "float4",
    "default": "SDValueFloat4(float4(0,1,0,1))"
   },
   {
    "id": "culling",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "hurst",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   },
   {
    "id": "opacitymult",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   }
  ]
 },
 "gradient": {
  "id": "sbs::compositing::gradient",
  "label": "Gradient map",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "addressingrepeat",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "gradientrgba",
    "type": "SDTypeArray<sbs::compositing::gradient_key_rgba>",
    "default": null
   }
  ]
 },
 "grayscaleconversion": {
  "id": "sbs::compositing::grayscaleconversion",
  "label": "Grayscale conversion",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "channelsweights",
    "type": "float4",
    "default": "SDValueFloat4(float4(0.330000013,0.330000013,0.330000013,0))"
   },
   {
    "id": "alphamult",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "mattelevel",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   }
  ]
 },
 "hsl": {
  "id": "sbs::compositing::hsl",
  "label": "HSL",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "hue",
    "type": "float",
    "default": "SDValueFloat(float(0.5))"
   },
   {
    "id": "saturation",
    "type": "float",
    "default": "SDValueFloat(float(0.5))"
   },
   {
    "id": "luminosity",
    "type": "float",
    "default": "SDValueFloat(float(0.5))"
   }
  ]
 },
 "input_color": {
  "id": "sbs::compositing::input_color",
  "label": "Input",
  "inputs": [],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "bitmapresourcepath",
    "type": "string",
    "default": "SDValueString(string())"
   }
  ]
 },
 "input_grayscale": {
  "id": "sbs::compositing::input_grayscale",
  "label": "Input",
  "inputs": [],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "bitmapresourcepath",
    "type": "string",
    "default": "SDValueString(string())"
   }
  ]
 },
 "input_value": {
  "id": "sbs::compositing::input_value",
  "label": "Input",
  "inputs": [],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   }
  ]
 },
 "levels": {
  "id": "sbs::compositing::levels",
  "label": "Levels",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "levelinlow",
    "type": "float4",
    "default": "SDValueFloat4(float4(0,0,0,0))"
   },
   {
    "id": "levelinhigh",
    "type": "float4",
    "default": "SDValueFloat4(float4(1,1,1,1))"
   },
   {
    "id": "levelinmid",
    "type": "float4",
    "default": "SDValueFloat4(float4(0.5,0.5,0.5,0.5))"
   },
   {
    "id": "leveloutlow",
    "type": "float4",
    "default": "SDValueFloat4(float4(0,0,0,0))"
   },
   {
    "id": "levelouthigh",
    "type": "float4",
    "default": "SDValueFloat4(float4(1,1,1,1))"
   },
   {
    "id": "clampinterm",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   }
  ]
 },
 "normal": {
  "id": "sbs::compositing::normal",
  "label": "Normal",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   },
   {
    "id": "inversedy",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "input2alpha",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   }
  ]
 },
 "output": {
  "id": "sbs::compositing::output",
  "label": "Input",
  "inputs": [
   {
    "id": "inputNodeOutput",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": []
 },
 "passthrough": {
  "id": "sbs::compositing::passthrough",
  "label": "Dot",
  "inputs": [
   {
    "id": "input",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   }
  ]
 },
 "pixelprocessor": {
  "id": "sbs::compositing::pixelprocessor",
  "label": "Pixel processor",
  "inputs": [
   {
    "id": "input",
    "primary": false,
    "variadic": true
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "perpixel",
    "type": "float4",
    "default": "SDValueFloat4(float4(0,0,0,1))"
   }
  ]
 },
 "sharpen": {
  "id": "sbs::compositing::sharpen",
  "label": "Sharpen",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   },
   {
    "id": "punchthrough",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   }
  ]
 },
 "shuffle": {
  "id": "sbs::compositing::shuffle",
  "label": "Channels shuffle",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   },
   {
    "id": "input2",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "channelred",
    "type": "sbs::compositing::channelred",
    "default": "SDValueEnum(\"sbs::compositing::channelred\",0)"
   },
   {
    "id": "channelgreen",
    "type": "sbs::compositing::channelgreen",
    "default": "SDValueEnum(\"sbs::compositing::channelgreen\",1)"
   },
   {
    "id": "channelblue",
    "type": "sbs::compositing::channelblue",
    "default": "SDValueEnum(\"sbs::compositing::channelblue\",2)"
   },
   {
    "id": "channelalpha",
    "type": "sbs::compositing::channelalpha",
    "default": "SDValueEnum(\"sbs::compositing::channelalpha\",3)"
   }
  ]
 },
 "svg": {
  "id": "sbs::compositing::svg",
  "label": "SVG",
  "inputs": [
   {
    "id": "background",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "vectorresourcepath",
    "type": "string",
    "default": "SDValueString(string())"
   }
  ]
 },
 "text": {
  "id": "sbs::compositing::text",
  "label": "Text",
  "inputs": [
   {
    "id": "background",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   },
   {
    "id": "text",
    "type": "string",
    "default": "SDValueString(string())"
   },
   {
    "id": "fontdata",
    "type": "string",
    "default": "SDValueString(string())"
   },
   {
    "id": "fontsize",
    "type": "float",
    "default": "SDValueFloat(float(0.25))"
   },
   {
    "id": "alignment",
    "type": "sbs::compositing::alignment",
    "default": "SDValueEnum(\"sbs::compositing::alignment\",1)"
   },
   {
    "id": "matrix22",
    "type": "float4",
    "default": "SDValueFloat4(float4(1,0,0,1))"
   },
   {
    "id": "position",
    "type": "float2",
    "default": "SDValueFloat2(float2(0,0))"
   },
   {
    "id": "frontcolor",
    "type": "ColorRGBA",
    "default": "SDValueFloat4(float4(1,1,1,1))"
   }
  ]
 },
 "transformation": {
  "id": "sbs::compositing::transformation",
  "label": "Transformation 2D",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "matrix22",
    "type": "float4",
    "default": "SDValueFloat4(float4(1,0,0,1))"
   },
   {
    "id": "offset",
    "type": "float2",
    "default": "SDValueFloat2(float2(0,0))"
   },
   {
    "id": "mipmapmode",
    "type": "sbs::compositing::mipmapmode",
    "default": "SDValueEnum(\"sbs::compositing::mipmapmode\",0)"
   },
   {
    "id": "manualmiplevel",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "mattecolor",
    "type": "ColorRGBA",
    "default": "SDValueFloat4(float4(0,0,0,0))"
   },
   {
    "id": "filtering",
    "type": "sbs::compositing::filtering",
    "default": "SDValueEnum(\"sbs::compositing::filtering\",0)"
   }
  ]
 },
 "uniform": {
  "id": "sbs::compositing::uniform",
  "label": "Uniform color",
  "inputs": [],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "colorswitch",
    "type": "bool",
    "default": "SDValueBool(bool(true))"
   },
   {
    "id": "outputcolor",
    "type": "ColorRGBA",
    "default": "SDValueFloat4(float4(0,0,0,1))"
   }
  ]
 },
 "valueprocessor": {
  "id": "sbs::compositing::valueprocessor",
  "label": "Value processor",
  "inputs": [
   {
    "id": "input",
    "primary": false,
    "variadic": true
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "function",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   }
  ]
 },
 "warp": {
  "id": "sbs::compositing::warp",
  "label": "Warp",
  "inputs": [
   {
    "id": "input1",
    "primary": true,
    "variadic": false
   },
   {
    "id": "inputgradient",
    "primary": false,
    "variadic": false
   }
  ],
  "outputs": [
   {
    "id": "unique_filter_output"
   }
  ],
  "parameters": [
   {
    "id": "$outputsize",
    "type": "int2",
    "default": "SDValueInt2(int2(8,8))"
   },
   {
    "id": "$format",
    "type": "sbs::compositing::format",
    "default": "SDValueEnum(\"sbs::compositing::format\",0)"
   },
   {
    "id": "$pixelsize",
    "type": "float2",
    "default": "SDValueFloat2(float2(1,1))"
   },
   {
    "id": "$pixelratio",
    "type": "sbs::compositing::pixelratio",
    "default": "SDValueEnum(\"sbs::compositing::pixelratio\",1)"
   },
   {
    "id": "$tiling",
    "type": "sbs::compositing::tiling",
    "default": "SDValueEnum(\"sbs::compositing::tiling\",3)"
   },
   {
    "id": "$randomseed",
    "type": "int",
    "default": "SDValueInt(int(0))"
   },
   {
    "id": "intensity",
    "type": "float",
    "default": "SDValueFloat(float(1))"
   },
   {
    "id": "warpfilter",
    "type": "bool",
    "default": "SDValueBool(bool(false))"
   }
  ]
 }
}

export const LIBRARY = {
 "2dtransform_path": {
  "package": "paths_tools",
  "label": "Path 2D transform",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "3D_perlin_noise": {
  "package": "3d_perlin_noise",
  "label": "3D Perlin noise",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3D_perlin_noise_fractal": {
  "package": "3d_perlin_noise",
  "label": "3D Perlin noise fractal",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3D_ridged_noise_fractal": {
  "package": "3d_perlin_noise",
  "label": "3D ridged noise fractal",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3D_worley_noise": {
  "package": "3d_worley_noise",
  "label": "3D Worley noise",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_linear_gradient": {
  "package": "3d_gradient",
  "label": "3D linear gradient",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_planar_projection": {
  "package": "3d_planar_projection",
  "label": "3D planar projection grayscale",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   },
   {
    "id": "wsnormal",
    "type": "color",
    "primary": false
   },
   {
    "id": "texture",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_planar_projection_color": {
  "package": "3d_planar_projection",
  "label": "3D planar projection color",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   },
   {
    "id": "wsnormal",
    "type": "color",
    "primary": false
   },
   {
    "id": "texture",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "3d_simplex_noise": {
  "package": "3d_simplex_noise",
  "label": "3D simplex noise",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_texture_offset_color": {
  "package": "3d_texture_transform",
  "label": "3D texture offset color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "3d_texture_offset_grayscale": {
  "package": "3d_texture_transform",
  "label": "3D texture offset grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_texture_position": {
  "package": "3d_texture_position",
  "label": "3D texture position",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "3d_texture_sdf": {
  "package": "3d_texture_jump_flood",
  "label": "3D texture SDF",
  "inputs": [
   {
    "id": "mask_input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_texture_surface_render": {
  "package": "3d_texture_render",
  "label": "3D texture surface render",
  "inputs": [
   {
    "id": "3d_distance_field",
    "type": "gray",
    "primary": true
   },
   {
    "id": "environment",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "3d_texture_volume_render_light": {
  "package": "3d_texture_render",
  "label": "3D texture volume render",
  "inputs": [
   {
    "id": "3d_signed_distance_field",
    "type": "gray",
    "primary": true
   },
   {
    "id": "density",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "3d_volume_mask": {
  "package": "3d_volume_mask",
  "label": "3D volume mask",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_voronoi": {
  "package": "noise_voronoi",
  "label": "3D Voronoi",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "3d_voronoi_fractal": {
  "package": "noise_voronoi",
  "label": "3D Voronoi fractal",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "Bitmap2Material_2_Light": {
  "package": "bitmaptomaterial_2_light",
  "label": "Bitmap to material light",
  "inputs": [
   {
    "id": "bitmap_diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "metallic_1",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   }
  ]
 },
 "PBR_render": {
  "package": "pbr_render2",
  "label": "PBR render",
  "inputs": [
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "anisotropyLevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "anisotropyAngle",
    "type": "gray",
    "primary": false
   },
   {
    "id": "translucency",
    "type": "gray",
    "primary": false
   },
   {
    "id": "scatteringdistancescale",
    "type": "color",
    "primary": false
   },
   {
    "id": "lens_dirt_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "lens_aperture_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "environment_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "raw_irradiance",
    "type": "color"
   },
   {
    "id": "raw_specular",
    "type": "color"
   },
   {
    "id": "normalws",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "uv",
    "type": "color"
   }
  ]
 },
 "PBR_render_mapping_color": {
  "package": "pbr_render2",
  "label": "PBR render mapping color",
  "inputs": [
   {
    "id": "texture",
    "type": "color",
    "primary": false
   },
   {
    "id": "uv",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "PBR_render_mapping_grayscale": {
  "package": "pbr_render2",
  "label": "PBR render mapping grayscale",
  "inputs": [
   {
    "id": "texture",
    "type": "gray",
    "primary": false
   },
   {
    "id": "uv",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "acescg_to_linear_srgb": {
  "package": "color_space_conversion",
  "label": "ACEScg to linear sRGB",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "acescg_to_srgb": {
  "package": "color_space_conversion",
  "label": "ACEScg to sRGB",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "alveolus": {
  "package": "pattern_alveolus",
  "label": "Alveolus",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "anisotropic_blur": {
  "package": "anisotropic_blur",
  "label": "Anisotropic blur color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Anisotropic_Blur",
    "type": "color"
   }
  ]
 },
 "anisotropic_blur_grayscale": {
  "package": "anisotropic_blur",
  "label": "Anisotropic blur grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Anisotropic_Blur",
    "type": "gray"
   }
  ]
 },
 "anisotropic_kuwahara_color": {
  "package": "anisotropic_kuwahara",
  "label": "Anisotropic Kuwahara color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "anisotropy_angle_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "slope_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "radius_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "direction_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "direction_map",
    "type": "color"
   }
  ]
 },
 "anisotropic_kuwahara_grayscale": {
  "package": "anisotropic_kuwahara",
  "label": "Anisotropic Kuwahara grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "anisotropy_angle_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "slope_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "radius_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "direction_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   },
   {
    "id": "direction_map",
    "type": "color"
   }
  ]
 },
 "anisotropic_noise_v2": {
  "package": "noise_anisotropic_noise_v2",
  "label": "Anisotropic noise",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "ao_cancel": {
  "package": "ao_cancel",
  "label": "AO cancellation",
  "inputs": [
   {
    "id": "color",
    "type": "color",
    "primary": true
   },
   {
    "id": "AO",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "color",
    "type": "color"
   }
  ]
 },
 "apply_color_palette": {
  "package": "quantize_color",
  "label": "Apply color palette",
  "inputs": [
   {
    "id": "id",
    "type": "gray",
    "primary": true
   },
   {
    "id": "palette",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "arc_pavement": {
  "package": "pattern_arc_pavement",
  "label": "Arc pavement",
  "inputs": [
   {
    "id": "pattern_input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "atlas_scatter": {
  "package": "atlas_scatter",
  "label": "Atlas scatter",
  "inputs": [
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "background_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "background_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_distribution_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "shape_scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "shape_rotation_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_offset_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask_random_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "shape_count",
    "type": "value"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "atlas_spliter": {
  "package": "atlas_spliter",
  "label": "Atlas splitter",
  "inputs": [
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "user1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "user2",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   },
   {
    "id": "shape_count",
    "type": "value"
   },
   {
    "id": "user1",
    "type": "gray"
   },
   {
    "id": "user2",
    "type": "gray"
   }
  ]
 },
 "auto_crop_color": {
  "package": "auto_crop",
  "label": "Auto crop color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "auto_crop_grayscale": {
  "package": "auto_crop",
  "label": "Auto crop grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "auto_levels": {
  "package": "auto_levels",
  "label": "Auto levels",
  "inputs": [
   {
    "id": "Input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "gray"
   }
  ]
 },
 "base_color_2_inputs": {
  "package": "mesh_adaptive_base_color",
  "label": "Base color 2 inputs",
  "inputs": [
   {
    "id": "Input_Map",
    "type": "color",
    "primary": true
   },
   {
    "id": "SVG_Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Base_Color",
    "type": "color"
   }
  ]
 },
 "base_color_4_inputs": {
  "package": "mesh_adaptive_base_color",
  "label": "Base color 4 inputs",
  "inputs": [
   {
    "id": "Input_Map",
    "type": "color",
    "primary": true
   },
   {
    "id": "Hue_Shift_SVG_Mask",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Base_Color",
    "type": "color"
   }
  ]
 },
 "base_color_8_inputs": {
  "package": "mesh_adaptive_base_color",
  "label": "Base color 8 inputs",
  "inputs": [
   {
    "id": "Input_Map",
    "type": "color",
    "primary": true
   },
   {
    "id": "Hue_Shift_SVG_Mask",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Base_Color",
    "type": "color"
   }
  ]
 },
 "basecolor_metallic_roughness_converter": {
  "package": "pbr_converter",
  "label": "Base color/metallic/roughness converter",
  "inputs": [
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "specularlevel",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "speuclar_face_color",
    "type": "color"
   },
   {
    "id": "reflection",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "ior",
    "type": "gray"
   },
   {
    "id": "f0",
    "type": "gray"
   }
  ]
 },
 "bevel": {
  "package": "bevel",
  "label": "Bevel",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "custom_curve",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "normal",
    "type": "color"
   }
  ]
 },
 "bevel_smooth": {
  "package": "bevel_smooth",
  "label": "Bevel smooth",
  "inputs": [
   {
    "id": "mask_input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "source_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "distance_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   }
  ]
 },
 "blackbody": {
  "package": "blackbody",
  "label": "Blackbody",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "blue_noise_fast": {
  "package": "blue_noise",
  "label": "Blue noise fast",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "blur_hq": {
  "package": "blur_hq",
  "label": "Blur HQ color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Blur_HQ",
    "type": "color"
   }
  ]
 },
 "blur_hq_grayscale": {
  "package": "blur_hq",
  "label": "Blur HQ grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Blur_HQ",
    "type": "gray"
   }
  ]
 },
 "bnw_spots_1": {
  "package": "noise_bnw_spots_1_v2",
  "label": "BnW spots 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "bnw_spots_2": {
  "package": "noise_bnw_spots_2_v2",
  "label": "BnW spots 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "bnw_spots_3": {
  "package": "noise_bnw_spots_3_v2",
  "label": "BnW spots 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "brick_1": {
  "package": "pattern_brick_1",
  "label": "Brick 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "brick_2": {
  "package": "pattern_brick_2",
  "label": "Brick 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "brick_generator": {
  "package": "pattern_brick_generator",
  "label": "Brick generator",
  "inputs": [],
  "outputs": [
   {
    "id": "Bricks_Generator",
    "type": "gray"
   }
  ]
 },
 "bricks_001": {
  "package": "materials/pbr/bricks_001",
  "label": "Bricks 001",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "bricks_005": {
  "package": "materials/pbr/bricks_005",
  "label": "Bricks 005",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "cardboard_001": {
  "package": "materials/pbr/cardboard_001",
  "label": "Cardboard 001",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "cartesian_to_polar": {
  "package": "cartesian_polar_transformation",
  "label": "Cartesian to polar color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "cartesian_to_polar_grayscale": {
  "package": "cartesian_polar_transformation",
  "label": "Cartesian to polar grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "cells_1": {
  "package": "noise_cells_1_v2",
  "label": "Cells 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "cells_2": {
  "package": "noise_cells_2_v2",
  "label": "Cells 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "cells_3": {
  "package": "noise_cells_3_v2",
  "label": "Cells 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "cells_4": {
  "package": "noise_cells_4_v2",
  "label": "Cells 4",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "channel_mixer": {
  "package": "channel_mixer",
  "label": "Channel mixer",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "color"
   }
  ]
 },
 "checker_1": {
  "package": "pattern_checker_1",
  "label": "Checker 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "chrominance_extract": {
  "package": "chrominance_extract",
  "label": "Chrominance extract",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Chrominance_Extract",
    "type": "color"
   }
  ]
 },
 "clamp_grayscale": {
  "package": "clamp",
  "label": "Clamp grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "clone": {
  "package": "clone",
  "label": "Clone",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Clone",
    "type": "color"
   }
  ]
 },
 "clone_patch": {
  "package": "clone_patch",
  "label": "Clone patch color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "areas",
    "type": "color"
   }
  ]
 },
 "clone_patch_grayscale": {
  "package": "clone_patch",
  "label": "Clone patch grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   },
   {
    "id": "areas",
    "type": "gray"
   }
  ]
 },
 "clouds_1": {
  "package": "noise_clouds_1_v2",
  "label": "Clouds 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "clouds_2": {
  "package": "noise_clouds_2_v2",
  "label": "Clouds 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "clouds_3": {
  "package": "noise_clouds_3_v2",
  "label": "Clouds 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "color": {
  "package": "blend",
  "label": "Color",
  "inputs": [
   {
    "id": "Foreground",
    "type": "color",
    "primary": false
   },
   {
    "id": "Background",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Color",
    "type": "color"
   }
  ]
 },
 "color_burn": {
  "package": "blend",
  "label": "Color burn",
  "inputs": [
   {
    "id": "Foreground",
    "type": "color",
    "primary": false
   },
   {
    "id": "Background",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Color_Burn",
    "type": "color"
   }
  ]
 },
 "color_dodge": {
  "package": "blend",
  "label": "Color dodge",
  "inputs": [
   {
    "id": "Foreground",
    "type": "color",
    "primary": false
   },
   {
    "id": "Background",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Color_Dodge",
    "type": "color"
   }
  ]
 },
 "color_equalizer": {
  "package": "color_equalizer",
  "label": "Color equalizer",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "color_match": {
  "package": "color_match",
  "label": "Color match",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_src_color",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_target_color",
    "type": "color",
    "primary": false
   },
   {
    "id": "mask_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "color_temperature_adjustment": {
  "package": "color_temperature_adjustment",
  "label": "Color temperature adjustment",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "color_to_mask": {
  "package": "color_to_mask_v2",
  "label": "Color to mask",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "color_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "concrete_002": {
  "package": "materials/pbr/concrete_002",
  "label": "Concrete 002",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "concrete_006": {
  "package": "materials/pbr/concrete_006",
  "label": "Concrete 006",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "concrete_010": {
  "package": "materials/pbr/concrete_010",
  "label": "Concrete 010",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "concrete_011": {
  "package": "materials/pbr/concrete_011",
  "label": "Concrete 011",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "concrete_044": {
  "package": "materials/pbr/concrete_044",
  "label": "Concrete 044",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "concrete_070": {
  "package": "materials/pbr/concrete_070",
  "label": "Concrete 070",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "contrast_luminosity": {
  "package": "contrast_luminosity",
  "label": "Contrast/luminosity color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Contrast_Luminosity",
    "type": "color"
   }
  ]
 },
 "contrast_luminosity_grayscale": {
  "package": "contrast_luminosity",
  "label": "Contrast/luminosity grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Contrast_Luminosity",
    "type": "gray"
   }
  ]
 },
 "cracks_weathering": {
  "package": "cracks_weathering_material",
  "label": "Cracks weathering",
  "inputs": [
   {
    "id": "Input_9",
    "type": "color",
    "primary": true
   },
   {
    "id": "Input_13",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_11",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_12",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_14",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_10",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_5",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Diffuse_1",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "Normal",
    "type": "color"
   },
   {
    "id": "Specular",
    "type": "color"
   },
   {
    "id": "Glossiness",
    "type": "gray"
   },
   {
    "id": "Roughness",
    "type": "gray"
   },
   {
    "id": "Metallic",
    "type": "gray"
   },
   {
    "id": "Height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "creased": {
  "package": "noise_creased",
  "label": "Creased",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "create_color_palette_16colors": {
  "package": "quantize_color",
  "label": "Create color palette (16)",
  "inputs": [
   {
    "id": "palette",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "palette",
    "type": "color"
   },
   {
    "id": "palette_color_amount",
    "type": "value"
   }
  ]
 },
 "crop": {
  "package": "crop",
  "label": "Crop color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "area",
    "type": "color"
   }
  ]
 },
 "crop_grayscale": {
  "package": "crop",
  "label": "Crop grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   },
   {
    "id": "area",
    "type": "gray"
   }
  ]
 },
 "cross_section": {
  "package": "cross_section",
  "label": "Cross section",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "crystal_1": {
  "package": "noise_crystal_1",
  "label": "Crystal 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "crystal_2": {
  "package": "noise_crystal_2",
  "label": "Crystal 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "cube_3d": {
  "package": "pattern_cube_3d",
  "label": "Cube 3D",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "cube_3d_gbuffers": {
  "package": "pattern_cube_3d",
  "label": "Cube 3D G-Buffers",
  "inputs": [],
  "outputs": [
   {
    "id": "position",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "depth",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   }
  ]
 },
 "curvature": {
  "package": "curvature",
  "label": "Curvature",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "gray"
   }
  ]
 },
 "curvature_smooth_v2": {
  "package": "curvature_smooth_v2",
  "label": "Curvature smooth",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "curvature",
    "type": "gray"
   },
   {
    "id": "convexity",
    "type": "gray"
   },
   {
    "id": "concavity",
    "type": "gray"
   }
  ]
 },
 "curvature_sobel": {
  "package": "curvature_sobel",
  "label": "Curvature sobel",
  "inputs": [
   {
    "id": "normal",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "details_to_baked_maps": {
  "package": "details_to_baked_maps",
  "label": "Details to baked maps",
  "inputs": [
   {
    "id": "Height",
    "type": "gray",
    "primary": true
   },
   {
    "id": "Baked_Normal_T",
    "type": "color",
    "primary": false
   },
   {
    "id": "Baked_AO",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Baked_Curvature",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Combined_Normal",
    "type": "color"
   },
   {
    "id": "Combined_AO",
    "type": "gray"
   },
   {
    "id": "Combined_Curvature",
    "type": "gray"
   }
  ]
 },
 "difference": {
  "package": "blend",
  "label": "Difference",
  "inputs": [
   {
    "id": "Background",
    "type": "color",
    "primary": false
   },
   {
    "id": "Foreground",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Difference",
    "type": "color"
   }
  ]
 },
 "diffusion_color": {
  "package": "diffusion",
  "label": "Diffusion color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "intensity",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "diffusion_grayscale": {
  "package": "diffusion",
  "label": "Diffusion grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "intensity",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "diffusion_uv": {
  "package": "diffusion",
  "label": "Diffusion UV",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "directional_distance": {
  "package": "directional_distance",
  "label": "Directional distance",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "distance_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "angle_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   }
  ]
 },
 "directional_noise_1": {
  "package": "noise_directional_noise_1_v2",
  "label": "Directional noise 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "directional_noise_2": {
  "package": "noise_directional_noise_2_v2",
  "label": "Directional noise 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "directional_noise_3": {
  "package": "noise_directional_noise_3_v2",
  "label": "Directional noise 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "directional_noise_4": {
  "package": "noise_directional_noise_4_v2",
  "label": "Directional noise 4",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "directional_scratches": {
  "package": "noise_directional_scratches_v2",
  "label": "Directional scratches",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dirt_1": {
  "package": "noise_dirt_1_v2",
  "label": "Dirt 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dirt_2": {
  "package": "noise_dirt_2_v2",
  "label": "Dirt 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dirt_3": {
  "package": "noise_dirt_3_v2",
  "label": "Dirt 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dirt_4": {
  "package": "noise_dirt_4_v2",
  "label": "Dirt 4",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dirt_5": {
  "package": "noise_dirt_5_v2",
  "label": "Dirt 5",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dirt_gradient": {
  "package": "noise_dirt_gradient_v2",
  "label": "Dirt gradient",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "dissolve_2": {
  "package": "blend",
  "label": "Dissolve",
  "inputs": [
   {
    "id": "foreground",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "edge_detect": {
  "package": "edge_detect",
  "label": "Edge detect",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "emboss_with_gloss": {
  "package": "emboss_with_gloss",
  "label": "Emboss with gloss",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Height",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Emboss_With_Gloss",
    "type": "color"
   }
  ]
 },
 "exposure": {
  "package": "exposure",
  "label": "Exposure",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "extend_shape_color": {
  "package": "extend_shape",
  "label": "Extend shape color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "extend_shape_grayscale": {
  "package": "extend_shape",
  "label": "Extend shape grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fabric_002": {
  "package": "materials/pbr/fabric_002",
  "label": "Fabric 002",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "fabric_009": {
  "package": "materials/pbr/fabric_009",
  "label": "Fabric 009",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "fabric_025": {
  "package": "materials/pbr/fabric_025",
  "label": "Fabric 025",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "fabric_weathering": {
  "package": "fabric_weathering_material",
  "label": "Fabric weathering",
  "inputs": [
   {
    "id": "Diffuse_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "color",
    "primary": false
   },
   {
    "id": "Specular_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Height_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "AO",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Normal_Wold_Space",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_12",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "facing_normal": {
  "package": "facing_normal",
  "label": "Facing normal",
  "inputs": [
   {
    "id": "Normal",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Facing_Normal",
    "type": "gray"
   }
  ]
 },
 "fibers_1": {
  "package": "pattern_fibers_1",
  "label": "Fibers 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fibers_2": {
  "package": "pattern_fibers_2",
  "label": "Fibers 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "flood_fill": {
  "package": "flood_fill_2",
  "label": "Flood fill",
  "inputs": [
   {
    "id": "mask",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "referenceMap",
    "type": "color"
   }
  ]
 },
 "flood_fill_to_bbox_size": {
  "package": "flood_fill_2",
  "label": "Flood fill to Bbox size",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "flood_fill_to_color": {
  "package": "flood_fill_2",
  "label": "Flood fill to color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "color_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "flood_fill_to_gradient_2": {
  "package": "flood_fill_2",
  "label": "Flood fill to gradient",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "angle_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "slope_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "flood_fill_to_grayscale": {
  "package": "flood_fill_2",
  "label": "Flood fill to grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "grayscale_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "flood_fill_to_position": {
  "package": "flood_fill_2",
  "label": "Flood fill to position",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "flood_fill_to_random_color": {
  "package": "flood_fill_2",
  "label": "Flood fill to random color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "flood_fill_to_random_grayscale": {
  "package": "flood_fill_2",
  "label": "Flood fill to random grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "floodfill_mapper_color": {
  "package": "floodfill_mapper",
  "label": "Flood fill mapper color",
  "inputs": [
   {
    "id": "bbox",
    "type": "color",
    "primary": true
   },
   {
    "id": "pattern_input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_8",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_distribution_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "luminance_offset_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "color"
   }
  ]
 },
 "floodfill_mapper_grayscale": {
  "package": "floodfill_mapper",
  "label": "Flood fill mapper grayscale",
  "inputs": [
   {
    "id": "bbox",
    "type": "color",
    "primary": true
   },
   {
    "id": "pattern_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_distribution_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "luminance_offset_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "gray"
   }
  ]
 },
 "floodfill_to_index": {
  "package": "floodfill_to_index",
  "label": "Flood fill to index",
  "inputs": [
   {
    "id": "bbox",
    "type": "color",
    "primary": true
   },
   {
    "id": "special_shape_infos",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "shape_index",
    "type": "gray"
   },
   {
    "id": "shape_data_table",
    "type": "color"
   },
   {
    "id": "shape_count",
    "type": "value"
   },
   {
    "id": "shape_data_table_size",
    "type": "value"
   }
  ]
 },
 "fluid": {
  "package": "noise_fluid",
  "label": "Fluid",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fractal_sum_1": {
  "package": "noise_fractal_sum_1_v2",
  "label": "Fractal sum 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fractal_sum_2": {
  "package": "noise_fractal_sum_2_v2",
  "label": "Fractal sum 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fractal_sum_3": {
  "package": "noise_fractal_sum_3_v2",
  "label": "Fractal sum 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fractal_sum_4": {
  "package": "noise_fractal_sum_4_v2",
  "label": "Fractal sum 4",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fractal_sum_base": {
  "package": "noise_fractal_sum_base_v2",
  "label": "Fractal sum base",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fur_1": {
  "package": "noise_fur_1",
  "label": "Fur 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fur_2": {
  "package": "noise_fur_2",
  "label": "Fur 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fur_3": {
  "package": "noise_fur_3",
  "label": "Fur 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "fxaa_color": {
  "package": "fxaa",
  "label": "FXAA color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "fxaa_grayscale": {
  "package": "fxaa",
  "label": "FXAA grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gaussian_1": {
  "package": "pattern_gaussian_1",
  "label": "Gaussian 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gaussian_2": {
  "package": "pattern_gaussian_2",
  "label": "Gaussian 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gaussian_noise": {
  "package": "noise_gaussian_noise_v2",
  "label": "Gaussian noise",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gaussian_spots_1": {
  "package": "noise_gaussian_spots_1_v2",
  "label": "Gaussian spots 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gaussian_spots_2": {
  "package": "noise_gaussian_spots_2_v2",
  "label": "Gaussian spots 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "get_size_color": {
  "package": "value_get_size",
  "label": "Get size color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "value"
   }
  ]
 },
 "get_size_grayscale": {
  "package": "value_get_size",
  "label": "Get size grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "value"
   }
  ]
 },
 "glow": {
  "package": "glow",
  "label": "Glow color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Glow",
    "type": "color"
   }
  ]
 },
 "glow_grayscale": {
  "package": "glow",
  "label": "Glow grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Glow",
    "type": "gray"
   }
  ]
 },
 "gradient_axial": {
  "package": "gradient_axial",
  "label": "Gradient axial",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gradient_axial_reflected": {
  "package": "gradient_axial",
  "label": "Gradient axial reflected",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gradient_circular": {
  "package": "gradient_circular",
  "label": "Gradient circular",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gradient_linear_1": {
  "package": "gradient_linear_1",
  "label": "Gradient linear 1",
  "inputs": [],
  "outputs": [
   {
    "id": "Simple_Gradient",
    "type": "gray"
   }
  ]
 },
 "gradient_linear_2": {
  "package": "gradient_linear_2",
  "label": "Gradient linear 2",
  "inputs": [],
  "outputs": [
   {
    "id": "Simple_Gradient_2",
    "type": "gray"
   }
  ]
 },
 "gradient_linear_3": {
  "package": "gradient_linear_3",
  "label": "Gradient linear 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gradient_radial": {
  "package": "gradient_radial",
  "label": "Gradient radial",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "gravel": {
  "package": "materials/pbr/gravel",
  "label": "Gravel",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "grayscale_conversion_advanced": {
  "package": "grayscale_conversion_advanced",
  "label": "Grayscale conversion advanced",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_concrete": {
  "package": "grunge_concrete",
  "label": "Grunge concrete",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_damas": {
  "package": "grunge_damas",
  "label": "Grunge Damas",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_galvanic_large": {
  "package": "grunge_galvanic_large",
  "label": "Grunge galvanic large",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_galvanic_small": {
  "package": "grunge_galvanic_small",
  "label": "Grunge galvanic small",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_leaks": {
  "package": "grunge_leaks",
  "label": "Grunge leaks",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_leaky_paint": {
  "package": "grunge_leaky_paint",
  "label": "Grunge leaky paint",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_001": {
  "package": "noise_grunge_map_001",
  "label": "Grunge map 001",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_002": {
  "package": "noise_grunge_map_002",
  "label": "Grunge map 002",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_003": {
  "package": "noise_grunge_map_003",
  "label": "Grunge map 003",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_004": {
  "package": "noise_grunge_map_004",
  "label": "Grunge map 004",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_005": {
  "package": "noise_grunge_map_005",
  "label": "Grunge map 005",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_006": {
  "package": "noise_grunge_map_006",
  "label": "Grunge map 006",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_007": {
  "package": "noise_grunge_map_007",
  "label": "Grunge map 007",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_008": {
  "package": "noise_grunge_map_008",
  "label": "Grunge map 008",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_009": {
  "package": "noise_grunge_map_009",
  "label": "Grunge map 009",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_010": {
  "package": "noise_grunge_map_010",
  "label": "Grunge map 010",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_011": {
  "package": "noise_grunge_map_011",
  "label": "Grunge map 011",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_012": {
  "package": "noise_grunge_map_012",
  "label": "Grunge map 012",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_013": {
  "package": "noise_grunge_map_013",
  "label": "Grunge map 013",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_014": {
  "package": "noise_grunge_map_014",
  "label": "Grunge map 014",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_map_015": {
  "package": "noise_grunge_map_015",
  "label": "Grunge map 015",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_rough_dirty": {
  "package": "grunge_rough_dirty",
  "label": "Grunge rough dirty",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_rust_fine": {
  "package": "grunge_rust_fine",
  "label": "Grunge rust fine",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_scratches_dirty": {
  "package": "grunge_scratches_dirty",
  "label": "Grunge scratches dirty",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_scratches_fine": {
  "package": "grunge_scratches_fine",
  "label": "Grunge scratches fine",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_scratches_rough": {
  "package": "grunge_scratches_rough",
  "label": "Grunge scratches rough",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_shavings": {
  "package": "grunge_shavings",
  "label": "Grunge shavings",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_splashes_dusty": {
  "package": "grunge_splashes_dusty",
  "label": "Grunge splashes dusty",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_spots": {
  "package": "grunge_spots",
  "label": "Grunge spots",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "grunge_spots_dirty": {
  "package": "grunge_spots_dirty",
  "label": "Grunge spots dirty",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "hald_clut": {
  "package": "hald_clut",
  "label": "Hald CLUT",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "lut",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "hbao": {
  "package": "hbao_2",
  "label": "Ambient occlusion (HBAO)",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "hdr_exposure_preview": {
  "package": "hdr_exposure_preview",
  "label": "Exposure preview",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "hdr_merge_2": {
  "package": "hdr_merge",
  "label": "HDR merge",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_9",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_10",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_11",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_12",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_13",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_14",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_15",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_16",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "hdr_range_viewer": {
  "package": "hdr_range_viewer",
  "label": "HDR range viewer color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "hdr_range_viewer_grayscale": {
  "package": "hdr_range_viewer",
  "label": "HDR range viewer grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "height_blend": {
  "package": "height_blend",
  "label": "Height blend",
  "inputs": [
   {
    "id": "height_top",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_bottom",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "blended_height",
    "type": "gray"
   },
   {
    "id": "height_mask",
    "type": "gray"
   }
  ]
 },
 "height_extrude": {
  "package": "height_extrude",
  "label": "Height extrude",
  "inputs": [
   {
    "id": "height",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "depth",
    "type": "gray"
   },
   {
    "id": "normal",
    "type": "color"
   }
  ]
 },
 "height_map_frequencies_mapper": {
  "package": "height_map_frequencies_mapper",
  "label": "Height map frequencies mapper",
  "inputs": [
   {
    "id": "Height",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Displacement",
    "type": "gray"
   },
   {
    "id": "Relief_Parallax",
    "type": "gray"
   }
  ]
 },
 "height_normal_blend": {
  "package": "height_normal_blend",
  "label": "Height normal blender",
  "inputs": [
   {
    "id": "Height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Normal",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Normal",
    "type": "color"
   }
  ]
 },
 "height_to_normal_world_units_2": {
  "package": "height_to_normal_world_units",
  "label": "Height to normal world units",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "hemisphere": {
  "package": "pattern_shape",
  "label": null,
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "highpass": {
  "package": "highpass",
  "label": "Highpass color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Highpass",
    "type": "color"
   }
  ]
 },
 "highpass_grayscale": {
  "package": "highpass",
  "label": "Highpass grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Highpass",
    "type": "gray"
   }
  ]
 },
 "histogram_compute": {
  "package": "histogram_tools",
  "label": "Histogram compute",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "histogram",
    "type": "gray"
   },
   {
    "id": "cdf",
    "type": "gray"
   }
  ]
 },
 "histogram_equalize": {
  "package": "histogram_tools",
  "label": "Histogram equalize",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "histogram_range": {
  "package": "histogram_range",
  "label": "Histogram range",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "histogram_render": {
  "package": "histogram_tools",
  "label": "Histogram render",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "histogram_scan": {
  "package": "histogram_scan",
  "label": "Histogram scan",
  "inputs": [
   {
    "id": "Input_1",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "gray"
   }
  ]
 },
 "histogram_scan_non_uniform": {
  "package": "histogram_scan_non_uniform",
  "label": "Non-uniform histogram scan",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "position_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "contrast_1",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "histogram_select": {
  "package": "histogram_select",
  "label": "Histogram select",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "histogram_shift": {
  "package": "histogram_shift",
  "label": "Histogram shift",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "id_to_mask_grayscale": {
  "package": "id_to_mask",
  "label": "ID to mask grayscale",
  "inputs": [
   {
    "id": "id",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "invert": {
  "package": "invert",
  "label": "Invert color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Invert_Color",
    "type": "color"
   }
  ]
 },
 "invert_grayscale": {
  "package": "invert",
  "label": "Invert grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Invert_Grayscale",
    "type": "gray"
   }
  ]
 },
 "leather_weathering": {
  "package": "leather_weathering_material",
  "label": "Leather weathering",
  "inputs": [
   {
    "id": "Diffuse_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "color",
    "primary": false
   },
   {
    "id": "Specular_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Height_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "AO",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Normal_Wold_Space",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_12",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "lighting_cancel_hf": {
  "package": "lighting_cancel_hf",
  "label": "Lighting cancel high frequencies",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Lighting_Cancel_HF",
    "type": "color"
   }
  ]
 },
 "lighting_cancel_lf": {
  "package": "lighting_cancel_lf",
  "label": "Lighting cancel low frequencies",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Lighting_Cancel_LF",
    "type": "color"
   }
  ]
 },
 "linear_burn": {
  "package": "blend",
  "label": "Linear burn",
  "inputs": [
   {
    "id": "Foreground",
    "type": "color",
    "primary": false
   },
   {
    "id": "Background",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Linear_Burn",
    "type": "color"
   }
  ]
 },
 "linear_srgb_to_acescg": {
  "package": "color_space_conversion",
  "label": "Linear sRGB to ACEScg",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "linear_srgb_to_srgb": {
  "package": "color_space_conversion",
  "label": "Linear sRGB to sRGB color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "linear_srgb_to_srgb_grayscale": {
  "package": "color_space_conversion",
  "label": "Linear sRGB to sRGB grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "liquid": {
  "package": "noise_liquid",
  "label": "Liquid",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "luminance_highpass": {
  "package": "luminance_highpass",
  "label": "Luminance highpass",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Luminance_Highpass",
    "type": "color"
   }
  ]
 },
 "luminosity": {
  "package": "blend",
  "label": "Luminosity",
  "inputs": [
   {
    "id": "Foreground",
    "type": "color",
    "primary": false
   },
   {
    "id": "Background",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Exclusion",
    "type": "color"
   }
  ]
 },
 "make_it_tile_patch": {
  "package": "make_it_tile_patch",
  "label": "Make it tile patch color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Make_It_Tile_Patch",
    "type": "color"
   }
  ]
 },
 "make_it_tile_patch_grayscale": {
  "package": "make_it_tile_patch_grayscale",
  "label": "Make it tile patch grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Make_It_Tile_Patch",
    "type": "gray"
   }
  ]
 },
 "make_it_tile_photo": {
  "package": "make_it_tile_photo",
  "label": "Make it tile photo color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Make_It_Tile_Photo",
    "type": "color"
   }
  ]
 },
 "make_it_tile_photo_grayscale": {
  "package": "make_it_tile_photo_grayscale",
  "label": "Make it tile photo grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Make_It_Tile_Photo",
    "type": "gray"
   }
  ]
 },
 "mask_to_paths_2": {
  "package": "paths_tools",
  "label": "Mask to paths",
  "inputs": [
   {
    "id": "mask",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   },
   {
    "id": "preview",
    "type": "color"
   }
  ]
 },
 "material_adjustment_blend": {
  "package": "material_adjustment_blend",
  "label": "Material adjustment blend",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_20",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_21",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambientocclusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "material_blend": {
  "package": "material_blend",
  "label": "Material blend",
  "inputs": [
   {
    "id": "material2_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "material1_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_20",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_21",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambientocclusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "material_clone_patch": {
  "package": "clone_patch",
  "label": "Material clone patch",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "specular_level",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "anisotropy_level",
    "type": "gray",
    "primary": false
   },
   {
    "id": "anisotropy_angle",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specular_level",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   },
   {
    "id": "anisotropy_level",
    "type": "gray"
   },
   {
    "id": "anisotropy_angle",
    "type": "gray"
   },
   {
    "id": "mask",
    "type": "gray"
   },
   {
    "id": "areas_basecolor",
    "type": "color"
   },
   {
    "id": "areas_normal",
    "type": "color"
   },
   {
    "id": "areas_height",
    "type": "gray"
   }
  ]
 },
 "material_color_blend": {
  "package": "material_color_blend",
  "label": "Material color blend",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_20",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_21",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambientocclusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "material_crop": {
  "package": "crop",
  "label": "Material crop",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "specular_level",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "anisotropy_level",
    "type": "gray",
    "primary": false
   },
   {
    "id": "anisotropy_angle",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specular_level",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   },
   {
    "id": "anisotropy_level",
    "type": "gray"
   },
   {
    "id": "anisotropy_angle",
    "type": "gray"
   },
   {
    "id": "mask",
    "type": "gray"
   },
   {
    "id": "area",
    "type": "color"
   }
  ]
 },
 "material_height_blend": {
  "package": "material_height_blend",
  "label": "Material height blend",
  "inputs": [
   {
    "id": "material2_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "material1_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_opacity",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambientocclusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   },
   {
    "id": "height_mask",
    "type": "gray"
   }
  ]
 },
 "material_mesh_data_blender": {
  "package": "material_mesh_data_blender",
  "label": "Material mesh data blender",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "normal_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_10",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "vertex_color",
    "type": "color",
    "primary": false
   },
   {
    "id": "normalWS",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "material_selector": {
  "package": "material_selector",
  "label": "Material selector",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "material_switch": {
  "package": "material_switch",
  "label": "Material switch",
  "inputs": [
   {
    "id": "material2_diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "material2_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_opacity",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambientocclusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "material_transform": {
  "package": "material_transform",
  "label": "Material transform",
  "inputs": [
   {
    "id": "Input_12",
    "type": "color",
    "primary": true
   },
   {
    "id": "Input_14",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_11",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_15",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_20",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_18",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_13",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_16",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_21",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_10",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_19",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_17",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "emissive",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "median_filter_color": {
  "package": "median_filter",
  "label": "Median filter color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "median_filter_grayscale": {
  "package": "median_filter",
  "label": "Median filter grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "mesh_1": {
  "package": "pattern_mesh_1",
  "label": "Mesh 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "mesh_2": {
  "package": "pattern_mesh_2",
  "label": "Mesh 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "mesh_data_combiner": {
  "package": "mesh_data_combiner",
  "label": "Mesh data combiner",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": true
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position_grayscale",
    "type": "gray",
    "primary": false
   },
   {
    "id": "thickness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "position",
    "type": "color",
    "primary": false
   },
   {
    "id": "uv_masks",
    "type": "color",
    "primary": false
   },
   {
    "id": "vertex_color",
    "type": "color",
    "primary": false
   },
   {
    "id": "direction",
    "type": "color",
    "primary": false
   },
   {
    "id": "normalWS",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "curvature",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "position_grayscale",
    "type": "gray"
   },
   {
    "id": "thickness",
    "type": "gray"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "position",
    "type": "color"
   },
   {
    "id": "uv_masks",
    "type": "color"
   },
   {
    "id": "vertex_color",
    "type": "color"
   },
   {
    "id": "direction",
    "type": "color"
   },
   {
    "id": "normalWS",
    "type": "color"
   }
  ]
 },
 "messy_fibers_1": {
  "package": "noise_messy_fibers_1_v2",
  "label": "Messy fibers 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "messy_fibers_2": {
  "package": "noise_messy_fibers_2_v2",
  "label": "Messy fibers 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "messy_fibers_3": {
  "package": "noise_messy_fibers_3_v2",
  "label": "Messy fibers 3",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "metal_002": {
  "package": "materials/pbr/metal_002",
  "label": "Metal 002",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "metal_003": {
  "package": "materials/pbr/metal_003",
  "label": "Metal 003",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "metal_006": {
  "package": "materials/pbr/metal_006",
  "label": "Metal 006",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "metal_plate_001": {
  "package": "materials/pbr/metal_plate_001",
  "label": "Metal plate 001",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "metal_plate_004": {
  "package": "materials/pbr/metal_plate_004",
  "label": "Metal plate 004",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "mg_bottom_to_top": {
  "package": "mg_bottom_to_top",
  "label": "Bottom to top",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   },
   {
    "id": "Input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_cloth_wear": {
  "package": "mg_cloth_wear",
  "label": "Cloth wear",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_dirt": {
  "package": "mg_dirt",
  "label": "Dirt",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position",
    "type": "color",
    "primary": false
   },
   {
    "id": "world_space_normals",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_dripping_rust": {
  "package": "mg_dripping_rust",
  "label": "Dripping rust",
  "inputs": [
   {
    "id": "ambientOcclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "position",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask_1",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_dust": {
  "package": "mg_dust",
  "label": "Dust",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": true
   },
   {
    "id": "normalWS",
    "type": "color",
    "primary": false
   },
   {
    "id": "noise",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_blur": {
  "package": "mg_edge_blur",
  "label": "Edge blur",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_damages": {
  "package": "mg_edge_damages",
  "label": "Edge damages",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_dirt": {
  "package": "mg_edge_dirt",
  "label": "Edge dirt",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "variation_mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_notch": {
  "package": "mg_edge_notch",
  "label": "Edge notch",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_select": {
  "package": "mg_edge_select",
  "label": "Edge select",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_speckle": {
  "package": "mg_edge_speckle",
  "label": "Edge speckle",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "variation_mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_edge_wear": {
  "package": "mg_edge_wear",
  "label": "Edge wear",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_fiber_glass_edge_wear": {
  "package": "mg_fiber_glass_edge_wear",
  "label": "Fiber glass edge wear",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position",
    "type": "color",
    "primary": false
   },
   {
    "id": "normalWS",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_grease": {
  "package": "mg_grease",
  "label": "Grease",
  "inputs": [
   {
    "id": "thickness",
    "type": "gray",
    "primary": true
   },
   {
    "id": "noise",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_ground_dirt": {
  "package": "mg_ground_dirt",
  "label": "Ground dirt",
  "inputs": [
   {
    "id": "position",
    "type": "gray",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_leaks": {
  "package": "mg_leaks",
  "label": "Leaks",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position",
    "type": "gray",
    "primary": true
   },
   {
    "id": "normalws",
    "type": "color",
    "primary": false
   },
   {
    "id": "variation_mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_leather_wear": {
  "package": "mg_leather_wear",
  "label": "Leather wear",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_light": {
  "package": "mg_light",
  "label": "Light",
  "inputs": [
   {
    "id": "normalWS",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "mg_mask_builder_2": {
  "package": "mg_mask_builder",
  "label": "Mask builder",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": true
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position",
    "type": "color",
    "primary": false
   },
   {
    "id": "normalWS",
    "type": "color",
    "primary": false
   },
   {
    "id": "grunge",
    "type": "gray",
    "primary": false
   },
   {
    "id": "grunge2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "scatter",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "gray"
   }
  ]
 },
 "mg_metal_edge_wear": {
  "package": "mg_metal_edge_wear",
  "label": "Metal edge wear",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "position",
    "type": "color",
    "primary": false
   },
   {
    "id": "normalWS",
    "type": "color",
    "primary": false
   },
   {
    "id": "input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_paint_wear": {
  "package": "mg_paint_wear",
  "label": "Paint wear",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "variation_mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_selective_dirt": {
  "package": "mg_selective_dirt",
  "label": "Selective dirt",
  "inputs": [
   {
    "id": "curvature",
    "type": "gray",
    "primary": true
   },
   {
    "id": "variation_mask",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_sun_bleach": {
  "package": "mg_sun_bleach",
  "label": "Sun bleach",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "normalws",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "mg_surface_brush": {
  "package": "mg_surface_brush",
  "label": "Surface brush",
  "inputs": [
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position",
    "type": "gray",
    "primary": false
   },
   {
    "id": "world_space_normal",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "microscope_view": {
  "package": "noise_microscope_view",
  "label": "Microscope view",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "min_max": {
  "package": "min_max",
  "label": "Min max",
  "inputs": [
   {
    "id": "Input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "min",
    "type": "value"
   },
   {
    "id": "max",
    "type": "value"
   }
  ]
 },
 "mirror": {
  "package": "mirror",
  "label": "Mirror color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "mirror_grayscale": {
  "package": "mirror",
  "label": "Mirror grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "mlv_color": {
  "package": "mean_of_least_variance",
  "label": "MLV color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "mlv_grayscale": {
  "package": "mean_of_least_variance",
  "label": "MLV grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "modify_color_palette": {
  "package": "quantize_color",
  "label": "Modify color palette",
  "inputs": [
   {
    "id": "id",
    "type": "gray",
    "primary": true
   },
   {
    "id": "palette",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "palette",
    "type": "color"
   }
  ]
 },
 "moisture_noise_1": {
  "package": "noise_moisture_noise_1_v2",
  "label": "Moisture noise 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "moisture_noise_2": {
  "package": "noise_moisture_noise_2",
  "label": "Moisture noise 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "mosaic": {
  "package": "mosaic",
  "label": "Mosaic color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Effect",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Mosaic",
    "type": "color"
   }
  ]
 },
 "mosaic_grayscale": {
  "package": "mosaic",
  "label": "Mosaic grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   },
   {
    "id": "Effect",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Mosaic",
    "type": "gray"
   }
  ]
 },
 "moss_weathering": {
  "package": "moss_weathering_material",
  "label": "Moss weathering",
  "inputs": [
   {
    "id": "Input_2",
    "type": "color",
    "primary": true
   },
   {
    "id": "Input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_9",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_11",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_10",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_12",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "ambient_Oolusion",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   }
  ]
 },
 "multi_clone_patch": {
  "package": "clone_patch",
  "label": "Multiclone patch color",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output_1",
    "type": "color"
   },
   {
    "id": "output_2",
    "type": "color"
   },
   {
    "id": "output_3",
    "type": "color"
   },
   {
    "id": "output_4",
    "type": "color"
   },
   {
    "id": "output_5",
    "type": "color"
   },
   {
    "id": "output_6",
    "type": "color"
   },
   {
    "id": "output_7",
    "type": "color"
   },
   {
    "id": "output_8",
    "type": "color"
   },
   {
    "id": "areas",
    "type": "color"
   }
  ]
 },
 "multi_clone_patch_grayscale": {
  "package": "clone_patch",
  "label": "Multiclone patch grayscale",
  "inputs": [
   {
    "id": "input_1",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output_1",
    "type": "gray"
   },
   {
    "id": "output_2",
    "type": "gray"
   },
   {
    "id": "output_3",
    "type": "gray"
   },
   {
    "id": "output_4",
    "type": "gray"
   },
   {
    "id": "output_5",
    "type": "gray"
   },
   {
    "id": "output_6",
    "type": "gray"
   },
   {
    "id": "output_7",
    "type": "gray"
   },
   {
    "id": "output_8",
    "type": "gray"
   },
   {
    "id": "areas",
    "type": "gray"
   }
  ]
 },
 "multi_color_equalizer": {
  "package": "color_equalizer",
  "label": "Multicolor equalizer",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   },
   {
    "id": "mask_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output_1",
    "type": "color"
   },
   {
    "id": "output_2",
    "type": "color"
   },
   {
    "id": "output_3",
    "type": "color"
   },
   {
    "id": "output_4",
    "type": "color"
   },
   {
    "id": "output_5",
    "type": "color"
   },
   {
    "id": "output_6",
    "type": "color"
   },
   {
    "id": "output_7",
    "type": "color"
   },
   {
    "id": "output_8",
    "type": "color"
   }
  ]
 },
 "multi_crop": {
  "package": "crop",
  "label": "Multicrop color",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output_1",
    "type": "color"
   },
   {
    "id": "output_2",
    "type": "color"
   },
   {
    "id": "output_3",
    "type": "color"
   },
   {
    "id": "output_4",
    "type": "color"
   },
   {
    "id": "output_5",
    "type": "color"
   },
   {
    "id": "output_6",
    "type": "color"
   },
   {
    "id": "output_7",
    "type": "color"
   },
   {
    "id": "output_8",
    "type": "color"
   },
   {
    "id": "area",
    "type": "color"
   }
  ]
 },
 "multi_crop_grayscale": {
  "package": "crop",
  "label": "Multicrop grayscale",
  "inputs": [
   {
    "id": "input_1",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output_1",
    "type": "gray"
   },
   {
    "id": "output_2",
    "type": "gray"
   },
   {
    "id": "output_3",
    "type": "gray"
   },
   {
    "id": "output_4",
    "type": "gray"
   },
   {
    "id": "output_5",
    "type": "gray"
   },
   {
    "id": "output_6",
    "type": "gray"
   },
   {
    "id": "output_7",
    "type": "gray"
   },
   {
    "id": "output_8",
    "type": "gray"
   },
   {
    "id": "area",
    "type": "gray"
   }
  ]
 },
 "multi_directional_warp_color": {
  "package": "multi_directional_warp",
  "label": "Multidir. warp color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "intensity_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "multi_directional_warp_grayscale": {
  "package": "multi_directional_warp",
  "label": "Multidir. warp grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "intensity_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "multi_material_blend": {
  "package": "multi_material_blend",
  "label": "Multimaterial blend",
  "inputs": [
   {
    "id": "material16_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material16_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_123",
    "type": "color",
    "primary": false
   },
   {
    "id": "material16_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material16_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material16_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material16_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material16_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material16_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material16_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material16_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material16_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material15_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_124",
    "type": "color",
    "primary": false
   },
   {
    "id": "material15_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material15_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material15_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material15_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material14_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_126",
    "type": "color",
    "primary": false
   },
   {
    "id": "material14_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material14_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material14_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material14_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material13_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material13_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material13_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material13_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material13_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material13_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material12_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material12_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material12_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material12_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material12_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material12_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material11_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material11_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material11_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material11_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material11_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material11_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material10_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material10_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material10_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material10_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material10_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material10_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material9_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material9_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material9_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material9_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material9_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material9_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material8_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material8_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material8_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material8_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material8_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material8_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material7_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material7_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material7_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material7_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material7_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material7_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material6_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material6_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material6_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material6_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material6_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material6_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material5_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material5_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material5_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material5_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material5_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material5_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material4_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material4_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material4_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material4_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material4_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material4_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material3_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material3_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material3_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material3_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material3_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material3_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material2_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material2_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "material1_basecolor",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "material1_glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_specularlevel",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_ambientocclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "material1_opacity",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_160",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "Normal",
    "type": "color"
   },
   {
    "id": "Specular",
    "type": "color"
   },
   {
    "id": "Emissive",
    "type": "color"
   },
   {
    "id": "Glossiness",
    "type": "gray"
   },
   {
    "id": "Roughness",
    "type": "gray"
   },
   {
    "id": "Metallic",
    "type": "gray"
   },
   {
    "id": "specularlevel",
    "type": "gray"
   },
   {
    "id": "AmbientOcclusion",
    "type": "gray"
   },
   {
    "id": "Height",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "multi_switch": {
  "package": "blend_switch",
  "label": "Multiswitch color",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_9",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_10",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_11",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_12",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_13",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_14",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_15",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_16",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_17",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_18",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_19",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_20",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "multi_switch_grayscale": {
  "package": "blend_switch",
  "label": "Multiswitch grayscale",
  "inputs": [
   {
    "id": "input_1",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_9",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_10",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_11",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_12",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_13",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_14",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_15",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_16",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_17",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_18",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_19",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_20",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "multiangle_to_albedo": {
  "package": "multiangle_to_albedo",
  "label": "Multiangle to albedo",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "albedo",
    "type": "color"
   }
  ]
 },
 "multiangle_to_normal": {
  "package": "multiangle_to_normal",
  "label": "Multiangle to normal",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "normal",
    "type": "color"
   }
  ]
 },
 "nadir_extract": {
  "package": "panorama_nadir_extract",
  "label": "Nadir extract",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "noise_upscale_1": {
  "package": "noise_upscale_1",
  "label": "Noise upscale 1",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Noise_ResolutionX2",
    "type": "gray"
   }
  ]
 },
 "noise_upscale_2": {
  "package": "noise_upscale_2",
  "label": "Noise upscale 2",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Noise_ResolutionX2_2",
    "type": "gray"
   }
  ]
 },
 "noise_upscale_3": {
  "package": "noise_upscale_3",
  "label": "Noise upscale 3",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Noise_ResolutionX2_3",
    "type": "gray"
   }
  ]
 },
 "non_square_transform": {
  "package": "non_square_transform",
  "label": "Non-square transform color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "non_square_transform_greyscale": {
  "package": "non_square_transform",
  "label": "Non-square transform grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "non_uniform_blur": {
  "package": "non_uniform_blur",
  "label": "Non-uniform blur color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Effect",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Non_Uniform_Blur",
    "type": "color"
   }
  ]
 },
 "non_uniform_blur_grayscale": {
  "package": "non_uniform_blur",
  "label": "Non-uniform blur grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   },
   {
    "id": "Effect",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Non_Uniform_Blur",
    "type": "gray"
   }
  ]
 },
 "non_uniform_directional_warp_color": {
  "package": "non_uniform_directional_warp",
  "label": "Non-uniform dir. warp color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "intensity_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "warp_angle_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "non_uniform_directional_warp_grayscale": {
  "package": "non_uniform_directional_warp",
  "label": "Non-uniform dir. warp grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "intensity_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "warp_angle_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "non_uniform_rotation_color": {
  "package": "non_uniform_rotation",
  "label": "Non-uniform rotation color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "rotation_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_pivot_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "non_uniform_rotation_grayscale": {
  "package": "non_uniform_rotation",
  "label": "Non-uniform rotation grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "rotation_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_pivot_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "normal_blend": {
  "package": "normal_blend",
  "label": "Normal blend",
  "inputs": [
   {
    "id": "NormalFG",
    "type": "color",
    "primary": false
   },
   {
    "id": "NormalBG",
    "type": "color",
    "primary": true
   },
   {
    "id": "Mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Normal_Blend",
    "type": "color"
   }
  ]
 },
 "normal_color": {
  "package": "normal_color",
  "label": "Normal color",
  "inputs": [],
  "outputs": [
   {
    "id": "Normal_Color",
    "type": "color"
   }
  ]
 },
 "normal_combine": {
  "package": "normal_combine",
  "label": "Normal combine",
  "inputs": [
   {
    "id": "Input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "normal",
    "type": "color"
   }
  ]
 },
 "normal_intensity": {
  "package": "normal_intensity",
  "label": "Normal intensity",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "normal_invert": {
  "package": "normal_invert",
  "label": "Normal invert",
  "inputs": [
   {
    "id": "Normal",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "normal",
    "type": "color"
   }
  ]
 },
 "normal_normalise": {
  "package": "normal_normalise",
  "label": "Normal normalize",
  "inputs": [
   {
    "id": "Normal",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Normalise",
    "type": "color"
   }
  ]
 },
 "normal_sobel_2": {
  "package": "normal_sobel",
  "label": "Normal sobel",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "normal_to_height": {
  "package": "normal_to_height_2",
  "label": "Normal to height",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "height",
    "type": "gray"
   }
  ]
 },
 "normal_to_height_hq": {
  "package": "normal_to_height_hq",
  "label": "Normal to height HQ",
  "inputs": [
   {
    "id": "normal",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "height",
    "type": "gray"
   }
  ]
 },
 "normal_transform": {
  "package": "normal_transform",
  "label": "Normal transform",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "normal_uncombine": {
  "package": "normal_uncombine",
  "label": "Normal uncombine",
  "inputs": [
   {
    "id": "normal",
    "type": "color",
    "primary": true
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "guessed_intensity",
    "type": "value"
   }
  ]
 },
 "normal_vector_rotation": {
  "package": "normal_vector_rotation",
  "label": "Normal vector rotation",
  "inputs": [
   {
    "id": "Normal",
    "type": "color",
    "primary": true
   },
   {
    "id": "rotation_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Normal",
    "type": "color"
   }
  ]
 },
 "old_painted_planks": {
  "package": "materials/pbr/old_painted_planks",
  "label": "Old painted planks",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "painted_metal_weathering": {
  "package": "painted_metal_weathering_material",
  "label": "Metal weathering",
  "inputs": [
   {
    "id": "Diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Normal_High_Poly_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Normal_Wold_Space",
    "type": "color",
    "primary": false
   },
   {
    "id": "AO",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_12",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "Specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "panorama_3d_position": {
  "package": "panorama_position",
  "label": "Panorama 3D position",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_gradient_2_points": {
  "package": "panorama_gradients",
  "label": "Gradient 2 points",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_gradient_linear": {
  "package": "panorama_gradients",
  "label": "Gradient linear",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_line_light": {
  "package": "panorama_shape",
  "label": "Line light",
  "inputs": [
   {
    "id": "background_image_input",
    "type": "color",
    "primary": true
   },
   {
    "id": "shape_image_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_image_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_nadir_patch": {
  "package": "panorama_nadir_patch",
  "label": "Nadir patch",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "mask_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_physical_sun_sky": {
  "package": "panorama_physical_sun_sky",
  "label": "Physical sun/sky",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_plane_light": {
  "package": "panorama_shape",
  "label": "Plane light",
  "inputs": [
   {
    "id": "background_image_input",
    "type": "color",
    "primary": true
   },
   {
    "id": "shape_image_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_image_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_rotation": {
  "package": "panorama_rotation",
  "label": "Panorama rotation",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_shape": {
  "package": "panorama_shape",
  "label": "Panorama shape",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_shape_2": {
  "package": "panorama_shape",
  "label": "Shape light",
  "inputs": [
   {
    "id": "background_image_input",
    "type": "color",
    "primary": true
   },
   {
    "id": "shape_image_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_sphere_light": {
  "package": "panorama_shape",
  "label": "Sphere light",
  "inputs": [
   {
    "id": "background_image_input",
    "type": "color",
    "primary": true
   },
   {
    "id": "sphere_image_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "panorama_straighten_horizon": {
  "package": "panorama_straighten_horizon",
  "label": "Straighten horizon",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "paper_005": {
  "package": "materials/pbr/paper_005",
  "label": "Paper 005",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "opacity",
    "type": "gray"
   }
  ]
 },
 "path_to_spline": {
  "package": "paths_tools",
  "label": "Paths to spline",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "paths_polygon": {
  "package": "paths_tools",
  "label": "Paths polygon",
  "inputs": [],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "paths_trace": {
  "package": "paths_tools",
  "label": "Paths preview",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "tracing",
    "type": "color"
   }
  ]
 },
 "paths_warp": {
  "package": "paths_tools",
  "label": "Paths warp",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   },
   {
    "id": "gradient",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "pbr_albedo_safe_color": {
  "package": "pbr_albedo_safe_color",
  "label": "PBR albedo safe color",
  "inputs": [
   {
    "id": "basecolor_diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "input",
    "type": "color"
   }
  ]
 },
 "pbr_base_material": {
  "package": "pbr_base_material",
  "label": "Base material",
  "inputs": [
   {
    "id": "diffuse_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "basecolor_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "normal_input",
    "type": "color",
    "primary": true
   },
   {
    "id": "specular_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambientOcclusion_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "grunge_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambientOcclusion",
    "type": "gray"
   }
  ]
 },
 "pbr_basecolor_metallic_validate_2": {
  "package": "pbr_basecolor_metallic_validate",
  "label": "PBR base color / metallic validate",
  "inputs": [
   {
    "id": "baseColor",
    "type": "color",
    "primary": true
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "baseColor",
    "type": "color"
   }
  ]
 },
 "pbr_dielectric_F0": {
  "package": "pbr_dielectric_F0",
  "label": "PBR dielectric F0",
  "inputs": [],
  "outputs": [
   {
    "id": "specular",
    "type": "color"
   }
  ]
 },
 "pbr_metal_reflectance": {
  "package": "pbr_metal_reflectance",
  "label": "PBR metal reflectance",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "perlin_noise": {
  "package": "noise_perlin_noise_v2",
  "label": "Perlin noise",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "plasma": {
  "package": "noise_plasma",
  "label": "Plasma",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "point_list": {
  "package": "spline_tools",
  "label": "Point list",
  "inputs": [
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   },
   {
    "id": "point_list_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "preview",
    "type": "gray"
   },
   {
    "id": "point_list",
    "type": "color"
   },
   {
    "id": "point_number",
    "type": "value"
   }
  ]
 },
 "polar_to_cartesian": {
  "package": "cartesian_polar_transformation",
  "label": "Polar to cartesian color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "polar_to_cartesian_grayscale": {
  "package": "cartesian_polar_transformation",
  "label": "Polar to cartesian grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "polygon_1": {
  "package": "pattern_polygon_1",
  "label": "Polygon 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "polygon_2": {
  "package": "pattern_polygon_2",
  "label": "Polygon 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "pow": {
  "package": "pow",
  "label": "Pow color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "pow_grayscale": {
  "package": "pow",
  "label": "Pow grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "premult_to_straight": {
  "package": "pre_multiply_straight",
  "label": "Premultiplied to straight",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "quad_transform": {
  "package": "quad_transform",
  "label": "Quad transform color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "quad_transform_grayscale": {
  "package": "quad_transform",
  "label": "Quad transform grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "quad_transform_path": {
  "package": "paths_tools",
  "label": "Quad transform on path",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "quantize": {
  "package": "quantize",
  "label": "Quantize color (Simple)",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Quantize",
    "type": "color"
   }
  ]
 },
 "quantize_color": {
  "package": "quantize_color",
  "label": "Quantize color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "id",
    "type": "gray"
   },
   {
    "id": "palette",
    "type": "color"
   },
   {
    "id": "palette_color_amount",
    "type": "value"
   }
  ]
 },
 "quantize_grayscale": {
  "package": "quantize_2",
  "label": "Quantize grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "curve_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "radial_blur": {
  "package": "radial_blur",
  "label": "Radial blur color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "radial_blur_grayscale": {
  "package": "radial_blur",
  "label": "Radial blur grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "reaction_diffusion": {
  "package": "reaction_diffusion",
  "label": "Reaction diffusion fast",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Output",
    "type": "gray"
   }
  ]
 },
 "replace_color": {
  "package": "replace_color",
  "label": "Replace color",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "ToTargetColor",
    "type": "color"
   }
  ]
 },
 "replace_color_range": {
  "package": "replace_color",
  "label": "Replace color range",
  "inputs": [
   {
    "id": "Input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "ToTargetColorRange",
    "type": "color"
   }
  ]
 },
 "rgb-a_merge": {
  "package": "rgb-a_merge",
  "label": "Alpha merge",
  "inputs": [
   {
    "id": "RGB",
    "type": "color",
    "primary": true
   },
   {
    "id": "A",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "RGB-A_Merge",
    "type": "color"
   }
  ]
 },
 "rgb-a_split": {
  "package": "rgb-a_split",
  "label": "Alpha split",
  "inputs": [
   {
    "id": "RGBA",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "RGB",
    "type": "color"
   },
   {
    "id": "A",
    "type": "gray"
   }
  ]
 },
 "rgba_merge": {
  "package": "rgba_merge",
  "label": "RGBA merge",
  "inputs": [
   {
    "id": "R",
    "type": "gray",
    "primary": true
   },
   {
    "id": "G",
    "type": "gray",
    "primary": false
   },
   {
    "id": "B",
    "type": "gray",
    "primary": false
   },
   {
    "id": "A",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "RGBA_Merge",
    "type": "color"
   }
  ]
 },
 "rgba_split": {
  "package": "rgba_split",
  "label": "RGBA split",
  "inputs": [
   {
    "id": "RGBA",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "R",
    "type": "gray"
   },
   {
    "id": "G",
    "type": "gray"
   },
   {
    "id": "B",
    "type": "gray"
   },
   {
    "id": "A",
    "type": "gray"
   }
  ]
 },
 "rock_weathering": {
  "package": "rock_weathering_material",
  "label": "Rock weathering",
  "inputs": [
   {
    "id": "Diffuse",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input",
    "type": "color",
    "primary": false
   },
   {
    "id": "Specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "AO",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Normal_Wold_Space",
    "type": "color",
    "primary": false
   },
   {
    "id": "Input_12",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "rough_concrete_with_lines": {
  "package": "materials/pbr/rough_concrete_with_lines",
  "label": "Rough concrete with lines",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "rt_ao": {
  "package": "rt_ao_v2",
  "label": "Ambient occlusion (RTAO)",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "rt_bent_normal": {
  "package": "rt_bent_normal_v2",
  "label": "Bent normal",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "rt_caustics_color": {
  "package": "rt_caustics",
  "label": "RT caustics color",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "rt_caustics_grayscale": {
  "package": "rt_caustics",
  "label": "RT caustics grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "rt_irradiance": {
  "package": "rt_irradiance",
  "label": "RT irradiance",
  "inputs": [
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "emissive",
    "type": "color",
    "primary": false
   },
   {
    "id": "environment",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "raw_irradiance",
    "type": "color"
   }
  ]
 },
 "rt_shadows": {
  "package": "rt_shadows_v2",
  "label": "RT shadows",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "rust_weathering": {
  "package": "rust_weathering_material",
  "label": "Rust weathering",
  "inputs": [
   {
    "id": "diffuse_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "basecolor_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "normal_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambientOcclusion_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambientOcclusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "curvature",
    "type": "gray",
    "primary": false
   },
   {
    "id": "position",
    "type": "color",
    "primary": false
   },
   {
    "id": "mask_1",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "Normal",
    "type": "color"
   },
   {
    "id": "Specular",
    "type": "color"
   },
   {
    "id": "Glossiness",
    "type": "gray"
   },
   {
    "id": "Roughness",
    "type": "gray"
   },
   {
    "id": "Metallic",
    "type": "gray"
   },
   {
    "id": "Height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "safe_transform": {
  "package": "safe_transform",
  "label": "Safe transform color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "safe_transform_grayscale": {
  "package": "safe_transform",
  "label": "Safe transform grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "scatter_on_spline_color": {
  "package": "spline_tools",
  "label": "Scatter on spline color",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "color",
    "primary": true
   },
   {
    "id": "pattern_input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_8",
    "type": "color",
    "primary": false
   },
   {
    "id": "scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "color_map",
    "type": "color",
    "primary": false
   },
   {
    "id": "mask_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "scatter_on_spline_grayscale": {
  "package": "spline_tools",
  "label": "Scatter on spline grayscale",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "gray",
    "primary": true
   },
   {
    "id": "pattern_input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "scatter_splines_on_splines": {
  "package": "spline_tools",
  "label": "Scatter splines on splines",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   },
   {
    "id": "custom_spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "custom_spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "scratches_generator": {
  "package": "pattern_scratches_generator",
  "label": "Scratches generator",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "scratches_generator_normal": {
  "package": "pattern_scratches_generator",
  "label": "Scratches generator normal",
  "inputs": [],
  "outputs": [
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "select_path": {
  "package": "paths_tools",
  "label": "Paths select",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "shadows": {
  "package": "shadows",
  "label": "Shadows",
  "inputs": [
   {
    "id": "Input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "shadows",
    "type": "gray"
   }
  ]
 },
 "shape": {
  "package": "pattern_shape",
  "label": "Shape",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "shape_drop_shadow_color": {
  "package": "shape_shadow",
  "label": "Shape drop shadow color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "shape_drop_shadow_grayscale": {
  "package": "shape_shadow",
  "label": "Shape drop shadow grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "shape_extrude_2": {
  "package": "shape_extrude",
  "label": "Shape extrude",
  "inputs": [
   {
    "id": "extrude_shape_input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "profile_gradient",
    "type": "gray",
    "primary": false
   },
   {
    "id": "profile_mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "shape_glow_color": {
  "package": "shape_glow",
  "label": "Shape glow color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "shape_glow_grayscale": {
  "package": "shape_glow",
  "label": "Shape glow grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "shape_mapper": {
  "package": "shape_mapper",
  "label": "Shape mapper",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "shape_splatter": {
  "package": "shape_splatter",
  "label": "Shape splatter",
  "inputs": [
   {
    "id": "background_height",
    "type": "gray",
    "primary": true
   },
   {
    "id": "splatter_data_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_distribution_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "shape_scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "shape_rotation_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_offset_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_scale_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask_random_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "splatter_data_1",
    "type": "color"
   },
   {
    "id": "splatter_data_2",
    "type": "color"
   }
  ]
 },
 "shape_splatter_blend": {
  "package": "shape_splatter",
  "label": "Shape splatter blend grayscale",
  "inputs": [
   {
    "id": "background_color",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_7",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_8",
    "type": "gray",
    "primary": false
   },
   {
    "id": "color_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "splatter_data_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "splatter_data_2",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "shape_splatter_blend_color": {
  "package": "shape_splatter",
  "label": "Shape splatter blend color",
  "inputs": [
   {
    "id": "background_color",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_8",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "splatter_data_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "splatter_data_2",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "shape_splatter_data_extract": {
  "package": "shape_splatter",
  "label": "Shape splatter data extract",
  "inputs": [
   {
    "id": "splatter_data_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "splatter_data_2",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "position",
    "type": "color"
   },
   {
    "id": "uv_shape_space",
    "type": "color"
   },
   {
    "id": "uv_texture_space",
    "type": "color"
   },
   {
    "id": "bounding_box_size",
    "type": "color"
   },
   {
    "id": "shape_index",
    "type": "color"
   },
   {
    "id": "pattern_id",
    "type": "gray"
   },
   {
    "id": "shape_angle",
    "type": "gray"
   }
  ]
 },
 "shape_splatter_to_mask": {
  "package": "shape_splatter",
  "label": "Shape splatter to mask",
  "inputs": [
   {
    "id": "splatter_data_1",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "position",
    "type": "gray"
   }
  ]
 },
 "shape_stroke_color": {
  "package": "shape_stroke",
  "label": "Shape stroke color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "shape_stroke_grayscale": {
  "package": "shape_stroke",
  "label": "Shape stroke grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "skew": {
  "package": "skew",
  "label": "Skew color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Skew",
    "type": "color"
   }
  ]
 },
 "skew_grayscale": {
  "package": "skew",
  "label": "Skew grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Skew",
    "type": "gray"
   }
  ]
 },
 "slope_blur": {
  "package": "slope_blur",
  "label": "Slope blur color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Effect",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Slope_Blur",
    "type": "color"
   }
  ]
 },
 "slope_blur_grayscale_2": {
  "package": "slope_blur",
  "label": "Slope blur grayscale",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   },
   {
    "id": "Effect",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Slope_Blur",
    "type": "gray"
   }
  ]
 },
 "smart_auto_tile": {
  "package": "smart_auto_tile",
  "label": "Smart auto tile",
  "inputs": [
   {
    "id": "baseColor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "baseColor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "pattern",
    "type": "color"
   }
  ]
 },
 "snow_cover": {
  "package": "me_snow_cover",
  "label": "Snow cover",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "gray",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "gray"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "sort_by_blue": {
  "package": "paths_tools",
  "label": null,
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "splatter": {
  "package": "splatter",
  "label": "Splatter",
  "inputs": [
   {
    "id": "Source",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Splatter_Grayscale",
    "type": "gray"
   }
  ]
 },
 "splatter_circular": {
  "package": "pattern_splatter_circular",
  "label": "Splatter circular grayscale",
  "inputs": [
   {
    "id": "pattern_input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Splatter_Circular",
    "type": "gray"
   }
  ]
 },
 "splatter_circular_color": {
  "package": "pattern_splatter_circular",
  "label": "Splatter circular color",
  "inputs": [
   {
    "id": "pattern_input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Splatter_Circular",
    "type": "color"
   }
  ]
 },
 "splatter_color": {
  "package": "splatter_color",
  "label": "Splatter color",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Source_alpha",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Splatter",
    "type": "color"
   }
  ]
 },
 "spline_2dtransform": {
  "package": "spline_tools",
  "label": "Spline 2D transform",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_append": {
  "package": "spline_tools",
  "label": "Spline append",
  "inputs": [
   {
    "id": "spline_coords_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview_1",
    "type": "gray",
    "primary": true
   },
   {
    "id": "preview_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "spline_coords_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data_2",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_bridge_2_splines": {
  "package": "spline_tools",
  "label": "Spline bridge (2 splines)",
  "inputs": [
   {
    "id": "spline_coords_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview_1",
    "type": "gray",
    "primary": true
   },
   {
    "id": "spline_coords_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "start_tangent_length_curve",
    "type": "gray",
    "primary": false
   },
   {
    "id": "start_tangent_rotation_curve",
    "type": "gray",
    "primary": false
   },
   {
    "id": "end_tangent_length_curve",
    "type": "gray",
    "primary": false
   },
   {
    "id": "end_tangent_rotation_curve",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_bridge_list_v2": {
  "package": "spline_tools",
  "label": "Spline bridge (List)",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_bridge_mapper_color": {
  "package": "spline_tools",
  "label": "Spline bridge mapper color",
  "inputs": [
   {
    "id": "background",
    "type": "gray",
    "primary": true
   },
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "color",
    "type": "color"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "spline_bridge_mapper_grayscale": {
  "package": "spline_tools",
  "label": "Spline bridge mapper grayscale",
  "inputs": [
   {
    "id": "background",
    "type": "gray",
    "primary": true
   },
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "color",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "spline_circle": {
  "package": "spline_tools",
  "label": "Spline circle",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_cubic": {
  "package": "spline_tools",
  "label": "Spline (Cubic)",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_fill": {
  "package": "spline_tools",
  "label": "Spline fill",
  "inputs": [
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   },
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "spline_flow_mapper": {
  "package": "spline_tools",
  "label": "Spline flow mapper",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "gray",
    "primary": true
   },
   {
    "id": "attenuation_profile_curve",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "spline_mapper_color": {
  "package": "spline_tools",
  "label": "Spline mapper color",
  "inputs": [
   {
    "id": "background",
    "type": "gray",
    "primary": true
   },
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_map",
    "type": "color",
    "primary": false
   },
   {
    "id": "height_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "twist_curve",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "color",
    "type": "color"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   },
   {
    "id": "id",
    "type": "gray"
   }
  ]
 },
 "spline_mapper_grayscale": {
  "package": "spline_tools",
  "label": "Spline mapper grayscale",
  "inputs": [
   {
    "id": "background",
    "type": "gray",
    "primary": true
   },
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "twist_curve",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "color",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "uv",
    "type": "color"
   },
   {
    "id": "id",
    "type": "gray"
   }
  ]
 },
 "spline_merge_list": {
  "package": "spline_tools",
  "label": "Spline merge list",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_poly_quadratic": {
  "package": "spline_tools",
  "label": "Spline (Poly quadratic)",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   },
   {
    "id": "points_preview",
    "type": "gray",
    "primary": false
   },
   {
    "id": "point_list_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_quadratic": {
  "package": "spline_tools",
  "label": "Spline (Quadratic)",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_render": {
  "package": "spline_tools",
  "label": "Spline render",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "spline_sample_height": {
  "package": "spline_tools",
  "label": "Spline sample height",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height_map",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_sample_thickness": {
  "package": "spline_tools",
  "label": "Spline sample thickness",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": false
   },
   {
    "id": "thickness_map",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_select": {
  "package": "spline_tools",
  "label": "Spline select",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spline_warp": {
  "package": "spline_tools",
  "label": "Spline warp",
  "inputs": [
   {
    "id": "spline_coords",
    "type": "color",
    "primary": false
   },
   {
    "id": "spline_data",
    "type": "color",
    "primary": false
   },
   {
    "id": "preview",
    "type": "gray",
    "primary": false
   },
   {
    "id": "intensity_map",
    "type": "gray",
    "primary": true
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   },
   {
    "id": "attenuation_curve",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "spline_coords",
    "type": "color"
   },
   {
    "id": "spline_data",
    "type": "color"
   },
   {
    "id": "spline_amount",
    "type": "value"
   },
   {
    "id": "preview",
    "type": "gray"
   }
  ]
 },
 "spot_emboss": {
  "package": "spot_emboss",
  "label": "Spot emboss",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Height",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Spot_Emboss",
    "type": "color"
   }
  ]
 },
 "srgb_to_acescg": {
  "package": "color_space_conversion",
  "label": "sRGB to ACEScg",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "srgb_to_linear_srgb": {
  "package": "color_space_conversion",
  "label": "sRGB to linear sRGB color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "srgb_to_linear_srgb_grayscale": {
  "package": "color_space_conversion",
  "label": "sRGB to linear sRGB grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "star": {
  "package": "pattern_star",
  "label": "Star",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "starburst": {
  "package": "starburst",
  "label": "Starburst",
  "inputs": [],
  "outputs": [
   {
    "id": "Starburst",
    "type": "gray"
   }
  ]
 },
 "straight_to_premult": {
  "package": "pre_multiply_straight",
  "label": "Straight to premultiplied",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "stripes": {
  "package": "pattern_stripes",
  "label": "Stripes",
  "inputs": [],
  "outputs": [
   {
    "id": "Stripes",
    "type": "gray"
   }
  ]
 },
 "summed_area_table": {
  "package": "summed_area_table",
  "label": "Summed area table",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "swirl": {
  "package": "swirl",
  "label": "Swirl color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "swirl_grayscale": {
  "package": "swirl",
  "label": "Swirl grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "switch": {
  "package": "blend_switch",
  "label": "Switch color",
  "inputs": [
   {
    "id": "input_1",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "switch_grayscale": {
  "package": "blend_switch",
  "label": "Switch grayscale",
  "inputs": [
   {
    "id": "input_1",
    "type": "gray",
    "primary": true
   },
   {
    "id": "input_2",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "symmetry": {
  "package": "symmetry",
  "label": "Symmetry",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Symmetry",
    "type": "color"
   }
  ]
 },
 "symmetry_slice": {
  "package": "symmetry_slice",
  "label": "Symmetry slice",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "Symmetry_Slice",
    "type": "color"
   }
  ]
 },
 "threshold": {
  "package": "threshold",
  "label": "Threshold",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "tile_generator": {
  "package": "pattern_tile_generator",
  "label": "Tile generator grayscale",
  "inputs": [
   {
    "id": "pattern_input_1",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "tile_generator_color": {
  "package": "pattern_tile_generator",
  "label": "Tile generator color",
  "inputs": [
   {
    "id": "pattern_input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "background",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "tile_random": {
  "package": "pattern_tile_random",
  "label": "Tile random grayscale",
  "inputs": [
   {
    "id": "pattern_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "tile_random_2": {
  "package": "pattern_tile_random_2",
  "label": "Tile random 2",
  "inputs": [
   {
    "id": "random_size_map",
    "type": "gray",
    "primary": true
   },
   {
    "id": "random_slant_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "round_corners_radius_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "bevel_distance_map",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask_map",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   },
   {
    "id": "flood_fill_data1",
    "type": "color"
   }
  ]
 },
 "tile_random_color": {
  "package": "pattern_tile_random",
  "label": "Tile random color",
  "inputs": [
   {
    "id": "pattern_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "background_input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "tile_sampler": {
  "package": "pattern_tile_sampler",
  "label": "Tile sampler grayscale",
  "inputs": [
   {
    "id": "pattern_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "scale_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "displacement_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "vector_map_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_distribution_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "tile_sampler_color": {
  "package": "pattern_tile_sampler",
  "label": "Tile sampler color",
  "inputs": [
   {
    "id": "pattern_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_2",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_4",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "pattern_input_6",
    "type": "color",
    "primary": false
   },
   {
    "id": "scale_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "displacement_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "rotation_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "vector_map_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_map_input",
    "type": "color",
    "primary": false
   },
   {
    "id": "mask_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "pattern_distribution_map_input",
    "type": "gray",
    "primary": false
   },
   {
    "id": "background_input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "tileable_material_to_mesh_material": {
  "package": "tileable_material_to_mesh_material",
  "label": "Tileable material to mesh material",
  "inputs": [
   {
    "id": "Diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "Specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "Normal_WS",
    "type": "color",
    "primary": true
   },
   {
    "id": "AO",
    "type": "gray",
    "primary": false
   },
   {
    "id": "Curvature",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Diffuse",
    "type": "color"
   },
   {
    "id": "Specular",
    "type": "color"
   }
  ]
 },
 "tiles_002": {
  "package": "materials/pbr/tiles_002",
  "label": "Tiles 002",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "tiles_008": {
  "package": "materials/pbr/tiles_008",
  "label": "Tiles 008",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "tiles_011": {
  "package": "materials/pbr/tiles_011",
  "label": "Tiles 011",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "tiles_025": {
  "package": "materials/pbr/tiles_025",
  "label": "Tiles 025",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 },
 "trapezoid_transform": {
  "package": "trapezoid_transform",
  "label": "Trapezoid transform color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "trapezoid_transform_grayscale": {
  "package": "trapezoid_transform",
  "label": "Trapezoid transform grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "triangle_grid_color": {
  "package": "pattern_triangle_grid",
  "label": "Triangle grid color",
  "inputs": [
   {
    "id": "height",
    "type": "gray",
    "primary": true
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "triangle_grid_grayscale": {
  "package": "pattern_triangle_grid",
  "label": "Triangle grid grayscale",
  "inputs": [
   {
    "id": "height",
    "type": "gray",
    "primary": true
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   },
   {
    "id": "color_input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "triplanar_3": {
  "package": "triplanar",
  "label": "Triplanar color",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   },
   {
    "id": "ws_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_x",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_y",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_z",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "triplanar_grayscale_3": {
  "package": "triplanar",
  "label": "Triplanar grayscale",
  "inputs": [
   {
    "id": "position",
    "type": "color",
    "primary": true
   },
   {
    "id": "ws_normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_x",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_y",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_z",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "uber_emboss": {
  "package": "uber_emboss",
  "label": "Uber emboss",
  "inputs": [
   {
    "id": "Source",
    "type": "color",
    "primary": true
   },
   {
    "id": "Height",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "Uber_Emboss",
    "type": "color"
   }
  ]
 },
 "uv_mapper_color": {
  "package": "uv_mapper",
  "label": "UV mapper color",
  "inputs": [
   {
    "id": "uv",
    "type": "color",
    "primary": true
   },
   {
    "id": "input",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "uv_mapper_grayscale": {
  "package": "uv_mapper",
  "label": "UV mapper grayscale",
  "inputs": [
   {
    "id": "uv",
    "type": "color",
    "primary": true
   },
   {
    "id": "input",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "vector_morph": {
  "package": "vector_morph",
  "label": "Vector morph color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "vector_field",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "vector_morph_grayscale": {
  "package": "vector_morph",
  "label": "Vector morph grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "vector_field",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "vector_warp": {
  "package": "vector_warp",
  "label": "Vector warp color",
  "inputs": [
   {
    "id": "input",
    "type": "color",
    "primary": true
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "vector_warp_grayscale": {
  "package": "vector_warp",
  "label": "Vector warp grayscale",
  "inputs": [
   {
    "id": "input",
    "type": "gray",
    "primary": true
   },
   {
    "id": "vector_map",
    "type": "color",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "vertex_processor": {
  "package": "paths_tools",
  "label": "Paths vertex processor",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_5",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_6",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_7",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_8",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "vertex_processor_simple": {
  "package": "paths_tools",
  "label": "Paths vertex processor simple",
  "inputs": [
   {
    "id": "paths",
    "type": "color",
    "primary": true
   },
   {
    "id": "input_1",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_2",
    "type": "gray",
    "primary": false
   },
   {
    "id": "input_3",
    "type": "color",
    "primary": false
   },
   {
    "id": "input_4",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "paths",
    "type": "color"
   }
  ]
 },
 "view_color_palette": {
  "package": "quantize_color",
  "label": "View color palette",
  "inputs": [
   {
    "id": "palette",
    "type": "color",
    "primary": false
   },
   {
    "id": "input",
    "type": "color",
    "primary": true
   }
  ],
  "outputs": [
   {
    "id": "output",
    "type": "color"
   }
  ]
 },
 "voronoi": {
  "package": "noise_voronoi",
  "label": "Voronoi",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "voronoi_fractal": {
  "package": "noise_voronoi",
  "label": "Voronoi fractal",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "water_level": {
  "package": "me_water_level",
  "label": "Water level",
  "inputs": [
   {
    "id": "diffuse",
    "type": "color",
    "primary": false
   },
   {
    "id": "basecolor",
    "type": "color",
    "primary": true
   },
   {
    "id": "normal",
    "type": "color",
    "primary": false
   },
   {
    "id": "specular",
    "type": "color",
    "primary": false
   },
   {
    "id": "glossiness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "roughness",
    "type": "gray",
    "primary": false
   },
   {
    "id": "metallic",
    "type": "gray",
    "primary": false
   },
   {
    "id": "height",
    "type": "gray",
    "primary": false
   },
   {
    "id": "ambient_occlusion",
    "type": "gray",
    "primary": false
   },
   {
    "id": "mask",
    "type": "gray",
    "primary": false
   }
  ],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   },
   {
    "id": "mask",
    "type": "gray"
   }
  ]
 },
 "waveform_01_v2": {
  "package": "waveform_01_v2",
  "label": "Waveform 1",
  "inputs": [],
  "outputs": [
   {
    "id": "Waveform",
    "type": "gray"
   }
  ]
 },
 "weave_1": {
  "package": "pattern_weave_1",
  "label": "Weave 1",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "weave_2": {
  "package": "pattern_weave_2",
  "label": "Weave 2",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "weave_generator": {
  "package": "pattern_weave_generator",
  "label": "Weave generator",
  "inputs": [],
  "outputs": [
   {
    "id": "Height",
    "type": "gray"
   },
   {
    "id": "Opacity",
    "type": "gray"
   },
   {
    "id": "Mask_1",
    "type": "gray"
   },
   {
    "id": "Mask_2",
    "type": "gray"
   }
  ]
 },
 "white_noise_v2": {
  "package": "white_noise_v2",
  "label": "White noise",
  "inputs": [],
  "outputs": [
   {
    "id": "output",
    "type": "gray"
   }
  ]
 },
 "wood_american_cherry": {
  "package": "materials/pbr/wood_american_cherry",
  "label": "Wood american cherry",
  "inputs": [],
  "outputs": [
   {
    "id": "diffuse",
    "type": "color"
   },
   {
    "id": "basecolor",
    "type": "color"
   },
   {
    "id": "normal",
    "type": "color"
   },
   {
    "id": "specular",
    "type": "color"
   },
   {
    "id": "glossiness",
    "type": "gray"
   },
   {
    "id": "roughness",
    "type": "gray"
   },
   {
    "id": "metallic",
    "type": "gray"
   },
   {
    "id": "height",
    "type": "gray"
   },
   {
    "id": "ambient_occlusion",
    "type": "gray"
   }
  ]
 }
}

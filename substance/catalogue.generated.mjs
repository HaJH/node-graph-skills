// GENERATED FILE -- do not edit by hand.
//
//   node substance/tools/generate-catalogue.mjs
//
// Read out of Adobe Substance 3D Designer 15.1.0, offline.
// ATOMIC and ENUMS come from the API reference the install ships; LIBRARY from its .sbs packages.
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": [
   {
    "id": "label",
    "type": "string"
   },
   {
    "id": "description",
    "type": "string"
   },
   {
    "id": "identifier",
    "type": "string"
   },
   {
    "id": "userdata",
    "type": "string"
   },
   {
    "id": "group",
    "type": "string"
   },
   {
    "id": "visible_if",
    "type": "string"
   },
   {
    "id": "usages",
    "type": "SDTypeArray<SDTypeUsage>"
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
  ],
  "annotations": [
   {
    "id": "label",
    "type": "string"
   },
   {
    "id": "description",
    "type": "string"
   },
   {
    "id": "identifier",
    "type": "string"
   },
   {
    "id": "userdata",
    "type": "string"
   },
   {
    "id": "group",
    "type": "string"
   },
   {
    "id": "visible_if",
    "type": "string"
   },
   {
    "id": "usages",
    "type": "SDTypeArray<SDTypeUsage>"
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
  ],
  "annotations": [
   {
    "id": "label",
    "type": "string"
   },
   {
    "id": "description",
    "type": "string"
   },
   {
    "id": "identifier",
    "type": "string"
   },
   {
    "id": "userdata",
    "type": "string"
   },
   {
    "id": "group",
    "type": "string"
   },
   {
    "id": "visible_if",
    "type": "string"
   },
   {
    "id": "usages",
    "type": "SDTypeArray<SDTypeUsage>"
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  "parameters": [],
  "annotations": [
   {
    "id": "label",
    "type": "string"
   },
   {
    "id": "description",
    "type": "string"
   },
   {
    "id": "identifier",
    "type": "string"
   },
   {
    "id": "userdata",
    "type": "string"
   },
   {
    "id": "group",
    "type": "string"
   },
   {
    "id": "visible_if",
    "type": "string"
   },
   {
    "id": "usages",
    "type": "SDTypeArray<SDTypeUsage>"
   },
   {
    "id": "mipmaps",
    "type": "int"
   },
   {
    "id": "format",
    "type": "int"
   }
  ]
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "annotations": []
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "baseline",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "absolute",
    "type": "bool"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "min_level",
    "type": "int"
   },
   {
    "id": "max_level",
    "type": "int"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "lacunarity",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "baseline",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "absolute",
    "type": "bool"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "min_level",
    "type": "int"
   },
   {
    "id": "max_level",
    "type": "int"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "lacunarity",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "baseline",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "minkowski_number",
    "type": "float"
   },
   {
    "id": "style",
    "type": "int"
   },
   {
    "id": "border_width",
    "type": "float"
   },
   {
    "id": "roundness",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "points_position_mode",
    "type": "int"
   },
   {
    "id": "point_1_uv",
    "type": "float2"
   },
   {
    "id": "point_2_uv",
    "type": "float2"
   },
   {
    "id": "point_1_world",
    "type": "float3"
   },
   {
    "id": "point_2_world",
    "type": "float3"
   },
   {
    "id": "contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "projection_input",
    "type": "int"
   },
   {
    "id": "target_uv_position",
    "type": "float2"
   },
   {
    "id": "target_position",
    "type": "float3"
   },
   {
    "id": "target_normal",
    "type": "float3"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float2"
   },
   {
    "id": "max_depth",
    "type": "float"
   },
   {
    "id": "depth_fade",
    "type": "float"
   },
   {
    "id": "normal_threshold",
    "type": "float"
   },
   {
    "id": "norma_fade",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "projection_input",
    "type": "int"
   },
   {
    "id": "target_uv_position",
    "type": "float2"
   },
   {
    "id": "target_position",
    "type": "float3"
   },
   {
    "id": "target_normal",
    "type": "float3"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float2"
   },
   {
    "id": "max_depth",
    "type": "float"
   },
   {
    "id": "depth_fade",
    "type": "float"
   },
   {
    "id": "normal_threshold",
    "type": "float"
   },
   {
    "id": "norma_fade",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "grid_size",
    "type": "int2"
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
  ],
  "parameters": [
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "grid_size",
    "type": "int2"
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
  ],
  "parameters": [
   {
    "id": "grid_size",
    "type": "int2"
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
  ],
  "parameters": [
   {
    "id": "threshold",
    "type": "float"
   },
   {
    "id": "grid_size",
    "type": "int2"
   },
   {
    "id": "output",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "output_resolution",
    "type": "int2"
   },
   {
    "id": "camera_uv_position",
    "type": "float2"
   },
   {
    "id": "camera_distance",
    "type": "float"
   },
   {
    "id": "camera_fov",
    "type": "float"
   },
   {
    "id": "albedo",
    "type": "float3"
   },
   {
    "id": "background_mode",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "enable_ground_plane",
    "type": "bool"
   },
   {
    "id": "infinite_plane",
    "type": "bool"
   },
   {
    "id": "ground_plane_size",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "output_resolution",
    "type": "int2"
   },
   {
    "id": "camera_uv_position",
    "type": "float2"
   },
   {
    "id": "light_uv_pos",
    "type": "float2"
   },
   {
    "id": "camera_distance",
    "type": "float"
   },
   {
    "id": "camera_fov",
    "type": "float"
   },
   {
    "id": "absorption",
    "type": "float"
   },
   {
    "id": "feather",
    "type": "float"
   },
   {
    "id": "light_color_mode",
    "type": "int"
   },
   {
    "id": "light_temperature",
    "type": "float"
   },
   {
    "id": "light_color",
    "type": "float3"
   },
   {
    "id": "light_intensity",
    "type": "float"
   },
   {
    "id": "ambient_color",
    "type": "float3"
   },
   {
    "id": "ambient_intensity",
    "type": "float"
   },
   {
    "id": "albedo",
    "type": "float3"
   },
   {
    "id": "background_mode",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "dithering",
    "type": "float"
   },
   {
    "id": "enable_ground_plane",
    "type": "bool"
   },
   {
    "id": "infinite_plane",
    "type": "bool"
   },
   {
    "id": "ground_plane_size",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "position_input",
    "type": "int"
   },
   {
    "id": "position_uv",
    "type": "float2"
   },
   {
    "id": "position_worldspace",
    "type": "float3"
   },
   {
    "id": "rotation",
    "type": "float3"
   },
   {
    "id": "feather_width",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "rounded_curve",
    "type": "float"
   },
   {
    "id": "distance_scale",
    "type": "float"
   },
   {
    "id": "distance_mode",
    "type": "int"
   },
   {
    "id": "minkowski_number",
    "type": "float"
   },
   {
    "id": "style",
    "type": "int"
   },
   {
    "id": "edge_thickness",
    "type": "float"
   },
   {
    "id": "random_color_seed_mode",
    "type": "int"
   },
   {
    "id": "random_color_seed",
    "type": "int"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "min_level",
    "type": "int"
   },
   {
    "id": "max_level",
    "type": "int"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "lacunarity",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "rounded_curve",
    "type": "float"
   },
   {
    "id": "distance_scale",
    "type": "float"
   },
   {
    "id": "distance_mode",
    "type": "int"
   },
   {
    "id": "minkowski_number",
    "type": "float"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "style",
    "type": "int"
   },
   {
    "id": "edge_thickness",
    "type": "float"
   },
   {
    "id": "random_color_seed_mode",
    "type": "int"
   },
   {
    "id": "random_color_seed",
    "type": "int"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "Depth_Balance",
    "type": "float"
   },
   {
    "id": "Sharpen",
    "type": "float"
   },
   {
    "id": "Hue",
    "type": "float"
   },
   {
    "id": "Saturation",
    "type": "float"
   },
   {
    "id": "Brightness",
    "type": "float"
   },
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "Output_Normal_Format",
    "type": "int"
   },
   {
    "id": "Invert_Generated_Relief",
    "type": "bool"
   },
   {
    "id": "Normal_Strength",
    "type": "float"
   },
   {
    "id": "Relief_Graphic_Equalizer",
    "type": "float4"
   },
   {
    "id": "Pinch_Intensity",
    "type": "float"
   },
   {
    "id": "Normal_Sharpen",
    "type": "float"
   },
   {
    "id": "Normal_Soften",
    "type": "float"
   },
   {
    "id": "Specular_Diffuse_Influence",
    "type": "float"
   },
   {
    "id": "Specular_Saturation",
    "type": "float"
   },
   {
    "id": "Specular_Sharpen",
    "type": "float"
   },
   {
    "id": "Specular_Levels_In",
    "type": "float3"
   },
   {
    "id": "Specular_Levels_Out",
    "type": "float2"
   },
   {
    "id": "metallic_specular_influence",
    "type": "float"
   },
   {
    "id": "glossiness_levels_in",
    "type": "float3"
   },
   {
    "id": "glossiness_levels_out",
    "type": "float2"
   },
   {
    "id": "metallic_glossiness_influence",
    "type": "float"
   },
   {
    "id": "roughness_levels_in",
    "type": "float3"
   },
   {
    "id": "roughness_levels_out",
    "type": "float2"
   },
   {
    "id": "metallic_roughness_influence",
    "type": "float"
   },
   {
    "id": "AO_Multiply",
    "type": "float"
   },
   {
    "id": "AO_Spread",
    "type": "float"
   },
   {
    "id": "AO_Light_Distance",
    "type": "float"
   },
   {
    "id": "AO_Light_Angle",
    "type": "float"
   },
   {
    "id": "AO_Levels",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "displacement_intensity",
    "type": "float"
   },
   {
    "id": "envrionment_rotation_horizontal",
    "type": "float"
   },
   {
    "id": "background_mode",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "background_blur",
    "type": "float"
   },
   {
    "id": "shape_scale",
    "type": "float"
   },
   {
    "id": "plane_size",
    "type": "float2"
   },
   {
    "id": "cylinder_radius",
    "type": "float"
   },
   {
    "id": "cylinder_length",
    "type": "float"
   },
   {
    "id": "shape_rotation",
    "type": "float"
   },
   {
    "id": "shape_rotation_direction",
    "type": "float"
   },
   {
    "id": "rotation_around_direction",
    "type": "float"
   },
   {
    "id": "shape_position",
    "type": "float3"
   },
   {
    "id": "uv_tiling",
    "type": "float"
   },
   {
    "id": "sphere_uv_projection",
    "type": "int"
   },
   {
    "id": "sphere_uv_scale",
    "type": "float2"
   },
   {
    "id": "plane_uv_scale",
    "type": "float2"
   },
   {
    "id": "cylinder_uv_scale",
    "type": "float2"
   },
   {
    "id": "uv_offset",
    "type": "float2"
   },
   {
    "id": "tilt_uvs",
    "type": "bool"
   },
   {
    "id": "camera_exposure",
    "type": "float"
   },
   {
    "id": "tone_mapper",
    "type": "int"
   },
   {
    "id": "camera_mode",
    "type": "int"
   },
   {
    "id": "camera_fov",
    "type": "float"
   },
   {
    "id": "camera_distance",
    "type": "float"
   },
   {
    "id": "vignette_intensity",
    "type": "float"
   },
   {
    "id": "vignette_radius",
    "type": "float"
   },
   {
    "id": "camera_dir_xy",
    "type": "float2"
   },
   {
    "id": "aperture_radius",
    "type": "float"
   },
   {
    "id": "aperture_blades",
    "type": "int"
   },
   {
    "id": "aperture_ring",
    "type": "float"
   },
   {
    "id": "aperture_difraction",
    "type": "float"
   },
   {
    "id": "swirly_bokeh",
    "type": "float"
   },
   {
    "id": "focus_mode",
    "type": "int"
   },
   {
    "id": "focus_point",
    "type": "float2"
   },
   {
    "id": "focus_offset",
    "type": "float"
   },
   {
    "id": "use_custom_aperture_map",
    "type": "bool"
   },
   {
    "id": "enable_post_effects",
    "type": "bool"
   },
   {
    "id": "bloom_intensity",
    "type": "float"
   },
   {
    "id": "bloom_threshold",
    "type": "float"
   },
   {
    "id": "bloom_chroma_shift",
    "type": "float"
   },
   {
    "id": "lens_halo_intensity",
    "type": "float"
   },
   {
    "id": "lens_flares_intensity",
    "type": "float"
   },
   {
    "id": "lens_dirt_intensity",
    "type": "float"
   },
   {
    "id": "diffuse_quality",
    "type": "int"
   },
   {
    "id": "diffuse_emissive_multiplier",
    "type": "float"
   },
   {
    "id": "diffuse_shadow_intensity",
    "type": "float"
   },
   {
    "id": "specular_dithering",
    "type": "float"
   },
   {
    "id": "specular_shadow_intensity",
    "type": "float"
   },
   {
    "id": "opacity_mode",
    "type": "int"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
   },
   {
    "id": "recompute_normals",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "dielectric_f0_input",
    "type": "int"
   },
   {
    "id": "dielectric_f0",
    "type": "float"
   },
   {
    "id": "enable_clearcoat",
    "type": "bool"
   },
   {
    "id": "clearcoat_weight",
    "type": "float"
   },
   {
    "id": "coat_specular_level",
    "type": "float"
   },
   {
    "id": "inherit_normal_from_base_layer",
    "type": "bool"
   },
   {
    "id": "enable_emissive_lighting",
    "type": "bool"
   },
   {
    "id": "emissive_intensity",
    "type": "float"
   },
   {
    "id": "enable_sss",
    "type": "bool"
   },
   {
    "id": "scattering_distance",
    "type": "float"
   },
   {
    "id": "sss_redshift",
    "type": "float"
   },
   {
    "id": "sss_rayleigh",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "background_color",
    "type": "float4"
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
  ],
  "parameters": [
   {
    "id": "background_color",
    "type": "float4"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "Gradient_Filled_Cells",
    "type": "bool"
   },
   {
    "id": "Interstice_Width",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Anisotropy",
    "type": "float"
   },
   {
    "id": "Angle",
    "type": "float"
   },
   {
    "id": "Quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Anisotropy",
    "type": "float"
   },
   {
    "id": "Angle",
    "type": "float"
   },
   {
    "id": "Quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "sharpness",
    "type": "float"
   },
   {
    "id": "anisotropy",
    "type": "float"
   },
   {
    "id": "use_input_direction_map",
    "type": "bool"
   },
   {
    "id": "tensor_smoothness",
    "type": "float"
   },
   {
    "id": "anisotropy_angle",
    "type": "float"
   },
   {
    "id": "anisotropy_angle_map_multiplier",
    "type": "float"
   },
   {
    "id": "slope_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "ignore_alpha",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "sharpness",
    "type": "float"
   },
   {
    "id": "anisotropy",
    "type": "float"
   },
   {
    "id": "use_input_direction_map",
    "type": "bool"
   },
   {
    "id": "tensor_smoothness",
    "type": "float"
   },
   {
    "id": "anisotropy_angle",
    "type": "float"
   },
   {
    "id": "anisotropy_angle_map_multiplier",
    "type": "float"
   },
   {
    "id": "slope_map_input_multiplier",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "X_Amount",
    "type": "int"
   },
   {
    "id": "Y_Amount",
    "type": "int"
   },
   {
    "id": "y_amount_by_resolution",
    "type": "bool"
   },
   {
    "id": "rotate",
    "type": "bool"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "smoothness_interpolation",
    "type": "float"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "ao_cancellation",
    "type": "float"
   },
   {
    "id": "sat",
    "type": "float"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "pattern_amount",
    "type": "int"
   },
   {
    "id": "pattern_amount_random",
    "type": "float"
   },
   {
    "id": "pattern_min_amount",
    "type": "int"
   },
   {
    "id": "arcs_amount",
    "type": "int"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_variation",
    "type": "float"
   },
   {
    "id": "input_image_filtering",
    "type": "int"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "pattern_width",
    "type": "float"
   },
   {
    "id": "pattern_height",
    "type": "float"
   },
   {
    "id": "pattern_width_random",
    "type": "float"
   },
   {
    "id": "pattern_height_random",
    "type": "float"
   },
   {
    "id": "global_pattern_width_random",
    "type": "float"
   },
   {
    "id": "pattern_height_decrease",
    "type": "float"
   },
   {
    "id": "color_random",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "atlas_input_resolution",
    "type": "int2"
   },
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "pattern_range",
    "type": "int2"
   },
   {
    "id": "pattern_distribution_mode",
    "type": "int"
   },
   {
    "id": "pattern_distribution_map_multiplier",
    "type": "float"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_atlas_shape_detection_precision",
    "type": "int"
   },
   {
    "id": "pattern_downscale_atlas_opacity",
    "type": "int"
   },
   {
    "id": "pattern_ignore_shape_smaller_than",
    "type": "float"
   },
   {
    "id": "shape_scale",
    "type": "float"
   },
   {
    "id": "shape_scale_random",
    "type": "float"
   },
   {
    "id": "shape_scale_no_overlap",
    "type": "float"
   },
   {
    "id": "shape_scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "shape_size",
    "type": "float2"
   },
   {
    "id": "shape_size_ratio_from_background_slope",
    "type": "float"
   },
   {
    "id": "shape_size_by_xy_amount_ratio",
    "type": "float"
   },
   {
    "id": "position_random",
    "type": "float"
   },
   {
    "id": "position_random_distribution",
    "type": "int"
   },
   {
    "id": "position_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "position_offset_horizontal",
    "type": "float"
   },
   {
    "id": "position_offset_vertical",
    "type": "float"
   },
   {
    "id": "out_of_bounds_option",
    "type": "int"
   },
   {
    "id": "shape_rotation",
    "type": "float"
   },
   {
    "id": "shape_rotation_random",
    "type": "float"
   },
   {
    "id": "shape_rotation_from_background_slope",
    "type": "float"
   },
   {
    "id": "shape_rotation_map_multiplier",
    "type": "float"
   },
   {
    "id": "shape_rotation_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "height_scale_auto_adjust",
    "type": "bool"
   },
   {
    "id": "height_blend_mode",
    "type": "int"
   },
   {
    "id": "height_offset",
    "type": "float"
   },
   {
    "id": "height_offset_random",
    "type": "float"
   },
   {
    "id": "height_offset_map_multiplier",
    "type": "float"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "height_scale_random",
    "type": "float"
   },
   {
    "id": "height_scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "height_conform_to_background",
    "type": "float"
   },
   {
    "id": "height_smooth_conformed_background",
    "type": "float"
   },
   {
    "id": "height_skew",
    "type": "float"
   },
   {
    "id": "height_background_slope_smoothness",
    "type": "float"
   },
   {
    "id": "height_cutout_black_pixels",
    "type": "bool"
   },
   {
    "id": "height_flatten_pattern_base",
    "type": "bool"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_random_map_multiplier",
    "type": "float"
   },
   {
    "id": "mask_from_background_slope",
    "type": "float"
   },
   {
    "id": "color_adjustment",
    "type": "float3"
   },
   {
    "id": "color_random",
    "type": "float3"
   },
   {
    "id": "color_from_background",
    "type": "float3"
   },
   {
    "id": "normal_skew",
    "type": "float"
   },
   {
    "id": "normal_random",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "roughness_adjustment",
    "type": "float"
   },
   {
    "id": "roughness_from_background",
    "type": "float"
   },
   {
    "id": "roughness_random",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "grid_view",
    "type": "bool"
   },
   {
    "id": "grid_opacity",
    "type": "float"
   },
   {
    "id": "grid_selection_opacity",
    "type": "float"
   },
   {
    "id": "auto_scale",
    "type": "bool"
   },
   {
    "id": "auto_crop",
    "type": "bool"
   },
   {
    "id": "auto_crop_mode",
    "type": "int"
   },
   {
    "id": "shape_selection",
    "type": "int"
   },
   {
    "id": "ignore_shape_smaller_than",
    "type": "float"
   },
   {
    "id": "auto_rotation",
    "type": "bool"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "input_normal_format",
    "type": "int"
   },
   {
    "id": "downscale_opacity_mask",
    "type": "int"
   },
   {
    "id": "shape_detection_precision",
    "type": "int"
   },
   {
    "id": "dilation_width",
    "type": "float"
   },
   {
    "id": "enale_additional_inputs",
    "type": "bool"
   },
   {
    "id": "custom_background_color",
    "type": "bool"
   },
   {
    "id": "basecolor_bg_color",
    "type": "float3"
   },
   {
    "id": "normal_bg_color",
    "type": "float3"
   },
   {
    "id": "metallic_bg_color",
    "type": "float"
   },
   {
    "id": "roughness_bg_color",
    "type": "float"
   },
   {
    "id": "height_bg_color",
    "type": "float"
   },
   {
    "id": "user1_bg_color",
    "type": "float"
   },
   {
    "id": "user2_bg_color",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "use_alpha",
    "type": "bool"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Material_1_Color",
    "type": "float3"
   },
   {
    "id": "Material_2_Color",
    "type": "float3"
   },
   {
    "id": "Color_Replacement_Intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Material_1_Color",
    "type": "float3"
   },
   {
    "id": "Material_2_Color",
    "type": "float3"
   },
   {
    "id": "Material_3_Color",
    "type": "float3"
   },
   {
    "id": "Material_4_Color",
    "type": "float3"
   },
   {
    "id": "Color_Replacement_Intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Material_1_Color",
    "type": "float3"
   },
   {
    "id": "Material_2_Color",
    "type": "float3"
   },
   {
    "id": "Material_3_Color",
    "type": "float3"
   },
   {
    "id": "Material_4_Color",
    "type": "float3"
   },
   {
    "id": "Material_5_Color",
    "type": "float3"
   },
   {
    "id": "Material_6_Color",
    "type": "float3"
   },
   {
    "id": "Material_7_Color",
    "type": "float3"
   },
   {
    "id": "Material_8_Color",
    "type": "float3"
   },
   {
    "id": "Color_Replacement_Intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "use_specularlevel_input",
    "type": "bool"
   },
   {
    "id": "target",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "distance",
    "type": "float"
   },
   {
    "id": "bevel_mode",
    "type": "int"
   },
   {
    "id": "smoothing",
    "type": "float"
   },
   {
    "id": "non_uniform_blur",
    "type": "bool"
   },
   {
    "id": "Use_Custom_Curve",
    "type": "bool"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "output_mode",
    "type": "int"
   },
   {
    "id": "direction",
    "type": "int"
   },
   {
    "id": "maximum_distance",
    "type": "float"
   },
   {
    "id": "mask_smoothness",
    "type": "float"
   },
   {
    "id": "mask_offset",
    "type": "float"
   },
   {
    "id": "mask_threshold",
    "type": "float"
   },
   {
    "id": "distance_metric",
    "type": "int"
   },
   {
    "id": "scale",
    "type": "float2"
   },
   {
    "id": "distance_map_multiplier",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "temperature",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "noise_control",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "interstice_width",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "interstice_width",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Bricks",
    "type": "int2"
   },
   {
    "id": "Bevel",
    "type": "float4"
   },
   {
    "id": "Keep_Ratio",
    "type": "bool"
   },
   {
    "id": "Gap",
    "type": "float2"
   },
   {
    "id": "Middle_Size",
    "type": "float2"
   },
   {
    "id": "Height",
    "type": "float4"
   },
   {
    "id": "Slope",
    "type": "float4"
   },
   {
    "id": "Offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "bricks_amount_x",
    "type": "int"
   },
   {
    "id": "bricks_amount_y",
    "type": "int"
   },
   {
    "id": "bricks_offset_random",
    "type": "float"
   },
   {
    "id": "Bricks_Depth",
    "type": "float"
   },
   {
    "id": "bricks_balance",
    "type": "float"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "bricks_01_color",
    "type": "float3"
   },
   {
    "id": "bricks_02_color",
    "type": "float3"
   },
   {
    "id": "concrete_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "edges_bricks_amount",
    "type": "int"
   },
   {
    "id": "interstices_shape",
    "type": "float"
   },
   {
    "id": "damaged_edges",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "cement_color",
    "type": "float3"
   },
   {
    "id": "tile_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "tearing",
    "type": "float"
   },
   {
    "id": "film",
    "type": "bool"
   },
   {
    "id": "creases",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "cardboard_color",
    "type": "float3"
   },
   {
    "id": "film_color",
    "type": "float3"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "edge_width",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "hardness",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "color_source",
    "type": "int"
   },
   {
    "id": "pseudo_random_seed",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "red_channel",
    "type": "float4"
   },
   {
    "id": "green_channel",
    "type": "float4"
   },
   {
    "id": "blue_channel",
    "type": "float4"
   },
   {
    "id": "monochrome",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "rotate_45_degrees",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "min",
    "type": "float"
   },
   {
    "id": "max",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Offset",
    "type": "float2"
   },
   {
    "id": "Blur_Mask",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "show_patch_areas",
    "type": "bool"
   },
   {
    "id": "is_normal",
    "type": "bool"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "edge_threshold",
    "type": "float"
   },
   {
    "id": "edge_blur",
    "type": "float"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "grid_resolution",
    "type": "int"
   },
   {
    "id": "src_matrix",
    "type": "float4"
   },
   {
    "id": "src_offset",
    "type": "float2"
   },
   {
    "id": "tgt_matrix",
    "type": "float4"
   },
   {
    "id": "tgt_offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "show_patch_areas",
    "type": "bool"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "edge_threshold",
    "type": "float"
   },
   {
    "id": "edge_blur",
    "type": "float"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "grid_resolution",
    "type": "int"
   },
   {
    "id": "src_matrix",
    "type": "float4"
   },
   {
    "id": "src_offset",
    "type": "float2"
   },
   {
    "id": "tgt_matrix",
    "type": "float4"
   },
   {
    "id": "tgt_offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "tiled",
    "type": "bool"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "custom_color_variation",
    "type": "bool"
   },
   {
    "id": "variation_hue",
    "type": "float"
   },
   {
    "id": "variation_chroma",
    "type": "float"
   },
   {
    "id": "variation_luma",
    "type": "float"
   },
   {
    "id": "mask_source",
    "type": "int"
   },
   {
    "id": "color",
    "type": "float3"
   },
   {
    "id": "mask_hue_range",
    "type": "float"
   },
   {
    "id": "mask_chroma_range",
    "type": "float"
   },
   {
    "id": "mask_luma_range",
    "type": "float"
   },
   {
    "id": "mask_blur",
    "type": "float"
   },
   {
    "id": "mask_smoothness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "source_color_mode",
    "type": "int"
   },
   {
    "id": "src_color",
    "type": "float3"
   },
   {
    "id": "target_color_mode",
    "type": "int"
   },
   {
    "id": "target_color",
    "type": "float3"
   },
   {
    "id": "custom_color_variation",
    "type": "bool"
   },
   {
    "id": "variation_hue",
    "type": "float"
   },
   {
    "id": "variation_chroma",
    "type": "float"
   },
   {
    "id": "variation_luma",
    "type": "float"
   },
   {
    "id": "use_mask",
    "type": "bool"
   },
   {
    "id": "mask_mode",
    "type": "int"
   },
   {
    "id": "mask_hue_range",
    "type": "float"
   },
   {
    "id": "mask_chroma_range",
    "type": "float"
   },
   {
    "id": "mask_luma_range",
    "type": "float"
   },
   {
    "id": "mask_blur",
    "type": "float"
   },
   {
    "id": "mask_smoothness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "temp",
    "type": "float"
   },
   {
    "id": "magreen",
    "type": "float"
   },
   {
    "id": "color_space",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "use_color_input",
    "type": "bool"
   },
   {
    "id": "color",
    "type": "float3"
   },
   {
    "id": "threshold",
    "type": "float"
   },
   {
    "id": "selection_fade",
    "type": "float"
   },
   {
    "id": "distance_color_space",
    "type": "int"
   },
   {
    "id": "distance_weights",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "columns_amount",
    "type": "int"
   },
   {
    "id": "shape_variation",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "moss",
    "type": "float"
   },
   {
    "id": "concrete_color",
    "type": "float3"
   },
   {
    "id": "moss_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "lighting_intensity",
    "type": "float"
   },
   {
    "id": "lighting_angle",
    "type": "float"
   },
   {
    "id": "diffuse_ao_intensity",
    "type": "float"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "moisture",
    "type": "float"
   },
   {
    "id": "paint",
    "type": "float"
   },
   {
    "id": "concrete_color",
    "type": "float3"
   },
   {
    "id": "moisture_color",
    "type": "float3"
   },
   {
    "id": "paint_color",
    "type": "float3"
   },
   {
    "id": "damages",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "bumps",
    "type": "float"
   },
   {
    "id": "cracks",
    "type": "float"
   },
   {
    "id": "concrete_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "weathering",
    "type": "float"
   },
   {
    "id": "pebbles",
    "type": "float"
   },
   {
    "id": "concrete_color",
    "type": "float3"
   },
   {
    "id": "pebbles_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "cracks",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "dirtiness_01_color",
    "type": "float3"
   },
   {
    "id": "dirtiness_02_color",
    "type": "float3"
   },
   {
    "id": "concrete_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "concrete_color",
    "type": "float3"
   },
   {
    "id": "variations",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "Luminosity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "Luminosity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "cracks_propagation",
    "type": "float"
   },
   {
    "id": "cracks_depth",
    "type": "float"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
   },
   {
    "id": "ao_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "warp_intensity",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "color_amount",
    "type": "int"
   },
   {
    "id": "color_1",
    "type": "float3"
   },
   {
    "id": "color_2",
    "type": "float3"
   },
   {
    "id": "color_3",
    "type": "float3"
   },
   {
    "id": "color_4",
    "type": "float3"
   },
   {
    "id": "color_5",
    "type": "float3"
   },
   {
    "id": "color_6",
    "type": "float3"
   },
   {
    "id": "color_7",
    "type": "float3"
   },
   {
    "id": "color_8",
    "type": "float3"
   },
   {
    "id": "color_9",
    "type": "float3"
   },
   {
    "id": "color_10",
    "type": "float3"
   },
   {
    "id": "color_11",
    "type": "float3"
   },
   {
    "id": "color_12",
    "type": "float3"
   },
   {
    "id": "color_13",
    "type": "float3"
   },
   {
    "id": "color_14",
    "type": "float3"
   },
   {
    "id": "color_15",
    "type": "float3"
   },
   {
    "id": "color_16",
    "type": "float3"
   },
   {
    "id": "palette_color_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "show_crop_area",
    "type": "bool"
   },
   {
    "id": "input_size",
    "type": "int2"
   },
   {
    "id": "background",
    "type": "float4"
   },
   {
    "id": "matrix",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "is_normal",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "filtering",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "show_crop_area",
    "type": "bool"
   },
   {
    "id": "input_size",
    "type": "int2"
   },
   {
    "id": "background",
    "type": "float"
   },
   {
    "id": "matrix",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "filtering",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "cross_section_coord",
    "type": "float"
   },
   {
    "id": "axis",
    "type": "int"
   },
   {
    "id": "show_helper",
    "type": "bool"
   },
   {
    "id": "helper_scale",
    "type": "float"
   },
   {
    "id": "helper_position",
    "type": "float2"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "height_offset",
    "type": "float"
   },
   {
    "id": "drawing_style",
    "type": "int"
   },
   {
    "id": "invert_gradient",
    "type": "bool"
   },
   {
    "id": "smooth_polygonal",
    "type": "bool"
   },
   {
    "id": "segment_amount",
    "type": "int"
   },
   {
    "id": "line_thickness",
    "type": "float"
   },
   {
    "id": "line_style",
    "type": "int"
   },
   {
    "id": "line_smoothness",
    "type": "float"
   },
   {
    "id": "color",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "orientation_offset",
    "type": "float2"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "orientation_offset",
    "type": "float2"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "invert_green",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "input_normal_type",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Normal_Intensity",
    "type": "float"
   },
   {
    "id": "Normal_Format",
    "type": "int"
   },
   {
    "id": "AO_Intensity",
    "type": "float"
   },
   {
    "id": "AO_Spread",
    "type": "float"
   },
   {
    "id": "Curvature_Intensity",
    "type": "float"
   },
   {
    "id": "Curvature_Softness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "iterations",
    "type": "int"
   },
   {
    "id": "distance",
    "type": "float"
   },
   {
    "id": "enable_dithering",
    "type": "bool"
   },
   {
    "id": "is_normal",
    "type": "bool"
   },
   {
    "id": "use_alpha_as_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "iterations",
    "type": "int"
   },
   {
    "id": "distance",
    "type": "float"
   },
   {
    "id": "enable_dithering",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "iterations",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "output",
    "type": "int"
   },
   {
    "id": "max_distance",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "distance_map_multiplier",
    "type": "float"
   },
   {
    "id": "angle_map_multiplier",
    "type": "float"
   },
   {
    "id": "angle_map_offset",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "pattern_amount",
    "type": "float"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_size_random",
    "type": "float2"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "edge_width",
    "type": "float"
   },
   {
    "id": "edge_roundness",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "tolerance",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "HighlightColor",
    "type": "float4"
   },
   {
    "id": "ShadowColor",
    "type": "float4"
   },
   {
    "id": "Gloss",
    "type": "float"
   },
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "LightAngle",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "exposure",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "extension_distance",
    "type": "float"
   },
   {
    "id": "extension_position",
    "type": "float"
   },
   {
    "id": "extension_angle",
    "type": "float"
   },
   {
    "id": "start_position",
    "type": "float2"
   },
   {
    "id": "end_position",
    "type": "float2"
   },
   {
    "id": "filtering_mode",
    "type": "int"
   },
   {
    "id": "show_helper",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "extension_distance",
    "type": "float"
   },
   {
    "id": "extension_position",
    "type": "float"
   },
   {
    "id": "extension_angle",
    "type": "float"
   },
   {
    "id": "start_position",
    "type": "float2"
   },
   {
    "id": "end_position",
    "type": "float2"
   },
   {
    "id": "start_luminance_offset",
    "type": "float"
   },
   {
    "id": "end_luminance_offset",
    "type": "float"
   },
   {
    "id": "luminance_offset_ignores_black_pixels",
    "type": "bool"
   },
   {
    "id": "filtering_mode",
    "type": "int"
   },
   {
    "id": "show_helper",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "pattern_scale",
    "type": "int"
   },
   {
    "id": "fabric_pattern_scale",
    "type": "int"
   },
   {
    "id": "creases_intensity",
    "type": "float"
   },
   {
    "id": "creases_frequency",
    "type": "int"
   },
   {
    "id": "Creases_Axis",
    "type": "int"
   },
   {
    "id": "stains_type",
    "type": "int"
   },
   {
    "id": "stains_amount",
    "type": "int"
   },
   {
    "id": "stains_size",
    "type": "float"
   },
   {
    "id": "stains_anisotropy",
    "type": "float"
   },
   {
    "id": "stains_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "color_01",
    "type": "float3"
   },
   {
    "id": "color_02",
    "type": "float3"
   },
   {
    "id": "color_03",
    "type": "float3"
   },
   {
    "id": "color_04",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "seams",
    "type": "bool"
   },
   {
    "id": "seams_offset",
    "type": "float"
   },
   {
    "id": "seams_color",
    "type": "float3"
   },
   {
    "id": "denim_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "nb_x",
    "type": "int"
   },
   {
    "id": "nb_y",
    "type": "int"
   },
   {
    "id": "dirt_amount",
    "type": "float"
   },
   {
    "id": "creases",
    "type": "float"
   },
   {
    "id": "creases_frequency",
    "type": "int"
   },
   {
    "id": "creases_warping",
    "type": "float"
   },
   {
    "id": "creases_axis",
    "type": "int"
   },
   {
    "id": "color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "Dust",
    "type": "float"
   },
   {
    "id": "Dirtiness",
    "type": "float"
   },
   {
    "id": "Edges_Wearing",
    "type": "float"
   },
   {
    "id": "Used",
    "type": "float"
   },
   {
    "id": "Age",
    "type": "float"
   },
   {
    "id": "Age_Threshlod",
    "type": "float"
   },
   {
    "id": "Age_Creases",
    "type": "float"
   },
   {
    "id": "Sharp_Edges_Scratches_Scale",
    "type": "float"
   },
   {
    "id": "Sharp_Edges_Scratches_Warp_Intensity",
    "type": "float"
   },
   {
    "id": "Old_Fabric_Desaturation",
    "type": "float"
   },
   {
    "id": "Old_Fabric_Brightness",
    "type": "float"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "profile",
    "type": "int"
   },
   {
    "id": "advanced",
    "type": "bool"
   },
   {
    "id": "profileOverride",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "output",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "hsl_adjustement",
    "type": "float3"
   },
   {
    "id": "hsl_random",
    "type": "float3"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_variation",
    "type": "float"
   },
   {
    "id": "multiply_by_bbox_size",
    "type": "float"
   },
   {
    "id": "angle_image_input_multiplier",
    "type": "float"
   },
   {
    "id": "slope_image_input_multiplier",
    "type": "float"
   },
   {
    "id": "multiply_by_slope_intensity",
    "type": "float"
   },
   {
    "id": "flat_slope_color",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "luminance_adjustement",
    "type": "float"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "tiling_mode",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_distribution_mode",
    "type": "int"
   },
   {
    "id": "pattern_distribution_jittering",
    "type": "float"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "size",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_map_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "rotation_autoscale",
    "type": "bool"
   },
   {
    "id": "position_offset",
    "type": "float2"
   },
   {
    "id": "position_offset_alignment",
    "type": "int"
   },
   {
    "id": "position_offset_random",
    "type": "float2"
   },
   {
    "id": "is_normal",
    "type": "bool"
   },
   {
    "id": "input_normal_format",
    "type": "int"
   },
   {
    "id": "hsl_adjustement",
    "type": "float3"
   },
   {
    "id": "hsl_random",
    "type": "float3"
   },
   {
    "id": "alpha_adjustment",
    "type": "float"
   },
   {
    "id": "alpha_random",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float4"
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
  ],
  "parameters": [
   {
    "id": "tiling_mode",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_distribution_mode",
    "type": "int"
   },
   {
    "id": "pattern_distribution_jittering",
    "type": "float"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "size",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_map_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "rotation_autoscale",
    "type": "bool"
   },
   {
    "id": "position_offset",
    "type": "float2"
   },
   {
    "id": "position_offset_alignment",
    "type": "int"
   },
   {
    "id": "position_offset_random",
    "type": "float2"
   },
   {
    "id": "luminance_range",
    "type": "float"
   },
   {
    "id": "luminance_range_random",
    "type": "float"
   },
   {
    "id": "luminance_offset",
    "type": "float"
   },
   {
    "id": "luminance_offset_random",
    "type": "float"
   },
   {
    "id": "luminance_offset_map_multiplier",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "output",
    "type": "int"
   },
   {
    "id": "ignore_shape_smaller_than",
    "type": "float"
   },
   {
    "id": "show_floodfill_data_table",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "warp_intensity",
    "type": "float"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Roughness",
    "type": "float"
   },
   {
    "id": "MinLevel",
    "type": "int"
   },
   {
    "id": "MaxLevel",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "GlobalOpacity",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "waves_scale",
    "type": "float"
   },
   {
    "id": "waves_rotation",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "waves_amount",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "affect_alpha_channel",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Glow_Amount",
    "type": "float"
   },
   {
    "id": "Clear_Amount",
    "type": "float"
   },
   {
    "id": "Glow_Size",
    "type": "float"
   },
   {
    "id": "Glow_Color",
    "type": "float4"
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
  ],
  "parameters": [
   {
    "id": "Glow_Amount",
    "type": "float"
   },
   {
    "id": "Clear_Amount",
    "type": "float"
   },
   {
    "id": "Glow_Size",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "point_1",
    "type": "float2"
   },
   {
    "id": "point_2",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "point_1",
    "type": "float2"
   },
   {
    "id": "point_2",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "point_1",
    "type": "float2"
   },
   {
    "id": "point_2",
    "type": "float2"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "rotation",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "rotation",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "position",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "point_1",
    "type": "float2"
   },
   {
    "id": "point_2",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "layers",
    "type": "int"
   },
   {
    "id": "amount",
    "type": "float"
   },
   {
    "id": "gravel_scale",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "grayscale_type",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "base_noisiness",
    "type": "float"
   },
   {
    "id": "dirt_specks_opacity",
    "type": "float"
   },
   {
    "id": "invert_dirt",
    "type": "bool"
   },
   {
    "id": "scratches_opacity",
    "type": "float"
   },
   {
    "id": "sharpen",
    "type": "float"
   },
   {
    "id": "large_variation_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "distortion",
    "type": "float"
   },
   {
    "id": "divisions",
    "type": "int"
   },
   {
    "id": "waves",
    "type": "int"
   },
   {
    "id": "details",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "warp_intensity",
    "type": "float"
   },
   {
    "id": "ridge_detail_opacity",
    "type": "float"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "crispness",
    "type": "float"
   },
   {
    "id": "dirt",
    "type": "float"
   },
   {
    "id": "micro_distortion",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "drip_length",
    "type": "float"
   },
   {
    "id": "shape_contrast",
    "type": "float"
   },
   {
    "id": "drip_crispness",
    "type": "float"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "leak_intensity",
    "type": "float"
   },
   {
    "id": "leak_scale",
    "type": "int"
   },
   {
    "id": "leak_angle_random",
    "type": "float"
   },
   {
    "id": "leak_crispness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "cracks",
    "type": "float"
   },
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "cracks",
    "type": "float"
   },
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "brush_pattern",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "main_grunge_intensity",
    "type": "float"
   },
   {
    "id": "invert_scratches",
    "type": "bool"
   },
   {
    "id": "scratches_intensity",
    "type": "float"
   },
   {
    "id": "grain_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "base_grunge_contrast",
    "type": "float"
   },
   {
    "id": "base_warp_intensity",
    "type": "float"
   },
   {
    "id": "streaks_intensity",
    "type": "float"
   },
   {
    "id": "noise_intensity",
    "type": "float"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "base_grunge_intensity",
    "type": "float"
   },
   {
    "id": "scratches_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "scratches_amount",
    "type": "float"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
   },
   {
    "id": "scratch_value_bias",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Position",
    "type": "float"
   },
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "scratch_quantity",
    "type": "float"
   },
   {
    "id": "tile_scratch",
    "type": "int"
   },
   {
    "id": "scratch_blur",
    "type": "float"
   },
   {
    "id": "scratch_width",
    "type": "float"
   },
   {
    "id": "scratch_length",
    "type": "float"
   },
   {
    "id": "scratch_masking",
    "type": "float"
   },
   {
    "id": "scratch_dirtiness",
    "type": "float"
   },
   {
    "id": "double_scratch",
    "type": "float"
   },
   {
    "id": "spots_opacity",
    "type": "float"
   },
   {
    "id": "tile_spots",
    "type": "int"
   },
   {
    "id": "dust",
    "type": "float"
   },
   {
    "id": "tile_grunge",
    "type": "int"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "scratch_spots_amount",
    "type": "float"
   },
   {
    "id": "scratch_spots_tiling",
    "type": "int"
   },
   {
    "id": "dust_intensity",
    "type": "float"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "splines_quantity",
    "type": "float"
   },
   {
    "id": "splines_distortion",
    "type": "float"
   },
   {
    "id": "splash_dirt_ratio",
    "type": "float"
   },
   {
    "id": "dust_spread",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "details",
    "type": "float"
   },
   {
    "id": "density",
    "type": "float"
   },
   {
    "id": "density_contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "density",
    "type": "float"
   },
   {
    "id": "scale",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "lut_intensity_by_input_alpha",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "use_world_units",
    "type": "bool"
   },
   {
    "id": "height_depth",
    "type": "float"
   },
   {
    "id": "surface_size",
    "type": "float"
   },
   {
    "id": "height_depth_cm",
    "type": "float"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "non_square",
    "type": "bool"
   },
   {
    "id": "gpu_optim",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "max_exposure",
    "type": "float"
   },
   {
    "id": "min_exposure",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "inputs",
    "type": "int"
   },
   {
    "id": "input_exposure_delta",
    "type": "float"
   },
   {
    "id": "output_auto_exposure",
    "type": "bool"
   },
   {
    "id": "output_exposure_offset",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "range_min",
    "type": "float"
   },
   {
    "id": "range_max",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "range_min",
    "type": "float"
   },
   {
    "id": "range_max",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "view_angle",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "voffset",
    "type": "float"
   },
   {
    "id": "terrain_mode",
    "type": "bool"
   },
   {
    "id": "inversedy",
    "type": "bool"
   },
   {
    "id": "normal_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Relief",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Normal_Intensity",
    "type": "float"
   },
   {
    "id": "Normal_Format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "surface_size",
    "type": "float"
   },
   {
    "id": "height_depth",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "sampling",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size_xy",
    "type": "float2"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "non_square",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "histogram_resolution",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "histogram_resolution",
    "type": "int"
   },
   {
    "id": "histogram_smoothing",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "range",
    "type": "float"
   },
   {
    "id": "position",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "histogram_resolution",
    "type": "int"
   },
   {
    "id": "automatic_scale",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "sampling",
    "type": "int"
   },
   {
    "id": "flip_y_axis",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Position",
    "type": "float"
   },
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "Invert_Position",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "custom_position",
    "type": "bool"
   },
   {
    "id": "position",
    "type": "float"
   },
   {
    "id": "custom_contrast",
    "type": "bool"
   },
   {
    "id": "contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "position",
    "type": "float"
   },
   {
    "id": "range",
    "type": "float"
   },
   {
    "id": "constrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "position",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "selection_mode",
    "type": "int"
   },
   {
    "id": "id_integer",
    "type": "int"
   },
   {
    "id": "id_range",
    "type": "int2"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "Dust",
    "type": "float"
   },
   {
    "id": "Dirtiness",
    "type": "float"
   },
   {
    "id": "Edges_Wearing",
    "type": "float"
   },
   {
    "id": "Used",
    "type": "float"
   },
   {
    "id": "Age",
    "type": "float"
   },
   {
    "id": "Age_Threshlod",
    "type": "float"
   },
   {
    "id": "Cracks_Scale",
    "type": "float"
   },
   {
    "id": "Cracks_Warp_Intensity",
    "type": "float"
   },
   {
    "id": "Sharp_Edges_Scratches_Scale",
    "type": "float"
   },
   {
    "id": "Sharp_Edges_Scratches_Warp_Intensity",
    "type": "float"
   },
   {
    "id": "Used_Leather_Desaturation",
    "type": "float"
   },
   {
    "id": "Used_Leather_Brightness",
    "type": "float"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Cancellation_Radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "warp_intensity",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Alpha_Blending",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Mask_Size",
    "type": "float"
   },
   {
    "id": "Mask_Precision",
    "type": "float"
   },
   {
    "id": "Mask_Warping",
    "type": "float"
   },
   {
    "id": "Pattern_size_width",
    "type": "float"
   },
   {
    "id": "Pattern_size_height",
    "type": "float"
   },
   {
    "id": "Disorder",
    "type": "float"
   },
   {
    "id": "Size_Variation",
    "type": "float"
   },
   {
    "id": "Octave",
    "type": "int"
   },
   {
    "id": "Rotation",
    "type": "float"
   },
   {
    "id": "Rotation_Variation",
    "type": "float"
   },
   {
    "id": "Background_Color",
    "type": "float4"
   },
   {
    "id": "Color_Variation",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Mask_Size",
    "type": "float"
   },
   {
    "id": "Mask_Precision",
    "type": "float"
   },
   {
    "id": "Mask_Warping",
    "type": "float"
   },
   {
    "id": "Pattern_size_width",
    "type": "float"
   },
   {
    "id": "Pattern_size_height",
    "type": "float"
   },
   {
    "id": "Disorder",
    "type": "float"
   },
   {
    "id": "Size_Variation",
    "type": "float"
   },
   {
    "id": "Octave",
    "type": "int"
   },
   {
    "id": "Rotation",
    "type": "float"
   },
   {
    "id": "Rotation_Variation",
    "type": "float"
   },
   {
    "id": "Background_Color",
    "type": "float"
   },
   {
    "id": "Luminosity_Variation",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Mask_Warping_H",
    "type": "float"
   },
   {
    "id": "Mask_Warping_V",
    "type": "float"
   },
   {
    "id": "Mask_Size_H",
    "type": "float"
   },
   {
    "id": "Mask_Size_V",
    "type": "float"
   },
   {
    "id": "Mask_Precision_H",
    "type": "float"
   },
   {
    "id": "Mask_Precision_V",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Mask_Warping_H",
    "type": "float"
   },
   {
    "id": "Mask_Warping_V",
    "type": "float"
   },
   {
    "id": "Mask_Size_H",
    "type": "float"
   },
   {
    "id": "Mask_Size_V",
    "type": "float"
   },
   {
    "id": "Mask_Precision_H",
    "type": "float"
   },
   {
    "id": "Mask_Precision_V",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "mask_filtering",
    "type": "float"
   },
   {
    "id": "threshold",
    "type": "float"
   },
   {
    "id": "tolerance",
    "type": "float"
   },
   {
    "id": "force_close_paths",
    "type": "bool"
   },
   {
    "id": "corner_threshold",
    "type": "float"
   },
   {
    "id": "startup_mode",
    "type": "int"
   },
   {
    "id": "startup_direction",
    "type": "float"
   },
   {
    "id": "startup_target_pos",
    "type": "float2"
   },
   {
    "id": "startup_func",
    "type": "float"
   },
   {
    "id": "order_mode",
    "type": "int"
   },
   {
    "id": "order_direction",
    "type": "float"
   },
   {
    "id": "order_func",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_normal",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "channel_emissive",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specularlevel",
    "type": "bool"
   },
   {
    "id": "channel_height",
    "type": "bool"
   },
   {
    "id": "channel_ambientocclusion",
    "type": "bool"
   },
   {
    "id": "channel_opacity",
    "type": "bool"
   },
   {
    "id": "diffuse_contrast",
    "type": "float"
   },
   {
    "id": "diffuse_luminosity",
    "type": "float"
   },
   {
    "id": "diffuse_hue",
    "type": "float"
   },
   {
    "id": "diffuse_saturation",
    "type": "float"
   },
   {
    "id": "diffuse_opacity",
    "type": "float"
   },
   {
    "id": "diffuse_blending_mode",
    "type": "int"
   },
   {
    "id": "basecolor_contrast",
    "type": "float"
   },
   {
    "id": "basecolor_luminosity",
    "type": "float"
   },
   {
    "id": "basecolor_hue",
    "type": "float"
   },
   {
    "id": "basecolor_saturation",
    "type": "float"
   },
   {
    "id": "basecolor_opacity",
    "type": "float"
   },
   {
    "id": "basecolor_blending_mode",
    "type": "int"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_contrast",
    "type": "float"
   },
   {
    "id": "specular_luminosity",
    "type": "float"
   },
   {
    "id": "specular_hue",
    "type": "float"
   },
   {
    "id": "specular_saturation",
    "type": "float"
   },
   {
    "id": "specular_opacity",
    "type": "float"
   },
   {
    "id": "specular_blending_mode",
    "type": "int"
   },
   {
    "id": "emissive_contrast",
    "type": "float"
   },
   {
    "id": "emissive_luminosity",
    "type": "float"
   },
   {
    "id": "emissive_hue",
    "type": "float"
   },
   {
    "id": "emissive_saturation",
    "type": "float"
   },
   {
    "id": "emissive_opacity",
    "type": "float"
   },
   {
    "id": "emissive_blending_mode",
    "type": "int"
   },
   {
    "id": "glossiness_contrast",
    "type": "float"
   },
   {
    "id": "glossiness_luminosity",
    "type": "float"
   },
   {
    "id": "glossiness_opacity",
    "type": "float"
   },
   {
    "id": "glossiness_blending_mode",
    "type": "int"
   },
   {
    "id": "roughness_contrast",
    "type": "float"
   },
   {
    "id": "roughness_luminosity",
    "type": "float"
   },
   {
    "id": "roughness_opacity",
    "type": "float"
   },
   {
    "id": "roughness_blending_mode",
    "type": "int"
   },
   {
    "id": "metallic_contrast",
    "type": "float"
   },
   {
    "id": "metallic_luminosity",
    "type": "float"
   },
   {
    "id": "metallic_opacity",
    "type": "float"
   },
   {
    "id": "metallic_blending_mode",
    "type": "int"
   },
   {
    "id": "specularlevel_contrast",
    "type": "float"
   },
   {
    "id": "specularlevel_luminosity",
    "type": "float"
   },
   {
    "id": "specularlevel_opacity",
    "type": "float"
   },
   {
    "id": "specularlevel_blendingmode",
    "type": "int"
   },
   {
    "id": "height_contrast",
    "type": "float"
   },
   {
    "id": "height_luminosity",
    "type": "float"
   },
   {
    "id": "height_opacity",
    "type": "float"
   },
   {
    "id": "height_blending_mode",
    "type": "int"
   },
   {
    "id": "ambient_occlusion_contrast",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_opacity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_blending_mode",
    "type": "int"
   },
   {
    "id": "ambient_occlusion_luminosity",
    "type": "float"
   },
   {
    "id": "opacity_contrast",
    "type": "float"
   },
   {
    "id": "opacity_luminosity",
    "type": "float"
   },
   {
    "id": "opacity_opacity",
    "type": "float"
   },
   {
    "id": "opacity_blending_mode",
    "type": "int"
   },
   {
    "id": "color_mask",
    "type": "bool"
   },
   {
    "id": "fuzziness",
    "type": "float"
   },
   {
    "id": "color",
    "type": "float3"
   },
   {
    "id": "padding",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_normal",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "channel_emissive",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specularlevel",
    "type": "bool"
   },
   {
    "id": "channel_height",
    "type": "bool"
   },
   {
    "id": "channel_ambientocclusion",
    "type": "bool"
   },
   {
    "id": "channel_opacity",
    "type": "bool"
   },
   {
    "id": "diffuse_opacity",
    "type": "float"
   },
   {
    "id": "diffuse_blending_mode",
    "type": "int"
   },
   {
    "id": "basecolor_opacity",
    "type": "float"
   },
   {
    "id": "basecolor_blending_mode",
    "type": "int"
   },
   {
    "id": "normal_opacity",
    "type": "float"
   },
   {
    "id": "specular_opacity",
    "type": "float"
   },
   {
    "id": "specular_blending_mode",
    "type": "int"
   },
   {
    "id": "emissive_opacity",
    "type": "float"
   },
   {
    "id": "emissive_blending_mode",
    "type": "int"
   },
   {
    "id": "glossiness_opacity",
    "type": "float"
   },
   {
    "id": "glossiness_blending_mode",
    "type": "int"
   },
   {
    "id": "roughness_opacity",
    "type": "float"
   },
   {
    "id": "roughness_blending_mode",
    "type": "int"
   },
   {
    "id": "metallic_opacity",
    "type": "float"
   },
   {
    "id": "metallic_blending_mode",
    "type": "int"
   },
   {
    "id": "specularlevel_opacity",
    "type": "float"
   },
   {
    "id": "specularlevel_blending_mode",
    "type": "int"
   },
   {
    "id": "ambient_occlusion_opacity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_blending_mode",
    "type": "int"
   },
   {
    "id": "height_opacity",
    "type": "float"
   },
   {
    "id": "height_blending_mode",
    "type": "int"
   },
   {
    "id": "opacity_opacity",
    "type": "float"
   },
   {
    "id": "opacity_blending_mode",
    "type": "int"
   },
   {
    "id": "ColorMask",
    "type": "bool"
   },
   {
    "id": "Color",
    "type": "float3"
   },
   {
    "id": "Fuzziness",
    "type": "float"
   },
   {
    "id": "Padding",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_normal",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "channel_emissive",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specular_level",
    "type": "bool"
   },
   {
    "id": "channel_height",
    "type": "bool"
   },
   {
    "id": "channel_ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "channel_opacity",
    "type": "bool"
   },
   {
    "id": "channel_anisotropy_level",
    "type": "bool"
   },
   {
    "id": "channel_anisotropy_angle",
    "type": "bool"
   },
   {
    "id": "channel_mask",
    "type": "bool"
   },
   {
    "id": "show_patch_areas",
    "type": "bool"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "edge_use_threshold_per_channel",
    "type": "bool"
   },
   {
    "id": "edge_threshold",
    "type": "float"
   },
   {
    "id": "edge_threshold_baseColor",
    "type": "float"
   },
   {
    "id": "edge_threshold_normal",
    "type": "float"
   },
   {
    "id": "edge_threshold_height",
    "type": "float"
   },
   {
    "id": "edge_blur",
    "type": "float"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "grid_resolution",
    "type": "int"
   },
   {
    "id": "src_matrix",
    "type": "float4"
   },
   {
    "id": "src_offset",
    "type": "float2"
   },
   {
    "id": "tgt_matrix",
    "type": "float4"
   },
   {
    "id": "tgt_offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_normal",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "channel_emissive",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specularlevel",
    "type": "bool"
   },
   {
    "id": "channel_ambientocclusion",
    "type": "bool"
   },
   {
    "id": "channel_height",
    "type": "bool"
   },
   {
    "id": "channel_opacity",
    "type": "bool"
   },
   {
    "id": "diffuse_color",
    "type": "float3"
   },
   {
    "id": "diffuse_opacity",
    "type": "float"
   },
   {
    "id": "diffuse_blending_mode",
    "type": "int"
   },
   {
    "id": "basecolor_color",
    "type": "float3"
   },
   {
    "id": "basecolor_opacity",
    "type": "float"
   },
   {
    "id": "basecolor_blending_mode",
    "type": "int"
   },
   {
    "id": "normal_source",
    "type": "int"
   },
   {
    "id": "normal_blending_mode",
    "type": "int"
   },
   {
    "id": "normal_height_intensity",
    "type": "float"
   },
   {
    "id": "normal_height_opacity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "specular_color",
    "type": "float3"
   },
   {
    "id": "specular_opacity",
    "type": "float"
   },
   {
    "id": "specular_blending_mode",
    "type": "int"
   },
   {
    "id": "emissive_color",
    "type": "float3"
   },
   {
    "id": "emissive_opacity",
    "type": "float"
   },
   {
    "id": "emissive_blending_mode",
    "type": "int"
   },
   {
    "id": "glossiness_color",
    "type": "float"
   },
   {
    "id": "glossiness_opacity",
    "type": "float"
   },
   {
    "id": "glossiness_blending_mode",
    "type": "int"
   },
   {
    "id": "roughness_color",
    "type": "float"
   },
   {
    "id": "roughness_opacity",
    "type": "float"
   },
   {
    "id": "roughness_blending_mode",
    "type": "int"
   },
   {
    "id": "metallic_color",
    "type": "float"
   },
   {
    "id": "metallic_opacity",
    "type": "float"
   },
   {
    "id": "metallic_blending_mode",
    "type": "int"
   },
   {
    "id": "specularlevel_color",
    "type": "float"
   },
   {
    "id": "specularlevel_opacity",
    "type": "float"
   },
   {
    "id": "specularlevel_blending_mode",
    "type": "int"
   },
   {
    "id": "height_color",
    "type": "float"
   },
   {
    "id": "height_opacity",
    "type": "float"
   },
   {
    "id": "height_blending_mode",
    "type": "int"
   },
   {
    "id": "ambient_occlusion_color",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_opacity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_blending_mode",
    "type": "int"
   },
   {
    "id": "opacity_color",
    "type": "float"
   },
   {
    "id": "opacity_opacity",
    "type": "float"
   },
   {
    "id": "opacity_blending_mode",
    "type": "int"
   },
   {
    "id": "color_mask",
    "type": "bool"
   },
   {
    "id": "fuzziness",
    "type": "float"
   },
   {
    "id": "color",
    "type": "float3"
   },
   {
    "id": "padding",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_normal",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "channel_emissive",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specular_level",
    "type": "bool"
   },
   {
    "id": "channel_height",
    "type": "bool"
   },
   {
    "id": "channel_ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "channel_opacity",
    "type": "bool"
   },
   {
    "id": "channel_anisotropy_level",
    "type": "bool"
   },
   {
    "id": "channel_anisotropy_angle",
    "type": "bool"
   },
   {
    "id": "channel_mask",
    "type": "bool"
   },
   {
    "id": "show_crop_area",
    "type": "bool"
   },
   {
    "id": "input_size",
    "type": "int2"
   },
   {
    "id": "matrix",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_normal",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "channel_emissive",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specularlevel",
    "type": "bool"
   },
   {
    "id": "channel_height",
    "type": "bool"
   },
   {
    "id": "channel_ambientocclusion",
    "type": "bool"
   },
   {
    "id": "channel_opacity",
    "type": "bool"
   },
   {
    "id": "height_offset",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "colorcorrect",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse_1",
    "type": "bool"
   },
   {
    "id": "basecolor_1",
    "type": "bool"
   },
   {
    "id": "normal_1",
    "type": "bool"
   },
   {
    "id": "specular_1",
    "type": "bool"
   },
   {
    "id": "glossiness_1",
    "type": "bool"
   },
   {
    "id": "roughness_1",
    "type": "bool"
   },
   {
    "id": "metallic_1",
    "type": "bool"
   },
   {
    "id": "height_1",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion_1",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion_3",
    "type": "bool"
   },
   {
    "id": "curvature_1",
    "type": "bool"
   },
   {
    "id": "height_2",
    "type": "bool"
   },
   {
    "id": "normal_3",
    "type": "bool"
   },
   {
    "id": "vertex_color_1",
    "type": "bool"
   },
   {
    "id": "normalWS_1",
    "type": "bool"
   },
   {
    "id": "diffuse_ao",
    "type": "float"
   },
   {
    "id": "diffuse_sharp_edges",
    "type": "float"
   },
   {
    "id": "diffuse_color_from_vertex_color",
    "type": "float"
   },
   {
    "id": "diffuse_pre_lighting",
    "type": "float"
   },
   {
    "id": "diffuse_cartoon_lighting_balance",
    "type": "float"
   },
   {
    "id": "diffuse_cartoon_pre_lighting_layers",
    "type": "int"
   },
   {
    "id": "diffuse_cartoon_outlines",
    "type": "float"
   },
   {
    "id": "basecolor_ao",
    "type": "float"
   },
   {
    "id": "basecolor_sharp_edges",
    "type": "float"
   },
   {
    "id": "basecolor_from_vertex_color",
    "type": "float"
   },
   {
    "id": "normal_material_intensity",
    "type": "float"
   },
   {
    "id": "specular_ao",
    "type": "float"
   },
   {
    "id": "specular_bright_sharp_edges",
    "type": "float"
   },
   {
    "id": "specular_cartoon_outlines",
    "type": "float"
   },
   {
    "id": "glossiness_dark_sharp_edges",
    "type": "float"
   },
   {
    "id": "roughness_bright_sharp_edges",
    "type": "float"
   },
   {
    "id": "roughness_cartoon_outlines",
    "type": "float"
   },
   {
    "id": "metallic_bright_sharp_edges",
    "type": "float"
   },
   {
    "id": "metallic_cartoon_outlines",
    "type": "float"
   },
   {
    "id": "height_material_intensity",
    "type": "float"
   },
   {
    "id": "height_material_blending_type",
    "type": "int"
   },
   {
    "id": "ao_materiel_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "materials",
    "type": "int"
   },
   {
    "id": "material_1_enable",
    "type": "bool"
   },
   {
    "id": "material_2_enable",
    "type": "bool"
   },
   {
    "id": "material_3_enable",
    "type": "bool"
   },
   {
    "id": "material_4_enable",
    "type": "bool"
   },
   {
    "id": "material_5_enable",
    "type": "bool"
   },
   {
    "id": "material_6_enable",
    "type": "bool"
   },
   {
    "id": "material_7_enable",
    "type": "bool"
   },
   {
    "id": "material_8_enable",
    "type": "bool"
   },
   {
    "id": "material_9_enable",
    "type": "bool"
   },
   {
    "id": "material_10_enable",
    "type": "bool"
   },
   {
    "id": "material_11_enable",
    "type": "bool"
   },
   {
    "id": "material_12_enable",
    "type": "bool"
   },
   {
    "id": "material_13_enable",
    "type": "bool"
   },
   {
    "id": "material_14_enable",
    "type": "bool"
   },
   {
    "id": "material_15_enable",
    "type": "bool"
   },
   {
    "id": "material_16_enable",
    "type": "bool"
   },
   {
    "id": "material_1_color",
    "type": "float3"
   },
   {
    "id": "material_2_color",
    "type": "float3"
   },
   {
    "id": "material_3_color",
    "type": "float3"
   },
   {
    "id": "material_4_color",
    "type": "float3"
   },
   {
    "id": "material_5_color",
    "type": "float3"
   },
   {
    "id": "material_6_color",
    "type": "float3"
   },
   {
    "id": "material_7_color",
    "type": "float3"
   },
   {
    "id": "material_8_color",
    "type": "float3"
   },
   {
    "id": "material_9_color",
    "type": "float3"
   },
   {
    "id": "material_10_color",
    "type": "float3"
   },
   {
    "id": "material_11_color",
    "type": "float3"
   },
   {
    "id": "material_12_color",
    "type": "float3"
   },
   {
    "id": "material_13_color",
    "type": "float3"
   },
   {
    "id": "material_14_color",
    "type": "float3"
   },
   {
    "id": "material_15_color",
    "type": "float3"
   },
   {
    "id": "material_16_color",
    "type": "float3"
   },
   {
    "id": "fuzziness",
    "type": "float"
   },
   {
    "id": "padding",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "emissive",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "specularlevel",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "opacity",
    "type": "bool"
   },
   {
    "id": "Switch",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "normal_scale_and_skew_transformation",
    "type": "bool"
   },
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "emissive",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "specularlevel",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "opacity",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "kernel_size",
    "type": "int"
   },
   {
    "id": "filter_type",
    "type": "int"
   },
   {
    "id": "affect_alpha",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "kernel_size",
    "type": "int"
   },
   {
    "id": "filter_type",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "Rotate_45_Degrees",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "Rotation",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "ambient_occlusion_1",
    "type": "bool"
   },
   {
    "id": "uv_masks_1",
    "type": "bool"
   },
   {
    "id": "curvature_1",
    "type": "bool"
   },
   {
    "id": "height_1",
    "type": "bool"
   },
   {
    "id": "position_grayscale_1",
    "type": "bool"
   },
   {
    "id": "thickness_1",
    "type": "bool"
   },
   {
    "id": "normal_1",
    "type": "bool"
   },
   {
    "id": "position_1",
    "type": "bool"
   },
   {
    "id": "vertex_color_1",
    "type": "bool"
   },
   {
    "id": "direction_1",
    "type": "bool"
   },
   {
    "id": "normalWS_1",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "lines_number",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "lines_number",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "scratches",
    "type": "float"
   },
   {
    "id": "deep_rust",
    "type": "float"
   },
   {
    "id": "rust",
    "type": "float"
   },
   {
    "id": "rust_drips",
    "type": "float"
   },
   {
    "id": "bullets_impacts_amount",
    "type": "float"
   },
   {
    "id": "bullets_impacts_size",
    "type": "float"
   },
   {
    "id": "bullets_impacts_cracks",
    "type": "float"
   },
   {
    "id": "rust_color",
    "type": "float3"
   },
   {
    "id": "deep_rust_color",
    "type": "float3"
   },
   {
    "id": "metal_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "metal_color",
    "type": "float3"
   },
   {
    "id": "metal_roughness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "scratches",
    "type": "float"
   },
   {
    "id": "scratches_angle",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "metal_color",
    "type": "float3"
   },
   {
    "id": "metal_roughness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "rivets_amount",
    "type": "int2"
   },
   {
    "id": "riivets_offset",
    "type": "float"
   },
   {
    "id": "paint_peeling",
    "type": "float"
   },
   {
    "id": "rust",
    "type": "float"
   },
   {
    "id": "paint_color",
    "type": "float3"
   },
   {
    "id": "Sub_Layer_Color",
    "type": "float3"
   },
   {
    "id": "rust_color",
    "type": "float3"
   },
   {
    "id": "metal_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "pattern_amount",
    "type": "int"
   },
   {
    "id": "rust",
    "type": "float"
   },
   {
    "id": "paint_peeling",
    "type": "float"
   },
   {
    "id": "Rust_Drips",
    "type": "float"
   },
   {
    "id": "bullets_impacts_amount",
    "type": "float"
   },
   {
    "id": "bullets_impacts_size",
    "type": "float"
   },
   {
    "id": "Bullets_Impacts_Cracks",
    "type": "float"
   },
   {
    "id": "paint_color",
    "type": "float3"
   },
   {
    "id": "rust_Color",
    "type": "float3"
   },
   {
    "id": "metal_color",
    "type": "float3"
   },
   {
    "id": "metal_roughness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "roughness_variation",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "hard_edges_amount",
    "type": "float"
   },
   {
    "id": "wear_softness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "dirt_level",
    "type": "float"
   },
   {
    "id": "dirt_contrast",
    "type": "float"
   },
   {
    "id": "grunge_amount",
    "type": "float"
   },
   {
    "id": "edges_masking",
    "type": "float"
   },
   {
    "id": "use_custom_grunge",
    "type": "bool"
   },
   {
    "id": "grunge_scale",
    "type": "int"
   },
   {
    "id": "triplanar",
    "type": "bool"
   },
   {
    "id": "blending_contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "rust_spreading",
    "type": "float"
   },
   {
    "id": "rust_contrast",
    "type": "float"
   },
   {
    "id": "spreading_smoothness",
    "type": "float"
   },
   {
    "id": "drips_intensity",
    "type": "float"
   },
   {
    "id": "drips_smoothness",
    "type": "float"
   },
   {
    "id": "drips_samples_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "occlusion_amount",
    "type": "float"
   },
   {
    "id": "noise_opacity",
    "type": "float"
   },
   {
    "id": "override_noise",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "blur_radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "damages_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "variation",
    "type": "float"
   },
   {
    "id": "override_variation_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "radius",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "convex_edges_width",
    "type": "float"
   },
   {
    "id": "convex_softness",
    "type": "float"
   },
   {
    "id": "convex_intensity",
    "type": "float"
   },
   {
    "id": "concave_edges_width",
    "type": "float"
   },
   {
    "id": "concave_softness",
    "type": "float"
   },
   {
    "id": "concave_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "edge_selection",
    "type": "float"
   },
   {
    "id": "variation",
    "type": "float"
   },
   {
    "id": "override_variation_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "threshold",
    "type": "float"
   },
   {
    "id": "edges_width",
    "type": "float"
   },
   {
    "id": "disorder",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "wear_level",
    "type": "float"
   },
   {
    "id": "wear_contrast",
    "type": "float"
   },
   {
    "id": "edges_smoothness",
    "type": "float"
   },
   {
    "id": "grunge_amount",
    "type": "float"
   },
   {
    "id": "ao_masking",
    "type": "float"
   },
   {
    "id": "curvature_weight",
    "type": "float"
   },
   {
    "id": "use_custom_grunge",
    "type": "bool"
   },
   {
    "id": "triplanar",
    "type": "bool"
   },
   {
    "id": "triplanar_blending_contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "thickness_threshold",
    "type": "float"
   },
   {
    "id": "override_noise",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "dirt_height",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "Contrast",
    "type": "float"
   },
   {
    "id": "variation",
    "type": "float"
   },
   {
    "id": "lenght",
    "type": "float"
   },
   {
    "id": "occlude",
    "type": "int"
   },
   {
    "id": "override_variation_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "wear_level",
    "type": "float"
   },
   {
    "id": "wear_contrast",
    "type": "float"
   },
   {
    "id": "grunge_amount",
    "type": "float"
   },
   {
    "id": "ao_masking",
    "type": "float"
   },
   {
    "id": "curvature_weight",
    "type": "float"
   },
   {
    "id": "use_custom_grunge",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "horizontal_angle",
    "type": "float"
   },
   {
    "id": "vertical_angle",
    "type": "float"
   },
   {
    "id": "highlight_glossiness",
    "type": "float"
   },
   {
    "id": "highlight_level",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "triplanar",
    "type": "bool"
   },
   {
    "id": "triplanar_contrast",
    "type": "float"
   },
   {
    "id": "grunge_intensity",
    "type": "float"
   },
   {
    "id": "grunge_scale",
    "type": "int"
   },
   {
    "id": "use_custom_grunge",
    "type": "bool"
   },
   {
    "id": "second_custom_grunge",
    "type": "float"
   },
   {
    "id": "grunge_invert",
    "type": "bool"
   },
   {
    "id": "ao_intensity",
    "type": "float"
   },
   {
    "id": "ao_range",
    "type": "float"
   },
   {
    "id": "ao_contrast",
    "type": "float"
   },
   {
    "id": "ao_noisiness",
    "type": "float"
   },
   {
    "id": "ao_noise_scale",
    "type": "int"
   },
   {
    "id": "ao_noise_type",
    "type": "int"
   },
   {
    "id": "ao_invert",
    "type": "bool"
   },
   {
    "id": "curv_global_intensity",
    "type": "float"
   },
   {
    "id": "curvature_convex_intensity",
    "type": "float"
   },
   {
    "id": "curv_convex_contrast",
    "type": "float"
   },
   {
    "id": "curvature_invert_convex",
    "type": "bool"
   },
   {
    "id": "curvature_concave_intensity",
    "type": "float"
   },
   {
    "id": "curv_cocave_contrast",
    "type": "float"
   },
   {
    "id": "curvature_invert_concave",
    "type": "bool"
   },
   {
    "id": "curavture_smoothness",
    "type": "float"
   },
   {
    "id": "curv_boost",
    "type": "float"
   },
   {
    "id": "curvature_noisiness",
    "type": "float"
   },
   {
    "id": "curvature_noise_scale",
    "type": "int"
   },
   {
    "id": "curvature_noise_type",
    "type": "int"
   },
   {
    "id": "position_intensity",
    "type": "float"
   },
   {
    "id": "position_range",
    "type": "float"
   },
   {
    "id": "position_contrast",
    "type": "float"
   },
   {
    "id": "posiiton_invert",
    "type": "bool"
   },
   {
    "id": "wsnormal_intensity",
    "type": "float"
   },
   {
    "id": "world_space_normal_top_intensity",
    "type": "float"
   },
   {
    "id": "world_space_normal_bottom_intensity",
    "type": "float"
   },
   {
    "id": "world_space_normal_front_intensity",
    "type": "float"
   },
   {
    "id": "world_space_normal_back_intensity",
    "type": "float"
   },
   {
    "id": "world_space_normal_right_intensity",
    "type": "float"
   },
   {
    "id": "world_space_normal_left_intensity",
    "type": "float"
   },
   {
    "id": "scratches_intensity",
    "type": "float"
   },
   {
    "id": "scratches_amount",
    "type": "int"
   },
   {
    "id": "scratches_scale",
    "type": "float"
   },
   {
    "id": "scatter_intensity",
    "type": "float"
   },
   {
    "id": "scatter_scale",
    "type": "int"
   },
   {
    "id": "scatter_density",
    "type": "float"
   },
   {
    "id": "scatter_size",
    "type": "float"
   },
   {
    "id": "scatter_size_variation",
    "type": "float"
   },
   {
    "id": "scatter_lum_variation",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "wear_level",
    "type": "float"
   },
   {
    "id": "wear_contrast",
    "type": "float"
   },
   {
    "id": "edges_smoothness",
    "type": "float"
   },
   {
    "id": "grunge_amount",
    "type": "float"
   },
   {
    "id": "grunge_scale",
    "type": "int"
   },
   {
    "id": "ao_masking",
    "type": "float"
   },
   {
    "id": "curvature_weight",
    "type": "float"
   },
   {
    "id": "use_custom_grunge",
    "type": "bool"
   },
   {
    "id": "triplanar",
    "type": "bool"
   },
   {
    "id": "triplanar_blending",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "occlusion",
    "type": "float"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "variation",
    "type": "float"
   },
   {
    "id": "override_variation_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "variation",
    "type": "float"
   },
   {
    "id": "override_variation_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "occlusion",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "level",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "scratches_lenght",
    "type": "float"
   },
   {
    "id": "occlude_axis",
    "type": "int"
   },
   {
    "id": "occlude_axis_intensity",
    "type": "float"
   },
   {
    "id": "occlusion",
    "type": "float"
   },
   {
    "id": "sharpen_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "warp_intensity",
    "type": "float"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "mirror_type",
    "type": "int"
   },
   {
    "id": "axis_x",
    "type": "float"
   },
   {
    "id": "axis_y",
    "type": "float"
   },
   {
    "id": "invert_x",
    "type": "bool"
   },
   {
    "id": "invert_y",
    "type": "bool"
   },
   {
    "id": "corner_type",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "mirror_type",
    "type": "int"
   },
   {
    "id": "axis_x",
    "type": "float"
   },
   {
    "id": "axis_y",
    "type": "float"
   },
   {
    "id": "invert_x",
    "type": "bool"
   },
   {
    "id": "invert_y",
    "type": "bool"
   },
   {
    "id": "corner_type",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "criterion",
    "type": "int"
   },
   {
    "id": "gaussian",
    "type": "bool"
   },
   {
    "id": "affect_alpha",
    "type": "bool"
   },
   {
    "id": "iterations",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "criterion",
    "type": "int"
   },
   {
    "id": "gaussian",
    "type": "bool"
   },
   {
    "id": "iterations",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "color_selection_mode",
    "type": "int"
   },
   {
    "id": "color_position",
    "type": "float2"
   },
   {
    "id": "color_index",
    "type": "int"
   },
   {
    "id": "color_selection_spread",
    "type": "float"
   },
   {
    "id": "color_selection_contrast",
    "type": "float"
   },
   {
    "id": "distance_color_space",
    "type": "int"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "override_color",
    "type": "float3"
   },
   {
    "id": "hsl",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_angle",
    "type": "float"
   },
   {
    "id": "pattern_angle_random",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy",
    "type": "float"
   },
   {
    "id": "disorder_anisotropy_angle",
    "type": "float"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_angle",
    "type": "float"
   },
   {
    "id": "pattern_angle_random",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Samples",
    "type": "int"
   },
   {
    "id": "Intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Samples",
    "type": "int"
   },
   {
    "id": "Intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "moss_propagation",
    "type": "float"
   },
   {
    "id": "Moss_Color",
    "type": "float3"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "input_count",
    "type": "int"
   },
   {
    "id": "show_patch_areas",
    "type": "bool"
   },
   {
    "id": "is_normal",
    "type": "bool"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "edge_threshold",
    "type": "float"
   },
   {
    "id": "edge_blur",
    "type": "float"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "grid_resolution",
    "type": "int"
   },
   {
    "id": "src_matrix",
    "type": "float4"
   },
   {
    "id": "src_offset",
    "type": "float2"
   },
   {
    "id": "tgt_matrix",
    "type": "float4"
   },
   {
    "id": "tgt_offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "input_count",
    "type": "int"
   },
   {
    "id": "show_patch_areas",
    "type": "bool"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "edge_threshold",
    "type": "float"
   },
   {
    "id": "edge_blur",
    "type": "float"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "grid_resolution",
    "type": "int"
   },
   {
    "id": "src_matrix",
    "type": "float4"
   },
   {
    "id": "src_offset",
    "type": "float2"
   },
   {
    "id": "tgt_matrix",
    "type": "float4"
   },
   {
    "id": "tgt_offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "input_count",
    "type": "int"
   },
   {
    "id": "tiled",
    "type": "bool"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "balance",
    "type": "float"
   },
   {
    "id": "custom_color_variation",
    "type": "bool"
   },
   {
    "id": "variation_hue",
    "type": "float"
   },
   {
    "id": "variation_chroma",
    "type": "float"
   },
   {
    "id": "variation_luma",
    "type": "float"
   },
   {
    "id": "mask_source",
    "type": "int"
   },
   {
    "id": "color",
    "type": "float3"
   },
   {
    "id": "mask_hue_range",
    "type": "float"
   },
   {
    "id": "mask_chroma_range",
    "type": "float"
   },
   {
    "id": "mask_luma_range",
    "type": "float"
   },
   {
    "id": "mask_blur",
    "type": "float"
   },
   {
    "id": "mask_smoothness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "input_count",
    "type": "int"
   },
   {
    "id": "show_crop_area",
    "type": "bool"
   },
   {
    "id": "input_size",
    "type": "int2"
   },
   {
    "id": "background",
    "type": "float4"
   },
   {
    "id": "matrix",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "is_normal",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "input_count",
    "type": "int"
   },
   {
    "id": "show_crop_area",
    "type": "bool"
   },
   {
    "id": "input_size",
    "type": "int2"
   },
   {
    "id": "background",
    "type": "float"
   },
   {
    "id": "matrix",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "warp_angle",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "directions",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "warp_angle",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "directions",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Materials",
    "type": "int"
   },
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "emissive",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "specularlevel",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "opacity",
    "type": "bool"
   },
   {
    "id": "Material_2_Color",
    "type": "float3"
   },
   {
    "id": "Material_2_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_2_Padding",
    "type": "float"
   },
   {
    "id": "Material_3_Color",
    "type": "float3"
   },
   {
    "id": "Material_3_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_3_Padding",
    "type": "float"
   },
   {
    "id": "Material_4_Color",
    "type": "float3"
   },
   {
    "id": "Material_4_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_4_Padding",
    "type": "float"
   },
   {
    "id": "Material_5_Color",
    "type": "float3"
   },
   {
    "id": "Material_5_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_5_Padding",
    "type": "float"
   },
   {
    "id": "Material_6_Color",
    "type": "float3"
   },
   {
    "id": "Material_6_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_6_Padding",
    "type": "float"
   },
   {
    "id": "Material_7_Color",
    "type": "float3"
   },
   {
    "id": "Material_7_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_7_Padding",
    "type": "float"
   },
   {
    "id": "Material_8_Color",
    "type": "float3"
   },
   {
    "id": "Material_8_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_8_Padding",
    "type": "float"
   },
   {
    "id": "Material_9_Color",
    "type": "float3"
   },
   {
    "id": "Material_9_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_9_Padding",
    "type": "float"
   },
   {
    "id": "Material_10_Color",
    "type": "float3"
   },
   {
    "id": "Material_10_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_10_Padding",
    "type": "float"
   },
   {
    "id": "Material_11_Color",
    "type": "float3"
   },
   {
    "id": "Material_11_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_11_Padding",
    "type": "float"
   },
   {
    "id": "Material_12_Color",
    "type": "float3"
   },
   {
    "id": "Material_12_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_12_Padding",
    "type": "float"
   },
   {
    "id": "Material_13_Color",
    "type": "float3"
   },
   {
    "id": "Material_13_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_13_Padding",
    "type": "float"
   },
   {
    "id": "Material_14_Color",
    "type": "float3"
   },
   {
    "id": "Material_14_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_14_Padding",
    "type": "float"
   },
   {
    "id": "Material_15_Color",
    "type": "float3"
   },
   {
    "id": "Material_15_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_15_Padding",
    "type": "float"
   },
   {
    "id": "Material_16_Color",
    "type": "float3"
   },
   {
    "id": "Material_16_Fuzziness",
    "type": "float"
   },
   {
    "id": "Material_16_Padding",
    "type": "float"
   },
   {
    "id": "Opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "input_number",
    "type": "int"
   },
   {
    "id": "input_selection",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "input_number",
    "type": "int"
   },
   {
    "id": "input_selection",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "samples_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "samples_amount",
    "type": "int"
   },
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "first_sample_light_angle",
    "type": "float"
   },
   {
    "id": "next_sample_light_angle",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "output_gamma",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Offset1X",
    "type": "float"
   },
   {
    "id": "Offset1Y",
    "type": "float"
   },
   {
    "id": "Offset2X",
    "type": "float"
   },
   {
    "id": "Offset2Y",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Offset1X",
    "type": "float"
   },
   {
    "id": "Offset1Y",
    "type": "float"
   },
   {
    "id": "Offset2X",
    "type": "float"
   },
   {
    "id": "Offset2Y",
    "type": "float"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "tile_mode",
    "type": "int"
   },
   {
    "id": "tile",
    "type": "int2"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "tile_safe_rotation",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
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
  ],
  "parameters": [
   {
    "id": "tile_mode",
    "type": "int"
   },
   {
    "id": "tile",
    "type": "int2"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "tile_safe_rotation",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Anisotropy",
    "type": "float"
   },
   {
    "id": "Asymmetry",
    "type": "float"
   },
   {
    "id": "Angle",
    "type": "float"
   },
   {
    "id": "Samples",
    "type": "int"
   },
   {
    "id": "Blades",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Anisotropy",
    "type": "float"
   },
   {
    "id": "Asymmetry",
    "type": "float"
   },
   {
    "id": "Angle",
    "type": "float"
   },
   {
    "id": "Samples",
    "type": "int"
   },
   {
    "id": "Blades",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "warp_angle",
    "type": "float"
   },
   {
    "id": "warp_angle_input_multiplier",
    "type": "float"
   },
   {
    "id": "trail_mode",
    "type": "int"
   },
   {
    "id": "trail_length",
    "type": "float"
   },
   {
    "id": "trail_fade",
    "type": "float"
   },
   {
    "id": "trail_curve",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "warp_angle",
    "type": "float"
   },
   {
    "id": "warp_angle_input_multiplier",
    "type": "float"
   },
   {
    "id": "trail_mode",
    "type": "int"
   },
   {
    "id": "trail_length",
    "type": "float"
   },
   {
    "id": "trail_fade",
    "type": "float"
   },
   {
    "id": "trail_curve",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "rotation_angle_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_angle_offset",
    "type": "float"
   },
   {
    "id": "use_pivot_position_map",
    "type": "bool"
   },
   {
    "id": "pivot_position",
    "type": "float2"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "rotation_angle_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_angle_offset",
    "type": "float"
   },
   {
    "id": "use_pivot_position_map",
    "type": "bool"
   },
   {
    "id": "pivot_position",
    "type": "float2"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "Use_Mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Direction",
    "type": "float"
   },
   {
    "id": "Slope_Angle",
    "type": "float"
   },
   {
    "id": "Invert_Y",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "blend_quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "invert_red",
    "type": "bool"
   },
   {
    "id": "invert_green",
    "type": "bool"
   },
   {
    "id": "invert_blue",
    "type": "bool"
   },
   {
    "id": "invert_alpha",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Relief_Balance",
    "type": "float3"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "global_opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "relief_balance",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
   },
   {
    "id": "height_normalize",
    "type": "bool"
   },
   {
    "id": "sample_quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "handle_scale_and_skew_transformation",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "intensity_range",
    "type": "float2"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "rotation_angle",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "planks_q,ount",
    "type": "int"
   },
   {
    "id": "screws",
    "type": "float"
   },
   {
    "id": "paint_age",
    "type": "float"
   },
   {
    "id": "planks_color_variation",
    "type": "float"
   },
   {
    "id": "paint_color",
    "type": "float3"
   },
   {
    "id": "planks_color",
    "type": "float3"
   },
   {
    "id": "paint_roughness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "dust",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "edges_wearing",
    "type": "float"
   },
   {
    "id": "paint_peeling",
    "type": "float"
   },
   {
    "id": "rust",
    "type": "float"
   },
   {
    "id": "rust_peeling",
    "type": "float"
   },
   {
    "id": "rust_verdigris",
    "type": "int"
   },
   {
    "id": "paint_cracks_scale",
    "type": "float"
   },
   {
    "id": "paint_cracks_warp_intensity",
    "type": "float"
   },
   {
    "id": "sharp_edges_scratches_scale",
    "type": "float"
   },
   {
    "id": "sharp_ddges_scratches_warp_intensity",
    "type": "float"
   },
   {
    "id": "raw_metal_color",
    "type": "float3"
   },
   {
    "id": "raw_metal_specular_color",
    "type": "float3"
   },
   {
    "id": "raw_metal_glossiness_value",
    "type": "float"
   },
   {
    "id": "raw_metal_roughness_value",
    "type": "float"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "metallic_intensity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "up_vector",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "point_1_position",
    "type": "float2"
   },
   {
    "id": "point_1_color",
    "type": "float3"
   },
   {
    "id": "point_1_contrast",
    "type": "float"
   },
   {
    "id": "point_2_position",
    "type": "float2"
   },
   {
    "id": "point_2_color",
    "type": "float3"
   },
   {
    "id": "point_2_contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "point_position",
    "type": "float2"
   },
   {
    "id": "top_color",
    "type": "float3"
   },
   {
    "id": "bottom_color",
    "type": "float3"
   },
   {
    "id": "contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "position_mode",
    "type": "int"
   },
   {
    "id": "show_ground_grid",
    "type": "bool"
   },
   {
    "id": "up_vector",
    "type": "int"
   },
   {
    "id": "point_1_uv_position",
    "type": "float2"
   },
   {
    "id": "point_2_uv_position",
    "type": "float2"
   },
   {
    "id": "point_1_world_position",
    "type": "float3"
   },
   {
    "id": "point_2_position",
    "type": "float3"
   },
   {
    "id": "line_absolute_height",
    "type": "float"
   },
   {
    "id": "distance_from_origin",
    "type": "float"
   },
   {
    "id": "camera_position",
    "type": "float3"
   },
   {
    "id": "shape_color_mode",
    "type": "int"
   },
   {
    "id": "shape_color",
    "type": "float3"
   },
   {
    "id": "shape_temperature",
    "type": "float"
   },
   {
    "id": "shape_image_uv_mode",
    "type": "int"
   },
   {
    "id": "shape_image_repeat_spacing",
    "type": "float"
   },
   {
    "id": "shape_image_gamma",
    "type": "int"
   },
   {
    "id": "shape_exposure",
    "type": "float"
   },
   {
    "id": "line_rotation",
    "type": "float"
   },
   {
    "id": "line_thickness",
    "type": "float"
   },
   {
    "id": "shape_pattern",
    "type": "int"
   },
   {
    "id": "shape_pattern_hardness",
    "type": "float"
   },
   {
    "id": "shape_pattern_uv_mode",
    "type": "int"
   },
   {
    "id": "shape_pattern_repeat_spacing",
    "type": "float"
   },
   {
    "id": "enable_ground_clipping",
    "type": "bool"
   },
   {
    "id": "ground_height",
    "type": "float"
   },
   {
    "id": "enable_background_input",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "background_image_input_gamma",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "enable",
    "type": "bool"
   },
   {
    "id": "show_frames_helper",
    "type": "bool"
   },
   {
    "id": "frame_thickness",
    "type": "float"
   },
   {
    "id": "patch_scale",
    "type": "float"
   },
   {
    "id": "patch_size",
    "type": "float2"
   },
   {
    "id": "patch_rotation",
    "type": "float"
   },
   {
    "id": "patch_alpha",
    "type": "int"
   },
   {
    "id": "patch_hardness",
    "type": "float"
   },
   {
    "id": "source_rotation_offset",
    "type": "float"
   },
   {
    "id": "source_position",
    "type": "float2"
   },
   {
    "id": "patch_position",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "sun_pos",
    "type": "float2"
   },
   {
    "id": "turbidity",
    "type": "float"
   },
   {
    "id": "albedo",
    "type": "float"
   },
   {
    "id": "ground_color",
    "type": "float3"
   },
   {
    "id": "exposure",
    "type": "float"
   },
   {
    "id": "sun_size",
    "type": "float"
   },
   {
    "id": "sun_intensity",
    "type": "float"
   },
   {
    "id": "sky_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "position_mode",
    "type": "int"
   },
   {
    "id": "show_ground_grid",
    "type": "bool"
   },
   {
    "id": "up_vector",
    "type": "int"
   },
   {
    "id": "plane_uv_position",
    "type": "float2"
   },
   {
    "id": "plane_world_position",
    "type": "float3"
   },
   {
    "id": "plane_absolute_height",
    "type": "float"
   },
   {
    "id": "distance_from_origin",
    "type": "float"
   },
   {
    "id": "camera_position",
    "type": "float3"
   },
   {
    "id": "shape_color_mode",
    "type": "int"
   },
   {
    "id": "shape_color",
    "type": "float3"
   },
   {
    "id": "shape_temperature",
    "type": "float"
   },
   {
    "id": "shape_image_uv_mode",
    "type": "int"
   },
   {
    "id": "shape_image_gamma",
    "type": "int"
   },
   {
    "id": "shape_exposure",
    "type": "float"
   },
   {
    "id": "plane_scale",
    "type": "float"
   },
   {
    "id": "plane_size",
    "type": "float2"
   },
   {
    "id": "plane_rotation",
    "type": "float3"
   },
   {
    "id": "shape_pattern",
    "type": "int"
   },
   {
    "id": "shape_pattern_hardness",
    "type": "float"
   },
   {
    "id": "shape_pattern_uv_mode",
    "type": "int"
   },
   {
    "id": "enable_ground_clipping",
    "type": "bool"
   },
   {
    "id": "ground_height",
    "type": "float"
   },
   {
    "id": "enable_background_input",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "background_image_input_gamma",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "direction_angle",
    "type": "float"
   },
   {
    "id": "pre_rotation_around_pole",
    "type": "float"
   },
   {
    "id": "post_rotation_around_pole",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "shape_color",
    "type": "float3"
   },
   {
    "id": "shape_intensity",
    "type": "float"
   },
   {
    "id": "shape_soft_borders",
    "type": "float"
   },
   {
    "id": "hotspot_intensity",
    "type": "float"
   },
   {
    "id": "hotspot_size",
    "type": "float"
   },
   {
    "id": "hotspot_falloff",
    "type": "float"
   },
   {
    "id": "hotspot_position",
    "type": "float2"
   },
   {
    "id": "enable_background",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "enable_texture_input",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "shape_color_mode",
    "type": "int"
   },
   {
    "id": "shape_color",
    "type": "float3"
   },
   {
    "id": "shape_temperature",
    "type": "float"
   },
   {
    "id": "shape_image_input_gamma",
    "type": "int"
   },
   {
    "id": "shape_exposure",
    "type": "float"
   },
   {
    "id": "shape_hardness",
    "type": "float"
   },
   {
    "id": "hotspot_exposure",
    "type": "float"
   },
   {
    "id": "hotspot_size",
    "type": "float"
   },
   {
    "id": "hotspot_falloff",
    "type": "float"
   },
   {
    "id": "hotspot_position",
    "type": "float2"
   },
   {
    "id": "enable_background_input",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "background_image_input_gamma",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "position_mode",
    "type": "int"
   },
   {
    "id": "up_vector",
    "type": "int"
   },
   {
    "id": "sphere_world_position",
    "type": "float3"
   },
   {
    "id": "sphere_uv_position",
    "type": "float2"
   },
   {
    "id": "distance_from_origin",
    "type": "float"
   },
   {
    "id": "camera_position",
    "type": "float3"
   },
   {
    "id": "sphere_color_mode",
    "type": "int"
   },
   {
    "id": "sphere_color",
    "type": "float3"
   },
   {
    "id": "sphere_temperature",
    "type": "float"
   },
   {
    "id": "shere_image_gamma",
    "type": "int"
   },
   {
    "id": "sphere_rotation",
    "type": "float2"
   },
   {
    "id": "sphere_exposure",
    "type": "float"
   },
   {
    "id": "sphere_radius",
    "type": "float"
   },
   {
    "id": "sphere_hardness",
    "type": "float"
   },
   {
    "id": "shading",
    "type": "int"
   },
   {
    "id": "shading_light_world_position",
    "type": "float3"
   },
   {
    "id": "penombra_transparency",
    "type": "float"
   },
   {
    "id": "enable_background_input",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "background_image_input_gamma",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "enable_horizon_correction",
    "type": "bool"
   },
   {
    "id": "horizon_p1",
    "type": "float2"
   },
   {
    "id": "horizon_p2",
    "type": "float2"
   },
   {
    "id": "horizontal_rotation",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "opacity",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "pleat",
    "type": "float"
   },
   {
    "id": "creases",
    "type": "float"
   },
   {
    "id": "paper_color",
    "type": "float3"
   },
   {
    "id": "paper_roughness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "spline_precision",
    "type": "int"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "nbSides",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "trace_corners",
    "type": "bool"
   },
   {
    "id": "trace_vertices",
    "type": "bool"
   },
   {
    "id": "thickness",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "quality",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "pbr_workflow",
    "type": "int"
   },
   {
    "id": "tolerance",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "pbr_workflow",
    "type": "int"
   },
   {
    "id": "material_preset",
    "type": "int"
   },
   {
    "id": "basecolor",
    "type": "float3"
   },
   {
    "id": "metallic",
    "type": "float"
   },
   {
    "id": "diffuse_color",
    "type": "float3"
   },
   {
    "id": "specular",
    "type": "float3"
   },
   {
    "id": "specular_presets",
    "type": "int"
   },
   {
    "id": "specular_range",
    "type": "float"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "roughness_grunge_amount",
    "type": "float"
   },
   {
    "id": "glossiness",
    "type": "float"
   },
   {
    "id": "glossiness_grunge_amount",
    "type": "float"
   },
   {
    "id": "grunge_tiling",
    "type": "int"
   },
   {
    "id": "grunge_custom_input",
    "type": "bool"
   },
   {
    "id": "normal_from_height_intensity",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "user_diffuse",
    "type": "bool"
   },
   {
    "id": "user_basecolor",
    "type": "bool"
   },
   {
    "id": "user_normal",
    "type": "bool"
   },
   {
    "id": "user_specular",
    "type": "bool"
   },
   {
    "id": "user_glossiness",
    "type": "bool"
   },
   {
    "id": "user_roughness",
    "type": "bool"
   },
   {
    "id": "user_metallic",
    "type": "bool"
   },
   {
    "id": "user_ao",
    "type": "bool"
   },
   {
    "id": "user_height",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "albedo_range",
    "type": "int"
   },
   {
    "id": "metal_reflectance_range",
    "type": "int"
   },
   {
    "id": "overlay_maps",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "specular_values",
    "type": "int"
   },
   {
    "id": "specular_range",
    "type": "float"
   },
   {
    "id": "specular_range_glass",
    "type": "float"
   },
   {
    "id": "ior",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "metal_colors",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
   },
   {
    "id": "tile_offset",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "point_number",
    "type": "int"
   },
   {
    "id": "global_smoothness_adjustment",
    "type": "float"
   },
   {
    "id": "point_number_input",
    "type": "int"
   },
   {
    "id": "p1_properties",
    "type": "float3"
   },
   {
    "id": "p2_properties",
    "type": "float3"
   },
   {
    "id": "p3_properties",
    "type": "float3"
   },
   {
    "id": "p4_properties",
    "type": "float3"
   },
   {
    "id": "p5_properties",
    "type": "float3"
   },
   {
    "id": "p6_properties",
    "type": "float3"
   },
   {
    "id": "p7_properties",
    "type": "float3"
   },
   {
    "id": "p8_properties",
    "type": "float3"
   },
   {
    "id": "p9_properties",
    "type": "float3"
   },
   {
    "id": "p10_properties",
    "type": "float3"
   },
   {
    "id": "p1",
    "type": "float2"
   },
   {
    "id": "p2",
    "type": "float2"
   },
   {
    "id": "p3",
    "type": "float2"
   },
   {
    "id": "p4",
    "type": "float2"
   },
   {
    "id": "p5",
    "type": "float2"
   },
   {
    "id": "p6",
    "type": "float2"
   },
   {
    "id": "p7",
    "type": "float2"
   },
   {
    "id": "p8",
    "type": "float2"
   },
   {
    "id": "p9",
    "type": "float2"
   },
   {
    "id": "p10",
    "type": "float2"
   },
   {
    "id": "show_labels",
    "type": "bool"
   },
   {
    "id": "labels_size",
    "type": "float"
   },
   {
    "id": "show_points",
    "type": "bool"
   },
   {
    "id": "points_size",
    "type": "float"
   },
   {
    "id": "hide_first_point",
    "type": "bool"
   },
   {
    "id": "hide_last_point",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Sides",
    "type": "int"
   },
   {
    "id": "Explode",
    "type": "float"
   },
   {
    "id": "TriangleSize",
    "type": "float2"
   },
   {
    "id": "Scale",
    "type": "float"
   },
   {
    "id": "AutoScale",
    "type": "bool"
   },
   {
    "id": "Rotation",
    "type": "float"
   },
   {
    "id": "Gradient",
    "type": "bool"
   },
   {
    "id": "GradientInvert",
    "type": "bool"
   },
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "non_square_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "Sides",
    "type": "int"
   },
   {
    "id": "Scale",
    "type": "float"
   },
   {
    "id": "Rotation",
    "type": "float"
   },
   {
    "id": "Curve",
    "type": "float"
   },
   {
    "id": "Gradient",
    "type": "float"
   },
   {
    "id": "InvertGradient",
    "type": "bool"
   },
   {
    "id": "autoscale",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "exponent",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "exponent",
    "type": "float"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "p00",
    "type": "float2"
   },
   {
    "id": "p01",
    "type": "float2"
   },
   {
    "id": "p10",
    "type": "float2"
   },
   {
    "id": "p11",
    "type": "float2"
   },
   {
    "id": "culling",
    "type": "int"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "sampling",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "p00",
    "type": "float2"
   },
   {
    "id": "p01",
    "type": "float2"
   },
   {
    "id": "p10",
    "type": "float2"
   },
   {
    "id": "p11",
    "type": "float2"
   },
   {
    "id": "culling",
    "type": "int"
   },
   {
    "id": "enable_tiling",
    "type": "bool"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "sampling",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "p00",
    "type": "float2"
   },
   {
    "id": "p01",
    "type": "float2"
   },
   {
    "id": "p10",
    "type": "float2"
   },
   {
    "id": "p11",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "Quantize_R",
    "type": "int"
   },
   {
    "id": "Quantize_G",
    "type": "int"
   },
   {
    "id": "Quantize_B",
    "type": "int"
   },
   {
    "id": "Quantize_A",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "color_amount",
    "type": "int"
   },
   {
    "id": "contour_smoothing",
    "type": "float"
   },
   {
    "id": "dithering",
    "type": "float"
   },
   {
    "id": "dithering_pattern",
    "type": "int"
   },
   {
    "id": "ignore_alpha",
    "type": "bool"
   },
   {
    "id": "distance_color_space",
    "type": "int"
   },
   {
    "id": "id_sort_mode",
    "type": "int"
   },
   {
    "id": "downscale_filtering",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "steps",
    "type": "int"
   },
   {
    "id": "offset",
    "type": "float"
   },
   {
    "id": "slope",
    "type": "float"
   },
   {
    "id": "slope_curve",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "center_position",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "center_position",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "SourceColor",
    "type": "float3"
   },
   {
    "id": "TargetColor",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "SourceColor",
    "type": "float3"
   },
   {
    "id": "TargetColor",
    "type": "float3"
   },
   {
    "id": "SourceRange",
    "type": "float"
   },
   {
    "id": "threshold",
    "type": "float"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "dust",
    "type": "float"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "edges_wearing",
    "type": "float"
   },
   {
    "id": "used_rock",
    "type": "float"
   },
   {
    "id": "cracks_scale",
    "type": "float"
   },
   {
    "id": "cracks_intensity",
    "type": "float"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "age_threshlod",
    "type": "float"
   },
   {
    "id": "sharp_edges_scratches_scale",
    "type": "float"
   },
   {
    "id": "sharp_edges_scratches_warp_intensity",
    "type": "float"
   },
   {
    "id": "used_rock_desaturation",
    "type": "float"
   },
   {
    "id": "used_rock_brightness",
    "type": "float"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "joints",
    "type": "int"
   },
   {
    "id": "concrete_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "use_physical_size",
    "type": "bool"
   },
   {
    "id": "physical_size",
    "type": "float3"
   },
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "distribution",
    "type": "int"
   },
   {
    "id": "max_distance",
    "type": "float"
   },
   {
    "id": "spread_angle",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "use_physical_size",
    "type": "bool"
   },
   {
    "id": "physical_size",
    "type": "float3"
   },
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "distribution",
    "type": "int"
   },
   {
    "id": "max_distance",
    "type": "float"
   },
   {
    "id": "spread_angle",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "output_color_space",
    "type": "int"
   },
   {
    "id": "photon_grid_size",
    "type": "int"
   },
   {
    "id": "surface_height_scale",
    "type": "float"
   },
   {
    "id": "surface_height_position",
    "type": "float"
   },
   {
    "id": "surface_ior",
    "type": "float"
   },
   {
    "id": "photon_size",
    "type": "float"
   },
   {
    "id": "dispersion",
    "type": "float"
   },
   {
    "id": "jittering",
    "type": "float"
   },
   {
    "id": "light_position",
    "type": "float2"
   },
   {
    "id": "background_color",
    "type": "float3"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "output_color_space",
    "type": "int"
   },
   {
    "id": "photon_grid_size",
    "type": "int"
   },
   {
    "id": "surface_height_scale",
    "type": "float"
   },
   {
    "id": "surface_height_position",
    "type": "float"
   },
   {
    "id": "surface_ior",
    "type": "float"
   },
   {
    "id": "photon_size",
    "type": "float"
   },
   {
    "id": "jittering",
    "type": "float"
   },
   {
    "id": "light_position",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "quality",
    "type": "int"
   },
   {
    "id": "compute_bounces",
    "type": "bool"
   },
   {
    "id": "environment_rotation",
    "type": "float"
   },
   {
    "id": "environment_exposure",
    "type": "float"
   },
   {
    "id": "emissive_intensity",
    "type": "float"
   },
   {
    "id": "emissive_color_space",
    "type": "int"
   },
   {
    "id": "ibl_shadows_in_raw_irradiance_alpha",
    "type": "bool"
   },
   {
    "id": "emissive_lod_bias",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "light_position",
    "type": "float2"
   },
   {
    "id": "light_intensity",
    "type": "float"
   },
   {
    "id": "light_size",
    "type": "float2"
   },
   {
    "id": "light_scale",
    "type": "float"
   },
   {
    "id": "keep_light_above_horizon",
    "type": "bool"
   },
   {
    "id": "shadows_opacity",
    "type": "float"
   },
   {
    "id": "shadows_attenuation",
    "type": "float"
   },
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "max_shadow_length",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "mask",
    "type": "bool"
   },
   {
    "id": "rust_spreading",
    "type": "float"
   },
   {
    "id": "spreading_smoothness",
    "type": "float"
   },
   {
    "id": "vernish_damage_scale",
    "type": "float"
   },
   {
    "id": "drips_intensity",
    "type": "float"
   },
   {
    "id": "drips_samples_amount",
    "type": "int"
   },
   {
    "id": "drips_smoothness",
    "type": "float"
   },
   {
    "id": "diffuse_intensity",
    "type": "float"
   },
   {
    "id": "basecolor_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "specular_intensity",
    "type": "float"
   },
   {
    "id": "glossiness_intensity",
    "type": "float"
   },
   {
    "id": "roughness_intensity",
    "type": "float"
   },
   {
    "id": "metallic_intensity",
    "type": "float"
   },
   {
    "id": "height_intensity",
    "type": "float"
   },
   {
    "id": "ambient_occlusion_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "tile",
    "type": "int"
   },
   {
    "id": "offset_mode",
    "type": "int"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "tile_safe_rotation",
    "type": "bool"
   },
   {
    "id": "symmetry",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "mipmapmode",
    "type": "int"
   },
   {
    "id": "manualmiplevel",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "tile",
    "type": "int"
   },
   {
    "id": "offset_mode",
    "type": "int"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "tile_safe_rotation",
    "type": "bool"
   },
   {
    "id": "symmetry",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "mipmapmode",
    "type": "int"
   },
   {
    "id": "manualmiplevel",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "spline_input",
    "type": "int"
   },
   {
    "id": "spline_index",
    "type": "int"
   },
   {
    "id": "sline_range",
    "type": "int2"
   },
   {
    "id": "scatter_mode",
    "type": "int"
   },
   {
    "id": "shape_amount",
    "type": "int"
   },
   {
    "id": "shape_distribution_along_spline",
    "type": "int"
   },
   {
    "id": "shape_spacing",
    "type": "float"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "shape_pivot",
    "type": "float2"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_variation",
    "type": "float"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "pattern_input_alpha_mode",
    "type": "int"
   },
   {
    "id": "pattern_distribution_jiterring",
    "type": "float"
   },
   {
    "id": "override_first_pattern",
    "type": "bool"
   },
   {
    "id": "first_pattern_input_index",
    "type": "int"
   },
   {
    "id": "override_last_pattern",
    "type": "bool"
   },
   {
    "id": "last_pattern_input_index",
    "type": "int"
   },
   {
    "id": "duplicates_distribution_mode",
    "type": "int"
   },
   {
    "id": "duplicates_amount",
    "type": "int"
   },
   {
    "id": "duplicates_local_offset",
    "type": "float2"
   },
   {
    "id": "duplicates_offset_center",
    "type": "float2"
   },
   {
    "id": "duplicates_spread_angle",
    "type": "float"
   },
   {
    "id": "duplicates_offset_distance",
    "type": "float"
   },
   {
    "id": "duplicates_rotation",
    "type": "float"
   },
   {
    "id": "duplicates_offset_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "offset_attenuation_by_thickness",
    "type": "float"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "size_thickness_affects",
    "type": "int"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "size_random",
    "type": "float2"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "thickness_scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "scale_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "pattern_scale_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "local_offset",
    "type": "float2"
   },
   {
    "id": "local_offset_random",
    "type": "float2"
   },
   {
    "id": "local_offset_random_center",
    "type": "float2"
   },
   {
    "id": "local_offset_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "local_offset_attenuation_by_thickness",
    "type": "float"
   },
   {
    "id": "offset_on_spline",
    "type": "float"
   },
   {
    "id": "random_offset_on_spline",
    "type": "float"
   },
   {
    "id": "rotation_align_with_tangent",
    "type": "bool"
   },
   {
    "id": "rotation_around_pivot",
    "type": "float"
   },
   {
    "id": "rotation_around_pivot_random",
    "type": "float"
   },
   {
    "id": "rotation_around_pivot_random_center",
    "type": "float"
   },
   {
    "id": "rotation_around_center",
    "type": "float"
   },
   {
    "id": "rotation_around_center_random",
    "type": "float"
   },
   {
    "id": "rotation_around_center_random_center",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "color_mode",
    "type": "int"
   },
   {
    "id": "shape_base_color",
    "type": "float4"
   },
   {
    "id": "color_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "color_map_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "random_color",
    "type": "float4"
   },
   {
    "id": "random_color_center",
    "type": "float4"
   },
   {
    "id": "spline_thickness_color_multiplier",
    "type": "float"
   },
   {
    "id": "shape_scale_color_multiplier",
    "type": "float"
   },
   {
    "id": "shape_index_color_multiplier",
    "type": "float"
   },
   {
    "id": "spline_height_color_multiplier",
    "type": "float"
   },
   {
    "id": "random_color_luminance",
    "type": "float"
   },
   {
    "id": "spline_thickness_alpha_multiplier",
    "type": "float"
   },
   {
    "id": "shape_scale_alpha_multiplier",
    "type": "float"
   },
   {
    "id": "shape_index_alpha_multiplier",
    "type": "float"
   },
   {
    "id": "spline_height_alpha_multiplier",
    "type": "float"
   },
   {
    "id": "random_alpha_luminance",
    "type": "float"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_map_threshold",
    "type": "float"
   },
   {
    "id": "mask_map_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "invert_mask_map",
    "type": "bool"
   },
   {
    "id": "mask_invert",
    "type": "bool"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "spline_input",
    "type": "int"
   },
   {
    "id": "spline_index",
    "type": "int"
   },
   {
    "id": "sline_range",
    "type": "int2"
   },
   {
    "id": "scatter_mode",
    "type": "int"
   },
   {
    "id": "shape_amount",
    "type": "int"
   },
   {
    "id": "shape_distribution_along_spline",
    "type": "int"
   },
   {
    "id": "shape_spacing",
    "type": "float"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "shape_pivot",
    "type": "float2"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_variation",
    "type": "float"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "pattern_distribution_jiterring",
    "type": "float"
   },
   {
    "id": "override_first_pattern",
    "type": "bool"
   },
   {
    "id": "first_pattern_input_index",
    "type": "int"
   },
   {
    "id": "override_last_pattern",
    "type": "bool"
   },
   {
    "id": "last_pattern_input_index",
    "type": "int"
   },
   {
    "id": "duplicates_distribution_mode",
    "type": "int"
   },
   {
    "id": "duplicates_amount",
    "type": "int"
   },
   {
    "id": "duplicates_local_offset",
    "type": "float2"
   },
   {
    "id": "duplicates_offset_center",
    "type": "float2"
   },
   {
    "id": "duplicates_spread_angle",
    "type": "float"
   },
   {
    "id": "duplicates_offset_distance",
    "type": "float"
   },
   {
    "id": "duplicates_rotation",
    "type": "float"
   },
   {
    "id": "duplicates_offset_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "offset_attenuation_by_thickness",
    "type": "float"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "size_thickness_affects",
    "type": "int"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "size_random",
    "type": "float2"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "thickness_scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "scale_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "pattern_scale_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "local_offset",
    "type": "float2"
   },
   {
    "id": "local_offset_random",
    "type": "float2"
   },
   {
    "id": "local_offset_random_center",
    "type": "float2"
   },
   {
    "id": "local_offset_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "local_offset_attenuation_by_thickness",
    "type": "float"
   },
   {
    "id": "offset_on_spline",
    "type": "float"
   },
   {
    "id": "random_offset_on_spline",
    "type": "float"
   },
   {
    "id": "rotation_align_with_tangent",
    "type": "bool"
   },
   {
    "id": "rotation_around_pivot",
    "type": "float"
   },
   {
    "id": "rotation_around_pivot_random",
    "type": "float"
   },
   {
    "id": "rotation_around_pivot_random_center",
    "type": "float"
   },
   {
    "id": "rotation_around_center",
    "type": "float"
   },
   {
    "id": "rotation_around_center_random",
    "type": "float"
   },
   {
    "id": "rotation_around_center_random_center",
    "type": "float"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "shape_base_color",
    "type": "float"
   },
   {
    "id": "shape_base_color_multiplier",
    "type": "float"
   },
   {
    "id": "spline_thickness_color_multiplier",
    "type": "float"
   },
   {
    "id": "shape_scale_color_multiplier",
    "type": "float"
   },
   {
    "id": "shape_index_color_multiplier",
    "type": "float"
   },
   {
    "id": "random_luminance",
    "type": "float"
   },
   {
    "id": "hemisphere_height_mode",
    "type": "int"
   },
   {
    "id": "spline_height_color_multiplier",
    "type": "float"
   },
   {
    "id": "height_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "height_map_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_map_threshold",
    "type": "float"
   },
   {
    "id": "mask_map_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "invert_mask_map",
    "type": "bool"
   },
   {
    "id": "mask_invert",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "side",
    "type": "int"
   },
   {
    "id": "amount_mode",
    "type": "int"
   },
   {
    "id": "spline_amount_per_spline",
    "type": "int"
   },
   {
    "id": "spline_spacing",
    "type": "float"
   },
   {
    "id": "spline_type",
    "type": "int"
   },
   {
    "id": "custom_spline_selection",
    "type": "int"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "left_right_symmetry_mode",
    "type": "int"
   },
   {
    "id": "left_right_random_link",
    "type": "bool"
   },
   {
    "id": "spline_pivot_mode",
    "type": "int"
   },
   {
    "id": "pivot_position_along_spline",
    "type": "float"
   },
   {
    "id": "pivot_absolute_position",
    "type": "float2"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "scale_map_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "scale_start_end_attenuation",
    "type": "float2"
   },
   {
    "id": "local_offset",
    "type": "float2"
   },
   {
    "id": "offset_on_spline_range",
    "type": "int"
   },
   {
    "id": "offset_on_spline",
    "type": "float"
   },
   {
    "id": "random_offset_range",
    "type": "int"
   },
   {
    "id": "random_offset_on_spline",
    "type": "float"
   },
   {
    "id": "offset_by_thickness",
    "type": "float"
   },
   {
    "id": "custom_spline_alignment",
    "type": "int"
   },
   {
    "id": "rotation_mode",
    "type": "int"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "left_right_angle",
    "type": "float"
   },
   {
    "id": "left_right_angle_random",
    "type": "float"
   },
   {
    "id": "rotation_map_input_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_map_input_sampling_mode",
    "type": "int"
   },
   {
    "id": "rotation_map_input_affects",
    "type": "int"
   },
   {
    "id": "start_height_mode",
    "type": "int"
   },
   {
    "id": "start_height_multiplier",
    "type": "float"
   },
   {
    "id": "start_height_offset",
    "type": "float"
   },
   {
    "id": "start_height",
    "type": "float"
   },
   {
    "id": "end_height_mode",
    "type": "int"
   },
   {
    "id": "end_height_multiplier",
    "type": "float"
   },
   {
    "id": "end_height_offset",
    "type": "float"
   },
   {
    "id": "end_height",
    "type": "float"
   },
   {
    "id": "start_thickness_mode",
    "type": "int"
   },
   {
    "id": "start_thickness_multiplier",
    "type": "float"
   },
   {
    "id": "start_thickness_offset",
    "type": "float"
   },
   {
    "id": "start_thickness",
    "type": "float"
   },
   {
    "id": "end_thickness_mode",
    "type": "int"
   },
   {
    "id": "end_thickness_multiplier",
    "type": "float"
   },
   {
    "id": "end_thickness_offset",
    "type": "float"
   },
   {
    "id": "end_thickness",
    "type": "float"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "thickness_px",
    "type": "float"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "background_intensity",
    "type": "float"
   },
   {
    "id": "custom_spline_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "spline_number",
    "type": "int"
   },
   {
    "id": "max_segments_per_spline",
    "type": "int"
   },
   {
    "id": "spline_rotation",
    "type": "float"
   },
   {
    "id": "spline_rotation_random",
    "type": "float"
   },
   {
    "id": "spline_scale",
    "type": "float"
   },
   {
    "id": "spline_scale_random",
    "type": "float"
   },
   {
    "id": "spline_distortion",
    "type": "float"
   },
   {
    "id": "spline_distortion_random",
    "type": "float"
   },
   {
    "id": "spline_distortion_frequency",
    "type": "float"
   },
   {
    "id": "spline_width",
    "type": "float"
   },
   {
    "id": "spline_width_random",
    "type": "float"
   },
   {
    "id": "spline_position_random",
    "type": "float"
   },
   {
    "id": "spline_width_in_pixel",
    "type": "bool"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "fade_mode",
    "type": "int"
   },
   {
    "id": "fade_length",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "spline_number",
    "type": "int"
   },
   {
    "id": "max_segments_per_spline",
    "type": "int"
   },
   {
    "id": "spline_rotation",
    "type": "float"
   },
   {
    "id": "spline_rotation_random",
    "type": "float"
   },
   {
    "id": "spline_scale",
    "type": "float"
   },
   {
    "id": "spline_scale_random",
    "type": "float"
   },
   {
    "id": "spline_distortion",
    "type": "float"
   },
   {
    "id": "spline_distortion_random",
    "type": "float"
   },
   {
    "id": "spline_distortion_frequency",
    "type": "float"
   },
   {
    "id": "spline_width",
    "type": "float"
   },
   {
    "id": "spline_width_random",
    "type": "float"
   },
   {
    "id": "spline_position_random",
    "type": "float"
   },
   {
    "id": "spline_width_in_pixel",
    "type": "bool"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_intensity_random",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "fade_mode",
    "type": "int"
   },
   {
    "id": "fade_length",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "path_id",
    "type": "float"
   },
   {
    "id": "greater",
    "type": "bool"
   },
   {
    "id": "length",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "shadow_distance",
    "type": "float"
   },
   {
    "id": "light_angle",
    "type": "float"
   },
   {
    "id": "edges_softness",
    "type": "float"
   },
   {
    "id": "Samples",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "Pattern",
    "type": "int"
   },
   {
    "id": "Pattern_Specific",
    "type": "float"
   },
   {
    "id": "Size",
    "type": "float"
   },
   {
    "id": "Size_xy",
    "type": "float2"
   },
   {
    "id": "Angle",
    "type": "float"
   },
   {
    "id": "Rotation",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "non_square_tiling",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "distance",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float"
   },
   {
    "id": "spread",
    "type": "float"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "glow_color",
    "type": "float3"
   },
   {
    "id": "input_is_premult",
    "type": "bool"
   },
   {
    "id": "pre_multiply_output",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "angle",
    "type": "float"
   },
   {
    "id": "distance",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float"
   },
   {
    "id": "spread",
    "type": "float"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "shadow_color",
    "type": "float3"
   },
   {
    "id": "mask_color",
    "type": "float3"
   },
   {
    "id": "pre_multiply_output",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "extrude_height",
    "type": "float"
   },
   {
    "id": "extrude_depth",
    "type": "float"
   },
   {
    "id": "extrude_shape",
    "type": "int"
   },
   {
    "id": "extrude_shape_size",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "profile_type",
    "type": "int"
   },
   {
    "id": "bevel_height",
    "type": "float"
   },
   {
    "id": "bevel_intensity",
    "type": "float"
   },
   {
    "id": "bevel_curve",
    "type": "float"
   },
   {
    "id": "mirror_bevel",
    "type": "bool"
   },
   {
    "id": "downscale",
    "type": "int"
   },
   {
    "id": "position",
    "type": "float2"
   },
   {
    "id": "output_range",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "width",
    "type": "float"
   },
   {
    "id": "spread",
    "type": "float"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "glow_color",
    "type": "float3"
   },
   {
    "id": "input_is_premult",
    "type": "bool"
   },
   {
    "id": "pre_multiply_output",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "width",
    "type": "float"
   },
   {
    "id": "spread",
    "type": "float"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "glow_color",
    "type": "float3"
   },
   {
    "id": "mask_color",
    "type": "float3"
   },
   {
    "id": "pre_multiply_output",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "pattern_amount",
    "type": "int"
   },
   {
    "id": "link_segments_pattern_amount",
    "type": "bool"
   },
   {
    "id": "segments",
    "type": "int"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "width",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "flip_1on_2",
    "type": "bool"
   },
   {
    "id": "filtering_mode",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_distribution_mode",
    "type": "int"
   },
   {
    "id": "pattern_distribution_map_multiplier",
    "type": "float"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "shape_scale",
    "type": "float"
   },
   {
    "id": "shape_scale_random",
    "type": "float"
   },
   {
    "id": "shape_scale_no_overlap",
    "type": "float"
   },
   {
    "id": "shape_scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "shape_size",
    "type": "float2"
   },
   {
    "id": "shape_size_ratio_from_background_slope",
    "type": "float"
   },
   {
    "id": "shape_size_by_xy_amount_ratio",
    "type": "float"
   },
   {
    "id": "position_random",
    "type": "float"
   },
   {
    "id": "position_random_distribution",
    "type": "int"
   },
   {
    "id": "position_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "position_offset_horizontal",
    "type": "float"
   },
   {
    "id": "position_offset_vertical",
    "type": "float"
   },
   {
    "id": "avoid_previous_splatter_overlap",
    "type": "float"
   },
   {
    "id": "out_of_bounds_option",
    "type": "int"
   },
   {
    "id": "shape_rotation",
    "type": "float"
   },
   {
    "id": "shape_rotation_random",
    "type": "float"
   },
   {
    "id": "shape_rotation_from_background_slope",
    "type": "float"
   },
   {
    "id": "shape_rotation_map_multiplier",
    "type": "float"
   },
   {
    "id": "shape_rotation_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "height_scale_auto_adjust",
    "type": "bool"
   },
   {
    "id": "height_offset",
    "type": "float"
   },
   {
    "id": "height_offset_random",
    "type": "float"
   },
   {
    "id": "height_offset_map_multiplier",
    "type": "float"
   },
   {
    "id": "height_scale",
    "type": "float"
   },
   {
    "id": "height_scale_random",
    "type": "float"
   },
   {
    "id": "height_scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "height_conform_to_background",
    "type": "float"
   },
   {
    "id": "height_smooth_conformed_background",
    "type": "float"
   },
   {
    "id": "height_skew",
    "type": "float"
   },
   {
    "id": "height_background_slope_smoothness",
    "type": "float"
   },
   {
    "id": "height_cutout_black_pixels",
    "type": "bool"
   },
   {
    "id": "height_flatten_pattern_base",
    "type": "bool"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_random_map_multiplier",
    "type": "float"
   },
   {
    "id": "mask_from_background_slope",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "pattern_number",
    "type": "int"
   },
   {
    "id": "luminance_adjustement",
    "type": "float"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "color_input_opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "pattern_number",
    "type": "int"
   },
   {
    "id": "random_pattern_assignment",
    "type": "float"
   },
   {
    "id": "is_normal",
    "type": "bool"
   },
   {
    "id": "input_normal_format",
    "type": "int"
   },
   {
    "id": "hsl_adjustement",
    "type": "float3"
   },
   {
    "id": "hsl_random",
    "type": "float3"
   },
   {
    "id": "normal_angle_random",
    "type": "float"
   },
   {
    "id": "color_input_opacity",
    "type": "float"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "id_range_start",
    "type": "int"
   },
   {
    "id": "id_range_end",
    "type": "int"
   },
   {
    "id": "random_mask",
    "type": "float"
   },
   {
    "id": "output",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "width",
    "type": "float"
   },
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "outline_color",
    "type": "float3"
   },
   {
    "id": "input_is_premult",
    "type": "bool"
   },
   {
    "id": "premult_output",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "width",
    "type": "float"
   },
   {
    "id": "Opacity",
    "type": "float"
   },
   {
    "id": "outline_color",
    "type": "float3"
   },
   {
    "id": "mask_color",
    "type": "float3"
   },
   {
    "id": "premult_output",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Axis",
    "type": "int"
   },
   {
    "id": "Amount",
    "type": "float"
   },
   {
    "id": "Align",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Axis",
    "type": "int"
   },
   {
    "id": "Amount",
    "type": "float"
   },
   {
    "id": "Align",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Samples",
    "type": "int"
   },
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Samples",
    "type": "int"
   },
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "crop_input_size",
    "type": "int2"
   },
   {
    "id": "crop_matrix",
    "type": "float4"
   },
   {
    "id": "crop_offset",
    "type": "float2"
   },
   {
    "id": "detect_edges",
    "type": "bool"
   },
   {
    "id": "edge_use_threshold_per_channel",
    "type": "bool"
   },
   {
    "id": "edge_threshold",
    "type": "float"
   },
   {
    "id": "edge_threshold_baseColor",
    "type": "float"
   },
   {
    "id": "edge_threshold_normal",
    "type": "float"
   },
   {
    "id": "edge_threshold_height",
    "type": "float"
   },
   {
    "id": "edge_cut_offset",
    "type": "float2"
   },
   {
    "id": "edge_blur",
    "type": "float"
   },
   {
    "id": "edge_smoothness",
    "type": "float"
   },
   {
    "id": "grid_resolution",
    "type": "int"
   },
   {
    "id": "edge_use_baseColor",
    "type": "bool"
   },
   {
    "id": "edge_use_normal",
    "type": "bool"
   },
   {
    "id": "edge_use_height",
    "type": "bool"
   },
   {
    "id": "edge_use_mask",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "channel_basecolor",
    "type": "bool"
   },
   {
    "id": "channel_diffuse",
    "type": "bool"
   },
   {
    "id": "channel_roughness",
    "type": "bool"
   },
   {
    "id": "channel_glossiness",
    "type": "bool"
   },
   {
    "id": "channel_metallic",
    "type": "bool"
   },
   {
    "id": "channel_specular",
    "type": "bool"
   },
   {
    "id": "fresh_snow",
    "type": "float"
   },
   {
    "id": "melted_snow",
    "type": "float"
   },
   {
    "id": "buildup",
    "type": "float"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "flakes_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "count",
    "type": "float"
   },
   {
    "id": "passthrough",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Pattern_size_width",
    "type": "float"
   },
   {
    "id": "Pattern_size_height",
    "type": "float"
   },
   {
    "id": "Rotation",
    "type": "float"
   },
   {
    "id": "Rotation_Var",
    "type": "float"
   },
   {
    "id": "Zoom",
    "type": "float"
   },
   {
    "id": "Gain",
    "type": "float"
   },
   {
    "id": "Pan_X",
    "type": "float"
   },
   {
    "id": "Pan_Y",
    "type": "float"
   },
   {
    "id": "Disorder",
    "type": "float"
   },
   {
    "id": "Grid_Number",
    "type": "int"
   },
   {
    "id": "Disorder_Angle",
    "type": "float"
   },
   {
    "id": "Disorder_Random",
    "type": "bool"
   },
   {
    "id": "PatternSize",
    "type": "int"
   },
   {
    "id": "Size_Var",
    "type": "float"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "Output_Min",
    "type": "float"
   },
   {
    "id": "Output_Max",
    "type": "float"
   },
   {
    "id": "Background_color",
    "type": "float"
   },
   {
    "id": "Lum_Var",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "pattern_amount",
    "type": "int"
   },
   {
    "id": "pattern_amount_random",
    "type": "float"
   },
   {
    "id": "pattern_amount_random_min",
    "type": "int"
   },
   {
    "id": "ring_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "Pattern_Specific",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "radius_random",
    "type": "float"
   },
   {
    "id": "ring_radius_mutliplier",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "spiral_factor",
    "type": "float"
   },
   {
    "id": "spread",
    "type": "float"
   },
   {
    "id": "position_offset_direction",
    "type": "float"
   },
   {
    "id": "global_offset",
    "type": "float2"
   },
   {
    "id": "connect_patterns",
    "type": "bool"
   },
   {
    "id": "pattern_size_connected",
    "type": "float2"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_size_random",
    "type": "float2"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "pattern_scale_random",
    "type": "float"
   },
   {
    "id": "pattern_scale_by_pattern_number",
    "type": "float"
   },
   {
    "id": "pattern_scale_by_pattern_number_invert",
    "type": "bool"
   },
   {
    "id": "pattern_scale_by_ring_number",
    "type": "float"
   },
   {
    "id": "pattern_scale_by_ring_number_invert",
    "type": "bool"
   },
   {
    "id": "pattern_rotation",
    "type": "float"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_rotation_pivot",
    "type": "int"
   },
   {
    "id": "center_orientation",
    "type": "bool"
   },
   {
    "id": "ring_rotation",
    "type": "float"
   },
   {
    "id": "ring_rotation_random",
    "type": "float"
   },
   {
    "id": "ring_rotation_offset",
    "type": "float"
   },
   {
    "id": "pattern_color",
    "type": "float"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "luminance_by_scale",
    "type": "float"
   },
   {
    "id": "luminance_by_pattern_number",
    "type": "float"
   },
   {
    "id": "luminance_by_pattern_number_invert",
    "type": "bool"
   },
   {
    "id": "luminance_by_ring_number",
    "type": "float"
   },
   {
    "id": "luminance_by_ring_number_invert",
    "type": "bool"
   },
   {
    "id": "random_mask",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "global_opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "pattern_amount",
    "type": "int"
   },
   {
    "id": "pattern_amount_random",
    "type": "float"
   },
   {
    "id": "pattern_amount_random_min",
    "type": "int"
   },
   {
    "id": "ring_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "Pattern_Specific",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "radius",
    "type": "float"
   },
   {
    "id": "radius_random",
    "type": "float"
   },
   {
    "id": "ring_radius_mutliplier",
    "type": "float"
   },
   {
    "id": "angle_random",
    "type": "float"
   },
   {
    "id": "spiral_factor",
    "type": "float"
   },
   {
    "id": "spread",
    "type": "float"
   },
   {
    "id": "position_offset_direction",
    "type": "float"
   },
   {
    "id": "global_offset",
    "type": "float2"
   },
   {
    "id": "connect_patterns",
    "type": "bool"
   },
   {
    "id": "pattern_size_connected",
    "type": "float2"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_size_random",
    "type": "float2"
   },
   {
    "id": "pattern_scale",
    "type": "float"
   },
   {
    "id": "pattern_scale_random",
    "type": "float"
   },
   {
    "id": "pattern_scale_by_pattern_number",
    "type": "float"
   },
   {
    "id": "pattern_scale_by_pattern_number_invert",
    "type": "bool"
   },
   {
    "id": "pattern_scale_by_ring_number",
    "type": "float"
   },
   {
    "id": "pattern_scale_by_ring_number_invert",
    "type": "bool"
   },
   {
    "id": "pattern_rotation",
    "type": "float"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_rotation_pivot",
    "type": "int"
   },
   {
    "id": "center_orientation",
    "type": "bool"
   },
   {
    "id": "ring_rotation",
    "type": "float"
   },
   {
    "id": "ring_rotation_random",
    "type": "float"
   },
   {
    "id": "ring_rotation_offset",
    "type": "float"
   },
   {
    "id": "pattern_color",
    "type": "float4"
   },
   {
    "id": "pattern_color_random",
    "type": "float4"
   },
   {
    "id": "luminance_by_scale",
    "type": "float"
   },
   {
    "id": "luminance_by_pattern_number",
    "type": "float"
   },
   {
    "id": "luminance_by_pattern_number_invert",
    "type": "bool"
   },
   {
    "id": "luminance_by_ring_number",
    "type": "float"
   },
   {
    "id": "invert_ring_number",
    "type": "bool"
   },
   {
    "id": "random_mask",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "global_opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Pattern_size_width",
    "type": "float"
   },
   {
    "id": "Pattern_size_height",
    "type": "float"
   },
   {
    "id": "Rotation",
    "type": "float"
   },
   {
    "id": "Rotation_Var",
    "type": "float"
   },
   {
    "id": "Zoom",
    "type": "float"
   },
   {
    "id": "Gain",
    "type": "float"
   },
   {
    "id": "Pan_X",
    "type": "float"
   },
   {
    "id": "Pan_Y",
    "type": "float"
   },
   {
    "id": "Disorder",
    "type": "float"
   },
   {
    "id": "Grid_Number",
    "type": "int"
   },
   {
    "id": "Disorder_Angle",
    "type": "float"
   },
   {
    "id": "Disorder_Random",
    "type": "bool"
   },
   {
    "id": "PatternSize",
    "type": "int"
   },
   {
    "id": "Size_Var",
    "type": "float"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "Output_Min",
    "type": "float"
   },
   {
    "id": "Output_Max",
    "type": "float"
   },
   {
    "id": "Background_Color",
    "type": "float4"
   },
   {
    "id": "Color_Var",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "spline_amount_1",
    "type": "int"
   },
   {
    "id": "spline_amount_2",
    "type": "int"
   },
   {
    "id": "flip_spline_1_direction",
    "type": "bool"
   },
   {
    "id": "flip_spline_2_direction",
    "type": "bool"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "bridge_splines_amount",
    "type": "int"
   },
   {
    "id": "bridge_splines_type",
    "type": "int"
   },
   {
    "id": "spline_1_start",
    "type": "float"
   },
   {
    "id": "spline_2_start",
    "type": "float"
   },
   {
    "id": "spline_1_end",
    "type": "float"
   },
   {
    "id": "spline_2_end",
    "type": "float"
   },
   {
    "id": "spline_amount_1",
    "type": "int"
   },
   {
    "id": "spline_amount_2",
    "type": "int"
   },
   {
    "id": "spline_1_offset",
    "type": "float"
   },
   {
    "id": "spline_2_offset",
    "type": "float"
   },
   {
    "id": "start_random_offset",
    "type": "float"
   },
   {
    "id": "end_random_offset",
    "type": "float"
   },
   {
    "id": "start_tangent_length",
    "type": "float"
   },
   {
    "id": "end_tangent_length",
    "type": "float"
   },
   {
    "id": "start_tangent_rotation",
    "type": "float"
   },
   {
    "id": "end_tangent_rotation",
    "type": "float"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "bridge_spline_amount",
    "type": "int"
   },
   {
    "id": "bridge_splines_type",
    "type": "int"
   },
   {
    "id": "input_spline_are_closed",
    "type": "bool"
   },
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "close_bridge_spline",
    "type": "bool"
   },
   {
    "id": "first_bridge_spline_offset",
    "type": "float2"
   },
   {
    "id": "last_bridge_spline_offset",
    "type": "float2"
   },
   {
    "id": "random_offset_range",
    "type": "int"
   },
   {
    "id": "start_random_offset",
    "type": "float"
   },
   {
    "id": "end_random_offset",
    "type": "float"
   },
   {
    "id": "global_random_offset",
    "type": "float"
   },
   {
    "id": "uniform_distribution",
    "type": "bool"
   },
   {
    "id": "thickness_mode",
    "type": "int"
   },
   {
    "id": "thickness",
    "type": "float"
   },
   {
    "id": "thickness_random",
    "type": "float"
   },
   {
    "id": "height_mode",
    "type": "int"
   },
   {
    "id": "height_offset",
    "type": "float"
   },
   {
    "id": "height",
    "type": "float"
   },
   {
    "id": "height_random",
    "type": "float"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
   },
   {
    "id": "preview_background_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "reduce_uv_stretching",
    "type": "bool"
   },
   {
    "id": "manual_uv_scale",
    "type": "float2"
   },
   {
    "id": "uv_rotation",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float4"
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
  ],
  "parameters": [
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "reduce_uv_stretching",
    "type": "bool"
   },
   {
    "id": "manual_uv_scale",
    "type": "float2"
   },
   {
    "id": "uv_rotation",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "circle_radius",
    "type": "float"
   },
   {
    "id": "circle_pre_rotation",
    "type": "float"
   },
   {
    "id": "circle_size",
    "type": "float2"
   },
   {
    "id": "circle_post_rotation",
    "type": "float"
   },
   {
    "id": "circle_position",
    "type": "float2"
   },
   {
    "id": "start_height",
    "type": "float"
   },
   {
    "id": "end_height",
    "type": "float"
   },
   {
    "id": "start_thickness",
    "type": "float"
   },
   {
    "id": "end_thickness",
    "type": "float"
   },
   {
    "id": "trim",
    "type": "float2"
   },
   {
    "id": "spiral",
    "type": "float"
   },
   {
    "id": "spiral_turns",
    "type": "float"
   },
   {
    "id": "spiral_power",
    "type": "float"
   },
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "uniform_distribution",
    "type": "bool"
   },
   {
    "id": "append_input_spline",
    "type": "bool"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "uniform_distribution",
    "type": "bool"
   },
   {
    "id": "append_input_spline",
    "type": "bool"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "start_height",
    "type": "float"
   },
   {
    "id": "end_height",
    "type": "float"
   },
   {
    "id": "auto_tangent_height",
    "type": "bool"
   },
   {
    "id": "p1_height",
    "type": "float"
   },
   {
    "id": "p2_height",
    "type": "float"
   },
   {
    "id": "start_thickness",
    "type": "float"
   },
   {
    "id": "end_thickness",
    "type": "float"
   },
   {
    "id": "auto_tangent_thickness",
    "type": "bool"
   },
   {
    "id": "p1_thickness",
    "type": "float"
   },
   {
    "id": "p2_thickness",
    "type": "float"
   },
   {
    "id": "p1",
    "type": "float2"
   },
   {
    "id": "p1_tangent",
    "type": "float2"
   },
   {
    "id": "p2",
    "type": "float2"
   },
   {
    "id": "p2_tangent",
    "type": "float2"
   },
   {
    "id": "show_tangents",
    "type": "bool"
   },
   {
    "id": "show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "output",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "draw_spline_index",
    "type": "int"
   },
   {
    "id": "draw_spline_range",
    "type": "int2"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "thickness_mode",
    "type": "int"
   },
   {
    "id": "thickness",
    "type": "float"
   },
   {
    "id": "thickness_multiplier",
    "type": "float"
   },
   {
    "id": "direction",
    "type": "int"
   },
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "attenuation_profile",
    "type": "int"
   },
   {
    "id": "start_attenuation",
    "type": "bool"
   },
   {
    "id": "end_attenuation",
    "type": "bool"
   },
   {
    "id": "spline_height_attenuation",
    "type": "float"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "auto_scale_uvs",
    "type": "bool"
   },
   {
    "id": "manual_uv_scale",
    "type": "float2"
   },
   {
    "id": "auto_uv_scale",
    "type": "float2"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "draw_spline_index",
    "type": "int"
   },
   {
    "id": "draw_spline_range",
    "type": "int2"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "thickness_mode",
    "type": "int"
   },
   {
    "id": "thickness",
    "type": "float"
   },
   {
    "id": "thickness_multiplier",
    "type": "float"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "cylinder_height_multiplier",
    "type": "float"
   },
   {
    "id": "cylinder_height_offset",
    "type": "float"
   },
   {
    "id": "twist_uvs_intensity",
    "type": "float"
   },
   {
    "id": "twist_uvs_curve_multiplier",
    "type": "float"
   },
   {
    "id": "twist_uvs_curve_offset",
    "type": "float"
   },
   {
    "id": "spline_height_multiplier",
    "type": "float"
   },
   {
    "id": "input_map_height_multplier",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "auto_scale_uvs",
    "type": "bool"
   },
   {
    "id": "manual_uv_scale",
    "type": "float2"
   },
   {
    "id": "auto_uv_scale",
    "type": "float2"
   },
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "draw_spline_index",
    "type": "int"
   },
   {
    "id": "draw_spline_range",
    "type": "int2"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "thickness_mode",
    "type": "int"
   },
   {
    "id": "thickness",
    "type": "float"
   },
   {
    "id": "thickness_multiplier",
    "type": "float"
   },
   {
    "id": "shape",
    "type": "int"
   },
   {
    "id": "cylinder_height_multiplier",
    "type": "float"
   },
   {
    "id": "cylinder_height_offset",
    "type": "float"
   },
   {
    "id": "twist_uvs_intensity",
    "type": "float"
   },
   {
    "id": "twist_uvs_curve_multiplier",
    "type": "float"
   },
   {
    "id": "twist_uvs_curve_offset",
    "type": "float"
   },
   {
    "id": "spline_height_multiplier",
    "type": "float"
   },
   {
    "id": "input_map_height_multplier",
    "type": "float"
   },
   {
    "id": "filtering_mode",
    "type": "int"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "closed_spline_distance_threshold",
    "type": "float"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "point_amount",
    "type": "int"
   },
   {
    "id": "input_spline_connection_mode",
    "type": "int"
   },
   {
    "id": "close_spline",
    "type": "bool"
   },
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "use_input_point_list",
    "type": "bool"
   },
   {
    "id": "connect_start_to_input_spline",
    "type": "bool"
   },
   {
    "id": "start_connection_spline_index",
    "type": "int"
   },
   {
    "id": "start_connection_position",
    "type": "float"
   },
   {
    "id": "connect_end_to_input_spline",
    "type": "bool"
   },
   {
    "id": "end_connection_spline_index",
    "type": "int"
   },
   {
    "id": "end_connection_position",
    "type": "float"
   },
   {
    "id": "uniform_distribution",
    "type": "bool"
   },
   {
    "id": "append_input_spline",
    "type": "bool"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "point_number_input",
    "type": "int"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "global_smoothness_adjustment",
    "type": "float"
   },
   {
    "id": "p1_properties",
    "type": "float3"
   },
   {
    "id": "p2_properties",
    "type": "float3"
   },
   {
    "id": "p3_properties",
    "type": "float3"
   },
   {
    "id": "p4_properties",
    "type": "float3"
   },
   {
    "id": "p5_properties",
    "type": "float3"
   },
   {
    "id": "p6_properties",
    "type": "float3"
   },
   {
    "id": "p7_properties",
    "type": "float3"
   },
   {
    "id": "p8_properties",
    "type": "float3"
   },
   {
    "id": "p9_properties",
    "type": "float3"
   },
   {
    "id": "p10_properties",
    "type": "float3"
   },
   {
    "id": "p1",
    "type": "float2"
   },
   {
    "id": "p2",
    "type": "float2"
   },
   {
    "id": "p3",
    "type": "float2"
   },
   {
    "id": "p4",
    "type": "float2"
   },
   {
    "id": "p5",
    "type": "float2"
   },
   {
    "id": "p6",
    "type": "float2"
   },
   {
    "id": "p7",
    "type": "float2"
   },
   {
    "id": "p8",
    "type": "float2"
   },
   {
    "id": "p9",
    "type": "float2"
   },
   {
    "id": "p10",
    "type": "float2"
   },
   {
    "id": "show_tangents",
    "type": "bool"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "show_points_label",
    "type": "bool"
   },
   {
    "id": "points_label_size",
    "type": "float"
   },
   {
    "id": "show_points",
    "type": "bool"
   },
   {
    "id": "points_size",
    "type": "float"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "flip_direction",
    "type": "bool"
   },
   {
    "id": "uniform_distribution",
    "type": "bool"
   },
   {
    "id": "append_input_spline",
    "type": "bool"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "smoothness",
    "type": "float"
   },
   {
    "id": "start_height",
    "type": "float"
   },
   {
    "id": "end_height",
    "type": "float"
   },
   {
    "id": "auto_tangent_height",
    "type": "bool"
   },
   {
    "id": "tangent_height",
    "type": "float"
   },
   {
    "id": "start_thickness",
    "type": "float"
   },
   {
    "id": "end_thickness",
    "type": "float"
   },
   {
    "id": "auto_tangent_thickness",
    "type": "bool"
   },
   {
    "id": "tangent_thickness",
    "type": "float"
   },
   {
    "id": "p1",
    "type": "float2"
   },
   {
    "id": "p2",
    "type": "float2"
   },
   {
    "id": "p3",
    "type": "float2"
   },
   {
    "id": "show_tangents",
    "type": "bool"
   },
   {
    "id": "show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "mode",
    "type": "int"
   },
   {
    "id": "show_direction_helper",
    "type": "bool"
   },
   {
    "id": "draw_spline_index",
    "type": "int"
   },
   {
    "id": "draw_spline_range",
    "type": "int2"
   },
   {
    "id": "segments_amount",
    "type": "int"
   },
   {
    "id": "envelope_spline_amount",
    "type": "int"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "thickness_size_mode",
    "type": "int"
   },
   {
    "id": "thickness_image",
    "type": "float"
   },
   {
    "id": "thickness_px",
    "type": "float"
   },
   {
    "id": "enable_joints",
    "type": "bool"
   },
   {
    "id": "non_square_correction",
    "type": "bool"
   },
   {
    "id": "background_intensity",
    "type": "float"
   },
   {
    "id": "spline_style",
    "type": "int"
   },
   {
    "id": "spline_color",
    "type": "float"
   },
   {
    "id": "random_luminance",
    "type": "float"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "random_segments_start",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "random_segments_end",
    "type": "float"
   },
   {
    "id": "random_segments_random_offset",
    "type": "float"
   },
   {
    "id": "random_segments_random_offset_center",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "sampling_mode",
    "type": "int"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "sampling_mode",
    "type": "int"
   },
   {
    "id": "opacity",
    "type": "float"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "selection_mode",
    "type": "int"
   },
   {
    "id": "spline_index",
    "type": "int"
   },
   {
    "id": "range_start",
    "type": "int"
   },
   {
    "id": "range_end",
    "type": "int"
   },
   {
    "id": "start",
    "type": "float"
   },
   {
    "id": "end",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "warp_intensity",
    "type": "float"
   },
   {
    "id": "spline_amount",
    "type": "int"
   },
   {
    "id": "warp_center",
    "type": "float"
   },
   {
    "id": "sampling_mode",
    "type": "int"
   },
   {
    "id": "use_vector_map",
    "type": "bool"
   },
   {
    "id": "use_attenuation_curve",
    "type": "bool"
   },
   {
    "id": "intensity_map_tiling",
    "type": "float"
   },
   {
    "id": "start_attenuation",
    "type": "float"
   },
   {
    "id": "end_attenuation",
    "type": "float"
   },
   {
    "id": "recompute_tangents",
    "type": "bool"
   },
   {
    "id": "preview_show_direction_helper",
    "type": "bool"
   },
   {
    "id": "show_thickness_envelope",
    "type": "bool"
   },
   {
    "id": "preview_segment_amount",
    "type": "int"
   },
   {
    "id": "thickness_px",
    "type": "float"
   },
   {
    "id": "background_intensity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Light_Position_X",
    "type": "float"
   },
   {
    "id": "Light_Position_Y",
    "type": "float"
   },
   {
    "id": "Intensity",
    "type": "float"
   },
   {
    "id": "Highlight_Color",
    "type": "float4"
   },
   {
    "id": "Shadow_Color",
    "type": "float4"
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Branches",
    "type": "int"
   },
   {
    "id": "BlurAmount",
    "type": "float"
   },
   {
    "id": "Randomness",
    "type": "float"
   },
   {
    "id": "SizeMin",
    "type": "float"
   },
   {
    "id": "SizeMax",
    "type": "float"
   },
   {
    "id": "SizeVariation",
    "type": "float"
   },
   {
    "id": "Tiling",
    "type": "int"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "Stripes",
    "type": "int"
   },
   {
    "id": "Width",
    "type": "float"
   },
   {
    "id": "Softness",
    "type": "float"
   },
   {
    "id": "Shift",
    "type": "int"
   },
   {
    "id": "Align",
    "type": "int"
   },
   {
    "id": "Filtering",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": []
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "amount",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "matrix22",
    "type": "float4"
   },
   {
    "id": "offset",
    "type": "float2"
   },
   {
    "id": "amount",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "switch",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "switch",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Symmetry_Mode",
    "type": "int"
   },
   {
    "id": "Transfer_Mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "Symmetry_Mode",
    "type": "int"
   },
   {
    "id": "Transfer_Mode",
    "type": "int"
   },
   {
    "id": "Blend",
    "type": "float"
   },
   {
    "id": "Flip_Side",
    "type": "bool"
   },
   {
    "id": "Flip_Side2",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "threshold",
    "type": "float"
   },
   {
    "id": "mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "pattern_specific",
    "type": "float2"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_quincunx_flip",
    "type": "bool"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "middle_size",
    "type": "float2"
   },
   {
    "id": "interstice",
    "type": "float4"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_size_absolute",
    "type": "float2"
   },
   {
    "id": "pattern_size_pixel",
    "type": "float2"
   },
   {
    "id": "pattern_size_random",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_random_Seed",
    "type": "int"
   },
   {
    "id": "position_offset",
    "type": "float"
   },
   {
    "id": "position_offset_random",
    "type": "float"
   },
   {
    "id": "offset_random_seed",
    "type": "int"
   },
   {
    "id": "vertical_offset",
    "type": "bool"
   },
   {
    "id": "position_random",
    "type": "float2"
   },
   {
    "id": "global_offset",
    "type": "float2"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_color",
    "type": "float"
   },
   {
    "id": "luminance_random",
    "type": "float"
   },
   {
    "id": "luminance_by_number",
    "type": "bool"
   },
   {
    "id": "luminance_by_scale",
    "type": "bool"
   },
   {
    "id": "checker_mask",
    "type": "bool"
   },
   {
    "id": "horizontal_mask",
    "type": "bool"
   },
   {
    "id": "vertical_mask",
    "type": "bool"
   },
   {
    "id": "random_mask",
    "type": "float"
   },
   {
    "id": "invert_mask",
    "type": "bool"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "reverse_rendering_order",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "pattern_specific",
    "type": "float2"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_quincunx_flip",
    "type": "bool"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "middle_size",
    "type": "float2"
   },
   {
    "id": "interstice",
    "type": "float4"
   },
   {
    "id": "pattern_size",
    "type": "float2"
   },
   {
    "id": "pattern_size_absolute",
    "type": "float2"
   },
   {
    "id": "pattern_size_pixel",
    "type": "float2"
   },
   {
    "id": "pattern_size_random",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_random_Seed",
    "type": "int"
   },
   {
    "id": "position_offset",
    "type": "float"
   },
   {
    "id": "position_offset_random",
    "type": "float"
   },
   {
    "id": "offset_random_seed",
    "type": "int"
   },
   {
    "id": "vertical_offset",
    "type": "bool"
   },
   {
    "id": "position_random",
    "type": "float2"
   },
   {
    "id": "global_offset",
    "type": "float2"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_color",
    "type": "float4"
   },
   {
    "id": "pattern_color_random",
    "type": "float4"
   },
   {
    "id": "luminance_by_number",
    "type": "bool"
   },
   {
    "id": "luminance_by_scale",
    "type": "bool"
   },
   {
    "id": "checker_mask",
    "type": "bool"
   },
   {
    "id": "horizontal_mask",
    "type": "bool"
   },
   {
    "id": "vertical_mask",
    "type": "bool"
   },
   {
    "id": "random_mask",
    "type": "float"
   },
   {
    "id": "invert_mask",
    "type": "bool"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "reverse_rendering_order",
    "type": "bool"
   },
   {
    "id": "by_number_parametrisation",
    "type": "int"
   },
   {
    "id": "by_scale_parametrisation",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "pattern_specific",
    "type": "float"
   },
   {
    "id": "pattern_specific_random",
    "type": "float"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "split_mode",
    "type": "int"
   },
   {
    "id": "split_threshold",
    "type": "float"
   },
   {
    "id": "split_multiplier",
    "type": "int"
   },
   {
    "id": "size_random_x",
    "type": "float"
   },
   {
    "id": "size_random_y",
    "type": "float"
   },
   {
    "id": "interstice_mode",
    "type": "int"
   },
   {
    "id": "interstice_amount",
    "type": "float"
   },
   {
    "id": "shape_scale",
    "type": "float"
   },
   {
    "id": "shape_scale_random",
    "type": "float"
   },
   {
    "id": "shape_rotation",
    "type": "float"
   },
   {
    "id": "shape_rotation_random",
    "type": "float"
   },
   {
    "id": "shape_rotation_constraint",
    "type": "bool"
   },
   {
    "id": "position_offset",
    "type": "float"
   },
   {
    "id": "position_offset_random",
    "type": "float"
   },
   {
    "id": "position_random",
    "type": "float"
   },
   {
    "id": "position_random_constraints",
    "type": "bool"
   },
   {
    "id": "pattern_color",
    "type": "float"
   },
   {
    "id": "pattern_color_random",
    "type": "float"
   },
   {
    "id": "pattern_color_parametrisation",
    "type": "int"
   },
   {
    "id": "pattern_color_parametrisation_intensity",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_invert",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "amount_x",
    "type": "int"
   },
   {
    "id": "amount_y",
    "type": "int"
   },
   {
    "id": "random_size_multiplier",
    "type": "float"
   },
   {
    "id": "random_size_input_map_multiplier",
    "type": "float"
   },
   {
    "id": "random_size_x",
    "type": "float"
   },
   {
    "id": "random_size_y",
    "type": "float"
   },
   {
    "id": "random_size_distribution",
    "type": "int"
   },
   {
    "id": "interstice_thickness",
    "type": "float"
   },
   {
    "id": "random_position_multiplier",
    "type": "float"
   },
   {
    "id": "round_corners_radius",
    "type": "float"
   },
   {
    "id": "round_corners_radius_input_map_multiplier",
    "type": "float"
   },
   {
    "id": "shape_scale_multiplier",
    "type": "float"
   },
   {
    "id": "shape_scale_random_multiplier",
    "type": "float"
   },
   {
    "id": "shape_rotation",
    "type": "float"
   },
   {
    "id": "shape_rotation_random",
    "type": "float"
   },
   {
    "id": "shape_corners_position_random",
    "type": "float"
   },
   {
    "id": "random_slant_multiplier",
    "type": "float"
   },
   {
    "id": "random_slant_input_map_multiplier",
    "type": "float"
   },
   {
    "id": "random_slant_x",
    "type": "float"
   },
   {
    "id": "random_slant_y",
    "type": "float"
   },
   {
    "id": "random_slant_distribution",
    "type": "int"
   },
   {
    "id": "bevel_distance_mode",
    "type": "int"
   },
   {
    "id": "bevel_distance_multiplier",
    "type": "float"
   },
   {
    "id": "bevel_distance_input_map_multiplier",
    "type": "float"
   },
   {
    "id": "bevel_rounded_curve",
    "type": "float"
   },
   {
    "id": "enable_per_axis_bevel_control",
    "type": "bool"
   },
   {
    "id": "bevel_distance_x",
    "type": "float"
   },
   {
    "id": "bevel_distance_y",
    "type": "float"
   },
   {
    "id": "mask_random_invert",
    "type": "bool"
   },
   {
    "id": "mask_random_start",
    "type": "float"
   },
   {
    "id": "mask_random_end",
    "type": "float"
   },
   {
    "id": "mask_by_cell_area_invert",
    "type": "bool"
   },
   {
    "id": "mask_by_cell_area_start",
    "type": "float"
   },
   {
    "id": "mask_by_cell_area_end",
    "type": "float"
   },
   {
    "id": "mask_map_input_invert",
    "type": "bool"
   },
   {
    "id": "mask_map_input_start",
    "type": "float"
   },
   {
    "id": "mask_map_input_end",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "image_input_filtering",
    "type": "int"
   },
   {
    "id": "pattern_specific",
    "type": "float"
   },
   {
    "id": "pattern_specific_random",
    "type": "float"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "split_mode",
    "type": "int"
   },
   {
    "id": "split_threshold",
    "type": "float"
   },
   {
    "id": "split_multiplier",
    "type": "int"
   },
   {
    "id": "size_random_x",
    "type": "float"
   },
   {
    "id": "size_random_y",
    "type": "float"
   },
   {
    "id": "interstice_mode",
    "type": "int"
   },
   {
    "id": "interstice_amount",
    "type": "float"
   },
   {
    "id": "shape_scale",
    "type": "float"
   },
   {
    "id": "shape_scale_random",
    "type": "float"
   },
   {
    "id": "shape_rotation",
    "type": "float"
   },
   {
    "id": "shape_rotation_random",
    "type": "float"
   },
   {
    "id": "shape_rotation_constraint",
    "type": "bool"
   },
   {
    "id": "position_offset",
    "type": "float"
   },
   {
    "id": "position_offset_random",
    "type": "float"
   },
   {
    "id": "position_random",
    "type": "float"
   },
   {
    "id": "position_random_constraints",
    "type": "bool"
   },
   {
    "id": "pattern_color",
    "type": "float4"
   },
   {
    "id": "pattern_color_random",
    "type": "float4"
   },
   {
    "id": "pattern_color_parametrisation",
    "type": "int"
   },
   {
    "id": "pattern_color_parametrisation_intensity",
    "type": "float"
   },
   {
    "id": "color_parametrization_affect",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_invert",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "pattern_input_filtering",
    "type": "int"
   },
   {
    "id": "pattern_specific",
    "type": "float"
   },
   {
    "id": "pattern_specific_random",
    "type": "float"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "size",
    "type": "float2"
   },
   {
    "id": "size_absolute",
    "type": "float2"
   },
   {
    "id": "size_pixel",
    "type": "float2"
   },
   {
    "id": "size_random",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "scale_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "scale_parametrization_affect",
    "type": "int"
   },
   {
    "id": "position_random",
    "type": "float"
   },
   {
    "id": "offset",
    "type": "float"
   },
   {
    "id": "offset_type",
    "type": "int"
   },
   {
    "id": "global_offset",
    "type": "float2"
   },
   {
    "id": "displacement_map_intensity",
    "type": "float"
   },
   {
    "id": "displacement_angle",
    "type": "float"
   },
   {
    "id": "vector_map_displacement",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "rotation_map_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "mask_map_threshold",
    "type": "float"
   },
   {
    "id": "mask_map_invert",
    "type": "bool"
   },
   {
    "id": "mask_map_sampling_technique",
    "type": "int"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_invert",
    "type": "bool"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "color",
    "type": "float"
   },
   {
    "id": "color_random",
    "type": "float"
   },
   {
    "id": "color_parametrization_mode",
    "type": "int"
   },
   {
    "id": "color_parametrization_multiplier",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "reverse_rendering_order",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_input_number",
    "type": "int"
   },
   {
    "id": "pattern_input_distribution",
    "type": "int"
   },
   {
    "id": "pattern_input_filtering",
    "type": "int"
   },
   {
    "id": "pattern_specific",
    "type": "float"
   },
   {
    "id": "pattern_specific_random",
    "type": "float"
   },
   {
    "id": "pattern_rotation",
    "type": "int"
   },
   {
    "id": "pattern_rotation_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random",
    "type": "float"
   },
   {
    "id": "pattern_symmetry_random_mode",
    "type": "int"
   },
   {
    "id": "size_mode",
    "type": "int"
   },
   {
    "id": "size",
    "type": "float2"
   },
   {
    "id": "size_absolute",
    "type": "float2"
   },
   {
    "id": "size_pixel",
    "type": "float2"
   },
   {
    "id": "size_random",
    "type": "float2"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "scale_random",
    "type": "float"
   },
   {
    "id": "scale_map_multiplier",
    "type": "float"
   },
   {
    "id": "scale_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "scale_parametrization_affect",
    "type": "int"
   },
   {
    "id": "position_random",
    "type": "float"
   },
   {
    "id": "offset",
    "type": "float"
   },
   {
    "id": "offset_type",
    "type": "int"
   },
   {
    "id": "global_offset",
    "type": "float2"
   },
   {
    "id": "displacement_map_intensity",
    "type": "float"
   },
   {
    "id": "displacement_angle",
    "type": "float"
   },
   {
    "id": "vector_map_displacement",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_random",
    "type": "float"
   },
   {
    "id": "rotation_map_multiplier",
    "type": "float"
   },
   {
    "id": "rotation_vector_map_multiplier",
    "type": "float"
   },
   {
    "id": "mask_map_threshold",
    "type": "float"
   },
   {
    "id": "mask_map_invert",
    "type": "bool"
   },
   {
    "id": "mask_map_sampling_technique",
    "type": "int"
   },
   {
    "id": "mask_random",
    "type": "float"
   },
   {
    "id": "mask_invert",
    "type": "bool"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "color",
    "type": "float4"
   },
   {
    "id": "color_random",
    "type": "float4"
   },
   {
    "id": "color_parametrization_mode",
    "type": "int"
   },
   {
    "id": "color_parametrization_multiplier",
    "type": "float"
   },
   {
    "id": "color_parametrization_affect",
    "type": "int"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "reverse_rendering_order",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "Pre_Lighting_Intensity",
    "type": "float"
   },
   {
    "id": "AO_Intensity",
    "type": "float"
   },
   {
    "id": "Edges_Sharpness_Intensity",
    "type": "float"
   },
   {
    "id": "AO_Intensity_Specular",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "tiles_amount",
    "type": "int"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "dust",
    "type": "float"
   },
   {
    "id": "tiles_01_color",
    "type": "float3"
   },
   {
    "id": "tiles_02_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "tiles_amount_x",
    "type": "int"
   },
   {
    "id": "tiles_amount_y",
    "type": "int"
   },
   {
    "id": "age",
    "type": "float"
   },
   {
    "id": "weathering",
    "type": "float"
   },
   {
    "id": "dust",
    "type": "float"
   },
   {
    "id": "tiles_01_color",
    "type": "float3"
   },
   {
    "id": "tiles_02_color",
    "type": "float3"
   },
   {
    "id": "tiles_03_color",
    "type": "float3"
   },
   {
    "id": "tiles_04_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "tiles_amount",
    "type": "int"
   },
   {
    "id": "dirtiness",
    "type": "float"
   },
   {
    "id": "Color_1",
    "type": "float3"
   },
   {
    "id": "Color_2",
    "type": "float3"
   },
   {
    "id": "Mortar_Color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "tiles_amount",
    "type": "int2"
   },
   {
    "id": "bevel_size",
    "type": "float"
   },
   {
    "id": "moss",
    "type": "float"
   },
   {
    "id": "cracks",
    "type": "float"
   },
   {
    "id": "color_variation",
    "type": "float"
   },
   {
    "id": "tiles_color",
    "type": "float3"
   },
   {
    "id": "moss_color",
    "type": "float3"
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
  ],
  "parameters": [
   {
    "id": "top_stretch",
    "type": "float"
   },
   {
    "id": "bottom_stretch",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "sampling",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "top_stretch",
    "type": "float"
   },
   {
    "id": "bottom_stretch",
    "type": "float"
   },
   {
    "id": "background_color",
    "type": "float"
   },
   {
    "id": "sampling",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "color_output",
    "type": "int"
   },
   {
    "id": "triangulation",
    "type": "int"
   },
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "random_position_multiplier",
    "type": "float"
   },
   {
    "id": "random_position",
    "type": "float2"
   },
   {
    "id": "vector_map_displacement",
    "type": "float"
   },
   {
    "id": "quincunx_offset_x",
    "type": "float"
   },
   {
    "id": "quincunx_offset_y",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_disorder",
    "type": "float"
   },
   {
    "id": "height_input_multiplier",
    "type": "float"
   },
   {
    "id": "height_random",
    "type": "float"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "thin_line_blend_mode",
    "type": "int"
   },
   {
    "id": "distance_blend_mode",
    "type": "int"
   },
   {
    "id": "color_source",
    "type": "int"
   },
   {
    "id": "color_source_opacity",
    "type": "float"
   },
   {
    "id": "distance_to_edge_thickness",
    "type": "float"
   },
   {
    "id": "thin_line_color",
    "type": "float4"
   },
   {
    "id": "thin_line_background",
    "type": "float4"
   },
   {
    "id": "random_color_seed_mode",
    "type": "int"
   },
   {
    "id": "random_color_seed",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "color_output",
    "type": "int"
   },
   {
    "id": "triangulation",
    "type": "int"
   },
   {
    "id": "x_amount",
    "type": "int"
   },
   {
    "id": "y_amount",
    "type": "int"
   },
   {
    "id": "random_position_multiplier",
    "type": "float"
   },
   {
    "id": "random_position",
    "type": "float2"
   },
   {
    "id": "vector_map_displacement",
    "type": "float"
   },
   {
    "id": "quincunx_offset_x",
    "type": "float"
   },
   {
    "id": "quincunx_offset_y",
    "type": "float"
   },
   {
    "id": "rotation",
    "type": "float"
   },
   {
    "id": "rotation_disorder",
    "type": "float"
   },
   {
    "id": "height_input_multiplier",
    "type": "float"
   },
   {
    "id": "height_random",
    "type": "float"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "thin_line_blend_mode",
    "type": "int"
   },
   {
    "id": "distance_blend_mode",
    "type": "int"
   },
   {
    "id": "color_source",
    "type": "int"
   },
   {
    "id": "color_source_opacity",
    "type": "float"
   },
   {
    "id": "distance_to_edge_thickness",
    "type": "float"
   },
   {
    "id": "thin_line_color",
    "type": "float"
   },
   {
    "id": "thin_line_background",
    "type": "float"
   },
   {
    "id": "random_color_seed_mode",
    "type": "int"
   },
   {
    "id": "random_color_seed",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "projection",
    "type": "int"
   },
   {
    "id": "image_inputs",
    "type": "int"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "blending_contrast",
    "type": "float"
   },
   {
    "id": "normalization_factor",
    "type": "float"
   },
   {
    "id": "texture_tiling",
    "type": "float"
   },
   {
    "id": "global_rotation",
    "type": "float3"
   },
   {
    "id": "fix_mirrored_projection",
    "type": "bool"
   },
   {
    "id": "rotation_x",
    "type": "float"
   },
   {
    "id": "rotation_y",
    "type": "float"
   },
   {
    "id": "rotation_z",
    "type": "float"
   },
   {
    "id": "offset_x",
    "type": "float2"
   },
   {
    "id": "random_offset_x",
    "type": "float"
   },
   {
    "id": "offset_y",
    "type": "float2"
   },
   {
    "id": "random_offset_y",
    "type": "float"
   },
   {
    "id": "offset_z",
    "type": "float2"
   },
   {
    "id": "random_offset_z",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "projection",
    "type": "int"
   },
   {
    "id": "image_inputs",
    "type": "int"
   },
   {
    "id": "blending_mode",
    "type": "int"
   },
   {
    "id": "blending_contrast",
    "type": "float"
   },
   {
    "id": "normalization_factor",
    "type": "float"
   },
   {
    "id": "texture_tiling",
    "type": "float"
   },
   {
    "id": "global_rotation",
    "type": "float3"
   },
   {
    "id": "fix_mirrored_projection",
    "type": "bool"
   },
   {
    "id": "rotation_x",
    "type": "float"
   },
   {
    "id": "rotation_y",
    "type": "float"
   },
   {
    "id": "rotation_z",
    "type": "float"
   },
   {
    "id": "offset_x",
    "type": "float2"
   },
   {
    "id": "random_offset_x",
    "type": "float"
   },
   {
    "id": "offset_y",
    "type": "float2"
   },
   {
    "id": "random_offset_y",
    "type": "float"
   },
   {
    "id": "offset_z",
    "type": "float2"
   },
   {
    "id": "random_offset_z",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Ambient_Color",
    "type": "float4"
   },
   {
    "id": "Diffuse_Color",
    "type": "float4"
   },
   {
    "id": "Specular_Color",
    "type": "float4"
   },
   {
    "id": "Light_Intensity",
    "type": "float"
   },
   {
    "id": "Light_Angle",
    "type": "float"
   },
   {
    "id": "Specular_Intensity",
    "type": "float"
   },
   {
    "id": "Specular_Glossiness",
    "type": "float"
   },
   {
    "id": "Diffuse_Roughness",
    "type": "float"
   },
   {
    "id": "Shadows_Opacity",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "background_color",
    "type": "float4"
   },
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "filtering_mode",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "amount",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "amount",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "vector_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "intensity",
    "type": "float"
   },
   {
    "id": "vector_format",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "fetchPrevCount",
    "type": "int"
   },
   {
    "id": "fetchNextCount",
    "type": "int"
   },
   {
    "id": "imageInputCount",
    "type": "int"
   },
   {
    "id": "perVertex",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "imageInputCount",
    "type": "int"
   },
   {
    "id": "perVertex",
    "type": "float2"
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
  ],
  "parameters": [
   {
    "id": "palette_color_amount",
    "type": "int"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "disorder",
    "type": "float3"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "rounded_curve",
    "type": "float"
   },
   {
    "id": "distance_scale",
    "type": "float"
   },
   {
    "id": "distance_mode",
    "type": "int"
   },
   {
    "id": "minkowski_number",
    "type": "float"
   },
   {
    "id": "style",
    "type": "int"
   },
   {
    "id": "edge_thickness",
    "type": "float"
   },
   {
    "id": "random_color_seed_mode",
    "type": "int"
   },
   {
    "id": "random_color_seed",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "invert",
    "type": "bool"
   },
   {
    "id": "scale",
    "type": "float"
   },
   {
    "id": "size",
    "type": "float3"
   },
   {
    "id": "offset",
    "type": "float3"
   },
   {
    "id": "disorder",
    "type": "float3"
   },
   {
    "id": "distortion_intensity",
    "type": "float"
   },
   {
    "id": "distortion_scale_multiplier",
    "type": "float"
   },
   {
    "id": "min_level",
    "type": "int"
   },
   {
    "id": "max_level",
    "type": "int"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "lacunarity",
    "type": "float"
   },
   {
    "id": "global_opacity",
    "type": "float"
   },
   {
    "id": "rounded_curve",
    "type": "float"
   },
   {
    "id": "distance_scale",
    "type": "float"
   },
   {
    "id": "distance_mode",
    "type": "int"
   },
   {
    "id": "minkowski_number",
    "type": "float"
   },
   {
    "id": "blend_mode",
    "type": "int"
   },
   {
    "id": "style",
    "type": "int"
   },
   {
    "id": "edge_thickness",
    "type": "float"
   },
   {
    "id": "random_color_seed_mode",
    "type": "int"
   },
   {
    "id": "random_color_seed",
    "type": "int"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "basecolor_on",
    "type": "bool"
   },
   {
    "id": "diffuse_on",
    "type": "bool"
   },
   {
    "id": "roughness_on",
    "type": "bool"
   },
   {
    "id": "glossiness_on",
    "type": "bool"
   },
   {
    "id": "metallic_on",
    "type": "bool"
   },
   {
    "id": "specular_on",
    "type": "bool"
   },
   {
    "id": "water_level",
    "type": "float"
   },
   {
    "id": "water_darkness",
    "type": "float"
   },
   {
    "id": "edges_wetness",
    "type": "float"
   },
   {
    "id": "edges_wetness_distance",
    "type": "float"
   },
   {
    "id": "depth_blur_amount",
    "type": "float"
   },
   {
    "id": "depth_blur_opacity",
    "type": "float"
   },
   {
    "id": "sludge_color",
    "type": "float3"
   },
   {
    "id": "sludge_depth",
    "type": "float"
   },
   {
    "id": "sludge_opacity",
    "type": "float"
   },
   {
    "id": "frost",
    "type": "float"
   },
   {
    "id": "frost_intensity",
    "type": "float"
   },
   {
    "id": "frost_cracks",
    "type": "float"
   },
   {
    "id": "frost_normal_format",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "samples",
    "type": "int"
   },
   {
    "id": "function",
    "type": "int"
   },
   {
    "id": "custom_function",
    "type": "float"
   },
   {
    "id": "roughness",
    "type": "float"
   },
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "amplitude_min",
    "type": "float"
   },
   {
    "id": "amplitude_max",
    "type": "float"
   },
   {
    "id": "noise",
    "type": "float"
   },
   {
    "id": "position",
    "type": "int"
   },
   {
    "id": "pattern",
    "type": "int"
   },
   {
    "id": "pattern_variation",
    "type": "float"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "Tiling",
    "type": "int"
   },
   {
    "id": "rotate_45_degrees",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "scale",
    "type": "int"
   },
   {
    "id": "Disorder",
    "type": "float"
   },
   {
    "id": "rotate_45_degrees",
    "type": "bool"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "tile_x",
    "type": "int"
   },
   {
    "id": "tile_y",
    "type": "int"
   },
   {
    "id": "shape",
    "type": "float"
   },
   {
    "id": "weave",
    "type": "int"
   },
   {
    "id": "gap",
    "type": "float2"
   },
   {
    "id": "non_square_expansion",
    "type": "bool"
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
  ],
  "parameters": [
   {
    "id": "noise_distribution",
    "type": "int"
   },
   {
    "id": "disorder",
    "type": "float"
   },
   {
    "id": "disorder_speed",
    "type": "float"
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
  ],
  "parameters": [
   {
    "id": "diffuse",
    "type": "bool"
   },
   {
    "id": "basecolor",
    "type": "bool"
   },
   {
    "id": "normal",
    "type": "bool"
   },
   {
    "id": "specular",
    "type": "bool"
   },
   {
    "id": "glossiness",
    "type": "bool"
   },
   {
    "id": "roughness",
    "type": "bool"
   },
   {
    "id": "metallic",
    "type": "bool"
   },
   {
    "id": "height",
    "type": "bool"
   },
   {
    "id": "ambient_occlusion",
    "type": "bool"
   },
   {
    "id": "luminosity",
    "type": "float"
   },
   {
    "id": "contrast",
    "type": "float"
   },
   {
    "id": "hue_shift",
    "type": "float"
   },
   {
    "id": "saturation",
    "type": "float"
   },
   {
    "id": "normal_intensity",
    "type": "float"
   },
   {
    "id": "normal_format",
    "type": "int"
   },
   {
    "id": "height_range",
    "type": "float"
   },
   {
    "id": "height_position",
    "type": "float"
   },
   {
    "id": "ao_spreading",
    "type": "float"
   },
   {
    "id": "knots",
    "type": "float"
   },
   {
    "id": "fibers",
    "type": "float"
   },
   {
    "id": "color",
    "type": "float3"
   },
   {
    "id": "base_roughness",
    "type": "float"
   }
  ]
 }
}

// Enum parameters take a value id, not the integer behind it: blendingmode=multiply rather than
// blendingmode=5. The integer is here because SDValueEnum.sFromValue wants it.
export const ENUMS = {
 "sbs::compositing::alignment": [
  {
   "id": "left",
   "value": 0,
   "label": "Left"
  },
  {
   "id": "center",
   "value": 1,
   "label": "Center"
  },
  {
   "id": "right",
   "value": 2,
   "label": "Right"
  }
 ],
 "sbs::compositing::blendingmode": [
  {
   "id": "copy",
   "value": 0,
   "label": "Copy"
  },
  {
   "id": "add",
   "value": 1,
   "label": "Add (linear dodge)"
  },
  {
   "id": "substract",
   "value": 2,
   "label": "Subtract"
  },
  {
   "id": "multiply",
   "value": 3,
   "label": "Multiply"
  },
  {
   "id": "addsub",
   "value": 4,
   "label": "Add sub"
  },
  {
   "id": "max",
   "value": 5,
   "label": "Max (lighten)"
  },
  {
   "id": "min",
   "value": 6,
   "label": "Min (darken)"
  },
  {
   "id": "switch",
   "value": 7,
   "label": "Switch"
  },
  {
   "id": "divide",
   "value": 8,
   "label": "Divide"
  },
  {
   "id": "overlay",
   "value": 9,
   "label": "Overlay"
  },
  {
   "id": "screen",
   "value": 10,
   "label": "Screen"
  },
  {
   "id": "softlight",
   "value": 11,
   "label": "Soft light"
  }
 ],
 "sbs::compositing::channelalpha": [
  {
   "id": "input1red",
   "value": 0,
   "label": "Input 1 red channel"
  },
  {
   "id": "input1green",
   "value": 1,
   "label": "Input 1 green channel"
  },
  {
   "id": "input1blue",
   "value": 2,
   "label": "Input 1 blue channel"
  },
  {
   "id": "input1alpha",
   "value": 3,
   "label": "Input 1 alpha channel"
  },
  {
   "id": "input2red",
   "value": 4,
   "label": "Input 2 red channel"
  },
  {
   "id": "input2green",
   "value": 5,
   "label": "Input 2 green channel"
  },
  {
   "id": "input2blue",
   "value": 6,
   "label": "Input 2 blue channel"
  },
  {
   "id": "input2alpha",
   "value": 7,
   "label": "Input 2 alpha channel"
  }
 ],
 "sbs::compositing::channelblue": [
  {
   "id": "input1red",
   "value": 0,
   "label": "Input 1 red channel"
  },
  {
   "id": "input1green",
   "value": 1,
   "label": "Input 1 green channel"
  },
  {
   "id": "input1blue",
   "value": 2,
   "label": "Input 1 blue channel"
  },
  {
   "id": "input1alpha",
   "value": 3,
   "label": "Input 1 alpha channel"
  },
  {
   "id": "input2red",
   "value": 4,
   "label": "Input 2 red channel"
  },
  {
   "id": "input2green",
   "value": 5,
   "label": "Input 2 green channel"
  },
  {
   "id": "input2blue",
   "value": 6,
   "label": "Input 2 blue channel"
  },
  {
   "id": "input2alpha",
   "value": 7,
   "label": "Input 2 alpha channel"
  }
 ],
 "sbs::compositing::channelgreen": [
  {
   "id": "input1red",
   "value": 0,
   "label": "Input 1 red channel"
  },
  {
   "id": "input1green",
   "value": 1,
   "label": "Input 1 green channel"
  },
  {
   "id": "input1blue",
   "value": 2,
   "label": "Input 1 blue channel"
  },
  {
   "id": "input1alpha",
   "value": 3,
   "label": "Input 1 alpha channel"
  },
  {
   "id": "input2red",
   "value": 4,
   "label": "Input 2 red channel"
  },
  {
   "id": "input2green",
   "value": 5,
   "label": "Input 2 green channel"
  },
  {
   "id": "input2blue",
   "value": 6,
   "label": "Input 2 blue channel"
  },
  {
   "id": "input2alpha",
   "value": 7,
   "label": "Input 2 alpha channel"
  }
 ],
 "sbs::compositing::channelred": [
  {
   "id": "input1red",
   "value": 0,
   "label": "Input 1 red channel"
  },
  {
   "id": "input1green",
   "value": 1,
   "label": "Input 1 green channel"
  },
  {
   "id": "input1blue",
   "value": 2,
   "label": "Input 1 blue channel"
  },
  {
   "id": "input1alpha",
   "value": 3,
   "label": "Input 1 alpha channel"
  },
  {
   "id": "input2red",
   "value": 4,
   "label": "Input 2 red channel"
  },
  {
   "id": "input2green",
   "value": 5,
   "label": "Input 2 green channel"
  },
  {
   "id": "input2blue",
   "value": 6,
   "label": "Input 2 blue channel"
  },
  {
   "id": "input2alpha",
   "value": 7,
   "label": "Input 2 alpha channel"
  }
 ],
 "sbs::compositing::colorblending": [
  {
   "id": "usesourcealpha",
   "value": 0,
   "label": "Use source alpha"
  },
  {
   "id": "ignorealpha",
   "value": 1,
   "label": "Ignore alpha"
  },
  {
   "id": "straight",
   "value": 2,
   "label": "Straight alpha blending"
  },
  {
   "id": "premul",
   "value": 3,
   "label": "Premultiplied alpha blending (copy only)"
  }
 ],
 "sbs::compositing::distancemode": [
  {
   "id": "euclidean",
   "value": 0,
   "label": "Euclidean distance"
  },
  {
   "id": "manhattan",
   "value": 1,
   "label": "Manhattan distance"
  },
  {
   "id": "chebyshev",
   "value": 2,
   "label": "Chebyshev distance"
  }
 ],
 "sbs::compositing::filtering": [
  {
   "id": "bilinear",
   "value": 0,
   "label": "Bilinear"
  },
  {
   "id": "nearest",
   "value": 1,
   "label": "Nearest"
  }
 ],
 "sbs::compositing::format": [
  {
   "id": "8_bits_per_channel",
   "value": 0,
   "label": "8 bits per channel"
  },
  {
   "id": "16_bits_per_channel",
   "value": 1,
   "label": "16 bits per channel"
  },
  {
   "id": "hdr_low_precision",
   "value": 2,
   "label": "HDR low precision (16F)"
  },
  {
   "id": "hdr_high_precision",
   "value": 3,
   "label": "HDR high precision (32F)"
  }
 ],
 "sbs::compositing::mipmapmode": [
  {
   "id": "automatic",
   "value": 0,
   "label": "Automatic"
  },
  {
   "id": "manual",
   "value": 1,
   "label": "Manual"
  }
 ],
 "sbs::compositing::pixelratio": [
  {
   "id": "stretch",
   "value": 0,
   "label": "Stretch"
  },
  {
   "id": "square",
   "value": 1,
   "label": "Square"
  }
 ],
 "sbs::compositing::resizemethod": [
  {
   "id": "stretchbilinear",
   "value": 0,
   "label": "Smooth stretch"
  },
  {
   "id": "stretchnearest",
   "value": 1,
   "label": "Nearest stretch"
  }
 ],
 "sbs::compositing::tiling": [
  {
   "id": "no_tiling",
   "value": 0,
   "label": "No tiling"
  },
  {
   "id": "horizontal_tiling",
   "value": 1,
   "label": "Horizontal tiling"
  },
  {
   "id": "vertical_tiling",
   "value": 2,
   "label": "Vertical tiling"
  },
  {
   "id": "h_and_v_tiling",
   "value": 3,
   "label": "H and V tiling"
  }
 ],
 "sbs::compositing::uvselector": [
  {
   "id": "u",
   "value": 0,
   "label": "Horizontal"
  },
  {
   "id": "v",
   "value": 1,
   "label": "Vertical"
  }
 ]
}

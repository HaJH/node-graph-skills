// GENERATED FILE -- do not edit by hand.
//
//   node substance/tools/generate-outputs.mjs
//
// The usages a graph output may declare, and what each one is called.
//
// Read off Adobe Substance 3D Designer's own metallic-roughness templates -- 01_01_pbr_metallic_roughness.sbs, 03_01_clo_metallic_roughness.sbs, 08_01_axf_to_pbr_metallic_roughness.sbs, 10_01_scan_pbr_metallic_roughness.sbs
// -- which agree with each other on every entry. The other template families do not agree with
// these or with each other, so they are not here; see tools/generate-outputs.mjs.
//
// The key is the usage, which is Adobe's vocabulary: sbsrender selects outputs by it and
// Painter, Sampler and the engine plugins match on these exact strings. The value is the
// identifier, which is ours: nothing inside Substance matches on it, and it is what sbsrender
// writes as {outputNodeName} in the exported filename. A library may rename any of them in its
// own outputs.txt, and may add usages this list does not have.
//
// 22 usages.
// 2 more are tagged on outputs Adobe left unnamed, and are not usable: scatter (output, in 01_01_pbr_metallic_roughness.sbs); scatteringRedShift (output_1, in 01_01_pbr_metallic_roughness.sbs).

export const OUTPUTS = {
 "IOR": "ior",
 "ambientOcclusion": "ambientocclusion",
 "anisotropyAngle": "anisotropyangle",
 "anisotropyLevel": "anisotropylevel",
 "baseColor": "basecolor",
 "coatColor": "coatcolor",
 "coatNormal": "coatnormal",
 "coatOpacity": "coatopacity",
 "coatRoughness": "coatroughness",
 "coatSpecularLevel": "coatspecularlevel",
 "height": "height",
 "metallic": "metallic",
 "normal": "normal",
 "opacity": "opacity",
 "roughness": "roughness",
 "scatteringDistanceScale": "scatteringdistancescale",
 "sheenColor": "sheencolor",
 "sheenOpacity": "sheenopacity",
 "sheenRoughness": "sheenroughness",
 "specularEdgeColor": "specularedgecolor",
 "specularLevel": "specularlevel",
 "translucency": "translucency"
}

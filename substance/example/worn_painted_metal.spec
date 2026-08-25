graph worn_painted_metal

# Chipped paint over brushed steel panels, height first.
# Height drives the normal, the normal drives curvature, curvature drives the wear mask,
# and that one mask drives both basecolor and roughness -- so the chips line up.

# -- height: brushed steel under a bevelled panel grid --------------------------------
brushed    anisotropic_noise_v2    X_Amount=4 Y_Amount=64 disorder=0.12 smoothness=1.5
panels     tile_generator          x_amount=2 y_amount=3 scale=0.97
plate      bevel                   distance=0.01 smoothing=4 normal_intensity=1
seams      height_blend            height_position=0.5 contrast=0.4 opacity=0.65

# -- scratches carved into that height ------------------------------------------------
scratch    scratches_generator     spline_number=48 spline_width=0.1 spline_distortion=0.3
carve      blend                   opacitymult=0.3
erode      slope_blur_grayscale_2  Samples=16 Intensity=0.35

# -- height and normal out ------------------------------------------------------------
tonormal   normal                  intensity=6
height     output      usage=height
normal     output      usage=normal

# -- wear mask: curvature of that normal, scanned to the exposed edges ----------------
curv       curvature_smooth_v2     radius=1.5
edges      histogram_scan          Position=0.62 Contrast=0.8
grunge     grunge_scratches_rough  scratch_quantity=0.45 Contrast=0.3
chip       blend                   opacitymult=0.75

# -- basecolor: bare steel showing through the paint ----------------------------------
paint      uniform                 colorswitch=true outputcolor=[0.09,0.25,0.28,1]
steel      uniform                 colorswitch=true outputcolor=[0.44,0.42,0.40,1]
albedo     blend
basecolor  output      usage=baseColor:RGBA:sRGB

# -- roughness: paint is smoother than the steel it has come off ----------------------
roughbase  levels                  levelinlow=[0.3,0.3,0.3,0] levelinhigh=[0.75,0.75,0.75,1]
roughmix   blend                   opacitymult=0.9
roughness  output      usage=roughness

# -- wires ----------------------------------------------------------------------------
panels        -> plate.input
plate.height  -> seams.height_bottom
brushed       -> seams.height_top

seams.blended_height -> carve.destination
scratch       -> carve.source
carve         -> erode.Source
scratch       -> erode.Effect

erode         -> height
erode         -> tonormal
tonormal      -> normal

tonormal      -> curv.input
curv.curvature -> edges.Input_1
edges         -> chip.destination
grunge        -> chip.source

paint         -> albedo.destination
steel         -> albedo.source
chip          -> albedo.opacity
albedo        -> basecolor

erode         -> roughbase
roughbase     -> roughmix.destination
grunge        -> roughmix.source
chip          -> roughmix.opacity
roughmix      -> roughness

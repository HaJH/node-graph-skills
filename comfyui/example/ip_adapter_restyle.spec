graph ip_adapter_restyle
# Repaint an input image in the style of a set of reference sheets: SDXL img2img steered by IP-Adapter.
#
# The workflow that cleared the round-trip gate, written out by hand. Two reference sheets are
# batched and flattened by a GLSL shader into the one style image IP-Adapter reads; the input
# image is scaled, encoded, and repainted at denoise 0.8.

subject  PrimitiveStringMultiline  $title="Subject" value="a burst of healing light"
seed     PrimitiveInt              $title="Seed" value=1234

input    LoadImage   $title="Input image" image=example.png
scaled   ImageScale  upscale_method=lanczos width=1024 height=1024 crop=center

# Layer sheets: colour in the image, the layer's alpha in the mask.
ref_a    LoadImage        $title="Reference A" image=example.png $collapsed=true
ref_b    LoadImage        $title="Reference B" image=example.png $collapsed=true
colours  BatchImagesNode
alphas   BatchMasksNode
alpha    MaskToImage

# Three quadrants of each sheet, composited over black. The fourth is background and dropped.
flatten  GLSLShader  $title="Flatten sheets" size_mode=custom size_mode.width=1024 size_mode.height=1024 fragment_shader="""
#version 300 es
precision highp float;

uniform sampler2D u_image0;
uniform sampler2D u_image1;

in vec2 v_texCoord;
layout(location = 0) out vec4 fragColor0;

vec3 over(vec3 under, vec2 quadrant) {
    vec2 uv = v_texCoord * 0.5 + quadrant;
    float alpha = 1.0 - texture(u_image1, uv).r;
    return mix(under, texture(u_image0, uv).rgb, alpha);
}

void main() {
    vec3 color = vec3(0.0);
    color = over(color, vec2(0.0, 0.0));
    color = over(color, vec2(0.5, 0.5));
    color = over(color, vec2(0.0, 0.5));
    fragColor0 = vec4(color, 1.0);
}
"""

prompt       StringReplace           string="game ability icon of {subject}, black background" find="{subject}"
ckpt         CheckpointLoaderSimple  ckpt_name=sd_xl_base_1.0.safetensors
ipadapter    IPAdapterModelLoader    ipadapter_file=ip-adapter-plus_sdxl_vit-h.safetensors
clip_vision  CLIPVisionLoader        clip_name=CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors
style        IPAdapterAdvanced       weight=0.8 weight_type="style transfer" combine_embeds=average embeds_scaling="V only"
positive     CLIPTextEncode
negative     CLIPTextEncode          text="frame, border, text, watermark, person, character, scenery"
encode       VAEEncode
sampler      KSampler                steps=30 cfg=6 sampler_name=dpmpp_2m scheduler=karras denoise=0.8
decode       VAEDecode
save         SaveImage               filename_prefix=restyle/icon

input -> scaled

ref_a.IMAGE -> colours.images
ref_b.IMAGE -> colours.images
ref_a.MASK  -> alphas.masks
ref_b.MASK  -> alphas.masks
alphas  -> alpha
colours -> flatten.images
alpha   -> flatten.images

subject -> prompt.replace
prompt  -> positive.text
ckpt    -> positive
ckpt    -> negative

ckpt        -> style
ipadapter   -> style
flatten.IMAGE0 -> style.image
clip_vision -> style

scaled -> encode
ckpt   -> encode
style    -> sampler
positive -> sampler.positive
negative -> sampler.negative
encode   -> sampler
seed     -> sampler.seed
sampler  -> decode
ckpt     -> decode
decode   -> save

group "Inputs" subject seed $color="#3f789e"
group "Input image" input scaled $color="#88AA88"
group "Style references" ref_a ref_b colours alphas alpha flatten $color="#b58b2a"
group "Restyle - SDXL + IP-Adapter" prompt ckpt ipadapter clip_vision style positive negative encode sampler decode save $color="#a1309b"

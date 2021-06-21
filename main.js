Webcam.set({
    height : 300,
    width : 300,
    image_format : "jpeg",
    png_quality : 90,

    constraints:{
    facingMode : "environment"
    }
})

Webcam.attach("camcam")
function openCvReady() {
    cv['onRuntimeInitialized'] = () => {
        console.trace('cv ready')
        
        //read an image from the image source and convert it to opencv format
        let imgInput = cv.imread('img-main');
        cv.imshow('main-canvas', imgInput);
        imgInput.delete();

    }
}
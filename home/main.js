function openCvReady() {
    cv['onRuntimeInitialized'] = () => {
        console.trace('cv ready')

    
        let imgInput = cv.imread('img-main');
        let imgGray = imgInput.clone();
        let imgCanny = imgInput.clone();
        let imgBlur = new cv.Mat();
        let imgFilter = new cv.Mat();

        

        //convert the image to grayscale
        cv.cvtColor(imgInput, imgGray, cv.COLOR_RGBA2GRAY, 0);

        //blur the image
        let ksize = new cv.Size(20, 20);
        let anchor = new cv.Point(-1, -1);
        cv.blur(imgInput, imgBlur, ksize, anchor, cv.BORDER_DEFAULT);

        //filter the image
        let M = cv.Mat.eye(3, 3, cv.CV_32FC1);
        let anchor2 = new cv.Point(-1, -1);
        cv.filter2D(imgInput, imgFilter, cv.CV_8U, M, anchor2, 0, cv.BORDER_DEFAULT);

        //find the edges
        cv.Canny(imgInput, imgCanny, 50, 100);

       
        cv.imshow('main-canvas', imgFilter);
        imgInput.delete();
        imgGray.delete();
        imgBlur.delete();
        imgCanny.delete();

        imgFilter.delete();
        M.delete();


    }
}
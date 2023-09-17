function openCvReady() {
    cv['onRuntimeInitialized'] = () => {
        console.trace('cv ready')

        let imgInput = cv.imread('img-main');

        // RGB Button
        document.getElementById("button-rgb").onclick = function () {
            let imgInput = cv.imread('img-main');
            cv.imshow('main-canvas', imgInput);
            imgInput.delete();
            console.log("rgb");
        }

        // GRAY Button
        document.getElementById("button-gray").onclick = function () {
            let imgInput = cv.imread('img-main');
            let imgGray = imgInput.clone();
            cv.cvtColor(imgInput, imgGray, cv.COLOR_RGBA2GRAY, 0);
            cv.imshow('main-canvas', imgGray);
            imgInput.delete();
            imgGray.delete();
        }

        // BLUR Button
        document.getElementById("button-blur").onclick = function () {
            let imgInput = cv.imread('img-main');
            let imgBlur = new cv.Mat();
            let ksize = new cv.Size(20, 20);
            let anchor = new cv.Point(-1, -1);
            cv.blur(imgInput, imgBlur, ksize, anchor, cv.BORDER_DEFAULT);
            cv.imshow('main-canvas', imgBlur);
            imgInput.delete();
            imgBlur.delete();
        }

        // FILTER Button
        document.getElementById("button-filter").onclick = function () {
            let imgInput = cv.imread('img-main');
            let imgFilter = new cv.Mat();
            let M = cv.Mat.eye(3, 3, cv.CV_32FC1);
            let anchor2 = new cv.Point(-1, -1);
            cv.filter2D(imgInput, imgFilter, cv.CV_8U, M, anchor2, 0, cv.BORDER_DEFAULT);
            cv.imshow('main-canvas', imgFilter);
            imgInput.delete();
            imgFilter.delete();
            M.delete();
        }

        // CANNY Button
        document.getElementById("button-canny").onclick = function () {
            let imgInput = cv.imread('img-main');
            let imgCanny = new cv.Mat();
            cv.Canny(imgInput, imgCanny, 50, 100);
            cv.imshow('main-canvas', imgCanny);
            imgInput.delete();
            imgCanny.delete();
        }

        cv.imshow('main-canvas', imgInput);
        imgInput.delete();
    }
}
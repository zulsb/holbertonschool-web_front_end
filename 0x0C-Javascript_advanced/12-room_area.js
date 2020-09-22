let roomDimensions = new Object();
roomDimensions.width = 50;
roomDimensions.length = 100;
roomDimensions.getArea = function () {
    return this.width * this.length;
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

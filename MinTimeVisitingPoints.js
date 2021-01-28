var minTimeToVisitAllPoints = function(points) {
  let currentPointX = points[0][0]
  let currentPointY = points[0][1]
  let time = 0
  points.forEach((point)=>{
      while(point[0] !== currentPointX || point[1] !== currentPointY){
          if(point[0] !== currentPointX && point[1] !== currentPointY){
              // both x and y coordinates are different
              if(currentPointX < point[0]){
                  currentPointX += 1
              }else if(currentPointX > point[0]){
                  currentPointX -= 1
              }
              if(currentPointY < point[1]){
                  currentPointY += 1
              }else if(currentPointY > point[1]){
                  currentPointY -= 1
              }
              time += 1
          }else if(point[0] !== currentPointX){
              // just the x coordinate is different
              if(currentPointX < point[0]){
                  currentPointX += 1
              }else if(currentPointX > point[0]){
                  currentPointX -= 1
              }
              time += 1
          }else if(point[1] !== currentPointY){
              // just the y coordinate is different
              if(currentPointY < point[1]){
                  currentPointY += 1
              }else if(currentPointY > point[1]){
                  currentPointY -= 1
              }
              time += 1
          }
      }
  })
  return time
};

const points1 = [[1,1],[3,4],[-1,0]]


console.log(minTimeToVisitAllPoints(points1)) // expected output = 7


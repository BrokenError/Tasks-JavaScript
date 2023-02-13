function findOutlier(integers){
  var arr1 = integers.filter(a => a % 2 === 0);
  var arr2 = integers.filter(a  => a % 2 !== 0);
  return arr1.length === 1 ? arr1[0] : arr2[0];
}
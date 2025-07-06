export function twoSum(nums: number[], target: number): number[] {
   let sumMap: { [key: string]: number } = {};

   for(let i=0; i<nums.length; i++){
    const more = target - nums[i];

    if(more in sumMap){
        return [sumMap[more], i];
    }
    sumMap[nums[i]] = i;
   }
   return [];
}

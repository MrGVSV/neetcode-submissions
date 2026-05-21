impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        if nums.is_empty() {
            return 0;
        }

        let mut num_set = HashSet::<i32>::from_iter(nums.iter().copied());
        
        let mut max = 1;

        for num in nums {
            if num_set.contains(&(num - 1)) {
                continue;
            }

            let mut next = num + 1;
            let mut count = 1;

            while num_set.remove(&next) {
                count += 1;
                next += 1;
            }

            max = max.max(count);
        }

        max
    }
}

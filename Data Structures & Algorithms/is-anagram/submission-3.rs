impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let mut map = HashMap::<char, u16>::with_capacity(s.len());
        for c in s.chars() {
            let mut entry = map.entry(c).or_default();
            *entry += 1;
        }

        for c in t.chars() {
            let mut entry = map.entry(c).or_default();
            if *entry == 0 {
                return false;
            }

            *entry -= 1;
        }

        for (_, v) in map {
            if v > 0 {
                return false;
            }
        }

        return true;
    }
}

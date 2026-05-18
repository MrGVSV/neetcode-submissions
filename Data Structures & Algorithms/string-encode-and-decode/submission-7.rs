impl Solution {
    pub fn encode(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return String::new();
        }

        let len = strs.len();
        strs.into_iter().enumerate().map(|(i, str)| if str.is_empty() {String::from("ε")} else {str} + if i + 1 == len {""} else {"∧"}).collect()
    }

    pub fn decode(s: String) -> Vec<String> {
        if s.is_empty() {
            return Vec::new();
        }
        s.split('∧').map(|str| if str == "ε" {""} else {str}.to_string()).collect()
    }
}

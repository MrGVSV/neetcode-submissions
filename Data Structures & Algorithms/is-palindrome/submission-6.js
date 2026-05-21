class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 0) {
            return false;
        }
        if (s.length === 1) {
            return true;
        }

        let leftIndex = 0;
        let rightIndex = s.length - 1;

        while (leftIndex < rightIndex) {
            while (!this.isAlphanumeric(s[leftIndex]) && leftIndex < rightIndex) {
                leftIndex++;
            }

            while (!this.isAlphanumeric(s[rightIndex]) && leftIndex < rightIndex) {
                rightIndex--;
            }

            const left = this.toNormalized(s[leftIndex]);
            const right = this.toNormalized(s[rightIndex]);
            if (left !== right) {
                return false;
            }

            leftIndex++;
            rightIndex--;
        }

        return true;
    }

    isAlphanumeric(s) {
        return (s >= "a" && s <= "z") || (s >= "A" && s <= "Z") || (s >= "0" && s <= "9");
    }

    toNormalized(s) {
        if (s >= "a" && s <= "z") {
            return s;
        }

        if (s >= "0" && s <= "9") {
            return s;
        }

        if (s >= "A" && s <= "Z") {
            return String.fromCharCode(s.charCodeAt(0) + 32);
        }

        return "";
    }
}

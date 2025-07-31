public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if(strs == null || strs.Length == 0) return "";

        string prefix = strs [0]; // ambil string pertama sebagai awalan awal 
        for (int i =1; i < strs.Length; i++) { 
            while(strs[i].IndexOf(prefix) != 0) { 
                prefix =prefix.Substring(0, prefix.Length -1); // kurangi prefix satu huruf dari belakang
                if (string.IsNullOrEmpty(prefix)) return ""; // jika sudah kosong, return " "

            }
        }
        return prefix; 
    }
}
public class Solution { 
public bool IsPalindrome(int x) { 
    string original = x.ToString(); // ubah integer menjadi string
    char[] chars = original.ToCharArray(); // ubah menjadi array karakter
    Array.Reverse(chars); // balik array
    
    string reversed = new string(chars); // buat string bari dari array yang dibalik
    return original == reversed; // bandingkan
}

}
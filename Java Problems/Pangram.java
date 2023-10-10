import java.util.Scanner;
import java.util.HashSet;
import java.util.Set;

public class Pangram {
    public static boolean checkPangram(String str) {
        Set<Character> charSet = new HashSet<>();
        for (char ch : str.toCharArray()) {
            if (Character.isLetter(ch)) {
                charSet.add(ch);
            }
        }
        return charSet.size() == 26;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter a String ");
        String str = s.nextLine().toLowerCase();
        boolean Pangram = checkPangram(str);
        if (Pangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        s.close();
    }
}

import java.util.Collections;
import java.util.List;
import java.util.Arrays;

public class ArraySuffel {
    public static void main(String[] args){

        //create the initial array
        Integer[] initialArray = {1, 2, 3, 4, 5, 6, 7};

        // convert the array to list
        List<Integer> list = Arrays.asList(initialArray);

        Collections.shuffle(list);

        // convert the suffeled list to array
        Integer[] arraySuffel = list.toArray(new Integer[0]);

        System.out.println("Suffled array: "+ Arrays.toString(arraySuffel));
    }
}
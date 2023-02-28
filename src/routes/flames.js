
// @ts-ignore
export function Flames(name1, name2) {


    /* DECLARING VARIABLES*/
    var i, j, no_of_chars, n, index, chars, S_half, F_half, relation;

    /*CHANGING THE INPUT NAMES TO LOWERCASE AND ADDING CHARACTERS INTO AN ARRAY*/
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    var list1 = []
    var list2 = []
    for (i = 0; i < name1.length; i++) {
        list1.push(name1[i]);
    }
    for (i = 0; i < name2.length; i++) {
        list2.push(name2[i]);
    }


    /*CANCELLING THE SAME CHARACTERS FROM BOTH ARRAYS*/
    for (i = 0; i < list1.length; i++) {
        for (j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                list1.splice(i, 1);
                list2.splice(j, 1);
                break;
            }
        }
    }
    no_of_chars = list1.length + list2.length;


    /*CALCULATING FLAMES*/
    chars = ['F', 'L', 'A', 'M', 'E', 'S'];

    for (i = 0; i < 5; i++) {
        n = chars.length;
        index = (no_of_chars % n)
        if (index === 0) {
            chars.splice((chars.length - 1), 1)
        }
        else {
            S_half = chars.slice(index,);
            F_half = chars.slice(0, index - 1);
            chars = [];
            chars = S_half.concat(F_half);
        }
    }

    relation = chars[0];
    console.log(relation);
    return relation;

}

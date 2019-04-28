/**
 *	Node Correspondence Value
 * n is total services
 * a is total number of consistent pairs
 * b is a total number of variant pairs among two lists
 * n(n-1)/ is the total number of pairs
 */
function CV(x, y) {
    a = 1;
    b = 1;
    n = 1;
    cv = (a - b) / (n * ( n - 1)/2 );
    return cv ;
}

/**
 * Preferred nodes
 * S(x) service rank of node x
 * S(y) service rank of node y
 * the greater the value the more service x is reliable than service y
 **/
function P(x, y) {
    p = S(x) - S(y);
    return p;
}
/**
 * Priority Value of service x
 */
function PV(){
    sum = P(x, y);
    return sum;
}
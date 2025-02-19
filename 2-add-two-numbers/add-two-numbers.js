/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);  // Dummy node to make it easier to handle the head of the result list
    let current = dummyHead;  // Pointer to build the new list
    let carry = 0;  // To store carry during addition

    // Traverse both lists while there are still nodes or a carry value
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;  // Start with the carry value
        
        // Add value from l1 if it exists
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;  // Move to the next node in l1
        }
        
        // Add value from l2 if it exists
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;  // Move to the next node in l2
        }
        
        // Update the carry for the next iteration
        carry = Math.floor(sum / 10);  // If sum >= 10, carry will be 1
        current.next = new ListNode(sum % 10);  // Create a new node with the current digit
        current = current.next;  // Move to the next node in the result list
    }

    return dummyHead.next;  // The actual result starts from the next node of dummyHead
};

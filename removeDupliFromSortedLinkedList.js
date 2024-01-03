/*Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:
1->1->2
= 1->2

Input: head = [1,1,2]
Output: [1,2]
Example 2:
1->1->2->3->3
= 1->2->3
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {};

const result = deleteDuplicates();
console.log(result);
